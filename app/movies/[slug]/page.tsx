import Link from "next/link";
import { notFound } from "next/navigation";

import MovieCard from "@/app/components/MovieCard";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";

interface MovieDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { slug } = await params;

  const movie = movies.find((item) => item.slug === slug);

  if (!movie) {
    notFound();
  }

  const relatedMovies = movies
    .filter((item) => item.slug !== movie.slug)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.image}
            alt=""
            className="h-full w-full object-cover opacity-20 blur-sm"
          />

          <div className="absolute inset-0 bg-[#121212]/80" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[280px]">
              <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] shadow-2xl">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="aspect-[2/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00E5FF]">
                Movie
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {movie.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-[#AAAAAA]">{movie.year}</span>

                <span className="text-[#666666]">•</span>

                <span className="rounded-md bg-[#5C6BC0] px-3 py-1.5 text-xs font-semibold">
                  <span className="mr-1 text-[#FFC107]">★</span>
                  {movie.rating}
                </span>

                <span className="text-[#666666]">•</span>

                <span className="text-[#AAAAAA]">
                  {movie.language}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#AAAAAA] sm:text-base">
                {movie.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {movie.streamUrl && (
                  <a
                    href={movie.streamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#2979FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E63D6]"
                  >
                    <span className="mr-2">▶</span>
                    Watch Now
                  </a>
                )}

                {movie.downloadUrl && (
                  <a
                    href={movie.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                  >
                    <span className="mr-2">↓</span>
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedMovies.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                You May Also Like
              </h2>

              <p className="mt-1 text-sm text-[#AAAAAA]">
                More movies you might enjoy.
              </p>
            </div>

            <Link
              href="/movies"
              className="shrink-0 text-sm font-semibold text-[#00E5FF] transition hover:text-white"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {relatedMovies.map((item) => (
              <MovieCard
                key={item.id}
                title={item.title}
                year={item.year}
                rating={item.rating}
                image={item.image}
                slug={item.slug}
              />
            ))}
          </div>
        </section>
      )}

      <SiteBottom />
    </main>
  );
}