import type { Movie } from "@/data/movies";
import type { Series } from "@/data/series";

type Recommendation = (Movie | Series) & { type: "movie" | "series" };
type RecommendationTarget = Pick<Movie | Series, "slug" | "genres" | "explainer"> & { createdAt?: string };

function compareRecommendations(a: Recommendation, b: Recommendation, target: RecommendationTarget) {
  return Number(b.genres?.some((genre) => target.genres.includes(genre))) - Number(a.genres?.some((genre) => target.genres.includes(genre)))
    || Number(b.explainer?.trim().toLowerCase() === target.explainer?.trim().toLowerCase()) - Number(a.explainer?.trim().toLowerCase() === target.explainer?.trim().toLowerCase())
    || (b.createdAt ?? "").localeCompare(a.createdAt ?? "");
}

export function selectRecommendations(
  candidates: Recommendation[],
  target: RecommendationTarget,
  excludeType: "movie" | "series",
  limit = 6,
) {
  const top: Recommendation[] = [];
  for (const candidate of candidates) {
    if (candidate.type === excludeType && candidate.slug === target.slug) continue;
    let index = 0;
    while (index < top.length && compareRecommendations(candidate, top[index], target) >= 0) index += 1;
    if (index < limit) {
      top.splice(index, 0, candidate);
      if (top.length > limit) top.pop();
    }
  }
  return top;
}
