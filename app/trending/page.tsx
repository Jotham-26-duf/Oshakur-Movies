
import Link from "next/link";

import { movies } from "@/data/movies";
import { series } from "@/data/series";

export default function TrendingPage() {
  const trendingMovies = movies.slice(0, 10);
  const trendingSeries = series.slice(0, 10);

  return (
    <main className="min-h-screen bg-[#121212] text-white">
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
            What's Hot
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

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {trendingMovies.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movies/${movie.slug}`}
                  className="group block min-w-0"
                >
                  <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                  </div>

                  <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                    {movie.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#FFC107]">★</span>
                      {movie.rating}
                    </span>
                  </div>
                </Link>
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

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {trendingSeries.map((item) => (
                <Link
                  key={item.id}
                  href={`/series/${item.slug}`}
                  className="group block min-w-0"
                >
                  <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                  </div>

                  <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#FFC107]">★</span>
                      {item.rating}
                    </span>
                  </div>
                </Link>
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
    </main>
  );
}

