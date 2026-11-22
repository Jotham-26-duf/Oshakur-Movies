import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { getSeriesSummaries, series } from "@/data/series";
import { createOpenGraphMetadata } from "@/app/seo";
import MovieCard from "@/app/components/MovieCard";

export const metadata: Metadata = {
  title: "Trending Movies & Series",
  description: "Discover trending movies and series on Oshakur Movies.",
  alternates: {
    canonical: "https://oshakurmovies.party/trending",
  },
  openGraph: createOpenGraphMetadata(
    "/trending",
    "Trending Movies & Series | OSHAKUR MOVIES",
    "Discover trending movies and series on OSHAKUR MOVIES.",
  ),
};

export default function TrendingPage() {
  const trendingMovies = [...movies]
    .filter((movie) => movie.isFeatured)
    .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""))
    .slice(0, 10);
  const trendingSeries = [...series]
    .filter((item) => item.isFeatured)
    .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""))
    .slice(0, 20);

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar series={getSeriesSummaries()} />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#AAAAAA] transition hover:text-[#00E5FF]"
          >
            ← Back Home
          </Link>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
            What&apos;s Hot
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Trending
          </h1>

          <p className="mt-2 text-sm text-[#AAAAAA]">
            Discover the movies and series currently trending on Oshakur
            Movies.
          </p>
        </div>

        {/* Trending Movies */}
        {trendingMovies.length > 0 && (
          <section>
            <h2 className="mb-5 text-2xl font-bold">
              Trending Movies
            </h2>

            <div className="catalog-card-grid">
              {trendingMovies.map((movie) => (
                <MovieCard key={`movie-${movie.id}`} title={movie.title} year={movie.year} rating={movie.rating} image={movie.image} slug={movie.slug} explainer={movie.explainer} createdAt={movie.createdAt} genres={movie.genres} />
              ))}
            </div>
          </section>
        )}

        {/* Trending Series */}
        {trendingSeries.length > 0 && (
          <section
            className={
              trendingMovies.length > 0 ? "mt-12" : ""
            }
          >
            <h2 className="mb-5 text-2xl font-bold">
              Trending Series
            </h2>

            <div className="catalog-card-grid">
              {trendingSeries.map((item) => (
                <MovieCard key={`series-${item.id}`} title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} hrefPrefix="/series" explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {trendingMovies.length === 0 &&
          trendingSeries.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
              <h2 className="text-lg font-semibold">
                No trending content yet
              </h2>

              <p className="mt-2 text-sm text-[#AAAAAA]">
                Trending movies and series will appear here.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-lg bg-[#2979FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2468D7]"
              >
                Back Home
              </Link>
            </div>
          )}
      </div>

      <SiteBottom />
    </main>
  );
}
