export interface Series {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description: string;
  language: string;
  genres: string[];
  isFeatured: boolean;
  createdAt: string;
}

export const series: Series[] = [
  {
    id: "1",
    title: "BEAUTY IN BLACK",
    slug: "beauty-in-black",
    year: "2022",
    rating: "8.0",
    image: "beauty.jpg",
    description:
      "A drama series following the complicated lives, relationships, and struggles of its characters.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: false,
    createdAt: "2026-02-05",
  },

  {
    id: "2",
    title: "BEAUTY IN BLACK SEASON 2",
    slug: "beauty-in-black-season-2",
    year: "2024",
    rating: "8.0",
    image: "beautyTwo.jpg",
    description:
      "The story continues with new challenges, conflicts, relationships, and unexpected events.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: false,
    createdAt: "2026-02-05",
  },

  {
    id: "3",
    title: "TREADSTONE",
    slug: "treadstone",
    year: "2024",
    rating: "8.0",
    image: "treadstone.jpg",
    description:
      "An action thriller about covert operatives connected to a secret government program.",
    language: "English",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-02-05",
  },
];