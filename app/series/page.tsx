import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { getSeriesSummaries, series } from "@/data/series";
import { createOpenGraphMetadata } from "@/app/seo";
import MovieCard from "@/app/components/MovieCard";

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
      <Navbar series={getSeriesSummaries()} />

      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-7 sm:px-6 lg:px-[5%]">
        <header className="mb-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-[#737373]"><Link href="/" className="transition hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-[#A3A3A3]">Series</span></nav>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">All Series <span className="text-[#A3A3A3]">({new Set(orderedSeries.map((item) => item.id)).size})</span></h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A3A3A3] sm:text-base">Discover series, follow your favorite stories, and explore available seasons and episodes on OSHAKUR MOVIES.</p>
        </header>

        {orderedSeries.length > 0 ? (
          <div className="catalog-card-grid">
            {orderedSeries.map((item) => (
              <MovieCard key={item.id} title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} hrefPrefix="/series" explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} episodeCount={item.episodes.length} season={/(season|series)/i.test(item.title) ? "SEASON" : undefined} />
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
