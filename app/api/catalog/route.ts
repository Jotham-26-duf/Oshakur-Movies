import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { logCatalogError } from "@/lib/catalog-api";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: metrics, error } = await supabase.rpc("catalog_get_metrics");
    if (error) {
      logCatalogError("get-metrics", error);
      return NextResponse.json({ error: "Catalog storage is unavailable." }, { status: 503 });
    }
    const known = new Set([...movies.map((item) => `movie:${item.slug}`), ...series.map((item) => `series:${item.slug}`)]);
    return NextResponse.json({
      metrics: (metrics ?? []).filter((item: { content_type: string; slug: string }) => known.has(`${item.content_type}:${item.slug}`)),
    }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    logCatalogError("get", error);
    return NextResponse.json({ error: "Catalog storage is unavailable." }, { status: 503 });
  }
}
