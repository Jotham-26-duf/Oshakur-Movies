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

  const isSinglePart = movie.parts.length === 1;
  const singlePart = movie.parts[0];

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      {/* Movie Details */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        {movie.image && (
          <div className="absolute inset-0">
            <img
              src={`/images/movies/${movie.image}`}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-20 blur-sm"
            />

            <div className="absolute inset-0 bg-[#121212]/85" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-[#121212]/50" />
          </div>
        )}

        {!movie.image && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B] to-[#121212]" />
        )}

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-12">
            {/* Movie Poster */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] shadow-2xl">
                {movie.image ? (
                  <img
                    src={`/images/movies/${movie.image}`}
                    alt={movie.title}
                    className="block aspect-[2/3] h-auto w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[2/3] items-center justify-center p-6 text-center">
                    <span className="text-lg font-semibold text-[#777777]">
                      No Poster Available
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Movie Information */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00E5FF]">
                Movie
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {movie.title}
              </h1>

              {/* Movie Information */}
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

              {/* Genres */}
              {movie.genres.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#CCCCCC]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#AAAAAA] sm:text-base">
                {movie.description}
              </p>

              {/* Watch / Download */}
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                  Watch / Download
                </h2>

                {isSinglePart ? (
                  /* ONE PART */
                  <div className="flex flex-wrap gap-3">
                    {singlePart?.streamUrl && (
                      <a
                        href={singlePart.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-[#2979FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E63D6]"
                      >
                        <span className="mr-2">▶</span>
                        Watch Now
                      </a>
                    )}

                    {singlePart?.downloadUrl && (
                      <a
                        href={singlePart.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                      >
                        <span className="mr-2">↓</span>
                        Download
                      </a>
                    )}
                  </div>
                ) : (
                  /* MULTIPLE PARTS */
                  <div className="space-y-4">
                    {movie.parts.map((part) => (
                      <div
                        key={part.id}
                        className="rounded-xl border border-white/10 bg-[#1B1B1B] p-4"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="font-semibold text-white">
                              {part.title}
                            </h3>

                            <p className="mt-1 text-sm text-[#777777]">
                              Part {part.partNumber}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {part.streamUrl && (
                              <a
                                href={part.streamUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-[#2979FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E63D6]"
                              >
                                <span className="mr-2">▶</span>
                                Watch
                              </a>
                            )}

                            {part.downloadUrl && (
                              <a
                                href={part.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                              >
                                <span className="mr-2">↓</span>
                                Download
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Summary</h2>

          <p className="mt-4 text-sm leading-7 text-[#AAAAAA] sm:text-base">
            {movie.description}
          </p>
        </div>
      </section>

      {/* Comments */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Comments</h2>

          <div className="mt-5 rounded-xl border border-white/10 bg-[#1B1B1B] p-6">
            <p className="text-sm text-[#AAAAAA]">
              Comments will be available here.
            </p>
          </div>
        </div>
      </section>

      {/* More Films */}
      {relatedMovies.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                More Films
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