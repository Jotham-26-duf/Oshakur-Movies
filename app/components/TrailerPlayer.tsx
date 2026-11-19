"use client";

import { useState } from "react";
import PosterImage, { getPosterImageSrc } from "./PosterImage";

interface TrailerInfo {
  type: "movie" | "series";
  title: string;
  image: string;
  year: string;
  genres: string[];
  language: string;
  rating?: string;
}

function parseTrailer(value?: string): { embedUrl: string; watchUrl: string; provider: string } | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (host === "youtu.be" || host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      let id: string | null = null;
      if (host === "youtu.be") id = url.pathname.split("/").filter(Boolean)[0] ?? null;
      else if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (/^\/(embed|shorts|live)\//.test(url.pathname)) id = url.pathname.split("/")[2] ?? null;
      if (!id || !/^[\w-]{11}$/.test(id)) return null;
      const embed = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
      const start = url.searchParams.get("start") ?? url.searchParams.get("t");
      const match = start?.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
      const seconds = start && /^\d+$/.test(start) ? Number(start) : match ? Number(match[1] ?? 0) * 3600 + Number(match[2] ?? 0) * 60 + Number(match[3] ?? 0) : 0;
      if (seconds > 0) embed.searchParams.set("start", String(seconds));
      return { embedUrl: embed.toString(), watchUrl: `https://www.youtube.com/watch?v=${id}`, provider: "YouTube" };
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = url.pathname.split("/").filter(Boolean).pop();
      if (!id || !/^\d+$/.test(id)) return null;
      return { embedUrl: `https://player.vimeo.com/video/${id}`, watchUrl: `https://vimeo.com/${id}`, provider: "Vimeo" };
    }
    if (host === "dailymotion.com" || host === "dai.ly") {
      const id = host === "dai.ly" ? url.pathname.split("/").filter(Boolean)[0] : url.pathname.match(/^\/video\/([^_/?]+)/)?.[1];
      if (!id || !/^[\w]+$/.test(id)) return null;
      return { embedUrl: `https://www.dailymotion.com/embed/video/${id}`, watchUrl: `https://www.dailymotion.com/video/${id}`, provider: "Dailymotion" };
    }
    return null;
  } catch {
    return null;
  }
}

export default function TrailerPlayer({ trailer, info }: { trailer?: string; info: TrailerInfo }) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const parsed = parseTrailer(trailer);
  const heading = <h2 className="cinema-section-title mb-4 text-xl font-bold sm:text-2xl">Official Trailer</h2>;
  const poster = getPosterImageSrc(info.image, info.type);

  if (!parsed) {
    const hasTrailerValue = Boolean(trailer?.trim());
    return (
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {heading}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] sm:flex-row">
          <div className="relative aspect-[2/3] w-full shrink-0 bg-black sm:w-52"><PosterImage src={poster} alt={info.title} contentType={info.type} /></div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#E50914]">{hasTrailerValue ? "Trailer unavailable" : "No trailer available"}</p>
            <h3 className="mt-2 text-2xl font-black sm:text-3xl">{info.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
              {info.year && <span className="rounded-full bg-white/10 px-3 py-1">{info.year}</span>}
              {info.genres.map((genre) => <span key={genre} className="rounded-full bg-white/10 px-3 py-1">{genre}</span>)}
              {info.language && <span className="rounded-full bg-white/10 px-3 py-1">{info.language}</span>}
              {info.rating && info.rating !== "N/A" && <span className="rounded-full bg-white/10 px-3 py-1">★ {info.rating}</span>}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">{hasTrailerValue ? "The saved trailer link is invalid or uses a video provider we can’t embed. Check back later for an updated trailer." : "An official trailer has not been added yet. You can still explore the title details and watch or download available content below."}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      {heading}
      {embedFailed ? (
        <div className="rounded-2xl border border-white/10 bg-black p-6 text-sm text-white/70">
          <p>This {parsed.provider} trailer can’t be embedded here.</p>
          <a href={parsed.watchUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-lg bg-[#E50914] px-4 py-2 font-semibold text-white transition hover:bg-[#FF2633]">Watch on {parsed.provider}</a>
        </div>
      ) : (
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
          <iframe src={parsed.embedUrl} title={`${info.title} official trailer`} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen onError={() => setEmbedFailed(true)} />
        </div>
      )}
    </section>
  );
}
