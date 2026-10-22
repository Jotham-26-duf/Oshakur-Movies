import type { Metadata } from "next";
import Link from "next/link";

import MovieCard from "@/app/components/MovieCard";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { createOpenGraphMetadata } from "@/app/seo";

export const metadata: Metadata = {
  title: "All Movies",
  description:
    "Browse all movies on Oshakur Movies. Discover action, adventure, comedy, drama, horror, and thriller movies.",
  alternates: {
    canonical: "https://oshakurmovies.party/movies",
  },
  openGraph: createOpenGraphMetadata(
    "/movies",
    "All Movies | OSHAKUR MOVIES",
    "Browse all movies on OSHAKUR MOVIES, including action, adventure, comedy, drama, horror, and thriller films.",
  ),
};

export default function MoviesPage() {
  const orderedMovies = [
    ...movies.filter((movie) => movie.isFeatured),
    ...movies.filter((movie) => !movie.isFeatured).sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? "")),
  ];

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar />

      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-7 sm:px-6 lg:px-[5%]">
        <header className="mb-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-[#737373]"><Link href="/" className="transition hover:text-white">Home</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-[#A3A3A3]">Movies</span></nav>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">All Movies <span className="text-[#A3A3A3]">({new Set(orderedMovies.map((movie) => movie.id)).size})</span></h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A3A3A3] sm:text-base">Explore our movie collection, discover your favorite stories, and find the latest Agasobanuye additions to OSHAKUR MOVIES.</p>
        </header>

        {orderedMovies.length > 0 ? (
          <div className="media-grid">
            {orderedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                image={movie.image}
                slug={movie.slug}
                explainer={movie.explainer}
                createdAt={movie.createdAt}
                genres={movie.genres}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] px-6 py-16 text-center">
            <h2 className="text-xl font-bold">No movies found</h2>

            <p className="mt-2 text-sm text-[#AAAAAA]">
              There are currently no movies available.
            </p>
          </div>
        )}
      </section>

      <SiteBottom />
    </main>
  );
}
