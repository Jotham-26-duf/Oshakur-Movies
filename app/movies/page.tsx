import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

import MovieCard from "@/app/components/MovieCard";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00E5FF]">
            Oshakur Movies
          </p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold sm:text-4xl">
                All Movies
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#AAAAAA]">
                Browse our collection of movies and discover something to
                watch.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#1B1B1B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
            >
              <FiArrowLeft
                size={17}
                aria-hidden="true"
              />
              Home
            </Link>
          </div>
        </div>

        {movies.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                image={movie.image}
                slug={movie.slug}
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