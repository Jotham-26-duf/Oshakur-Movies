import type { Movie } from "@/data/movies";
import type { SeriesSummary } from "@/data/series";
import type { Genre } from "@/data/genres";

export type GenreCollectionEntry =
  | { type: "movie"; item: Movie }
  | { type: "series"; item: SeriesSummary };

function dateValue(entry: GenreCollectionEntry) {
  const value = Date.parse(entry.item.createdAt);
  return Number.isFinite(value) ? value : Number.NEGATIVE_INFINITY;
}

export function sortGenreEntriesNewestFirst<T extends GenreCollectionEntry>(entries: readonly T[]): T[] {
  return [...entries].sort((a, b) => {
    const aDate = dateValue(a);
    const bDate = dateValue(b);
    if (aDate !== bDate) return aDate > bDate ? -1 : 1;
    if (a.type !== b.type) return a.type === "movie" ? -1 : 1;
    return a.item.id.localeCompare(b.item.id, undefined, { numeric: true });
  });
}

export function getGenreCollection(
  movies: readonly Movie[],
  series: readonly SeriesSummary[],
  genre: Genre,
): GenreCollectionEntry[] {
  const combined: GenreCollectionEntry[] = [
    ...movies.map((item) => ({ type: "movie" as const, item })),
    ...series.map((item) => ({ type: "series" as const, item })),
  ];
  return sortGenreEntriesNewestFirst(combined.filter(({ item }) => item.genres.includes(genre)));
}
