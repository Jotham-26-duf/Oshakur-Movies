export interface Movie {
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
  streamUrl?: string;
  downloadUrl?: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "ALPHA ROCKY",
    slug: "alpha-rocky",
    year: "2026",
    rating: "8.0",
    image: "...",
    description: "...",
    language: "English",
    genres: ["Action", "Drama"],
    isFeatured: true,
    createdAt: "2026-09-24",
    streamUrl: "https://hgcloud.to/kp56qg1vfgwp",
    downloadUrl:
      "https://www.mediafire.com/file/xpyvkcz2mzmlz6y/ALPHA_ROCKY.mp4/file",
  },
  {
    id: "2",
    title: "The Dark Knight",
    slug: "the-dark-knight",
    year: "2008",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "Batman faces a dangerous criminal who threatens Gotham City and challenges its defenders.",
    language: "English",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-01-02",
  },
  {
    id: "3",
    title: "Avengers: Endgame",
    slug: "avengers-endgame",
    year: "2019",
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "The Avengers attempt to reverse the devastating events that changed the universe.",
    language: "English",
    genres: ["Action", "Adventure", "Drama"],
    isFeatured: true,
    createdAt: "2026-01-03",
  },
  {
    id: "4",
    title: "Extraction",
    slug: "extraction",
    year: "2020",
    rating: "6.8",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A skilled mercenary is sent on a dangerous rescue mission in a hostile environment.",
    language: "English",
    genres: ["Action", "Thriller"],
    isFeatured: false,
    createdAt: "2026-01-04",
  },
  {
    id: "5",
    title: "John Wick",
    slug: "john-wick",
    year: "2014",
    rating: "7.4",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A retired assassin is forced back into the criminal world after a devastating personal loss.",
    language: "English",
    genres: ["Action", "Thriller"],
    isFeatured: false,
    createdAt: "2026-01-05",
  },
  {
    id: "6",
    title: "Black Panther",
    slug: "black-panther",
    year: "2018",
    rating: "7.3",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A new king must protect his nation while facing a powerful challenger from his past.",
    language: "English",
    genres: ["Action", "Adventure", "Drama"],
    isFeatured: false,
    createdAt: "2026-01-06",
  },
  {
    id: "7",
    title: "Spider-Man: No Way Home",
    slug: "spider-man-no-way-home",
    year: "2021",
    rating: "8.2",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "Spider-Man's world is changed when a spell causes unexpected visitors from other realities to appear.",
    language: "English",
    genres: ["Action", "Adventure", "Drama"],
    isFeatured: false,
    createdAt: "2026-01-07",
  },
  {
    id: "8",
    title: "Avatar",
    slug: "avatar",
    year: "2009",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A former marine becomes involved in a conflict between humans and the inhabitants of an alien world.",
    language: "English",
    genres: ["Action", "Adventure", "Drama"],
    isFeatured: false,
    createdAt: "2026-01-08",
  },
  {
    id: "9",
    title: "The Equalizer",
    slug: "the-equalizer",
    year: "2014",
    rating: "7.3",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "A mysterious man with a dangerous past decides to help people who cannot defend themselves.",
    language: "English",
    genres: ["Action", "Thriller", "Drama"],
    isFeatured: false,
    createdAt: "2026-01-09",
  },
  {
    id: "10",
    title: "Fast X",
    slug: "fast-x",
    year: "2023",
    rating: "5.8",
    image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    description:
      "The Fast family faces a new enemy determined to settle an old score.",
    language: "English",
    genres: ["Action", "Adventure", "Thriller"],
    isFeatured: false,
    createdAt: "2026-01-10",
  },
];