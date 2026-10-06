
"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import SiteBottom from "./SiteBottom";

type HomeMovie = {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description: string;
  language: string;
  genres: string[];
  isFeatured: boolean;
  createdAt: string;
  parts: unknown[];
};

type HomeSeries = {
  id: string;
  title: string;
  slug: string;
  image: string;
  description?: string;
  language?: string;
  genres?: string[];
  isFeatured?: boolean;
  createdAt?: string;
};

type HomeClientProps = {
  movies: HomeMovie[];
  series: HomeSeries[];
};

type ContentFilter = "all" | "new" | "old";

const NEW_CONTENT_DAYS = 30;

function isNewContent(createdAt?: string) {
  if (!createdAt) return false;

  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();

  const ageInDays =
    (now - createdTime) / (1000 * 60 * 60 * 24);

  return ageInDays >= 0 && ageInDays <= NEW_CONTENT_DAYS;
}

export default function HomeClient({
  movies,
  series,
}: HomeClientProps) {
  const [filter, setFilter] = useState<ContentFilter>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const orderedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [movies]);

  const orderedSeries = useMemo(() => {
    return [...series].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [series]);

  const newMovies = useMemo(
    () =>
      orderedMovies.filter((movie) =>
        isNewContent(movie.createdAt)
      ),
    [orderedMovies]
  );

  const oldMovies = useMemo(
    () =>
      orderedMovies.filter(
        (movie) => !isNewContent(movie.createdAt)
      ),
    [orderedMovies]
  );

  const newSeries = useMemo(
    () =>
      orderedSeries.filter((item) =>
        isNewContent(item.createdAt)
      ),
    [orderedSeries]
  );

  const oldSeries = useMemo(
    () =>
      orderedSeries.filter(
        (item) => !isNewContent(item.createdAt)
      ),
    [orderedSeries]
  );

  const displayedMovies =
    filter === "new"
      ? newMovies
      : filter === "old"
        ? oldMovies
        : orderedMovies;

  const displayedSeries =
    filter === "new"
      ? newSeries
      : filter === "old"
        ? oldSeries
        : orderedSeries;

  const heroItems = orderedMovies.slice(0, 5).map((movie) => ({
    ...movie,
    type: "movie" as const,
  }));

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    window.location.href =
      "/search?q=" + encodeURIComponent(query);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex min-w-0 items-center">
            <Link
              href="/"
              aria-label="Oshakur Movies home"
              className="flex items-center gap-2"
            >
              <img
                src="/images/logo.jpg"
                alt="OSHAKUR MOVIES logo"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
              />

              <span className="whitespace-nowrap text-lg font-extrabold tracking-wide sm:text-xl">
                <span className="text-[#00E5FF]">
                  OSHAKUR
                </span>{" "}
                <span className="text-[#E040FB]">
                  MOVIES
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-xl flex-1 md:flex"
          >
            <div className="flex w-full items-center rounded-full border border-white/10 bg-white/5 px-4">
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search movies and series..."
                className="w-full bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-[#00E5FF] transition hover:bg-white/10"
              >
                Search
              </button>
            </div>
          </form>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold transition hover:border-[#00E5FF]/50 hover:text-[#00E5FF]"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Search */}
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-4">
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search movies and series..."
                className="w-full bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-[#00E5FF]"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Navigation Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050505]">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold hover:text-[#00E5FF]"
              >
                Home
              </Link>

              <Link
                href="/movies"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold hover:text-[#00E5FF]"
              >
                Movies
              </Link>

              <Link
                href="/series"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold hover:text-[#00E5FF]"
              >
                Series
              </Link>

              <Link
                href="/trending"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold hover:text-[#00E5FF]"
              >
                Trending
              </Link>

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-semibold hover:text-[#00E5FF]"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <Hero items={heroItems} />

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "all"
                ? "bg-[#00E5FF] text-black"
                : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            All
          </button>

          <button
            type="button"
            onClick={() => setFilter("new")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "new"
                ? "bg-[#00E5FF] text-black"
                : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            New
          </button>

          <button
            type="button"
            onClick={() => setFilter("old")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "old"
                ? "bg-[#00E5FF] text-black"
                : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            Old
          </button>
        </div>

        {/* Movies */}
        <section className="mb-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Movies
              </h2>

              <p className="mt-1 text-sm text-white/50">
                Watch and discover movies on OSHAKUR MOVIES.
              </p>
            </div>

            <Link
              href="/movies"
              className="text-sm font-semibold text-[#00E5FF] hover:underline"
            >
              View all
            </Link>
          </div>

          {displayedMovies.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {displayedMovies.map((movie) => (
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
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
              No movies found.
            </div>
          )}
        </section>

        {/* Series */}
        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Series
              </h2>

              <p className="mt-1 text-sm text-white/50">
                Watch and discover series on OSHAKUR MOVIES.
              </p>
            </div>

            <Link
              href="/series"
              className="text-sm font-semibold text-[#00E5FF] hover:underline"
            >
              View all
            </Link>
          </div>

          {displayedSeries.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {displayedSeries.map((item) => (
                <Link
                  key={item.id}
                  href={`/series/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#00E5FF]/40"
                >
                  <div className="aspect-[2/3] overflow-hidden bg-white/5">
                    <img
                      src={`/images/series/${item.image}`}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="line-clamp-2 text-sm font-bold">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
              No series found.
            </div>
          )}
        </section>
      </section>

      {/* Footer */}
      <SiteBottom />
    </main>
  );
}
