
import Link from "next/link";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

// Normalize spaces, capitalization, and punctuation.
function normalizeText(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

// Match every search word, even if the words are entered
// with extra spaces or in a different order.
function matchesSearch(searchableText: string, query: string): boolean {
  const text = normalizeText(searchableText);
  const words = normalizeText(query).split(" ").filter(Boolean);

  return words.every((word) => text.includes(word));
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().replace(/\s+/g, " ");

  const movieResults = query
    ? movies.filter((movie) => {
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

        return matchesSearch(searchableText, query);
      })
    : [];

  const seriesResults = query
    ? series.filter((item) => {
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

        return matchesSearch(searchableText, query);
      })
    : [];

  const totalResults = movieResults.length + seriesResults.length;

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Search Movies &amp; Series
          </h1>

          <p className="mt-2 text-sm text-[#AAAAAA]">
            Search by title, year, rating, language, description,
            or explainer. Spaces are supported.
          </p>
        </div>

        {!query && (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
            <p className="text-[#AAAAAA]">
              Enter a movie title, series name, or explainer name
              in the search box to find matching results.
            </p>
          </div>
        )}

        {query && (
          <p className="mb-8 text-sm text-[#AAAAAA]">
            {totalResults > 0 ? (
              <>
                Found{" "}
                <span className="font-semibold text-white">
                  {totalResults}
                </span>{" "}
                matching {totalResults === 1 ? "result" : "results"} for{" "}
                <span className="font-semibold text-[#00E5FF]">
                  &quot;{query}&quot;
                </span>
              </>
            ) : (
              <>
                No results found for{" "}
                <span className="font-semibold text-white">
                  &quot;{query}&quot;
                </span>
                . Try another search.
              </>
            )}
          </p>
        )}

        {/* MOVIES */}
        {movieResults.length > 0 && (
          <section>
            <h2 className="mb-5 text-2xl font-bold">
              Movies ({movieResults.length})
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movieResults.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movies/${movie.slug}`}
                  className="group min-w-0"
                >
                  <div className="overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={`/images/movies/${movie.image}`}
                      alt={movie.title}
                      loading="lazy"
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 font-semibold transition group-hover:text-[#00E5FF]">
                    {movie.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>★ {movie.rating}</span>
                  </div>

                  {movie.language && (
                    <p className="mt-1 text-xs text-[#888888]">
                      {movie.language}
                    </p>
                  )}

                  {movie.explainer?.trim() && (
                    <p className="mt-1 text-xs text-[#00E5FF]">
                      🎙 {movie.explainer}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* SERIES */}
        {seriesResults.length > 0 && (
          <section className={movieResults.length > 0 ? "mt-12" : ""}>
            <h2 className="mb-5 text-2xl font-bold">
              Series ({seriesResults.length})
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {seriesResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/series/${item.slug}`}
                  className="group min-w-0"
                >
                  <div className="overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={`/images/series/${item.image}`}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 font-semibold transition group-hover:text-[#00E5FF]">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>★ {item.rating}</span>
                  </div>

                  {item.language && (
                    <p className="mt-1 text-xs text-[#888888]">
                      {item.language}
                    </p>
                  )}

                  {item.explainer?.trim() && (
                    <p className="mt-1 text-xs text-[#00E5FF]">
                      🎙 {item.explainer}
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
