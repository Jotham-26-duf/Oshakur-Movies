
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { getSeriesSummaries, series } from "@/data/series";
import MovieCard from "@/app/components/MovieCard";

export const metadata: Metadata = {
  title: "Search Movies & Series",
  description: "Search movies and series on Oshakur Movies.",
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

type SearchableCatalogItem = {
  title: string;
  slug: string;
  year?: string;
  rating?: string;
  description?: string;
  language?: string;
  explainer?: string;
  isFeatured?: boolean;
};

// Normalize spaces, capitalization, and punctuation.
function normalizeText(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSearchIndex<T extends SearchableCatalogItem>(items: T[]) {
  return items.map((item) => ({
    item,
    text: normalizeText(
      [
        item.title,
        item.slug,
        item.year,
        item.rating,
        item.description,
        item.language,
        item.explainer,
        item.isFeatured ? "featured" : "",
      ].join(" "),
    ),
  }));
}

// Catalog data is static; normalize its searchable fields once per Worker
// isolate rather than rebuilding the same strings for every request.
const movieSearchIndex = buildSearchIndex(movies);
const seriesSearchIndex = buildSearchIndex(series);

function findMatches<T>(index: { item: T; text: string }[], words: string[]): T[] {
  return index
    .filter(({ text }) => words.every((word) => text.includes(word)))
    .map(({ item }) => item);
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = String(params.q ?? "").replace(/\s+/g, " ").trim();
  const searchWords = normalizeText(query).split(" ").filter(Boolean);

  const movieResults = query ? findMatches(movieSearchIndex, searchWords) : [];
  const seriesResults = query ? findMatches(seriesSearchIndex, searchWords) : [];

  const totalResults = movieResults.length + seriesResults.length;

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar series={getSeriesSummaries()} />
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

            <div className="catalog-card-grid">
              {movieResults.map((movie) => (
                <MovieCard key={`movie-${movie.id}`} title={movie.title} year={movie.year ?? ""} rating={movie.rating ?? ""} image={movie.image} slug={movie.slug} explainer={movie.explainer} />
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

            <div className="catalog-card-grid">
              {seriesResults.map((item) => (
                <MovieCard key={`series-${item.id}`} title={item.title} year={item.year ?? ""} rating={item.rating ?? ""} image={item.image} slug={item.slug} hrefPrefix="/series" explainer={item.explainer} />
              ))}
            </div>
          </section>
        )}
      </div>
      <SiteBottom />
    </main>
  );
}
