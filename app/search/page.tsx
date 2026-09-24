import Link from "next/link";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";
  const searchTerm = query.toLowerCase();

  const movieResults = searchTerm
    ? movies.filter((movie) => {
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
    : [];

  const seriesResults = searchTerm
    ? series.filter((item) => {
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
    : [];

  const hasResults =
    movieResults.length > 0 || seriesResults.length > 0;

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Search
          </h1>

          <p className="mt-2 text-sm text-[#AAAAAA]">
            Search movies and series by title, year, rating,
            description, language, and more.
          </p>
        </div>

        {!query && (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
            <p className="text-[#AAAAAA]">
              Enter a movie or series name to search.
            </p>
          </div>
        )}

        {query && !hasResults && (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
            <h2 className="text-lg font-semibold">
              No results found
            </h2>

            <p className="mt-2 text-sm text-[#AAAAAA]">
              We couldn't find anything matching "{query}".
            </p>
          </div>
        )}

        {movieResults.length > 0 && (
          <section>
            <h2 className="mb-5 text-2xl font-bold">
              Movies
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movieResults.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movies/${movie.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 truncate font-semibold transition group-hover:text-[#00E5FF]">
                    {movie.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>★ {movie.rating}</span>
                  </div>

                  {movie.language && (
                    <p className="mt-1 truncate text-xs text-[#888888]">
                      {movie.language}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {seriesResults.length > 0 && (
          <section
            className={movieResults.length > 0 ? "mt-12" : ""}
          >
            <h2 className="mb-5 text-2xl font-bold">
              Series
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {seriesResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/series/${item.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 truncate font-semibold transition group-hover:text-[#00E5FF]">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>★ {item.rating}</span>
                  </div>

                  {item.language && (
                    <p className="mt-1 truncate text-xs text-[#888888]">
                      {item.language}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}