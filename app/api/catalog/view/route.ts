import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { isCatalogUuid, logCatalogError } from "@/lib/catalog-api";

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      const parsed: unknown = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return NextResponse.json({ error: "Invalid view event." }, { status: 400 });
      }
      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid view event." }, { status: 400 });
    }
    const allowed = body.contentType === "movie"
      ? movies.some((item) => item.slug === body.slug)
      : body.contentType === "series" && series.some((item) => item.slug === body.slug);
    if (!allowed || !isCatalogUuid(body.eventId)) {
      return NextResponse.json({ error: "Invalid view event." }, { status: 400 });
    }
    const supabase = await createClient();
    const { data, error } = await supabase.rpc("catalog_track_view", {
      p_event_id: body.eventId,
      p_content_type: body.contentType,
      p_slug: body.slug,
    });
    if (error) {
      logCatalogError("track-view", error);
      return NextResponse.json({ error: "Unable to record this view." }, { status: 503 });
    }
    const views = Number(data);
    if (!Number.isSafeInteger(views) || views < 0) {
      logCatalogError("track-view", new Error("RPC returned an invalid view count"));
      return NextResponse.json({ error: "Unable to confirm this view." }, { status: 502 });
    }
    return NextResponse.json({ views });
  } catch (error) {
    logCatalogError("track-view", error);
    return NextResponse.json({ error: "Unable to record this view." }, { status: 503 });
  }
}
