
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import SiteBottom from "./SiteBottom";
import Navbar from "./Navbar";
import { getCanonicalExplainerName, getExplainerImage, normalizeExplainerName } from "../lib/explainers";

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
  key: string;
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
  const [selectedExplainer, setSelectedExplainer] =
    useState<string | null>(null);

  const orderedMovies = useMemo(() => {
    const featured = movies
      .filter((movie) => movie.isFeatured)
      ;

    const regular = movies.filter((movie) => !movie.isFeatured).sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));

    return [...featured, ...regular];
  }, [movies]);

  const orderedSeries = useMemo(() => {
    const featured = series
      .filter((item) => item.isFeatured)
      ;

    const regular = series.filter((item) => !item.isFeatured).sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));

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

  // Trending contains featured titles only, newest first.
  const trendingItems = useMemo(() => {
    const result: TrendingItem[] = [];
    const recentMovies = movies.filter((movie) => movie.isFeatured).sort((a, b) =>
      (b.createdAt ?? "").localeCompare(a.createdAt ?? "")
    ).slice(0, 10);
    const recentSeries = series.filter((item) => item.isFeatured).sort((a, b) =>
      (b.createdAt ?? "").localeCompare(a.createdAt ?? "")
    ).slice(0, 20);

    for (let index = 0; index < Math.max(recentMovies.length, recentSeries.length); index++) {
      if (recentMovies[index]) {
        result.push({
          contentType: "movie",
          data: recentMovies[index],
        });
      }

      if (recentSeries[index]) {
        result.push({
          contentType: "series",
          data: recentSeries[index],
        });
      }
    }

    return result;
  }, [movies, series]);

  const mixedCatalog = useMemo(() => {
    const result: TrendingItem[] = [];
    const appendGroups = (moviePool: HomeMovie[], seriesPool: HomeSeries[]) => {
      for (let index = 0; index < Math.max(moviePool.length, seriesPool.length); index += 2) {
        moviePool.slice(index, index + 2).forEach((data) => result.push({ contentType: "movie", data }));
        seriesPool.slice(index, index + 2).forEach((data) => result.push({ contentType: "series", data }));
      }
    };
    appendGroups(orderedMovies.filter((item) => item.isFeatured), orderedSeries.filter((item) => item.isFeatured));
    appendGroups(orderedMovies.filter((item) => !item.isFeatured), orderedSeries.filter((item) => !item.isFeatured));
    return result;
  }, [orderedMovies, orderedSeries]);

  // Build explainer profiles from the names already in your data.
  const explainers = useMemo(() => {
    const profileMap = new Map<string, Explainer>();

    for (const movie of movies) {
      const name = movie.explainer?.trim();
      if (!name) continue;

      const key = normalizeExplainerName(name);

      if (!profileMap.has(key)) {
        profileMap.set(key, {
          key,
          name: getCanonicalExplainerName(name),
          movies: [],
          series: [],
        });
      }

      profileMap.get(key)!.movies.push(movie);
    }

    for (const item of series) {
      const name = item.explainer?.trim();
      if (!name) continue;

      const key = normalizeExplainerName(name);

      if (!profileMap.has(key)) {
        profileMap.set(key, {
          key,
          name: getCanonicalExplainerName(name),
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
    (item) => item.key === selectedExplainer
  );

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar />

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
            className="shrink-0 text-sm font-semibold text-[#E50914] hover:underline"
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
                  className="group media-tile min-w-0 rounded-xl border border-white/10 bg-white/5 transition hover:border-[#E50914]/40"
                >
                  <Link
                    href={
                      isMovie
                        ? `/movies/${content.slug}`
                        : `/series/${content.slug}`
                    }
                    className="block"
                  >
                    <div className="media-tile-frame relative aspect-[2/3]">
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

                      <span className="absolute left-2 top-2 rounded-md bg-[#E50914] px-2 py-1 text-[10px] font-bold uppercase text-black">
                        {isMovie ? "Movie" : "Series"}
                      </span>
                      <span className="media-tile-overlay pointer-events-none absolute inset-0 grid place-items-center text-2xl text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">▶</span>
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
                          setSelectedExplainer(normalizeExplainerName(content.explainer!))
                        }
                        className="block max-w-full truncate text-left text-xs text-[#E50914] hover:underline"
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
          <div className="explainer-marquee" aria-label="Movie and series explainers">
            <div className="explainer-track w-max">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "duplicate-track" : "primary-track"}
                  className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
                  aria-hidden={isDuplicate}
                  inert={isDuplicate}
                >
                  {explainers.map((explainer) => (
                    <button
                      key={explainer.key}
                      type="button"
                      onClick={() => setSelectedExplainer(explainer.key)}
                      className="group flex w-24 shrink-0 flex-col items-center gap-2 py-2 text-center sm:w-28"
                    >
                      <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#E50914]/50 bg-white/5 transition group-hover:scale-105 group-hover:border-[#E50914] sm:h-20 sm:w-20">
                        {getExplainerImage(explainer.name) ? (
                          <img
                            src={getExplainerImage(explainer.name)}
                            alt={explainer.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-lg font-extrabold text-[#E50914]">{getInitials(explainer.name)}</span>
                        )}
                      </span>
                      <span className="max-w-full truncate text-xs font-semibold text-white/85 transition group-hover:text-[#E50914] sm:text-sm">
                        {explainer.name}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
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
                {getExplainerImage(activeExplainer.name) ? (
                  <img src={getExplainerImage(activeExplainer.name)} alt={activeExplainer.name} className="h-16 w-16 shrink-0 rounded-full border-2 border-[#E50914]/60 object-cover" />
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#E50914]/60 bg-[#E50914]/10 text-xl font-extrabold text-[#E50914]">{getInitials(activeExplainer.name)}</span>
                )}

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
                      className="flex items-center gap-3 rounded-lg border border-white/10 p-3 transition hover:border-[#E50914]/40 hover:bg-white/5"
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
                      <span className="text-[#E50914]">→</span>
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
                      className="flex items-center gap-3 rounded-lg border border-white/10 p-3 transition hover:border-[#E50914]/40 hover:bg-white/5"
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
                      <span className="text-[#E50914]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Featured and newest mixed catalog */}
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
                    ? "bg-[#E50914] text-black"
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

        <div className="mb-5 flex items-center justify-between gap-4">
          <div><h2 className="text-2xl font-bold sm:text-3xl">Movies &amp; Series</h2><p className="mt-1 text-sm text-white/50">Featured stories, followed by the latest additions.</p></div>
          <div className="flex gap-4"><Link href="/movies" className="text-sm font-semibold text-[#E50914] hover:underline">Movies</Link><Link href="/series" className="text-sm font-semibold text-[#E50914] hover:underline">Series</Link></div>
        </div>

        {mixedCatalog.length ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {mixedCatalog.map((entry) => entry.contentType === "movie" ? <MovieCard key={`movie-${entry.data.id}`} title={entry.data.title} year={entry.data.year} rating={entry.data.rating} image={entry.data.image} slug={entry.data.slug} explainer={entry.data.explainer} createdAt={entry.data.createdAt} onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /> : <article key={`series-${entry.data.id}`} className="cinema-card group min-w-0"><Link href={`/series/${entry.data.slug}`} className="block"><div className="media-poster relative"><img src={`/images/series/${entry.data.image}`} alt={entry.data.title} loading="lazy"/><span className="media-play" aria-hidden="true">▶</span></div><h3 className="media-title">{entry.data.title}</h3></Link><div className="media-byline">{entry.data.explainer?.trim() ? <button type="button" onClick={() => setSelectedExplainer(normalizeExplainerName(entry.data.explainer!))} className="truncate text-left hover:underline">{getExplainerImage(entry.data.explainer) && <img src={getExplainerImage(entry.data.explainer)} alt=""/>}🎙 {entry.data.explainer}</button> : <span className="text-white/35">Explainer unavailable</span>}</div><time className="media-time" dateTime={entry.data.createdAt}>{getTimeAgo(entry.data.createdAt)}</time></article>)}
        </div> : <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/50">No movies or series found.</div>}
      </section>

      {/* Footer */}
      <SiteBottom />
    </main>
  );
}
