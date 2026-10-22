
"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getExplainerImage } from "../lib/explainers";

interface HeroItem {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description?: string;
  explainer?: string;
  language: string;
  type: "movie" | "series";
  genres?: string[];
}

interface HeroProps {
  items: HeroItem[];
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="M8 5.5v13L19 12 8 5.5z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2.8l2.83 5.74 6.34.92 1.08 6.32L12 17.27l-5.66 2.99 1.08-6.32-4.59-4.48 6.34-.92L12 2.8z" />
    </svg>
  );
}

export default function Hero({ items }: HeroProps) {
  const safeItems = useMemo(() => items.slice(0, 8), [items]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalItems = safeItems.length;
  const activeItem = safeItems[activeIndex];

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (totalItems === 0) return;

      const nextIndex = (newIndex + totalItems) % totalItems;

      if (nextIndex === activeIndex) return;

      setIsChanging(true);
      setProgress(0);

      window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsChanging(false);
      }, 220);
    },
    [activeIndex, totalItems]
  );

  const goNext = useCallback(() => {
    changeSlide(activeIndex + 1);
  }, [activeIndex, changeSlide]);

  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const timer = window.setInterval(goNext, 7000);

    return () => window.clearInterval(timer);
  }, [goNext, isPaused, totalItems]);

  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const startTime = Date.now();
    const duration = 7000;

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startTime;

      setProgress(Math.min((elapsed / duration) * 100, 100));
    }, 50);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, totalItems]);

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === " ") {
        event.preventDefault();
        setIsPaused((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [goNext]);

  if (!activeItem) return null;

  const itemUrl =
    activeItem.type === "movie"
      ? `/movies/${activeItem.slug}`
      : `/series/${activeItem.slug}`;

  const imagePath =
    activeItem.type === "movie"
      ? `/images/movies/${activeItem.image}`
      : `/images/series/${activeItem.image}`;

  const itemType =
    activeItem.type === "movie" ? "Movie" : "Series";

  const genres = activeItem.genres ?? [];
  const getItemPath = (item: HeroItem) => item.type === "movie" ? `/images/movies/${item.image}` : `/images/series/${item.image}`;
  const neighboringItems = [-2, -1, 0, 1, 2].map((offset) => ({ item: safeItems[(activeIndex + offset + totalItems) % totalItems], offset })).filter(({item}) => Boolean(item));
  const activeGenre = genres[0];

  return (
    <section
      className="vod-hero relative overflow-hidden bg-[#090A0E]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured movies and series"
    >
      <div className="vod-hero-backdrop" aria-hidden="true"><img src={imagePath} alt="" /><div /></div>
      <div className="vod-hero-inner">
        <div className={`vod-hero-copy ${isChanging ? "vod-copy-changing" : ""}`}>
            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-[#E50914] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#E50914]/20">
                FEATURED
              </span>
              {activeGenre && <span className="rounded-md border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">{activeGenre}</span>}
              {activeItem.rating && activeItem.rating !== "N/A" && <span className="flex items-center gap-1 rounded-md bg-black/30 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md"><StarIcon />{activeItem.rating}</span>}
            </div>

            {/* TITLE */}
            <h1 className="mt-5 max-w-2xl text-[clamp(2.4rem,5vw,5rem)] font-black leading-[0.98] tracking-tight text-white drop-shadow-2xl">
              {activeItem.title}
            </h1>

            {/* EXPLAINER NAME */}
            {activeItem.explainer && (
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-white/85 sm:text-base">
                <img src={getExplainerImage(activeItem.explainer) || "/favicon.svg"} alt="" className="h-8 w-8 rounded-full border border-white/20 object-cover" />
                Explained by: {activeItem.explainer}
              </p>
            )}

            {/* INFO */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/75">
              <span>{activeItem.year}</span>

              <span className="text-white/30">•</span>

              <span>{itemType}</span>

              {activeItem.language && (
                <>
                  <span className="text-white/30">•</span>
                  <span>{activeItem.language}</span>
                </>
              )}

              {genres.length > 0 && (
                <>
                  <span className="text-white/30">•</span>

                  <div className="flex flex-wrap gap-2">
                    {genres.slice(0, 3).map((genre) => (
                      <span
                        key={`${activeItem.id}-${genre}`}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* DESCRIPTION */}
            {activeItem.description && (
              <p className="mt-5 line-clamp-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {activeItem.description}
              </p>
            )}

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={itemUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-[#E50914] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#E50914]/20 transition hover:-translate-y-0.5 hover:bg-[#FF2633]"
              >
                <PlayIcon />
                Watch Now
              </Link>

              <Link
                href={itemUrl}
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                More Details
              </Link>
            </div>

            {/* PROGRESS */}
            <div className="mt-8 flex max-w-md items-center gap-4">
              <span className="whitespace-nowrap text-xs font-bold tracking-widest text-white/70">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(totalItems).padStart(2, "0")}
              </span>

              <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-[#E50914] transition-[width] duration-75"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <span className="hidden text-xs uppercase tracking-widest text-white/40 sm:block">
                Now Showing
              </span>
            </div>
        </div>
        <div className="vod-carousel" aria-label="Featured title carousel">
          <div className="vod-carousel-scene" onTouchStart={(event) => { (event.currentTarget as HTMLDivElement).dataset.touchStart = String(event.touches[0].clientX); }} onTouchEnd={(event) => { const start = Number((event.currentTarget as HTMLDivElement).dataset.touchStart); const delta = event.changedTouches[0].clientX - start; if (Math.abs(delta) > 45) changeSlide(activeIndex + (delta < 0 ? 1 : -1)); }}>
            {neighboringItems.map(({item, offset}) => {
              const index = safeItems.findIndex((candidate) => candidate.id === item.id && candidate.type === item.type);
              return <button key={`${item.type}-${item.id}`} type="button" onClick={() => offset === 0 ? window.location.assign(item.type === "movie" ? `/movies/${item.slug}` : `/series/${item.slug}`) : changeSlide(index)} aria-label={offset === 0 ? `Open ${item.title}` : `Show ${item.title}`} aria-current={offset === 0 ? "true" : undefined} className={`vod-poster vod-poster-${offset < 0 ? `m${Math.abs(offset)}` : offset === 0 ? "active" : `p${offset}`}`}>
                <img src={getItemPath(item)} alt={item.title} loading={offset === 0 ? "eager" : "lazy"} />
                <span className="vod-poster-shade" />
                {offset === 0 && <span className="vod-poster-selected">Now featuring</span>}
              </button>;
            })}
          </div>
          <div className="vod-carousel-controls"><button type="button" onClick={() => changeSlide(activeIndex - 1)} aria-label="Previous featured title">‹</button><span>{String(activeIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}</span><button type="button" onClick={() => changeSlide(activeIndex + 1)} aria-label="Next featured title">›</button></div>
        </div>
      </div>

      {/* DOTS */}
      {totalItems > 1 && (
        <div className="mb-4 flex items-center justify-center gap-1.5">
          {safeItems.map((item, index) => (
            <button
              key={`dot-${item.type}-${item.id}-${index}`}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-[#E50914]"
                  : "w-1.5 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />
    </section>
  );
}
