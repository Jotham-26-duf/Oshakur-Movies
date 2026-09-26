"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroMovie {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description: string;
  language: string;
}

interface HeroProps {
  movies: HeroMovie[];
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

export default function Hero({ movies }: HeroProps) {
  const featuredMovies = movies;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (featuredMovies.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % featuredMovies.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  if (featuredMovies.length === 0) {
    return null;
  }

  const movie = featuredMovies[currentIndex];

  function showPrevious() {
    setCurrentIndex((current) =>
      current === 0 ? featuredMovies.length - 1 : current - 1
    );
  }

  function showNext() {
    setCurrentIndex(
      (current) => (current + 1) % featuredMovies.length
    );
  }

  function goToSlide(index: number) {
    setCurrentIndex(index);
  }

  return (
    <section className="relative overflow-hidden bg-[#121212]">
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[650px]">

        {/* Full Hero Background */}
        <Link
          href={`/movies/${movie.slug}`}
          aria-label={`View ${movie.title}`}
          className="absolute inset-0 z-0 block"
        >
          <img
            key={movie.id}
            src={`/images/movies/${movie.image}`}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
          />
        </Link>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />

        {/* Left cinematic gradient */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-transparent" />

        {/* Bottom cinematic gradient */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

        {/* Top gradient */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#121212]/60 via-transparent to-transparent" />

        {/* Previous button */}
        {featuredMovies.length > 1 && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous featured movie"
            className="absolute left-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#2979FF] sm:left-5"
          >
            <ArrowLeftIcon />
          </button>
        )}

        {/* Next button */}
        {featuredMovies.length > 1 && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Next featured movie"
            className="absolute right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#2979FF] sm:right-5"
          >
            <ArrowRightIcon />
          </button>
        )}

        {/* Movie information */}
        <div className="relative z-30 mx-auto flex min-h-[520px] max-w-7xl items-end px-4 pb-16 pt-24 sm:min-h-[580px] sm:px-6 sm:pb-20 lg:min-h-[650px] lg:px-10">
          <div
            key={`content-${movie.id}`}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
              Featured Movie
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {movie.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#AAAAAA]">
              <span>{movie.year}</span>

              <span>•</span>

              <span>★ {movie.rating}</span>

              {movie.language && (
                <>
                  <span>•</span>
                  <span>{movie.language}</span>
                </>
              )}
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#CCCCCC] sm:text-base">
              {movie.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/movies/${movie.slug}`}
                className="rounded-lg bg-[#2979FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2468d7]"
              >
                ▶ Watch Now
              </Link>

              <Link
                href={`/movies/${movie.slug}`}
                className="rounded-lg border border-white/10 bg-[#1B1B1B]/80 px-6 py-3 text-sm font-bold text-white transition hover:border-[#00E5FF] hover:text-[#00E5FF]"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        {featuredMovies.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
            {featuredMovies.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${item.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#00E5FF]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}