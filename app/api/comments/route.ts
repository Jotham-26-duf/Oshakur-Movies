import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const movieSlug = searchParams.get("movieSlug");
    const seriesSlug = searchParams.get("seriesSlug");

    if (!movieSlug && !seriesSlug) {
      return NextResponse.json(
        { error: "Movie slug or series slug is required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    let query = supabase
      .from("comments")
      .select("*")
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: true });

    if (movieSlug) {
      query = query.eq("movie_slug", movieSlug);
    } else {
      query = query.eq("series_slug", seriesSlug);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error loading comments:", error);

      return NextResponse.json(
        { error: "Unable to load comments." },
        { status: 500 }
      );
    }

    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error("Comments GET error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      movieSlug,
      seriesSlug,
      username,
      avatarUrl,
      content,
      parentId,
    } = body;

    const trimmedContent = String(content ?? "").trim();

    if (!trimmedContent) {
      return NextResponse.json(
        { error: "Comment content is required." },
        { status: 400 }
      );
    }

    if (!movieSlug && !seriesSlug) {
      return NextResponse.json(
        { error: "Movie slug or series slug is required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const finalUsername =
      String(username ?? "").trim() ||
      user?.user_metadata?.username ||
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      user?.email?.split("@")[0] ||
      "Guest";

    const { data, error } = await supabase
      .from("comments")
      .insert({
        movie_slug: movieSlug || null,
        series_slug: seriesSlug || null,
        user_id: user?.id ?? null,
        username: finalUsername,
        avatar_url:
          avatarUrl ||
          user?.user_metadata?.avatar_url ||
          null,
        content: trimmedContent,
        parent_id: parentId || null,
        is_pinned: false,
        is_admin: false,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Error posting comment:", error);

      return NextResponse.json(
        { error: "Unable to post comment." },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Comments POST error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}