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
    title: "Stranger Things",
    slug: "stranger-things",
    year: "2016",
    rating: "8.6",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A group of young friends uncover mysterious events connected to a strange alternate world.",
    language: "English",
    genres: ["Drama", "Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-02-01",
  },
  {
    id: "2",
    title: "The Last of Us",
    slug: "the-last-of-us",
    year: "2023",
    rating: "8.6",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A survivor and a young girl travel through a dangerous world after civilization collapses.",
    language: "English",
    genres: ["Drama", "Action", "Thriller"],
    isFeatured: true,
    createdAt: "2026-02-02",
  },
  {
    id: "3",
    title: "Breaking Bad",
    slug: "breaking-bad",
    year: "2008",
    rating: "9.5",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A chemistry teacher enters the world of illegal drug production and finds his life transformed.",
    language: "English",
    genres: ["Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-02-03",
  },
  {
    id: "4",
    title: "Money Heist",
    slug: "money-heist",
    year: "2017",
    rating: "8.2",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A group of criminals follows an elaborate plan designed by a mysterious mastermind.",
    language: "Spanish",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-02-04",
  },
  {
    id: "5",
    title: "Wednesday",
    slug: "wednesday",
    year: "2022",
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "Wednesday Addams investigates strange events while attending a mysterious academy.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror"],
    isFeatured: false,
    createdAt: "2026-02-05",
  },
];