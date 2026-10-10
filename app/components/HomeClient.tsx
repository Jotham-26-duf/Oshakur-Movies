
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
  explainer?: string;
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
  year?: string;
  rating?: string;
  explainer?: string;
};

type HomeClientProps = {
  movies: HomeMovie[];
  series: HomeSeries[];
};

type ContentFilter = "all" | "new" | "old";

type TrendingItem =
  | { contentType: "movie"; data: HomeMovie }
  | { contentType: "series"; data: HomeSeries };

type Explainer = {
  name: string;
  movies: HomeMovie[];
  series: HomeSeries[];
};

const NEW_CONTENT_DAYS = 30;

function isNewContent(createdAt?: string) {
  if (!createdAt) return false;

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) return false;

  const ageInDays =
    (Date.now() - createdTime) / (1000 * 60 * 60 * 24);

  return ageInDays >= 0 && ageInDays <= NEW_CONTENT_DAYS;
}

function getTimeAgo(createdAt?: string) {
  if (!createdAt) return "Upload date unavailable";

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) return "Upload date unavailable";

  const elapsed = Date.now() - createdTime;

  if (elapsed < 0) return "Just uploaded";

  const minutes = Math.floor(elapsed / (1000 * 60));
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) return "Just now";
  if (minutes < 60)
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  if (hours < 24)
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  if (days < 7)
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (days < 30)
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  if (days < 365)
    return `${months} ${months === 1 ? "month" : "months"} ago`;

  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export default function HomeClient({
  movies,
  series,
}: HomeClientProps) {
  const [filter, setFilter] = useState<ContentFilter>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedExplainer, setSelectedExplainer] =
    useState<string | null>(null);

  const orderedMovies = useMemo(() => {
    const featured = movies
      .filter((movie) => movie.isFeatured)
      .reverse();

    const regular = movies.filter(
      (movie) => !movie.isFeatured
    );

    return [...featured, ...regular];
  }, [movies]);

  const orderedSeries = useMemo(() => {
    const featured = series
      .filter((item) => item.isFeatured)
      .reverse();

    const regular = series.filter(
      (item) => !item.isFeatured
    );

    return [...featured, ...regular];
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

  // Hero: alternate up to four movies and four series.
  const heroItems = useMemo(() => {
    const selectedMovies = orderedMovies.slice(0, 4);
    const selectedSeries = orderedSeries.slice(0, 4);

    const mixedItems: Array<
      | (HomeMovie & { type: "movie" })
      | (HomeSeries & {
          year: string;
          rating: string;
          description: string;
          language: string;
          genres: string[];
          type: "series";
        })
    > = [];

    const maxLength = Math.max(
      selectedMovies.length,
      selectedSeries.length
    );

    for (let index = 0; index < maxLength; index++) {
      if (selectedMovies[index]) {
        mixedItems.push({
          ...selectedMovies[index],
          type: "movie",
        });
      }

      if (selectedSeries[index]) {
        const item = selectedSeries[index];

        mixedItems.push({
          ...item,
          year: item.year ?? "",
          rating: item.rating ?? "",
          description: item.description ?? "",
          language: item.language ?? "",
          genres: item.genres ?? [],
          type: "series",
        });
      }
    }

    return mixedItems;
  }, [orderedMovies, orderedSeries]);

  // Trending: alternate movies and series, up to eight cards.
  const trendingItems = useMemo(() => {
    const result: TrendingItem[] = [];

    for (
      let index = 0;
      result.length < 8 &&
      (index < orderedMovies.length ||
        index < orderedSeries.length);
      index++
    ) {
      if (orderedMovies[index] && result.length < 8) {
        result.push({
          contentType: "movie",
          data: orderedMovies[index],
        });
      }

      if (orderedSeries[index] && result.length < 8) {
        result.push({
          contentType: "series",
          data: orderedSeries[index],
        });
      }
    }

    return result;
  }, [orderedMovies, orderedSeries]);

  // Build explainer profiles from the names already in your data.
  const explainers = useMemo(() => {
    const profileMap = new Map<string, Explainer>();

    for (const movie of movies) {
      const name = movie.explainer?.trim();
      if (!name) continue;

      const key = name.toLocaleLowerCase();

      if (!profileMap.has(key)) {
        profileMap.set(key, {
          name,
          movies: [],
          series: [],
        });
      }

      profileMap.get(key)!.movies.push(movie);
    }

    for (const item of series) {
      const name = item.explainer?.trim();
      if (!name) continue;

      const key = name.toLocaleLowerCase();

      if (!profileMap.has(key)) {
        profileMap.set(key, {
          name,
          movies: [],
          series: [],
        });
      }

      profileMap.get(key)!.series.push(item);
    }

    return Array.from(profileMap.values()).sort(
      (a, b) =>
        b.movies.length +
        b.series.length -
        (a.movies.length + a.series.length)
    );
  }, [movies, series]);

  const activeExplainer = explainers.find(
    (item) => item.name === selectedExplainer
  );

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
                <span className="text-[#00E5FF]">OSHAKUR</span>{" "}
                <span className="text-[#E040FB]">MOVIES</span>
              </span>
            </Link>
          </div>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-xl flex-1 md:flex"
          >
            <div className="flex w-full items-center rounded-full border border-white/10 bg-white/5 px-4">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
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

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold transition hover:border-[#00E5FF]/50 hover:text-[#00E5FF]"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile search */}
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-4">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
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

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050505]">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              {[
                { label: "Home", href: "/" },
                { label: "Movies", href: "/movies" },
                { label: "Series", href: "/series" },
                { label: "Trending", href: "/trending" },
                { label: "Login", href: "/login" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-semibold hover:text-[#00E5FF]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <Hero items={heroItems} />

      {/* Trending Movies and Series */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Trending Movies &amp; Series
            </h2>
            <p className="mt-1 text-sm text-white/50">
              Discover movies and series on OSHAKUR MOVIES.
            </p>
          </div>

          <Link
            href="/trending"
            className="shrink-0 text-sm font-semibold text-[#00E5FF] hover:underline"
          >
            View all
          </Link>
        </div>

        {trendingItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {trendingItems.map((item) => {
              const isMovie = item.contentType === "movie";
              const content = item.data;
              const createdAt = content.createdAt;

              return (
                <article
                  key={`${item.contentType}-${content.id}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#00E5FF]/40"
                >
                  <Link
                    href={
                      isMovie
                        ? `/movies/${content.slug}`
                        : `/series/${content.slug}`
                    }
                    className="block"
                  >
                    <div className="relative aspect-[2/3] overflow-hidden bg-white/5">
                      <img
                        src={
                          isMovie
                            ? `/images/movies/${content.image}`
                            : `/images/series/${content.image}`
                        }
                        alt={content.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />

                      <span className="absolute left-2 top-2 rounded-md bg-[#00E5FF] px-2 py-1 text-[10px] font-bold uppercase text-black">
                        {isMovie ? "Movie" : "Series"}
                      </span>
                    </div>

                    <div className="px-3 pt-3">
                      <h3 className="line-clamp-2 text-sm font-bold">
                        {content.title}
                      </h3>

                      {"rating" in content && content.rating && (
                        <p className="mt-1 text-xs text-white/60">
                          ★ {content.rating}
                        </p>
                      )}
                    </div>
                  </Link>

                  <div className="px-3 pb-3 pt-2">
                    {content.explainer && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedExplainer(content.explainer!.trim())
                        }
                        className="block max-w-full truncate text-left text-xs text-[#00E5FF] hover:underline"
                      >
                        🎙 {content.explainer}
                      </button>
                    )}

                    <p className="mt-1 text-xs text-white/50">
                      {getTimeAgo(createdAt)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
            No trending content available.
          </div>
        )}
      </section>

      {/* Explainers */}
      <section
        id="abasobanuzi"
        className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Abasobanuzi
          </h2>
          <p className="mt-1 text-sm text-white/50">
            Meet the explainers behind your favorite movies and series.
          </p>
        </div>

        {explainers.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {explainers.map((explainer) => {
              const totalTitles =
                explainer.movies.length + explainer.series.length;

              return (
                <button
                  key={explainer.name}
                  type="button"
                  onClick={() => setSelectedExplainer(explainer.name)}
                  className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-[#00E5FF]/50 hover:bg-white/10"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#00E5FF]/60 bg-gradient-to-br from-[#00E5FF]/20 to-[#E040FB]/20 text-2xl font-extrabold text-[#00E5FF] transition group-hover:scale-105">
                    {getInitials(explainer.name)}
                  </span>

                  <span className="mt-3 line-clamp-2 text-sm font-bold group-hover:text-[#00E5FF]">
                    {explainer.name}
                  </span>

                  <span className="mt-1 text-xs text-white/50">
                    {totalTitles}{" "}
                    {totalTitles === 1 ? "title" : "titles"}
                  </span>

                  <span className="mt-2 text-xs font-semibold text-[#00E5FF]">
                    View profile
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
            No explainer names have been added to the movie or series data yet.
          </div>
        )}
      </section>

      {/* Explainer profile panel */}
      {activeExplainer && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedExplainer(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${activeExplainer.name} profile`}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101010] p-5 sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#00E5FF]/60 bg-[#00E5FF]/10 text-xl font-extrabold text-[#00E5FF]">
                  {getInitials(activeExplainer.name)}
                </span>

                <div>
                  <h2 className="text-xl font-bold">
                    {activeExplainer.name}
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    {activeExplainer.movies.length +
                      activeExplainer.series.length}{" "}
                    narrated titles
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedExplainer(null)}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
                aria-label="Close explainer profile"
              >
                ✕
              </button>
            </div>

            {activeExplainer.movies.length > 0 && (
              <div className="mt-7">
                <h3 className="mb-3 text-lg font-bold">Movies</h3>
                <div className="space-y-2">
                  {activeExplainer.movies.map((movie) => (
                    <Link
                      key={movie.id}
                      href={`/movies/${movie.slug}`}
                      onClick={() => setSelectedExplainer(null)}
                      className="flex items-center gap-3 rounded-lg border border-white/10 p-3 transition hover:border-[#00E5FF]/40 hover:bg-white/5"
                    >
                      <img
                        src={`/images/movies/${movie.image}`}
                        alt=""
                        className="h-16 w-11 rounded object-cover"
                        loading="lazy"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {movie.title}
                        </span>
                        <span className="mt-1 block text-xs text-white/50">
                          {getTimeAgo(movie.createdAt)}
                        </span>
                      </span>
                      <span className="text-[#00E5FF]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeExplainer.series.length > 0 && (
              <div className="mt-7">
                <h3 className="mb-3 text-lg font-bold">Series</h3>
                <div className="space-y-2">
                  {activeExplainer.series.map((item) => (
                    <Link
                      key={item.id}
                      href={`/series/${item.slug}`}
                      onClick={() => setSelectedExplainer(null)}
                      className="flex items-center gap-3 rounded-lg border border-white/10 p-3 transition hover:border-[#00E5FF]/40 hover:bg-white/5"
                    >
                      <img
                        src={`/images/series/${item.image}`}
                        alt=""
                        className="h-16 w-11 rounded object-cover"
                        loading="lazy"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs text-white/50">
                          {getTimeAgo(item.createdAt)}
                        </span>
                      </span>
                      <span className="text-[#00E5FF]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Main content and filters */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {(["all", "new", "old"] as ContentFilter[]).map(
            (option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  filter === option
                    ? "bg-[#00E5FF] text-black"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {option === "all"
                  ? "All"
                  : option === "new"
                    ? "New"
                    : "Old"}
              </button>
            )
          )}
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
  explainer={movie.explainer}
  createdAt={movie.createdAt}
  onExplainerClick={(name) => setSelectedExplainer(name)}
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
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#00E5FF]/40"
                >
                  <Link
                    href={`/series/${item.slug}`}
                    className="block"
                  >
                    <div className="aspect-[2/3] overflow-hidden bg-white/5">
                      <img
                        src={`/images/series/${item.image}`}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-3 pt-3">
                      <h3 className="line-clamp-2 text-sm font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </Link>

                  <div className="px-3 pb-3 pt-2">
                    {item.explainer && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedExplainer(item.explainer!.trim())
                        }
                        className="block max-w-full truncate text-left text-xs text-[#00E5FF] hover:underline"
                      >
                        🎙 {item.explainer}
                      </button>
                    )}

                    <p className="mt-1 text-xs text-white/50">
                      {getTimeAgo(item.createdAt)}
                    </p>
                  </div>
                </article>
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
