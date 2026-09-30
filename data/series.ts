
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
  {
    id: "7",
    title: "GENERATION TO GENERATION",
    slug: "generation-to-generation",
    year: "2026",
    rating: "8.0",
    image: "generation.jpg",
    description:
      "A family drama exploring relationships, challenges, conflicts, and experiences that connect different generations.",
    language: "English",
    genres: ["Drama", "Family"],
    isFeatured: false,
    createdAt: "2026-09-29",
  },
    {
    id: "8",
    title: "DEATH GAME",
    slug: "death-game",
    year: "2023",
    rating: "8.0",
    image: "death-game.jpg",
    description:
      "A suspenseful series following characters who face dangerous challenges and unexpected events.",
    language: "Korean",
    genres: ["Drama", "Thriller", "Mystery"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "9",
    title: "AGENT KIM",
    slug: "agent-kim",
    year: "2026",
    rating: "8.0",
    image: "agent-kim.jpg",
    description:
      "An action series following Agent Kim through dangerous missions, conflicts, and unexpected challenges.",
    language: "English",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "10",
    title: "A BONA FIDE KILLER",
    slug: "a-bona-fide-killer",
    year: "2023",
    rating: "8.0",
    image: "a-bona-fide-killer.jpg",
    description:
      "A thriller following a dangerous investigation filled with secrets, conflicts, and unexpected events.",
    language: "English",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "11",
    title: "ELITE FORCE",
    slug: "elite-force",
    year: "2026",
    rating: "8.0",
    image: "elite-force.jpg",
    description:
      "An action series following an elite team as they face dangerous missions and powerful enemies.",
    language: "English",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "12",
    title: "THE EAST PALACE",
    slug: "the-east-palace",
    year: "2026",
    rating: "8.0",
    image: "the-east-palace.jpg",
    description:
      "A historical drama filled with palace conflicts, relationships, ambition, and unexpected events.",
    language: "Chinese",
    genres: ["Drama", "Historical", "Romance"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "13",
    title: "THE FIXERS",
    slug: "the-fixers",
    year: "2026",
    rating: "8.0",
    image: "the-fixers.jpg",
    description:
      "A drama series following characters who become involved in complicated situations and difficult challenges.",
    language: "English",
    genres: ["Drama", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
  {
    id: "14",
    title: "LANTERNS",
    slug: "lanterns",
    year: "2026",
    rating: "8.0",
    image: "lanterns.jpg",
    description:
      "A mystery drama following characters as they uncover secrets and face unexpected events.",
    language: "English",
    genres: ["Drama", "Mystery", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
    {
    id: "15",
    title: "THE VAMPIRE DIARIES SEASON 1",
    slug: "the-vampire-diaries-season-1",
    year: "2009",
    rating: "8.0",
    image: "vampire-diaries.jpg",
    description:
      "A supernatural drama following Elena Gilbert and the Salvatore brothers as their lives become connected to the mysterious supernatural world of Mystic Falls.",
    language: "English",
    genres: ["Drama", "Fantasy", "Horror", "Romance", "Thriller"],
    isFeatured: false,
    createdAt: "2026-09-30",
  },
];
