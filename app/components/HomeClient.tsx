"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

import Hero from "./Hero";
import MovieCard from "./MovieCard";
import SiteBottom from "./SiteBottom";

interface HomeMovie {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description: string;
  language: string;
  genres?: string[];
  isFeatured: boolean;
  createdAt: string;
}

interface HomeSeries {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  language: string;
  genres?: string[];
  isFeatured: boolean;
  createdAt?: string;
}

interface HomeClientProps {
  movies: HomeMovie[];
  series: HomeSeries[];
}

type ContentFilter = "all" | "newMovies" | "oldMovies" | "series";

const NEW_CONTENT_DAYS = 30;

function isNewContent(createdAt?: string) {
  if (!createdAt) {
    return false;
  }

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) {
    return false;
  }

  const now = Date.now();
  const ageInDays =
    (now - createdTime) / (1000 * 60 * 60 * 24);

  return ageInDays >= 0 && ageInDays <= NEW_CONTENT_DAYS;
}

export default function HomeClient({
  movies,
  series,
}: HomeClientProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [contentFilter, setContentFilter] =
    useState<ContentFilter>("all");

  /*
   * Featured items always come first.
   * Items with the same featured status keep
   * their original order from the data file.
   */
  const orderedMovies = useMemo(
    () => [
      ...movies.filter((movie) => movie.isFeatured),
      ...movies.filter((movie) => !movie.isFeatured),
    ],
    [movies]
  );

  const orderedSeries = useMemo(
    () => [
      ...series.filter((seriesItem) => seriesItem.isFeatured),
      ...series.filter((seriesItem) => !seriesItem.isFeatured),
    ],
    [series]
  );

  /*
   * New and old movies are calculated dynamically
   * from the createdAt field.
   */
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

  /*
   * Decide what content is displayed based on
   * the selected button.
   *
   * "all" is the default, so ALL movies and
   * ALL series are displayed.
   */
  const displayedMovies = useMemo(() => {
    if (contentFilter === "newMovies") {
      return newMovies;
    }

    if (contentFilter === "oldMovies") {
      return oldMovies;
    }

    if (contentFilter === "series") {
      return [];
    }

    return orderedMovies;
  }, [
    contentFilter,
    newMovies,
    oldMovies,
    orderedMovies,
  ]);

  const displayedSeries = useMemo(() => {
    if (contentFilter === "series") {
      return orderedSeries;
    }

    if (contentFilter !== "all") {
      return [];
    }

    return orderedSeries;
  }, [
    contentFilter,
    orderedSeries,
  ]);

  /*
   * Hero uses featured items first.
   */
  const heroItems = [
    ...orderedMovies.slice(0, 4).map((movie) => ({
      ...movie,
      id: `movie-${movie.id}`,
      type: "movie" as const,
    })),
    ...orderedSeries.slice(0, 4).map((seriesItem) => ({
      ...seriesItem,
      id: `series-${seriesItem.id}`,
      description: "",
      type: "series" as const,
    })),
  ];

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }

  function handleFilterChange(filter: ContentFilter) {
    setContentFilter(filter);
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* =========================
          NAVBAR
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/95 backdrop-blur">
        <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Logo */}
          <div className="flex min-w-0 items-center">
            <Link
              href="/"
              className="truncate text-lg font-black tracking-wide text-white transition hover:text-[#00E5FF] sm:text-xl"
            >
              OSHAKUR MOVIES
            </Link>
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden w-[min(42vw,680px)] md:block"
          >
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search movies and series..."
                className="h-11 w-full rounded-xl border border-white/10 bg-[#202020] px-4 pr-12 text-sm text-white outline-none transition placeholder:text-[#777] focus:border-[#2979FF] focus:ring-1 focus:ring-[#2979FF]"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-lg text-[#AAAAAA] transition hover:bg-white/10 hover:text-white"
              >
                🔍
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex shrink-0 items-center justify-end gap-2">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setNavbarOpen((open) => !open)}
              aria-label={
                navbarOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={navbarOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white transition hover:bg-white/10"
            >
              {navbarOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="border-t border-white/5 px-5 py-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search movies and series..."
                className="h-11 w-full rounded-xl border border-white/10 bg-[#202020] px-4 pr-12 text-sm text-white outline-none placeholder:text-[#777] focus:border-[#2979FF] focus:ring-1 focus:ring-[#2979FF]"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-lg text-[#AAAAAA] hover:bg-white/10 hover:text-white"
              >
                🔍
              </button>
            </div>
          </form>
        </div>

        {/* Dropdown Navigation */}
        {navbarOpen && (
          <div className="border-t border-white/10 bg-[#181818]">
            <nav className="mx-auto flex max-w-[1600px] flex-col px-5 py-3 sm:px-8 md:px-10 lg:px-16">
              <Link
                href="/"
                onClick={() => setNavbarOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
              >
                Home
              </Link>

              <Link
                href="/movies"
                onClick={() => setNavbarOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
              >
                Movies
              </Link>

              <Link
                href="/series"
                onClick={() => setNavbarOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
              >
                Series
              </Link>

              <Link
                href="/trending"
                onClick={() => setNavbarOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
              >
                Trending
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* =========================
          HERO
      ========================== */}
      {heroItems.length > 0 && (
        <Hero items={heroItems} />
      )}

      {/* =========================
          CONTENT FILTER BUTTONS
      ========================== */}
      <section className="mx-auto max-w-[1600px] px-5 pt-8 sm:px-8 md:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
              contentFilter === "all"
                ? "bg-[#2979FF] text-white shadow-lg shadow-[#2979FF]/20"
                : "bg-[#202020] text-[#AAAAAA] hover:bg-[#2A2A2A] hover:text-white"
            }`}
          >
            All
          </button>

          <button
            type="button"
            onClick={() =>
              handleFilterChange("newMovies")
            }
            className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
              contentFilter === "newMovies"
                ? "bg-[#2979FF] text-white shadow-lg shadow-[#2979FF]/20"
                : "bg-[#202020] text-[#AAAAAA] hover:bg-[#2A2A2A] hover:text-white"
            }`}
          >
            New Movies
          </button>

          <button
            type="button"
            onClick={() =>
              handleFilterChange("oldMovies")
            }
            className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
              contentFilter === "oldMovies"
                ? "bg-[#2979FF] text-white shadow-lg shadow-[#2979FF]/20"
                : "bg-[#202020] text-[#AAAAAA] hover:bg-[#2A2A2A] hover:text-white"
            }`}
          >
            Old Movies
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("series")}
            className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
              contentFilter === "series"
                ? "bg-[#2979FF] text-white shadow-lg shadow-[#2979FF]/20"
                : "bg-[#202020] text-[#AAAAAA] hover:bg-[#2A2A2A] hover:text-white"
            }`}
          >
            Series
          </button>
        </div>
      </section>

      {/* =========================
          MOVIES
      ========================== */}
      {displayedMovies.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 md:px-10 lg:px-16">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                {contentFilter === "newMovies"
                  ? "New Movies"
                  : contentFilter === "oldMovies"
                    ? "Old Movies"
                    : "Movies"}
              </h2>

              <p className="mt-1 text-sm text-[#777]">
                {displayedMovies.length}{" "}
                {displayedMovies.length === 1
                  ? "movie"
                  : "movies"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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

          <div className="mt-10 flex justify-center">
            <Link
              href="/movies"
              className="inline-flex items-center justify-center rounded-xl bg-[#2979FF] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#2979FF]/20 transition hover:-translate-y-0.5 hover:bg-[#1E6BE8]"
            >
              View All Movies
            </Link>
          </div>
        </section>
      )}

      {/* =========================
          SERIES
      ========================== */}
      {displayedSeries.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-5 pb-12 sm:px-8 md:px-10 lg:px-16">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Series
              </h2>

              <p className="mt-1 text-sm text-[#777]">
                {displayedSeries.length}{" "}
                {displayedSeries.length === 1
                  ? "series"
                  : "series"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {displayedSeries.map((seriesItem) => (
              <Link
                key={seriesItem.id}
                href={`/series/${seriesItem.slug}`}
                className="group block min-w-0"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                  <img
                    src={`/images/series/${seriesItem.image}`}
                    alt={seriesItem.title}
                    className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
                    <div className="scale-0 rounded-full bg-[#2979FF] p-4 text-white shadow-xl transition duration-300 group-hover:scale-100">
                      <span className="text-lg">
                        ▶
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                  {seriesItem.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="text-[#AAAAAA]">
                    {seriesItem.year}
                  </span>

                  <span className="text-[#AAAAAA]">
                    •
                  </span>

                  <span className="flex items-center gap-1 rounded-md bg-[#5C6BC0] px-2 py-1 text-xs font-semibold text-white">
                    <span className="text-[#FFC107]">
                      ★
                    </span>
                    {seriesItem.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/series"
              className="inline-flex items-center justify-center rounded-xl bg-[#2979FF] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#2979FF]/20 transition hover:-translate-y-0.5 hover:bg-[#1E6BE8]"
            >
              View All Series
            </Link>
          </div>
        </section>
      )}

      {/* =========================
          EMPTY STATE
      ========================== */}
      {displayedMovies.length === 0 &&
        displayedSeries.length === 0 && (
          <section className="mx-auto max-w-[1600px] px-5 py-20 text-center sm:px-8 md:px-10 lg:px-16">
            <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-[#181818] p-10">
              <h2 className="text-xl font-bold text-white">
                No content found
              </h2>

              <p className="mt-3 text-sm text-[#888]">
                There is no content available for this
                selection yet.
              </p>

              <button
                type="button"
                onClick={() =>
                  handleFilterChange("all")
                }
                className="mt-6 rounded-xl bg-[#2979FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1E6BE8]"
              >
                Show All
              </button>
            </div>
          </section>
        )}

      {/* =========================
          FOOTER
      ========================== */}
      <SiteBottom />
    </main>
  );
}