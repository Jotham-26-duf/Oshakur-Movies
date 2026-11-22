export const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Cartoon",
  "Chinese",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Indian",
  "Martial Arts",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
  "Sport",
  "Biography",
  "Political",
  "Historical",
  "Western",
  "Others",
] as const;

export type Genre = (typeof GENRES)[number];

export const GENRE_SECTION_ORDER: readonly Genre[] = [
  "Action", "Romance", "Horror", "Indian", "Cartoon", "Sci-Fi", "Drama", "Comedy",
  "Adventure", "Crime", "Fantasy", "Mystery", "Thriller", "Animation", "Documentary",
  "War", "Western", "Others", "Chinese", "Family", "Martial Arts", "Music", "Musical",
  "Sport", "Biography", "Political", "Historical",
];

export const GENRE_SLUGS: Record<Genre, string> = {
  Action: "action", Adventure: "adventure", Animation: "animation", Cartoon: "cartoon",
  Chinese: "chinese",
  Comedy: "comedy", Crime: "crime", Documentary: "documentary", Drama: "drama", Family: "family",
  Fantasy: "fantasy", Horror: "horror", Indian: "indian", "Martial Arts": "martial-arts", Music: "music", Musical: "musical", Mystery: "mystery",
  Romance: "romance", "Sci-Fi": "sci-fi", Thriller: "thriller", War: "war",
  Western: "western", Others: "others", Sport: "sport", Biography: "biography", Political: "political", Historical: "historical",
};

export function genreFromSlug(slug: string): Genre | undefined {
  return GENRES.find((genre) => GENRE_SLUGS[genre] === slug);
}
