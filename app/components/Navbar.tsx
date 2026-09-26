
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { movies } from "@/data/movies";
import { series } from "@/data/series";

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function MovieIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m7 5 2 3" />
      <path d="m13 5 2 3" />
      <path d="m19 5-2 3" />
      <path d="M8 19 6 16" />
      <path d="m14 19-2-3" />
      <path d="m20 19-2-3" />
    </svg>
  );
}

function SeriesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v4" />
      <path d="M16 4v4" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M3 17 9 11l4 4 8-9" />
      <path d="M17 6h4v4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export default function Navbar() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const searchTerm = search.trim().toLowerCase();

  const matchingMovies = searchTerm
    ? movies
        .filter((movie) => {
          const searchableText = [
            movie.title,
            movie.slug,
            movie.year,
            movie.rating,
            movie.description,
            movie.language,
            movie.isFeatured ? "featured" : "",
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(searchTerm);
        })
        .slice(0, 5)
    : [];

  const matchingSeries = searchTerm
    ? series
        .filter((item) => {
          const searchableText = [
            item.title,
            item.slug,
            item.year,
            item.rating,
            item.description,
            item.language,
            item.isFeatured ? "featured" : "",
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(searchTerm);
        })
        .slice(0, 5)
    : [];

  const hasMatches =
    matchingMovies.length > 0 || matchingSeries.length > 0;

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function selectResult() {
    setSearch("");
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#121212]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-18 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 text-xl font-extrabold tracking-wider sm:text-2xl"
          >
            <span className="text-[#00E5FF]">OSHAKUR</span>{" "}
            <span className="text-[#E040FB]">MOVIES</span>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
            >
              <HomeIcon />
              Home
            </Link>

            <Link
              href="/movies"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
            >
              <MovieIcon />
              Movies
            </Link>

            <Link
              href="/series"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
            >
              <SeriesIcon />
              Series
            </Link>

            <Link
              href="/trending"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[#00E5FF]"
            >
              <TrendingIcon />
              Trending
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-lg border border-white/10 bg-[#1B1B1B] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#2979FF] hover:text-[#2979FF]"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 bg-[#121212] px-4 py-3 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSearch}
            className="relative mx-auto max-w-7xl"
          >
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#AAAAAA]">
                <SearchIcon />
              </div>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search movies and series..."
                className="w-full rounded-full border border-white/10 bg-[#2A2A2A] py-3 pl-11 pr-24 text-sm text-white outline-none placeholder:text-[#AAAAAA] focus:border-[#2979FF] focus:bg-[#303030] sm:py-3.5"
              />

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#2979FF] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1E63D6]"
              >
                Search
              </button>
            </div>

            {/* LIVE SEARCH RESULTS */}
            {searchTerm && (
              <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B] shadow-2xl">
                {hasMatches ? (
                  <div className="max-h-[420px] overflow-y-auto">
                    {matchingMovies.length > 0 && (
                      <div className="p-3">
                        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#888888]">
                          Movies
                        </p>

                        <div className="space-y-1">
                          {matchingMovies.map((movie) => (
                            <Link
                              key={movie.id}
                              href={`/movies/${movie.slug}`}
                              onClick={selectResult}
                              className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#2A2A2A]"
                            >
                              <img
                                src={`/images/movies/${movie.image}`}
                                alt={movie.title}
                                className="h-14 w-10 shrink-0 rounded-md object-cover"
                              />

                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">
                                  {movie.title}
                                </p>

                                <p className="mt-1 text-xs text-[#AAAAAA]">
                                  {movie.year} • ★ {movie.rating}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {matchingSeries.length > 0 && (
                      <div className="border-t border-white/10 p-3">
                        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#888888]">
                          Series
                        </p>

                        <div className="space-y-1">
                          {matchingSeries.map((item) => (
                            <Link
                              key={item.id}
                              href={`/series/${item.slug}`}
                              onClick={selectResult}
                              className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#2A2A2A]"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-14 w-10 shrink-0 rounded-md object-cover"
                              />

                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">
                                  {item.title}
                                </p>

                                <p className="mt-1 text-xs text-[#AAAAAA]">
                                  {item.year} • ★ {item.rating}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm font-semibold text-white">
                      No matching results
                    </p>

                    <p className="mt-1 text-xs text-[#888888]">
                      Keep typing or try another title.
                    </p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#121212] px-4 py-4 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
              >
                <HomeIcon />
                Home
              </Link>

              <Link
                href="/movies"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
              >
                <MovieIcon />
                Movies
              </Link>

              <Link
                href="/series"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
              >
                <SeriesIcon />
                Series
              </Link>

              <Link
                href="/trending"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
              >
                <TrendingIcon />
                Trending
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className="h-[116px] sm:h-[122px]" />
    </>
  );
}

