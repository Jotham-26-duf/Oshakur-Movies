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
    return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

export default function TrailerPlayer({ trailer }: { trailer?: string }) {
  const embedUrl = youtubeEmbedUrl(trailer);
  if (!embedUrl) return <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"><h2 className="cinema-section-title mb-4 text-xl font-bold sm:text-2xl">Official Trailer</h2><p className="text-sm text-white/55">No trailer is available for this title yet.</p></section>;
  return <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"><h2 className="cinema-section-title mb-4 text-xl font-bold sm:text-2xl">Official Trailer</h2><div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black"><iframe src={embedUrl} title="Official trailer" className="h-full w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></section>;
}
