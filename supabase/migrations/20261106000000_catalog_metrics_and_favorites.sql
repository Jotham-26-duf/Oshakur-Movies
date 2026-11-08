
-- =========================================================
-- 1. CREATE CATALOG TABLES
-- =========================================================

create table if not exists public.catalog_metrics (
  content_type text not null check (content_type in ('movie', 'series')),
  slug text not null,
  view_count bigint not null default 0 check (view_count >= 0),
  primary key (content_type, slug)
);

create table if not exists public.catalog_favorites (
  id bigint generated always as identity primary key,
  content_type text not null check (content_type in ('movie', 'series')),
  slug text not null,
  user_id uuid references auth.users(id) on delete cascade,
  visitor_id uuid,
  created_at timestamptz not null default now(),
  constraint catalog_favorites_owner
    check ((user_id is null) <> (visitor_id is null))
);

create unique index if not exists catalog_favorites_user_content
  on public.catalog_favorites(user_id, content_type, slug)
  where user_id is not null;

create unique index if not exists catalog_favorites_visitor_content
  on public.catalog_favorites(visitor_id, content_type, slug)
  where visitor_id is not null;

create table if not exists public.catalog_view_events (
  event_id uuid primary key,
  content_type text not null check (content_type in ('movie', 'series')),
  slug text not null,
  created_at timestamptz not null default now()
);

-- =========================================================
-- 2. ENABLE ROW LEVEL SECURITY
-- =========================================================

alter table public.catalog_metrics enable row level security;
alter table public.catalog_favorites enable row level security;
alter table public.catalog_view_events enable row level security;

-- =========================================================
-- 3. GET CATALOG METRICS
-- =========================================================

create or replace function public.catalog_get_metrics()
returns table(content_type text, slug text, view_count bigint)
language sql
security definer
set search_path = public
as $$
  select m.content_type, m.slug, m.view_count
  from public.catalog_metrics m;
$$;

-- =========================================================
-- 4. TRACK CATALOG VIEWS
-- =========================================================

create or replace function public.catalog_track_view(
  p_event_id uuid,
  p_content_type text,
  p_slug text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  updated_count bigint;
begin
  if p_content_type not in ('movie', 'series')
     or length(p_slug) not between 1 and 200 then
    raise exception 'Invalid catalog item';
  end if;

  insert into public.catalog_view_events(
    event_id,
    content_type,
    slug
  )
  values (
    p_event_id,
    p_content_type,
    p_slug
  )
  on conflict (event_id) do nothing;

  if not found then
    select m.view_count
    into updated_count
    from public.catalog_metrics m
    where m.content_type = p_content_type
      and m.slug = p_slug;

    return coalesce(updated_count, 0);
  end if;

  insert into public.catalog_metrics(
    content_type,
    slug,
    view_count
  )
  values (
    p_content_type,
    p_slug,
    1
  )
  on conflict (content_type, slug)
  do update set
    view_count = catalog_metrics.view_count + 1
  returning view_count into updated_count;

  return updated_count;
end;
$$;

-- =========================================================
-- 5. LIST FAVORITES
-- =========================================================

create or replace function public.catalog_list_favorites(
  p_visitor_id uuid
)
returns table(content_type text, slug text)
language sql
security definer
set search_path = public
as $$
  select f.content_type, f.slug
  from public.catalog_favorites f
  where
    (auth.uid() is not null and f.user_id = auth.uid())
    or
    (auth.uid() is null
      and p_visitor_id is not null
      and f.visitor_id = p_visitor_id);
$$;

-- =========================================================
-- 6. ADD OR REMOVE FAVORITES
-- =========================================================

create or replace function public.catalog_set_favorite(
  p_visitor_id uuid,
  p_content_type text,
  p_slug text,
  p_favorite boolean
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  owner_user uuid := auth.uid();
begin
  if p_content_type not in ('movie', 'series')
     or length(p_slug) not between 1 and 200 then
    raise exception 'Invalid catalog item';
  end if;

  if owner_user is null and p_visitor_id is null then
    raise exception 'Visitor identifier required';
  end if;

  if p_favorite then
    insert into public.catalog_favorites(
      content_type,
      slug,
      user_id,
      visitor_id
    )
    values (
      p_content_type,
      p_slug,
      owner_user,
      case when owner_user is null then p_visitor_id else null end
    )
    on conflict do nothing;

  elsif owner_user is not null then
    delete from public.catalog_favorites
    where user_id = owner_user
      and content_type = p_content_type
      and slug = p_slug;

  else
    delete from public.catalog_favorites
    where visitor_id = p_visitor_id
      and content_type = p_content_type
      and slug = p_slug;
  end if;

  return p_favorite;
end;
$$;

-- =========================================================
-- 7. SECURITY: REMOVE DEFAULT PUBLIC EXECUTION
-- =========================================================

revoke execute on function public.catalog_get_metrics()
  from public;

revoke execute on function public.catalog_track_view(uuid, text, text)
  from public;

revoke execute on function public.catalog_list_favorites(uuid)
  from public;

revoke execute on function public.catalog_set_favorite(uuid, text, text, boolean)
  from public;

-- =========================================================
-- 8. GRANT EXECUTION TO APPLICATION ROLES
-- =========================================================

grant execute on function public.catalog_get_metrics()
  to anon, authenticated;

grant execute on function public.catalog_track_view(uuid, text, text)
  to anon, authenticated;

grant execute on function public.catalog_list_favorites(uuid)
  to anon, authenticated;

grant execute on function public.catalog_set_favorite(uuid, text, text, boolean)
  to anon, authenticated;

-- =========================================================
-- END OF BASE MIGRATION
-- =========================================================
