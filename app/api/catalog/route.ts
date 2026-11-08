import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { isCatalogUuid, logCatalogError } from "@/lib/catalog-api";

const validItem = (type: unknown, slug: unknown) =>
  (type === "movie" && movies.some((item) => item.slug === slug)) ||
  (type === "series" && series.some((item) => item.slug === slug));

export async function GET(request: Request) {
  try {
    const visitorId = new URL(request.url).searchParams.get("visitorId");
    if (visitorId !== null && !isCatalogUuid(visitorId)) {
      return NextResponse.json({ error: "Invalid visitor identifier." }, { status: 400 });
    }
    const supabase = await createClient();
    const [metricsResult, favoritesResult] = await Promise.all([
      supabase.rpc("catalog_get_metrics"),
      supabase.rpc("catalog_list_favorites", { p_visitor_id: visitorId }),
    ]);
    if (metricsResult.error || favoritesResult.error) {
      if (metricsResult.error) logCatalogError("get-metrics", metricsResult.error);
      if (favoritesResult.error) logCatalogError("list-favorites", favoritesResult.error);
      return NextResponse.json({ error: "Catalog storage is unavailable." }, { status: 503 });
    }
    const metrics = metricsResult.data;
    const favorites = favoritesResult.data;
    const known = new Set([...movies.map((item) => `movie:${item.slug}`), ...series.map((item) => `series:${item.slug}`)]);
    return NextResponse.json({
      metrics: (metrics ?? []).filter((item: { content_type: string; slug: string }) => known.has(`${item.content_type}:${item.slug}`)),
      favorites: (favorites ?? []).filter((item: { content_type: string; slug: string }) => validItem(item.content_type, item.slug)),
    });
  } catch (error) {
    logCatalogError("get", error);
    return NextResponse.json({ error: "Catalog storage is unavailable." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      const parsed: unknown = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return NextResponse.json({ error: "Invalid favorite request." }, { status: 400 });
      }
      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid favorite request." }, { status: 400 });
    }
    const contentType = body.contentType;
    const slug = body.slug;
    const favorite = body.favorite;
    const visitorId = body.visitorId;
    if (!validItem(contentType, slug)) return NextResponse.json({ error: "Unknown catalog item." }, { status: 400 });
    if ((contentType !== "movie" && contentType !== "series") || typeof slug !== "string") {
      return NextResponse.json({ error: "Unknown catalog item." }, { status: 400 });
    }
    if (typeof favorite !== "boolean") return NextResponse.json({ error: "Invalid favorite state." }, { status: 400 });
    if (visitorId !== undefined && visitorId !== null && !isCatalogUuid(visitorId)) {
      return NextResponse.json({ error: "Invalid visitor identifier." }, { status: 400 });
    }
    const supabase = await createClient();
    const { data, error } = await supabase.rpc("catalog_set_favorite", {
      p_visitor_id: typeof visitorId === "string" ? visitorId : null,
      p_content_type: contentType,
      p_slug: slug,
      p_favorite: favorite,
    });
    if (error) {
      logCatalogError("set-favorite", error);
      return NextResponse.json({ error: "Unable to save this favorite." }, { status: 503 });
    }
    if (data !== favorite) {
      logCatalogError("set-favorite", new Error("RPC returned an unexpected favorite state"));
      return NextResponse.json({ error: "Unable to confirm this favorite change." }, { status: 502 });
    }
    return NextResponse.json({ favorite: data });
  } catch (error) {
    logCatalogError("set-favorite", error);
    return NextResponse.json({ error: "Unable to save this favorite." }, { status: 503 });
  }
}
