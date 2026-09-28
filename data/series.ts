
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
    genres: ["Drama"],
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
    genres: ["Drama"],
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

  {
    id: "4",
    title: "JUMONG",
    slug: "jumong",
    year: "2006",
    rating: "8.5",
    image: "jumong.jpg",
    description:
      "A historical drama following Jumong's journey, struggles, relationships, and rise during a time of conflict and political change.",
    language: "Korean",
    genres: ["Drama", "Historical", "Action"],
    isFeatured: false,
    createdAt: "2026-09-28",
  },

  {
    id: "5",
    title: "OUTER BANKS SEASON 5",
    slug: "outer-banks",
    year: "2026",
    rating: "8.0",
    image: "outer-banks.jpg",
    description:
      "The story continues with new adventures, challenges, friendships, conflicts, and unexpected events.",
    language: "English",
    genres: ["Adventure", "Drama", "Mystery", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-28",
  },

  {
    id: "6",
    title: "BETWEEN FATHER AND SON",
    slug: "between-father-and-son",
    year: "2026",
    rating: "8.0",
    image: "between-father-and-son.jpg",
    description:
      "A family drama exploring the relationship between a father and his son as they face challenges, conflicts, and unexpected events.",
    language: "English",
    genres: ["Drama", "Family"],
    isFeatured: false,
    createdAt: "2026-09-28",
  },
];

