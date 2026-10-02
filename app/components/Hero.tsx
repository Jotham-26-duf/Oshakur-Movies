"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
}

interface HeroProps {
  items: HeroItem[];
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Hero({ items }: HeroProps) {
  const featuredItems = items;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (featuredItems.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % featuredItems.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredItems.length]);

  useEffect(() => {
    if (currentIndex >= featuredItems.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, featuredItems.length]);

  if (featuredItems.length === 0) {
    return null;
  }

  const item = featuredItems[currentIndex];

  const itemUrl =
    item.type === "movie"
      ? `/movies/${item.slug}`
      : `/series/${item.slug}`;

  function showPrevious() {
    setCurrentIndex((current) =>
      current === 0 ? featuredItems.length - 1 : current - 1
    );
  }

  function showNext() {
    setCurrentIndex(
      (current) => (current + 1) % featuredItems.length
    );
  }

  function goToSlide(index: number) {
    setCurrentIndex(index);
  }

  return (
    <section className="bg-[#0D0D0D] px-3 py-5 sm:px-5 sm:py-7 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="relative min-h-[560px] overflow-hidden rounded-2xl bg-[#0D0D0D] shadow-2xl sm:min-h-[620px] lg:min-h-[680px]">

          {/* =====================================================
              BACKGROUND ARTWORK
              ===================================================== */}
          <Link
            href={itemUrl}
            aria-label={`View ${item.title}`}
            className="absolute inset-0 z-0 block"
          >
            <img
              key={item.id}
              src={
                item.type === "movie"
                  ? `/images/movies/${item.image}`
                  : `/images/series/${item.image}`
              }
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
            />
          </Link>

          {/* General dark overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />

          {/* =====================================================
              DUAL-ZONE BACKGROUND
              DARK LEFT → IMAGE RIGHT
              ===================================================== */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/95 via-[38%] via-[#0D0D0D]/65 via-[55%] to-transparent" />

          {/* Soft dark edge around artwork */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-l from-black/10 via-transparent to-transparent" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/35 to-transparent" />

          {/* Top fade */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

          {/* =====================================================
              TOP 1
              ===================================================== */}
          <div className="absolute right-5 top-5 z-50 sm:right-8 sm:top-8 lg:right-10">
            <div className="flex items-center gap-2 rounded-full border border-[#2B6CB0]/60 bg-black/55 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md">
              <span className="text-base">🔥</span>
              <span>Top 1</span>
            </div>
          </div>

          {/* =====================================================
              PREVIOUS ARROW
              ===================================================== */}
          {featuredItems.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous featured item"
              className="absolute left-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white/65 backdrop-blur-sm transition hover:bg-[#2B6CB0] hover:text-white sm:left-5 sm:h-12 sm:w-12"
            >
              <ArrowLeftIcon />
            </button>
          )}

          {/* =====================================================
              NEXT ARROW
              ===================================================== */}
          {featuredItems.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next featured item"
              className="absolute right-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white/65 backdrop-blur-sm transition hover:bg-[#2B6CB0] hover:text-white sm:right-5 sm:h-12 sm:w-12"
            >
              <ArrowRightIcon />
            </button>
          )}

          {/* =====================================================
              LEFT INFORMATION
              ===================================================== */}
          <div className="relative z-30 flex min-h-[560px] items-center px-8 pb-32 pt-24 sm:min-h-[620px] sm:px-12 sm:pb-36 lg:min-h-[680px] lg:px-16">
            <div
              key={`content-${item.id}`}
              className="max-w-[570px]"
            >
              {/* NEW + RATING + TYPE */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-[#2B6CB0] bg-[#2B6CB0]/20 px-3 py-1 text-xs font-bold tracking-wider text-[#63A4FF]">
                  NEW
                </span>

                <span className="flex items-center gap-1 rounded-md border border-white/10 bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  <span className="text-[#FFC107]">★</span>
                  {item.rating}
                </span>

                <span className="rounded-md border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold text-gray-200 backdrop-blur-sm">
                  {item.type === "series" ? "SERIES" : "MOVIE"}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {item.title}
              </h1>

              {/* METADATA */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-gray-300">
                  {item.year}
                </span>

                <span className="text-gray-500">•</span>

                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  Latest
                </span>

                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  {item.type === "series" ? "Series" : "Movies"}
                </span>

                {item.language && (
                  <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    {item.language}
                  </span>
                )}
              </div>

              {/* DESCRIPTION */}
              {item.description && (
                <p className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base">
                  {item.description}
                </p>
              )}

              {/* WATCH BUTTON */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={itemUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2B6CB0] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#347FC8]"
                >
                  <span>▶</span>
                  <span>Watch Now</span>
                </Link>

                <Link
                  href={itemUrl}
                  className="rounded-lg border border-white/15 bg-black/40 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#2B6CB0] hover:text-[#63A4FF]"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================================
              THUMBNAILS
              RIGHT HALF + CENTERED
              ===================================================== */}
          {featuredItems.length > 1 && (
            <div className="absolute bottom-10 left-[52%] z-40 flex w-[43%] -translate-x-1/2 items-end justify-center gap-2 sm:gap-3">
              {featuredItems.map((slide, index) => {
                const isActive = index === currentIndex;

                return (
                  <button
                    key={`${slide.type}-${slide.id}-${index}`}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                    className={`group relative shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                      isActive
                        ? "h-24 w-16 scale-110 border-2 border-[#2B6CB0] shadow-lg shadow-[#2B6CB0]/50 sm:h-28 sm:w-20"
                        : "h-20 w-14 border border-white/20 opacity-65 hover:scale-105 hover:opacity-100 sm:h-24 sm:w-16"
                    }`}
                  >
                    <img
                      src={
                        slide.type === "movie"
                          ? `/images/movies/${slide.image}`
                          : `/images/series/${slide.image}`
                      }
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />

                    {isActive && (
                      <div className="absolute inset-0 bg-[#2B6CB0]/10" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* =====================================================
              PROGRESS INDICATORS
              ALWAYS CENTERED
              ===================================================== */}
          {featuredItems.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
              {featuredItems.map((slide, index) => (
                <button
                  key={`dot-${slide.type}-${slide.id}-${index}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${slide.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#2B6CB0]"
                      : "w-1.5 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}