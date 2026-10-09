export interface Series {
  id: string;
  title: string;
  slug: string;
  year: string;
  rating: string;
  image: string;
  description: string;
  language: string;
  explainer?: string;
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
    explainer: "ROCK KIMOMO",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
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
    explainer: "",
    genres: ["Drama", "Fantasy", "Horror", "Romance", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
  },

  {
    id: "16",
    title: "SHAQUE",
    slug: "shaque",
    year: "2026",
    rating: "8.0",
    image: "shaque.jpg",
    description:
      "A drama series following complicated relationships, personal struggles, secrets, and unexpected events that change the lives of its characters.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "17",
    title: "A.D. THE BIBLE CONTINUES",
    slug: "ad-the-bible-continues",
    year: "2015",
    rating: "8.0",
    image: "ad-the-bible-continues.jpg",
    description:
      "A historical drama continuing the story of the early followers of Jesus as they face persecution, political conflict, faith, and difficult challenges.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Historical"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "18",
    title: "VIS A VIS SEASON 4",
    slug: "vis-a-vis",
    year: "2019",
    rating: "8.0",
    image: "vis-a-vis.jpg",
    description:
      "A Spanish prison drama following women dealing with dangerous conflicts, alliances, survival, revenge, and unexpected events inside and outside prison.",
    language: "Spanish",
    explainer: "",
    genres: ["Drama", "Thriller", "Crime"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "19",
    title: "BEAUTY IN BLACK SEASON 3",
    slug: "beauty-in-black-season-3",
    year: "2026",
    rating: "8.0",
    image: "beautyThree.jpg",
    description:
      "The story continues with new conflicts, betrayals, relationships, power struggles, and dangerous challenges surrounding the characters.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "20",
    title: "MY COUNTRY: THE NEW AGE",
    slug: "my-country",
    year: "2019",
    rating: "8.0",
    image: "my-country.jpg",
    description:
      "A historical Korean drama following two friends whose relationship is tested by political conflict, ambition, loyalty, war, and their different visions for the future.",
    language: "Korean",
    explainer: "",
    genres: ["Drama", "Historical", "Action"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "21",
    title: "THE GIRLFRIEND",
    slug: "the-girlfriend",
    year: "2025",
    rating: "8.0",
    image: "the-girlfriend.jpg",
    description:
      "A psychological drama exploring relationships, jealousy, secrets, family dynamics, and the complicated connection between a woman and her son's girlfriend.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "22",
    title: "THE OVAL SEASON 1",
    slug: "the-oval",
    year: "2019",
    rating: "8.0",
    image: "the-oval.jpg",
    description:
      "A political drama following a powerful family inside the White House while exploring political secrets, family conflicts, relationships, power, and dangerous struggles.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Thriller", "Political"],
    isFeatured: true,
    createdAt: "2026-10-04",
  },

  {
    id: "23",
    title: "TEACH A LESSON",
    slug: "teach-a-lesson",
    year: "2026",
    rating: "8.0",
    image: "teach-a-lesson.jpg",
    description:
      "A drama series exploring relationships, challenges, conflicts, and unexpected events surrounding its characters.",
    language: "English",
    explainer: "",
    genres: ["Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-06",
  },

  {
    id: "24",
    title: "TAKEN SEASON 1",
    slug: "taken-season-1",
    year: "2017",
    rating: "8.0",
    image: "taken.jpg",
    description:
      "An action thriller series following Bryan Mills and his journey through dangerous missions, investigations, and unexpected threats.",
    language: "English",
    explainer: "",
    genres: ["Action", "Drama", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-06",
  },
    {
    id: "25",
    title: "HE'S INTO HER SEASON 1",
    slug: "hes-into-her-season-1",
    year: "2021",
    rating: "8.0",
    image: "hes-into-her.jpg",
    description:
      "A Filipino romantic comedy-drama following a strong-willed girl and a popular school basketball player whose rivalry gradually develops into romance, friendship, and unexpected challenges.",
    language: "Filipino",
    explainer: "",
    genres: ["Romance", "Drama", "Comedy"],
    isFeatured: true,
    createdAt: "2026-10-09",
  },
  {
id: "26",
title: "DEVIOUS MAIDS SEASON 1",
slug: "devious-maids-season-1",
year: "2013",
rating: "7.8",
image: "devious-maids.jpg",
description:
"A mystery drama following four Latina maids working in the homes of Beverly Hills' wealthiest families, where secrets, scandals, and murder complicate their lives.",
language: "English",
explainer: "Rock kimomo",
genres: ["Drama", "Comedy", "Mystery"],
isFeatured: true,
createdAt: "2026-10-09",
},


];