import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { series } from "@/data/series";
import { episodes } from "@/data/episodes";
import { createOpenGraphMetadata } from "@/app/seo";

export const metadata: Metadata = {
  title: "All Series",
  description:
    "Explore series on Oshakur Movies. Discover shows, browse ratings, and find episodes to watch.",
  alternates: {
    canonical: "https://oshakurmovies.party/series",
  },
  openGraph: createOpenGraphMetadata(
    "/series",
    "All Series | OSHAKUR MOVIES",
    "Explore series, seasons, and episodes on OSHAKUR MOVIES.",
  ),
};

export default function SeriesPage() {
  const orderedSeries = [
    ...series.filter((item) => item.isFeatured),
    ...series.filter((item) => !item.isFeatured).sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? "")),
  ];

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar />

      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-7 sm:px-6 lg:px-[5%]">
        <header className="mb-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-[#737373]"><Link href="/" className="transition hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-[#A3A3A3]">Series</span></nav>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">All Series <span className="text-[#A3A3A3]">({new Set(orderedSeries.map((item) => item.id)).size})</span></h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A3A3A3] sm:text-base">Discover series, follow your favorite stories, and explore available seasons and episodes on OSHAKUR MOVIES.</p>
        </header>

        {orderedSeries.length > 0 ? (
          <div className="media-grid">
            {orderedSeries.map((item) => (
              <article key={item.id} className="cinema-card group min-w-0">
                <Link href={`/series/${item.slug}`} className="block">
                  <div className="media-poster relative">
                    <img src={`/images/series/${item.image}`} alt={item.title} loading="lazy" />
                    {item.genres?.[0] && <span className="media-genre">{item.genres[0]}</span>}
                    {/(season|series)/i.test(item.title) && <span className="media-season">SEASON</span>}
                    <span className="media-play" aria-hidden="true">▶</span>
                  </div>
                  <h2 className="media-title">{item.title}</h2>
                </Link>
                <div className="media-meta">
                  {(() => { const count = episodes.filter((episode) => episode.seriesSlug === item.slug).length; return count > 0 ? <span className="episode-pill">{count} {count === 1 ? "Episode" : "Episodes"}</span> : null; })()}
                  <span className="media-rating">★ {item.rating}</span>
                </div>
                <div className="media-byline">{item.explainer?.trim() || <span className="text-white/35">Explainer unavailable</span>}</div>
                {item.createdAt && <time className="media-time" dateTime={item.createdAt}>{relativeTime(item.createdAt)}</time>}
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] px-6 py-16 text-center">
            <h2 className="text-xl font-bold">No series found</h2>

            <p className="mt-2 text-sm text-[#AAAAAA]">
              There are currently no series available.
            </p>
          </div>
        )}
      </section>

      <SiteBottom />
    </main>
  );
}

function relativeTime(value: string): string {
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return "";
  const days = Math.max(0, Math.floor((Date.now() - timestamp) / 86_400_000));
  if (days < 1) return "Today";
  if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (days < 30) { const weeks = Math.floor(days / 7); return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`; }
  if (days < 365) { const months = Math.floor(days / 30); return `${months} ${months === 1 ? "month" : "months"} ago`; }
  const years = Math.floor(days / 365); return `${years} ${years === 1 ? "year" : "years"} ago`;
}
