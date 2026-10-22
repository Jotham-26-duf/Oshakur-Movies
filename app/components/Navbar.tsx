"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { SiWhatsapp } from "react-icons/si";
import OshakurLogo from "./OshakurLogo";

function normalizeSearchText(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesSearch(text: string, query: string): boolean {
  const normalizedText = normalizeSearchText(text);
  const words = normalizeSearchText(query).split(" ").filter(Boolean);

  return (
    words.length > 0 &&
    words.every((word) => normalizedText.includes(word))
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function MovieIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M3 17 9 11l4 4 8-9" />
      <path d="M17 6h4v4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const searchTerm = normalizeSearchText(search);

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
            movie.explainer,
            movie.isFeatured ? "featured" : "",
          ].join(" ");

          return matchesSearch(searchableText, searchTerm);
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
            item.explainer,
            item.isFeatured ? "featured" : "",
          ].join(" ");

          return matchesSearch(searchableText, searchTerm);
        })
        .slice(0, 5)
    : [];

  const hasMatches =
    matchingMovies.length > 0 || matchingSeries.length > 0;

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.replace(/\s+/g, " ").trim();

    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function selectResult() {
    setSearch("");
  }

  function navLinkClass(href: string) {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] ${
      isActive
        ? "bg-white/10 text-white shadow-[inset_0_-2px_0_#E50914]"
        : "text-[#B7C1CE] hover:bg-white/[0.07] hover:text-white"
    }`;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/95 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center px-4 sm:h-[72px] sm:px-6 lg:px-[5%]">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Oshakur Movies home"
            className="flex shrink-0 items-center gap-2"
          >
            <OshakurLogo className="size-10 shrink-0 sm:size-12" />

              <span className="whitespace-nowrap text-xs font-extrabold tracking-wide sm:text-xl lg:text-2xl">
              <span className="text-white">OSHAKUR</span>{" "}
              <span className="text-[#E50914]">MOVIES</span>
            </span>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={navLinkClass("/")}>
              <HomeIcon /> Home
            </Link>

            <Link href="/movies" aria-current={pathname.startsWith("/movies") ? "page" : undefined} className={navLinkClass("/movies")}>
              <MovieIcon /> Movies
            </Link>

            <Link href="/series" aria-current={pathname.startsWith("/series") ? "page" : undefined} className={navLinkClass("/series")}>
              <SeriesIcon /> Series
            </Link>

            <Link href="/trending" aria-current={pathname.startsWith("/trending") ? "page" : undefined} className={navLinkClass("/trending")}>
              <TrendingIcon /> Trending
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#E50914]/50 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              Login
            </Link>

            <a href="https://wa.me/250789063094" target="_blank" rel="noopener noreferrer" aria-label="Contact OSHAKUR MOVIES on WhatsApp" className="hidden rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-white transition hover:border-[#E50914] hover:text-[#FF2633] sm:inline-flex"><SiWhatsapp size={19} aria-hidden="true" /></a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="absolute left-1/2 top-1/2 hidden w-[30vw] max-w-[440px] -translate-x-1/2 -translate-y-1/2 lg:block">
          <form onSubmit={handleSearch} role="search" className="relative mx-auto">
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#AAAAAA]">
                <SearchIcon />
              </div>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Type your search"
                aria-label="Search movies and series"
                aria-controls="navbar-search-results"
                autoComplete="off"
                className="w-full rounded-lg border border-[#292929] bg-[#141414] py-2.5 pl-11 pr-14 text-sm text-white outline-none placeholder:text-[#777] transition focus:border-[#E50914]/70 focus-visible:ring-2 focus-visible:ring-[#E50914]/30"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1/2 grid h-9 w-10 -translate-y-1/2 place-items-center rounded-md bg-[#E50914] text-white transition hover:bg-[#F6121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              >
                <SearchIcon />
              </button>
            </div>

            {searchTerm && (
              <div
                id="navbar-search-results"
                className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B] shadow-2xl"
              >
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
                              className="group flex items-center gap-3 rounded-xl p-2 transition duration-200 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-lg focus-visible:bg-[#2A2A2A]"
                            >
                              <img
                                src={`/images/movies/${movie.image}`}
                                alt={movie.title}
                                loading="lazy"
                                className="h-14 w-10 shrink-0 rounded-md object-cover"
                              />

                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">
                                  {movie.title}
                                </p>
                                <p className="mt-1 text-xs text-[#AAAAAA]">
                                  {movie.year} • ★ {movie.rating}
                                </p>
                                {movie.explainer && (
                                  <p className="mt-1 truncate text-xs text-[#00E5FF]">
                                    {movie.explainer}
                                  </p>
                                )}
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
                              className="group flex items-center gap-3 rounded-xl p-2 transition duration-200 hover:-translate-y-0.5 hover:bg-[#2A2A2A] hover:shadow-lg focus-visible:bg-[#2A2A2A]"
                            >
                              <img
                                src={`/images/series/${item.image}`}
                                alt={item.title}
                                loading="lazy"
                                className="h-14 w-10 shrink-0 rounded-md object-cover"
                              />

                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">
                                  {item.title}
                                </p>
                                <p className="mt-1 text-xs text-[#AAAAAA]">
                                  {item.year} • ★ {item.rating}
                                </p>
                                {item.explainer && (
                                  <p className="mt-1 truncate text-xs text-[#00E5FF]">
                                    {item.explainer}
                                  </p>
                                )}
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

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0B1320] px-4 py-4 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenu} aria-current={pathname === "/" ? "page" : undefined} className={navLinkClass("/")}>
                <HomeIcon /> Home
              </Link>

              <Link href="/movies" onClick={closeMenu} aria-current={pathname.startsWith("/movies") ? "page" : undefined} className={navLinkClass("/movies")}>
                <MovieIcon /> Movies
              </Link>

              <Link href="/series" onClick={closeMenu} aria-current={pathname.startsWith("/series") ? "page" : undefined} className={navLinkClass("/series")}>
                <SeriesIcon /> Series
              </Link>

              <Link href="/trending" onClick={closeMenu} aria-current={pathname.startsWith("/trending") ? "page" : undefined} className={navLinkClass("/trending")}>
                <TrendingIcon /> Trending
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className="h-0" />
    </>
  );
}
