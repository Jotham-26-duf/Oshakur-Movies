"use client";

import { useState } from "react";

function youtubeEmbedUrl(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    let id: string | null = null;
    if (host === "youtu.be") id = url.pathname.split("/").filter(Boolean)[0] ?? null;
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/")[2] ?? null;
      else if (url.pathname.startsWith("/shorts/")) id = url.pathname.split("/")[2] ?? null;
    }
    if (!id || !/^[\w-]{11}$/.test(id)) return null;

    const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
    const start = url.searchParams.get("start") ?? url.searchParams.get("t");
    if (start) {
      const seconds = /^\d+$/.test(start)
        ? Number(start)
        : start.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
      const startSeconds = typeof seconds === "number"
        ? seconds
        : seconds
          ? Number(seconds[1] ?? 0) * 3600 + Number(seconds[2] ?? 0) * 60 + Number(seconds[3] ?? 0)
          : 0;
      if (startSeconds > 0) embedUrl.searchParams.set("start", String(startSeconds));
    }
    return embedUrl.toString();
  } catch {
    return null;
  }
}

export default function TrailerPlayer({ trailer }: { trailer?: string }) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const embedUrl = youtubeEmbedUrl(trailer);
  const heading = <h2 className="cinema-section-title mb-4 text-xl font-bold sm:text-2xl">Official Trailer</h2>;

  if (!embedUrl) {
    return <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">{heading}<p className="text-sm text-white/55">No trailer is available for this title yet.</p></section>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      {heading}
      {embedFailed ? (
        <div className="rounded-2xl border border-white/10 bg-black p-6 text-sm text-white/70">
          <p>This trailer can’t be played here. You can watch it on YouTube.</p>
          <a href={trailer} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-lg bg-[#E50914] px-4 py-2 font-semibold text-white transition hover:bg-[#FF2633]">Open trailer on YouTube</a>
        </div>
      ) : (
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
          <iframe src={embedUrl} title="Official trailer" className="h-full w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen onError={() => setEmbedFailed(true)} />
        </div>
      )}
    </section>
  );
}
