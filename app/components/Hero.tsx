
"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

interface HeroItem {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description?: string;
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

    setProgress(0);

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

  return (
    <section
      className="relative overflow-hidden bg-[#0D1117]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured movies and series"
    >
      {/* HERO */}
      <div className="relative min-h-[600px] md:min-h-[650px]">

        {/* RIGHT IMAGE — TOUCHES THE RIGHT EDGE */}
        <div className="absolute inset-y-0 right-0 z-10 w-full md:w-[58%]">
          <Link
            href={itemUrl}
            aria-label={`View ${activeItem.title}`}
            className="absolute inset-0 block"
          >
            <img
              key={activeItem.id}
              src={imagePath}
              alt={activeItem.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 58vw"
              className={`h-full w-full object-contain object-right ${
                isChanging
                  ? "scale-[0.98] opacity-0"
                  : "scale-100 opacity-100"
              } transition-all duration-500 ease-out`}
            />
          </Link>
        </div>

        {/* LEFT SHADOW → SMOOTH TRANSPARENT → IMAGE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[76%] bg-gradient-to-r from-[#0D1117] via-[#0D1117]/95 via-[30%] via-[#0D1117]/80 via-[44%] via-[#0D1117]/55 via-[57%] via-[#0D1117]/30 via-[68%] via-[#0D1117]/10 via-[78%] via-transparent via-[88%] to-transparent md:block" />

        {/* MOBILE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/55 to-transparent md:hidden" />

        {/* LEFT CONTENT */}
        <div className="relative z-30 mx-auto flex min-h-[600px] max-w-[1600px] items-center px-5 pb-28 pt-24 sm:px-8 md:min-h-[650px] md:px-10 lg:px-16">
          <div
            className={`max-w-xl transition-all duration-500 ${
              isChanging
                ? "-translate-x-5 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-[#2979FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2979FF]/20">
                {activeIndex === 0
                  ? "NEW"
                  : activeItem.type === "series"
                    ? "TRENDING"
                    : "FEATURED"}
              </span>

              <span className="flex items-center gap-1 rounded-md bg-black/30 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md">
                <StarIcon />
                {activeItem.rating}
              </span>

              <span className="rounded-md border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/85 backdrop-blur-md">
                {itemType}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
              {activeItem.title}
            </h1>

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
                className="inline-flex items-center gap-2 rounded-lg bg-[#2979FF] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#2979FF]/20 transition hover:-translate-y-0.5 hover:bg-[#1E6BE8]"
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
                  className="h-full rounded-full bg-[#2979FF] transition-[width] duration-75"
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
        </div>

        {/* BOTTOM FADE */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-gradient-to-t from-[#0D1117]/90 via-[#0D1117]/30 to-transparent" />
      </div>

      {/* CENTERED THUMBNAILS */}
      {totalItems > 1 && (
        <div className="relative z-40 -mt-20 mb-6 flex justify-center">
          <div className="flex items-end justify-center gap-3 overflow-x-auto px-4 pb-1">
            {safeItems.map((item, index) => {
              const thumbnailPath =
                item.type === "movie"
                  ? `/images/movies/${item.image}`
                  : `/images/series/${item.image}`;

              return (
                <button
                  key={`thumbnail-${item.type}-${item.id}-${index}`}
                  type="button"
                  onClick={() => changeSlide(index)}
                  aria-label={`Show ${item.title}`}
                  className={`group relative h-20 w-14 shrink-0 overflow-hidden rounded-md border transition-all duration-300 ${
                    index === activeIndex
                      ? "w-16 -translate-y-1 border-[#2979FF] shadow-lg shadow-[#2979FF]/30"
                      : "border-white/15 opacity-60 hover:-translate-y-1 hover:opacity-100"
                  }`}
                >
                  <img
                    src={thumbnailPath}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
                </button>
              );
            })}
          </div>
        </div>
      )}

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
                  ? "w-7 bg-[#2979FF]"
                  : "w-1.5 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}

      {/* BLUE ACCENT */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2979FF] via-[#00E5FF] to-transparent opacity-70" />
    </section>
  );
}


