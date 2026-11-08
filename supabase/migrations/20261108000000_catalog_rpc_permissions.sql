-- Keep the catalog RPCs available to the app's supported roles only.
-- PostgreSQL grants EXECUTE to PUBLIC by default when functions are created.
revoke all on function public.catalog_get_metrics() from public;
revoke all on function public.catalog_track_view(uuid, text, text) from public;
revoke all on function public.catalog_list_favorites(uuid) from public;
revoke all on function public.catalog_set_favorite(uuid, text, text, boolean) from public;

grant execute on function public.catalog_get_metrics() to anon, authenticated;
grant execute on function public.catalog_track_view(uuid, text, text) to anon, authenticated;
grant execute on function public.catalog_list_favorites(uuid) to anon, authenticated;
grant execute on function public.catalog_set_favorite(uuid, text, text, boolean) to anon, authenticated;

notify pgrst, 'reload schema';
