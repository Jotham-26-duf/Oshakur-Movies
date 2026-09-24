import Link from "next/link";

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

export default function Hero({ movies }: HeroProps) {
  const movie = movies[0];

  if (!movie) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#121212]">
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[650px]">
        <img
          src={movie.image}
          alt={movie.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/20" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-4 pb-16 pt-24 sm:min-h-[580px] sm:px-6 sm:pb-20 lg:min-h-[650px] lg:px-10">
          <div className="max-w-2xl">
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
      </div>
    </section>
  );
}