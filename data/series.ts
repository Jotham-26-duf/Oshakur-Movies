export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  streamUrl: string;
  downloadUrl: string;
  alternateDownloadUrls?: string[];
}

export interface Series {
  trailer?: string;
  views?: number;
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

  episodes: Episode[];
}

export type SeriesSummary = Omit<Series, "episodes">;

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

    episodes: [
      {
        "id": "1",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins with new challenges, relationships, and unexpected events.",
        "streamUrl": "https://vibuxer.com/0g41asjxvwd9",
        "downloadUrl": "https://www.mediafire.com/file/e6chl3zhlqp6drh/BEAUTY+IN+BLACK+S2+EP+01_.mp4/file"
      },
      {
        "id": "2",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new conflicts and unexpected events unfold.",
        "streamUrl": "https://vibuxer.com/7xhn27rfj61o",
        "downloadUrl": "https://www.mediafire.com/file/48yqk96kb9qumao/BEAUTY_IN_BLACK_S02E02.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "3",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The second season continues with new challenges, conflicts, and unexpected events.",
        "streamUrl": "https://filemoon.org/de/0rpmvZNJmRgZ/file",
        "downloadUrl": "https://www.mediafire.com/file/9qxlplnnsp9p79z/BEAUTY+IN+BLACK+S03+E01___.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "4",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story follows covert operatives connected to a secret government program.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2q88edic2tdare5/Treadstone+Ep1.mp4/file"
      }
    ],
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
    explainer: "Master p",
    genres: ["Drama", "Historical", "Action"],
    isFeatured: false,
    createdAt: "2026-09-28",

    episodes: [
      {
        "id": "5",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as Jumong's journey unfolds amid conflict, ambition, and the struggle for power.",
        "streamUrl": "https://hanerix.com/7kb09o9njp1d",
        "downloadUrl": "https://www.mediafire.com/file/wka9oz9cj1aqppz/Jumong_Ep1.mp4/file"
      },
      {
        "id": "6",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Jumong's journey continues as new challenges and conflicts begin to emerge.",
        "streamUrl": "https://audinifer.com/uk0egcopqqkh",
        "downloadUrl": "https://www.mediafire.com/file/a8859ssno854aev/Jumong_2.mp4/file"
      },
      {
        "id": "7",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Jumong's journey continues as new challenges, conflicts, and discoveries shape his path.",
        "streamUrl": "https://hanerix.com/hd66wo0en1a9",
        "downloadUrl": "https://www.mediafire.com/file/vu609udrym66k1e/Jumong_3.mp4/file"
      },
      {
        "id": "8",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Jumong's journey continues as new challenges and conflicts shape his destiny.",
        "streamUrl": "https://hanerix.com/i9b5c7ggefc7",
        "downloadUrl": "https://www.mediafire.com/file/y3a2boegk2cpbkr/Jumong_4.mp4/file"
      },
      {
        "id": "9",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://vibuxer.com/p8vhi0brhik2",
        "downloadUrl": "https://www.mediafire.com/file/hy59gwtwdc5b8gq/Jumong_Ep5%25281%2529.mp4/file"
      },
      {
        "id": "10",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/etn4lkosbhck",
        "downloadUrl": "https://www.mediafire.com/file/3bee8ipvr457a6o/Jumong_6.mp4/file"
      },
      {
        "id": "11",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/5rz7pabasy6j",
        "downloadUrl": "https://www.mediafire.com/file/5kzccze1i7xdo0q/Jumong_Ep7.mp4/file"
      },
      {
        "id": "12",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/ive1nljooqwt",
        "downloadUrl": "https://www.mediafire.com/file/o8v5ncum2363m3n/Jumong_8.mp4/file"
      },
      {
        "id": "13",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://hanerix.com/hm2pxuogskym",
        "downloadUrl": ""
      },
      {
        "id": "14",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://hanerix.com/0kr1uraqod14",
        "downloadUrl": ""
      },
      {
        "id": "15",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/itlhuz9dtw4i",
        "downloadUrl": "https://www.mediafire.com/file/01aooskzhob8z80/Jumong_11.mp4/file"
      },
      {
        "id": "16",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/4nbs5vgrzmtw",
        "downloadUrl": "https://www.mediafire.com/file/kpdwyiis82bz0zr/Jumong_12.mp4/file"
      },
      {
        "id": "17",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://vibuxer.com/rbk7ab63hiac",
        "downloadUrl": "https://www.mediafire.com/file/cz4x9w1wfej38qu/Jumong_13.mp4/file"
      },
      {
        "id": "18",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/2i488wep7bqm",
        "downloadUrl": "https://www.mediafire.com/file/rbi0bn2wombc0qx/Jumong_14.mp4/file"
      },
      {
        "id": "19",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/tycmfzbb227b",
        "downloadUrl": "https://www.mediafire.com/file/mln0lhs68blie0r/Jumong_15.mp4/file"
      },
      {
        "id": "20",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "Jumong's journey continues as new challenges and conflicts shape his path.",
        "streamUrl": "https://audinifer.com/4lsinv1gqlum",
        "downloadUrl": "https://www.mediafire.com/file/i04d2p5qjv6klfk/Jumong_16.mp4/file"
      },
      {
        "id": "21",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://audinifer.com/i3gn2g3wbn0s",
        "downloadUrl": "https://www.mediafire.com/file/p7bhqu0ie8q3bgf/Jumong_17.mp4/file"
      },
      {
        "id": "22",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://vibuxer.com/yt1jdef6inif",
        "downloadUrl": "https://www.mediafire.com/file/j7ut53srlehmwq1/Jumong_18.mp4/file"
      },
      {
        "id": "23",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://vibuxer.com/g0gm64bx0ryc",
        "downloadUrl": "https://www.mediafire.com/file/x64zdjs7gqr15j9/Jumong_19.mp4/file"
      },
      {
        "id": "24",
        "episodeNumber": 20,
        "title": "Episode 20",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://vibuxer.com/g0gm64bx0ryc",
        "downloadUrl": "https://www.mediafire.com/file/7oj96ce2cmh4sd8/Jumong_20.mp4/file"
      },
      {
        "id": "25",
        "episodeNumber": 21,
        "title": "Episode 21",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://vibuxer.com/rwubiizysa2f",
        "downloadUrl": ""
      },
      {
        "id": "26",
        "episodeNumber": 22,
        "title": "Episode 22",
        "description": "Jumong's journey continues as new challenges, conflicts, and unexpected events shape his path.",
        "streamUrl": "https://vibuxer.com/kfvpm2h8r7wd",
        "downloadUrl": ""
      },
      {
        "id": "678",
        "episodeNumber": 23,
        "title": "JUMONG - Episode 23",
        "description": "JUMONG, Episode 23, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ua8w6zwxm3r61qx/Jumong_Ep23.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ua8w6zwxm3r61qx/Jumong_Ep23.mp4/file"
      },
      {
        "id": "679",
        "episodeNumber": 25,
        "title": "JUMONG - Episode 25",
        "description": "JUMONG, Episode 25, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/997rtuboy7pjonk/Jumong_25_Hd.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/997rtuboy7pjonk/Jumong_25_Hd.mp4/file"
      },
      {
        "id": "680",
        "episodeNumber": 26,
        "title": "JUMONG - Episode 26",
        "description": "JUMONG, Episode 26, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/z8gg8cdf9iopzzd/Jumong_Ep26.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/z8gg8cdf9iopzzd/Jumong_Ep26.mp4/file"
      },
      {
        "id": "681",
        "episodeNumber": 27,
        "title": "JUMONG - Episode 27",
        "description": "JUMONG, Episode 27, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/evouyfmzmyd3slt/Jumong_Ep27.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/evouyfmzmyd3slt/Jumong_Ep27.mp4/file"
      },
      {
        "id": "682",
        "episodeNumber": 28,
        "title": "JUMONG - Episode 28",
        "description": "JUMONG, Episode 28, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/266o9sujp3xivb5/Jumong_Ep28.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/266o9sujp3xivb5/Jumong_Ep28.mp4/file"
      },
      {
        "id": "683",
        "episodeNumber": 29,
        "title": "JUMONG - Episode 29",
        "description": "JUMONG, Episode 29, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/lrqomizh9e8ny7q/Jumong_Ep29.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lrqomizh9e8ny7q/Jumong_Ep29.mp4/file"
      },
      {
        "id": "684",
        "episodeNumber": 31,
        "title": "JUMONG - Episode 31",
        "description": "JUMONG, Episode 31, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/v3anhozywl8zl4u/Jumong_31.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/v3anhozywl8zl4u/Jumong_31.mp4/file"
      },
      {
        "id": "685",
        "episodeNumber": 32,
        "title": "JUMONG - Episode 32",
        "description": "JUMONG, Episode 32, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/wxu710hlweqtefl/Jumong_32.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/wxu710hlweqtefl/Jumong_32.mp4/file"
      },
      {
        "id": "686",
        "episodeNumber": 33,
        "title": "JUMONG - Episode 33",
        "description": "JUMONG, Episode 33, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/egkjur0f5myh290/Jumong_33.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/egkjur0f5myh290/Jumong_33.mp4/file"
      },
      {
        "id": "687",
        "episodeNumber": 34,
        "title": "JUMONG - Episode 34",
        "description": "JUMONG, Episode 34, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/6mibsv5egky6ux6/Jumong_34.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6mibsv5egky6ux6/Jumong_34.mp4/file"
      },
      {
        "id": "688",
        "episodeNumber": 35,
        "title": "JUMONG - Episode 35",
        "description": "JUMONG, Episode 35, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/p1suyh93xnmsvvq/Jumong_35.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/p1suyh93xnmsvvq/Jumong_35.mp4/file"
      },
      {
        "id": "689",
        "episodeNumber": 36,
        "title": "JUMONG - Episode 36",
        "description": "JUMONG, Episode 36, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/0b03syh34cg9c87/Jumong_36.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/0b03syh34cg9c87/Jumong_36.mp4/file"
      },
      {
        "id": "690",
        "episodeNumber": 37,
        "title": "JUMONG - Episode 37",
        "description": "JUMONG, Episode 37, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/47w5w21gw21dy4l/Jumong_37.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/47w5w21gw21dy4l/Jumong_37.mp4/file"
      },
      {
        "id": "691",
        "episodeNumber": 38,
        "title": "JUMONG - Episode 38",
        "description": "JUMONG, Episode 38, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/xog0fkhb5ti1whg/Jumong_38.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/xog0fkhb5ti1whg/Jumong_38.mp4/file"
      },
      {
        "id": "692",
        "episodeNumber": 39,
        "title": "JUMONG - Episode 39",
        "description": "JUMONG, Episode 39, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/pije2zrntqd538a/Jumong_39.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/pije2zrntqd538a/Jumong_39.mp4/file"
      },
      {
        "id": "693",
        "episodeNumber": 40,
        "title": "JUMONG - Episode 40",
        "description": "JUMONG, Episode 40, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/vbuqzxpqkghh1tq/Jumong_Ep40.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/vbuqzxpqkghh1tq/Jumong_Ep40.mp4/file"
      },
      {
        "id": "694",
        "episodeNumber": 41,
        "title": "JUMONG - Episode 41",
        "description": "JUMONG, Episode 41, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/nsygtc2ap36d5s9/Jumong_41.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/nsygtc2ap36d5s9/Jumong_41.mp4/file"
      },
      {
        "id": "695",
        "episodeNumber": 42,
        "title": "JUMONG - Episode 42",
        "description": "JUMONG, Episode 42, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/08jm53ygmbu3lz9/Jumong_42.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/08jm53ygmbu3lz9/Jumong_42.mp4/file"
      },
      {
        "id": "696",
        "episodeNumber": 43,
        "title": "JUMONG - Episode 43",
        "description": "JUMONG, Episode 43, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/k8iea67kh3wyg9r/Jumong_43.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/k8iea67kh3wyg9r/Jumong_43.mp4/file"
      },
      {
        "id": "697",
        "episodeNumber": 44,
        "title": "JUMONG - Episode 44",
        "description": "JUMONG, Episode 44, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/i5euo36ajkrf1ag/Jumong_44.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/i5euo36ajkrf1ag/Jumong_44.mp4/file"
      },
      {
        "id": "698",
        "episodeNumber": 45,
        "title": "JUMONG - Episode 45",
        "description": "JUMONG, Episode 45, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ail2a6drzyboavq/Jumong_45.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ail2a6drzyboavq/Jumong_45.mp4/file"
      },
      {
        "id": "699",
        "episodeNumber": 46,
        "title": "JUMONG - Episode 46",
        "description": "JUMONG, Episode 46, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/0tebyfso21vetjd/Jumong+46.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/0tebyfso21vetjd/Jumong+46.mp4/file"
      },
      {
        "id": "700",
        "episodeNumber": 47,
        "title": "JUMONG - Episode 47",
        "description": "JUMONG, Episode 47, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/x74n4iswhptebe7/Jumong+47.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/x74n4iswhptebe7/Jumong+47.mp4/file"
      },
      {
        "id": "701",
        "episodeNumber": 48,
        "title": "JUMONG - Episode 48",
        "description": "JUMONG, Episode 48, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/y7kpt2wmc0nw4kf/Jumong_48.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/y7kpt2wmc0nw4kf/Jumong_48.mp4/file"
      },
      {
        "id": "702",
        "episodeNumber": 49,
        "title": "JUMONG - Episode 49",
        "description": "JUMONG, Episode 49, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ku4t9uuvpiuo97o/Jumong_Ep49.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ku4t9uuvpiuo97o/Jumong_Ep49.mp4/file"
      },
      {
        "id": "703",
        "episodeNumber": 50,
        "title": "JUMONG - Episode 50",
        "description": "JUMONG, Episode 50, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/3bj07vdqwq81f81/Jumong_Ep50.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/3bj07vdqwq81f81/Jumong_Ep50.mp4/file"
      },
      {
        "id": "704",
        "episodeNumber": 51,
        "title": "JUMONG - Episode 51",
        "description": "JUMONG, Episode 51, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/z4g9dp56tssnzax/Jumong_51.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/z4g9dp56tssnzax/Jumong_51.mp4/file"
      },
      {
        "id": "705",
        "episodeNumber": 52,
        "title": "JUMONG - Episode 52",
        "description": "JUMONG, Episode 52, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/yj393386ugb173r/Jumong_52.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yj393386ugb173r/Jumong_52.mp4/file"
      },
      {
        "id": "706",
        "episodeNumber": 53,
        "title": "JUMONG - Episode 53",
        "description": "JUMONG, Episode 53, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/tc8ps8y286e50js/Jumong_53.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tc8ps8y286e50js/Jumong_53.mp4/file"
      },
      {
        "id": "707",
        "episodeNumber": 55,
        "title": "JUMONG - Episode 55",
        "description": "JUMONG, Episode 55, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/1obd9vl67eatb02/Jumong_55.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/1obd9vl67eatb02/Jumong_55.mp4/file"
      },
      {
        "id": "708",
        "episodeNumber": 56,
        "title": "JUMONG - Episode 56",
        "description": "JUMONG, Episode 56, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/8cij88am9rgwoar/Jumong+56.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8cij88am9rgwoar/Jumong+56.mp4/file"
      },
      {
        "id": "709",
        "episodeNumber": 57,
        "title": "JUMONG - Episode 57",
        "description": "JUMONG, Episode 57, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/fqqt8gozdlo7hyq/Jumong_57.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/fqqt8gozdlo7hyq/Jumong_57.mp4/file"
      },
      {
        "id": "710",
        "episodeNumber": 58,
        "title": "JUMONG - Episode 58",
        "description": "JUMONG, Episode 58, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/t2q87i5hu937y2h/Jumong_58.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/t2q87i5hu937y2h/Jumong_58.mp4/file"
      },
      {
        "id": "711",
        "episodeNumber": 59,
        "title": "JUMONG - Episode 59",
        "description": "JUMONG, Episode 59, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/g98ykm3q5aa37wx/Jumong+59.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/g98ykm3q5aa37wx/Jumong+59.mp4/file"
      },
      {
        "id": "712",
        "episodeNumber": 60,
        "title": "JUMONG - Episode 60",
        "description": "JUMONG, Episode 60, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/0t3a8qieruokt3r/Jumong_60.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/0t3a8qieruokt3r/Jumong_60.mp4/file"
      },
      {
        "id": "713",
        "episodeNumber": 61,
        "title": "JUMONG - Episode 61",
        "description": "JUMONG, Episode 61, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/0ahkdekr6l89vsl/Jumong_61.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/0ahkdekr6l89vsl/Jumong_61.mp4/file"
      },
      {
        "id": "714",
        "episodeNumber": 62,
        "title": "JUMONG - Episode 62",
        "description": "JUMONG, Episode 62, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/okt7g4v5delm9gr/Jumong_62.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/okt7g4v5delm9gr/Jumong_62.mp4/file"
      },
      {
        "id": "715",
        "episodeNumber": 63,
        "title": "JUMONG - Episode 63",
        "description": "JUMONG, Episode 63, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/u7xmjxf28aauys6/Jumong_63.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/u7xmjxf28aauys6/Jumong_63.mp4/file"
      },
      {
        "id": "716",
        "episodeNumber": 64,
        "title": "JUMONG - Episode 64",
        "description": "JUMONG, Episode 64, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/2wo1vlatfga82cw/Jumong_64.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/2wo1vlatfga82cw/Jumong_64.mp4/file"
      },
      {
        "id": "717",
        "episodeNumber": 65,
        "title": "JUMONG - Episode 65",
        "description": "JUMONG, Episode 65, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/kx8nqihup0oiw4p/Jumong_65.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/kx8nqihup0oiw4p/Jumong_65.mp4/file"
      },
      {
        "id": "718",
        "episodeNumber": 66,
        "title": "JUMONG - Episode 66",
        "description": "JUMONG, Episode 66, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/bynws7wxh338kib/Jumong_66.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/bynws7wxh338kib/Jumong_66.mp4/file"
      },
      {
        "id": "719",
        "episodeNumber": 67,
        "title": "JUMONG - Episode 67",
        "description": "JUMONG, Episode 67, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/4x7z3pc5jvdv7ep/Jumong_67.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4x7z3pc5jvdv7ep/Jumong_67.mp4/file"
      },
      {
        "id": "720",
        "episodeNumber": 68,
        "title": "JUMONG - Episode 68",
        "description": "JUMONG, Episode 68, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/v4olb73qcdychqm/Jumong_68.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/v4olb73qcdychqm/Jumong_68.mp4/file"
      },
      {
        "id": "721",
        "episodeNumber": 69,
        "title": "JUMONG - Episode 69",
        "description": "JUMONG, Episode 69, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/epdacavyge2cu1k/Jumong_69.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/epdacavyge2cu1k/Jumong_69.mp4/file"
      },
      {
        "id": "722",
        "episodeNumber": 70,
        "title": "JUMONG - Episode 70",
        "description": "JUMONG, Episode 70, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/cdp7gux1wnqmzrr/Jumong_70.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cdp7gux1wnqmzrr/Jumong_70.mp4/file"
      },
      {
        "id": "723",
        "episodeNumber": 71,
        "title": "JUMONG - Episode 71",
        "description": "JUMONG, Episode 71, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/iq4k5j4vzpuw3zr/Jumong_71.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/iq4k5j4vzpuw3zr/Jumong_71.mp4/file"
      },
      {
        "id": "724",
        "episodeNumber": 72,
        "title": "JUMONG - Episode 72",
        "description": "JUMONG, Episode 72, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/lnmh9rusr7halmg/Jumong+72.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lnmh9rusr7halmg/Jumong+72.mp4/file"
      },
      {
        "id": "725",
        "episodeNumber": 73,
        "title": "JUMONG - Episode 73",
        "description": "JUMONG, Episode 73, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/2r65nylfkdnravd/Jumong_73.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/2r65nylfkdnravd/Jumong_73.mp4/file"
      },
      {
        "id": "726",
        "episodeNumber": 74,
        "title": "JUMONG - Episode 74",
        "description": "JUMONG, Episode 74, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/5cte56xafet6mmu/Jumong_74.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/5cte56xafet6mmu/Jumong_74.mp4/file"
      },
      {
        "id": "727",
        "episodeNumber": 75,
        "title": "JUMONG - Episode 75",
        "description": "JUMONG, Episode 75, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/6xqf7yiclio50rk/Jumong_75.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6xqf7yiclio50rk/Jumong_75.mp4/file"
      },
      {
        "id": "728",
        "episodeNumber": 76,
        "title": "JUMONG - Episode 76",
        "description": "JUMONG, Episode 76, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/7rng33av74osdk3/Jumong_76.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/7rng33av74osdk3/Jumong_76.mp4/file"
      },
      {
        "id": "729",
        "episodeNumber": 77,
        "title": "JUMONG - Episode 77",
        "description": "JUMONG, Episode 77, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/l815d37yontmed0/Jumong_77.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/l815d37yontmed0/Jumong_77.mp4/file"
      },
      {
        "id": "730",
        "episodeNumber": 78,
        "title": "JUMONG - Episode 78",
        "description": "JUMONG, Episode 78, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/6xoky2w538gav5m/Jumong_78.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6xoky2w538gav5m/Jumong_78.mp4/file"
      },
      {
        "id": "731",
        "episodeNumber": 79,
        "title": "JUMONG - Episode 79",
        "description": "JUMONG, Episode 79, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/d1g7pluuskcwq1h/Jumong_79.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/d1g7pluuskcwq1h/Jumong_79.mp4/file"
      },
      {
        "id": "732",
        "episodeNumber": 80,
        "title": "JUMONG - Episode 80",
        "description": "JUMONG, Episode 80, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/w4gj4oe1vblt5go/Jumong_80.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/w4gj4oe1vblt5go/Jumong_80.mp4/file"
      },
      {
        "id": "733",
        "episodeNumber": 81,
        "title": "JUMONG - Episode 81 (Final)",
        "description": "JUMONG, Episode 81 (Final), presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/s7b6dqyd33w7a2x/Jumong_81_Final.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/s7b6dqyd33w7a2x/Jumong_81_Final.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "27",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins with new challenges, conflicts, and unexpected events.",
        "streamUrl": "https://audinifer.com/z2neincsteei",
        "downloadUrl": "https://www.mediafire.com/file/t1n9iw6gy0qbudf/OUTERBANK+S05E01.mp4/file"
      },
      {
        "id": "28",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/ev9emhffcmmi",
        "downloadUrl": "https://www.mediafire.com/file/zu56gqrrp3t3nry/OUTER+BANKS+S05E02.mp4/file"
      },
      {
        "id": "29",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/4rkokmlbx3mq",
        "downloadUrl": "https://www.mediafire.com/file/6zebat1sjougyo0/OUTER_BANKS_S05E03.mp4/file"
      },
      {
        "id": "30",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://audinifer.com/sdxaiyrij14v",
        "downloadUrl": "https://www.mediafire.com/file/a55p4fgjoknskfb/OUTER+BANKS+S05EP04.mp4/file"
      },
      {
        "id": "31",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/dgoyqwsnklck",
        "downloadUrl": "https://www.mediafire.com/file/m6uq3bnwczt4oib/OUTER+BANK+S05E05.mp4/file"
      },
      {
        "id": "32",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://vibuxer.com/ywfiwgcu0g17",
        "downloadUrl": "https://www.mediafire.com/file/e4a6khjchv5t6md/OUTER_BANK_S05_6.mp4/file"
      },
      {
        "id": "33",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://filemoon.org/de/qw1zeDv43Xyn/file",
        "downloadUrl": "https://www.mediafire.com/file/wentosjl2m1k91x/OUTERBANKS_S05E07.mp4/file"
      },
      {
        "id": "34",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/prff5kcq942m",
        "downloadUrl": "https://www.mediafire.com/file/7nwqm86n99zicj9/OUTERBANKS_S05E08.mp4/file"
      },
      {
        "id": "35",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/dv9qxqwkatm5",
        "downloadUrl": "https://www.mediafire.com/file/ohko9obtzs277fm/OUTERBANKS_S05_EP_09.mp4/file"
      },
      {
        "id": "36",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The story continues as new challenges, conflicts, and unexpected events unfold.",
        "streamUrl": "https://filemoon.org/en/jar3Xn4gG2dD/file",
        "downloadUrl": "https://www.mediafire.com/file/4sclxzopifiiuoi/OUTERBANKS_S05_EP_10_final__.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "37",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://audinifer.com/gmuwn186wrhh",
        "downloadUrl": "https://www.mediafire.com/file/3fz2b3jblql024r/Between+Father+and+Son+Ep1.mp4/file"
      },
      {
        "id": "38",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://vibuxer.com/96j9q4csmi3n",
        "downloadUrl": "https://www.mediafire.com/file/shpjiiu362iu9ls/Between+Father+and+Son+Ep2.mp4/file"
      },
      {
        "id": "39",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/l5ucqd8ywvbx",
        "downloadUrl": "https://www.mediafire.com/file/fp5gdkfc23ad6b8/Between+Father+and+Son++Ep3.mp4/file"
      },
      {
        "id": "40",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://oshakurfilms.strp2p.com/#3p6c9f",
        "downloadUrl": "https://www.mediafire.com/file/64lyyma5z5l45mz/Between_Father_and_Son_Ep4.mp4/file"
      },
      {
        "id": "41",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://oshakurfilms.strp2p.com/#jv35je",
        "downloadUrl": "https://www.mediafire.com/file/233d5zny4kxheu5/Between_Father_and_Son_Ep5.mp4/file"
      },
      {
        "id": "42",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://audinifer.com/mygbookindqv",
        "downloadUrl": "https://www.mediafire.com/file/xbhw2qug37rsjj1/Between_Father_and_Son_Ep6.mp4/file"
      },
      {
        "id": "43",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://vibuxer.com/r7vpkx9bf75k",
        "downloadUrl": "https://www.mediafire.com/file/jszqgwbyyi84rsu/Between_Father_and_Son_Ep7.mp4/file"
      },
      {
        "id": "44",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://hanerix.com/qai2uq4wybqg",
        "downloadUrl": "https://www.mediafire.com/file/01w7dajldtie2px/Between_Father_and_Son_Ep8.mp4/file"
      },
      {
        "id": "45",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "https://oshakurfilms.strp2p.com/#5oc3r6",
        "downloadUrl": "https://www.mediafire.com/file/hdfpr5oy087z30y/Between_Father_and_Son_Ep9.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "46",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n5oy2b0dzq0rhbn/GENERATION_TO_GENERATION_01.mp4/file"
      },
      {
        "id": "47",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jaydjxdfzhbef87/GENERATION_TO_GENERATION_02.mp4/file"
      },
      {
        "id": "48",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/smdztbxamjn2ws8/GENERATION_TO_GENERATION_03.mp4/file"
      },
      {
        "id": "49",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yyy4703782s5h2h/GENERATION_TO_GENERATION_04.mp4/file"
      },
      {
        "id": "50",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xa00mqe04wjxsa4/GENERATION_TO_GENERATION_05.mp4/file"
      },
      {
        "id": "51",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y9wb1ozl2keauwc/GENERATION_TO_GENERATION_06.mp4/file"
      },
      {
        "id": "52",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m5bj6muiqkmlyyw/GENERATION_TO_GENERATION_07.mp4/file"
      },
      {
        "id": "53",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2u7l95xznl6o1og/GENERATION_TO_GENERATION_08.mp4/file"
      },
      {
        "id": "54",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mun3lsoeaz7az68/GENERATION_TO_GENERATION_09.mp4/file"
      },
      {
        "id": "55",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ap5vycu2hg5yhc5/GENERATION_TO_GENERATION_10.mp4/file"
      },
      {
        "id": "56",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ap5vycu2hg5yhc5/GENERATION_TO_GENERATION_11.mp4/file"
      },
      {
        "id": "57",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "The story continues as family relationships, challenges, and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/74b2s2q66vhg0m5/GENERATION_TO_GENERATION_12.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "58",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as dangerous challenges and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9fncsvk543s3wjf/Death_Game_S01E01.mp4/file"
      },
      {
        "id": "59",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new challenges and conflicts begin to emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b9s7d2puf427oej/Death_Game_S01E02.mp4/file"
      },
      {
        "id": "60",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The characters face new dangers as the mystery continues to unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9e0gwe1z65twdo0/Death_Game_S01E03.mp4/file"
      },
      {
        "id": "61",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The story continues with new conflicts and unexpected developments.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qbac4s8h9qdvbzc/Death_Game_S01E04.mp4/file"
      },
      {
        "id": "62",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The challenges become more dangerous as the story progresses.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3kxeobhrtjgiuyj/Death_Game_S01E05.mp4/file"
      },
      {
        "id": "63",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "New events and conflicts push the characters into greater danger.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mkx2bf76hb974tf/Death_Game_S01E06.mp4/file"
      },
      {
        "id": "64",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The mystery deepens as the characters face another dangerous challenge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q905wv17f4nwp0v/Death_Game_S01E07.mp4/file"
      },
      {
        "id": "65",
        "episodeNumber": 8,
        "title": "Episode 8 - Finale",
        "description": "The season reaches its conclusion as the final events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fsck2l00xw72pdh/Death_Game_S01E08_Finale.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "66",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Agent Kim begins a dangerous mission filled with unexpected challenges.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yuz7yjr37ougjf4/AGENT_KIM_EP_01.mp4/file"
      },
      {
        "id": "67",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The mission continues as new threats and conflicts emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5cidr19dexxt75y/AGENT_KIM_EP_02.mp4/file"
      },
      {
        "id": "68",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Agent Kim faces new challenges while pursuing the mission.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c6r61kng2f3u4pd/AGENT_KIM_EP_03.mp4/file"
      },
      {
        "id": "69",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "New events complicate the mission as Agent Kim moves forward.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tk5j0vhgbia6wy6/AGENT_KIM_EP_04.mp4/file"
      },
      {
        "id": "70",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The mission becomes more dangerous as new enemies appear.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8gppg0njgl0tcjc/AGENT_KIM_EP_05.mp4/file"
      },
      {
        "id": "71",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Agent Kim continues the mission while facing unexpected obstacles.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tuzgno2afuzxwm6/AGENT_KIM_EP_06.mp4/file"
      },
      {
        "id": "72",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The investigation leads to new discoveries and dangerous encounters.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c4jxjppublahmla/AGENT_KIM_EP_07.mp4/file"
      },
      {
        "id": "73",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Agent Kim faces another major challenge as the mission develops.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/edforxk4buofdr6/AGENT_KIM_EP_08.mp4/file"
      },
      {
        "id": "74",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The mission approaches its final stages with new revelations.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/teg7yzhj02b2juy/AGENT_KIM_EP_09.mp4/file"
      },
      {
        "id": "75",
        "episodeNumber": 10,
        "title": "Episode 10 - Finale",
        "description": "The season reaches its conclusion as Agent Kim faces the final challenge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t7igoh635z4qdr2/AGENT_KIM_EP_10_Finale.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "76",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins with a dangerous mystery and unexpected events.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cvjjqw0o70iw36z/A_BONA_FIDE_KILLER_EP01.mp4/file"
      },
      {
        "id": "77",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The investigation continues as new clues and conflicts emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c4tsg86w2lpept8/A_BONA_FIDE_KILLER_EP02.mp4/file"
      },
      {
        "id": "78",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "New developments make the mystery increasingly complicated.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1fdbff6nvbk1cel/A_BONA_FIDE_KILLER_EP03.mp4/file"
      },
      {
        "id": "79",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The characters face new dangers as the investigation continues.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zryo20kwl0hg2ct/A_BONA_FIDE_KILLER_EP04.mp4/file"
      },
      {
        "id": "80",
        "episodeNumber": 5,
        "title": "Episode 5 - Part 1",
        "description": "The story continues with new conflicts and unexpected events.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l1mxdb4vsiqdvlb/A_BONA_FIDE_KILLER_EP05_PART_1.mp4/file"
      },
      {
        "id": "81",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The investigation continues as more secrets begin to emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ko66p3h14v6e11u/A_BONA_FIDE_KILLER_EP06.mp4/file"
      },
      {
        "id": "82",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "New challenges and conflicts push the investigation forward.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3pi9okmbjqk7oaj/A_BONA_FIDE_KILLER_EP07.mp4/file"
      },
      {
        "id": "83",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The mystery deepens as the characters discover new information.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kcr8sozcqnuaxt7/A_BONA_FIDE_KILLER_EP08.mp4/file"
      },
      {
        "id": "84",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The investigation takes another unexpected turn.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g97jjahflkg7lf2/A_BONA_FIDE_KILLER_EP09.mp4/file"
      },
      {
        "id": "85",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "New conflicts emerge as the story moves toward its conclusion.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5j3m758ea0w0tzf/A_BONA_FIDE_KILLER_EP10.mp4/file"
      },
      {
        "id": "86",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The characters face new revelations and difficult challenges.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/en5m74wm7l3533m/A_BONA_FIDE_KILLER_EP11.mp4/file"
      },
      {
        "id": "87",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "The investigation continues as the mystery approaches its climax.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/16uk37labj7jdgj/A_BONA_FIDE_KILLER_EP12.mp4/file"
      },
      {
        "id": "88",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "The final developments begin to reveal the truth.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j3omtlgb9crktre/A_BONA_FIDE_KILLER_EP13.mp4/file"
      },
      {
        "id": "89",
        "episodeNumber": 14,
        "title": "Episode 14 - Finale",
        "description": "The season reaches its conclusion as the final mystery unfolds.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/are4qx9c80h4hza/A_BONA_FIDE_KILLER_EP14_FINALE.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "90",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The elite team begins a dangerous mission.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wnnxakzq4wzy32k/Elite_Force_S01E01.mp4/file"
      },
      {
        "id": "91",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The team faces new threats and challenges.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3tjy756q1g7wvoe/Elite_Force_S01E02.mp4/file"
      },
      {
        "id": "92",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The mission continues as new conflicts emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/anl31ut7nnslr4i/Elite_Force_S01E03.mp4/file"
      },
      {
        "id": "93",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The team encounters unexpected obstacles during the mission.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0uv6lxntu07pcd3/Elite_Force_S01E04.mp4/file"
      },
      {
        "id": "94",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The team prepares for another dangerous operation.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bfgx6jqeyeo7hwr/Elite_Force_S01E5.mp4/file"
      },
      {
        "id": "95",
        "episodeNumber": 6,
        "title": "Episode 6 - Finale",
        "description": "The mission reaches its final stage.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3fil3sdmtx54jup/Elite_Force_S01E6_Finale.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "96",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins with palace relationships, conflicts, and unexpected events.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/llll78dcu0fheat/The_East_Palace_1_Perfect.mp4/file"
      },
      {
        "id": "97",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new conflicts develop within the palace.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z6026b4rwwrsnxj/The_East_Palace_2_Perfect.mp4/file"
      },
      {
        "id": "98",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "New relationships and challenges begin to shape the story.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sliwlc8zbmr7mog/The_East_Palace_3_Perfect.mp4/file"
      },
      {
        "id": "99",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The palace faces new conflicts and unexpected developments.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nlznajr8knx4033/The_East_Palace_4_Perfect.mp4/file"
      },
      {
        "id": "100",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The story continues with new challenges and political conflicts.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r6rq2v9r6ei7ayz/The_East_Palace_5_Perfecth.mp4/file"
      },
      {
        "id": "101",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "New events change the relationships and conflicts within the palace.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/as6jkeigq8dp6pk/The_East_Palace_6_Perfect.mp4/file"
      },
      {
        "id": "102",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The story approaches its final developments.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/u8c7admj0f1d357/The_East_Palace_7_Perfect.mp4/file"
      },
      {
        "id": "103",
        "episodeNumber": 8,
        "title": "Episode 8 - Finale",
        "description": "The season reaches its conclusion.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hutea27n2xf994h/The_East_Palace_8Final_Perfect.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "104",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as new situations and unexpected challenges unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/trpdhz8skio9k3u/The_Fixers_S01_E01.mp4/file"
      },
      {
        "id": "105",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues with new challenges and unexpected events.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9ibw54e1clexbvf/The_Fixers_S01_E02.mp4/file"
      }
    ],
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

    episodes: [
      {
        "id": "106",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as mysteries and unexpected events unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rgpat249mn7196d/LANTERNS_S01_E01.mp4/file"
      },
      {
        "id": "107",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new mysteries and challenges emerge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bey4axt09dw1yld/LANTERNS_S01_E02.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-09-30",

    episodes: [
      {
        "id": "108",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Elena returns to school and meets the mysterious Stefan Salvatore as strange events begin to unfold.",
        "streamUrl": "https://hanerix.com/g8tsb67m08hi",
        "downloadUrl": "https://www.mediafire.com/file/zk1v497hy8rn2fl/Vampire+dieries+S1+Ep1.mp4/file"
      },
      {
        "id": "109",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "New secrets emerge as Elena becomes increasingly curious about Stefan and his mysterious past.",
        "streamUrl": "https://hanerix.com/y3yjyg24gwj7",
        "downloadUrl": "https://www.mediafire.com/file/7tst43wf21b9x3l/Vampire+dieries+S1+Ep2.mp4/file"
      },
      {
        "id": "110",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The mysterious events in Mystic Falls continue as Elena discovers more about Stefan.",
        "streamUrl": "https://audinifer.com/3rpdfkkft1x6",
        "downloadUrl": "https://www.mediafire.com/file/wax2gn3o9042xxc/Vampire+dierlies+S1+Ep3.mp4/file"
      },
      {
        "id": "111",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The secrets surrounding the Salvatore brothers become increasingly difficult to hide.",
        "streamUrl": "https://hanerix.com/ckwrpifks1fg",
        "downloadUrl": "https://www.mediafire.com/file/vmvp68t6awihn5o/Vampire_dierlies_S1_Ep4.mp4/file"
      },
      {
        "id": "112",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Elena and her friends face new dangers as supernatural mysteries continue to grow.",
        "streamUrl": "https://hanerix.com/0v4qbh41lagi",
        "downloadUrl": "https://www.mediafire.com/file/62pcqxljo7ei43s/Vampire_dierlies_S1_Ep5.mp4/file"
      },
      {
        "id": "113",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The relationships between Elena, Stefan, and Damon become more complicated.",
        "streamUrl": "https://audinifer.com/02jqkxscsf5i",
        "downloadUrl": "https://www.mediafire.com/file/1ox30iu2elyi4ry/Vampire_dierlies_S1_Ep6.mp4/file"
      },
      {
        "id": "114",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "More supernatural secrets are revealed as danger approaches Mystic Falls.",
        "streamUrl": "https://hanerix.com/5xju8bi25gkn",
        "downloadUrl": "https://www.mediafire.com/file/1t9gg4pqggfplq0/Vampire_dierlies_S1_Ep7.mp4/file"
      },
      {
        "id": "115",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The conflict surrounding the vampires and the people of Mystic Falls intensifies.",
        "streamUrl": "https://audinifer.com/xa66m2bkxm0i",
        "downloadUrl": "https://www.mediafire.com/file/3jwr33uqxgaa2gp/Vampire_dierlies_S1_Ep8.mp4/file"
      },
      {
        "id": "116",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Elena and her friends face new discoveries that change their understanding of the supernatural world.",
        "streamUrl": "https://audinifer.com/92tpv2t0fjiw",
        "downloadUrl": "https://www.mediafire.com/file/hdqhtg5r3nyrdk7/Vampire_dierlies_S1_Ep9.mp4/file"
      },
      {
        "id": "117",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The growing conflict forces the characters to confront new dangers and difficult choices.",
        "streamUrl": "https://hanerix.com/vb9esyrzeu9c",
        "downloadUrl": "https://www.mediafire.com/file/bcjb3i3w59h08y5/Vampire_dierlies_S1_Ep10.mp4/file"
      },
      {
        "id": "118",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The mysteries of Mystic Falls deepen as the characters uncover more about the past.",
        "streamUrl": "https://vibuxer.com/yi6mn7ehzk5y",
        "downloadUrl": "https://www.mediafire.com/file/e1t4o4ydptzmgyg/Vampire_dierlies_S1_Ep11.mp4/file"
      },
      {
        "id": "119",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "New revelations create tension between the characters as supernatural threats continue.",
        "streamUrl": "https://hanerix.com/dhpbseqk6bhf",
        "downloadUrl": "https://www.mediafire.com/file/bghts17mw5a2i46/Vampire_dierlies_S1_Ep12.mp4/file"
      },
      {
        "id": "120",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "The characters struggle with new dangers and secrets that threaten their relationships.",
        "streamUrl": "https://audinifer.com/1tve01fw02ow",
        "downloadUrl": "https://www.mediafire.com/file/s2lxesnilo1y0d4/Vampire_dierlies_S1_Ep13.mp4/file"
      },
      {
        "id": "121",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "The supernatural conflict grows stronger as more secrets from the past are uncovered.",
        "streamUrl": "https://audinifer.com/quw94z494cqn",
        "downloadUrl": "https://www.mediafire.com/file/vg05q32690f6tbl/Vampire_dierlies_S1_Ep14.mp4/file"
      },
      {
        "id": "122",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "The characters face new challenges as the dangers surrounding Mystic Falls increase.",
        "streamUrl": "https://vibuxer.com/x3021uyhumtv",
        "downloadUrl": "https://www.mediafire.com/file/1y24b487m70wr0h/Vampire_dierlies_S1_Ep15.mp4/file"
      },
      {
        "id": "123",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "Old secrets return and create new conflicts between the characters.",
        "streamUrl": "https://hanerix.com/l6nmcvhh6uev",
        "downloadUrl": "https://www.mediafire.com/file/0pczq7rjdgs4fu4/Vampire_dierlies_S1_Ep16.mp4/file"
      },
      {
        "id": "124",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "The struggle between the supernatural forces continues as new threats emerge.",
        "streamUrl": "https://vibuxer.com/l6nmcvhh6uev",
        "downloadUrl": "https://www.mediafire.com/file/p3q0iodc9yj5ht4/Vampire_dierlies_S1_Ep17.mp4/file"
      },
      {
        "id": "125",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "The characters are pushed into another dangerous situation as the story develops.",
        "streamUrl": "https://vibuxer.com/fwqr1g9h14tf",
        "downloadUrl": "https://www.mediafire.com/file/andiqgvuo6mqfor/Vampire_dierlies_S1_Ep18.mp4/file"
      },
      {
        "id": "126",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "New revelations bring the characters closer to the truth behind the supernatural events.",
        "streamUrl": "https://vibuxer.com/bvqco48iabod",
        "downloadUrl": "https://www.mediafire.com/file/fsvfdl7n79xb8ay/Vampire+deirlies+S1+Ep19.mp4/file"
      },
      {
        "id": "127",
        "episodeNumber": 20,
        "title": "Episode 20",
        "description": "The conflict intensifies as the characters prepare for another dangerous confrontation.",
        "streamUrl": "https://audinifer.com/6ggjj57e75cj",
        "downloadUrl": "https://www.mediafire.com/file/oir4s4euxhhhxoh/Vampire_deirlies_S1_Ep20.mp4/file"
      },
      {
        "id": "128",
        "episodeNumber": 21,
        "title": "Episode 21",
        "description": "The season moves toward its conclusion as the characters face major challenges.",
        "streamUrl": "https://hanerix.com/po4u47z97fl7",
        "downloadUrl": "https://www.mediafire.com/file/mtph91nhkc7ezx0/Vampire_Dierlies_S1_Ep21.mp4/file"
      },
      {
        "id": "129",
        "episodeNumber": 22,
        "title": "Episode 22 - Finale",
        "description": "The first season reaches its conclusion as the major conflicts come to a dramatic turning point.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/53y00v2cqbgpzxi/Vampire_dieries_S1_Ep22.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "130",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as the characters are introduced and a new conflict starts to unfold.",
        "streamUrl": "https://audinifer.com/44b0qb4rdc3a",
        "downloadUrl": "https://www.mediafire.com/file/68t2iluznsvcy77/SHAQUE_Ep1.mp4/file"
      },
      {
        "id": "131",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The situation develops as the characters face new challenges and unexpected events.",
        "streamUrl": "https://audinifer.com/u16pjdwk4pog",
        "downloadUrl": "https://www.mediafire.com/file/gab218nvkrd6f8y/SHAQUE_EP2.mp4/file"
      },
      {
        "id": "132",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The conflict grows deeper as secrets begin to emerge.",
        "streamUrl": "https://vibuxer.com/389ook2l5jeg",
        "downloadUrl": "https://www.mediafire.com/file/e8hqc9skp6zitw3/SHAQUE_EP3.mp4/file"
      },
      {
        "id": "133",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The characters are forced to make difficult decisions as the story continues.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0hpciqe128xw7ji/SHAQUE_EP4.mp4/file"
      },
      {
        "id": "134",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Tensions rise as the characters deal with the consequences of their choices.",
        "streamUrl": "https://audinifer.com/bknvuh0gg2ez",
        "downloadUrl": "https://www.mediafire.com/file/pw89xhpev4dnx7u/SHEQUE_EP_5.mp4/file"
      },
      {
        "id": "135",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The story takes another dramatic turn as new information changes the situation.",
        "streamUrl": "https://hanerix.com/5b14uimtyg7s",
        "downloadUrl": "https://www.mediafire.com/file/xznkzympugaa9nw/SHEQUE_EP6.mp4/file"
      },
      {
        "id": "136",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The episode brings major developments as the conflict moves forward.",
        "streamUrl": "https://hanerix.com/2q2fxdc844p5",
        "downloadUrl": "https://www.mediafire.com/file/9vt275gcpdgt1ey/SHAQUE_EP7_FINAL.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "137",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as the characters face a new chapter filled with challenges and uncertainty.",
        "streamUrl": "https://vibuxer.com/1fj7d86277le",
        "downloadUrl": "https://www.mediafire.com/file/jwqeex6rmckhzol/Ad_The_Bible_Continues_Ep1_Hd_Mp4.mp4/file"
      },
      {
        "id": "138",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The journey continues as the characters respond to new events and growing challenges.",
        "streamUrl": "https://hanerix.com/ixzlilzryndq",
        "downloadUrl": "https://www.mediafire.com/file/ibho2lrscjbqxbw/Ad_The_Bible_Continues_Ep2_Hd_Mp4.mp4/file"
      },
      {
        "id": "139",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "New developments bring the characters into a more difficult situation.",
        "streamUrl": "https://hgcloud.to/ik992gnl80oj",
        "downloadUrl": "https://www.mediafire.com/file/9tbhnyfxxxo1l5l/Ad_The_Bible_Continues_Ep3_Hd_Mp4.mp4/file"
      },
      {
        "id": "140",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The conflict develops further as the characters face difficult choices.",
        "streamUrl": "https://hgcloud.to/pszmum7w9len",
        "downloadUrl": "https://www.mediafire.com/file/4dl2hi2k3bxeloe/Ad_The_Bible_Continues_Ep4_Hd_Mp4.mp4/file"
      },
      {
        "id": "141",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The story continues with new challenges and important developments.",
        "streamUrl": "https://vibuxer.com/sq58rvsbpa1p",
        "downloadUrl": "https://www.mediafire.com/file/4ry6y0ndxas6vlb/Ad_The_Bible_Continues_Ep5_Hd_Mp4.mp4/file"
      },
      {
        "id": "142",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The characters continue their journey as the situation becomes more complicated.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5iehtt25fmcyuic/Ad+The+Bible+Continues+Ep6+Hd+Mp4.mp4/file"
      },
      {
        "id": "143",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The story progresses as the characters face another important challenge.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3xqxxih6xlrufmf/Ad+The+Bible+Continues+Ep7+Hd+Mp4.mp4/file"
      },
      {
        "id": "144",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "New events change the direction of the story as the conflict continues.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xr92ehhgrqxtxb2/Ad+The+Bible+Continues+Ep8+Hd+Mp4.mp4/file"
      },
      {
        "id": "145",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The characters encounter further challenges as the story develops.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vy1gufbdhc35u5p/Ad+The+Bible+Continues+Ep9+Hd+Mp4.mp4/file"
      },
      {
        "id": "146",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The tension increases as the characters move closer to a major turning point.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/h1g20he7qfzl0sj/Ad+The+Bible+Continues+Ep10+Hd+Mp4.mp4/file"
      },
      {
        "id": "147",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The story moves toward its conclusion as important events begin to unfold.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3x89rsybqsz595u/Ad_The_Bible_Continues_Ep11_Mp4.mp4/file"
      },
      {
        "id": "148",
        "episodeNumber": 12,
        "title": "Episode 12 - Finale",
        "description": "The season reaches a dramatic conclusion as the major conflicts reach a turning point.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9i07bm1m060qxri/Ad_The_Bible_Continues_Ep12_Final_Hd_Mp4.mp4/file"
      }
    ],
  },

  {
    id: "18",
    title: "VIS A VIS SEASON 4",
    slug: "vis-a-vis",
    year: "2019",
    rating: "8.0",
    image: "vis-a-vis4.jpg",
    description:
      "A Spanish prison drama following women dealing with dangerous conflicts, alliances, survival, revenge, and unexpected events inside and outside prison.",
    language: "Spanish",
    explainer: "",
    genres: ["Drama", "Thriller", "Crime"],
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "149",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The new season begins as the characters face another difficult situation.",
        "streamUrl": "https://vibuxer.com/12v5aj0omdqh",
        "downloadUrl": "https://www.mediafire.com/file/z8uglfh2qr2bfsz/Vis_A_Vis_S4e1_Hd.mp4/file"
      },
      {
        "id": "150",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Tensions rise as the characters struggle with new problems inside the prison.",
        "streamUrl": "https://hanerix.com/d1d43ckjuz3t",
        "downloadUrl": "https://www.mediafire.com/file/m659v5erly9g22q/Vis_A_Vis_S4e2_Hd.mp4/file"
      },
      {
        "id": "151",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The conflict becomes more intense as new plans and secrets emerge.",
        "streamUrl": "https://vibuxer.com/2ttbo9tgcymk",
        "downloadUrl": "https://www.mediafire.com/file/c14d98rloksavha/Vis_A_Vis_S4e3_Hd.mp4/file"
      },
      {
        "id": "152",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The characters face another dangerous challenge as tensions continue to grow.",
        "streamUrl": "https://hanerix.com/i84hlktl93vw",
        "downloadUrl": "https://www.mediafire.com/file/mtrwsv5nazns8c2/Vis_A_Vis_S4e4_Hd.mp4/file"
      },
      {
        "id": "153",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "New developments put the characters under increasing pressure.",
        "streamUrl": "https://hgcloud.to/i84hlktl93vw",
        "downloadUrl": "https://www.mediafire.com/file/oc3nypjpdmtkghi/Vis_A_Vis_S4e5_Hd.mp4/file"
      },
      {
        "id": "154",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The situation becomes more dangerous as the characters attempt to protect themselves.",
        "streamUrl": "https://hgcloud.to/cuygbep7dea1",
        "downloadUrl": "https://www.mediafire.com/file/gqteeokmxdiio53/Vis_A_Vis_S4e6_Hd.mp4/file"
      },
      {
        "id": "155",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The season moves closer to its conclusion as major conflicts intensify.",
        "streamUrl": "https://hgcloud.to/wwjlb4hxz3eg",
        "downloadUrl": "https://www.mediafire.com/file/fn18ovsy18a3982/Vis_A_Vis_S4e7_Hd.mp4/file"
      },
      {
        "id": "156",
        "episodeNumber": 8,
        "title": "Episode 8 - Finale",
        "description": "The season reaches its dramatic conclusion as the major conflicts come to a head.",
        "streamUrl": "https://hgcloud.to/1d5zgbpy90nx",
        "downloadUrl": "https://www.mediafire.com/file/guknj4yw3wm4tg0/Vis_A_Vis_S4e8_Final_Hd.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "157",
        "episodeNumber": 1,
        "title": "King in Play",
        "description": "The new season begins as power struggles and personal conflicts take center stage.",
        "streamUrl": "https://vibuxer.com/su07zz1zx87z",
        "downloadUrl": "https://www.mediafire.com/file/spd09olx6eaj1ci/BEAUTY+IN+BLACK+S03+E01.mp4/file"
      },
      {
        "id": "158",
        "episodeNumber": 2,
        "title": "Gotcha",
        "description": "New revelations create tension as the characters struggle to control the situation.",
        "streamUrl": "https://vibuxer.com/rtcp7blq1okz",
        "downloadUrl": "https://www.mediafire.com/file/8da8e2jz07oamqn/BEAUTY+IN+BLACK+S03+E02.mp4/file"
      },
      {
        "id": "159",
        "episodeNumber": 3,
        "title": "Throne of Blood",
        "description": "The battle for power becomes more dangerous as rivalries intensify.",
        "streamUrl": "https://vibuxer.com/qhb8v3toi7mp",
        "downloadUrl": "https://www.mediafire.com/file/qgq2r3v7y9zhuk1/BEAUTY_IN_BLACK_S03_E03.mp4/file"
      },
      {
        "id": "160",
        "episodeNumber": 4,
        "title": "A Tender Betrayal",
        "description": "Trust is tested as betrayal threatens relationships and alliances.",
        "streamUrl": "https://hanerix.com/a9fyinuybv4z",
        "downloadUrl": "https://www.mediafire.com/file/mm2tqbj2mvnejvb/Beauty+In+Black+S03+E04.mp4/file"
      },
      {
        "id": "161",
        "episodeNumber": 5,
        "title": "Devil in the Details",
        "description": "Hidden details begin to reveal a deeper and more dangerous plan.",
        "streamUrl": "https://hanerix.com/wlzd9co25i4b",
        "downloadUrl": "https://www.mediafire.com/file/kpt3sezkkrz6kz7/BEAUTY_IN_BLACK_S03_E05.mp4/file"
      },
      {
        "id": "162",
        "episodeNumber": 6,
        "title": "A Pack of Wolves",
        "description": "The characters unite and prepare to face an increasingly powerful threat.",
        "streamUrl": "https://vibuxer.com/xzq8vutremgx",
        "downloadUrl": "https://www.mediafire.com/file/rhw6w2b7uvq9sne/BEAUTY_IN_BLACK_S03_E06.mp4/file"
      },
      {
        "id": "163",
        "episodeNumber": 7,
        "title": "The Looking Glass",
        "description": "The characters are forced to confront difficult truths about themselves and others.",
        "streamUrl": "https://audinifer.com/g4r7io1n2op3",
        "downloadUrl": "https://www.mediafire.com/file/m5nf2hw64bncwzo/Beauty_In_Black_S03_E07_KING_FILMS_STUDIO.mp4/file"
      },
      {
        "id": "164",
        "episodeNumber": 8,
        "title": "Dancing in the Rain",
        "description": "The season reaches a dramatic turning point as the characters face the consequences of their choices.",
        "streamUrl": "https://vibuxer.com/aw1338h1bjpa",
        "downloadUrl": "https://www.mediafire.com/file/c9p1v116ymjhtbz/Beauty_In_Black_S03_E08_FINAL_KING_FILMS_STUDIO.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "165",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as the characters are drawn into a period of political and personal conflict.",
        "streamUrl": "https://hanerix.com/pph04pzv8q33",
        "downloadUrl": "https://www.mediafire.com/file/baioth2p4ucfi4u/My+Country+Ep1+Hd.mp4/file"
      },
      {
        "id": "166",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The struggle continues as loyalties and relationships are tested.",
        "streamUrl": "https://audinifer.com/pft256kfri4i",
        "downloadUrl": "https://www.mediafire.com/file/ods9k21m7k008aa/My+Country+E02+Hd.Mp4.mp4/file"
      },
      {
        "id": "167",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The characters face new challenges as the political situation becomes more complicated.",
        "streamUrl": "https://audinifer.com/k9ukg9mgmu16",
        "downloadUrl": "https://www.mediafire.com/file/q8zvfvjdx5bomzq/My+Country+E03+Hd.mp4/file"
      },
      {
        "id": "168",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Conflicting loyalties create new tension as the story develops.",
        "streamUrl": "https://hanerix.com/37tucjhnjkn8",
        "downloadUrl": "https://www.mediafire.com/file/vs8wr5merflrs4x/My.Country_Ep4.in%25C2%25B4.mp4/file"
      },
      {
        "id": "169",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The characters are pushed toward difficult decisions as the conflict grows.",
        "streamUrl": "https://hanerix.com/ttjveffkc1zv",
        "downloadUrl": "https://www.mediafire.com/file/rasuas2b86ic5nk/My+Country+E05+Hd.mp4/file"
      },
      {
        "id": "170",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The story continues as the characters face another important turning point.",
        "streamUrl": "",
        "downloadUrl": ""
      },
      {
        "id": "171",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The conflict intensifies as the characters continue to pursue their goals.",
        "streamUrl": "https://hanerix.com/w73kjsdraey2",
        "downloadUrl": "https://www.mediafire.com/file/jjdt6nlknedfnui/My+Country+E07+Hd.mp4/file"
      },
      {
        "id": "172",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "New developments change the direction of the story.",
        "streamUrl": "https://hanerix.com/nsbzlzkqijj7",
        "downloadUrl": "https://www.mediafire.com/file/etyx5yrgrcnylus/My+Country+E08+Hd.mp4/file"
      },
      {
        "id": "173",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The characters encounter new obstacles as the conflict continues.",
        "streamUrl": "",
        "downloadUrl": ""
      },
      {
        "id": "174",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The story moves into another critical stage as tensions rise.",
        "streamUrl": "https://hanerix.com/7k814zdhpnp4",
        "downloadUrl": "https://www.mediafire.com/file/eyfuajenoiyw9j3/My+Country+E010+Hd.mp4/file"
      },
      {
        "id": "175",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The characters face the consequences of earlier decisions.",
        "streamUrl": "https://vibuxer.com/o46f42rw6bov",
        "downloadUrl": "https://www.mediafire.com/file/d8ylrkxoag537ij/My+Country+E011+Hd.mp4/file"
      },
      {
        "id": "176",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "The struggle becomes more intense as the characters approach another major confrontation.",
        "streamUrl": "https://hanerix.com/b3dz1c3f8qnn",
        "downloadUrl": "https://www.mediafire.com/file/22jglypuwwt4htd/My_Country_E012_Hd.mp4/file"
      },
      {
        "id": "177",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "New revelations create further tension between the characters.",
        "streamUrl": "https://audinifer.com/ab62gie5jydb",
        "downloadUrl": "https://www.mediafire.com/file/omfsjxalnbfeu48/My+Country+E013+Hd.mp4/file"
      },
      {
        "id": "178",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "The story advances toward its final conflicts as the stakes continue to rise.",
        "streamUrl": "https://vibuxer.com/mhi87v68b8rl",
        "downloadUrl": "https://www.mediafire.com/file/plxvqhgmlh5mrly/My+Country+E014+Hd.mp4/file"
      },
      {
        "id": "179",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "The characters prepare for a decisive confrontation.",
        "streamUrl": "https://vibuxer.com/jnkq0nz2p8j3",
        "downloadUrl": "https://www.mediafire.com/file/law1nov7l53h7ho/My+Country+E015+Hd.mp4/file"
      },
      {
        "id": "180",
        "episodeNumber": 16,
        "title": "Episode 16 - Finale",
        "description": "The season reaches its conclusion as the major conflicts finally come to a dramatic turning point.",
        "streamUrl": "https://vibuxer.com/omvgdpotcicp",
        "downloadUrl": "https://www.mediafire.com/file/msjuptumtqosqk1/My+Country+E016+Final+Hd.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "181",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as relationships and secrets start to develop.",
        "streamUrl": "http://hanerix.com/rq1ms7e1tew2",
        "downloadUrl": "https://www.mediafire.com/file/qinwj78gkrt2t98/The+girlfriend.mp4/file"
      },
      {
        "id": "182",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "New developments put the characters under increasing emotional pressure.",
        "streamUrl": "https://vibuxer.com/kiykc89fu35j",
        "downloadUrl": "https://www.mediafire.com/file/jiskxoqadyc8tkp/The+girlfriend+S01+Ep2+Hd.mp4/file"
      },
      {
        "id": "183",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The characters face unexpected problems as hidden tensions begin to surface.",
        "streamUrl": "https://hanerix.com/p906sml0y1zh",
        "downloadUrl": "https://www.mediafire.com/file/g96iuvji296o7et/The+girlfriend+S01+Ep3+Hd.mp4/file"
      },
      {
        "id": "184",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The situation becomes more complicated as relationships are tested.",
        "streamUrl": "http://vibuxer.com/d3ctu3phdcel",
        "downloadUrl": "https://www.mediafire.com/file/ckthququ81t6x7j/The+girlfriend+S01+Ep4+Hd.mp4/file"
      },
      {
        "id": "185",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The conflict intensifies as the characters confront difficult truths.",
        "streamUrl": "https://hanerix.com/4mo9wogypxvp",
        "downloadUrl": "https://www.mediafire.com/file/vb6gqzkvnel04k1/The+girlfriend+S01+Ep5+Hd.mp4/file"
      },
      {
        "id": "186",
        "episodeNumber": 6,
        "title": "Episode 6 - Finale",
        "description": "The season reaches a dramatic conclusion as the characters face the consequences of their choices.",
        "streamUrl": "https://audinifer.com/r1d7ck0rjtvm",
        "downloadUrl": "https://www.mediafire.com/file/xute14jfmbj1clc/The+Girlfriend+Ep6.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-04",

    episodes: [
      {
        "id": "187",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as a new political family enters the White House.",
        "streamUrl": "https://hanerix.com/36otlagmfaw3",
        "downloadUrl": "https://www.mediafire.com/file/zjnmcbcz3ev8nub/The_Oval_Ep1.mp4/file"
      },
      {
        "id": "188",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The characters begin facing new personal and political challenges.",
        "streamUrl": "https://vibuxer.com/35vgpi3x2c35",
        "downloadUrl": "https://www.mediafire.com/file/gnxemy4gguxiysh/The_Oval_S1_Ep2.mp4/file"
      },
      {
        "id": "189",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Tensions rise as secrets begin to emerge within the powerful family.",
        "streamUrl": "https://vibuxer.com/yqlf5q1ec39w",
        "downloadUrl": "https://www.mediafire.com/file/6yed2d1qewh9s4p/The_Oval_S1_Ep3.mp4/file"
      },
      {
        "id": "190",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The situation becomes more complicated as the characters struggle for control.",
        "streamUrl": "https://audinifer.com/0v5q0go14n51",
        "downloadUrl": "https://www.mediafire.com/file/yzb1v0del3b5kkr/The_Oval_S1_Ep4.mp4/file"
      },
      {
        "id": "191",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "New revelations create tension as the story continues.",
        "streamUrl": "https://audinifer.com/ms1ggxuehuun",
        "downloadUrl": ""
      },
      {
        "id": "192",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The characters face another difficult situation as their conflicts deepen.",
        "streamUrl": "https://audinifer.com/e0gcz6oqypw3",
        "downloadUrl": "https://www.mediafire.com/file/vbxzfcza2t37606/The.Oval.S01.Ep6.Mp4.mp4/file"
      },
      {
        "id": "193",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Political and personal tensions continue to grow.",
        "streamUrl": "https://hanerix.com/socpbg0pd3op",
        "downloadUrl": "https://www.mediafire.com/file/d69su7gt5g5pa56/The.Oval.S01.Ep7.Mp4.mp4/file"
      },
      {
        "id": "194",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The characters are forced to deal with the consequences of their actions.",
        "streamUrl": "https://hanerix.com/9yoezjma1q7d",
        "downloadUrl": "https://www.mediafire.com/file/ed7v27jads80sg3/The.Oval.S01.Ep8.Mp4.mp4/file"
      },
      {
        "id": "195",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "New problems emerge as the struggle for power becomes more intense.",
        "streamUrl": "https://hanerix.com/1rejeddlx9e6",
        "downloadUrl": "https://www.mediafire.com/file/yor7sq4lvmr8bw5/The.Oval.S01.Ep9.Mp4.mp4/file"
      },
      {
        "id": "196",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The characters face another major turning point.",
        "streamUrl": "https://audinifer.com/p62mo6g7wyry",
        "downloadUrl": "https://www.mediafire.com/file/hjmoih800j96ywp/The.Oval.S01.Ep10.Mp4.mp4/file"
      },
      {
        "id": "197",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The conflict continues as new secrets come to light.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/pofzlecmlnbkphe/The.Oval.S01.Ep11.Mp4.mp4/file"
      },
      {
        "id": "198",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "The characters are pushed into increasingly difficult circumstances.",
        "streamUrl": "https://vibuxer.com/0tgmo64vwvgv",
        "downloadUrl": "https://www.mediafire.com/file/xu3yyze4xetxgj8/The.Oval.S01.Ep12.Mp4.mp4/file"
      },
      {
        "id": "199",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "The pressure increases as the characters struggle to protect their interests.",
        "streamUrl": "https://hanerix.com/zwkionzi2eew",
        "downloadUrl": "https://www.mediafire.com/file/s6c0z9483ifk0gz/The.Oval.S01.Ep13.Mp4.mp4/file"
      },
      {
        "id": "200",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "New developments change the balance of power.",
        "streamUrl": "https://audinifer.com/zwgpgkxknn43",
        "downloadUrl": "https://www.mediafire.com/file/kup2bk4vxz6boee/The.Oval.S01.Ep14mp4.mp4/file"
      },
      {
        "id": "201",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "The characters confront another serious challenge as the story develops.",
        "streamUrl": "https://vibuxer.com/4bwf3hrrfa6i",
        "downloadUrl": "https://www.mediafire.com/file/eckh7k6kw50sc79/The.Oval.S01.Ep15.Mp4.mp4/file"
      },
      {
        "id": "202",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "The conflict grows more intense as the characters approach another turning point.",
        "streamUrl": "https://vibuxer.com/3v0j3uepcgnk",
        "downloadUrl": "https://www.mediafire.com/file/g28zo416tl9rud4/The.Oval.S01.Ep16.Mp4.mp4/file"
      },
      {
        "id": "203",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "New revelations create additional pressure for the characters.",
        "streamUrl": "https://vibuxer.com/iv4xyf2a99zv",
        "downloadUrl": "https://www.mediafire.com/file/ru8tay6ek4dsxjj/The.Oval.S01.Ep17.Mp4.mp4/file"
      },
      {
        "id": "204",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "The characters are pushed into another dangerous situation as the story develops.",
        "streamUrl": "https://hanerix.com/o9tp7zpgnrui",
        "downloadUrl": "https://www.mediafire.com/file/vrxy83hq0dxvci8/The_Oval_S1_Ep18.mp4/file"
      },
      {
        "id": "205",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "New revelations bring the characters closer to the truth behind the events.",
        "streamUrl": "https://audinifer.com/p6ixmk8xwggm",
        "downloadUrl": "https://www.mediafire.com/file/va09vsam86cb3id/The_Oval_S01_Ep19_Mp4.mp4/file"
      },
      {
        "id": "206",
        "episodeNumber": 20,
        "title": "Episode 20",
        "description": "The conflict intensifies as the characters prepare for another confrontation.",
        "streamUrl": "https://audinifer.com/x8n2gonb1gvo",
        "downloadUrl": "https://www.mediafire.com/file/9yadkcok93o8yvf/The_Oval_S01_Ep_20_Mp4.mp4/file"
      },
      {
        "id": "207",
        "episodeNumber": 21,
        "title": "Episode 21",
        "description": "The characters face new challenges as the season moves toward its conclusion.",
        "streamUrl": "https://hanerix.com/lfqjw9tykc8r",
        "downloadUrl": "https://www.mediafire.com/file/jpzap8eo947u62p/The_Oval_21.mp4/file"
      },
      {
        "id": "208",
        "episodeNumber": 22,
        "title": "Episode 22",
        "description": "The story continues as major conflicts move toward a decisive stage.",
        "streamUrl": "https://hanerix.com/g8128npqvlzm",
        "downloadUrl": "https://www.mediafire.com/file/8dy0jh0vvwtbl7w/the_oval_22.mp4/file"
      },
      {
        "id": "209",
        "episodeNumber": 23,
        "title": "Episode 23",
        "description": "The characters face another critical moment as the story approaches its finale.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3dcyfzj5nhvsaoo/THE_OVAL_EP_23.mp4/file"
      },
      {
        "id": "210",
        "episodeNumber": 24,
        "title": "Episode 24",
        "description": "The season moves toward its final confrontation as the stakes reach their highest point.",
        "streamUrl": "https://vibuxer.com/lx200evqev8n",
        "downloadUrl": "https://www.mediafire.com/file/rdv2di8uiza6669/The_oval_24.mp4/file"
      },
      {
        "id": "211",
        "episodeNumber": 25,
        "title": "Episode 25 - Finale",
        "description": "The season reaches its dramatic conclusion as the major conflicts come to a turning point.",
        "streamUrl": "https://vibuxer.com/abeqqisbuphg",
        "downloadUrl": "https://www.mediafire.com/file/cefm2w6qvkfx0/The_Oval_25_final.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-06",

    episodes: [
      {
        "id": "212",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as the characters face new challenges and unexpected events.",
        "streamUrl": "https://hanerix.com/rkcsuqn0s1ro",
        "downloadUrl": "https://www.mediafire.com/file/0hu04xih8gm6a6c/TEACH+LEASSON+S01+E01.mp4/file"
      },
      {
        "id": "213",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The story continues as new situations and challenges develop.",
        "streamUrl": "https://vibuxer.com/6xtfga0k44qs",
        "downloadUrl": "https://www.mediafire.com/file/2m709vv624cjzb8/TEACH+LEASSON+E2+.mp4/file"
      },
      {
        "id": "214",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The characters face new challenges as the story continues to unfold.",
        "streamUrl": "https://hanerix.com/6ri4zyinxxnv",
        "downloadUrl": "https://www.mediafire.com/file/yew4563bfrsvvjx/TEACH+LEASSON+E03.mp4/file"
      },
      {
        "id": "215",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "New developments create tension as the characters deal with unexpected events.",
        "streamUrl": "https://avcaption.com/watch/e97e9a3a09b7a653e7adc245b477c4fe",
        "downloadUrl": "https://www.mediafire.com/file/v82r7a1eu8lrwma/TEACH+A+LESSON+EP+04__+.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-06",

    episodes: [
      {
        "id": "216",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The story begins as Bryan Mills faces a dangerous situation that changes his life.",
        "streamUrl": "https://avcaption.com/watch/d29171a15fe9178985affdf8cb0ea39f",
        "downloadUrl": "https://www.mediafire.com/file/sk8kjwrhzyxf77l/TAKEN_S01_EP_01.mp4/file"
      },
      {
        "id": "217",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Bryan continues his investigation while facing new dangers and unexpected challenges.",
        "streamUrl": "https://avcaption.com/watch/6a488a84ffa1e7fff745654938be88a7",
        "downloadUrl": "https://www.mediafire.com/file/9x6iik3zpynwilk/TAKEN_S01_EP_02.mp4/file"
      },
      {
        "id": "218",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The investigation becomes more complicated as new threats emerge.",
        "streamUrl": "https://avcaption.com/watch/35d5cf9e5a0227178d5f99c18a955480",
        "downloadUrl": "https://www.mediafire.com/file/slwwervse7yowyy/TAKEN_S01_EP_03.mp4/file"
      },
      {
        "id": "219",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The situation becomes more dangerous as Bryan faces another major challenge.",
        "streamUrl": "https://avcaption.com/watch/7e45ecffe4136da47cc1cf60e6465910",
        "downloadUrl": "https://www.mediafie.com/file/ta3j152ydd48h31/TAKEN_S01_EP_04.mp4/file"
      },
      {
        "id": "220",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "New developments push Bryan deeper into the dangerous investigation.",
        "streamUrl": "https://avcaption.com/watch/86de8fb7ee667e67e39e298d07c33ed5",
        "downloadUrl": "https://www.mediafire.com/file/v9tlb5vuxd67r63/TAKEN_S01_EP_05.mp4/file"
      }
    ],
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
    isFeatured: false ,
    createdAt: "2026-10-09",

    episodes: [
      {
        "id": "221",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Maxpein arrives at a new school and meets Deib, beginning an unexpected relationship filled with conflict and romance.",
        "streamUrl": "https://vibuxer.com/ajsgcidmtbq0",
        "downloadUrl": "https://www.mediafire.com/file/ibhy7m8gbsqr89p/Hes+Into+Her+S01+E01.mp4/file"
      },
      {
        "id": "222",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Maxpein and Deib continue navigating school life, misunderstandings, and their growing connection.",
        "streamUrl": "https://audinifer.com/ys0vhfnbewv7",
        "downloadUrl": "https://www.mediafire.com/file/0mh1r18epoulsuu/Hes_Into_Her_S01_E02.mp4/file"
      },
      {
        "id": "223",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "New school experiences bring more challenges as the characters develop friendships and confront their feelings.",
        "streamUrl": "https://hanerix.com/xbdhgt34p0t2",
        "downloadUrl": "https://www.mediafire.com/file/lphbr4y8usihcbz/Hes_Into_Her_S01_E03.mp4/file"
      },
      {
        "id": "224",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The story continues as Maxpein and Deib navigate their changing relationship and school life.",
        "streamUrl": "https://audinifer.com/yqm9qap3yxb2",
        "downloadUrl": ""
      },
      {
        "id": "225",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Relationships and friendships continue to evolve as unexpected situations test the characters.",
        "streamUrl": "https://audinifer.com/s66mrvf8fcvd",
        "downloadUrl": "https://www.mediafire.com/file/h74lbvtvdj4iruw/He%2527s_Into_Her_S01_E05.mp4/file"
      },
      {
        "id": "226",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The characters face further relationship challenges and new developments in their school lives.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ci4tk7dn51l8x79/He%2527s_Into_Her_S01_E06.mp4/file"
      }
    ],
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
explainer: "ROCK KIMOMO",
genres: ["Drama", "Comedy", "Mystery"],
isFeatured: false ,
createdAt: "2026-10-09",

    episodes: [
      {
        "id": "227",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Devious Maids Season 1, Episode 1.",
        "streamUrl": "https://audinifer.com/ut2xddrh1q66",
        "downloadUrl": "https://www.mediafire.com/file/82kj87b4gkp17dp/Devious+Maids+S01e01+Hd.mp4/file"
      },
      {
        "id": "228",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Devious Maids Season 1, Episode 2.",
        "streamUrl": "https://audinifer.com/c3b7yu95xwnq",
        "downloadUrl": "https://www.mediafire.com/file/p8x3zyl176dsot9/Devious+Maids+S01e02+Hd.mp4/file"
      },
      {
        "id": "229",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Devious Maids Season 1, Episode 3.",
        "streamUrl": "https://audinifer.com/gaihwdk2ilaf",
        "downloadUrl": "https://www.mediafire.com/file/knyl1uz7piuaq8f/Devious_Maids_S01e03_Hd.mp4/file"
      },
      {
        "id": "230",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Devious Maids Season 1, Episode 4.",
        "streamUrl": "https://audinifer.com/60ufjg63hnah",
        "downloadUrl": "https://www.mediafire.com/file/pqcdi2f4gshpaj1/Devious_Maids_S01e04_Hd.mp4/file"
      },
      {
        "id": "231",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Devious Maids Season 1, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cscxl2x9od2b7p3/Devious_Maids_S01e05_Hd.mp4/file"
      },
      {
        "id": "232",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Devious Maids Season 1, Episode 6.",
        "streamUrl": "https://audinifer.com/rdt8e0v4njam",
        "downloadUrl": "https://www.mediafire.com/file/3bzshkgut67nd1j/Devious_Maids_S01e06_Hd.mp4/file"
      },
      {
        "id": "233",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Devious Maids Season 1, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1u8d1bwwt6mb6lf/Devious_Maids_S01e07_Hd.mp4/file"
      },
      {
        "id": "234",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Devious Maids Season 1, Episode 8.",
        "streamUrl": "https://hanerix.com/2981phlivtgq",
        "downloadUrl": "https://www.mediafire.com/file/dvz52tphixgstrh/Devious_Maids_S01e08_Hd.mp4/file"
      }
    ],
  },
{
  id: "27",
  title: "THE CHOSEN SEASON 2",
  slug: "the-chosen-season-2",
  year: "2021",
  rating: "9.2",
  image: "the-chosen.jpg",
  description:
    "A biblical drama following Jesus and His disciples as their faith is tested and their understanding of His mission deepens through powerful encounters and life-changing teachings.",
  language: "English",
  explainer: "Mussa Savimbi",
  genres: ["Drama", "History"],
  isFeatured: false ,
  createdAt: "2026-10-13",

    episodes: [
      {
        "id": "238",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The Chosen Season 2, Episode 1.",
        "streamUrl": "https://hgcloud.to/9gi2z62ety3b",
        "downloadUrl": "https://www.mediafire.com/file/33jiiak998oig65/CHOSEN_S2_EP1.mp4/file"
      },
      {
        "id": "239",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The Chosen Season 2, Episode 2.",
        "streamUrl": "https://hgcloud.to/dacxfvo1zhii",
        "downloadUrl": "https://www.mediafire.com/file/t4oa24dr7elhxbe/CHOSEN_S2_EP2.mp4/file"
      },
      {
        "id": "240",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The Chosen Season 2, Episode 3.",
        "streamUrl": "https://hgcloud.to/x0tnb438hq5d",
        "downloadUrl": "https://www.mediafire.com/file/7pdvv1e4amk2yeq/CHOSEN_S2_EP3.mp4/file"
      }
    ],
  },
{
  id: "28",
  title: "COVEN ACADEMY SEASON 1",
  slug: "coven-academy-season-1",
  year: "2025",
  rating: "7.0",
  image: "coven-academy.jpg",
  description:
    "A supernatural fantasy series set in a mysterious academy where young witches face dangerous secrets, hidden rivalries, and challenges that test their magical abilities.",
  language: "English",
  explainer: "Skov",
  genres: ["Drama", "Fantasy", "Mystery"],
  isFeatured: false ,
  createdAt: "2026-10-13",

    episodes: [
      {
        "id": "241",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Coven Academy Season 1, Episode 1.",
        "streamUrl": "https://hgcloud.to/i2eezz1qvqd7",
        "downloadUrl": "https://www.mediafire.com/file/80gn7nduqj7z8z0/Coven+Academy+S1E1.mp4/file"
      },
      {
        "id": "242",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Coven Academy Season 1, Episode 2.",
        "streamUrl": "https://hgcloud.to/kt354l4inny1",
        "downloadUrl": "https://www.mediafire.com/file/gr042c6qj33qsd7/Coven+Academy+S1E2.mp4/file"
      },
      {
        "id": "243",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Coven Academy Season 1, Episode 3.",
        "streamUrl": "https://hgcloud.to/wgk9c5jfld6n",
        "downloadUrl": "https://www.mediafire.com/file/zd1mzcu7zysswc3/Coven+Academy+S1E3.mp4/file"
      },
      {
        "id": "244",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Coven Academy Season 1, Episode 4.",
        "streamUrl": "https://hgcloud.to/zuprfy834rxm",
        "downloadUrl": "https://www.mediafire.com/file/6dwidaerm65r2sn/Coven_Academy_S1E4.mp4/file"
      },
      {
        "id": "1628",
        "episodeNumber": 1,
        "title": "COVEN ACADEMY - Season 1 Episode 1",
        "description": "COVEN ACADEMY Season 1 Episode 1. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E1.mp4"
      },
      {
        "id": "1629",
        "episodeNumber": 2,
        "title": "COVEN ACADEMY - Season 1 Episode 2",
        "description": "COVEN ACADEMY Season 1 Episode 2. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E2.mp4"
      },
      {
        "id": "1630",
        "episodeNumber": 3,
        "title": "COVEN ACADEMY - Season 1 Episode 3",
        "description": "COVEN ACADEMY Season 1 Episode 3. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E3.mp4"
      },
      {
        "id": "1631",
        "episodeNumber": 4,
        "title": "COVEN ACADEMY - Season 1 Episode 4",
        "description": "COVEN ACADEMY Season 1 Episode 4. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E4.mp4"
      },
      {
        "id": "1632",
        "episodeNumber": 5,
        "title": "COVEN ACADEMY - Season 1 Episode 5",
        "description": "COVEN ACADEMY Season 1 Episode 5. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E5.mp4"
      },
      {
        "id": "1633",
        "episodeNumber": 6,
        "title": "COVEN ACADEMY - Season 1 Episode 6",
        "description": "COVEN ACADEMY Season 1 Episode 6. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E6.mp4"
      },
      {
        "id": "1634",
        "episodeNumber": 7,
        "title": "COVEN ACADEMY - Season 1 Episode 7",
        "description": "COVEN ACADEMY Season 1 Episode 7. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E7.mp4"
      },
      {
        "id": "1635",
        "episodeNumber": 8,
        "title": "COVEN ACADEMY - Season 1 Episode 8",
        "description": "COVEN ACADEMY Season 1 Episode 8. Agasobanuye by Sikov.",
        "streamUrl": "",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsiko%2FCoven_Academy_S1E8.mp4"
      }
    ],
  },

{
  id: "29",
  title: "DEVIOUS MAIDS SEASON 2",
  slug: "devious-maids-season-2",
  year: "2014",
  rating: "7.8",
  image: "devious-maidss.jpg",
  description:
    "The secrets of Beverly Hills grow more dangerous as four maids navigate complicated relationships, wealthy employers, shocking revelations, and mysteries that threaten their lives.",
  language: "English",
  explainer: "ROCK KIMOMO",
  genres: ["Drama", "Comedy", "Mystery"],
  isFeatured: false ,
  createdAt: "2026-10-13",

    episodes: [
      {
        "id": "235",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Devious Maids Season 2, Episode 1.",
        "streamUrl": "https://hgcloud.to/7z67z8xylj7e",
        "downloadUrl": "https://www.mediafire.com/file/rdtn3grx4kpef8q/Devious+Maids+S02e01+Hd.mp4/file"
      },
      {
        "id": "236",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Devious Maids Season 2, Episode 2.",
        "streamUrl": "https://hgcloud.to/2vx6j2hl9bss",
        "downloadUrl": "https://www.mediafire.com/file/ma8zqxsxgmdogew/Devious+Maids+S02e02+Hd.mp4/file"
      },
      {
        "id": "237",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Devious Maids Season 2, Episode 3.",
        "streamUrl": "https://www.mediafire.com/file/t3zeflrtjc6zaur/Devious+Maids+S02e03+Hd.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/t3zeflrtjc6zaur/Devious+Maids+S02e03+Hd.mp4/file"
      }
    ],
  },

{
  id: "30",
  title: "THE WITCHER: BLOOD ORIGIN",
  slug: "the-witcher-blood-origin",
  year: "2022",
  rating: "7.0",
  image: "the-witcher-blood-origin.jpg",
  description:
    "A fantasy prequel set in an ancient elven world, exploring the events that led to the creation of the first Witcher and the Conjunction of the Spheres.",
  language: "English",
  explainer: "",
  genres: ["Action", "Adventure", "Drama", "Fantasy"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "245",
        "episodeNumber": 1,
        "title": "Episode 1 Part A",
        "description": "The Witcher: Blood Origin Season 1, Episode 1 Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ampj10yp17da4gm/WITCHER_BLOOD_ORGIN_EP1A.mp4/file"
      },
      {
        "id": "246",
        "episodeNumber": 1,
        "title": "Episode 1 Part B",
        "description": "The Witcher: Blood Origin Season 1, Episode 1 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4erhd27squ8zbnq/WITCHER_BLOOD_ORGIN_EP1B.mp4/file"
      },
      {
        "id": "247",
        "episodeNumber": 1,
        "title": "Episode 1 Part C",
        "description": "The Witcher: Blood Origin Season 1, Episode 1 Part C.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4671cgv37ackp31/WITCHER_BLOOD_ORGIN_EP1C.mp4/file"
      },
      {
        "id": "248",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The Witcher: Blood Origin Season 1, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/znwv5klrq3j4ggw/THE_WITCHER_2.avi/file"
      },
      {
        "id": "249",
        "episodeNumber": 3,
        "title": "Episode 3 Part A",
        "description": "The Witcher: Blood Origin Season 1, Episode 3 Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/801003aojk7io5z/WITCHER_BLOOD_ORGIN_EP3A.mp4/file"
      },
      {
        "id": "250",
        "episodeNumber": 3,
        "title": "Episode 3 Part B",
        "description": "The Witcher: Blood Origin Season 1, Episode 3 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/58patna4a3r7b4f/WITCHER_BLOOD_ORGIN_EP3B.mp4/file"
      },
      {
        "id": "251",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The Witcher: Blood Origin Season 1, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lm597xwvb7ebizl/WITCHER_BLOOD_ORGIN_EP4_.mp4/file"
      },
      {
        "id": "252",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The Witcher: Blood Origin Season 1, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/44rack1tv0c67vu/THE_WITCHER_5.avi/file"
      },
      {
        "id": "253",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The Witcher: Blood Origin Season 1, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nmc2ekb7jbh24om/THE_WITCHER_6.avi/file"
      },
      {
        "id": "254",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The Witcher: Blood Origin Season 1, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8hx1kl9szewsapu/THE_WITCHER_7.avi/file"
      },
      {
        "id": "255",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The Witcher: Blood Origin Season 1, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/k5vrcpbwrnxun9t/THE_WITCHER_8_FINAL.avi/file"
      }
    ],
  },
{
  id: "31",
  title: "GUARDIAN OF DAFENG",
  slug: "guardian-of-dafeng",
  year: "2024",
  rating: "8.0",
  image: "guardian-of-dafeng.jpg",
  description:
    "A fantasy adventure following a modern man transported into an ancient world, where he uses his knowledge and investigative skills to solve mysteries and confront powerful enemies.",
  language: "Chinese",
  explainer: "B The Great",
  genres: ["Action", "Adventure", "Fantasy", "Mystery"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "256",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Guardian of Dafeng, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/yzuw8dcs2jicvkn/Guardian_Of_Dafeng_Ep1.mp4/file"
      },
      {
        "id": "257",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Guardian of Dafeng, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/zg7pt7kgtoh6564/Guardian_Of_Dafeng_Ep2.mp4/file"
      },
      {
        "id": "258",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Guardian of Dafeng, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/xir1m3guav3wfsy/Guardian_Of_Dafeng_Ep3.mp4/file"
      }
    ],
  },
{
  id: "32",
  title: "NINE BODIES IN A MEXICAN MORGUE",
  slug: "nine-bodies-in-a-mexican-morgue",
  year: "2025",
  rating: "7.0",
  image: "nine-bodies-in-a-mexican-morgue.jpg",
  description:
    "A mystery thriller following survivors of a plane crash in a remote Mexican jungle, where a series of deaths turns their struggle for survival into a frightening investigation.",
  language: "English",
  explainer: "Gaheza",
  genres: ["Drama", "Mystery", "Thriller"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "259",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Nine Bodies in a Mexican Morgue, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bhfp06qrgc07g8p/Nine_Bodies_in_A_Mexican_Morgue_EP1_1.mp4/file"
      },
      {
        "id": "260",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Nine Bodies in a Mexican Morgue, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/atn2e54s1s0yvau/Nine.Bodies.in.a.Mexican.Morgue.EP2_1.mp4/file"
      },
      {
        "id": "261",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Nine Bodies in a Mexican Morgue, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6fumt2tq8ttovft/Nine.Bodies.in.a.Mexican.Morgue.EP3_1.mp4/file"
      },
      {
        "id": "262",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Nine Bodies in a Mexican Morgue, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/livdlt3kgr8p2rg/Nine.Bodies.in.a.Mexican.Morgue.EP4_1.mp4/file"
      },
      {
        "id": "263",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Nine Bodies in a Mexican Morgue, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ind5hygi5iiebol/Nine_Bodies_in_a_Mexican_Morgue05.mp4/file"
      },
      {
        "id": "264",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Nine Bodies in a Mexican Morgue, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/48bp1pdqyr6wzqc/Nine_Bodies_in_a_Mexican_Morgue_S01E06_final.mp4/file"
      }
    ],
  },
{
  id: "33",
  title: "WAITING FOR YOU",
  slug: "waiting-for-you",
  year: "2026",
  rating: "7.0",
  image: "waiting-for-you.jpg",
  description:
    "A drama exploring relationships, personal struggles, secrets, and unexpected events that shape the lives of its characters.",
  language: "English",
  explainer: "Gaheza",
  genres: ["Drama", "Romance"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "265",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Waiting for You, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dtssdr21jojj8hk/Waiting_For_You_1.mp4/file"
      },
      {
        "id": "266",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Waiting for You, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e2er5sad06l8ohm/Waiting_For_You_2.mp4/file"
      },
      {
        "id": "267",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Waiting for You, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6hni63l3o9qlgtw/Waiting_For_You_3.mp4/file"
      },
      {
        "id": "268",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Waiting for You, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nd8die5oh38drsy/Waiting_For_You_4.mp4/file"
      },
      {
        "id": "269",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Waiting for You, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vdd2ov8d2xnsuxl/Waiting_For_You_6.mp4/file"
      },
      {
        "id": "270",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Waiting for You, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x44gc8fahk7yd0x/Waiting_for_You_7.mp4/file"
      },
      {
        "id": "271",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Waiting for You, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8bf43h8an4yzfwt/Waiting_for_You_8.mp4/file"
      },
      {
        "id": "272",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Waiting for You, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/pom6pmo3clcxmxh/Waiting_for_You_9.mp4/file"
      },
      {
        "id": "273",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "Waiting for You, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b1obzcvujkbt5u9/Waiting_for_You_10.mp4/file"
      },
      {
        "id": "274",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "Waiting for You, Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/00hg2oaejyf3abt/Waiting_For_You_11.mp4/file"
      },
      {
        "id": "275",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "Waiting for You, Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g7tcetgow4ylwmy/Waiting_For_You_12_Final.mp4/file"
      }
    ],
  },
{
  id: "34",
  title: "SOMEONE TO WATCH OVER ME",
  slug: "someone-to-watch-over-me",
  year: "2016",
  rating: "7.0",
  image: "someone-to-watch-over-me.jpg",
  description:
    "A romantic drama exploring love, family responsibilities, difficult choices, and the challenges that test relationships.",
  language: "English",
  explainer: "ROCK KIMOMO",
  genres: ["Drama", "Romance"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "276",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Someone to Watch Over Me, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/e3aqlyyjkfeq7f1/SOMEONE_TO_WATCH_OVER_ME_01.avi/file"
      },
      {
        "id": "277",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Someone to Watch Over Me, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/lpdsswr2auvwlpt/SOMEONE_TO_WATCH_OVER_ME_02.avi/file"
      },
      {
        "id": "278",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Someone to Watch Over Me, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/55iwjtwkaz18mc7/SOMEONE_TO_WATCH_OVER_ME_03.avi/file"
      },
      {
        "id": "279",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Someone to Watch Over Me, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/wn31exxya3xo3zb/SOMEONE_TO_WATCH_OVER_ME_05.avi/file"
      }
    ],
  },
{
  id: "35",
  title: "FURIES",
  slug: "furies",
  year: "2024",
  rating: "7.0",
  image: "furies.jpg",
  description:
    "A French action crime thriller following a young woman drawn into the dangerous criminal underworld of Paris, where she encounters a mysterious figure known as the Fury.",
  language: "French",
  explainer: "Rocky & Hakim",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "280",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Furies Season 1, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a5vi9vp04m9clyx/FURIES_EP_S01E01_2.mp4/file"
      },
      {
        "id": "281",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Furies Season 1, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t0bnd4rtifoijzx/Furies_S01_E02.mp4/file"
      },
      {
        "id": "282",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Furies Season 1, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l78fr33tzffckro/Furies_S01_E03.mp4/file"
      },
      {
        "id": "283",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Furies Season 1, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x48t8vlr4jw1syj/Furies_S01_E04.mp4/file"
      },
      {
        "id": "284",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Furies Season 1, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sxshycqfp7d68k9/Furies_S01_E05.mp4/file"
      },
      {
        "id": "285",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Furies Season 1, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vyfshe4ow9cgtas/Furies_S01_E06.mp4/file"
      },
      {
        "id": "286",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Furies Season 1, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1ucz8w0sthjza2l/Furies_S01_E07.mp4/file"
      }
    ],
  },
{
  id: "36",
  title: "MERLIN",
  slug: "merlin",
  year: "2008",
  rating: "7.9",
  image: "merlin.jpg",
  description:
    "A fantasy adventure following the young wizard Merlin as he protects Prince Arthur and navigates the mysteries, dangers, and magic of Camelot.",
  language: "English",
  explainer: "Hakim The Professor",
  genres: ["Adventure", "Drama", "Fantasy"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "287",
        "episodeNumber": 1,
        "title": "Season 2 Episode 1",
        "description": "Merlin Season 2, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iioy1m71hvqe390/Merlin_S02E01.mp4/file"
      },
      {
        "id": "288",
        "episodeNumber": 2,
        "title": "Season 2 Episode 2",
        "description": "Merlin Season 2, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bqdyx5pcnf63di1/Merlin_S02E02.mp4/file"
      },
      {
        "id": "289",
        "episodeNumber": 3,
        "title": "Season 2 Episode 3",
        "description": "Merlin Season 2, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/15yzm4aszzbwpvn/Merlin_S02E03.mp4/file"
      },
      {
        "id": "290",
        "episodeNumber": 4,
        "title": "Season 2 Episode 4",
        "description": "Merlin Season 2, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/og7whesc4dxe61t/Merlin_S02E04.mp4/file"
      },
      {
        "id": "291",
        "episodeNumber": 5,
        "title": "Season 2 Episode 5",
        "description": "Merlin Season 2, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/puxtcnsfkkjknje/Merlin_S02E05.mp4/file"
      },
      {
        "id": "292",
        "episodeNumber": 6,
        "title": "Season 2 Episode 6",
        "description": "Merlin Season 2, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3upy0rwikubqsj5/Merlin_S02E06.mp4/file"
      },
      {
        "id": "293",
        "episodeNumber": 7,
        "title": "Season 2 Episode 7",
        "description": "Merlin Season 2, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4uotkbbecbr805m/Merlin_S02E07.mp4/file"
      },
      {
        "id": "294",
        "episodeNumber": 8,
        "title": "Season 2 Episode 8",
        "description": "Merlin Season 2, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5jpj0u169j17rgc/Merlin_S02E08.mp4/file"
      },
      {
        "id": "295",
        "episodeNumber": 9,
        "title": "Season 2 Episode 9",
        "description": "Merlin Season 2, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8zpjodmc36j58sa/Merlin_S02E09.mp4/file"
      },
      {
        "id": "296",
        "episodeNumber": 10,
        "title": "Season 2 Episode 10",
        "description": "Merlin Season 2, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m3e7v2lahmcitru/Merlin_S02E10.mp4/file"
      },
      {
        "id": "297",
        "episodeNumber": 11,
        "title": "Season 2 Episode 11",
        "description": "Merlin Season 2, Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wity38dgumabnt0/Merlin_S02E11.mp4/file"
      },
      {
        "id": "298",
        "episodeNumber": 12,
        "title": "Season 2 Episode 12",
        "description": "Merlin Season 2, Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bqtnx40e0siuv7n/Merlin_S02E12.mp4/file"
      },
      {
        "id": "299",
        "episodeNumber": 13,
        "title": "Season 2 Episode 13",
        "description": "Merlin Season 2, Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gb1su5xll7kgqhs/Merlin_S02E13.mp4/file"
      }
    ],
  },
{
  id: "37",
  title: "GRISSE",
  slug: "grisse",
  year: "2018",
  rating: "6.5",
  image: "grisse.jpg",
  description:
    "A historical action drama set in the Dutch East Indies, following people caught in a struggle against colonial oppression and injustice.",
  language: "English",
  explainer: "Junior Giti",
  genres: ["Action", "Drama", "History"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "300",
        "episodeNumber": 1,
        "title": "Episode 1 Part A",
        "description": "Grisse, Episode 1 Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/atk8rs32585goda/GRISSE_1.avi/file"
      },
      {
        "id": "301",
        "episodeNumber": 1,
        "title": "Episode 1 Part B",
        "description": "Grisse, Episode 1 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/usmpzr75edsxj13/GRISSE_1B.avi/file"
      },
      {
        "id": "302",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Grisse, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/j2pbw2uu0toz8gx/GRISSE_2.avi/file"
      },
      {
        "id": "303",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Grisse, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/0i2ln1dqcskniot/GRISSE_3.avi/file"
      },
      {
        "id": "304",
        "episodeNumber": 4,
        "title": "Episode 4 Part A",
        "description": "Grisse, Episode 4 Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/vre1q69dsy1orwu/GRISSE_4.avi/file"
      },
      {
        "id": "305",
        "episodeNumber": 4,
        "title": "Episode 4 Part B",
        "description": "Grisse, Episode 4 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/prb2cer78zist7r/GRISSE_4B.avi/file"
      },
      {
        "id": "306",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Grisse, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/7n4iw1viqhvb74x/GRISSE_5.avi/file"
      },
      {
        "id": "307",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Grisse, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/0g4h6hy6m7a91k9/GRISSE_6.avi/file"
      },
      {
        "id": "308",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Grisse, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/fnc6333xy2z4obm/GRISSE_7.avi/file"
      },
      {
        "id": "309",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Grisse, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/831u5pcr9jyoh6z/GRISSE_8_FINAL_S1.avi/file"
      }
    ],
  },
{
  id: "38",
  title: "PALPITO",
  slug: "palpito",
  year: "2022",
  rating: "6.5",
  image: "palpito.jpg",
  description:
    "A Colombian thriller about a man seeking revenge against an organ-trafficking organization after his wife dies, uncovering a disturbing conspiracy involving a heart transplant.",
  language: "Spanish",
  explainer: "Sankara",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "310",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Palpito, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xynt4ssv4x2qcf1/PALPITO+EP+1.mp4/file"
      },
      {
        "id": "311",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Palpito, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/i24m2m08zhkqy38/PALPITO+EP+2.mp4/file"
      },
      {
        "id": "312",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Palpito, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p47u60z2i4wv9g0/PALPITO+EP03+.mp4/file"
      },
      {
        "id": "313",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Palpito, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/avorn1lq71tyfzj/PALPITO+EP+4+.mp4/file"
      },
      {
        "id": "314",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Palpito, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uazkimy2b6l2f4d/PALPITO+EP+5+.mp4/file"
      },
      {
        "id": "315",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Palpito, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nir85q0cm7l2i7d/PALPITO+EP+6.mp4/file"
      },
      {
        "id": "316",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Palpito, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fv1qrzylukfqxud/PALPITO+EP+7.mp4/file"
      },
      {
        "id": "317",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Palpito, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/776yvna815jeovk/PALPITO+EP+8.mp4/file"
      },
      {
        "id": "318",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Palpito, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gw3ggj6148zvwwo/PALPITO+EP+9.mp4/file"
      },
      {
        "id": "319",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "Palpito, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zzuhefumn3rwt4f/PALPITO_EP_10.mp4/file"
      },
      {
        "id": "320",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "Palpito, Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jubxsn146zi24ni/PALPITO+EP+12.mp4/file"
      },
      {
        "id": "321",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "Palpito, Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a7ngmr8jnrk90m8/PALPITO+EP+13.mp4/file"
      },
      {
        "id": "322",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "Palpito, Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lbe1urrxjrimt69/PALPITO_EP_14_FINAL.mp4/file"
      }
    ],
  },
{
  id: "39",
  title: "BEL-AIR",
  slug: "bel-air",
  year: "2022",
  rating: "7.0",
  image: "bel-air.jpg",
  description:
    "A dramatic reimagining of The Fresh Prince of Bel-Air, following a teenager who moves from West Philadelphia to live with his wealthy relatives in Bel-Air, where family tensions and social differences reshape his life.",
  language: "English",
  explainer: "ROCK KIMOMO",
  genres: ["Drama"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "323",
        "episodeNumber": 1,
        "title": "Season 3 Episode 1",
        "description": "Bel-Air Season 3, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zjozazvs1d18mee/Bel-Air_S03e01.mp4/file"
      },
      {
        "id": "324",
        "episodeNumber": 2,
        "title": "Season 3 Episode 2",
        "description": "Bel-Air Season 3, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4eiopt2vxyj105k/Bel-Air_S03e02.mp4/file"
      },
      {
        "id": "325",
        "episodeNumber": 3,
        "title": "Season 3 Episode 3",
        "description": "Bel-Air Season 3, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zgztvnxqejjss87/Bel-Air_S03e03.mp4/file"
      },
      {
        "id": "326",
        "episodeNumber": 4,
        "title": "Season 3 Episode 4",
        "description": "Bel-Air Season 3, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/obpj6uutle9t0bu/Bel-Air_S03e04.mp4/file"
      },
      {
        "id": "327",
        "episodeNumber": 5,
        "title": "Season 3 Episode 5",
        "description": "Bel-Air Season 3, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7m8t81gw3t96zrv/Bel-Air_S03e05.mp4/file"
      },
      {
        "id": "328",
        "episodeNumber": 6,
        "title": "Season 3 Episode 6",
        "description": "Bel-Air Season 3, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gebb5b92xf0jf1a/Bel-Air_S03e06.mp4/file"
      }
    ],
  },
{
  id: "40",
  title: "PARASYTE: THE GREY",
  slug: "parasyte-the-grey",
  year: "2024",
  rating: "7.0",
  image: "parasyte-the-grey.jpg",
  description:
    "A South Korean science-fiction horror thriller in which mysterious parasitic organisms invade human hosts, forcing survivors to fight for humanity's future.",
  language: "Korean",
  explainer: "",
  genres: ["Action", "Horror", "Sci-Fi", "Thriller"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "329",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Parasyte: The Grey, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cg7gebteos3hkka/PARASYTE_GREY_EP1.zacky.avi/file"
      },
      {
        "id": "330",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Parasyte: The Grey, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c4e2gcakqhoxx0w/PARASYTE_GREY_EP2.zacky.avi/file"
      },
      {
        "id": "331",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Parasyte: The Grey, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/f5pfvz914vxq4kk/PARASYTE_GREY_EP3.zacky.avi/file"
      },
      {
        "id": "332",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Parasyte: The Grey, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tetpz983pk72sq0/PARASYTE_GREY_EP4.zacky.avi/file"
      },
      {
        "id": "333",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Parasyte: The Grey, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1vr8idrg42tiyro/PARASYTE_GREY_EP5.zacky.avi/file"
      },
      {
        "id": "334",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Parasyte: The Grey, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0lwl2442w0e96bh/PARASYTE_GREY_EP6_FINAL.zacky.avi/file"
      }
    ],
  },
{
  id: "41",
  title: "FATAL SEDUCTION",
  slug: "fatal-seduction",
  year: "2023",
  rating: "5.5",
  image: "fatal-seduction.jpg",
  description:
    "A South African erotic psychological thriller about a married professor whose passionate affair leads to betrayal, secrets, and dangerous consequences.",
  language: "English",
  explainer: "Rocky kimono",
  genres: ["Drama", "Mystery", "Th,riller"],
  isFeatured: false ,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "335",
        "episodeNumber": 1,
        "title": "Season 2 Episode 1",
        "description": "Fatal Seduction Season 2, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wog1enf30ve00la/FATAL_SEDUCTION_S02_EP_01__.mp4/file"
      },
      {
        "id": "336",
        "episodeNumber": 3,
        "title": "Season 2 Episode 3",
        "description": "Fatal Seduction Season 2, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iggeki4whj5jzh4/FATAL_SEDUCTION_S02_EP_03__.mp4/file"
      },
      {
        "id": "337",
        "episodeNumber": 4,
        "title": "Season 2 Episode 4",
        "description": "Fatal Seduction Season 2, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8yyo4glx68n48tp/FATAL_SEDUCTION_S02_EP_04__.mp4/file"
      },
      {
        "id": "338",
        "episodeNumber": 5,
        "title": "Season 2 Episode 5",
        "description": "Fatal Seduction Season 2, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/prw12labwahmahk/FATAL_SEDUCTION_S02_EP_05.mp4/file"
      },
      {
        "id": "339",
        "episodeNumber": 6,
        "title": "Season 2 Episode 6",
        "description": "Fatal Seduction Season 2, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y9xjy57kn7a8rga/FATAL_SEDUCTION_S02_EP_6__.mp4/file"
      }
    ],
  },
{
  id: "42",
  title: "MESSIAH",
  slug: "messiah",
  year: "2020",
  rating: "7.6",
  image: "messiah.jpg",
  description:
    "A political thriller following a mysterious man whose public appearances attract a worldwide following and lead intelligence agents to investigate whether he is a spiritual leader or a dangerous manipulator.",
  language: "English",
  explainer: "ROCK KIMOMO",
  genres: ["Drama", "Mystery", "Thriller"],
  isFeatured: true,
  createdAt: "2026-10-16",

    episodes: [
      {
        "id": "340",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Messiah, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rkacu3n5fwfzjto/MESSIAH_EP_01.mp4/file"
      },
      {
        "id": "341",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Messiah, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5oof34ezotuc7h8/MESSIAH_EP_02.mp4/file"
      },
      {
        "id": "342",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Messiah, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tzb193y81txaj79/MESSIAH_EP_03.mp4/file"
      },
      {
        "id": "343",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Messiah, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iy1ev85qpeeggbs/MESSIAH_EP_04.mp4/file"
      },
      {
        "id": "344",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Messiah, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a6rnoie2ojkrfyn/MESSIAH_EP_05.mp4/file"
      },
      {
        "id": "345",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Messiah, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ebr9oe7jhwzqwq0/MESSIAH_EP_06.mp4/file"
      },
      {
        "id": "346",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Messiah, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8xrq8vs8yheu02p/MESSIAH_EP_07.mp4/file"
      },
      {
        "id": "347",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Messiah, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d6y7uthifmwu7xm/MESSIAH_EP_08.mp4/file"
      },
      {
        "id": "348",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Messiah, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/f9f5z0q2e8x0y2x/MESSIAH_EP_09.mp4/file"
      },
      {
        "id": "349",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "Messiah, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n9eu8wjec48c97p/MESSIAH_EP_10_FINAL.mp4/file"
      }
    ],
  },
{
  id: "43",
  title: "LIONESS SEASON 2",
  slug: "lioness-season-2",
  year: "2024",
  rating: "8.3",
  image: "lioness-season-2.jpg",
  description:
    "Season 2 follows Joe and her team as they face dangerous missions, new threats, and difficult personal sacrifices.",
  language: "English",
  genres: ["Action", "Drama", "Thriller"],
   isFeatured: false ,
    createdAt: "2026-10-16",
  explainer: "Skov",

    episodes: [
      {
        "id": "350",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Lioness Season 2, Episode 1.",
        "streamUrl": "https://hgcloud.to/ft58em8ys08a",
        "downloadUrl": "https://www.mediafire.com/file/20lxb73jkllqmrm/S02E01.mp4/file"
      },
      {
        "id": "351",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Lioness Season 2, Episode 2.",
        "streamUrl": "https://hgcloud.to/luxxbwnygq1w",
        "downloadUrl": "https://www.mediafire.com/file/uo2rh27o2kexki9/S02E02.mp4/file"
      },
      {
        "id": "352",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Lioness Season 2, Episode 3.",
        "streamUrl": "https://hgcloud.to/xf9xuy0yrt24",
        "downloadUrl": "https://www.mediafire.com/file/1cfkhxvgc63aqjc/S02E03.mp4/file"
      },
      {
        "id": "353",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Lioness Season 2, Episode 4.",
        "streamUrl": "https://hgcloud.to/h3jv9t2xwn6n",
        "downloadUrl": "https://www.mediafire.com/file/0fes9unlc10gx0d/S02E04.mp4/file"
      },
      {
        "id": "354",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Lioness Season 2, Episode 5.",
        "streamUrl": "https://hgcloud.to/zvuocsc4b06h",
        "downloadUrl": "https://www.mediafire.com/file/rafce342epl8dsa/S02E05.mp4/file"
      },
      {
        "id": "355",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Lioness Season 2, Episode 6.",
        "streamUrl": "https://hgcloud.to/42udc0tjcc79",
        "downloadUrl": "https://www.mediafire.com/file/qpxehg0ihu8midt/S02E06.mp4/file"
      },
      {
        "id": "356",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Lioness Season 2, Episode 7.",
        "streamUrl": "https://hgcloud.to/1v7g0hnumjfj",
        "downloadUrl": "https://www.mediafire.com/file/nfjk81b1286fyxf/S02E07.mp4/file"
      },
      {
        "id": "357",
        "episodeNumber": 8,
        "title": "Episode 8 - Finale",
        "description": "Lioness Season 2, Episode 8 - Finale.",
        "streamUrl": "https://hgcloud.to/0sua529us9cq",
        "downloadUrl": "https://www.mediafire.com/file/f4q82r64ie2ln1b/S02E08Final.mp4/file"
      }
    ],
  },
{
  id: "44",
  title: "SHE",
  slug: "she-season-1",
  year: "2020",
  rating: "6.3",
  image: "she-season-1.jpg",
   isFeatured: false ,
    createdAt: "2026-10-16",
  description:
    "A female police constable goes undercover in a dangerous mission that changes her life.",
  language: "English",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "Nyabami",

    episodes: [
      {
        "id": "358",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "SHE Season 1, Episode 1.",
        "streamUrl": "https://hgcloud.to/k65o9v493sjd",
        "downloadUrl": "https://www.mediafire.com/file/82jpxrc3cm1tedp/SHE_S01E01.mp4/file"
      },
      {
        "id": "359",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "SHE Season 1, Episode 2.",
        "streamUrl": "https://hgcloud.to/yg5t2aqkgieu",
        "downloadUrl": "https://www.mediafire.com/file/dcmhp3nqdvec8eb/SHE_S01E02.mp4/file"
      },
      {
        "id": "360",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "SHE Season 1, Episode 3.",
        "streamUrl": "https://hgcloud.to/w5pdjwcbg60h",
        "downloadUrl": "https://www.mediafire.com/file/fh41g46gfg0sdya/SHE_S01E03.mp4/file"
      },
      {
        "id": "361",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "SHE Season 1, Episode 4.",
        "streamUrl": "https://hgcloud.to/drq7z9kqvdzm",
        "downloadUrl": "https://www.mediafire.com/file/44yklnuk4qf92ni/SHE_S01E04.mp4/file"
      },
      {
        "id": "362",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "SHE Season 1, Episode 5.",
        "streamUrl": "https://hgcloud.to/k96xfdoy44dt",
        "downloadUrl": "https://www.mediafire.com/file/2zuczo9rurkp4x1/SHE_S01E05.mp4/file"
      },
      {
        "id": "363",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "SHE Season 1, Episode 6.",
        "streamUrl": "https://hgcloud.to/wv0m1x4v7rjk",
        "downloadUrl": "https://www.mediafire.com/file/3dd4ww4u834e9sp/SHE_S01E06.mp4/file"
      },
      {
        "id": "364",
        "episodeNumber": 7,
        "title": "Episode 7 - Finale",
        "description": "SHE Season 1, Episode 7 - Finale.",
        "streamUrl": "https://hgcloud.to/wym4894tsyxk",
        "downloadUrl": "https://www.mediafire.com/file/k4aflk60c92l5ae/SHE_S01E7_FINAL.mp4/file"
      }
    ],
  },
{
  id: "45",
  title: "false Story",
  slug: "false-story",
  year: "2021",
  rating: "7.4",
  image: "false-story.jpg",
  isFeatured: false ,
  createdAt: "2026-10-16",
  description:
    "A gripping drama about a comedian whose life takes a dangerous turn after meeting a fan.",
  language: "English",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "365",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "True Story, Episode 1.",
        "streamUrl": "https://hgcloud.to/jbh3fyn8vtra",
        "downloadUrl": "https://www.mediafire.com/file/c8oaykemysaztoq/TRUE_STORY_EP_01.mp4/file"
      },
      {
        "id": "366",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "True Story, Episode 2.",
        "streamUrl": "https://hgcloud.to/o71u6glyh3j1",
        "downloadUrl": "https://www.mediafire.com/file/ack1eulap3h7zbr/TRUE_STORY_EP_02.mp4/file"
      },
      {
        "id": "367",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "True Story, Episode 3.",
        "streamUrl": "https://hgcloud.to/922pyx0785b8",
        "downloadUrl": "https://www.mediafire.com/file/p64m26n7h898of2/TRUE_STORY_E03.mp4/file"
      },
      {
        "id": "368",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "True Story, Episode 4.",
        "streamUrl": "https://hgcloud.to/8ibholcbo2fg",
        "downloadUrl": "https://www.mediafire.com/file/238si64wxw6n6n0/TRUE_STORY_E04.mp4/file"
      },
      {
        "id": "369",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "True Story, Episode 5.",
        "streamUrl": "https://hgcloud.to/howrdcjntj37",
        "downloadUrl": "https://www.mediafire.com/file/4rhsoywzylkfvwk/TRUE_STORY_E_05.mp4/file"
      },
      {
        "id": "370",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "True Story, Episode 6.",
        "streamUrl": "https://hgcloud.to/0ewdwo3dg62v",
        "downloadUrl": "https://www.mediafire.com/file/wa9yx9mht1olscs/TRUE_STORY_EP_06.mp4/file"
      },
      {
        "id": "371",
        "episodeNumber": 7,
        "title": "Episode 7 - Finale",
        "description": "True Story, Episode 7 - Finale.",
        "streamUrl": "https://hgcloud.to/oi6nzur6plhd",
        "downloadUrl": "https://www.mediafire.com/file/u84ypeohifeufxx/TRUE_STORY_EP_07_FINAL.mp4/file"
      }
    ],
  },
{
  id: "46",
  title: "THE LAST OF US",
  slug: "the-last-of-us",
  year: "2023",
  rating: "8.7",
  image: "the-last-of-us.jpg",
  isFeatured: false,
  createdAt: "2026-10-16",
  description:
    "A survivor and a teenage girl travel through a dangerous post-apocalyptic world.",
  language: "English",
  genres: ["Action", "Drama", "Adventure"],

    episodes: [
      {
        "id": "372",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The Last of Us, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e8sdxa9tyuaz0bp/LAST_OF_US_EP_1.mp4/file"
      },
      {
        "id": "373",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "The Last of Us, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mgkip2bqnpmt4xn/LAST_OF_US_EP_2.mp4/file"
      },
      {
        "id": "374",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The Last of Us, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/pov7cbj9yzgjow8/LAST_OF_US_EP_3.mp4/file"
      },
      {
        "id": "375",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The Last of Us, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/344ty9129coq7bc/LAST_OF_US_EP_4.mp4/file"
      },
      {
        "id": "376",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The Last of Us, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uxdbbzt75og163j/LAST_OF_US_EP_5.mp4/file"
      },
      {
        "id": "377",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The Last of Us, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qs70g3xvpvsj2jq/LAST_OF_US_EP_6.mp4/file"
      },
      {
        "id": "378",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The Last of Us, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o3snsw204i7cg7e/LAST_OF_US_EP_7.mp4/file"
      },
      {
        "id": "379",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The Last of Us, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4b8bbk48082b93y/LAST_OF_US_EP_8.mp4/file"
      },
      {
        "id": "380",
        "episodeNumber": 9,
        "title": "Episode 9 - Finale",
        "description": "The Last of Us, Episode 9 - Finale.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/v4jnkblipzs1l30/LAST_OF_US_EP_9_FINAL.mp4/file"
      }
    ],
  },
{
  id: "47",
  title: "OUTER BANKS SEASON 3",
  slug: "outer-banks-season-3",
  year: "2023",
  rating: "7.5",
  image: "outer-banks-season-3.jpg",
  isFeatured: false ,
  createdAt: "2026-10-16",
  description:
    "A group of teenagers pursue treasure while facing danger, rivalry, and unexpected discoveries.",
  language: "English",
  genres: ["Adventure", "Drama", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "381",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Outer Banks Season 3, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z8mrd623pp3mg8l/OUTER_BANKS_S03_E01.mp4/file"
      },
      {
        "id": "382",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Outer Banks Season 3, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tt5r6yhz7mbiv0z/OUTER_BANKS_S03_E02.mp4/file"
      },
      {
        "id": "383",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Outer Banks Season 3, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/u5j3gbqmmnqa8fa/OUTER_BANKS_S03_E03.mp4/file"
      },
      {
        "id": "384",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Outer Banks Season 3, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xhubuww2l2mp7go/OUTER_BANKS_S03_E04.mp4/file"
      },
      {
        "id": "385",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Outer Banks Season 3, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0hrvvhidxya9op7/OUTER_BANKS_S03_E05.mp4/file"
      },
      {
        "id": "386",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Outer Banks Season 3, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d19lk6gdp0qo3zt/OUTER_BANKS_S03_E06.mp4/file"
      },
      {
        "id": "387",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Outer Banks Season 3, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c7tfhhc6ahhz9b2/OUTER_BANKS_S03_E07.mp4/file"
      },
      {
        "id": "388",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Outer Banks Season 3, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9rjqohporhnazpl/OUTER_BANKS_S03_E08.mp4/file"
      },
      {
        "id": "389",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Outer Banks Season 3, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mvfbmivfydt999k/OUTER_BANKS_S03E09.mp4/file"
      },
      {
        "id": "390",
        "episodeNumber": 10,
        "title": "Episode 10 - Finale",
        "description": "Outer Banks Season 3, Episode 10 - Finale.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kmxuahjyz50y4m9/OUTER_BANKS_S03E10_Final.mp4/file"
      }
    ],
  },
{
  id: "48",
  title: "PIECES OF PARADISE",
  slug: "pieces-of-paradise",
  year: "Unknown",
  rating: "N/A",
  image: "pieces-of-paradise.jpg",
  isFeatured: false ,
  createdAt: "2026-10-17",
  description:
    "Pieces of Paradise, an Agasobanuye series narrated by Saga Mwiza.",
  language: "Kinyarwanda",
  genres: ["Drama"],
  explainer: "Saga Mwiza",

    episodes: [
      {
        "id": "391",
        "episodeNumber": 1,
        "title": "Episodes 1–10",
        "description": "Pieces of Paradise — Episodes 1–10, Agasobanuye by Saga Mwiza.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/tnu5hxf9tp8fpt7,30162vxvb3pkaak,bxunrpww8118vly,fzi3nnfn1o67jbw,xa7dww17tki7c6c,qvshhfcxilwio8k,ezcuwsxkpc53mzc,olsv24c8vq0scwf,x5rfc726rml993r,qvimkum5cjisccx,xdbzit97gk4hwys/shared"
      },
      {
        "id": "392",
        "episodeNumber": 2,
        "title": "Episodes 11–20",
        "description": "Pieces of Paradise — Episodes 11–20, Agasobanuye by Saga Mwiza.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/93ulu3usjjl8ph4,7x2q14wdzgcjg8u,kr9t3tdp05mx9la,kxd0pkm83ocvd00,azyllc893yqulqe,c103dbvzmq0is4l,oqos97vegqpcv1i,1phazr7xd6ylzuo,fbtpbz3z5yk4vqv,qw69pahfotdu31s,jlp3k9ohmzw2op0/shared"
      },
      {
        "id": "393",
        "episodeNumber": 3,
        "title": "Episodes 21–30",
        "description": "Pieces of Paradise — Episodes 21–30, Agasobanuye by Saga Mwiza.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/wr5dfsgbtknmedz,rq2f3gzz277rlij,f442gmxumue89m1,mztbjnyjckpvywj,r8eox2p88va7q75,jq1agskth6gmv06,99h22orw1blvkb0,axnrb2o51io5nm6,mbcmjfqzfyuznna,e59o5c8ntd4mzjw/shared"
      },
      {
        "id": "394",
        "episodeNumber": 4,
        "title": "Episodes 31–40",
        "description": "Pieces of Paradise — Episodes 31–40, Agasobanuye by Saga Mwiza.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/8curce71lvgwduo,gpobiztnm399909,9wa7taiuzmrdwom,lmnl0gvmzde8fjt,45aw4g9atmirnun,p54phe81k3yvusd,n590kv74okoncmo,138tmafqldhmgs8,5r53vqlshct8ueg,08xrjnsys5e8vgk/shared"
      },
      {
        "id": "395",
        "episodeNumber": 5,
        "title": "Episodes 41–50",
        "description": "Pieces of Paradise — Episodes 41–50, Agasobanuye by Saga Mwiza.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/pqu5tyga5527otp,acm6nauhmwhau9l,gtn30tylo9q9by5,x0cnjrh1apbx9md,sw6mwzozg7h6r42,dhh6dib4xz3y5yc,5bxcvjjp0jvdf4v,spaoc17hmj5q3cn,r3xvmedyyed8i0a,7kc984294qpvc8s/shared"
      }
    ],
  },
{
  id: "49",
  title: "ONCE UPON A TIME",
  slug: "once-upon-a-time-season-1",
  year: "2011",
  rating: "7.7",
  image: "once-upon-a-time-season-1.jpg",
  isFeatured: true,
  createdAt: "2026-10-17",
  description:
    "A woman discovers that a town is home to people connected to a world of fairy tales.",
  language: "English",
  genres: ["Fantasy", "Adventure", "Drama"],
  explainer: "Rock Komomo",

    episodes: [
      {
        "id": "396",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "Once Upon a Time Season 1, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/jfvz1x3lcho2sdp/Once_Upon_S1ep01.mp4/file"
      },
      {
        "id": "397",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "Once Upon a Time Season 1, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/s70q8cwqfjukp5y/Once_Upon_S1ep02.mp4/file"
      },
      {
        "id": "398",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "Once Upon a Time Season 1, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/we1xobaesa9x4y2/Once_Upon_S1ep03.mp4/file"
      },
      {
        "id": "399",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "Once Upon a Time Season 1, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/e1k5n8gpuzp8ggw/Once_Upon_S1ep04.mp4/file"
      },
      {
        "id": "400",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "Once Upon a Time Season 1, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/7iy6xv0gnwo5nbs/Once_upon_S1ep05.mp4/file"
      },
      {
        "id": "401",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "Once Upon a Time Season 1, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/l1foh52zfjv55uc/Once_upon_S1ep06.mp4/file"
      },
      {
        "id": "402",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "Once Upon a Time Season 1, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/jypdi9a04auzs2y/Once_upon_S1ep07.mp4/file"
      },
      {
        "id": "403",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "Once Upon a Time Season 1, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/uut9ewkdxzo49dh/Once_upon_S1ep08.mp4/file"
      },
      {
        "id": "404",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "Once Upon a Time Season 1, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/i1evi7andylj5xs/Once_upon_S1ep09.mp4/file"
      },
      {
        "id": "405",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "Once Upon a Time Season 1, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/h3qluqqd7z97w9q/Once_upon_S1ep10.mp4/file"
      },
      {
        "id": "406",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "Once Upon a Time Season 1, Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/801wqgqiyca3xl3/Once_upon_S1ep11.mp4/file"
      },
      {
        "id": "407",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "Once Upon a Time Season 1, Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/7pbmg4uybr7i0ho/Once_Upon_S1ep12.mp4/file"
      },
      {
        "id": "408",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "Once Upon a Time Season 1, Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/yt61d4ii4n8ya4y/Once_Upon_S1ep13.mp4/file"
      },
      {
        "id": "409",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "Once Upon a Time Season 1, Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/zwh0l8p4450q48n/Once_Upon_S1ep14.mp4/file"
      },
      {
        "id": "410",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "Once Upon a Time Season 1, Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/hbxb5y4xtx4u5eo/Once_Upon_S1ep15.mp4/file"
      },
      {
        "id": "411",
        "episodeNumber": 16,
        "title": "Episodes 16–17",
        "description": "Once Upon a Time Season 1, Episodes 16–17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/ttw876vyksi6jwr/Once_Upon_S1ep16-17.mp4/file"
      },
      {
        "id": "412",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "Once Upon a Time Season 1, Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/enqj4iwqnuu1v9m/Once_Upon_S1ep18.mp4/file"
      },
      {
        "id": "413",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "Once Upon a Time Season 1, Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/j6fv4rctnl892gz/Once_Upon_S1ep19.mp4/file"
      },
      {
        "id": "414",
        "episodeNumber": 20,
        "title": "Episode 20",
        "description": "Once Upon a Time Season 1, Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/nnxpe4q95x65pjn/Once_Upon_S1ep20.mp4/file"
      }
    ],
  },
{
  id: "50",
  title: "THE WORST OF EVIL",
  slug: "the-worst-of-evil",
  year: "2023",
  rating: "8.0",
  image: "the-worst-of-evil.jpg",
  isFeatured: false,
  createdAt: "2026-10-17",
  description:
    "An undercover investigation takes a police officer into a dangerous criminal organization.",
  language: "Korean",
  genres: ["Action", "Crime", "Thriller"],
  explainer: "Sankara",

    episodes: [
      {
        "id": "415",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "The Worst of Evil, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o1dzxn7uob0s83d/THE+WORST+OF+EVIL+EP+1+.mp4/file"
      },
      {
        "id": "416",
        "episodeNumber": 2,
        "title": "Episode 2A",
        "description": "The Worst of Evil, Episode 2, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x7frx0eyjgbm39q/THE+WORST+OF+EVIL+EP+2A.mp4/file"
      },
      {
        "id": "417",
        "episodeNumber": 2,
        "title": "Episode 2B",
        "description": "The Worst of Evil, Episode 2, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/smv5x34744kdx20/THE+WORST+OF+EVIL+EP+2B.mp4/file"
      },
      {
        "id": "418",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "The Worst of Evil, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/johe9svinsvixbn/THE+WORST+OF+EVIL+EP+3.mp4/file"
      },
      {
        "id": "419",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "The Worst of Evil, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/77qvnfo35drnmmz/THE+WORST+OF+EVIL+EP+4.mp4/file"
      },
      {
        "id": "420",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "The Worst of Evil, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qkqrqdx0sj2dsbt/THE+WORST+OF+EVIL+EP+5.mp4/file"
      },
      {
        "id": "421",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "The Worst of Evil, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rmki4zuv1idqwlm/THE+WORST+OF+EVIL+EP+6.mp4/file"
      },
      {
        "id": "422",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "The Worst of Evil, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5s3oqgcbxk92kj8/THE+WORST+OF+EVIL+EP+7.mp4/file"
      },
      {
        "id": "423",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "The Worst of Evil, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xiip8557ioodlth/THE+WORST+OF+EVIL+EP+8.mp4/file"
      },
      {
        "id": "424",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "The Worst of Evil, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/duu2igbf3g4wzoh/THE+WORST+OF+EVIL+EP+9.mp4/file"
      },
      {
        "id": "425",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "The Worst of Evil, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ssrfccw6fp0ub6z/THE_WORST_OF_EVIL_EP_10.mp4/file"
      },
      {
        "id": "426",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "The Worst of Evil, Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/23mo6vb6e97c6fv/THE_WORST_OF_EVIL_EP_11.mp4/file"
      },
      {
        "id": "427",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "The Worst of Evil, Episode 12, final episode.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9ntriruai9n65hx/THE+WORST+OF+EVIL+EP+12+FINAL.mp4/file"
      }
    ],
  },
{
  id: "51",
  title: "MY DESKMATE",
  slug: "my-deskmate",
  year: "Unknown",
  rating: "N/A",
  image: "my-deskmate.jpg",
  isFeatured: false,
  createdAt: "2026-10-17",
  description:
    "A drama series presented in Agasobanuye by Eric Pro.",
  language: "Kinyarwanda",
  genres: ["Drama"],
  explainer: "Eric Pro",

    episodes: [
      {
        "id": "428",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "My Deskmate, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7ao26wzrij79irp/MY_DESKMATE_1.mp4/file"
      },
      {
        "id": "429",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "My Deskmate, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kq41gd3j5a6b79k/MY_DESKMATE_2.mp4/file"
      },
      {
        "id": "430",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "My Deskmate, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/faezkryfw82ut9y/MY_DESKMATE_3.mp4/file"
      },
      {
        "id": "431",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "My Deskmate, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m8xti8ei5snye0x/MY_DESKMATE_4.mp4/file"
      },
      {
        "id": "432",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "My Deskmate, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/itzuy3zom0effnh/MY_DESKMATE_5.mp4/file"
      },
      {
        "id": "433",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "My Deskmate, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7naiin3vctc3chd/MY_DESKMATE_6.mp4/file"
      },
      {
        "id": "434",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "My Deskmate, Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/af3l7hixc51e69v/MY_DESKMATE_7.mp4/file"
      },
      {
        "id": "435",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "My Deskmate, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3nk434xbfzbx2ls/MY_DESKMATE_8.mp4/file"
      },
      {
        "id": "436",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "My Deskmate, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8xdwris3ctuirpo/MY_DESKMATE_9.mp4/file"
      },
      {
        "id": "437",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "My Deskmate, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nlidigmforvoeyj/MY+DESKMATE+10.mp4/file"
      },
      {
        "id": "438",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "My Deskmate, Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xa8chtr9tsq7ryj/MY+DESKMATE+11.mp4/file"
      },
      {
        "id": "439",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "My Deskmate, Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3r86h81agpme6c6/MY_DESKMATE_12.mp4/file"
      },
      {
        "id": "440",
        "episodeNumber": 13,
        "title": "Episode 13A",
        "description": "My Deskmate, Episode 13, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xr4n96zvb9i7vu0/MY+DESKMATE+13+A.mp4/file"
      },
      {
        "id": "441",
        "episodeNumber": 13,
        "title": "Episode 13B",
        "description": "My Deskmate, Episode 13, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/immipuw6j4jfmd1/MY+DESKMATE+13+B.mp4/file"
      },
      {
        "id": "442",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "My Deskmate, Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yvunhn6kvh21o1b/MY_DESKMATE_14.mp4/file"
      },
      {
        "id": "443",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "My Deskmate, Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rjwx81o5suwdes7/MY_DESKMATE_15.mp4/file"
      },
      {
        "id": "444",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "My Deskmate, Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cgk4b1ltpdty359/MY_DESKMATE_16.mp4/file"
      },
      {
        "id": "445",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "My Deskmate, Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5hh2rowk6cyt1y3/MY_DESKMATE_17.mp4/file"
      },
      {
        "id": "446",
        "episodeNumber": 18,
        "title": "Episode 18A",
        "description": "My Deskmate, Episode 18, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jep1r2pe9mz16tj/MY+DESKMATE+18+A.mp4/file"
      },
      {
        "id": "447",
        "episodeNumber": 18,
        "title": "Episode 18B",
        "description": "My Deskmate, Episode 18, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ny6ymqyb4cmakrb/MY+DESKMATE+18+B.mp4/file"
      },
      {
        "id": "448",
        "episodeNumber": 19,
        "title": "Episode 19A",
        "description": "My Deskmate, Episode 19, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1pchwwy9wq2mvn4/MY_DESKMATE_EP_19_A.mp4/file"
      },
      {
        "id": "449",
        "episodeNumber": 19,
        "title": "Episode 19B",
        "description": "My Deskmate, Episode 19, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b9cippvr9ogoo5j/MY_DESKMATE_EP_19_B.mp4/file"
      },
      {
        "id": "450",
        "episodeNumber": 20,
        "title": "Episode 20A",
        "description": "My Deskmate, Episode 20, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lstnytna3siycpe/MY_DESKMATE_EP_20_A.mp4/file"
      },
      {
        "id": "451",
        "episodeNumber": 20,
        "title": "Episode 20B",
        "description": "My Deskmate, Episode 20, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zkjempyhet5omex/MY_DESKMATE_EP_20_B.mp4/file"
      },
      {
        "id": "452",
        "episodeNumber": 21,
        "title": "Episode 21A",
        "description": "My Deskmate, Episode 21, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0uycvtj7i99t658/MY+DESKMATE+21+A.mp4/file"
      },
      {
        "id": "453",
        "episodeNumber": 21,
        "title": "Episode 21B",
        "description": "My Deskmate, Episode 21, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ymur32n1h417bts/MY+DESKMATE+21+B.mp4/file"
      },
      {
        "id": "454",
        "episodeNumber": 22,
        "title": "Episode 22",
        "description": "My Deskmate, Episode 22.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j7tswl4eruxz3ld/MY_DESKMATE_22.mp4/file"
      },
      {
        "id": "455",
        "episodeNumber": 23,
        "title": "Episode 23A",
        "description": "My Deskmate, Episode 23, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fkxp9agrkms8rhw/MY_DESKMATE_23_A.mp4/file"
      },
      {
        "id": "456",
        "episodeNumber": 23,
        "title": "Episode 23B",
        "description": "My Deskmate, Episode 23, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ylmbsjjldvz4knx/MY_DESKMATE_23_B.mp4/file"
      },
      {
        "id": "457",
        "episodeNumber": 24,
        "title": "Episode 24",
        "description": "My Deskmate, Episode 24.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/im9j9b4jkdi1j7h/MY_DESKMATE_24.mp4/file"
      }
    ],
  },
{
  id: "52",
  title: "KINGDOM",
  slug: "kingdom",
  year: "Unknown",
  rating: "N/A",
  image: "kingdom.jpg",
  isFeatured:false ,
  createdAt: "2026-10-19",
  description:
    "A drama series presented in Agasobanuye by Junior Giti, with multiple episodes available to watch and download.",
  language: "Kinyarwanda",
  genres: ["Action", "Drama", "Thriller"],
  explainer: "Junior Giti",

    episodes: [
      {
        "id": "458",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "KINGDOM, Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z614xd2xzcos93e/Kingdom_1.avi/file"
      },
      {
        "id": "459",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "KINGDOM, Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vurdxozhl3g3ryf/Kingdom_2.avi/file"
      },
      {
        "id": "460",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "KINGDOM, Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ycdm6fvo30pt3ua/Kingdom_3.avi/file"
      },
      {
        "id": "461",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "KINGDOM, Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6mtdfx1iux0nuv5/kingdom_4.avi/file"
      },
      {
        "id": "462",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "KINGDOM, Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rqheellqjmcuxe6/Kingdom_5.avi/file"
      },
      {
        "id": "463",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "KINGDOM, Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ps5tdi86z52d00e/kingdom_6.avi/file"
      },
      {
        "id": "464",
        "episodeNumber": 7,
        "title": "Episode 7A",
        "description": "KINGDOM, Episode 7, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tx48rzg98d9e4nr/kingdom_7A.avi/file"
      },
      {
        "id": "465",
        "episodeNumber": 8,
        "title": "Episode 7B",
        "description": "KINGDOM, Episode 7, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hpt60pklocqny20/kingdom_7B.avi/file"
      },
      {
        "id": "466",
        "episodeNumber": 9,
        "title": "Episode 8",
        "description": "KINGDOM, Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/96idlzsd5o2bbe1/kingdom_8.avi/file"
      },
      {
        "id": "467",
        "episodeNumber": 10,
        "title": "Episode 9",
        "description": "KINGDOM, Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ibn4ezc4wzap1x9/kingdom_9.avi/file"
      },
      {
        "id": "468",
        "episodeNumber": 11,
        "title": "Episode 10",
        "description": "KINGDOM, Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ueemyojpfzdpdih/kingdom_10.avi/file"
      },
      {
        "id": "469",
        "episodeNumber": 12,
        "title": "Episode 12A",
        "description": "KINGDOM, Episode 12, Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vgpqbaj4lf7lo57/kingdom_s1_12A_final.avi/file"
      },
      {
        "id": "470",
        "episodeNumber": 13,
        "title": "Episode 12B",
        "description": "KINGDOM, Episode 12, Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/pyy81d8zu1p4zbp/kingdom_s1_12B_final.avi/file"
      }
    ],
  },
{
  id: "53",
  title: "S.O.Z. — Season 2",
  slug: "soz-season-2",
  year: "Unknown",
  rating: "N/A",
  image: "soz.jpg",
  isFeatured: false,
  createdAt: "2026-10-19",
  description:
    "S.O.Z. Season 2 is a series presented in Agasobanuye by Nkuba Porter, featuring eight episodes with streaming and download links.",
  language: "Kinyarwanda",
  genres: ["Action", "Drama", "Thriller"],
  explainer: "Nkuba Porter",

    episodes: [
      {
        "id": "471",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "S.O.Z. Season 2, Episode 1.",
        "streamUrl": "https://hgcloud.to/kf6cmdja8wdb",
        "downloadUrl": "https://www.mediafire.com/file/745vsopwakb27yk/S.O.Z_EP1.mp4/file"
      },
      {
        "id": "472",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "S.O.Z. Season 2, Episode 2.",
        "streamUrl": "https://hgcloud.to/t5wkzvmftjf9",
        "downloadUrl": "https://www.mediafire.com/file/uo2rh27o2kexki9/S02E02.mp4/file"
      },
      {
        "id": "473",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "S.O.Z. Season 2, Episode 3.",
        "streamUrl": "https://hgcloud.to/5mzwf4a3uj7x",
        "downloadUrl": "https://www.mediafire.com/file/1cfkhxvgc63aqjc/S02E03.mp4/file"
      },
      {
        "id": "474",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "S.O.Z. Season 2, Episode 4.",
        "streamUrl": "https://hgcloud.to/su4ogjs6tja9",
        "downloadUrl": "https://www.mediafire.com/file/0fes9unlc10gx0d/S02E04.mp4/file"
      },
      {
        "id": "475",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "S.O.Z. Season 2, Episode 5.",
        "streamUrl": "https://hgcloud.to/6q7t059166lm",
        "downloadUrl": "https://www.mediafire.com/file/rafce342epl8dsa/S02E05.mp4/file"
      },
      {
        "id": "476",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "S.O.Z. Season 2, Episode 6.",
        "streamUrl": "https://hgcloud.to/jjboitpwgfqo",
        "downloadUrl": "https://www.mediafire.com/file/qpxehg0ihu8midt/S02E06.mp4/file"
      },
      {
        "id": "477",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "S.O.Z. Season 2, Episode 7.",
        "streamUrl": "https://hgcloud.to/jj5ungzgrlfr",
        "downloadUrl": "https://www.mediafire.com/file/nfjk81b1286fyxf/S02E07.mp4/file"
      },
      {
        "id": "478",
        "episodeNumber": 8,
        "title": "Episode 8 (Finale)",
        "description": "S.O.Z. Season 2, Episode 8, the season finale.",
        "streamUrl": "https://hgcloud.to/jzzsez3u4iyl",
        "downloadUrl": "https://www.mediafire.com/file/f4q82r64ie2ln1b/S02E08Final.mp4/file"
      }
    ],
  },
{
  id: "54",
  title: "FAKE PROFILE — Season 2",
  slug: "fake-profile-season-2",
  year: "Unknown",
  rating: "N/A",
  image: "fake-profile.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "FAKE PROFILE Season 2 is presented in Agasobanuye by ROCK KIMOMO, with episodes available to watch and download.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "479",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "FAKE PROFILE Season 2, Episode 1.",
        "streamUrl": "https://www.mediafire.com/file/sjbf3d3woeclwv7/FAKE+PROFILE+S02EP1.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/sjbf3d3woeclwv7/FAKE+PROFILE+S02EP1.mp4/file"
      },
      {
        "id": "480",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "FAKE PROFILE Season 2, Episode 2.",
        "streamUrl": "https://www.mediafire.com/file/k7ibidx1zj6395n/FAKE+PROFILE+S02E2.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/k7ibidx1zj6395n/FAKE+PROFILE+S02E2.mp4/file"
      },
      {
        "id": "481",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "FAKE PROFILE Season 2, Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/je1lmcrc3wvs73k/FAKE_PROFILE_S02EP4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/je1lmcrc3wvs73k/FAKE_PROFILE_S02EP4.mp4/file"
      },
      {
        "id": "482",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "FAKE PROFILE Season 2, Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/yfp3l3og1usla5v/FAKE+PROFILE+S02EP5.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yfp3l3og1usla5v/FAKE+PROFILE+S02EP5.mp4/file"
      },
      {
        "id": "483",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "FAKE PROFILE Season 2, Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/lvnon9o9959zibx/FAKE+PROFILE+S02EP6.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lvnon9o9959zibx/FAKE+PROFILE+S02EP6.mp4/file"
      },
      {
        "id": "484",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "FAKE PROFILE Season 2, Episode 7.",
        "streamUrl": "https://www.mediafire.com/file/cfxmg85i5em3my1/FAKE+PROFILE+S02E7.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cfxmg85i5em3my1/FAKE+PROFILE+S02E7.mp4/file"
      },
      {
        "id": "485",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "FAKE PROFILE Season 2, Episode 8.",
        "streamUrl": "https://www.mediafire.com/file/y2h5qsw0x7wkhtj/FAKE_PROFILE_S02EP8_ikora_nezza_ibyuzuye_100%2525_idafite_ibibazo_nkiyabanje.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/y2h5qsw0x7wkhtj/FAKE_PROFILE_S02EP8_ikora_nezza_ibyuzuye_100%2525_idafite_ibibazo_nkiyabanje.mp4/file"
      },
      {
        "id": "486",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "FAKE PROFILE Season 2, Episode 9.",
        "streamUrl": "https://www.mediafire.com/file/zefese0kdinufih/FAKE_PROFILE_S02EP9.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/zefese0kdinufih/FAKE_PROFILE_S02EP9.mp4/file"
      },
      {
        "id": "487",
        "episodeNumber": 10,
        "title": "Episode 10 (Finale)",
        "description": "FAKE PROFILE Season 2, Episode 10, the season finale.",
        "streamUrl": "https://www.mediafire.com/file/yby9nj2xv0poz2y/FAKE_PROFILE_S02EP10_FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yby9nj2xv0poz2y/FAKE_PROFILE_S02EP10_FINAL.mp4/file"
      },
      {
        "id": "555",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "FAKE PROFILE Season 2, Episode 1, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/sjbf3d3woeclwv7/FAKE+PROFILE+S02EP1.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/sjbf3d3woeclwv7/FAKE+PROFILE+S02EP1.mp4/file"
      },
      {
        "id": "556",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "FAKE PROFILE Season 2, Episode 2, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/k7ibidx1zj6395n/FAKE+PROFILE+S02E2.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/k7ibidx1zj6395n/FAKE+PROFILE+S02E2.mp4/file"
      },
      {
        "id": "557",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "FAKE PROFILE Season 2, Episode 4, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/je1lmcrc3wvs73k/FAKE_PROFILE_S02EP4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/je1lmcrc3wvs73k/FAKE_PROFILE_S02EP4.mp4/file"
      },
      {
        "id": "558",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "FAKE PROFILE Season 2, Episode 5, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/yfp3l3og1usla5v/FAKE+PROFILE+S02EP5.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yfp3l3og1usla5v/FAKE+PROFILE+S02EP5.mp4/file"
      },
      {
        "id": "559",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "FAKE PROFILE Season 2, Episode 6, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/lvnon9o9959zibx/FAKE+PROFILE+S02EP6.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lvnon9o9959zibx/FAKE+PROFILE+S02EP6.mp4/file"
      },
      {
        "id": "560",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "FAKE PROFILE Season 2, Episode 7, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/cfxmg85i5em3my1/FAKE+PROFILE+S02E7.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cfxmg85i5em3my1/FAKE+PROFILE+S02E7.mp4/file"
      },
      {
        "id": "561",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "FAKE PROFILE Season 2, Episode 8, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/y2h5qsw0x7wkhtj/FAKE_PROFILE_S02EP8_ikora_nezza_ibyuzuye_100%2525_idafite_ibibazo_nkiyabanje.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/y2h5qsw0x7wkhtj/FAKE_PROFILE_S02EP8_ikora_nezza_ibyuzuye_100%2525_idafite_ibibazo_nkiyabanje.mp4/file"
      },
      {
        "id": "562",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "FAKE PROFILE Season 2, Episode 9, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/zefese0kdinufih/FAKE_PROFILE_S02EP9.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/zefese0kdinufih/FAKE_PROFILE_S02EP9.mp4/file"
      },
      {
        "id": "563",
        "episodeNumber": 10,
        "title": "Episode 10 (Finale)",
        "description": "FAKE PROFILE Season 2, Episode 10 (Finale), presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/yby9nj2xv0poz2y/FAKE_PROFILE_S02EP10_FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yby9nj2xv0poz2y/FAKE_PROFILE_S02EP10_FINAL.mp4/file"
      }
    ],
  },
{
  id: "55",
  title: "THE OVAL",
  slug: "the-oval-agasobanuye-rock-kimomo",
  year: "Unknown",
  rating: "N/A",
  image: "the-oval.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "THE OVAL is presented in Agasobanuye by ROCK KIMOMO, featuring ten episodes available to watch and download.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "564",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "THE OVAL, Episode 1. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/uht09i25t7xdc5g/THE_OVAL_EP_01.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/uht09i25t7xdc5g/THE_OVAL_EP_01.mp4/file"
      },
      {
        "id": "565",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "THE OVAL, Episode 2. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/l2g529htnzpkvny/THE_OVAL_EP_02.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/l2g529htnzpkvny/THE_OVAL_EP_02.mp4/file"
      },
      {
        "id": "566",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "THE OVAL, Episode 3. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/25e4qlrq7u4mzfv/THE_OVAL_EP_03.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/25e4qlrq7u4mzfv/THE_OVAL_EP_03.mp4/file"
      },
      {
        "id": "567",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "THE OVAL, Episode 4. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/k0rnyc419bo1zhd/THE_OVAL_EP_04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/k0rnyc419bo1zhd/THE_OVAL_EP_04.mp4/file"
      },
      {
        "id": "568",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "THE OVAL, Episode 5. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ndzvrob9sjqpbyh/THE_OVAL_EP_05.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ndzvrob9sjqpbyh/THE_OVAL_EP_05.mp4/file"
      },
      {
        "id": "569",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "THE OVAL, Episode 6. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/5877uz3w2q6um81/THE_OVAL_EP_06.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/5877uz3w2q6um81/THE_OVAL_EP_06.mp4/file"
      },
      {
        "id": "570",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "THE OVAL, Episode 7. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/9f6tmnuf3m2jsjn/THE_OVAL_EP_07.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/9f6tmnuf3m2jsjn/THE_OVAL_EP_07.mp4/file"
      },
      {
        "id": "571",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "THE OVAL, Episode 8. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/gnb4y4vh9ms2deu/THE_OVAL_EP_08.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/gnb4y4vh9ms2deu/THE_OVAL_EP_08.mp4/file"
      },
      {
        "id": "572",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "THE OVAL, Episode 9. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/sun7e5dlnf9nf3o/THE_OVAL_EP_09.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/sun7e5dlnf9nf3o/THE_OVAL_EP_09.mp4/file"
      },
      {
        "id": "573",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "THE OVAL, Episode 10. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/x3cfc50elosrayg/THE_OVAL_EP_10.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/x3cfc50elosrayg/THE_OVAL_EP_10.mp4/file"
      }
    ],
  },
{
  id: "56",
  title: "BUTTERFLY SHADOW",
  slug: "butterfly-shadow",
  year: "Unknown",
  rating: "N/A",
  image: "butterfly-shadow.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "BUTTERFLY SHADOW is presented in Agasobanuye by ROCK KIMOMO, featuring episodes 1 through 40.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "574",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "BUTTERFLY SHADOW, Episode 1, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/umrkc1mwrggl5tm/BUTTERFLY_SHADOW_01.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/umrkc1mwrggl5tm/BUTTERFLY_SHADOW_01.mp4/file"
      },
      {
        "id": "575",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "BUTTERFLY SHADOW, Episode 2, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/k6zikioua0tgh9n/BUTTERFLY_SHADOW_02.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/k6zikioua0tgh9n/BUTTERFLY_SHADOW_02.mp4/file"
      },
      {
        "id": "576",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "BUTTERFLY SHADOW, Episode 3, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/u4cuvef348pok66/BUTTERFLY_SHADOW_03.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/u4cuvef348pok66/BUTTERFLY_SHADOW_03.mp4/file"
      },
      {
        "id": "577",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "BUTTERFLY SHADOW, Episode 4, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/bse1sjbhkcur9wt/BUTTERFLY_SHADOW_04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/bse1sjbhkcur9wt/BUTTERFLY_SHADOW_04.mp4/file"
      },
      {
        "id": "578",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "BUTTERFLY SHADOW, Episode 5, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/uwt3m7tdmyo9lxo/BUTTERFLY_SHADOW_05.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/uwt3m7tdmyo9lxo/BUTTERFLY_SHADOW_05.mp4/file"
      },
      {
        "id": "579",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "BUTTERFLY SHADOW, Episode 6, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/79924hrjb06y01z/BUTTERFLY_SHADOW_06.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/79924hrjb06y01z/BUTTERFLY_SHADOW_06.mp4/file"
      },
      {
        "id": "580",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "BUTTERFLY SHADOW, Episode 7, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/vsnpps5sc76xuwt/BUTTERFLY_SHADOW_07.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/vsnpps5sc76xuwt/BUTTERFLY_SHADOW_07.mp4/file"
      },
      {
        "id": "581",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "BUTTERFLY SHADOW, Episode 8, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/xe1v4mz7nx8fqqe/BUTTERFLY_SHADOW_08.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/xe1v4mz7nx8fqqe/BUTTERFLY_SHADOW_08.mp4/file"
      },
      {
        "id": "582",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "BUTTERFLY SHADOW, Episode 9, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/wtpodqawsa0je0b/BUTTERFLY_SHADOW_09.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/wtpodqawsa0je0b/BUTTERFLY_SHADOW_09.mp4/file"
      },
      {
        "id": "583",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "BUTTERFLY SHADOW, Episode 10, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/5oc1a3s6elunoce/BUTTERFLY_SHADOW_10.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/5oc1a3s6elunoce/BUTTERFLY_SHADOW_10.mp4/file"
      },
      {
        "id": "584",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "BUTTERFLY SHADOW, Episode 11, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/w5hyzm0uwdiknj3/BUTTERFLY_SHADOW_11.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/w5hyzm0uwdiknj3/BUTTERFLY_SHADOW_11.mp4/file"
      },
      {
        "id": "585",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "BUTTERFLY SHADOW, Episode 12, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/8diszxbp32hmaw5/BUTTERFLY_SHADOW_12.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8diszxbp32hmaw5/BUTTERFLY_SHADOW_12.mp4/file"
      },
      {
        "id": "586",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "BUTTERFLY SHADOW, Episode 13, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ngnuewb5oc182px/BUTTERFLY_SHADOW_13.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ngnuewb5oc182px/BUTTERFLY_SHADOW_13.mp4/file"
      },
      {
        "id": "587",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "BUTTERFLY SHADOW, Episode 14, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/owoozq8r167lbmm/BUTTERFLY_SHADOW_14.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/owoozq8r167lbmm/BUTTERFLY_SHADOW_14.mp4/file"
      },
      {
        "id": "588",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "BUTTERFLY SHADOW, Episode 15, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/mrmlu06wih8ixq2/BUTTERFLY_SHADOW_15.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/mrmlu06wih8ixq2/BUTTERFLY_SHADOW_15.mp4/file"
      },
      {
        "id": "589",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "BUTTERFLY SHADOW, Episode 16, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/fvg3jymkjspke4h/BUTTERFLY_SHADOW_16.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/fvg3jymkjspke4h/BUTTERFLY_SHADOW_16.mp4/file"
      },
      {
        "id": "590",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "BUTTERFLY SHADOW, Episode 17, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/u1wji6vcn5b3fpu/BUTTERFLY_SHADOW_17.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/u1wji6vcn5b3fpu/BUTTERFLY_SHADOW_17.mp4/file"
      },
      {
        "id": "591",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "BUTTERFLY SHADOW, Episode 18, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/0wz6ox927ubldoe/BUTTERFLY_SHADOW_18.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/0wz6ox927ubldoe/BUTTERFLY_SHADOW_18.mp4/file"
      },
      {
        "id": "592",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "BUTTERFLY SHADOW, Episode 19, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/9403czu4q48f9c9/BUTTERFLY_SHADOW_19.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/9403czu4q48f9c9/BUTTERFLY_SHADOW_19.mp4/file"
      },
      {
        "id": "593",
        "episodeNumber": 20,
        "title": "Episode 20",
        "description": "BUTTERFLY SHADOW, Episode 20, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/w0k8ohlso5zoc35/BUTTERFLY_SHADOW_20.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/w0k8ohlso5zoc35/BUTTERFLY_SHADOW_20.mp4/file"
      },
      {
        "id": "594",
        "episodeNumber": 21,
        "title": "Episode 21",
        "description": "BUTTERFLY SHADOW, Episode 21, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/u62ntrpnoz3aktn/BUTTERFLY_SHADOW_21.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/u62ntrpnoz3aktn/BUTTERFLY_SHADOW_21.mp4/file"
      },
      {
        "id": "595",
        "episodeNumber": 22,
        "title": "Episode 22",
        "description": "BUTTERFLY SHADOW, Episode 22, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/snpi2gyrh5e0rp6/BUTTERFLY_SHADOW_22.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/snpi2gyrh5e0rp6/BUTTERFLY_SHADOW_22.mp4/file"
      },
      {
        "id": "596",
        "episodeNumber": 23,
        "title": "Episode 23",
        "description": "BUTTERFLY SHADOW, Episode 23, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/rp08fz95qh4wyl1/BUTTERFLY_SHADOW_23.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/rp08fz95qh4wyl1/BUTTERFLY_SHADOW_23.mp4/file"
      },
      {
        "id": "597",
        "episodeNumber": 24,
        "title": "Episode 24",
        "description": "BUTTERFLY SHADOW, Episode 24, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/rx5o47p03bpipe4/BUTTERFLY_SHADOW_24.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/rx5o47p03bpipe4/BUTTERFLY_SHADOW_24.mp4/file"
      },
      {
        "id": "598",
        "episodeNumber": 25,
        "title": "Episode 25",
        "description": "BUTTERFLY SHADOW, Episode 25, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file_premium/pn5ncj2rygskp8d/BUTTERFLY_SHADOW_25.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/pn5ncj2rygskp8d/BUTTERFLY_SHADOW_25.mp4/file"
      },
      {
        "id": "599",
        "episodeNumber": 26,
        "title": "Episode 26",
        "description": "BUTTERFLY SHADOW, Episode 26, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/gzkm8g0qvhblvtt/BUTTERFLY_SHADOW_26.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/gzkm8g0qvhblvtt/BUTTERFLY_SHADOW_26.mp4/file"
      },
      {
        "id": "600",
        "episodeNumber": 27,
        "title": "Episode 27",
        "description": "BUTTERFLY SHADOW, Episode 27, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/10lhudzeejdjcta/BUTTERFLY_SHADOW_27.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/10lhudzeejdjcta/BUTTERFLY_SHADOW_27.mp4/file"
      },
      {
        "id": "601",
        "episodeNumber": 28,
        "title": "Episode 28",
        "description": "BUTTERFLY SHADOW, Episode 28, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/zvo4xz73sgfrlyf/BUTTERFLY_SHADOW_28.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/zvo4xz73sgfrlyf/BUTTERFLY_SHADOW_28.mp4/file"
      },
      {
        "id": "602",
        "episodeNumber": 29,
        "title": "Episode 29",
        "description": "BUTTERFLY SHADOW, Episode 29, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/e73qvw9ggb43kz5/BUTTERFLY_SHADOW_29.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/e73qvw9ggb43kz5/BUTTERFLY_SHADOW_29.mp4/file"
      },
      {
        "id": "603",
        "episodeNumber": 30,
        "title": "Episode 30",
        "description": "BUTTERFLY SHADOW, Episode 30, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/pewn6ykweotm4ez/BUTTERFLY_SHADOW_30.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/pewn6ykweotm4ez/BUTTERFLY_SHADOW_30.mp4/file"
      },
      {
        "id": "604",
        "episodeNumber": 31,
        "title": "Episode 31",
        "description": "BUTTERFLY SHADOW, Episode 31, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/8z887fjua7lemom/BUTTERFLY_SHADOW_31.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8z887fjua7lemom/BUTTERFLY_SHADOW_31.mp4/file"
      },
      {
        "id": "605",
        "episodeNumber": 32,
        "title": "Episode 32",
        "description": "BUTTERFLY SHADOW, Episode 32, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/hr83e8y9l8h6xps/BUTTERFLY_SHADOW_32.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hr83e8y9l8h6xps/BUTTERFLY_SHADOW_32.mp4/file"
      },
      {
        "id": "606",
        "episodeNumber": 33,
        "title": "Episode 33",
        "description": "BUTTERFLY SHADOW, Episode 33, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/9j9wr0hp3jx2fhy/BUTTERFLY_SHADOW_33.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/9j9wr0hp3jx2fhy/BUTTERFLY_SHADOW_33.mp4/file"
      },
      {
        "id": "607",
        "episodeNumber": 34,
        "title": "Episode 34",
        "description": "BUTTERFLY SHADOW, Episode 34, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/07a1zqw0bjn4xul/BUTTERFLY_SHADOW_34.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/07a1zqw0bjn4xul/BUTTERFLY_SHADOW_34.mp4/file"
      },
      {
        "id": "608",
        "episodeNumber": 35,
        "title": "Episode 35",
        "description": "BUTTERFLY SHADOW, Episode 35, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ldxzobd1y50jqpy/BUTTERFLY_SHADOW_35.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ldxzobd1y50jqpy/BUTTERFLY_SHADOW_35.mp4/file"
      },
      {
        "id": "609",
        "episodeNumber": 36,
        "title": "Episode 36",
        "description": "BUTTERFLY SHADOW, Episode 36, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/d3r3p6g3n4jz0kk/BUTTERFLY_SHADOW_36.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/d3r3p6g3n4jz0kk/BUTTERFLY_SHADOW_36.mp4/file"
      },
      {
        "id": "610",
        "episodeNumber": 37,
        "title": "Episode 37",
        "description": "BUTTERFLY SHADOW, Episode 37, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/6gscjpa2axmqlzr/BUTTERFLY_SHADOW_37.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6gscjpa2axmqlzr/BUTTERFLY_SHADOW_37.mp4/file"
      },
      {
        "id": "611",
        "episodeNumber": 38,
        "title": "Episode 38",
        "description": "BUTTERFLY SHADOW, Episode 38, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/grvgqg6mzqwp0cs/BUTTERFLY_SHADOW_38.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/grvgqg6mzqwp0cs/BUTTERFLY_SHADOW_38.mp4/file"
      },
      {
        "id": "612",
        "episodeNumber": 39,
        "title": "Episode 39",
        "description": "BUTTERFLY SHADOW, Episode 39, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/jxz3vg0s4v5dzzj/BUTTERFLY+SHADOW+39.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/jxz3vg0s4v5dzzj/BUTTERFLY+SHADOW+39.mp4/file"
      },
      {
        "id": "613",
        "episodeNumber": 40,
        "title": "Episode 40 (Finale)",
        "description": "BUTTERFLY SHADOW, Episode 40 (Finale), presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/8ujmofexguxdk7g/BUTTERFLY+SHADOW+40+FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8ujmofexguxdk7g/BUTTERFLY+SHADOW+40+FINAL.mp4/file"
      }
    ],
  },
{
  id: "57",
  title: "MY NAME",
  slug: "my-name",
  year: "Unknown",
  rating: "N/A",
  image: "my-name.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "MY NAME is a series presented in Agasobanuye by B THE GREAT, with episodes available through the provided links.",
  language: "Kinyarwanda",
  genres: ["Action", "Crime", "Thriller"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "614",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "MY NAME, Episode 1. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1rDcsqrpI9DdcW_jrzlvfD8SY67v_EcKx/view",
        "downloadUrl": "https://drive.google.com/file/d/1rDcsqrpI9DdcW_jrzlvfD8SY67v_EcKx/view"
      },
      {
        "id": "615",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "MY NAME, Episode 2. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1Ir8chPrjSFXaQZYTn5deq5tZEfhs5Bqp/view",
        "downloadUrl": "https://drive.google.com/file/d/1Ir8chPrjSFXaQZYTn5deq5tZEfhs5Bqp/view"
      },
      {
        "id": "616",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "MY NAME, Episode 3. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1L20p6k_KAWfo7bLr4txjTNXcj6p_rm_V/view",
        "downloadUrl": "https://drive.google.com/file/d/1L20p6k_KAWfo7bLr4txjTNXcj6p_rm_V/view"
      },
      {
        "id": "617",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "MY NAME, Episode 4. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1E2V0G8_MNhmf0xTEDGUNQsLv0gh7oFtY/view",
        "downloadUrl": "https://drive.google.com/file/d/1E2V0G8_MNhmf0xTEDGUNQsLv0gh7oFtY/view"
      },
      {
        "id": "618",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "MY NAME, Episode 5. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/18eSlVb4QfTP-QcF7OZHKn-0JybBfkq-y/view",
        "downloadUrl": "https://drive.google.com/file/d/18eSlVb4QfTP-QcF7OZHKn-0JybBfkq-y/view"
      },
      {
        "id": "619",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "MY NAME, Episode 6. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/15wQJHzvBYgKiJkF7FO2jIl_j2N1jKhiB/view",
        "downloadUrl": "https://drive.google.com/file/d/15wQJHzvBYgKiJkF7FO2jIl_j2N1jKhiB/view"
      },
      {
        "id": "620",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "MY NAME, Episode 7. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1oksxsG7nUW-0Vfevy7I_erUzbNp1EqqZ/view",
        "downloadUrl": "https://drive.google.com/file/d/1oksxsG7nUW-0Vfevy7I_erUzbNp1EqqZ/view"
      },
      {
        "id": "621",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "MY NAME, Episode 8. Presented in Agasobanuye by B THE GREAT.",
        "streamUrl": "https://drive.google.com/file/d/1chDAi_FCZG8CgVZUqtxbAB9gWUBOizWb/view",
        "downloadUrl": "https://drive.google.com/file/d/1chDAi_FCZG8CgVZUqtxbAB9gWUBOizWb/view"
      }
    ],
  },
{
  id: "58",
  title: "NIGHT HAS COME",
  slug: "night-has-come",
  year: "Unknown",
  rating: "N/A",
  image: "night-has-come.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "NIGHT HAS COME is presented in Agasobanuye by ROCK KIMOMO, featuring twelve episodes available to watch and download.",
  language: "Kinyarwanda",
  genres: ["Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "622",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "NIGHT HAS COME, Episode 1, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/4inv0rxjx3hrox0/NIGHT_HAS_COME_EP_01.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4inv0rxjx3hrox0/NIGHT_HAS_COME_EP_01.mp4/file"
      },
      {
        "id": "623",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "NIGHT HAS COME, Episode 2, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/lyadwkr9myt64qg/NIGHT_HAS_COME_EP_02_.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lyadwkr9myt64qg/NIGHT_HAS_COME_EP_02_.mp4/file"
      },
      {
        "id": "624",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "NIGHT HAS COME, Episode 3, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/2xid52khj3nmdp8/NIGHT_HAS_COME_EP3.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/2xid52khj3nmdp8/NIGHT_HAS_COME_EP3.mp4/file"
      },
      {
        "id": "625",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "NIGHT HAS COME, Episode 4, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/4kyxdqbuka1cy5u/NIGHT_HAS_COME_EP_04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4kyxdqbuka1cy5u/NIGHT_HAS_COME_EP_04.mp4/file"
      },
      {
        "id": "626",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "NIGHT HAS COME, Episode 5, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/fympx3kafc6wc02/NIGHT_HAS_COME_EP_05M_ONLY_STUDIO.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/fympx3kafc6wc02/NIGHT_HAS_COME_EP_05M_ONLY_STUDIO.mp4/file"
      },
      {
        "id": "627",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "NIGHT HAS COME, Episode 6, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/q1z54u10e27cyoa/NIGHT_HAS_COME_EP_06__.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/q1z54u10e27cyoa/NIGHT_HAS_COME_EP_06__.mp4/file"
      },
      {
        "id": "628",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "NIGHT HAS COME, Episode 7, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/hl8mjqlacpdg7xb/NIGHT_HAS_COME_E07.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hl8mjqlacpdg7xb/NIGHT_HAS_COME_E07.mp4/file"
      },
      {
        "id": "629",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "NIGHT HAS COME, Episode 8, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/shd0197m51atqip/NIGHT_HAS_COME_EP_08_.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/shd0197m51atqip/NIGHT_HAS_COME_EP_08_.mp4/file"
      },
      {
        "id": "630",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "NIGHT HAS COME, Episode 9, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/a4zo3f7p0ejt3p4/NIGHT_HAS_COME_EP_09.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/a4zo3f7p0ejt3p4/NIGHT_HAS_COME_EP_09.mp4/file"
      },
      {
        "id": "631",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "NIGHT HAS COME, Episode 10, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/9x1qkghfd0lwkl8/NIGHT_HAS_COME_EP_10_.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/9x1qkghfd0lwkl8/NIGHT_HAS_COME_EP_10_.mp4/file"
      },
      {
        "id": "632",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "NIGHT HAS COME, Episode 11, presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/hrb0at2xk8f93u4/NIGHT_HAS_COME_EP_11_.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hrb0at2xk8f93u4/NIGHT_HAS_COME_EP_11_.mp4/file"
      },
      {
        "id": "633",
        "episodeNumber": 12,
        "title": "Episode 12 (Finale)",
        "description": "NIGHT HAS COME, Episode 12 (Finale), presented by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/uabamj8povx56nv/NIGHT_HAS_COME_EP_12_FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/uabamj8povx56nv/NIGHT_HAS_COME_EP_12_FINAL.mp4/file"
      }
    ],
  },
{
  id: "59",
  title: "WHO KILLED SARA",
  slug: "who-killed-sara",
  year: "Unknown",
  rating: "N/A",
  image: "who-killed-sara.jpg",
  isFeatured:false,
  createdAt: "2026-10-24",
  description:
    "WHO KILLED SARA is a mystery thriller series with episodes shared through the provided MEGA links.",
  language: "Kinyarwanda",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "634",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "WHO KILLED SARA, Episode 1. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/9ypBHbyQ#a6HrsmeE0Qd5DIYM90GQEkfE8Ye9DSw2hx2336ZO5pE",
        "downloadUrl": "https://mega.nz/file/9ypBHbyQ#a6HrsmeE0Qd5DIYM90GQEkfE8Ye9DSw2hx2336ZO5pE"
      },
      {
        "id": "635",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "WHO KILLED SARA, Episode 2. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/U2owhTAL#8dzi2Hb3gkRBlt6jybjSpYKVgdJH8kdYB6gp6p8AaCo",
        "downloadUrl": "https://mega.nz/file/U2owhTAL#8dzi2Hb3gkRBlt6jybjSpYKVgdJH8kdYB6gp6p8AaCo"
      },
      {
        "id": "636",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "WHO KILLED SARA, Episode 3. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/t2QxRKTY#lqzpZBY0cnJ6E5kv4IiArw7mQ3wfTRZpDK3s-QT_RII",
        "downloadUrl": "https://mega.nz/file/t2QxRKTY#lqzpZBY0cnJ6E5kv4IiArw7mQ3wfTRZpDK3s-QT_RII"
      },
      {
        "id": "637",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "WHO KILLED SARA, Episode 4. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/tnAgmKxT#SBMU81S6gpPwR6Q3RTW948Mhauw4FO9ms36ztQH-ImQ",
        "downloadUrl": "https://mega.nz/file/tnAgmKxT#SBMU81S6gpPwR6Q3RTW948Mhauw4FO9ms36ztQH-ImQ"
      },
      {
        "id": "638",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "WHO KILLED SARA, Episode 5. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/8mYB0YAT#NG7Kwy61QWqKr1PnoIybqY1QC35gQnPfW57qQNxcfYs",
        "downloadUrl": "https://mega.nz/file/8mYB0YAT#NG7Kwy61QWqKr1PnoIybqY1QC35gQnPfW57qQNxcfYs"
      },
      {
        "id": "639",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "WHO KILLED SARA, Episode 6. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/Jqo0DKTD#-1ANICBGZmRY2sNtcSChmQYyC3a2dj4B-p-wPs5UBag",
        "downloadUrl": "https://mega.nz/file/Jqo0DKTD#-1ANICBGZmRY2sNtcSChmQYyC3a2dj4B-p-wPs5UBag"
      },
      {
        "id": "640",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "WHO KILLED SARA, Episode 7. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/865RiAbK#nxgNdn-ARQPxewhM7T6yCvQeF8A67kch1c6INckPUvQ",
        "downloadUrl": "https://mega.nz/file/865RiAbK#nxgNdn-ARQPxewhM7T6yCvQeF8A67kch1c6INckPUvQ"
      },
      {
        "id": "641",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "WHO KILLED SARA, Episode 8. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/MzI0DLiB#P2WSg3DkZVkcGEv2Bef9A9VU9xSKJ4a2H5UarB0Q1uU",
        "downloadUrl": "https://mega.nz/file/MzI0DLiB#P2WSg3DkZVkcGEv2Bef9A9VU9xSKJ4a2H5UarB0Q1uU"
      },
      {
        "id": "642",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "WHO KILLED SARA, Episode 9. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/06RmWByQ#x9Qu6MmhThQRcgoFBYDI7PrHBDaScpdUO4uOWcho0XE",
        "downloadUrl": "https://mega.nz/file/06RmWByQ#x9Qu6MmhThQRcgoFBYDI7PrHBDaScpdUO4uOWcho0XE"
      },
      {
        "id": "643",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "WHO KILLED SARA, Episode 10. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://mega.nz/file/4ywngSbI#44c2JGu1A05C3P7n6m9bqX-Bep3yJpGmGIgcg8t_UdY",
        "downloadUrl": "https://mega.nz/file/4ywngSbI#44c2JGu1A05C3P7n6m9bqX-Bep3yJpGmGIgcg8t_UdY"
      }
    ],
  },
{
  id: "60",
  title: "WAG MONG — Season 1",
  slug: "wag-mong-season-1",
  year: "Unknown",
  rating: "N/A",
  image: "wag-mong.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "WAG MONG Season 1 is presented in Agasobanuye by ROCK KIMOMO, featuring eight episodes.",
  language: "Kinyarwanda",
  genres: ["Drama", "Romance", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "644",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "WAG MONG Season 1, Episode 1. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/x5sh4a504xffzjn/Wag_Mong_S01E01.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/x5sh4a504xffzjn/Wag_Mong_S01E01.mp4/file"
      },
      {
        "id": "645",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "WAG MONG Season 1, Episode 2. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/itwk95v0unc59lq/Wag_Mong_S01E02.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/itwk95v0unc59lq/Wag_Mong_S01E02.mp4/file"
      },
      {
        "id": "646",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "WAG MONG Season 1, Episode 3. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/hqhff2jzmwy3ijp/Wag_Mong_S01E03.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hqhff2jzmwy3ijp/Wag_Mong_S01E03.mp4/file"
      },
      {
        "id": "647",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "WAG MONG Season 1, Episode 4. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/u292qkwt6jkmn1v/Wag_Mong_S01E04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/u292qkwt6jkmn1v/Wag_Mong_S01E04.mp4/file"
      },
      {
        "id": "648",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "WAG MONG Season 1, Episode 5. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/ga7a2nvgy48l9dg/Wag_Mong_S01E05.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ga7a2nvgy48l9dg/Wag_Mong_S01E05.mp4/file"
      },
      {
        "id": "649",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "WAG MONG Season 1, Episode 6. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/thw4enub3mgrr72/Wag_Mong_S01E06.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/thw4enub3mgrr72/Wag_Mong_S01E06.mp4/file"
      },
      {
        "id": "650",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "WAG MONG Season 1, Episode 7. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/u9qymkhou400zny/Wag_Mong_S01E07.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/u9qymkhou400zny/Wag_Mong_S01E07.mp4/file"
      },
      {
        "id": "651",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "WAG MONG Season 1, Episode 8. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/vns1b5hwff1hu03/Wag_Mong_S01E08_Final.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/vns1b5hwff1hu03/Wag_Mong_S01E08_Final.mp4/file"
      }
    ],
  },
{
  id: "61",
  title: "BERLIN — Season 1",
  slug: "berlin-season-1",
  year: "Unknown",
  rating: "N/A",
  image: "berlin.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "BERLIN Season 1 is presented in Agasobanuye by ROCK KIMOMO, featuring eight episodes.",
  language: "Kinyarwanda",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "652",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "BERLIN Season 1, Episode 1. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/5a0ictp4ony2nr5/Berlin_S01E01.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/5a0ictp4ony2nr5/Berlin_S01E01.mp4/file"
      },
      {
        "id": "653",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "BERLIN Season 1, Episode 2. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/s5sinjv0vjnn9k7/Berlin_S01E02.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/s5sinjv0vjnn9k7/Berlin_S01E02.mp4/file"
      },
      {
        "id": "654",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "BERLIN Season 1, Episode 3. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/w8vdfv6q6cp94bf/Berlin_S01E03.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/w8vdfv6q6cp94bf/Berlin_S01E03.mp4/file"
      },
      {
        "id": "655",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "BERLIN Season 1, Episode 4. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/gqhsi2edih7e2ut/Berlin_S01E04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/gqhsi2edih7e2ut/Berlin_S01E04.mp4/file"
      },
      {
        "id": "656",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "BERLIN Season 1, Episode 5. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/336it1p3exbu14d/Berlin_S01E05.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/336it1p3exbu14d/Berlin_S01E05.mp4/file"
      },
      {
        "id": "657",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "BERLIN Season 1, Episode 6. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/35mu971nugx18xk/Berlin_S01E06.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/35mu971nugx18xk/Berlin_S01E06.mp4/file"
      },
      {
        "id": "658",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "BERLIN Season 1, Episode 7. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/6hx62gfwo54ib4f/Berlin_S01E07.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6hx62gfwo54ib4f/Berlin_S01E07.mp4/file"
      },
      {
        "id": "659",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "BERLIN Season 1, Episode 8. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/xecnwl7cxkx9vqf/Berlin_S01E08_FiNALE.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/xecnwl7cxkx9vqf/Berlin_S01E08_FiNALE.mp4/file"
      }
    ],
  },
{
  id: "62",
  title: "THE LAST SHEEP",
  slug: "the-last-sheep",
  year: "Unknown",
  rating: "N/A",
  image: "the-last-sheep.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "THE LAST SHEEP is presented in Agasobanuye by ROCK KIMOMO, featuring fifteen episodes, including split episodes and final episodes.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "660",
        "episodeNumber": 1,
        "title": "Episode 1 A",
        "description": "THE LAST SHEEP, Episode 1 A, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/614c4f68-8904-4787-a144-e2ace27493ec#QnfMysiicb7UrbuD0RZn78JOT6ADSvMK",
        "downloadUrl": "https://drive.filen.io/d/614c4f68-8904-4787-a144-e2ace27493ec#QnfMysiicb7UrbuD0RZn78JOT6ADSvMK"
      },
      {
        "id": "661",
        "episodeNumber": 2,
        "title": "Episode 1 B",
        "description": "THE LAST SHEEP, Episode 1 B, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd",
        "downloadUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd"
      },
      {
        "id": "662",
        "episodeNumber": 3,
        "title": "Episode 2",
        "description": "THE LAST SHEEP, Episode 2, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd",
        "downloadUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd"
      },
      {
        "id": "663",
        "episodeNumber": 4,
        "title": "Episode 3 A",
        "description": "THE LAST SHEEP, Episode 3 A, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd",
        "downloadUrl": "https://drive.filen.io/d/f61ba982-6aa3-4173-ba1b-75e0f2bb8be5#ZmXqhUGctw8nTDIdUFXjD7q5GRUvZHVd"
      },
      {
        "id": "664",
        "episodeNumber": 5,
        "title": "Episode 3 B",
        "description": "THE LAST SHEEP, Episode 3 B, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/1b0e76b7-2194-4bc0-9d11-cac41c66e42f#MGhjiYQeQTSSyAWlKYAje02h14EtxyzZ",
        "downloadUrl": "https://drive.filen.io/d/1b0e76b7-2194-4bc0-9d11-cac41c66e42f#MGhjiYQeQTSSyAWlKYAje02h14EtxyzZ"
      },
      {
        "id": "665",
        "episodeNumber": 6,
        "title": "Episode 4",
        "description": "THE LAST SHEEP, Episode 4, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/6dda7371-5178-433c-a331-49b732540929#PZwwPGhgsdGlTuosUylRG23lGCpgZUH7",
        "downloadUrl": "https://drive.filen.io/d/6dda7371-5178-433c-a331-49b732540929#PZwwPGhgsdGlTuosUylRG23lGCpgZUH7"
      },
      {
        "id": "666",
        "episodeNumber": 7,
        "title": "Episode 5",
        "description": "THE LAST SHEEP, Episode 5, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/58618b76-3a54-444c-8183-ad193ba4e87b#muHD5S3CmmwwI8w1lf24flVByxVMkLl8",
        "downloadUrl": "https://drive.filen.io/d/58618b76-3a54-444c-8183-ad193ba4e87b#muHD5S3CmmwwI8w1lf24flVByxVMkLl8"
      },
      {
        "id": "667",
        "episodeNumber": 8,
        "title": "Episode 6 A",
        "description": "THE LAST SHEEP, Episode 6 A, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/2c6300c5-c20c-4407-a7d6-5851cd41f53c#cyF1XFESa8CMonAzSU1iTC7w1vH3UoGI",
        "downloadUrl": "https://drive.filen.io/d/2c6300c5-c20c-4407-a7d6-5851cd41f53c#cyF1XFESa8CMonAzSU1iTC7w1vH3UoGI"
      },
      {
        "id": "668",
        "episodeNumber": 9,
        "title": "Episode 6 B",
        "description": "THE LAST SHEEP, Episode 6 B, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/f9914839-f267-4058-8a74-0a9d530cc40a#FMjAQoyROp81kyeMSqFun1oUJM8FhXAW",
        "downloadUrl": "https://drive.filen.io/d/f9914839-f267-4058-8a74-0a9d530cc40a#FMjAQoyROp81kyeMSqFun1oUJM8FhXAW"
      },
      {
        "id": "669",
        "episodeNumber": 10,
        "title": "Episode 7",
        "description": "THE LAST SHEEP, Episode 7, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/8805f562-9481-429c-89d7-a82812cb6a12#e8ibcsTVZS4CPjbeUQSsqYY8BRwemxwF",
        "downloadUrl": "https://drive.filen.io/d/8805f562-9481-429c-89d7-a82812cb6a12#e8ibcsTVZS4CPjbeUQSsqYY8BRwemxwF"
      },
      {
        "id": "670",
        "episodeNumber": 11,
        "title": "Episode 8 A",
        "description": "THE LAST SHEEP, Episode 8 A, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/490c0cce-5f1f-47c0-a8ea-0219da6e32d7#C2rSGHbKmRzirmpVSkxgRjQT0B4Rqh2Q",
        "downloadUrl": "https://drive.filen.io/d/490c0cce-5f1f-47c0-a8ea-0219da6e32d7#C2rSGHbKmRzirmpVSkxgRjQT0B4Rqh2Q"
      },
      {
        "id": "671",
        "episodeNumber": 12,
        "title": "Episode 8 B",
        "description": "THE LAST SHEEP, Episode 8 B, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/c54eb742-1f0b-4a48-af84-6be38c8abd12#wB18xhjOj3LUyRBnfHvlUF6gx085GUa9",
        "downloadUrl": "https://drive.filen.io/d/c54eb742-1f0b-4a48-af84-6be38c8abd12#wB18xhjOj3LUyRBnfHvlUF6gx085GUa9"
      },
      {
        "id": "672",
        "episodeNumber": 13,
        "title": "Episode 9",
        "description": "THE LAST SHEEP, Episode 9, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/d15786f9-84b6-441e-84f9-2bb9f917f0fc#QbqqidCCs0eN7KpbsCUw1QX2oQmwL5IE",
        "downloadUrl": "https://drive.filen.io/d/d15786f9-84b6-441e-84f9-2bb9f917f0fc#QbqqidCCs0eN7KpbsCUw1QX2oQmwL5IE"
      },
      {
        "id": "673",
        "episodeNumber": 14,
        "title": "Episode 10 A Final",
        "description": "THE LAST SHEEP, Episode 10 A Final, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/3edea479-6def-4f0d-94e8-809ddd37655c#pKRvU9dBYXAsiZtR8emWT4CTJ4ArXiss",
        "downloadUrl": "https://drive.filen.io/d/3edea479-6def-4f0d-94e8-809ddd37655c#pKRvU9dBYXAsiZtR8emWT4CTJ4ArXiss"
      },
      {
        "id": "674",
        "episodeNumber": 15,
        "title": "Episode 10 B Final",
        "description": "THE LAST SHEEP, Episode 10 B Final, presented by ROCK KIMOMO.",
        "streamUrl": "https://drive.filen.io/d/0d9ab7d5-e8f9-4eda-a8ab-a5f17a350df9#oKexUYqGYjnYceYEfsOO9Db788NPk7Cs",
        "downloadUrl": "https://drive.filen.io/d/0d9ab7d5-e8f9-4eda-a8ab-a5f17a350df9#oKexUYqGYjnYceYEfsOO9Db788NPk7Cs"
      }
    ],
  },
{
  id: "63",
  title: "MASTER OF THE HOUSE",
  slug: "master-of-the-house",
  year: "Unknown",
  rating: "N/A",
  image: "master-of-the-house.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "MASTER OF THE HOUSE is a series presented in Agasobanuye by ROCK KIMOMO, featuring seven episodes.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "498",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "MASTER OF THE HOUSE, Episode 1.",
        "streamUrl": "https://www.mediafire.com/file/vqt32q6352lx2ol/MASTER_OF_THE_HOUSE_EP1.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/vqt32q6352lx2ol/MASTER_OF_THE_HOUSE_EP1.mp4/file"
      },
      {
        "id": "499",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "MASTER OF THE HOUSE, Episode 2.",
        "streamUrl": "https://www.mediafire.com/file/pjanepf3gplp3vn/MASTER+OF+THE+HOUSE+EP02.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/pjanepf3gplp3vn/MASTER+OF+THE+HOUSE+EP02.mp4/file"
      },
      {
        "id": "500",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "MASTER OF THE HOUSE, Episode 3.",
        "streamUrl": "https://www.mediafire.com/file/fymnttih9o4pw36/MASTER+OF+THE+HOUSE+EP03.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/fymnttih9o4pw36/MASTER+OF+THE+HOUSE+EP03.mp4/file"
      },
      {
        "id": "501",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "MASTER OF THE HOUSE, Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/9q7m4q3pavyyd4y/MASTER+OF+THE+HOUSE+EP04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/9q7m4q3pavyyd4y/MASTER+OF+THE+HOUSE+EP04.mp4/file"
      },
      {
        "id": "502",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "MASTER OF THE HOUSE, Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/891b35r6dejrl4w/MASTER+OF+THE+HOUSE+S01+EP05.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/891b35r6dejrl4w/MASTER+OF+THE+HOUSE+S01+EP05.mp4/file"
      },
      {
        "id": "503",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "MASTER OF THE HOUSE, Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/u8aqpxqbehy0cjz/MASTER+OF+THE+HOUSE+S01+EP06.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/u8aqpxqbehy0cjz/MASTER+OF+THE+HOUSE+S01+EP06.mp4/file"
      },
      {
        "id": "504",
        "episodeNumber": 7,
        "title": "Episode 7 (Finale)",
        "description": "MASTER OF THE HOUSE, Episode 7, the season finale.",
        "streamUrl": "https://www.mediafire.com/file/qxsqqboyxrypg3t/MASTER_OF_THE_HOUSE_EP_07_final.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/qxsqqboyxrypg3t/MASTER_OF_THE_HOUSE_EP_07_final.mp4/file"
      }
    ],
  },
{
  id: "64",
  title: "CRIMINAL JUSTICE",
  slug: "criminal-justice",
  year: "2019",
  rating: "N/A",
  image: "criminal-justice.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "An edgy one-night stand turns into a nightmare for Aditya when he wakes up with blood on his hands and cannot remember the crime.",
  language: "Kinyarwanda",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "545",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "CRIMINAL JUSTICE, Episode 1. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1uoduWhHHrJNbSKSlWUlMdaOAjoRE0JJk/view",
        "downloadUrl": "https://drive.google.com/file/d/1uoduWhHHrJNbSKSlWUlMdaOAjoRE0JJk/view"
      },
      {
        "id": "546",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "CRIMINAL JUSTICE, Episode 2. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1PNlyaTZ1wiIEqgwX7dCrC-N2Vsj2mhlu/view",
        "downloadUrl": "https://drive.google.com/file/d/1PNlyaTZ1wiIEqgwX7dCrC-N2Vsj2mhlu/view"
      },
      {
        "id": "547",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "CRIMINAL JUSTICE, Episode 3. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1peNLV0cIQAmGejNqeABUXw-U8jDK6xeP/view",
        "downloadUrl": "https://drive.google.com/file/d/1peNLV0cIQAmGejNqeABUXw-U8jDK6xeP/view"
      },
      {
        "id": "548",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "CRIMINAL JUSTICE, Episode 4. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1fzAZerdh_CvWytG1-AnrmuTP6Wh0NARt/view",
        "downloadUrl": "https://drive.google.com/file/d/1fzAZerdh_CvWytG1-AnrmuTP6Wh0NARt/view"
      },
      {
        "id": "549",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "CRIMINAL JUSTICE, Episode 5. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1ntiwSeXxhr0tMwgmjXzK7XhnvPol0raM/view",
        "downloadUrl": "https://drive.google.com/file/d/1ntiwSeXxhr0tMwgmjXzK7XhnvPol0raM/view"
      },
      {
        "id": "550",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "CRIMINAL JUSTICE, Episode 6. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1nC7c8COQLx3l9FY3qMbHl3CCMtOk1yJD/view",
        "downloadUrl": "https://drive.google.com/file/d/1nC7c8COQLx3l9FY3qMbHl3CCMtOk1yJD/view"
      },
      {
        "id": "551",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "CRIMINAL JUSTICE, Episode 7. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1t_zb72QpmzMohdv-YUedcFg5jjaQlwT4/view",
        "downloadUrl": "https://drive.google.com/file/d/1t_zb72QpmzMohdv-YUedcFg5jjaQlwT4/view"
      },
      {
        "id": "552",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "CRIMINAL JUSTICE, Episode 8. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1D2692qTI8pv7Bx054hWuLqMQJSFm5GSj/view",
        "downloadUrl": "https://drive.google.com/file/d/1D2692qTI8pv7Bx054hWuLqMQJSFm5GSj/view"
      },
      {
        "id": "553",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "CRIMINAL JUSTICE, Episode 9. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1GOpo9BjzNaXT2vQfBMnS6GAmmbdMEYEN/view",
        "downloadUrl": "https://drive.google.com/file/d/1GOpo9BjzNaXT2vQfBMnS6GAmmbdMEYEN/view"
      },
      {
        "id": "554",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "CRIMINAL JUSTICE, Episode 10. Presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1bCWqd6rxJwbjrpjyag8VKNnamZrUu5LP/view",
        "downloadUrl": "https://drive.google.com/file/d/1bCWqd6rxJwbjrpjyag8VKNnamZrUu5LP/view"
      }
    ],
  },
{
  id: "65",
  title: "THE 100 — Season 1",
  slug: "the-100-season-1",
  year: "Unknown",
  rating: "N/A",
  image: "the-100.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "THE 100 Season 1, presented in Agasobanuye by ROCK KIMOMO, featuring thirteen episodes.",
  language: "Kinyarwanda",
  genres: ["Action", "Drama", "Science Fiction"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "505",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "THE 100 Season 1, Episode 1.",
        "streamUrl": "https://www.mediafire.com/file_premium/xfcq6141bfr6spr/The-100-s1-e1_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/xfcq6141bfr6spr/The-100-s1-e1_Sankar_HD.mp4/file"
      },
      {
        "id": "506",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "THE 100 Season 1, Episode 2.",
        "streamUrl": "https://www.mediafire.com/file_premium/ef951622bf2ohzr/The-100-s1-e2_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/ef951622bf2ohzr/The-100-s1-e2_Sankar_HD.mp4/file"
      },
      {
        "id": "507",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "THE 100 Season 1, Episode 3.",
        "streamUrl": "https://www.mediafire.com/file_premium/wz3538ll14kpi6y/The-100-s1-e3_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/wz3538ll14kpi6y/The-100-s1-e3_Sankar_HD.mp4/file"
      },
      {
        "id": "508",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "THE 100 Season 1, Episode 4.",
        "streamUrl": "https://www.mediafire.com/file_premium/mxqdt33q11qm06c/The-100-s1-e4_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/mxqdt33q11qm06c/The-100-s1-e4_Sankar_HD.mp4/file"
      },
      {
        "id": "509",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "THE 100 Season 1, Episode 5.",
        "streamUrl": "https://www.mediafire.com/file_premium/oo34wupbmg1t4ew/The-100-s1-e5_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/oo34wupbmg1t4ew/The-100-s1-e5_Sankar_HD.mp4/file"
      },
      {
        "id": "510",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "THE 100 Season 1, Episode 6.",
        "streamUrl": "https://www.mediafire.com/file_premium/dunqb1w907v3tzd/The-100-s1-e6_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/dunqb1w907v3tzd/The-100-s1-e6_Sankar_HD.mp4/file"
      },
      {
        "id": "511",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "THE 100 Season 1, Episode 7.",
        "streamUrl": "https://www.mediafire.com/file_premium/ws0rjsn20trdgbd/The-100-s1-e7_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/ws0rjsn20trdgbd/The-100-s1-e7_Sankar_HD.mp4/file"
      },
      {
        "id": "512",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "THE 100 Season 1, Episode 8.",
        "streamUrl": "https://www.mediafire.com/file_premium/t81f5k0nwi1vq82/The-100-s1-e8_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/t81f5k0nwi1vq82/The-100-s1-e8_Sankar_HD.mp4/file"
      },
      {
        "id": "513",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "THE 100 Season 1, Episode 9.",
        "streamUrl": "https://www.mediafire.com/file_premium/8km8pkwqu175pyg/The-100-s1-e9_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/8km8pkwqu175pyg/The-100-s1-e9_Sankar_HD.mp4/file"
      },
      {
        "id": "514",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "THE 100 Season 1, Episode 10.",
        "streamUrl": "https://www.mediafire.com/file_premium/ez8dx90785cmssp/The-100-s1-e10_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/ez8dx90785cmssp/The-100-s1-e10_Sankar_HD.mp4/file"
      },
      {
        "id": "515",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "THE 100 Season 1, Episode 11.",
        "streamUrl": "https://www.mediafire.com/file_premium/xbf5tpwr6dvkxvq/The-100-s1-e11_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/xbf5tpwr6dvkxvq/The-100-s1-e11_Sankar_HD.mp4/file"
      },
      {
        "id": "516",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "THE 100 Season 1, Episode 12.",
        "streamUrl": "https://www.mediafire.com/file_premium/wxupi8z9sn5a9i9/The-100-s1-e12_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/wxupi8z9sn5a9i9/The-100-s1-e12_Sankar_HD.mp4/file"
      },
      {
        "id": "517",
        "episodeNumber": 13,
        "title": "Episode 13 (Finale)",
        "description": "THE 100 Season 1, Episode 13, the season finale.",
        "streamUrl": "https://www.mediafire.com/file_premium/k4fwbfbj65lc2vl/The-100-s1-e13_final_Sankar_HD.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file_premium/k4fwbfbj65lc2vl/The-100-s1-e13_final_Sankar_HD.mp4/file"
      }
    ],
  },
{
  id: "66",
  title: "DIARY OF GIGOLA",
  slug: "diary-of-gigola",
  year: "Unknown",
  rating: "N/A",
  image: "diary-of-gigola.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "DIARY OF GIGOLA is a series presented in Agasobanuye, with episode links available for viewing and downloading.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "518",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "DIARY OF GIGOLA, Episode 3.",
        "streamUrl": "https://www.mediafire.com/file/288l64dalc6w4lj/DIARY+OF+GIGOLA+EP3.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/288l64dalc6w4lj/DIARY+OF+GIGOLA+EP3.mp4/file"
      },
      {
        "id": "519",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "DIARY OF GIGOLA, Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/tl6eo3kf01usxj7/DIARY+OF+GIGOLA+EP4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tl6eo3kf01usxj7/DIARY+OF+GIGOLA+EP4.mp4/file"
      },
      {
        "id": "520",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "DIARY OF GIGOLA, Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/z6vf1lm7kebynns/DIARY+OF+GIGOLA+EP5.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/z6vf1lm7kebynns/DIARY+OF+GIGOLA+EP5.mp4/file"
      },
      {
        "id": "521",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "DIARY OF GIGOLA, Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/qicmbxbyumu2od1/DIARY+OF+GIGOLA+EP6.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/qicmbxbyumu2od1/DIARY+OF+GIGOLA+EP6.mp4/file"
      },
      {
        "id": "522",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "DIARY OF GIGOLA, Episode 7.",
        "streamUrl": "https://www.mediafire.com/file/6oqt7q8h48v1gli/DIARY+OF+GIGOLA+EP7.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6oqt7q8h48v1gli/DIARY+OF+GIGOLA+EP7.mp4/file"
      },
      {
        "id": "523",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "DIARY OF GIGOLA, Episode 8.",
        "streamUrl": "https://www.mediafire.com/file/208jox7gdb7rzbb/DIARY+OF+GIGOLA+EP8.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/208jox7gdb7rzbb/DIARY+OF+GIGOLA+EP8.mp4/file"
      },
      {
        "id": "524",
        "episodeNumber": 9,
        "title": "Episode 9",
        "description": "DIARY OF GIGOLA, Episode 9.",
        "streamUrl": "https://www.mediafire.com/file/4tk0sc3f2fc0bef/DIARY+OF+GIGOLA+EP9.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4tk0sc3f2fc0bef/DIARY+OF+GIGOLA+EP9.mp4/file"
      },
      {
        "id": "525",
        "episodeNumber": 10,
        "title": "Episode 10 (Finale)",
        "description": "DIARY OF GIGOLA, Episode 10, the season finale.",
        "streamUrl": "https://www.mediafire.com/file/6zfw0t1c3tft4mk/DIARY+OF+GIGOLA+EP10FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6zfw0t1c3tft4mk/DIARY+OF+GIGOLA+EP10FINAL.mp4/file"
      },
      {
        "id": "675",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "DIARY OF GIGOLA, Episode 1, presented by ROCK KIMOMO.",
        "streamUrl": "https://isatafilez.my/file/0704a71b65cc4399a12aabce0249d9dd",
        "downloadUrl": "https://isatafilez.my/file/0704a71b65cc4399a12aabce0249d9dd"
      },
      {
        "id": "676",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "DIARY OF GIGOLA, Episode 2, presented by ROCK KIMOMO.",
        "streamUrl": "https://isatafilez.my/file/6e23575a5a454f748301001ea5b07db4",
        "downloadUrl": "https://isatafilez.my/file/6e23575a5a454f748301001ea5b07db4"
      }
    ],
  },
{
  id: "67",
  title: "NATHANIEL",
  slug: "nathaniel",
  year: "Unknown",
  rating: "N/A",
  image: "nathaniel.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "NATHANIEL is a series presented in Agasobanuye by ROCK KIMOMO, with nineteen episodes provided.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "526",
        "episodeNumber": 1,
        "title": "Episode 1",
        "description": "NATHANIEL, Episode 1.",
        "streamUrl": "https://www.mediafire.com/file/phx5iep63ypjxui/NATHANIEL_EP_01.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/phx5iep63ypjxui/NATHANIEL_EP_01.avi/file"
      },
      {
        "id": "527",
        "episodeNumber": 2,
        "title": "Episode 2",
        "description": "NATHANIEL, Episode 2.",
        "streamUrl": "https://www.mediafire.com/file/2s0vlfb5osjgdrc/NATHANIEL+EP+02.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/2s0vlfb5osjgdrc/NATHANIEL+EP+02.avi/file"
      },
      {
        "id": "528",
        "episodeNumber": 3,
        "title": "Episode 3",
        "description": "NATHANIEL, Episode 3.",
        "streamUrl": "https://www.mediafire.com/file/a9ebh0pu4qug3o8/NATHANIEL_EP_03.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/a9ebh0pu4qug3o8/NATHANIEL_EP_03.avi/file"
      },
      {
        "id": "529",
        "episodeNumber": 4,
        "title": "Episode 4",
        "description": "NATHANIEL, Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/o9wjbwptufkamnn/NATHANIEL_EP_04.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/o9wjbwptufkamnn/NATHANIEL_EP_04.avi/file"
      },
      {
        "id": "530",
        "episodeNumber": 5,
        "title": "Episode 5",
        "description": "NATHANIEL, Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/hk1aaieor82z0gx/NATHANIEL_EP_05.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/hk1aaieor82z0gx/NATHANIEL_EP_05.avi/file"
      },
      {
        "id": "531",
        "episodeNumber": 6,
        "title": "Episode 6",
        "description": "NATHANIEL, Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/c9d9svncas43zr5/NATHANIEL_EP_06.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/c9d9svncas43zr5/NATHANIEL_EP_06.avi/file"
      },
      {
        "id": "532",
        "episodeNumber": 7,
        "title": "Episode 7",
        "description": "NATHANIEL, Episode 7.",
        "streamUrl": "https://www.mediafire.com/file/rihkvkyjz0vn4pg/NATHANIEL_EP_07.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/rihkvkyjz0vn4pg/NATHANIEL_EP_07.avi/file"
      },
      {
        "id": "533",
        "episodeNumber": 8,
        "title": "Episode 8",
        "description": "NATHANIEL, Episode 8.",
        "streamUrl": "https://www.mediafire.com/file/a672d7ilo052a6m/NATHANIEL_EP_08.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/a672d7ilo052a6m/NATHANIEL_EP_08.avi/file"
      },
      {
        "id": "534",
        "episodeNumber": 9,
        "title": "Episode 9B",
        "description": "NATHANIEL, Episode 9B.",
        "streamUrl": "https://www.mediafire.com/file/2p9oi1ira8ai3zf/NATHANIEL_EP_09_B.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/2p9oi1ira8ai3zf/NATHANIEL_EP_09_B.avi/file"
      },
      {
        "id": "535",
        "episodeNumber": 10,
        "title": "Episode 10",
        "description": "NATHANIEL, Episode 10.",
        "streamUrl": "https://www.mediafire.com/file/ostxyql1jm3ssy8/NATHANIEL_EP_10.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/ostxyql1jm3ssy8/NATHANIEL_EP_10.avi/file"
      },
      {
        "id": "536",
        "episodeNumber": 11,
        "title": "Episode 11",
        "description": "NATHANIEL, Episode 11.",
        "streamUrl": "https://www.mediafire.com/file/tnd7uivta03qkb5/NATHANIEL_EP_11.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/tnd7uivta03qkb5/NATHANIEL_EP_11.avi/file"
      },
      {
        "id": "537",
        "episodeNumber": 12,
        "title": "Episode 12",
        "description": "NATHANIEL, Episode 12.",
        "streamUrl": "https://www.mediafire.com/file/eh8msw85b7z34iu/NATHANIEL_EP_12.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/eh8msw85b7z34iu/NATHANIEL_EP_12.avi/file"
      },
      {
        "id": "538",
        "episodeNumber": 13,
        "title": "Episode 13",
        "description": "NATHANIEL, Episode 13.",
        "streamUrl": "https://www.mediafire.com/file/1kl0arznubg5twi/NATHANIEL_EP_13.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/1kl0arznubg5twi/NATHANIEL_EP_13.avi/file"
      },
      {
        "id": "539",
        "episodeNumber": 14,
        "title": "Episode 14",
        "description": "NATHANIEL, Episode 14.",
        "streamUrl": "https://www.mediafire.com/file/rphv2dkbxtkzqxi/NATHANIEL_EP_14.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/rphv2dkbxtkzqxi/NATHANIEL_EP_14.avi/file"
      },
      {
        "id": "540",
        "episodeNumber": 15,
        "title": "Episode 15",
        "description": "NATHANIEL, Episode 15.",
        "streamUrl": "https://www.mediafire.com/file/e6uoqg6nxnno8tc/NATHANIEL_EP_15.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/e6uoqg6nxnno8tc/NATHANIEL_EP_15.avi/file"
      },
      {
        "id": "541",
        "episodeNumber": 16,
        "title": "Episode 16",
        "description": "NATHANIEL, Episode 16.",
        "streamUrl": "https://www.mediafire.com/file/lhgo10zklftmlk6/NATHANIEL_EP_16.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/lhgo10zklftmlk6/NATHANIEL_EP_16.avi/file"
      },
      {
        "id": "542",
        "episodeNumber": 17,
        "title": "Episode 17",
        "description": "NATHANIEL, Episode 17.",
        "streamUrl": "https://www.mediafire.com/file/tmojxcuwol23tkc/NATHANIEL_EP_17.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/tmojxcuwol23tkc/NATHANIEL_EP_17.avi/file"
      },
      {
        "id": "543",
        "episodeNumber": 18,
        "title": "Episode 18",
        "description": "NATHANIEL, Episode 18.",
        "streamUrl": "https://www.mediafire.com/file/eau156t6cdskzo6/NATHANIEL_EP_18.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/eau156t6cdskzo6/NATHANIEL_EP_18.avi/file"
      },
      {
        "id": "544",
        "episodeNumber": 19,
        "title": "Episode 19",
        "description": "NATHANIEL, Episode 19.",
        "streamUrl": "https://www.mediafire.com/file/9z85rgv1b0lij5v/NATHANIEL_EP_19.avi/file",
        "downloadUrl": "https://www.mediafire.com/file/9z85rgv1b0lij5v/NATHANIEL_EP_19.avi/file"
      }
    ],
  },
{
  id: "68",
  title: "LUPIN",
  slug: "lupin",
  year: "2026",
  rating: "N/A",
  image: "lupin.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "LUPIN Season 4, Episode 1, presented in Agasobanuye by ROCK KIMOMO.",
  language: "Hindi",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "677",
        "episodeNumber": 1,
        "title": "LUPIN S04 EP01",
        "description": "LUPIN Season 4, Episode 1, presented in an Agasobanuye version by ROCK KIMOMO.",
        "streamUrl": "https://www.mediafire.com/file/tclzzfqgfrs054n/LUPIN+S04+EP01__.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tclzzfqgfrs054n/LUPIN+S04+EP01__.mp4/file"
      },
      {
        "id": "812",
        "episodeNumber": 2,
        "title": "LUPIN S04 - Episode 2",
        "description": "LUPIN Season 4 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c7u1ugqo031l8zz/LUPIN_S04_EP02__.mp4/file"
      }
    ],
  },
{
  id: "69",
  title: "VIS A VIS SEASON 3",
  slug: "vis-a-vis-season-3",
  year: "2018",
  rating: "N/A",
  image: "vis-a-vis3.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "VIS A VIS Season 3, presented in Agasobanuye by ROCK KIMOMO, featuring eight episodes.",
  language: "Spanish",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "734",
        "episodeNumber": 1,
        "title": "VIS A VIS SEASON 3 - Episode 1",
        "description": "VIS A VIS Season 3, Episode 1, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/s8hebxr9aprp",
        "downloadUrl": "https://www.mediafire.com/file/sni1maqv7y65zmp/Vis+A+Vis+S03+E01+Hd.mp4/file"
      },
      {
        "id": "735",
        "episodeNumber": 2,
        "title": "VIS A VIS SEASON 3 - Episode 2",
        "description": "VIS A VIS Season 3, Episode 2, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/7ue3t4quwezl",
        "downloadUrl": "https://www.mediafire.com/file/b3es1ftv040ipz9/Vis+A+Vis+S03+E02+Hd.mp4/file"
      },
      {
        "id": "736",
        "episodeNumber": 3,
        "title": "VIS A VIS SEASON 3 - Episode 3",
        "description": "VIS A VIS Season 3, Episode 3, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/k9lpb79zgn3x",
        "downloadUrl": "https://www.mediafire.com/file/jenkqdmntb6pz6u/Vis+A+Vis+S03+E03+Hd.mp4/file"
      },
      {
        "id": "737",
        "episodeNumber": 4,
        "title": "VIS A VIS SEASON 3 - Episode 4",
        "description": "VIS A VIS Season 3, Episode 4, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/tao67pzb4vib",
        "downloadUrl": "https://www.mediafire.com/file/he9gqo2gi6fprxm/Vis+A+Vis+S03+E04+Hd.mp4/file"
      },
      {
        "id": "738",
        "episodeNumber": 5,
        "title": "VIS A VIS SEASON 3 - Episode 5",
        "description": "VIS A VIS Season 3, Episode 5, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/8ad8wyqu9bbc",
        "downloadUrl": "https://www.mediafire.com/file/vseonvv6fh7mbqn/Vis+A+Vis+S03+E05+Hd.mp4/file"
      },
      {
        "id": "739",
        "episodeNumber": 6,
        "title": "VIS A VIS SEASON 3 - Episode 6",
        "description": "VIS A VIS Season 3, Episode 6, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/gaprtr951p5k",
        "downloadUrl": "https://www.mediafire.com/file/iiuo63k9eaqoi5g/Vis+A+Vis+S03+E06+Hd.mp4/file"
      },
      {
        "id": "740",
        "episodeNumber": 7,
        "title": "VIS A VIS SEASON 3 - Episode 7",
        "description": "VIS A VIS Season 3, Episode 7, presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x7onzf5giyq0n22/Vis+A+Vis+S03+E07+Hd.mp4/file"
      },
      {
        "id": "741",
        "episodeNumber": 8,
        "title": "VIS A VIS SEASON 3 - Episode 8 (Final)",
        "description": "VIS A VIS Season 3, Episode 8 (Final), presented in Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/8yw9deazjljr",
        "downloadUrl": "https://www.mediafire.com/file/49raht2lnioh5wo/Vis+A+Vis+S03+E08+Final+Hd.mp4/file"
      }
    ],
  },

{
  id: "70",
  title: "VIS A VIS SEASON 2",
  slug: "vis-a-vis-season-2",
  year: "2016",
  rating: "N/A",
  image: "vis-a-vis2.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "VIS A VIS Season 2, presented in Agasobanuye by ROCK KIMOMO, featuring episodes 1–13, including the split episodes 7A and 7B.",
  language: "Spanish",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "742",
        "episodeNumber": 1,
        "title": "VIS A VIS SEASON 2 - Episode 1",
        "description": "VIS A VIS Season 2, Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/2b5k34gms8x2",
        "downloadUrl": "https://www.mediafire.com/file/cewu0hyy6mijeyx/Vis+a+vis-S2E1+Hd.mp4/file"
      },
      {
        "id": "743",
        "episodeNumber": 2,
        "title": "VIS A VIS SEASON 2 - Episode 2",
        "description": "VIS A VIS Season 2, Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/2327i21myjuw",
        "downloadUrl": "https://www.mediafire.com/file/liqwxfgzn9igha3/Vis+a+vis-S2E2+Hd.mp4/file"
      },
      {
        "id": "744",
        "episodeNumber": 3,
        "title": "VIS A VIS SEASON 2 - Episode 3",
        "description": "VIS A VIS Season 2, Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/3yo6lvzigig0",
        "downloadUrl": "https://www.mediafire.com/file/s0almfzq85zz4oi/Vis+a+vis-S2E3+Hd.mp4/file"
      },
      {
        "id": "745",
        "episodeNumber": 4,
        "title": "VIS A VIS SEASON 2 - Episode 4",
        "description": "VIS A VIS Season 2, Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/5bkmgzuy1cda",
        "downloadUrl": "https://www.mediafire.com/file/rchq8m6icma87if/Vis_A_Vis_S02_E_4_Hd.mp4/file"
      },
      {
        "id": "746",
        "episodeNumber": 5,
        "title": "VIS A VIS SEASON 2 - Episode 5",
        "description": "VIS A VIS Season 2, Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/17extcdfyph4",
        "downloadUrl": "https://www.mediafire.com/file/b0h8vyajjm0rk3x/Vis_A_Vis_S02_E_5_Hd.mp4/file"
      },
      {
        "id": "747",
        "episodeNumber": 6,
        "title": "VIS A VIS SEASON 2 - Episode 6",
        "description": "VIS A VIS Season 2, Episode 6, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/ujl7m9tb28we",
        "downloadUrl": "https://www.mediafire.com/file/00w66jq8yd43slr/Vis_A_Vis_S02_E_6_Hd.mp4/file"
      },
      {
        "id": "748",
        "episodeNumber": 7,
        "title": "VIS A VIS SEASON 2 - Episode 7A",
        "description": "VIS A VIS Season 2, Episode 7A, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/xjkivoh20ofk",
        "downloadUrl": "https://www.mediafire.com/file/oah0xbbrof4tcy7/Vis+A+Vis+S02+E+7+A+Hd.mp4/file"
      },
      {
        "id": "749",
        "episodeNumber": 8,
        "title": "VIS A VIS SEASON 2 - Episode 7B",
        "description": "VIS A VIS Season 2, Episode 7B, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/u8x2tvegyxdh",
        "downloadUrl": "https://www.mediafire.com/file/gjtpfimbcxyw6md/Vis+A+Vis+S02+E+7+B+Hd.mp4/file"
      },
      {
        "id": "750",
        "episodeNumber": 9,
        "title": "VIS A VIS SEASON 2 - Episode 8",
        "description": "VIS A VIS Season 2, Episode 8, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fh39d1698gjw5ag/Vis_A_Vis_S02_E8_Hd.mp4/file"
      },
      {
        "id": "751",
        "episodeNumber": 10,
        "title": "VIS A VIS SEASON 2 - Episode 9",
        "description": "VIS A VIS Season 2, Episode 9, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m31yq6vt6sjpoag/Vis_A_Vis_S02_E9_Hd.mp4/file"
      },
      {
        "id": "752",
        "episodeNumber": 11,
        "title": "VIS A VIS SEASON 2 - Episode 10",
        "description": "VIS A VIS Season 2, Episode 10, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/myvfbjap2yqey15/Vis_A_Vis_S02_E10_Hd.mp4/file"
      },
      {
        "id": "753",
        "episodeNumber": 12,
        "title": "VIS A VIS SEASON 2 - Episode 11",
        "description": "VIS A VIS Season 2, Episode 11, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/112mxjrb8ztdzrd/Vis_A_Vis_S02_E11_Hd.mp4/file"
      },
      {
        "id": "754",
        "episodeNumber": 13,
        "title": "VIS A VIS SEASON 2 - Episode 12B",
        "description": "VIS A VIS Season 2, Episode 12B, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ebt69yzys42rxc1/Vis_A_Vis_S02_E12_B_Hd.mp4/file"
      },
      {
        "id": "755",
        "episodeNumber": 14,
        "title": "VIS A VIS SEASON 2 - Episode 13",
        "description": "VIS A VIS Season 2, Episode 13, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/k7h9tpeoty2wn8f/Vis_A_Vis_S02_E13_Hd.mp4/file"
      }
    ],
  },

{
  id: "71",
  title: "VIS A VIS SEASON 1",
  slug: "vis-a-vis-season-1",
  year: "2015",
  rating: "N/A",
  image: "vis-a-vis.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "VIS A VIS Season 1, presented in Agasobanuye by ROCK KIMOMO, featuring episodes 1–16.",
  language: "Spanish",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "756",
        "episodeNumber": 1,
        "title": "VIS A VIS SEASON 1 - Episode 1",
        "description": "VIS A VIS Season 1, Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/8gh8p7p6itq6",
        "downloadUrl": "https://www.mediafire.com/file/qjqkxfxpn315gns/Vis+a+vis+S1E1+Hd.mp4/file"
      },
      {
        "id": "757",
        "episodeNumber": 2,
        "title": "VIS A VIS SEASON 1 - Episode 2",
        "description": "VIS A VIS Season 1, Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9ikhf6d154jz602/Vis+a+vis+S1E2.mp4/file"
      },
      {
        "id": "758",
        "episodeNumber": 3,
        "title": "VIS A VIS SEASON 1 - Episode 3",
        "description": "VIS A VIS Season 1, Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/msnq11ds2o70",
        "downloadUrl": "https://www.mediafire.com/file/1yy8gg5noxaxhw9/Vis+a+vis+S1E3+Hd.mp4/file"
      },
      {
        "id": "759",
        "episodeNumber": 4,
        "title": "VIS A VIS SEASON 1 - Episode 4",
        "description": "VIS A VIS Season 1, Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/7g1xzntql4v3",
        "downloadUrl": "https://www.mediafire.com/file/zrwoxjv3wveca9e/Vis+a+vis-S1E4+Hd.mp4/file"
      },
      {
        "id": "760",
        "episodeNumber": 5,
        "title": "VIS A VIS SEASON 1 - Episode 5",
        "description": "VIS A VIS Season 1, Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/ai36ri5va7zf",
        "downloadUrl": "https://www.mediafire.com/file/h92ksdfff82hvce/Vis+a+vis-S1E5+Hd.mp4/file"
      },
      {
        "id": "761",
        "episodeNumber": 6,
        "title": "VIS A VIS SEASON 1 - Episode 6",
        "description": "VIS A VIS Season 1, Episode 6, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7z5w9ndlrkngopb/Vis+a+vis+S1E6+Hd.mp4/file"
      },
      {
        "id": "762",
        "episodeNumber": 7,
        "title": "VIS A VIS SEASON 1 - Episode 7",
        "description": "VIS A VIS Season 1, Episode 7, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tfv8k9d0dj4lo5j/Vis+a+vis+S1E7+Hd.mp4/file"
      },
      {
        "id": "763",
        "episodeNumber": 8,
        "title": "VIS A VIS SEASON 1 - Episode 8",
        "description": "VIS A VIS Season 1, Episode 8, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gwluxr4gzfms0pj/Vis+a+vis+S1E8+Hd.mp4/file"
      },
      {
        "id": "764",
        "episodeNumber": 9,
        "title": "VIS A VIS SEASON 1 - Episode 9",
        "description": "VIS A VIS Season 1, Episode 9, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m4qjfozpcsjby4p/Vis+a+vis+S1E9+Hd.mp4/file"
      },
      {
        "id": "765",
        "episodeNumber": 10,
        "title": "VIS A VIS SEASON 1 - Episode 10",
        "description": "VIS A VIS Season 1, Episode 10, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bqmfyql6d26c01u/Vis+a+vis-S1E10+Hd.mp4/file"
      },
      {
        "id": "766",
        "episodeNumber": 11,
        "title": "VIS A VIS SEASON 1 - Episode 11",
        "description": "VIS A VIS Season 1, Episode 11, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nqr2045lmaoacwf/Vis+a+vis-S1E11+Hd+N.mp4/file"
      },
      {
        "id": "767",
        "episodeNumber": 12,
        "title": "VIS A VIS SEASON 1 - Episode 12",
        "description": "VIS A VIS Season 1, Episode 12, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/619y4ph5mz66oy4/Vis+A+Vis+E12+Hd.mp4/file"
      },
      {
        "id": "768",
        "episodeNumber": 13,
        "title": "VIS A VIS SEASON 1 - Episode 13",
        "description": "VIS A VIS Season 1, Episode 13, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/42bdbludk84s8j6/Vis+A+Vis+E13+Hd.mp4/file"
      },
      {
        "id": "769",
        "episodeNumber": 14,
        "title": "VIS A VIS SEASON 1 - Episode 14",
        "description": "VIS A VIS Season 1, Episode 14, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/f5zrpw28omc3bdz/Vis+A+Vas+E14+Hd.mp4/file"
      },
      {
        "id": "770",
        "episodeNumber": 15,
        "title": "VIS A VIS SEASON 1 - Episode 15",
        "description": "VIS A VIS Season 1, Episode 15, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8mrbck09jhg9hrm/Vis+A+Vis+E15+Hd.mp4/file"
      },
      {
        "id": "771",
        "episodeNumber": 16,
        "title": "VIS A VIS SEASON 1 - Episode 16",
        "description": "VIS A VIS Season 1, Episode 16, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jfnhyatyonvvaa1/Vis_A_Vis_E16_Final_Hd.mp4/file"
      }
    ],
  },

{
  id: "72",
  title: "SIX SEASON 1",
  slug: "six-season-1",
  year: "2017",
  rating: "N/A",
  image: "six.jpg",
  isFeatured: false
  ,
  createdAt: "2026-10-24",
  description:
    "SIX Season 1, an action-packed military drama presented in Agasobanuye by Junior, featuring 8 episodes.",
  language: "English",
  genres: ["Action", "Drama", "War"],
  explainer: "Junior",

    episodes: [
      {
        "id": "772",
        "episodeNumber": 1,
        "title": "SIX SEASON 1 - Episode 1",
        "description": "SIX Season 1, Episode 1, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/g81tj6niv3t5",
        "downloadUrl": "https://www.mediafire.com/file/aiu88c6jdyjkp85/Six_Ep1hd.mp4_2.mp4/file"
      },
      {
        "id": "773",
        "episodeNumber": 2,
        "title": "SIX SEASON 1 - Episode 2",
        "description": "SIX Season 1, Episode 2, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/w9dnd5biozx2",
        "downloadUrl": "https://www.mediafire.com/file/oaq64uheysy4ivo/Six_Ep2_Hd.mp4.mp4/file"
      },
      {
        "id": "774",
        "episodeNumber": 3,
        "title": "SIX SEASON 1 - Episode 3",
        "description": "SIX Season 1, Episode 3, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/vv8e880ok213",
        "downloadUrl": "https://www.mediafire.com/file/kz4in7ocpfbf4ek/Six_Ep3_Hd.mp4.mp4/file"
      },
      {
        "id": "775",
        "episodeNumber": 4,
        "title": "SIX SEASON 1 - Episode 4",
        "description": "SIX Season 1, Episode 4, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/m3u53yp5kc94",
        "downloadUrl": "https://www.mediafire.com/file/n7zy7k1a2hlvymq/Six+S01+Ep4+Hd.mp4/file"
      },
      {
        "id": "776",
        "episodeNumber": 5,
        "title": "SIX SEASON 1 - Episode 5",
        "description": "SIX Season 1, Episode 5, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/ngt00ksod2zo",
        "downloadUrl": "https://www.mediafire.com/file/u1qe20mvi0yj2eh/Six+S01+Ep5+Hd.mp4/file"
      },
      {
        "id": "777",
        "episodeNumber": 6,
        "title": "SIX SEASON 1 - Episode 6",
        "description": "SIX Season 1, Episode 6, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/1obnkplp9tz3",
        "downloadUrl": "https://www.mediafire.com/file/eizqkjjxrk20lnk/Six+S01+Ep6+Hd.mp4/file"
      },
      {
        "id": "778",
        "episodeNumber": 7,
        "title": "SIX SEASON 1 - Episode 7",
        "description": "SIX Season 1, Episode 7, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/3ccn3yfo2nda",
        "downloadUrl": "https://www.mediafire.com/file/x6pltg02erruywq/Six+S01+Ep7+Hd.mp4/file"
      },
      {
        "id": "779",
        "episodeNumber": 8,
        "title": "SIX SEASON 1 - Episode 8",
        "description": "SIX Season 1, Episode 8, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/13xrddutq8j1",
        "downloadUrl": "https://www.mediafire.com/file/k1g9hongv8rypew/Six+S1+Ep8+Final+Hd.mp4/file"
      }
    ],
  },

{
  id: "73",
  title: "PINOCCHIO",
  slug: "pinocchio",
  year: "2014",
  rating: "N/A",
  image: "pinocchio.jpg",
  isFeatured: false,
  createdAt: "2026-10-24",
  description:
    "Pinocchio, a Korean drama presented in Agasobanuye by Junior, featuring 20 episodes.",
  language: "Korean",
  genres: ["Drama", "Romance"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "780",
        "episodeNumber": 1,
        "title": "PINOCCHIO - Episode 1",
        "description": "PINOCCHIO Episode 1, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/dru9rlnwmd65",
        "downloadUrl": "https://www.mediafire.com/file/bvjqfdpgw3s7sjk/Pinnochio_Ep_1_Hd.mp4/file"
      },
      {
        "id": "781",
        "episodeNumber": 2,
        "title": "PINOCCHIO - Episode 2",
        "description": "PINOCCHIO Episode 2, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xpg7c5fvcd45fq6/Pinnochio_Ep2_Hd.mp4/file"
      },
      {
        "id": "782",
        "episodeNumber": 3,
        "title": "PINOCCHIO - Episode 3",
        "description": "PINOCCHIO Episode 3, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/d4sfqmrucrp7",
        "downloadUrl": "https://www.mediafire.com/file/t5hq7o5uv6c28in/Pinnochio_Ep3_Hd.mp4/file"
      },
      {
        "id": "783",
        "episodeNumber": 4,
        "title": "PINOCCHIO - Episode 4",
        "description": "PINOCCHIO Episode 4, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/xkue2rdmqcgp",
        "downloadUrl": "https://www.mediafire.com/file/drpyv9nwfcsctnu/Pinnochio_Ep4_Hd.mp4/file"
      },
      {
        "id": "784",
        "episodeNumber": 5,
        "title": "PINOCCHIO - Episode 5",
        "description": "PINOCCHIO Episode 5, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/03dkkedttpxh",
        "downloadUrl": "https://www.mediafire.com/file/4m8q8k9pw2q72h9/Pinnochio_Ep5_Hd.mp4/file"
      },
      {
        "id": "785",
        "episodeNumber": 6,
        "title": "PINOCCHIO - Episode 6",
        "description": "PINOCCHIO Episode 6, Agasobanuye by Junior.",
        "streamUrl": "https://hgcloud.to/xtmwp75b5zw6",
        "downloadUrl": "https://www.mediafire.com/file/jdpe0dcifhofy16/Pinnochio_Ep6_Hd.mp4/file"
      },
      {
        "id": "786",
        "episodeNumber": 7,
        "title": "PINOCCHIO - Episode 7",
        "description": "PINOCCHIO Episode 7, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oa7m24102opata8/Pinnochio_Ep7_Hd.mp4/file"
      },
      {
        "id": "787",
        "episodeNumber": 8,
        "title": "PINOCCHIO - Episode 8",
        "description": "PINOCCHIO Episode 8, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n2lq3oxqlyskv1y/Pinnochio_Ep8_Hd.mp4/file"
      },
      {
        "id": "788",
        "episodeNumber": 9,
        "title": "PINOCCHIO - Episode 9",
        "description": "PINOCCHIO Episode 9, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/otqkb9x14saicyc/Pinnochio_Ep9_Hd.mp4/file"
      },
      {
        "id": "789",
        "episodeNumber": 10,
        "title": "PINOCCHIO - Episode 10",
        "description": "PINOCCHIO Episode 10, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tyknrxenvgfvtz9/Pinnochio_Ep10_Hd.mp4/file"
      },
      {
        "id": "790",
        "episodeNumber": 11,
        "title": "PINOCCHIO - Episode 11",
        "description": "PINOCCHIO Episode 11, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/124dvvsah46xnub/PINNOCHIO_11.avi/file"
      },
      {
        "id": "791",
        "episodeNumber": 12,
        "title": "PINOCCHIO - Episode 12",
        "description": "PINOCCHIO Episode 12, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x4cg6helblyjxtg/Pinnochio_Ep12_Hd.mp4/file"
      },
      {
        "id": "792",
        "episodeNumber": 13,
        "title": "PINOCCHIO - Episode 13",
        "description": "PINOCCHIO Episode 13, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/btm5t89gb74mc9l/Pinnochio_Ep13_Hd.mp4/file"
      },
      {
        "id": "793",
        "episodeNumber": 14,
        "title": "PINOCCHIO - Episode 14",
        "description": "PINOCCHIO Episode 14, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gfslovugcshdbn8/Pinnochio_Ep14_Hd.mp4/file"
      },
      {
        "id": "794",
        "episodeNumber": 15,
        "title": "PINOCCHIO - Episode 15",
        "description": "PINOCCHIO Episode 15, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/al6unfn9gs4f5t6/Pinnochio+Ep15+Hd.mp4/file"
      },
      {
        "id": "795",
        "episodeNumber": 16,
        "title": "PINOCCHIO - Episode 16",
        "description": "PINOCCHIO Episode 16, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mb08h2v5lxnux7r/Pinnochio+Ep16+Hd.mp4/file"
      },
      {
        "id": "796",
        "episodeNumber": 17,
        "title": "PINOCCHIO - Episode 17",
        "description": "PINOCCHIO Episode 17, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qf9ywdanfrwvghh/Pinnochio_Ep17_Hd.mp4/file"
      },
      {
        "id": "797",
        "episodeNumber": 18,
        "title": "PINOCCHIO - Episode 18",
        "description": "PINOCCHIO Episode 18, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1arg5bts2q0w5cz/Pinnochio_Ep18_Hd.mp4/file"
      },
      {
        "id": "798",
        "episodeNumber": 19,
        "title": "PINOCCHIO - Episode 19",
        "description": "PINOCCHIO Episode 19, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ue9p4ka14x2ltw8/Pinnochio_Ep19_Hd.mp4/file"
      },
      {
        "id": "799",
        "episodeNumber": 20,
        "title": "PINOCCHIO - Episode 20",
        "description": "PINOCCHIO Episode 20, Agasobanuye by Junior.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kvtuxxh3gju7k8c/Pinnochio+Ep20+Final+Hd.mp4/file"
      }
    ],
  },
{
  id: "74",
  title: "LUPIN SEASON 2",
  slug: "lupin-season-2",
  year: "2021",
  rating: "N/A",
  image: "lupin2.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Lupin Season 2 is a French crime thriller following Assane Diop, featuring 5 episodes presented in Agasobanuye.",
  language: "French",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "800",
        "episodeNumber": 1,
        "title": "LUPIN S02 - Episode 1",
        "description": "LUPIN Season 2 Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/2mkdfrriod2w",
        "downloadUrl": "https://www.mediafire.com/file/0uijoksnkv9g6o8/LUPIN_S02_EP_01_1.mp4/file"
      },
      {
        "id": "801",
        "episodeNumber": 2,
        "title": "LUPIN S02 - Episode 2",
        "description": "LUPIN Season 2 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/9u9sne1b7rzq",
        "downloadUrl": "https://www.mediafire.com/file/pzx44y1zrpm7wkg/LUPIN_S02_EP_02_1.mp4/file"
      },
      {
        "id": "802",
        "episodeNumber": 3,
        "title": "LUPIN S02 - Episode 3",
        "description": "LUPIN Season 2 Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/l8942hx38mfb",
        "downloadUrl": "https://www.mediafire.com/file/j4wxqj0h8ooo0fs/LUPIN_S02_EP_03_1.mp4/file"
      },
      {
        "id": "803",
        "episodeNumber": 4,
        "title": "LUPIN S02 - Episode 4",
        "description": "LUPIN Season 2 Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/2ydxelonzysz",
        "downloadUrl": "https://www.mediafire.com/file/v7rybdo7hjhgi9m/LUPIN_S02_EP_04_1.mp4/file"
      },
      {
        "id": "804",
        "episodeNumber": 5,
        "title": "LUPIN S02 - Episode 5",
        "description": "LUPIN Season 2 Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/pc1uejuw447f",
        "downloadUrl": "https://www.mediafire.com/file/l3vm5inz0in79lc/LUPIN+S02+EP+05_1.mp4/file"
      }
    ],
  },
{
  id: "75",
  title: "LUPIN SEASON 3",
  slug: "lupin-season-3",
  year: "2023",
  rating: "N/A",
  image: "lupin3.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Lupin Season 3 is a French crime thriller following Assane Diop, featuring 7 episodes presented in Agasobanuye.",
  language: "French",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "805",
        "episodeNumber": 1,
        "title": "LUPIN S03 - Episode 1",
        "description": "LUPIN Season 3 Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/syuu03kogfss",
        "downloadUrl": "https://www.mediafire.com/file/7ytn9iy3ajeq840/LUPIN_S03_EP_01.mp4/file"
      },
      {
        "id": "806",
        "episodeNumber": 2,
        "title": "LUPIN S03 - Episode 2",
        "description": "LUPIN Season 3 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/vlnj6v5t8bph",
        "downloadUrl": "https://www.mediafire.com/file/bf0szqpz4eipm6y/LUPIN_S03_EP_02.mp4/file"
      },
      {
        "id": "807",
        "episodeNumber": 3,
        "title": "LUPIN S03 - Episode 3",
        "description": "LUPIN Season 3 Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/iu17hkvhn5tk",
        "downloadUrl": "https://www.mediafire.com/file/a7wrppejo7ubgv0/LUPIN+S03+EP+3.mp4/file"
      },
      {
        "id": "808",
        "episodeNumber": 4,
        "title": "LUPIN S03 - Episode 4",
        "description": "LUPIN Season 3 Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/6pur61579s7e",
        "downloadUrl": "https://www.mediafire.com/file/z1xh84mvdmin74c/LUPIN_S03_EP_04.mp4/file"
      },
      {
        "id": "809",
        "episodeNumber": 5,
        "title": "LUPIN S03 - Episode 5",
        "description": "LUPIN Season 3 Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/5njkl6o49jv9",
        "downloadUrl": "https://www.mediafire.com/file/wt79y8ghabi8q7e/LUPIN_S03_EP_05.mp4/file"
      },
      {
        "id": "810",
        "episodeNumber": 6,
        "title": "LUPIN S03 - Episode 6",
        "description": "LUPIN Season 3 Episode 6, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/vbx33mqvxpc2",
        "downloadUrl": "https://www.mediafire.com/file/ogeozq006lvuz5x/LUPIN_S03_EP_06.mp4/file"
      },
      {
        "id": "811",
        "episodeNumber": 7,
        "title": "LUPIN S03 - Episode 7",
        "description": "LUPIN Season 3 Episode 7, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/xwa7plkqmh70",
        "downloadUrl": "https://www.mediafire.com/file/2lqnduv43vy4erw/LUPIN+S03+EP07__.mp4/file"
      }
    ],
  },
// Add these objects inside the existing series array in data/series.ts.
// Check that IDs 77–82 and the image filenames are not already in use.

{
  id: "76",
  title: "PRISON BREAK SEASON 1",
  slug: "prison-break-season-1",
  year: "2005",
  rating: "N/A",
  image: "prison-break.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Prison Break Season 1 follows Michael Scofield's plan to break his brother out of prison, presented in Agasobanuye by JUNIOR.",
  language: "English",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "JUNIOR",

    episodes: [
      {
        "id": "869",
        "episodeNumber": 1,
        "title": "PRISON BREAK S01 - Episode 1",
        "description": "Prison Break Season 1 Episode 1, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/t9dd5b30rhyu",
        "downloadUrl": "https://www.mediafire.com/file/1c2kvibkp4j3mjf/Prison+Break.S01.Ep1.Mp4.mp4/file"
      },
      {
        "id": "870",
        "episodeNumber": 2,
        "title": "PRISON BREAK S01 - Episode 2",
        "description": "Prison Break Season 1 Episode 2, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/zg1xnyyz1w1m",
        "downloadUrl": "https://www.mediafire.com/file/psey66skvhlkwzc/Prison+Break+S01+Ep2+Mp4.mp4/file"
      },
      {
        "id": "871",
        "episodeNumber": 3,
        "title": "PRISON BREAK S01 - Episode 3",
        "description": "Prison Break Season 1 Episode 3, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/af01nwbssyuz",
        "downloadUrl": "https://www.mediafire.com/file/g7ys5rjp529kevf/Prison+Break+S01+Ep3+Mp4.mp4/file"
      },
      {
        "id": "872",
        "episodeNumber": 4,
        "title": "PRISON BREAK S01 - Episode 4",
        "description": "Prison Break Season 1 Episode 4, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/ips7d7l8jcbx",
        "downloadUrl": "https://www.mediafire.com/file/k021zg956h43is5/Prison_Break_S01ep4_Mp4.mp4/file"
      },
      {
        "id": "873",
        "episodeNumber": 5,
        "title": "PRISON BREAK S01 - Episode 5",
        "description": "Prison Break Season 1 Episode 5, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m3xnf8cnzc36fsz/Prison_Break_S01_Ep5_Mp4.mp4/file"
      },
      {
        "id": "874",
        "episodeNumber": 6,
        "title": "PRISON BREAK S01 - Episode 6",
        "description": "Prison Break Season 1 Episode 6, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/er1gfdwxd5uwedo/Prison_Break_S01_Ep6_Mp4.mp4/file"
      },
      {
        "id": "875",
        "episodeNumber": 7,
        "title": "PRISON BREAK S01 - Episode 7",
        "description": "Prison Break Season 1 Episode 7, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y9yf0e007cyjo9h/Prison+Break+S01+Ep7+Mp4.mp4/file"
      },
      {
        "id": "876",
        "episodeNumber": 8,
        "title": "PRISON BREAK S01 - Episode 8",
        "description": "Prison Break Season 1 Episode 8, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9f46qvhuonjm86y/Prison_Break_S01_Ep_8_Mp4.mp4/file"
      },
      {
        "id": "877",
        "episodeNumber": 9,
        "title": "PRISON BREAK S01 - Episode 9",
        "description": "Prison Break Season 1 Episode 9, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/un9s54nkyl3jtyl/Prison+Beak+S01+Ep9+Mp4.mp4/file"
      },
      {
        "id": "878",
        "episodeNumber": 10,
        "title": "PRISON BREAK S01 - Episode 10",
        "description": "Prison Break Season 1 Episode 10, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1anu3tn536x6fls/Prison_Break_S01_Ep10_Mp4.mp4/file"
      },
      {
        "id": "879",
        "episodeNumber": 11,
        "title": "PRISON BREAK S01 - Episode 11",
        "description": "Prison Break Season 1 Episode 11, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jvbrbzy6bxpllqf/Prison+Break+S01+Ep11+Mp4.mp4/file"
      },
      {
        "id": "880",
        "episodeNumber": 12,
        "title": "PRISON BREAK S01 - Episode 12",
        "description": "Prison Break Season 1 Episode 12, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nggzzdoi4dvy3u7/Prison+Break+S01+Ep12+Mp4.mp4/file"
      },
      {
        "id": "881",
        "episodeNumber": 13,
        "title": "PRISON BREAK S01 - Episode 13",
        "description": "Prison Break Season 1 Episode 13, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ovytygh9bt11s4m/Prison+Break+S01+Ep13+Mp4.mp4/file"
      },
      {
        "id": "882",
        "episodeNumber": 14,
        "title": "PRISON BREAK S01 - Episode 14",
        "description": "Prison Break Season 1 Episode 14, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6uwoefjz08gsn51/Prison+Break+S01+Ep14+Mp4.mp4/file"
      },
      {
        "id": "883",
        "episodeNumber": 15,
        "title": "PRISON BREAK S01 - Episode 15",
        "description": "Prison Break Season 1 Episode 15, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6sxr5eozkxrg0xx/Prison+Break+S01+Ep15+Mp4.mp4/file"
      },
      {
        "id": "884",
        "episodeNumber": 16,
        "title": "PRISON BREAK S01 - Episode 16",
        "description": "Prison Break Season 1 Episode 16, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/clfe9352mvfd2b5/Prison_Break_S01_Ep16_Mp4.mp4/file"
      },
      {
        "id": "885",
        "episodeNumber": 17,
        "title": "PRISON BREAK S01 - Episode 17",
        "description": "Prison Break Season 1 Episode 17, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j7mr99c1xfo1qra/Prison_Beak_S01_Ep17_Mp4_%25281%2529.mp4/file"
      },
      {
        "id": "886",
        "episodeNumber": 18,
        "title": "PRISON BREAK S01 - Episode 18",
        "description": "Prison Break Season 1 Episode 18, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/90bn00r0qdtw9fa/Prison_Break_S01_Ep_18_Mp4_%25281%2529.mp4/file"
      },
      {
        "id": "887",
        "episodeNumber": 19,
        "title": "PRISON BREAK S01 - Episode 19",
        "description": "Prison Break Season 1 Episode 19, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g8gsbi2ciax9q2p/Prison_Break_S01_Ep19_Mp4.mp4/file"
      },
      {
        "id": "888",
        "episodeNumber": 20,
        "title": "PRISON BREAK S01 - Episode 20",
        "description": "Prison Break Season 1 Episode 20, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ujb2jwgcwajz729/Prison_Break_S01_Ep20_Mp4.mp4/file"
      },
      {
        "id": "889",
        "episodeNumber": 21,
        "title": "PRISON BREAK S01 - Episode 21",
        "description": "Prison Break Season 1 Episode 21, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/shzau84jq2fx1gq/Prison_Break_S01_Ep21_Mp4.mp4/file"
      },
      {
        "id": "890",
        "episodeNumber": 22,
        "title": "PRISON BREAK S01 - Episode 22",
        "description": "Prison Break Season 1 Episode 22, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rzalybzahvzx7wy/Prison_Break_S01_Ep22_Final_Mp4.mp4/file"
      }
    ],
  },
{
  id: "77",
  title: "PRISON BREAK SEASON 2",
  slug: "prison-break-season-2",
  year: "2006",
  rating: "N/A",
  image: "prison-break2.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Prison Break Season 2 follows the escaped prisoners as they attempt to evade capture, presented in Agasobanuye by JUNIOR.",
  language: "English",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "JUNIOR",

    episodes: [
      {
        "id": "847",
        "episodeNumber": 1,
        "title": "PRISON BREAK S02 - Episode 1",
        "description": "Prison Break Season 2 Episode 1, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/n8hprqopz0up",
        "downloadUrl": "https://www.mediafire.com/file/cw3ddhjc9r81o6p/Prison+Break+S02+Ep1+Mp4.mp4/file"
      },
      {
        "id": "848",
        "episodeNumber": 2,
        "title": "PRISON BREAK S02 - Episode 2",
        "description": "Prison Break Season 2 Episode 2, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/clyqbplizusm",
        "downloadUrl": "https://www.mediafire.com/file/4y0lmrmkiq1wsoq/Prison+Break+S02+Ep2+Mp4.mp4/file"
      },
      {
        "id": "849",
        "episodeNumber": 3,
        "title": "PRISON BREAK S02 - Episode 3",
        "description": "Prison Break Season 2 Episode 3, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/skfb7ypjxtnb",
        "downloadUrl": "https://www.mediafire.com/file/gq3ucijlao1poji/Prison+Break+S02+Ep3+Mp4.mp4/file"
      },
      {
        "id": "850",
        "episodeNumber": 4,
        "title": "PRISON BREAK S02 - Episode 4",
        "description": "Prison Break Season 2 Episode 4, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/6x5s52qeqvb0",
        "downloadUrl": "https://www.mediafire.com/file/4zu9edo0njb4ihz/Prison+Break+S02+Ep4+Mp4.mp4/file"
      },
      {
        "id": "851",
        "episodeNumber": 5,
        "title": "PRISON BREAK S02 - Episode 5",
        "description": "Prison Break Season 2 Episode 5, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/mmrv4e3b8m7v",
        "downloadUrl": "https://www.mediafire.com/file/0ljpwhlgcz2vrvj/Prison+Break+S02+Ep5+Mp4.mp4/file"
      },
      {
        "id": "852",
        "episodeNumber": 6,
        "title": "PRISON BREAK S02 - Episode 6",
        "description": "Prison Break Season 2 Episode 6, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/rsvds6buq6nz",
        "downloadUrl": "https://www.mediafire.com/file/ww8kids56iczkqo/Prison_Break_S02_Ep6_Mp4%25281%2529.mp4/file"
      },
      {
        "id": "853",
        "episodeNumber": 7,
        "title": "PRISON BREAK S02 - Episode 7",
        "description": "Prison Break Season 2 Episode 7, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/44hrej2kogrsr44/Prison_Break_S02_Ep7_Mp4%25281%2529.mp4/file"
      },
      {
        "id": "854",
        "episodeNumber": 8,
        "title": "PRISON BREAK S02 - Episode 8",
        "description": "Prison Break Season 2 Episode 8, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xje8cjxgbrn5pq8/Prison_Break_S02_Ep8_Mp4%25281%2529.mp4/file"
      },
      {
        "id": "855",
        "episodeNumber": 9,
        "title": "PRISON BREAK S02 - Episode 9",
        "description": "Prison Break Season 2 Episode 9, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l6d95dx4absm7jv/Prison_Break_S02_Ep9_Mp4%25281%2529.mp4/file"
      },
      {
        "id": "856",
        "episodeNumber": 10,
        "title": "PRISON BREAK S02 - Episode 10",
        "description": "Prison Break Season 2 Episode 10, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sdn5zo878arwmta/Prison_Break_S02_Ep10_Mp4%25281%2529.mp4/file"
      },
      {
        "id": "857",
        "episodeNumber": 11,
        "title": "PRISON BREAK S02 - Episode 11",
        "description": "Prison Break Season 2 Episode 11, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6e9hfrq8t022dex/Prison_Break_S02_Ep11_Mp4.mp4/file"
      },
      {
        "id": "858",
        "episodeNumber": 12,
        "title": "PRISON BREAK S02 - Episode 12",
        "description": "Prison Break Season 2 Episode 12, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b8fpyogo4s0uzou/Prison+Break+S02+Ep12+Mp4.mp4/file"
      },
      {
        "id": "859",
        "episodeNumber": 13,
        "title": "PRISON BREAK S02 - Episode 13",
        "description": "Prison Break Season 2 Episode 13, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c10nuhi0pzjoe0k/Prison+Break+S02+Ep13+Mp4.mp4/file"
      },
      {
        "id": "860",
        "episodeNumber": 14,
        "title": "PRISON BREAK S02 - Episode 14",
        "description": "Prison Break Season 2 Episode 14, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e7vbo5tnp8pyhaw/Prison+Break+S02+Ep14+Mp4.mp4/file"
      },
      {
        "id": "861",
        "episodeNumber": 15,
        "title": "PRISON BREAK S02 - Episode 15",
        "description": "Prison Break Season 2 Episode 15, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gpztzc67u0bxt4n/Prison+Break+S02+Ep15+Mp4.mp4/file"
      },
      {
        "id": "862",
        "episodeNumber": 16,
        "title": "PRISON BREAK S02 - Episode 16",
        "description": "Prison Break Season 2 Episode 16, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1ob9lnuxaocbj7w/Prion+Break+S02+Ep16+Mp4.mp4/file"
      },
      {
        "id": "863",
        "episodeNumber": 17,
        "title": "PRISON BREAK S02 - Episode 17",
        "description": "Prison Break Season 2 Episode 17, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9l7a7s9en6bh62b/Prison_Break_S02_Ep17_Mp4.mp4/file"
      },
      {
        "id": "864",
        "episodeNumber": 18,
        "title": "PRISON BREAK S02 - Episode 18",
        "description": "Prison Break Season 2 Episode 18, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hplo1hjphqr7puw/Prison_Break_S02_Ep18_Mp4.mp4/file"
      },
      {
        "id": "865",
        "episodeNumber": 19,
        "title": "PRISON BREAK S02 - Episode 19",
        "description": "Prison Break Season 2 Episode 19, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/94iw8dvx542u856/Prison_Break_S02_Ep19_Mp4.mp4/file"
      },
      {
        "id": "866",
        "episodeNumber": 20,
        "title": "PRISON BREAK S02 - Episode 20",
        "description": "Prison Break Season 2 Episode 20, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e6h8f0pz8enwlij/Prison_Break_S02_Ep20_Mp4.mp4/file"
      },
      {
        "id": "867",
        "episodeNumber": 21,
        "title": "PRISON BREAK S02 - Episode 21",
        "description": "Prison Break Season 2 Episode 21, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zsarmci36vqy0q4/Prison+Break+S02+Ep21+Mp4.mp4/file"
      },
      {
        "id": "868",
        "episodeNumber": 22,
        "title": "PRISON BREAK S02 - Episode 22",
        "description": "Prison Break Season 2 Episode 22, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/au3svkk8e9uqg0b/Prison+Break+S02+Ep22+Final+Mp4.mp4/file"
      }
    ],
  },
{
  id: "78",
  title: "PRISON BREAK SEASON 3",
  slug: "prison-break-season-3",
  year: "2007",
  rating: "N/A",
  image: "prison-break3.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Prison Break Season 3 follows Michael as he struggles to survive inside Sona prison, presented in Agasobanuye by JUNIOR.",
  language: "English",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "JUNIOR",

    episodes: [
      {
        "id": "835",
        "episodeNumber": 1,
        "title": "PRISON BREAK S03 - Episode 1",
        "description": "Prison Break Season 3 Episode 1, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/688vh3a16ddo",
        "downloadUrl": "https://www.mediafire.com/file/xnbfj9cofcna058/Prison_Break_S03_Ep1_Mp4.mp4/file"
      },
      {
        "id": "836",
        "episodeNumber": 2,
        "title": "PRISON BREAK S03 - Episode 2",
        "description": "Prison Break Season 3 Episode 2, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/arxhgopxl9l6",
        "downloadUrl": "https://www.mediafire.com/file/27fbka6ntvzvbjs/Prison_Break_S03_Ep2_Mp4.mp4/file"
      },
      {
        "id": "837",
        "episodeNumber": 3,
        "title": "PRISON BREAK S03 - Episode 3",
        "description": "Prison Break Season 3 Episode 3, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/59tzms6m53d4",
        "downloadUrl": "https://www.mediafire.com/file/i4pj1ko3qsijpbp/Prison_Break_S03_Ep3_Mp4.mp4/file"
      },
      {
        "id": "838",
        "episodeNumber": 4,
        "title": "PRISON BREAK S03 - Episode 4",
        "description": "Prison Break Season 3 Episode 4, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hglink.to/59tzms6m53d4",
        "downloadUrl": "https://www.mediafire.com/file/qmny47zf9isoc7w/Prison_Break_S03_Ep4_Mp4.mp4/file"
      },
      {
        "id": "839",
        "episodeNumber": 6,
        "title": "PRISON BREAK S03 - Episode 6",
        "description": "Prison Break Season 3 Episode 6, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q061rzx5z0ufy5x/Prison_Break_S03_Ep6_Mp4.mp4/file"
      },
      {
        "id": "840",
        "episodeNumber": 7,
        "title": "PRISON BREAK S03 - Episode 7",
        "description": "Prison Break Season 3 Episode 7, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kzqpj9v7w3yjeha/Prison_Break_S03_Ep7_Mp4.mp4/file"
      },
      {
        "id": "841",
        "episodeNumber": 8,
        "title": "PRISON BREAK S03 - Episode 8",
        "description": "Prison Break Season 3 Episode 8, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/i4w9he9wt4h1peb/Prisom_Break_S03_Ep8_Mp4.mp4/file"
      },
      {
        "id": "842",
        "episodeNumber": 9,
        "title": "PRISON BREAK S03 - Episode 9",
        "description": "Prison Break Season 3 Episode 9, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x6y41zlfzv9gnb4/Prison_Break_S3_Ep9.mp4/file"
      },
      {
        "id": "843",
        "episodeNumber": 10,
        "title": "PRISON BREAK S03 - Episode 10",
        "description": "Prison Break Season 3 Episode 10, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7a191htnx9pivc6/Prison_Break_S03_Ep10_Mp4.mp4/file"
      },
      {
        "id": "844",
        "episodeNumber": 11,
        "title": "PRISON BREAK S03 - Episode 11",
        "description": "Prison Break Season 3 Episode 11, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/id1lhh79c4vo2r7/Prison_Break_S03_Ep11_Mp4.mp4/file"
      },
      {
        "id": "845",
        "episodeNumber": 12,
        "title": "PRISON BREAK S03 - Episode 12",
        "description": "Prison Break Season 3 Episode 12, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gr771erqgt70004/Prison_Break_S03_Ep12_Mp4.mp4/file"
      },
      {
        "id": "846",
        "episodeNumber": 13,
        "title": "PRISON BREAK S03 - Episode 13",
        "description": "Prison Break Season 3 Episode 13, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ywnylav9p9kzmj2/Prison_Break_S03_Ep13_Final_Mp4.mp4/file"
      }
    ],
  },
{
  id: "79",
  title: "PRISON BREAK SEASON 5",
  slug: "prison-break-season-5",
  year: "2017",
  rating: "N/A",
  image: "prison-break.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Prison Break Season 5 follows Michael Scofield's return, presented in Agasobanuye by JUNIOR.",
  language: "English",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "JUNIOR",

    episodes: [
      {
        "id": "813",
        "episodeNumber": 1,
        "title": "PRISON BREAK S05 - Episode 1",
        "description": "Prison Break Season 5 Episode 1, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/xsbhauwx422l",
        "downloadUrl": "https://www.mediafire.com/file/v317shga35kxfcu/Prison_Break_S05_E1_Mp4.mp4/file"
      },
      {
        "id": "814",
        "episodeNumber": 2,
        "title": "PRISON BREAK S05 - Episode 2",
        "description": "Prison Break Season 5 Episode 2, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/z60c2u3qd8au",
        "downloadUrl": "https://www.mediafire.com/file/xbikm6n4rxfswr0/Prison_Break_S05_Ep2_Mp4.mp4/file"
      },
      {
        "id": "815",
        "episodeNumber": 3,
        "title": "PRISON BREAK S05 - Episode 3",
        "description": "Prison Break Season 5 Episode 3, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/zdyl0061clad",
        "downloadUrl": "https://www.mediafire.com/file/ilvwba9b0qclnun/Prison_Break_S05_Ep3_Mp4.mp4/file"
      },
      {
        "id": "816",
        "episodeNumber": 4,
        "title": "PRISON BREAK S05 - Episode 4",
        "description": "Prison Break Season 5 Episode 4, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/56d1prcdw5t5",
        "downloadUrl": "https://www.mediafire.com/file/1uacybjvwcc0bb5/Prison_Break_S05_Ep4_Mp4.mp4/file"
      },
      {
        "id": "817",
        "episodeNumber": 5,
        "title": "PRISON BREAK S05 - Episode 5",
        "description": "Prison Break Season 5 Episode 5, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/2dc3bwvm69zb",
        "downloadUrl": "https://www.mediafire.com/file/du5ipr0rf4jinxs/Prison+Break+S05+Ep5+Mp4.mp4/file"
      },
      {
        "id": "818",
        "episodeNumber": 6,
        "title": "PRISON BREAK S05 - Episode 6",
        "description": "Prison Break Season 5 Episode 6, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/484zpufe4ki0",
        "downloadUrl": "https://www.mediafire.com/file/wxmd89l6v05lxf3/Prison+Break+S05+Ep6+Mp4.mp4/file"
      },
      {
        "id": "819",
        "episodeNumber": 7,
        "title": "PRISON BREAK S05 - Episode 7",
        "description": "Prison Break Season 5 Episode 7, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/paun92fy5yfr",
        "downloadUrl": "https://www.mediafire.com/file/n597z2gzx4j9cvf/Prison+Break+S05+Ep7+Mp4.mp4/file"
      },
      {
        "id": "820",
        "episodeNumber": 8,
        "title": "PRISON BREAK S05 - Episode 8",
        "description": "Prison Break Season 5 Episode 8, Agasobanuye by JUNIOR.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/siq24rlkm26w1ek/Prison+Break+S05+Ep8+Mp4.mp4/file"
      },
      {
        "id": "821",
        "episodeNumber": 9,
        "title": "PRISON BREAK S05 - Episode 9",
        "description": "Prison Break Season 5 Episode 9, Agasobanuye by JUNIOR.",
        "streamUrl": "https://hgcloud.to/nybxlmde8qf8",
        "downloadUrl": "https://www.mediafire.com/file/zjxsxpqhiaxumtg/Prison+Break+S05+Ep9+Final+Mp4.mp4/file"
      }
    ],
  },
{
  id: "80",
  title: "BERLIN SEASON 2",
  slug: "berlin-season-2",
  year: "",
  rating: "N/A",
  image: "berlin.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Berlin Season 2 follows Berlin and his crew through another heist, presented in Agasobanuye by ROCK KIMOMO.",
  language: "Spanish",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "822",
        "episodeNumber": 1,
        "title": "BERLIN S02 - Episode 1",
        "description": "Berlin Season 2 Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/nhseilafyghs",
        "downloadUrl": "https://www.mediafire.com/file/fh5b6ju5ijr9oc5/BERLIN_S02E1.mp4/file"
      },
      {
        "id": "823",
        "episodeNumber": 2,
        "title": "BERLIN S02 - Episode 2",
        "description": "Berlin Season 2 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/boixaav1b1b8",
        "downloadUrl": "https://www.mediafire.com/file/714r38to3q18v5j/BERLIN_S02E2.mp4/file"
      },
      {
        "id": "824",
        "episodeNumber": 2,
        "title": "BERLIN S02 - Episode 2B",
        "description": "Berlin Season 2 Episode 2B, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/8ojpwzi4t78d",
        "downloadUrl": "https://www.mediafire.com/file/ccp1efotrxouzfm/BERLIN_S02E2B.mp4/file"
      },
      {
        "id": "825",
        "episodeNumber": 3,
        "title": "BERLIN S02 - Episode 3",
        "description": "Berlin Season 2 Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/vmhp92imog6r",
        "downloadUrl": "https://www.mediafire.com/file/q1ld03jr8fo6awn/BERLIN_S02E03.mp4/file"
      },
      {
        "id": "826",
        "episodeNumber": 4,
        "title": "BERLIN S02 - Episode 4",
        "description": "Berlin Season 2 Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/sy9sq3fxobxm",
        "downloadUrl": "https://www.mediafire.com/file/fbgvztb3cquyy6b/BERLIN_S02E04.mp4/file"
      }
    ],
  },
{
  id: "81",
  title: "ONE PIECE SEASON 2",
  slug: "one-piece-season-2",
  year: "2026",
  rating: "N/A",
  image: "one-piece.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "One Piece Season 2 follows the Straw Hat Pirates on their next adventures, presented in Agasobanuye by ROCK KIMOMO.",
  language: "Japanese",
  genres: ["Action", "Adventure", "Fantasy"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "827",
        "episodeNumber": 1,
        "title": "ONE PIECE S02 - Episode 1",
        "description": "One Piece Season 2 Episode 1, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/58gwq1sxjus9",
        "downloadUrl": "https://www.mediafire.com/file/k6mdjs52oblxwgn/ONE+PIECE+S2+EP1.mp4/file"
      },
      {
        "id": "828",
        "episodeNumber": 2,
        "title": "ONE PIECE S02 - Episode 2",
        "description": "One Piece Season 2 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/ovw2ztj4b983",
        "downloadUrl": "https://www.mediafire.com/file/8prfr6gn4ojah14/ONE+PIECE+S2+EP2.mp4/file"
      },
      {
        "id": "829",
        "episodeNumber": 3,
        "title": "ONE PIECE S02 - Episode 3",
        "description": "One Piece Season 2 Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/dwj0thvor7bh",
        "downloadUrl": "https://www.mediafire.com/file/w9l5yhqn5h8z2ic/ONE+PIECE+S2+EP3.mp4/file"
      },
      {
        "id": "830",
        "episodeNumber": 4,
        "title": "ONE PIECE S02 - Episode 4",
        "description": "One Piece Season 2 Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/0g4xmx0vvqp1",
        "downloadUrl": "https://www.mediafire.com/file/6aeg0egz64dtp6n/ONE+PIECE+S2+EP4.mp4/file"
      },
      {
        "id": "831",
        "episodeNumber": 5,
        "title": "ONE PIECE S02 - Episode 5",
        "description": "One Piece Season 2 Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6ekmry56ymsqdpe/ONE+PIECE+SE+EP5.mp4/file"
      },
      {
        "id": "832",
        "episodeNumber": 6,
        "title": "ONE PIECE S02 - Episode 6",
        "description": "One Piece Season 2 Episode 6, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/0b3e791ikivc",
        "downloadUrl": "https://www.mediafire.com/file/i4ncseevpe677w3/ONE+PIECE+SE+EP6.mp4/file"
      },
      {
        "id": "833",
        "episodeNumber": 7,
        "title": "ONE PIECE S02 - Episode 7",
        "description": "One Piece Season 2 Episode 7, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/7v1oiqdxsr0b",
        "downloadUrl": "https://www.mediafire.com/file/f53hgpsmmeuurtd/ONE+PIECE+SE+EP7.mp4/file"
      },
      {
        "id": "834",
        "episodeNumber": 8,
        "title": "ONE PIECE S02 - Episode 8",
        "description": "One Piece Season 2 Episode 8, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://hgcloud.to/ij0frd0c9rx7",
        "downloadUrl": "https://www.mediafire.com/file/b2d8draimah6ken/One+Piece+S2+Ep8+Final+.mp4/file"
      }
    ],
  },
{
  id: "82",
  title: "LUPIN SEASON 1",
  slug: "lupin-season-1",
  year: "2021",
  rating: "N/A",
  image: "lupin1.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Lupin Season 1 is a French mystery thriller following Assane Diop, a clever man inspired by the adventures of Arsène Lupin. Presented in Agasobanuye.",
  language: "French",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "891",
        "episodeNumber": 1,
        "title": "LUPIN S01 - Episode 1A",
        "description": "Lupin Season 1 Episode 1A, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1rMQ-t4Q763Dw4qCLWoQ0QmZiP5RNbIBf/view?usp=sharing",
        "downloadUrl": "https://www.mediafire.com/file/lnsov32eye6r16f/Lupin_S01_Ep_01_A.mp4/file"
      },
      {
        "id": "892",
        "episodeNumber": 1,
        "title": "LUPIN S01 - Episode 1B",
        "description": "Lupin Season 1 Episode 1B, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "https://drive.google.com/file/d/1kh_siXXDfuc-X_QWBenu0OoyKqsJhDeL/view?usp=sharing",
        "downloadUrl": "https://www.mediafire.com/file/fkjfbkoekvzvzm2/Lupin_S01_Ep_01_B.mp4/file"
      },
      {
        "id": "893",
        "episodeNumber": 2,
        "title": "LUPIN S01 - Episode 2",
        "description": "Lupin Season 1 Episode 2, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g30pyff9ztnkabe/Lupin_S01_E02.mp4/file"
      },
      {
        "id": "894",
        "episodeNumber": 3,
        "title": "LUPIN S01 - Episode 3",
        "description": "Lupin Season 1 Episode 3, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m69rh7l5o4n8zf4/Lupin_S01_E03.mp4/file"
      },
      {
        "id": "895",
        "episodeNumber": 4,
        "title": "LUPIN S01 - Episode 4",
        "description": "Lupin Season 1 Episode 4, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5dyf380v7zprtk2/Lupin_S01_E04.mp4/file"
      },
      {
        "id": "896",
        "episodeNumber": 5,
        "title": "LUPIN S01 - Episode 5",
        "description": "Lupin Season 1 Episode 5, Agasobanuye by ROCK KIMOMO.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bpe9x2g3gbxq0py/Lupin_S01_E05_%2528Final%2529.mp4/file"
      }
    ],
  },
{
  id: "83",
  title: "BEAUTY IN BLACK SEASON 1",
  slug: "beauty-in-black-season-1",
  year: "2024",
  rating: "N/A",
  image: "beauty-in-black1.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Beauty in Black Season 1 is a drama series presented in Agasobanuye by Rock Kimomo.",
  language: "English",
  genres: ["Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "897",
        "episodeNumber": 1,
        "title": "BEAUTY IN BLACK - Episode 1",
        "description": "Beauty in Black Episode 1, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/pzd8cqzir8ei",
        "downloadUrl": "https://www.mediafire.com/file/hc7wny8jnva6d12/BACK_AND_BEAUTY_S01E01.mp4/file"
      },
      {
        "id": "898",
        "episodeNumber": 2,
        "title": "BEAUTY IN BLACK - Episode 2 Part A",
        "description": "Beauty in Black Episode 2 Part A, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/52dt9bl31b7n",
        "downloadUrl": "https://www.mediafire.com/file/n2hvxnf8ag19yv1/BEAUTY_IN_BLACK_E02_A.mp4/file"
      },
      {
        "id": "899",
        "episodeNumber": 2,
        "title": "BEAUTY IN BLACK - Episode 2 Part B",
        "description": "Beauty in Black Episode 2 Part B, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/6ug9kpdi595q",
        "downloadUrl": "https://www.mediafire.com/file/dwwh9aq16ayymu2/BEAUTY_IN_BLACK_E02_B..mp4/file"
      },
      {
        "id": "900",
        "episodeNumber": 3,
        "title": "BEAUTY IN BLACK - Episode 3",
        "description": "Beauty in Black Episode 3, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://cybervynx.com/nnyprr8w7cqj",
        "downloadUrl": "https://www.mediafire.com/file/31sti4r1kph0fhd/BEAUTY+IN+BLACK+S01E03.mp4/file"
      },
      {
        "id": "901",
        "episodeNumber": 4,
        "title": "BEAUTY IN BLACK - Episode 4",
        "description": "Beauty in Black Episode 4, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/cxpw330y2ud6",
        "downloadUrl": "https://www.mediafire.com/file/xv227cssb3g55bs/BEAUTY_IN_BLACK_S01E4.mp4/file"
      },
      {
        "id": "902",
        "episodeNumber": 5,
        "title": "BEAUTY IN BLACK - Episode 5",
        "description": "Beauty in Black Episode 5, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/womzdgvbdygr",
        "downloadUrl": "https://www.mediafire.com/file/7rksvugw33tv6tz/BEAUTY_IN_BLACK_S01E05.mp4/file"
      },
      {
        "id": "903",
        "episodeNumber": 6,
        "title": "BEAUTY IN BLACK - Episode 6",
        "description": "Beauty in Black Episode 6, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/hdy35j4vm5xj",
        "downloadUrl": "https://www.mediafire.com/file/n90it9zpu9cbkly/BEAUTY_IN_BLACK_S01E06.mp4/file"
      },
      {
        "id": "904",
        "episodeNumber": 7,
        "title": "BEAUTY IN BLACK - Episode 7",
        "description": "Beauty in Black Episode 7, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/db7tfmnbqh7b",
        "downloadUrl": "https://www.mediafire.com/file/ugoeqywapisf0v1/BEAUTY_IN_BLACK_S01E07.mp4/file"
      },
      {
        "id": "905",
        "episodeNumber": 8,
        "title": "BEAUTY IN BLACK - Episode 8",
        "description": "Beauty in Black Episode 8, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lrhv7v1ewzqn1vt/BEAUTY_IN_BLACK_S01E08.mp4/file"
      },
      {
        "id": "906",
        "episodeNumber": 9,
        "title": "BEAUTY IN BLACK - Episode 9",
        "description": "Beauty in Black Episode 9, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/icy0alg0r4yp8pp/BEAUTY_IN_THE_BLACK_E09.mp4/file"
      },
      {
        "id": "907",
        "episodeNumber": 10,
        "title": "BEAUTY IN BLACK - Episode 10",
        "description": "Beauty in Black Episode 10, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g04d2yaf19kfxrs/BACK_AND_BEAUTY_S01EP10.mp4/file"
      },
      {
        "id": "908",
        "episodeNumber": 11,
        "title": "BEAUTY IN BLACK - Episode 11",
        "description": "Beauty in Black Episode 11, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2wvs5dg5zc0075y/BEAUTY_IN_BLACK_E011.mp4/file"
      },
      {
        "id": "909",
        "episodeNumber": 12,
        "title": "BEAUTY IN BLACK - Episode 12",
        "description": "Beauty in Black Episode 12, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hi5m6dsob41bpcd/BEAUTY_IN_BLACK_E12.mp4/file"
      },
      {
        "id": "910",
        "episodeNumber": 13,
        "title": "BEAUTY IN BLACK - Episode 13",
        "description": "Beauty in Black Episode 13, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yrfypzwexxk72vw/BEAUTY_IN_BLACK_E13.mp4/file"
      },
      {
        "id": "911",
        "episodeNumber": 14,
        "title": "BEAUTY IN BLACK - Episode 14",
        "description": "Beauty in Black Episode 14, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bqht40whgydtokz/BEAUTY_IN_BLACK_S01E14.mp4/file"
      },
      {
        "id": "912",
        "episodeNumber": 15,
        "title": "BEAUTY IN BLACK - Episode 15",
        "description": "Beauty in Black Episode 15, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0lmgbraadcsoqkj/BEAUTY_IN_BLACK_EP15.mp4/file"
      },
      {
        "id": "913",
        "episodeNumber": 16,
        "title": "BEAUTY IN BLACK - Episode 16",
        "description": "Beauty in Black Episode 16, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fiagoxq0y4j6i1y/BEAUTY_IN_BLACK_E016.mp4/file"
      }
    ],
  },
{
  id: "84",
  title: "OUTER BANKS SEASON 1",
  slug: "outer-banks-season-1",
  year: "2020",
  rating: "N/A",
  image: "outer-banks1.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Outer Banks Season 1 follows teenagers searching for treasure while uncovering secrets and rivalries.",
  language: "English",
  genres: ["Action", "Adventure", "Crime", "Drama", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "915",
        "episodeNumber": 1,
        "title": "OUTER BANKS SEASON 1 - Episode 1",
        "description": "Outer Banks Season 1 Episode 1, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://drive.google.com/file/d/1b_ky48OERKk8FuXBR5wBljMyTMg9nGcK/view?usp=sharing",
        "downloadUrl": "https://www.mediafire.com/file/amlhq1v99puo5p0/Outer+Banks+S01E01.mp4/file"
      },
      {
        "id": "916",
        "episodeNumber": 2,
        "title": "OUTER BANKS SEASON 1 - Episode 2",
        "description": "Outer Banks Season 1 Episode 2, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://drive.google.com/file/d/1oA1JYK3DgCtbK6sYW-OoxeWx09DAeZpZ/view?usp=sharing",
        "downloadUrl": "https://www.mediafire.com/file/8kdxgc11bt8a0gi/Outer+Banks+S01E02.mp4/file"
      },
      {
        "id": "917",
        "episodeNumber": 3,
        "title": "OUTER BANKS SEASON 1 - Episode 3",
        "description": "Outer Banks Season 1 Episode 3, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ufwnemkxzo2bakr/Outer+Banks+S01+E03.mp4/file"
      },
      {
        "id": "918",
        "episodeNumber": 4,
        "title": "OUTER BANKS SEASON 1 - Episode 4",
        "description": "Outer Banks Season 1 Episode 4, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dt4y8tdeh8hziy6/Outer_Banks_S01E04.mp4/file"
      },
      {
        "id": "919",
        "episodeNumber": 5,
        "title": "OUTER BANKS SEASON 1 - Episode 5",
        "description": "Outer Banks Season 1 Episode 5, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kbfx3q54gd0voud/Outer_Banks_S01E05.mp4/file"
      },
      {
        "id": "920",
        "episodeNumber": 6,
        "title": "OUTER BANKS SEASON 1 - Episode 6",
        "description": "Outer Banks Season 1 Episode 6, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5rntv6c8arsxbu8/Outer_Banks_S01E06.mp4/file"
      },
      {
        "id": "921",
        "episodeNumber": 7,
        "title": "OUTER BANKS SEASON 1 - Episode 7",
        "description": "Outer Banks Season 1 Episode 7, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yzi062ows84p3yd/Outer_Banks_S01E07.mp4/file"
      },
      {
        "id": "922",
        "episodeNumber": 8,
        "title": "OUTER BANKS SEASON 1 - Episode 8",
        "description": "Outer Banks Season 1 Episode 8, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://drive.google.com/file/d/1YPFYgqIhzGAxJ8MltN4Jxk5C06maVqhr/view?usp=sharing",
        "downloadUrl": ""
      },
      {
        "id": "923",
        "episodeNumber": 9,
        "title": "OUTER BANKS SEASON 1 - Episode 9",
        "description": "Outer Banks Season 1 Episode 9, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fg26uv1avd9rhl0/Outer_Banks_S01E09.mp4/file"
      },
      {
        "id": "924",
        "episodeNumber": 10,
        "title": "OUTER BANKS SEASON 1 - Episode 10",
        "description": "Outer Banks Season 1 Episode 10, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9sbn3oyodawj9li/Outer_Banks_S01E10_final_.mp4/file"
      }
    ],
  },
{
  id: "85",
  title: "OUTER BANKS SEASON 2",
  slug: "outer-banks-season-2",
  year: "2021",
  rating: "N/A",
  image: "outer-banks2.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Outer Banks Season 2 continues the Pogues' search for treasure amid danger and rivalries.",
  language: "English",
  genres: ["Action", "Adventure", "Crime", "Drama", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "925",
        "episodeNumber": 1,
        "title": "OUTER BANKS SEASON 2 - Episode 1",
        "description": "Outer Banks Season 2 Episode 1, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/r8pg2tgx4fuj",
        "downloadUrl": "https://www.mediafire.com/file/zn3hf9b0gfue23c/Outer_Banks_S02E01.mp4/file"
      },
      {
        "id": "926",
        "episodeNumber": 2,
        "title": "OUTER BANKS SEASON 2 - Episode 2",
        "description": "Outer Banks Season 2 Episode 2, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/f8b95nwvghfs",
        "downloadUrl": "https://www.mediafire.com/file/pql15a9cd73s8ie/Outer_Banks_S02E02.mp4/file"
      },
      {
        "id": "927",
        "episodeNumber": 3,
        "title": "OUTER BANKS SEASON 2 - Episode 3",
        "description": "Outer Banks Season 2 Episode 3, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/374hwu08qkm4",
        "downloadUrl": "https://www.mediafire.com/file/wqqcrmmt5m3b5zo/Outer_Banks_S02E03.mp4/file"
      },
      {
        "id": "928",
        "episodeNumber": 4,
        "title": "OUTER BANKS SEASON 2 - Episode 4",
        "description": "Outer Banks Season 2 Episode 4, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gty1fofu9rkyc8e/Outer_Banks_S02E04.mp4/file"
      },
      {
        "id": "929",
        "episodeNumber": 5,
        "title": "OUTER BANKS SEASON 2 - Episode 5",
        "description": "Outer Banks Season 2 Episode 5, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/efsyo2xu6v0p8ep/Outer_Banks_SO2E05.mp4/file"
      },
      {
        "id": "930",
        "episodeNumber": 6,
        "title": "OUTER BANKS SEASON 2 - Episode 6",
        "description": "Outer Banks Season 2 Episode 6, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/inp70312x8x1t4a/Outer_Banks_S02_E06.mp4/file"
      },
      {
        "id": "931",
        "episodeNumber": 7,
        "title": "OUTER BANKS SEASON 2 - Episode 7",
        "description": "Outer Banks Season 2 Episode 7, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uc3uqb76qi8c8ty/Outer_Banks_S02_E07.mp4/file"
      },
      {
        "id": "932",
        "episodeNumber": 8,
        "title": "OUTER BANKS SEASON 2 - Episode 8",
        "description": "Outer Banks Season 2 Episode 8, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2uv5mfsf6fva8y1/Outer_Banks_S02E08.mp4/file"
      },
      {
        "id": "933",
        "episodeNumber": 9,
        "title": "OUTER BANKS SEASON 2 - Episode 9",
        "description": "Outer Banks Season 2 Episode 9, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/19ya7g5vgblgf7a/Outer_Banks_S02E09.mp4/file"
      },
      {
        "id": "934",
        "episodeNumber": 10,
        "title": "OUTER BANKS SEASON 2 - Episode 10",
        "description": "Outer Banks Season 2 Episode 10, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l98swcu2kk8yujk/Outer_Banks_S02E10_Final.mp4/file"
      }
    ],
  },
{
  id: "86",
  title: "OUTER BANKS SEASON 4",
  slug: "outer-banks-season-4",
  year: "2024",
  rating: "N/A",
  image: "outer-banks.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description:
    "Outer Banks Season 4 continues the Pogues' treasure hunt. Episodes 1–6 and 8–10 are provided.",
  language: "English",
  genres: ["Action", "Adventure", "Crime", "Drama", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "935",
        "episodeNumber": 1,
        "title": "OUTER BANKS SEASON 4 - Episode 1",
        "description": "Outer Banks Season 4 Episode 1, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/f10rmbg9bm0z",
        "downloadUrl": "https://www.mediafire.com/file/8aocg4bgdqiao4m/Outer_Banks_S4_Ep1_Oshakurfilms.mp4/file"
      },
      {
        "id": "936",
        "episodeNumber": 2,
        "title": "OUTER BANKS SEASON 4 - Episode 2",
        "description": "Outer Banks Season 4 Episode 2, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/ux4xamdsdkc8",
        "downloadUrl": "https://www.mediafire.com/file/wndni48y45aprsc/Outer_Banks_S4_Ep2_Oshakurfilms.Com.mp4/file"
      },
      {
        "id": "937",
        "episodeNumber": 3,
        "title": "OUTER BANKS SEASON 4 - Episode 3",
        "description": "Outer Banks Season 4 Episode 3, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hlswish.com/ysr5u051d1w1",
        "downloadUrl": "https://www.mediafire.com/file/47grn9fl2c4zjk9/Outer_Bank_Ep3_Oshakurfilms.Com.mp4/file"
      },
      {
        "id": "938",
        "episodeNumber": 4,
        "title": "OUTER BANKS SEASON 4 - Episode 4",
        "description": "Outer Banks Season 4 Episode 4, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/awozgpvnzwwsvey/Outer_Banks_S4_Ep4_Oshakurfilms.mp4/file"
      },
      {
        "id": "939",
        "episodeNumber": 5,
        "title": "OUTER BANKS SEASON 4 - Episode 5",
        "description": "Outer Banks Season 4 Episode 5, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qf3zz9l0ldtu7sc/Outer_Banks_S4_Ep5_Final_Oshakurfilms.mp4/file"
      },
      {
        "id": "940",
        "episodeNumber": 6,
        "title": "OUTER BANKS SEASON 4 - Episode 6",
        "description": "Outer Banks Season 4 Episode 6, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mojpw37nm5mdtjj/Outer_Banks_S4_E6.mp4/file"
      },
      {
        "id": "941",
        "episodeNumber": 8,
        "title": "OUTER BANKS SEASON 4 - Episode 8",
        "description": "Outer Banks Season 4 Episode 8, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9f6siolpu5d1kkf/Outer_Bank_S4_Ep8.mp4/file"
      },
      {
        "id": "942",
        "episodeNumber": 9,
        "title": "OUTER BANKS SEASON 4 - Episode 9",
        "description": "Outer Banks Season 4 Episode 9, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qaa2892pzw9rp0f/OUTER+BANKS+S04EP09.mp4/file"
      },
      {
        "id": "943",
        "episodeNumber": 10,
        "title": "OUTER BANKS SEASON 4 - Episode 10",
        "description": "Outer Banks Season 4 Episode 10, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3f50g78t7zwph45/OUTER+BANKS+S04EP10+final.mp4/file"
      }
    ],
  },
{
  id: "87",
  title: "BLADE MAN",
  slug: "blade-man",
  year: "2025",
  rating: "N/A",
  image: "blade-man.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description: "Blade Man is an action series presented in Agasobanuye by Rock Kimomo.",
  language: "Chinese",
  genres: ["Action", "Drama", "Romance"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "944",
        "episodeNumber": 1,
        "title": "BLADE MAN - Episode 1",
        "description": "BLADE MAN Episode 1, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/l9c7h1pbxy98",
        "downloadUrl": "https://www.mediafire.com/file/1rk282mss9r2e19/Blade_Man_Ep1_Hd.mp4/file"
      },
      {
        "id": "945",
        "episodeNumber": 2,
        "title": "BLADE MAN - Episode 2",
        "description": "BLADE MAN Episode 2, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/8fy9ilke9nez",
        "downloadUrl": "https://www.mediafire.com/file/4ts0xvd84ye5hvx/Blade+Man+Ep2+Hd.mp4/file"
      },
      {
        "id": "946",
        "episodeNumber": 3,
        "title": "BLADE MAN - Episode 3",
        "description": "BLADE MAN Episode 3, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/rnvg2a5gbfu7",
        "downloadUrl": "https://www.mediafire.com/file/njfcy3363z33qir/Blade+Man+Ep3+Hd.mp4/file"
      },
      {
        "id": "947",
        "episodeNumber": 4,
        "title": "BLADE MAN - Episode 4",
        "description": "BLADE MAN Episode 4, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/5bqlwwbe0x09",
        "downloadUrl": "https://www.mediafire.com/file/2lkrsqxofb04ylh/Blade+Man+Ep4+Hd.mp4/file"
      },
      {
        "id": "948",
        "episodeNumber": 5,
        "title": "BLADE MAN - Episode 5",
        "description": "BLADE MAN Episode 5, Agasobanuye by Rock Kimomo.",
        "streamUrl": "https://hgcloud.to/rsw6xc0r4t2d",
        "downloadUrl": "https://www.mediafire.com/file/pawvhzn2inmutyl/Blade+Man+S1+Ep5.mp4/file"
      },
      {
        "id": "949",
        "episodeNumber": 6,
        "title": "BLADE MAN - Episode 6",
        "description": "BLADE MAN Episode 6, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/i0sbfy273x68dg8/Blade+Man+Ep6+Hd.mp4/file"
      },
      {
        "id": "950",
        "episodeNumber": 7,
        "title": "BLADE MAN - Episode 7",
        "description": "BLADE MAN Episode 7, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lzecqogedxkw5dy/Blade+Man+Ep7+Hd.mp4/file"
      },
      {
        "id": "951",
        "episodeNumber": 8,
        "title": "BLADE MAN - Episode 8",
        "description": "BLADE MAN Episode 8, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kd6pb983qjvpdha/Blade+Man+Ep8+Hd.mp4/file"
      },
      {
        "id": "952",
        "episodeNumber": 9,
        "title": "BLADE MAN - Episode 9",
        "description": "BLADE MAN Episode 9, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/v2wt3ze1cc4lob4/Blade+Man+Ep9+Hd.mp4/file"
      },
      {
        "id": "953",
        "episodeNumber": 10,
        "title": "BLADE MAN - Episode 10",
        "description": "BLADE MAN Episode 10, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/s7qn8jmfclihar9/Blade+Man+Ep10+Hd.mp4/file"
      },
      {
        "id": "954",
        "episodeNumber": 11,
        "title": "BLADE MAN - Episode 11",
        "description": "BLADE MAN Episode 11, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ou7utjrycfe34xy/Bladesman_Ep_11_Hd_Mp4.mp4/file"
      },
      {
        "id": "955",
        "episodeNumber": 12,
        "title": "BLADE MAN - Episode 12",
        "description": "BLADE MAN Episode 12, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/68ao21daoxmctl0/Bladesman_Ep12_Hd_Mp4.mp4/file"
      },
      {
        "id": "956",
        "episodeNumber": 13,
        "title": "BLADE MAN - Episode 13",
        "description": "BLADE MAN Episode 13, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nx8zhd1ga4hx1wh/Bladesman_Ep13_Hd_Mp4.mp4/file"
      },
      {
        "id": "957",
        "episodeNumber": 14,
        "title": "BLADE MAN - Episode 14",
        "description": "BLADE MAN Episode 14, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yz8f6y7koaqat3o/Bladesman_Ep14_Hd_Mp4.mp4/file"
      },
      {
        "id": "958",
        "episodeNumber": 15,
        "title": "BLADE MAN - Episode 15",
        "description": "BLADE MAN Episode 15, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/niccol4jh80mag4/Bladesman_Ep15_Hd_Mp4.mp4/file"
      },
      {
        "id": "959",
        "episodeNumber": 16,
        "title": "BLADE MAN - Episode 16",
        "description": "BLADE MAN Episode 16, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sz6kxd8dl4nqjmw/Bladesman_Ep16_Hd_Mp4.mp4/file"
      },
      {
        "id": "960",
        "episodeNumber": 17,
        "title": "BLADE MAN - Episode 17",
        "description": "BLADE MAN Episode 17, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/madj9hdoofez29d/Bladesman_Ep17_Hd_Mp4.mp4/file"
      },
      {
        "id": "961",
        "episodeNumber": 18,
        "title": "BLADE MAN - Episode 18",
        "description": "BLADE MAN Episode 18, Agasobanuye by Rock Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b9lmgrkz5aa2hsc/Bladesman_Ep18_Final_Hd_Mp4.mp4/file"
      }
    ],
  },

{
  id: "88",
  title: "HIERARCHY",
  slug: "hierarchy",
  year: "2025",
  rating: "N/A",
  image: "hierarchy.jpg",
  isFeatured: false,
  createdAt: "2026-10-26",
  description: "Hierarchy is a Korean drama series presented in Agasobanuye.",
  language: "Korean",
  genres: ["Drama", "Romance", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "962",
        "episodeNumber": 1,
        "title": "HIERARCHY - Season 1 Episode 1",
        "description": "HIERARCHY Season 1 Episode 1, Agasobanuye.",
        "streamUrl": "https://drive.google.com/file/d/1-dhcWo2QAsDHEp1P79lvAlP8K5x08Jax/view?usp=drive_link",
        "downloadUrl": "https://www.mediafire.com/file/h5dnwzbj3ivj7aw/HEIRACHY+S01+E01.mp4/file"
      },
      {
        "id": "963",
        "episodeNumber": 2,
        "title": "HIERARCHY - Season 1 Episode 2",
        "description": "HIERARCHY Season 1 Episode 2, Agasobanuye.",
        "streamUrl": "https://playerwish.com/zffjvz9csf43",
        "downloadUrl": "https://www.mediafire.com/file/mpa0o25jzcyyvyh/HEIRACHY_S01E02.mp4/file"
      },
      {
        "id": "964",
        "episodeNumber": 3,
        "title": "HIERARCHY - Season 1 Episode 3",
        "description": "HIERARCHY Season 1 Episode 3, Agasobanuye.",
        "streamUrl": "https://playerwish.com/2dukwvc7qmvn",
        "downloadUrl": "https://www.mediafire.com/file/toj0tfq2iuwyd0a/HEIRACHY_S01E03.mp4/file"
      },
      {
        "id": "965",
        "episodeNumber": 4,
        "title": "HIERARCHY - Season 1 Episode 4",
        "description": "HIERARCHY Season 1 Episode 4, Agasobanuye.",
        "streamUrl": "https://playerwish.com/00f20u7b720c",
        "downloadUrl": "https://www.mediafire.com/file/8u44xuh5v0tzi1l/HEIRACHY_S01F04.mp4/file"
      },
      {
        "id": "966",
        "episodeNumber": 5,
        "title": "HIERARCHY - Season 1 Episode 5",
        "description": "HIERARCHY Season 1 Episode 5, Agasobanuye.",
        "streamUrl": "https://hgcloud.to/wy6zyo9tt0nv",
        "downloadUrl": "https://www.mediafire.com/file/vsfadkdyxcdos1v/HEIRACHY_S01E05.mp4/file"
      },
      {
        "id": "967",
        "episodeNumber": 6,
        "title": "HIERARCHY - Season 1 Episode 6",
        "description": "HIERARCHY Season 1 Episode 6, Agasobanuye.",
        "streamUrl": "https://playerwish.com/z69ft82op50k",
        "downloadUrl": "https://www.mediafire.com/file/vguwxj2smwx9jep/HEIRACHY_S01E06.mp4/file"
      },
      {
        "id": "968",
        "episodeNumber": 7,
        "title": "HIERARCHY - Season 1 Episode 7 (Final)",
        "description": "HIERARCHY Season 1 Episode 7, final episode, Agasobanuye.",
        "streamUrl": "https://drive.google.com/file/d/18n4lfLfUKdgOjkyyeK02JyIuKSRYfW6K/view?usp=sharing",
        "downloadUrl": "https://www.mediafire.com/file/d6qbpp1sit2gqae/HEIRACHY_S01_EP7FINAL.mp4/file"
      }
    ],
  },

{
  id: "89",
  title: "BUTTERFLY",
  slug: "butterfly",
  year: "2024",
  rating: "N/A",
  image: "butterfly.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Butterfly Season 1 is a series presented in Agasobanuye, with six episodes.",
  language: "Korean",
  genres: ["Drama", "Action", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "969",
        "episodeNumber": 1,
        "title": "BUTTERFLY - Season 1 Episode 1",
        "description": "BUTTERFLY Season 1 Episode 1, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hpm379ni29hs6i1/Butterfly+S1+E1.mp4/file"
      },
      {
        "id": "970",
        "episodeNumber": 2,
        "title": "BUTTERFLY - Season 1 Episode 2",
        "description": "BUTTERFLY Season 1 Episode 2, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xq913mlzv2bywo9/Butterfly+S1+E2.mp4/file"
      },
      {
        "id": "971",
        "episodeNumber": 3,
        "title": "BUTTERFLY - Season 1 Episode 3",
        "description": "BUTTERFLY Season 1 Episode 3, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4um6i5mkzjn7uw2/Butterfly+S1+E3.mp4/file"
      },
      {
        "id": "972",
        "episodeNumber": 4,
        "title": "BUTTERFLY - Season 1 Episode 4",
        "description": "BUTTERFLY Season 1 Episode 4, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wdsa5d7bxgsf7k6/Butterfly+S1+E4.mp4/file"
      },
      {
        "id": "973",
        "episodeNumber": 5,
        "title": "BUTTERFLY - Season 1 Episode 5",
        "description": "BUTTERFLY Season 1 Episode 5, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/627vpp50nmz7srv/Butterfly_S1_E5.mp4/file"
      },
      {
        "id": "974",
        "episodeNumber": 6,
        "title": "BUTTERFLY - Season 1 Episode 6 (Final)",
        "description": "BUTTERFLY Season 1 Episode 6, final episode, Agasobanuye.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ss648rtqmjkegiv/Butterfly_S1_E6_Final.mp4/file"
      }
    ],
  },
{
  id: "90",
  title: "YU YU HAKUSHO",
  slug: "yu-yu-hakusho",
  year: "N/A",
  rating: "N/A",
  image: "yu-yu-hakusho.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Yu Yu Hakusho is a series shared by Skov. Open the MediaFire folder to access the available episodes.",
  language: "Japanese",
  genres: ["Action", "Adventure", "Fantasy"],
  explainer: "SKOV",

    episodes: [
      {
        "id": "1045",
        "episodeNumber": 1,
        "title": "YU YU HAKUSHO - Episode 1-5",
        "description": "YU YU HAKUSHO Episode 1-5, Agasobanuye by Skov.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/sueudywt2g8hs/YU+YU+HAKUSO"
      }
    ],
  },
{
  id: "91",
  title: "RED SWAN",
  slug: "red-swan",
  year: "2024",
  rating: "N/A",
  image: "red-swan.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Red Swan is a drama series presented in Agasobanuye by Sankara, with ten episodes.",
  language: "Korean",
  genres: ["Drama", "Romance", "Thriller"],
  explainer: "SANKARA",

    episodes: [
      {
        "id": "975",
        "episodeNumber": 1,
        "title": "RED SWAN - Episode 1",
        "description": "RED SWAN Episode 1, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/z11r56xyyvgru7a/RED_SWAN_01.mp4/file"
      },
      {
        "id": "976",
        "episodeNumber": 2,
        "title": "RED SWAN - Episode 2",
        "description": "RED SWAN Episode 2, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/8mvjlp81jsouwcg/RED_SWAN_02.mp4/file"
      },
      {
        "id": "977",
        "episodeNumber": 3,
        "title": "RED SWAN - Episode 3",
        "description": "RED SWAN Episode 3, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/22dcbpr6x4khbj0/RED_SWAN_03.mp4/file"
      },
      {
        "id": "978",
        "episodeNumber": 4,
        "title": "RED SWAN - Episode 4",
        "description": "RED SWAN Episode 4, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/ug3n54kfrna7rcw/RED_SWAN_04.mp4/file"
      },
      {
        "id": "979",
        "episodeNumber": 5,
        "title": "RED SWAN - Episode 5",
        "description": "RED SWAN Episode 5, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r6zpcogbt4o161o/RED_SWAN_05.mp4/file"
      },
      {
        "id": "980",
        "episodeNumber": 6,
        "title": "RED SWAN - Episode 6",
        "description": "RED SWAN Episode 6, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/zszfsgkbp6ca8hk/RED_SWAN_06.mp4/file"
      },
      {
        "id": "981",
        "episodeNumber": 7,
        "title": "RED SWAN - Episode 7",
        "description": "RED SWAN Episode 7, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/7n4mpyopqmmolsh/RED_SWAN_07.mp4/file"
      },
      {
        "id": "982",
        "episodeNumber": 8,
        "title": "RED SWAN - Episode 8",
        "description": "RED SWAN Episode 8, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/bv1yjqdtgh922as/RED_SWAN_08.mp4/file"
      },
      {
        "id": "983",
        "episodeNumber": 9,
        "title": "RED SWAN - Episode 9",
        "description": "RED SWAN Episode 9, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/acxwzd3fgpyvtes/RED_SWAN_09.mp4/file"
      },
      {
        "id": "984",
        "episodeNumber": 10,
        "title": "RED SWAN - Episode 10 (Final)",
        "description": "RED SWAN Episode 10, final episode, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/zm24c1ron2ly5a4/RED_SWAN_10_FINAL.mp4/file"
      }
    ],
  },
{
  id: "92",
  title: "TRIADA",
  slug: "triada",
  year: "N/A",
  rating: "N/A",
  image: "triada.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Triada is a series presented in Agasobanuye by B the Great, with eight episodes.",
  language: "N/A",
  genres: ["Drama", "Mystery", "Thriller"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "985",
        "episodeNumber": 1,
        "title": "TRIADA - Episode 1",
        "description": "TRIADA Episode 1, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3gt76zhvgly4d02/Triada_ep1.mp4/file"
      },
      {
        "id": "986",
        "episodeNumber": 2,
        "title": "TRIADA - Episode 2",
        "description": "TRIADA Episode 2, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xbpaki9w39stqxm/TRIAD_2.mp4/file"
      },
      {
        "id": "987",
        "episodeNumber": 3,
        "title": "TRIADA - Episode 3",
        "description": "TRIADA Episode 3, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/826eom8g5ut6ash/Triada_ep3.mp4/file"
      },
      {
        "id": "988",
        "episodeNumber": 4,
        "title": "TRIADA - Episode 4",
        "description": "TRIADA Episode 4, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/91rtsbpse8vcjem/Triada_ep4.mp4/file"
      },
      {
        "id": "989",
        "episodeNumber": 5,
        "title": "TRIADA - Episode 5",
        "description": "TRIADA Episode 5, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5prr4a8on70hslf/Triada_ep5.mp4/file"
      },
      {
        "id": "990",
        "episodeNumber": 6,
        "title": "TRIADA - Episode 6",
        "description": "TRIADA Episode 6, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vofzc8l4vb4onmu/Triada_ep6.mp4/file"
      },
      {
        "id": "991",
        "episodeNumber": 7,
        "title": "TRIADA - Episode 7",
        "description": "TRIADA Episode 7, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3dn8emhb8av9o4j/Triada_ep7.mp4/file"
      },
      {
        "id": "992",
        "episodeNumber": 8,
        "title": "TRIADA - Episode 8 (Final)",
        "description": "TRIADA Episode 8, final episode, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5wh64okbqfinqqn/Triada_ep8_fainal.mp4/file"
      }
    ],
  },
{
  id: "93",
  title: "WANRU'S JOURNEY",
  slug: "wanrus-journey",
  year: "N/A",
  rating: "N/A",
  image: "wanrus-journey.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Wanru's Journey is a series presented in Agasobanuye by Junior Giti, with 24 episodes.",
  language: "Chinese",
  genres: ["Drama", "Romance", "Historical"],
  explainer: "JUNIOR GITI",

    episodes: [
      {
        "id": "993",
        "episodeNumber": 1,
        "title": "WANRU'S JOURNEY - Episode 1",
        "description": "WANRU'S JOURNEY Episode 1, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/kwdwptd4emvwc6w/Wanru%2527s_Journey_01.mp4/file"
      },
      {
        "id": "994",
        "episodeNumber": 2,
        "title": "WANRU'S JOURNEY - Episode 2",
        "description": "WANRU'S JOURNEY Episode 2, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/qzeuws8sqonxbd8/Wanru%2527s_Journey_02.mp4/file"
      },
      {
        "id": "995",
        "episodeNumber": 3,
        "title": "WANRU'S JOURNEY - Episode 3",
        "description": "WANRU'S JOURNEY Episode 3, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/kxck62lp5eq7slx/Wanru%2527s_Journey_03.mp4/file"
      },
      {
        "id": "996",
        "episodeNumber": 4,
        "title": "WANRU'S JOURNEY - Episode 4",
        "description": "WANRU'S JOURNEY Episode 4, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/fk6t2cdairx2rkv/Wanru%2527s_Journey_04.mp4/file"
      },
      {
        "id": "997",
        "episodeNumber": 5,
        "title": "WANRU'S JOURNEY - Episode 5",
        "description": "WANRU'S JOURNEY Episode 5, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/4n04kurjx921pfx/Wanru%2527s_Journey_05.mp4/file"
      },
      {
        "id": "998",
        "episodeNumber": 6,
        "title": "WANRU'S JOURNEY - Episode 6",
        "description": "WANRU'S JOURNEY Episode 6, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/g5kp4gv8dlc3pet/Wanru%2527s_Journey_06.mp4/file"
      },
      {
        "id": "999",
        "episodeNumber": 7,
        "title": "WANRU'S JOURNEY - Episode 7",
        "description": "WANRU'S JOURNEY Episode 7, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/lz2oxxa5sa43h4u/Wanru%2527s_Journey_07.mp4/file"
      },
      {
        "id": "1000",
        "episodeNumber": 8,
        "title": "WANRU'S JOURNEY - Episode 8",
        "description": "WANRU'S JOURNEY Episode 8, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/suyc2p9vcju7uw7/Wanru%2527s_Journey_08.mp4/file"
      },
      {
        "id": "1001",
        "episodeNumber": 9,
        "title": "WANRU'S JOURNEY - Episode 9",
        "description": "WANRU'S JOURNEY Episode 9, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/5z6megefdbt6640/Wanru%2527s_Journey_09.mp4/file"
      },
      {
        "id": "1002",
        "episodeNumber": 10,
        "title": "WANRU'S JOURNEY - Episode 10",
        "description": "WANRU'S JOURNEY Episode 10, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/uokvlay0jqkq5aw/Wanru%2527s_Journey_10.mp4/file"
      },
      {
        "id": "1003",
        "episodeNumber": 11,
        "title": "WANRU'S JOURNEY - Episode 11",
        "description": "WANRU'S JOURNEY Episode 11, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/cv7vfjiit2t9fpf/Wanru%2527s_Journey_11.mp4/file"
      },
      {
        "id": "1004",
        "episodeNumber": 12,
        "title": "WANRU'S JOURNEY - Episode 12",
        "description": "WANRU'S JOURNEY Episode 12, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/owu0iatepwn62t6/Wanru%2527s_Journey_12.mp4/file"
      },
      {
        "id": "1005",
        "episodeNumber": 13,
        "title": "WANRU'S JOURNEY - Episode 13",
        "description": "WANRU'S JOURNEY Episode 13, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/y2cyh01p1gwen7h/Wanru%2527s_Journey_13.mp4/file"
      },
      {
        "id": "1006",
        "episodeNumber": 14,
        "title": "WANRU'S JOURNEY - Episode 14",
        "description": "WANRU'S JOURNEY Episode 14, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/kg8su3o6brc7ca7/Wanru%2527s_Journey_14.mp4/file"
      },
      {
        "id": "1007",
        "episodeNumber": 15,
        "title": "WANRU'S JOURNEY - Episode 15",
        "description": "WANRU'S JOURNEY Episode 15, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/53n23hbahwgg9od/Wanru%2527s_Journey_15.mp4/file"
      },
      {
        "id": "1008",
        "episodeNumber": 16,
        "title": "WANRU'S JOURNEY - Episode 16",
        "description": "WANRU'S JOURNEY Episode 16, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/fiyvx63ocq5n4r2/Wanru%2527s_Journey_16.mp4/file"
      },
      {
        "id": "1009",
        "episodeNumber": 17,
        "title": "WANRU'S JOURNEY - Episode 17",
        "description": "WANRU'S JOURNEY Episode 17, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/d7tsmyb3ebl6vcf/Wanru%2527s_Journey_17.mp4/file"
      },
      {
        "id": "1010",
        "episodeNumber": 18,
        "title": "WANRU'S JOURNEY - Episode 18",
        "description": "WANRU'S JOURNEY Episode 18, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/f1ewtrrc76iws22/Wanru%2527s_Journey_18.mp4/file"
      },
      {
        "id": "1011",
        "episodeNumber": 19,
        "title": "WANRU'S JOURNEY - Episode 19",
        "description": "WANRU'S JOURNEY Episode 19, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/muu8c0kfkhuawj9/Wanru%2527s_Journey_19.mp4/file"
      },
      {
        "id": "1012",
        "episodeNumber": 20,
        "title": "WANRU'S JOURNEY - Episode 20",
        "description": "WANRU'S JOURNEY Episode 20, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/sem06rbk54cbxlw/Wanru%2527s_Journey_20.mp4/file"
      },
      {
        "id": "1013",
        "episodeNumber": 21,
        "title": "WANRU'S JOURNEY - Episode 21",
        "description": "WANRU'S JOURNEY Episode 21, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/gjxyurk68y922mp/Wanru%2527s_Journey_21.mp4/file"
      },
      {
        "id": "1014",
        "episodeNumber": 22,
        "title": "WANRU'S JOURNEY - Episode 22",
        "description": "WANRU'S JOURNEY Episode 22, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/4w5vodixjm90lqv/Wanru%2527s_Journey_22.mp4/file"
      },
      {
        "id": "1015",
        "episodeNumber": 23,
        "title": "WANRU'S JOURNEY - Episode 23",
        "description": "WANRU'S JOURNEY Episode 23, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/fmsckv4puehf6oi/Wanru%2527s_Journey_23.mp4/file"
      },
      {
        "id": "1016",
        "episodeNumber": 24,
        "title": "WANRU'S JOURNEY - Episode 24 (Final)",
        "description": "WANRU'S JOURNEY Episode 24, final episode, Agasobanuye by Junior Giti.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file_premium/mfwc7h52x6rt115/Wanru%2527s_Journey_24_Final.mp4/file"
      }
    ],
  },
{
  id: "94",
  title: "KING'S AFFECTION",
  slug: "kings-affection",
  year: "2021",
  rating: "N/A",
  image: "kings-affection.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "King's Affection is a series presented in Agasobanuye by B the Great. Episodes 2, 3, and 4 are currently listed.",
  language: "Korean",
  genres: ["Drama", "Romance", "Historical"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "1017",
        "episodeNumber": 2,
        "title": "KING'S AFFECTION - Episode 2",
        "description": "KING'S AFFECTION Episode 2, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6ocbpqassbrn09i/KINGSAFFECTION2.mp4/file"
      },
      {
        "id": "1018",
        "episodeNumber": 3,
        "title": "KING'S AFFECTION - Episode 3",
        "description": "KING'S AFFECTION Episode 3, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d2qxw8ejn3s4a39/KINGSAFFECTION3.mp4/file"
      },
      {
        "id": "1019",
        "episodeNumber": 4,
        "title": "KING'S AFFECTION - Episode 4",
        "description": "KING'S AFFECTION Episode 4, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7zrdduv99yvoel1/KINGSAFFECTION4.mp4/file"
      }
    ],
  },
{
  id: "95",
  title: "THE RING",
  slug: "the-ring",
  year: "N/A",
  rating: "N/A",
  image: "the-ring.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "The Ring is a series presented in Agasobanuye by Dylan Kabaka, with ten episodes.",
  language: "N/A",
  genres: ["Drama", "Mystery", "Thriller"],
  explainer: "DYLAN KABAKA",

    episodes: [
      {
        "id": "1020",
        "episodeNumber": 1,
        "title": "THE RING - Episode 1",
        "description": "THE RING Episode 1, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://drive.google.com/file/d/17mxE15gReOKvPDKRazioDt-6gTVSc6Eu/view"
      },
      {
        "id": "1021",
        "episodeNumber": 2,
        "title": "THE RING - Episode 2",
        "description": "THE RING Episode 2, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p82iidsfrd79nab/E_RING_EP_02.avi/file"
      },
      {
        "id": "1022",
        "episodeNumber": 3,
        "title": "THE RING - Episode 3",
        "description": "THE RING Episode 3, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/97xpj80t00as13l/E_RING_EP_03.avi/file"
      },
      {
        "id": "1023",
        "episodeNumber": 4,
        "title": "THE RING - Episode 4",
        "description": "THE RING Episode 4, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bnfrcul0abv4s2e/E_RING_EP_04.avi/file"
      },
      {
        "id": "1024",
        "episodeNumber": 5,
        "title": "THE RING - Episode 5",
        "description": "THE RING Episode 5, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nrb74de758t55l8/E_RING_EP_05.avi/file"
      },
      {
        "id": "1025",
        "episodeNumber": 6,
        "title": "THE RING - Episode 6",
        "description": "THE RING Episode 6, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uybxuusesksrfgl/E_RING_EP_06.avi/file"
      },
      {
        "id": "1026",
        "episodeNumber": 7,
        "title": "THE RING - Episode 7",
        "description": "THE RING Episode 7, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9tdb5w0g0r7utyb/E_RING_EP_07.avi/file"
      },
      {
        "id": "1027",
        "episodeNumber": 8,
        "title": "THE RING - Episode 8",
        "description": "THE RING Episode 8, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bcmbm97acqfi0s6/E_RING_EP_08.avi/file"
      },
      {
        "id": "1028",
        "episodeNumber": 9,
        "title": "THE RING - Episode 9",
        "description": "THE RING Episode 9, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/36yxppp55huk1x8/E_RING_EP_09.avi/file"
      },
      {
        "id": "1029",
        "episodeNumber": 10,
        "title": "THE RING - Episode 10 (Final)",
        "description": "THE RING Episode 10, final episode, Agasobanuye by Dylan Kabaka.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/u4ossk5aqshqb41/E_RING_EP_10final.avi/file"
      }
    ],
  },
{
  id: "96",
  title: "FROM",
  slug: "from",
  year: "2022",
  rating: "N/A",
  image: "from.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "From Season 1 is presented in Agasobanuye by ROCK KIMOMO, with ten episodes listed.",
  language: "English",
  genres: ["Horror", "Mystery", "Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1030",
        "episodeNumber": 1,
        "title": "FROM - Season 1 Episode 1",
        "description": "FROM Season 1 Episode 1, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1c0zithtnvok50m/From_S01e01.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1031",
        "episodeNumber": 2,
        "title": "FROM - Season 1 Episode 2",
        "description": "FROM Season 1 Episode 2, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e7sicern2lqeopz/From_S01e02.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1032",
        "episodeNumber": 3,
        "title": "FROM - Season 1 Episode 3",
        "description": "FROM Season 1 Episode 3, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rsph4fn07b1ayst/From_S01e03.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1033",
        "episodeNumber": 4,
        "title": "FROM - Season 1 Episode 4",
        "description": "FROM Season 1 Episode 4, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/678l2lyjth6v3zz/From_S01e04.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1034",
        "episodeNumber": 5,
        "title": "FROM - Season 1 Episode 5",
        "description": "FROM Season 1 Episode 5, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3p5kgovt6q6i2vh/From_S01e05.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1035",
        "episodeNumber": 6,
        "title": "FROM - Season 1 Episode 6",
        "description": "FROM Season 1 Episode 6, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dl1eub9or2ibt6v/From_S01e06.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1036",
        "episodeNumber": 7,
        "title": "FROM - Season 1 Episode 7",
        "description": "FROM Season 1 Episode 7, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/98z8rp614x1pazr/From_S01e07.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1037",
        "episodeNumber": 8,
        "title": "FROM - Season 1 Episode 8",
        "description": "FROM Season 1 Episode 8, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/suquuoho0qq527y/From_S01e08.%2528isata.pythonanywhere.com%2529.mp4/file"
      },
      {
        "id": "1038",
        "episodeNumber": 9,
        "title": "FROM - Season 1 Episode 9",
        "description": "FROM Season 1 Episode 9, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1nat7zwys7s3dey/From_S01e09.mp4/file"
      },
      {
        "id": "1039",
        "episodeNumber": 10,
        "title": "FROM - Season 1 Episode 10 (Final)",
        "description": "FROM Season 1 Episode 10, final episode listed, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kxjvoc33y6zl4op/From_S01e10_Final.mp4/file"
      }
    ],
  },
{
  id: "97",
  title: "JOY OF LIFE",
  slug: "joy-of-life",
  year: "2019",
  rating: "N/A",
  image: "joy-of-life.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Joy of Life is a historical drama presented in Agasobanuye. The supplied links cover episodes 1–46.",
  language: "Chinese",
  genres: ["Drama", "Historical", "Romance"],
  explainer: "SANKARA",

    episodes: [
      {
        "id": "1040",
        "episodeNumber": 1,
        "title": "JOY OF LIFE - Episodes 1–10",
        "description": "JOY OF LIFE Episodes 1–10, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/3a8iaqmtu3et4bb,8z3gsvcopvy9z6q,je78ly9l4f4qjxq,t7ys9tvya69mrbg,azqt4v5mbjzstls,v0qok2lst9jj4d1,3dn79466y93v59l,rc35n7dvd5s7w60,0mcsuqlrjwhpzn4,av7winbk39jss8l,f05kfa2hf7d0yuu/shared"
      },
      {
        "id": "1041",
        "episodeNumber": 11,
        "title": "JOY OF LIFE - Episodes 11–20",
        "description": "JOY OF LIFE Episodes 11–20, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/gekt6kcjgjukppi,7eejn5mw0arg828,ahvn5karwyi6mgc,j705ux816qxucxv,js14yf1r3aqy35h,rnv4jn9m9qauhg1,ssqxjh9nqvvfnts,vm1vw99ga1rjr6n,vh83qruqb5v6v94,iozotv4fk2t5n0c/shared"
      },
      {
        "id": "1042",
        "episodeNumber": 21,
        "title": "JOY OF LIFE - Episodes 21–30",
        "description": "JOY OF LIFE Episodes 21–30, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/kzfeu4ksvtk8hlx,o1xj1z34rnep6wx,y8px61psuon64z5,tnfjel51hmqvnp0,b6pxxmuohk2dhqg,q2c6vlkp2yonkpv,bjjfk4x92d3f04b,dm44l7hi83g64wi,bcno03awl9qkam5,9l57o9ohs14ilx8,bqxk1za8gtgp16c/shared"
      },
      {
        "id": "1043",
        "episodeNumber": 31,
        "title": "JOY OF LIFE - Episodes 31–40",
        "description": "JOY OF LIFE Episodes 31–40, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/tzggl18ldg3aukq,8pv4qlmfnazasoy,ucmvf36u2lcppfl,iqtwmxw20gdag8d,a0rl008sdy5gb3s,pl4pwwohzbocwgt,x45jv36n3nqs1xo,pbnmar0e0aw4tco,4me0t7ujyaurbbi,48obeu5w0jt8lbz/shared"
      },
      {
        "id": "1044",
        "episodeNumber": 41,
        "title": "JOY OF LIFE - Episodes 41–46 (Final)",
        "description": "JOY OF LIFE Episodes 41–46, final group, Agasobanuye by Sankara.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/folder/m6ggonwaovee9br,buhpfeyfes45zlq,dqvqnn1m7qc8pc,00p6mpqu0676d9r,jxc9ks9ykjzbn4w,eft6z3d1s7k6opj/shared"
      }
    ],
  },

{
  id: "98",
  title: "ALL AMERICAN",
  slug: "all-american",
  year: "2018",
  rating: "N/A",
  image: "all-american.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "All American is a sports drama series presented in Agasobanuye. The supplied links cover Season 1, Episodes 1–16.",
  language: "English",
  genres: ["Drama", "Sports"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1046",
        "episodeNumber": 1,
        "title": "ALL AMERICAN - Season 1 Episode 1",
        "description": "ALL AMERICAN Season 1 Episode 1, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cphunji0dnoypxw/ALL_AMERICAN_S01_E01.avi/file"
      },
      {
        "id": "1047",
        "episodeNumber": 2,
        "title": "ALL AMERICAN - Season 1 Episode 2",
        "description": "ALL AMERICAN Season 1 Episode 2, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/04br722t2n6ppxc/ALL_AMERICAN_S01_E02.avi/file"
      },
      {
        "id": "1048",
        "episodeNumber": 3,
        "title": "ALL AMERICAN - Season 1 Episode 3",
        "description": "ALL AMERICAN Season 1 Episode 3, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3307qzbh8dfaosl/ALL_AMERICAN_S01_E03.avi/file"
      },
      {
        "id": "1049",
        "episodeNumber": 4,
        "title": "ALL AMERICAN - Season 1 Episode 4",
        "description": "ALL AMERICAN Season 1 Episode 4, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r5v6tq44053aisn/ALL_AMERICAN_S01_EP_04.avi/file"
      },
      {
        "id": "1050",
        "episodeNumber": 5,
        "title": "ALL AMERICAN - Season 1 Episode 5",
        "description": "ALL AMERICAN Season 1 Episode 5, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wmgyfiwvsawgztd/ALL_AMERICAN_S01_EP_05.avi/file"
      },
      {
        "id": "1051",
        "episodeNumber": 6,
        "title": "ALL AMERICAN - Season 1 Episode 6",
        "description": "ALL AMERICAN Season 1 Episode 6, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zsxonexz5zjb23g/ALL_AMERICAN_S01_EP_06.avi/file"
      },
      {
        "id": "1052",
        "episodeNumber": 7,
        "title": "ALL AMERICAN - Season 1 Episode 7",
        "description": "ALL AMERICAN Season 1 Episode 7, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9fozxim19w81bx5/ALL_AMERICAN_S01_EP_07.avi/file"
      },
      {
        "id": "1053",
        "episodeNumber": 8,
        "title": "ALL AMERICAN - Season 1 Episode 8",
        "description": "ALL AMERICAN Season 1 Episode 8, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5ncmwnta8143u31/ALL_AMERICAN_S01_EP_08.avi/file"
      },
      {
        "id": "1054",
        "episodeNumber": 9,
        "title": "ALL AMERICAN - Season 1 Episode 9",
        "description": "ALL AMERICAN Season 1 Episode 9, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hassduodp7y1vm0/ALL_AMERICAN_S01_EP_09.avi/file"
      },
      {
        "id": "1055",
        "episodeNumber": 10,
        "title": "ALL AMERICAN - Season 1 Episode 10",
        "description": "ALL AMERICAN Season 1 Episode 10, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5uvz6d8r9725jfq/ALL_AMERICAN_S01E10.avi/file"
      },
      {
        "id": "1056",
        "episodeNumber": 11,
        "title": "ALL AMERICAN - Season 1 Episode 11",
        "description": "ALL AMERICAN Season 1 Episode 11, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/w3fxbim6e7lml0v/ALL_AMERICAN_S01E11.avi/file"
      },
      {
        "id": "1057",
        "episodeNumber": 12,
        "title": "ALL AMERICAN - Season 1 Episode 12",
        "description": "ALL AMERICAN Season 1 Episode 12, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lvo6kegihhhwd01/ALL_AMERICAN_S01E12.avi/file"
      },
      {
        "id": "1058",
        "episodeNumber": 13,
        "title": "ALL AMERICAN - Season 1 Episode 13",
        "description": "ALL AMERICAN Season 1 Episode 13, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8nqrs7ixgt4dmxj/ALL_AMERICAN_S01E13.avi/file"
      },
      {
        "id": "1059",
        "episodeNumber": 14,
        "title": "ALL AMERICAN - Season 1 Episode 14",
        "description": "ALL AMERICAN Season 1 Episode 14, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fy03y7m8mbxprm4/ALL_AMERICAN_S01E14.avi/file"
      },
      {
        "id": "1060",
        "episodeNumber": 15,
        "title": "ALL AMERICAN - Season 1 Episode 15",
        "description": "ALL AMERICAN Season 1 Episode 15, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kr3ofreqkvn85qy/ALL_AMERICAN_S01E15.avi/file"
      },
      {
        "id": "1061",
        "episodeNumber": 16,
        "title": "ALL AMERICAN - Season 1 Episode 16 (Final)",
        "description": "ALL AMERICAN Season 1 Episode 16, final episode, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qbtqalw4a9esy6h/ALL_AMERICAN_S01_E16_FINAL.avi/file"
      }
    ],
  },
{
  id: "99",
  title: "HARD TO FIND",
  slug: "hard-to-find",
  year: "N/A",
  rating: "N/A",
  image: "hard-to-find.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Hard to Find is presented in Agasobanuye. The supplied links cover Episodes 1–28.",
  language: "N/A",
  genres: ["Drama"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "1062",
        "episodeNumber": 1,
        "title": "HARD TO FIND - Episode 1",
        "description": "HARD TO FIND Episode 1, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/c0alp29u3yjav5b/HARD_TO_FIND_01.mp4/file"
      },
      {
        "id": "1063",
        "episodeNumber": 2,
        "title": "HARD TO FIND - Episode 2",
        "description": "HARD TO FIND Episode 2, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0vplhv1cm6mq9eh/HARD_TO_FIND_02.mp4/file"
      },
      {
        "id": "1064",
        "episodeNumber": 3,
        "title": "HARD TO FIND - Episode 3",
        "description": "HARD TO FIND Episode 3, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ect74cthzfhx02p/HARD_TO_FIND_03.mp4/file"
      },
      {
        "id": "1065",
        "episodeNumber": 4,
        "title": "HARD TO FIND - Episode 4",
        "description": "HARD TO FIND Episode 4, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jkhda7jllnws7co/HARD_TO_FIND_04.mp4/file"
      },
      {
        "id": "1066",
        "episodeNumber": 5,
        "title": "HARD TO FIND - Episode 5",
        "description": "HARD TO FIND Episode 5, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m9rogtckgh5gysj/HARD_TO_FIND_05.mp4/file"
      },
      {
        "id": "1067",
        "episodeNumber": 6,
        "title": "HARD TO FIND - Episode 6",
        "description": "HARD TO FIND Episode 6, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j9esmv8iumbxcpk/HARD_TO_FIND_06.mp4/file"
      },
      {
        "id": "1068",
        "episodeNumber": 7,
        "title": "HARD TO FIND - Episode 7",
        "description": "HARD TO FIND Episode 7, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d1ogrlxyskmnhw3/HARD_TO_FIND_07.mp4/file"
      },
      {
        "id": "1069",
        "episodeNumber": 8,
        "title": "HARD TO FIND - Episode 8",
        "description": "HARD TO FIND Episode 8, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ra7lhkkrw7tjktu/HARD_TO_FIND_08.mp4/file"
      },
      {
        "id": "1070",
        "episodeNumber": 9,
        "title": "HARD TO FIND - Episode 9",
        "description": "HARD TO FIND Episode 9, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ccs33npg4ydaor2/HARD_TO_FIND_09.mp4/file"
      },
      {
        "id": "1071",
        "episodeNumber": 10,
        "title": "HARD TO FIND - Episode 10",
        "description": "HARD TO FIND Episode 10, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mf0frpnfx66uob6/HARD_TO_FIND_10.mp4/file"
      },
      {
        "id": "1072",
        "episodeNumber": 11,
        "title": "HARD TO FIND - Episode 11",
        "description": "HARD TO FIND Episode 11, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4c6ysxkamimjur2/HARD_TO_FIND_11.mp4/file"
      },
      {
        "id": "1073",
        "episodeNumber": 12,
        "title": "HARD TO FIND - Episode 12",
        "description": "HARD TO FIND Episode 12, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/95gnh8kbe76kd5c/HARD_TO_FIND_12.mp4/file"
      },
      {
        "id": "1074",
        "episodeNumber": 13,
        "title": "HARD TO FIND - Episode 13",
        "description": "HARD TO FIND Episode 13, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xgu8k98brjteae6/HARD_TO_FIND_13.mp4/file"
      },
      {
        "id": "1075",
        "episodeNumber": 14,
        "title": "HARD TO FIND - Episode 14",
        "description": "HARD TO FIND Episode 14, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2ocfmiksycbk4wf/HARD_TO_FIND_14.mp4/file"
      },
      {
        "id": "1076",
        "episodeNumber": 15,
        "title": "HARD TO FIND - Episode 15",
        "description": "HARD TO FIND Episode 15, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1ilsy87l3tgh2ly/HARD_TO_FIND_15.mp4/file"
      },
      {
        "id": "1077",
        "episodeNumber": 16,
        "title": "HARD TO FIND - Episode 16",
        "description": "HARD TO FIND Episode 16, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5fllh6dz71e4ka9/HARD_TO_FIND_16.mp4/file"
      },
      {
        "id": "1078",
        "episodeNumber": 17,
        "title": "HARD TO FIND - Episode 17",
        "description": "HARD TO FIND Episode 17, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/eqx0h9eryotffov/HARD_TO_FIND_17.mp4/file"
      },
      {
        "id": "1079",
        "episodeNumber": 18,
        "title": "HARD TO FIND - Episode 18",
        "description": "HARD TO FIND Episode 18, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zm03lg4515z7mc8/HARD_TO_FIND_18.mp4/file"
      },
      {
        "id": "1080",
        "episodeNumber": 19,
        "title": "HARD TO FIND - Episode 19",
        "description": "HARD TO FIND Episode 19, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iu8z6q3pvbwd2h7/HARD_TO_FIND_19.mp4/file"
      },
      {
        "id": "1081",
        "episodeNumber": 20,
        "title": "HARD TO FIND - Episode 20",
        "description": "HARD TO FIND Episode 20, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gmo0ud7apqf36mo/HARD_TO_FIND_20.mp4/file"
      },
      {
        "id": "1082",
        "episodeNumber": 21,
        "title": "HARD TO FIND - Episode 21",
        "description": "HARD TO FIND Episode 21, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4vjp5ca8y6o9v5u/HARD_TO_FIND_21.mp4/file"
      },
      {
        "id": "1083",
        "episodeNumber": 22,
        "title": "HARD TO FIND - Episode 22",
        "description": "HARD TO FIND Episode 22, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yy4dtiif90bbnc2/HARD_TO_FIND_22.mp4/file"
      },
      {
        "id": "1084",
        "episodeNumber": 23,
        "title": "HARD TO FIND - Episode 23",
        "description": "HARD TO FIND Episode 23, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r4qk8qvtkuer56m/HARD_TO_FIND_23.mp4/file"
      },
      {
        "id": "1085",
        "episodeNumber": 24,
        "title": "HARD TO FIND - Episode 24",
        "description": "HARD TO FIND Episode 24, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ai2n0bl2nhke0uo/HARD_TO_FIND_24.mp4/file"
      },
      {
        "id": "1086",
        "episodeNumber": 25,
        "title": "HARD TO FIND - Episode 25",
        "description": "HARD TO FIND Episode 25, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nz882yo1v089s1s/HARD_TO_FIND_25.mp4/file"
      },
      {
        "id": "1087",
        "episodeNumber": 26,
        "title": "HARD TO FIND - Episode 26",
        "description": "HARD TO FIND Episode 26, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ob1pnz2f7w2420l/HARD_TO_FIND_26.mp4/file"
      },
      {
        "id": "1088",
        "episodeNumber": 27,
        "title": "HARD TO FIND - Episode 27",
        "description": "HARD TO FIND Episode 27, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fcv2z7x2wluxuyn/HARD_TO_FIND_27.mp4/file"
      },
      {
        "id": "1089",
        "episodeNumber": 28,
        "title": "HARD TO FIND - Episode 28 (Final)",
        "description": "HARD TO FIND Episode 28, final episode, Agasobanuye by Rocky Kimomo.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/122ttavyrkgpeu3/HARD_TO_FIND_28_FINAL.mp4/file"
      }
    ],
  },
{
  id: "100",
  title: "FANGS OF FORTUNE",
  slug: "fangs-of-fortune",
  year: "2024",
  rating: "N/A",
  image: "fangs-of-fortune.jpg",
  isFeatured: false,
  createdAt: "2026-10-29",
  description: "Fangs of Fortune is a Chinese fantasy drama presented in Agasobanuye. The supplied links cover Episodes 1–5.",
  language: "Chinese",
  genres: ["Fantasy", "Historical", "Drama"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "1090",
        "episodeNumber": 1,
        "title": "FANGS OF FORTUNE - Episode 1",
        "description": "FANGS OF FORTUNE Episode 1, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r12swvqkz315egu/FANGS_OF_FORTUNE_01.mp4/file"
      },
      {
        "id": "1091",
        "episodeNumber": 2,
        "title": "FANGS OF FORTUNE - Episode 2",
        "description": "FANGS OF FORTUNE Episode 2, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qkt76x0u4nm9x7p/FANGS_OF_FORTUNE_02%2528mujyosi.store%2529.mp4/file"
      },
      {
        "id": "1092",
        "episodeNumber": 3,
        "title": "FANGS OF FORTUNE - Episode 3",
        "description": "FANGS OF FORTUNE Episode 3, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gedphhupjraufdr/FANGS_OF_FORTUNE_03.mp4/file"
      },
      {
        "id": "1093",
        "episodeNumber": 4,
        "title": "FANGS OF FORTUNE - Episode 4",
        "description": "FANGS OF FORTUNE Episode 4, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yjtpet4ohm26o34/FANGS_OF_FORTUNE_04.mp4/file"
      },
      {
        "id": "1094",
        "episodeNumber": 5,
        "title": "FANGS OF FORTUNE - Episode 5",
        "description": "FANGS OF FORTUNE Episode 5, Agasobanuye by B the Great.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hnt9hcgzvjgpfl8/FANGS_OF_FORTUNE_05.mp4/file"
      }
    ],
  },
{
  id: "101",
  title: "CYPHER",
  slug: "cypher",
  year: "2021",
  rating: "N/A",
  image: "cypher.jpg",
  isFeatured: false,
  createdAt: "2026-11-01",
  description: "Cypher is a crime thriller series. The supplied links cover Season 1, Episodes 1–7.",
  language: "English",
  genres: ["Crime", "Thriller", "Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1095",
        "episodeNumber": 1,
        "title": "CYPHER - Episode 1",
        "description": "CYPHER Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/cblm219vhx9z",
        "downloadUrl": "https://www.mediafire.com/file/aumjhns4s1wtkob/Cypher_S01e01_Hd.mp4/file"
      },
      {
        "id": "1096",
        "episodeNumber": 2,
        "title": "CYPHER - Episode 2",
        "description": "CYPHER Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/h9bskygqj8cv",
        "downloadUrl": "https://www.mediafire.com/file/s12cvih303yhnyf/Cypher_S01e02_Hd.mp4/file"
      },
      {
        "id": "1097",
        "episodeNumber": 3,
        "title": "CYPHER - Episode 3",
        "description": "CYPHER Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/hp9yp93tw00d",
        "downloadUrl": "https://www.mediafire.com/file/cldcrjx5hcde2ex/Cypher_S01e03_Hd.mp4/file"
      },
      {
        "id": "1098",
        "episodeNumber": 4,
        "title": "CYPHER - Episode 4",
        "description": "CYPHER Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/mfr7ir32qqwb",
        "downloadUrl": "https://www.mediafire.com/file/7vb31jkt3jpssut/Cyphers01e04_Hd.mp4/file"
      },
      {
        "id": "1099",
        "episodeNumber": 5,
        "title": "CYPHER - Episode 5",
        "description": "CYPHER Season 1 Episode 5.",
        "streamUrl": "https://hgcloud.to/su40jk17l6fn",
        "downloadUrl": "https://www.mediafire.com/file/7nrufr6zg2nmltu/Cyphers01e05_Hd.mp4/file"
      },
      {
        "id": "1100",
        "episodeNumber": 6,
        "title": "CYPHER - Episode 6",
        "description": "CYPHER Season 1 Episode 6.",
        "streamUrl": "https://hgcloud.to/44okukdcfxn5",
        "downloadUrl": "https://www.mediafire.com/file/xvd4troe1fsd8og/Cyphers01e06_Hd.mp4/file"
      },
      {
        "id": "1101",
        "episodeNumber": 7,
        "title": "CYPHER - Episode 7",
        "description": "CYPHER Season 1 Episode 7.",
        "streamUrl": "https://hgcloud.to/6qetpsz3u6h5",
        "downloadUrl": "https://www.mediafire.com/file/x35f148qlqzdhv8/Cyphers01e07_Final_Hd.mp4/file"
      }
    ],
  },
{
  id: "102",
  title: "THE REBEL: HONG GIL DONG",
  slug: "the-rebel-hong-gil-dong",
  year: "2017",
  rating: "N/A",
  image: "the-rebel-hong-gil-dong.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "The Rebel: Hong Gil Dong is a historical action drama following the life of a legendary figure who challenges corruption and fights for the oppressed. The supplied links cover Season 1, Episodes 1–4.",
  language: "Korean",
  genres: ["Action", "Historical", "Drama"],
  explainer: "JUNIOR GITI",

    episodes: [
      {
        "id": "1102",
        "episodeNumber": 1,
        "title": "THE REBEL: HONG GIL DONG - Episode 1",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/3back6tq58pb",
        "downloadUrl": "https://www.mediafire.com/file/wi8xzrdmup5haug/The_Rebel_Hong_Gil_Dong_E01_Hd.mp4/file"
      },
      {
        "id": "1103",
        "episodeNumber": 2,
        "title": "THE REBEL: HONG GIL DONG - Episode 2",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/1ua3n2m1pzc2",
        "downloadUrl": "https://www.mediafire.com/file/e1hjehy4h1utn3u/The_Rebel_Hong_Gil_Dong_E02_Hd.mp4/file"
      },
      {
        "id": "1104",
        "episodeNumber": 3,
        "title": "THE REBEL: HONG GIL DONG - Episode 3",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/z48ls691fc1i",
        "downloadUrl": "https://www.mediafire.com/file/2giff1yglihat0a/The_Rebel_Hong_Gil_Dong_E03_Hd.mp4/file"
      },
      {
        "id": "1105",
        "episodeNumber": 4,
        "title": "THE REBEL: HONG GIL DONG - Episode 4",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 4.",
        "streamUrl": "https://vsembed.com/2a1ar",
        "downloadUrl": "https://www.mediafire.com/file/e5wwxtkk2pxm6vn/The+Rebel+Hong+Gil+Dong+E04+Hd.mp4/file"
      },
      {
        "id": "2144",
        "episodeNumber": 5,
        "title": "THE REBEL: HONG GIL DONG - Episode 5",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/unu69mrm9k7ooel/HONG+GIL+DONG+5.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/unu69mrm9k7ooel/HONG+GIL+DONG+5.mp4/file"
      },
      {
        "id": "2145",
        "episodeNumber": 6,
        "title": "THE REBEL: HONG GIL DONG - Episode 6",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/nyaavcf7o7qapkd/HONG+GIL+DONG+6.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/nyaavcf7o7qapkd/HONG+GIL+DONG+6.mp4/file"
      },
      {
        "id": "2146",
        "episodeNumber": 7,
        "title": "THE REBEL: HONG GIL DONG - Episode 7",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 7.",
        "streamUrl": "https://www.mediafire.com/file/m78t66cxz1yg4bs/HONG+GIL+DONG+8.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/m78t66cxz1yg4bs/HONG+GIL+DONG+8.mp4/file"
      },
      {
        "id": "2147",
        "episodeNumber": 8,
        "title": "THE REBEL: HONG GIL DONG - Episode 8",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 8.",
        "streamUrl": "https://www.mediafire.com/file/m78t66cxz1yg4bs/HONG+GIL+DONG+8.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/m78t66cxz1yg4bs/HONG+GIL+DONG+8.mp4/file"
      },
      {
        "id": "2148",
        "episodeNumber": 9,
        "title": "THE REBEL: HONG GIL DONG - Episode 9",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 9.",
        "streamUrl": "https://www.mediafire.com/file/yzujmcgxyt5kz60/HONG_GIL_DONG_EP9.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/yzujmcgxyt5kz60/HONG_GIL_DONG_EP9.mp4/file"
      },
      {
        "id": "2149",
        "episodeNumber": 10,
        "title": "THE REBEL: HONG GIL DONG - Episode 10",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 10.",
        "streamUrl": "https://www.mediafire.com/file/cvogsl15rg32q96/HONG_GIL_DONG_EP10.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cvogsl15rg32q96/HONG_GIL_DONG_EP10.mp4/file"
      },
      {
        "id": "2150",
        "episodeNumber": 11,
        "title": "THE REBEL: HONG GIL DONG - Episode 11",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 11.",
        "streamUrl": "https://www.mediafire.com/file/vori6t96ml4snpp/HONG_GIL_DONG_EP11.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/vori6t96ml4snpp/HONG_GIL_DONG_EP11.mp4/file"
      },
      {
        "id": "2151",
        "episodeNumber": 12,
        "title": "THE REBEL: HONG GIL DONG - Episode 12",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 12.",
        "streamUrl": "https://www.mediafire.com/file/4kxp77uk67c2nqy/HONG_GIL_DONG_EP12.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4kxp77uk67c2nqy/HONG_GIL_DONG_EP12.mp4/file"
      },
      {
        "id": "2152",
        "episodeNumber": 13,
        "title": "THE REBEL: HONG GIL DONG - Episode 13",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 13.",
        "streamUrl": "https://www.mediafire.com/file/8or3y77ud3fu68z/HONG_GIL_DONG_EP13.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8or3y77ud3fu68z/HONG_GIL_DONG_EP13.mp4/file"
      },
      {
        "id": "2153",
        "episodeNumber": 14,
        "title": "THE REBEL: HONG GIL DONG - Episode 14",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 14.",
        "streamUrl": "https://www.mediafire.com/file/y8bxyqay4q4wr5g/HONG_GIL_DONG_EP14.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/y8bxyqay4q4wr5g/HONG_GIL_DONG_EP14.mp4/file"
      },
      {
        "id": "2154",
        "episodeNumber": 15,
        "title": "THE REBEL: HONG GIL DONG - Episode 15",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 15.",
        "streamUrl": "https://www.mediafire.com/file/tvzbthou13g24v5/HONG_GIL_DONG_EP15.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tvzbthou13g24v5/HONG_GIL_DONG_EP15.mp4/file"
      },
      {
        "id": "2155",
        "episodeNumber": 16,
        "title": "THE REBEL: HONG GIL DONG - Episode 16A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 16A.",
        "streamUrl": "https://www.mediafire.com/file/7otqaz5mucqv8yj/HONG_GIL_DONG_EP16_A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/7otqaz5mucqv8yj/HONG_GIL_DONG_EP16_A.mp4/file"
      },
      {
        "id": "2156",
        "episodeNumber": 16,
        "title": "THE REBEL: HONG GIL DONG - Episode 16B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 16B.",
        "streamUrl": "https://www.mediafire.com/file/c4tygpb12xnjkth/HONG_GIL_DONG_EP16_B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/c4tygpb12xnjkth/HONG_GIL_DONG_EP16_B.mp4/file"
      },
      {
        "id": "2157",
        "episodeNumber": 17,
        "title": "THE REBEL: HONG GIL DONG - Episode 17A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 17A.",
        "streamUrl": "https://www.mediafire.com/file/v6e8jz5mik0siw7/HONG_GIL_DONG_EP17A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/v6e8jz5mik0siw7/HONG_GIL_DONG_EP17A.mp4/file"
      },
      {
        "id": "2158",
        "episodeNumber": 17,
        "title": "THE REBEL: HONG GIL DONG - Episode 17B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 17B.",
        "streamUrl": "https://www.mediafire.com/file/zqkuc0oxhtg7ss3/HONG_GIL_DONG_EP17B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/zqkuc0oxhtg7ss3/HONG_GIL_DONG_EP17B.mp4/file"
      },
      {
        "id": "2159",
        "episodeNumber": 18,
        "title": "THE REBEL: HONG GIL DONG - Episode 18",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 18.",
        "streamUrl": "https://www.mediafire.com/file/vg38x98tkcbk1v2/HONG_GIL_DONG_EP18.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/vg38x98tkcbk1v2/HONG_GIL_DONG_EP18.mp4/file"
      },
      {
        "id": "2160",
        "episodeNumber": 19,
        "title": "THE REBEL: HONG GIL DONG - Episode 19A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 19A.",
        "streamUrl": "https://www.mediafire.com/file/14axzb5tomqe0ns/HONG_GIL_DONG_EP19A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/14axzb5tomqe0ns/HONG_GIL_DONG_EP19A.mp4/file"
      },
      {
        "id": "2161",
        "episodeNumber": 19,
        "title": "THE REBEL: HONG GIL DONG - Episode 19B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 19B.",
        "streamUrl": "https://www.mediafire.com/file/hfp91ojovfhqfbs/HONG_GIL_DONG_EP19B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hfp91ojovfhqfbs/HONG_GIL_DONG_EP19B.mp4/file"
      },
      {
        "id": "2162",
        "episodeNumber": 20,
        "title": "THE REBEL: HONG GIL DONG - Episode 20A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 20A.",
        "streamUrl": "https://www.mediafire.com/file/gc08rs9u96yxcty/HONG_GIL_DONG_EP20A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/gc08rs9u96yxcty/HONG_GIL_DONG_EP20A.mp4/file"
      },
      {
        "id": "2163",
        "episodeNumber": 20,
        "title": "THE REBEL: HONG GIL DONG - Episode 20B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 20B.",
        "streamUrl": "https://www.mediafire.com/file/48h4htkklte2pw2/HONG_GIL_DONG_EP20B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/48h4htkklte2pw2/HONG_GIL_DONG_EP20B.mp4/file"
      },
      {
        "id": "2164",
        "episodeNumber": 21,
        "title": "THE REBEL: HONG GIL DONG - Episode 21A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 21A.",
        "streamUrl": "https://www.mediafire.com/file/4s0e1n5fbzgs9np/HONG_GIL_DONG_EP21A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/4s0e1n5fbzgs9np/HONG_GIL_DONG_EP21A.mp4/file"
      },
      {
        "id": "2165",
        "episodeNumber": 21,
        "title": "THE REBEL: HONG GIL DONG - Episode 21B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 21B.",
        "streamUrl": "https://www.mediafire.com/file/hrqrn14mf00b140/HONG_GIL_DONG_EP21B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/hrqrn14mf00b140/HONG_GIL_DONG_EP21B.mp4/file"
      },
      {
        "id": "2166",
        "episodeNumber": 22,
        "title": "THE REBEL: HONG GIL DONG - Episode 22A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 22A.",
        "streamUrl": "https://www.mediafire.com/file/7ssbj5suieozge8/HONG_GIL_DONG_EP22A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/7ssbj5suieozge8/HONG_GIL_DONG_EP22A.mp4/file"
      },
      {
        "id": "2167",
        "episodeNumber": 22,
        "title": "THE REBEL: HONG GIL DONG - Episode 22B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 22B.",
        "streamUrl": "https://www.mediafire.com/file/xxxf3ffeapd9yyn/HONG_GIL_DONG_EP22B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/xxxf3ffeapd9yyn/HONG_GIL_DONG_EP22B.mp4/file"
      },
      {
        "id": "2168",
        "episodeNumber": 23,
        "title": "THE REBEL: HONG GIL DONG - Episode 23A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 23A.",
        "streamUrl": "https://www.mediafire.com/file/c78ot6eqp9a8ub1/HONG_GIL_DONG_EP23A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/c78ot6eqp9a8ub1/HONG_GIL_DONG_EP23A.mp4/file"
      },
      {
        "id": "2169",
        "episodeNumber": 23,
        "title": "THE REBEL: HONG GIL DONG - Episode 23B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 23B.",
        "streamUrl": "https://www.mediafire.com/file/lf8vsslidtt82lw/HONG_GIL_DONG_EP23B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/lf8vsslidtt82lw/HONG_GIL_DONG_EP23B.mp4/file"
      },
      {
        "id": "2170",
        "episodeNumber": 24,
        "title": "THE REBEL: HONG GIL DONG - Episode 24",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 24.",
        "streamUrl": "https://www.mediafire.com/file/c86nmm7zoupjy9v/HONG_GIL_DONG_EP24B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/c86nmm7zoupjy9v/HONG_GIL_DONG_EP24B.mp4/file"
      },
      {
        "id": "2171",
        "episodeNumber": 25,
        "title": "THE REBEL: HONG GIL DONG - Episode 25",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 25.",
        "streamUrl": "https://www.mediafire.com/file/xtegob9cv6xfcb8/HONG_GIL_DONG_EP25B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/xtegob9cv6xfcb8/HONG_GIL_DONG_EP25B.mp4/file"
      },
      {
        "id": "2172",
        "episodeNumber": 26,
        "title": "THE REBEL: HONG GIL DONG - Episode 26",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 26.",
        "streamUrl": "https://www.mediafire.com/file/bxu9scp1bbtllp5/HONG_GIL_DONG_EP26B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/bxu9scp1bbtllp5/HONG_GIL_DONG_EP26B.mp4/file"
      },
      {
        "id": "2173",
        "episodeNumber": 27,
        "title": "THE REBEL: HONG GIL DONG - Episode 27A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 27A.",
        "streamUrl": "https://www.mediafire.com/file/ykz0x29s9ae8h2h/HONG_GIL_DONG_EP27A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ykz0x29s9ae8h2h/HONG_GIL_DONG_EP27A.mp4/file"
      },
      {
        "id": "2174",
        "episodeNumber": 27,
        "title": "THE REBEL: HONG GIL DONG - Episode 27B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 27B.",
        "streamUrl": "https://www.mediafire.com/file/cw7uvs3tv7td2wk/HONG_GIL_DONG_EP27B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cw7uvs3tv7td2wk/HONG_GIL_DONG_EP27B.mp4/file"
      },
      {
        "id": "2175",
        "episodeNumber": 28,
        "title": "THE REBEL: HONG GIL DONG - Episode 28A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 28A.",
        "streamUrl": "https://www.mediafire.com/file/a2nlex27djylz1m/HONG_GIL_DONG_EP28A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/a2nlex27djylz1m/HONG_GIL_DONG_EP28A.mp4/file"
      },
      {
        "id": "2176",
        "episodeNumber": 28,
        "title": "THE REBEL: HONG GIL DONG - Episode 28B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 28B.",
        "streamUrl": "https://www.mediafire.com/file/iy08qbkn7lskuqg/HONG_GIL_DONG_EP28B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/iy08qbkn7lskuqg/HONG_GIL_DONG_EP28B.mp4/file"
      },
      {
        "id": "2177",
        "episodeNumber": 29,
        "title": "THE REBEL: HONG GIL DONG - Episode 29A",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 29A.",
        "streamUrl": "https://www.mediafire.com/file/rhgno78173j6szg/HONG_GIL_DONG_EP29C.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/rhgno78173j6szg/HONG_GIL_DONG_EP29C.mp4/file"
      },
      {
        "id": "2178",
        "episodeNumber": 29,
        "title": "THE REBEL: HONG GIL DONG - Episode 29B",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 29B.",
        "streamUrl": "https://www.mediafire.com/file/rreylzhcyzvj6ei/HONG_GIL_DONG_EP29D.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/rreylzhcyzvj6ei/HONG_GIL_DONG_EP29D.mp4/file"
      },
      {
        "id": "2179",
        "episodeNumber": 30,
        "title": "THE REBEL: HONG GIL DONG - Episode 30A Final",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 30A Final.",
        "streamUrl": "https://www.mediafire.com/file/qjjcisbfosb9a6j/HONG_GIL_DONG_EP30A_final.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/qjjcisbfosb9a6j/HONG_GIL_DONG_EP30A_final.mp4/file"
      },
      {
        "id": "2180",
        "episodeNumber": 30,
        "title": "THE REBEL: HONG GIL DONG - Episode 30B Final",
        "description": "THE REBEL: HONG GIL DONG Season 1 Episode 30B Final.",
        "streamUrl": "https://www.mediafire.com/file/7wlwtuz9rzy3m6h/HONG_GIL_DONG_EP30B_final.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/7wlwtuz9rzy3m6h/HONG_GIL_DONG_EP30B_final.mp4/file"
      }
    ],
  },
{
  id: "103",
  title: "LET'S FIGHT GHOST",
  slug: "lets-fight-ghost",
  year: "2016",
  rating: "N/A",
  image: "lets-fight-ghost.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Let's Fight Ghost is a supernatural comedy series involving a young exorcist who encounters ghosts and becomes involved in unexpected adventures. The supplied links cover Season 1, Episodes 1–16.",
  language: "Korean",
  genres: ["Comedy", "Fantasy", "Horror", "Romance"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1106",
        "episodeNumber": 1,
        "title": "LET'S FIGHT GHOST - Episode 1",
        "description": "LET'S FIGHT GHOST Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/vpmn354lz0gq",
        "downloadUrl": "https://www.mediafire.com/file/prpr93q91f4gnw0/Let,S+Fight+Ghost+Ep1+Hd.mp4/file"
      },
      {
        "id": "1107",
        "episodeNumber": 2,
        "title": "LET'S FIGHT GHOST - Episode 2",
        "description": "LET'S FIGHT GHOST Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/mkrwrbsow7rt",
        "downloadUrl": "https://www.mediafire.com/file/k0r7wkhfllotuk1/Let,S+Fight+Ghost+Ep2+Hd.mp4/file"
      },
      {
        "id": "1108",
        "episodeNumber": 3,
        "title": "LET'S FIGHT GHOST - Episode 3",
        "description": "LET'S FIGHT GHOST Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/9vebiqxhlm8l",
        "downloadUrl": "https://www.mediafire.com/file/l2lujdlo9373soy/Let,S+Fight+Ghost+Ep3+Hd.mp4/file"
      },
      {
        "id": "1109",
        "episodeNumber": 4,
        "title": "LET'S FIGHT GHOST - Episode 4",
        "description": "LET'S FIGHT GHOST Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/n9ojqss8rz2w",
        "downloadUrl": "https://www.mediafire.com/file/8ehxmjm149r6w5d/Let,S+Fight+Ghost+Ep4+Hd.mp4/file"
      },
      {
        "id": "1110",
        "episodeNumber": 5,
        "title": "LET'S FIGHT GHOST - Episode 5",
        "description": "LET'S FIGHT GHOST Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7fguo14okeutqnb/Let,S+Fight+Ghost+Ep5+Hd.mp4/file"
      },
      {
        "id": "1111",
        "episodeNumber": 6,
        "title": "LET'S FIGHT GHOST - Episode 6",
        "description": "LET'S FIGHT GHOST Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2romdc3q29fskc1/Let,S+Fight+Ghost+Ep6+Hd.mp4/file"
      },
      {
        "id": "1112",
        "episodeNumber": 7,
        "title": "LET'S FIGHT GHOST - Episode 7",
        "description": "LET'S FIGHT GHOST Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/re9yidx3ojomsr8/Let,S+Fight+Ghost+Ep7+Hd+1.mp4/file"
      },
      {
        "id": "1113",
        "episodeNumber": 8,
        "title": "LET'S FIGHT GHOST - Episode 8",
        "description": "LET'S FIGHT GHOST Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rqt2xt9yfrxjwmi/Let,S+Fight+Ghost+Ep8+Hd.mp4/file"
      },
      {
        "id": "1114",
        "episodeNumber": 9,
        "title": "LET'S FIGHT GHOST - Episode 9",
        "description": "LET'S FIGHT GHOST Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2mzhi4xrx79h5i4/Let,S+Fight+Ghost+Ep9+Hd.mp4/file"
      },
      {
        "id": "1115",
        "episodeNumber": 10,
        "title": "LET'S FIGHT GHOST - Episode 10",
        "description": "LET'S FIGHT GHOST Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jetfcrz1yoi8yfp/Ler%252CS_Fight_Ghost_Ep10_Hd.mp4/file"
      },
      {
        "id": "1116",
        "episodeNumber": 11,
        "title": "LET'S FIGHT GHOST - Episode 11",
        "description": "LET'S FIGHT GHOST Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xputlh1i1pds5d0/Let%252CS_Fight_Ghost_Ep11_Hd.mp4/file"
      },
      {
        "id": "1117",
        "episodeNumber": 12,
        "title": "LET'S FIGHT GHOST - Episode 12",
        "description": "LET'S FIGHT GHOST Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y038avgmiamxugj/Let,S+Fight+Ghost+Ep12+Hd.mp4/file"
      },
      {
        "id": "1118",
        "episodeNumber": 13,
        "title": "LET'S FIGHT GHOST - Episode 13",
        "description": "LET'S FIGHT GHOST Season 1 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2vk0ysfjf8pgzqt/Let,Sfight+Ghost+Ep13+Hd.mp4/file"
      },
      {
        "id": "1119",
        "episodeNumber": 14,
        "title": "LET'S FIGHT GHOST - Episode 14",
        "description": "LET'S FIGHT GHOST Season 1 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8ovba2ansharb4r/Let%252CS_Fight_Ghost_Ep14_Hd.mp4/file"
      },
      {
        "id": "1120",
        "episodeNumber": 15,
        "title": "LET'S FIGHT GHOST - Episode 15",
        "description": "LET'S FIGHT GHOST Season 1 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/liyg1gmfmvwtq3z/Let,S+Fight+Ghost+Ep15+Hd.mp4/file"
      },
      {
        "id": "1121",
        "episodeNumber": 16,
        "title": "LET'S FIGHT GHOST - Episode 16",
        "description": "LET'S FIGHT GHOST Season 1 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zsu79t7mhvrb3lj/Let,S+Fight+Gost+Ep16+Final+Hd.mp4/file"
      }
    ],
  },
{
  id: "104",
  title: "HARPER'S ISLAND",
  slug: "harpers-island",
  year: "2009",
  rating: "N/A",
  image: "harpers-island.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Harper's Island is a mystery horror thriller series about a group of friends and family members whose reunion on an isolated island turns into a terrifying struggle for survival. The supplied links cover Season 1, Episodes 1–11.",
  language: "English",
  genres: ["Mystery", "Horror", "Thriller"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1122",
        "episodeNumber": 1,
        "title": "HARPER'S ISLAND - Episode 1",
        "description": "HARPER'S ISLAND Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/oo1gqo9lv2s3",
        "downloadUrl": "https://www.mediafire.com/file/7bihkv62706kntp/Harper%252CS_Island_S01_Ep1_Hd_Mp4.mp4/file"
      },
      {
        "id": "1123",
        "episodeNumber": 2,
        "title": "HARPER'S ISLAND - Episode 2",
        "description": "HARPER'S ISLAND Season 1 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fse4lz79cu7pkx0/Harper%252CS_Island_S01_Ep2_Hd_Mp4.mp4/file"
      },
      {
        "id": "1124",
        "episodeNumber": 3,
        "title": "HARPER'S ISLAND - Episode 3",
        "description": "HARPER'S ISLAND Season 1 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/i2ortw4duno5hdw/Harper%252CS_Island_S01_Ep3_Hd_Mp4.mp4/file"
      },
      {
        "id": "1125",
        "episodeNumber": 4,
        "title": "HARPER'S ISLAND - Episode 4",
        "description": "HARPER'S ISLAND Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e2fkz8iyizjte7n/Harper%252CS_Island_S01_Ep4_Hd_Mp4.mp4/file"
      },
      {
        "id": "1126",
        "episodeNumber": 5,
        "title": "HARPER'S ISLAND - Episode 5",
        "description": "HARPER'S ISLAND Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/w0dkgmsu27w1hd8/Harper%252CS_Island_S01_Ep5_Hd_Mp4.mp4/file"
      },
      {
        "id": "1127",
        "episodeNumber": 6,
        "title": "HARPER'S ISLAND - Episode 6",
        "description": "HARPER'S ISLAND Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zr40aasw7bn4pja/Harper%252CS_Island_S01_Ep6_Hd_Mp4.mp4/file"
      },
      {
        "id": "1128",
        "episodeNumber": 7,
        "title": "HARPER'S ISLAND - Episode 7",
        "description": "HARPER'S ISLAND Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iip9copr2xdkq00/Harper%252CS_Island_S01_Ep7_Hd_Mp4.mp4/file"
      },
      {
        "id": "1129",
        "episodeNumber": 8,
        "title": "HARPER'S ISLAND - Episode 8",
        "description": "HARPER'S ISLAND Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bg4qa9hnhsbmano/Harper%252CS_Island_S01_Ep8_Hd_Mp4.mp4/file"
      },
      {
        "id": "1130",
        "episodeNumber": 9,
        "title": "HARPER'S ISLAND - Episode 9",
        "description": "HARPER'S ISLAND Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dbk5xp3z251oet5/Harper%252CS_Island_S01_Ep9_Hd_Mp4.mp4/file"
      },
      {
        "id": "1131",
        "episodeNumber": 10,
        "title": "HARPER'S ISLAND - Episode 10",
        "description": "HARPER'S ISLAND Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yzgbsgfnp9wf8un/Harper%252CS_Island_S01_Ep10_Hd_Mp4.mp4/file"
      },
      {
        "id": "1132",
        "episodeNumber": 11,
        "title": "HARPER'S ISLAND - Episode 11",
        "description": "HARPER'S ISLAND Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p29jttgcco8p1ye/Harper%252CS_Island_S01_Ep11_Hd_Mp4.mp4/file"
      }
    ],
  },
{
  id: "105",
  title: "MEMORIST",
  slug: "memorist",
  year: "2020",
  rating: "N/A",
  image: "memorist.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Memorist is a Korean mystery thriller about a detective with supernatural memory-reading abilities who investigates dangerous criminal cases. The supplied links cover Season 1, Episodes 1–6.",
  language: "Korean",
  genres: ["Mystery", "Thriller", "Crime", "Fantasy"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1133",
        "episodeNumber": 1,
        "title": "MEMORIST - Episode 1",
        "description": "MEMORIST Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/c5394fg4y09c",
        "downloadUrl": "https://www.mediafire.com/file/ulo3e8m0xe0kpob/Memorist_Ep_01_Hd.mp4/file"
      },
      {
        "id": "1134",
        "episodeNumber": 2,
        "title": "MEMORIST - Episode 2",
        "description": "MEMORIST Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/0fla05m2s7w0",
        "downloadUrl": "https://www.mediafire.com/file/so53e7gkx1ii7ue/Memorist_Ep_02_Hd.mp4/file"
      },
      {
        "id": "1135",
        "episodeNumber": 3,
        "title": "MEMORIST - Episode 3",
        "description": "MEMORIST Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/eopr0bv3huth",
        "downloadUrl": "https://www.mediafire.com/file/jeuz5qpk0xraz58/Memorist_Ep_03_Hd.mp4/file"
      },
      {
        "id": "1136",
        "episodeNumber": 4,
        "title": "MEMORIST - Episode 4",
        "description": "MEMORIST Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/cidldzly1x7u",
        "downloadUrl": "https://www.mediafire.com/file/rjlfyayr5bl2gad/Memorist_Ep_04_Hd.mp4/file"
      },
      {
        "id": "1137",
        "episodeNumber": 5,
        "title": "MEMORIST - Episode 5",
        "description": "MEMORIST Season 1 Episode 5.",
        "streamUrl": "https://hgcloud.to/4pspq7s70dfx",
        "downloadUrl": "https://www.mediafire.com/file/ccv3eixvjbgxqqj/Memorist_Ep_05_Hd.mp4/file"
      },
      {
        "id": "1138",
        "episodeNumber": 6,
        "title": "MEMORIST - Episode 6",
        "description": "MEMORIST Season 1 Episode 6.",
        "streamUrl": "https://hgcloud.to/pmecd09ghjqi",
        "downloadUrl": "https://www.mediafire.com/file/camo6e5dtpmnbdj/Memorist_Ep_06_Final_Hd.mp4/file"
      }
    ],
  },
{
  id: "106",
  title: "SMALLVILLE",
  slug: "smallville-season-2",
  year: "2002",
  rating: "N/A",
  image: "smallville2.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Smallville follows the early life of Clark Kent as he discovers his extraordinary abilities while facing mysterious events and challenges in his hometown. The supplied links cover Season 2, Episodes 1–21.",
  language: "English",
  genres: ["Action", "Adventure", "Drama", "Science Fiction"],
  explainer: "MOSES",

    episodes: [
      {
        "id": "1139",
        "episodeNumber": 1,
        "title": "SMALLVILLE S02 - Episode 1",
        "description": "SMALLVILLE Season 2 Episode 1.",
        "streamUrl": "https://hgcloud.to/70zqgq9nbnms",
        "downloadUrl": "https://www.mediafire.com/file/7g19rjwc567crji/Small+Ville+S2+Ep1+Moses.mp4/file"
      },
      {
        "id": "1140",
        "episodeNumber": 2,
        "title": "SMALLVILLE S02 - Episode 2",
        "description": "SMALLVILLE Season 2 Episode 2.",
        "streamUrl": "https://hgcloud.to/duktqwz6r44v",
        "downloadUrl": "https://www.mediafire.com/file/80yvk10dj5s310a/Small_Ville_S2_Ep2_Hd.mp4/file"
      },
      {
        "id": "1141",
        "episodeNumber": 3,
        "title": "SMALLVILLE S02 - Episode 3",
        "description": "SMALLVILLE Season 2 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lpitcugt8b6j1rc/Small_Ville_S2_Ep3.mp4/file"
      },
      {
        "id": "1142",
        "episodeNumber": 4,
        "title": "SMALLVILLE S02 - Episode 4",
        "description": "SMALLVILLE Season 2 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/on3dq31zcu2mm51/Small_Ville_S2_Ep4.mp4/file"
      },
      {
        "id": "1143",
        "episodeNumber": 5,
        "title": "SMALLVILLE S02 - Episode 5",
        "description": "SMALLVILLE Season 2 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rqqb5qjuufhjlsf/Smallville+S2+Ep5+Hd.mp4/file"
      },
      {
        "id": "1144",
        "episodeNumber": 6,
        "title": "SMALLVILLE S02 - Episode 6",
        "description": "SMALLVILLE Season 2 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a7bslda4xvlfb6s/Smallville+S2+Ep6+.mp4/file"
      },
      {
        "id": "1145",
        "episodeNumber": 7,
        "title": "SMALLVILLE S02 - Episode 7",
        "description": "SMALLVILLE Season 2 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/i74lk0a1fk4ctx8/Smallville+S2+Ep7.mp4/file"
      },
      {
        "id": "1146",
        "episodeNumber": 8,
        "title": "SMALLVILLE S02 - Episode 8",
        "description": "SMALLVILLE Season 2 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mcvq4ysvyv3p1b0/Smallville+S2+Ep8.mp4/file"
      },
      {
        "id": "1147",
        "episodeNumber": 9,
        "title": "SMALLVILLE S02 - Episode 9",
        "description": "SMALLVILLE Season 2 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xp7b8csoune4g54/Smallville+S02E09+.mp4/file"
      },
      {
        "id": "1148",
        "episodeNumber": 10,
        "title": "SMALLVILLE S02 - Episode 10",
        "description": "SMALLVILLE Season 2 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/av63s8xyqgpyalp/Smallville+S02E10.mp4/file"
      },
      {
        "id": "1149",
        "episodeNumber": 11,
        "title": "SMALLVILLE S02 - Episode 11",
        "description": "SMALLVILLE Season 2 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wes5ifv0mx3ecea/Smallville+S02E11.mp4/file"
      },
      {
        "id": "1150",
        "episodeNumber": 12,
        "title": "SMALLVILLE S02 - Episode 12",
        "description": "SMALLVILLE Season 2 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7gjn3odvmhnu0gz/Smallville+S02E12.mp4/file"
      },
      {
        "id": "1151",
        "episodeNumber": 13,
        "title": "SMALLVILLE S02 - Episode 13",
        "description": "SMALLVILLE Season 2 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q194p22nj5tau6t/Smallville_S02_E13.mp4/file"
      },
      {
        "id": "1152",
        "episodeNumber": 14,
        "title": "SMALLVILLE S02 - Episode 14",
        "description": "SMALLVILLE Season 2 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n9b7rntt71qh30v/Smallville_S02E14.mp4/file"
      },
      {
        "id": "1153",
        "episodeNumber": 15,
        "title": "SMALLVILLE S02 - Episode 15",
        "description": "SMALLVILLE Season 2 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vmyrhkd72oa1tec/Smallville_S02E15.mp4/file"
      },
      {
        "id": "1154",
        "episodeNumber": 16,
        "title": "SMALLVILLE S02 - Episode 16",
        "description": "SMALLVILLE Season 2 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uksbwpd9lohkgpf/Smallville_S02E16.mp4/file"
      },
      {
        "id": "1155",
        "episodeNumber": 17,
        "title": "SMALLVILLE S02 - Episode 17",
        "description": "SMALLVILLE Season 2 Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cirs3roh0qiun1p/Smallville.S02E17.mp4/file"
      },
      {
        "id": "1156",
        "episodeNumber": 18,
        "title": "SMALLVILLE S02 - Episode 18",
        "description": "SMALLVILLE Season 2 Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/miprzkif0fmyrh7/Smallville_S02E18.mp4/file"
      },
      {
        "id": "1157",
        "episodeNumber": 19,
        "title": "SMALLVILLE S02 - Episode 19",
        "description": "SMALLVILLE Season 2 Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zhy90eq3y79neg3/Smallville.S02E19%255D.mp4/file"
      },
      {
        "id": "1158",
        "episodeNumber": 20,
        "title": "SMALLVILLE S02 - Episode 20",
        "description": "SMALLVILLE Season 2 Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gz4xe4zo122i31o/Smallville_S02E20.mp4/file"
      },
      {
        "id": "1159",
        "episodeNumber": 21,
        "title": "SMALLVILLE S02 - Episode 21",
        "description": "SMALLVILLE Season 2 Episode 21.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6du8h7u24mmbxxq/Smallville.S02E21.mp4/file"
      }
    ],
  },
{
  id: "107",
  title: "SMALLVILLE",
  slug: "smallville-season-1",
  year: "2001",
  rating: "N/A",
  image: "smallville1.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Smallville explores the teenage years of Clark Kent before he becomes Superman, following his discovery of extraordinary powers and the secrets surrounding his origins. The supplied links cover Season 1, Episodes 1–18.",
  language: "English",
  genres: ["Action", "Adventure", "Drama", "Science Fiction"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1160",
        "episodeNumber": 1,
        "title": "SMALLVILLE S01 - Episode 1",
        "description": "SMALLVILLE Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/baaze3gxsg9e",
        "downloadUrl": "https://www.mediafire.com/file/z83vd3fuldl5mkd/Smallville_S01_Ep1_Hd_Mp4.mp4/file"
      },
      {
        "id": "1161",
        "episodeNumber": 2,
        "title": "SMALLVILLE S01 - Episode 2",
        "description": "SMALLVILLE Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/umysrnz7s084",
        "downloadUrl": "https://www.mediafire.com/file/v035jahahrbzl2g/Smallville_S01_Ep2_Hd_Mp4.mp4/file"
      },
      {
        "id": "1162",
        "episodeNumber": 3,
        "title": "SMALLVILLE S01 - Episode 3",
        "description": "SMALLVILLE Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/740sifhu7fvn",
        "downloadUrl": "https://www.mediafire.com/file/0klgqdbjmhmxxqp/Smallville_S01_Ep3_Hd_Mp4.mp4/file"
      },
      {
        "id": "1163",
        "episodeNumber": 4,
        "title": "SMALLVILLE S01 - Episode 4",
        "description": "SMALLVILLE Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/qpba6h30bb70",
        "downloadUrl": "https://www.mediafire.com/file/4exm91tzkqjy5y2/Smallville_S01_Ep4_Hd_Mp4.mp4/file"
      },
      {
        "id": "1164",
        "episodeNumber": 5,
        "title": "SMALLVILLE S01 - Episode 5",
        "description": "SMALLVILLE Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t9hd290m8fmc5mu/Smallville_S01_Ep5_Hd_Mp4.mp4/file"
      },
      {
        "id": "1165",
        "episodeNumber": 6,
        "title": "SMALLVILLE S01 - Episode 6",
        "description": "SMALLVILLE Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ep8eai0kwm80zw1/Smallville_S01_Ep6_Hd_Mp4.mp4/file"
      },
      {
        "id": "1166",
        "episodeNumber": 7,
        "title": "SMALLVILLE S01 - Episode 7",
        "description": "SMALLVILLE Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dadw57zz1nsmlxg/Smallville_S01_Ep7_Hd_Mp4.mp4/file"
      },
      {
        "id": "1167",
        "episodeNumber": 8,
        "title": "SMALLVILLE S01 - Episode 8",
        "description": "SMALLVILLE Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zzk6qjx140v3i1j/Smallville_S01_Ep8_Hd_Mp4.mp4/file"
      },
      {
        "id": "1168",
        "episodeNumber": 9,
        "title": "SMALLVILLE S01 - Episode 9",
        "description": "SMALLVILLE Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ygxdws7gnlagrvg/Smallville_S01_Ep9_Hd_Mp4.mp4/file"
      },
      {
        "id": "1169",
        "episodeNumber": 10,
        "title": "SMALLVILLE S01 - Episode 10",
        "description": "SMALLVILLE Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fig54f06rgh7tuu/Smallville_S01_Ep10_Hd_Mp4.mp4/file"
      },
      {
        "id": "1170",
        "episodeNumber": 11,
        "title": "SMALLVILLE S01 - Episode 11",
        "description": "SMALLVILLE Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4pa2qkz6vtiaf8w/Smallville_S01_Ep11_Mp4.mp4/file"
      },
      {
        "id": "1171",
        "episodeNumber": 12,
        "title": "SMALLVILLE S01 - Episode 12",
        "description": "SMALLVILLE Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y7qkur4lxshatbs/Smallville_S01_Ep12_Mp4.mp4/file"
      },
      {
        "id": "1172",
        "episodeNumber": 13,
        "title": "SMALLVILLE S01 - Episode 13",
        "description": "SMALLVILLE Season 1 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jjhqxi6wyidnds7/Smallville_S01_Ep13_Hd_Mp4.mp4/file"
      },
      {
        "id": "1173",
        "episodeNumber": 14,
        "title": "SMALLVILLE S01 - Episode 14",
        "description": "SMALLVILLE Season 1 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yxhw6gb20whwcm3/Smallville_S01_Ep14__Hd_Mp4.mp4/file"
      },
      {
        "id": "1174",
        "episodeNumber": 15,
        "title": "SMALLVILLE S01 - Episode 15",
        "description": "SMALLVILLE Season 1 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fvlw6lf1t7dm6ub/Smallville_S01_Ep15_Hd_Mp4.mp4/file"
      },
      {
        "id": "1175",
        "episodeNumber": 16,
        "title": "SMALLVILLE S01 - Episode 16",
        "description": "SMALLVILLE Season 1 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a6a7ttw9ceb2onv/Smallville_S1_Ep16_Hd_Mp4.mp4/file"
      },
      {
        "id": "1176",
        "episodeNumber": 17,
        "title": "SMALLVILLE S01 - Episode 17",
        "description": "SMALLVILLE Season 1 Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bgfk807p2ngzpvi/Smallville_S01_Ep17_Hd_Mp4.mp4/file"
      },
      {
        "id": "1177",
        "episodeNumber": 18,
        "title": "SMALLVILLE S01 - Episode 18",
        "description": "SMALLVILLE Season 1 Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/whsja7i6dztjov9/Smallville_S01_Ep18_Hd_Mp4.mp4/file"
      }
    ],
  },
{
  id: "108",
  title: "QUEEN FOR SEVEN DAYS",
  slug: "queen-for-seven-days",
  year: "2017",
  rating: "N/A",
  image: "queen-for-seven-days.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Queen for Seven Days is a historical Korean romantic drama inspired by the tragic love story of Queen Dangyeong and King Jungjong during the Joseon Dynasty. The supplied links cover Season 1, Episodes 1–20.",
  language: "Korean",
  genres: ["Historical", "Romance", "Drama"],
  explainer: "",

    episodes: [
      {
        "id": "1178",
        "episodeNumber": 1,
        "title": "QUEEN FOR SEVEN DAYS - Episode 1",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/a0qb4ety3yea",
        "downloadUrl": "https://www.mediafire.com/file/ukj328musq5brsx/Queen_For_Seven_Days_Ep1_Hd.mp4/file"
      },
      {
        "id": "1179",
        "episodeNumber": 2,
        "title": "QUEEN FOR SEVEN DAYS - Episode 2",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/yzetfyd6tt49",
        "downloadUrl": "https://www.mediafire.com/file/h9ym0vkgcducscr/Queen_For_Seven_Days_Ep2_Hd.mp4/file"
      },
      {
        "id": "1180",
        "episodeNumber": 3,
        "title": "QUEEN FOR SEVEN DAYS - Episode 3",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/goxxjjtwnv4a",
        "downloadUrl": "https://www.mediafire.com/file/tc375i59reowbji/Queen_For_Seven_Days_Ep3_Hd.mp4/file"
      },
      {
        "id": "1181",
        "episodeNumber": 4,
        "title": "QUEEN FOR SEVEN DAYS - Episode 4",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/gdgv32kip4nb",
        "downloadUrl": "https://www.mediafire.com/file/c82hh8n4gmzf4kt/Queen_For_Seven_Days_Ep4_Hd.mp4/file"
      },
      {
        "id": "1182",
        "episodeNumber": 5,
        "title": "QUEEN FOR SEVEN DAYS - Episode 5",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/w1ruq39886xslb8/Queen_for_Seven_Days_Ep5_Hd.mp4/file"
      },
      {
        "id": "1183",
        "episodeNumber": 6,
        "title": "QUEEN FOR SEVEN DAYS - Episode 6",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hhssr1dvjxjoylv/Queen_For_Seven_Days_Ep6_Hd.mp4/file"
      },
      {
        "id": "1184",
        "episodeNumber": 7,
        "title": "QUEEN FOR SEVEN DAYS - Episode 7",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9nh9jawtg6dl8bf/Queen_For_Seven_Days_Ep7_Hd.mp4/file"
      },
      {
        "id": "1185",
        "episodeNumber": 8,
        "title": "QUEEN FOR SEVEN DAYS - Episode 8",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qt9yttehlvztz6d/Queen_For_Seven_Days_Ep8_Hd.mp4/file"
      },
      {
        "id": "1186",
        "episodeNumber": 9,
        "title": "QUEEN FOR SEVEN DAYS - Episode 9",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oh2oip9rdg1820e/Queen_For_Seven_Days_Ep9_Hd.mp4/file"
      },
      {
        "id": "1187",
        "episodeNumber": 10,
        "title": "QUEEN FOR SEVEN DAYS - Episode 10",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qt2nuvtbheak26g/Queen_For_Seven_Days_Ep10_Hd.mp4/file"
      },
      {
        "id": "1188",
        "episodeNumber": 11,
        "title": "QUEEN FOR SEVEN DAYS - Episode 11",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2bor4aw4qkl5bqc/Queen+For+Seven+Days+Ep11+Hd.mp4/file"
      },
      {
        "id": "1189",
        "episodeNumber": 12,
        "title": "QUEEN FOR SEVEN DAYS - Episode 12",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d7902foumxvrdin/Queen+For+Seven+Days+Ep12+Hd.mp4/file"
      },
      {
        "id": "1190",
        "episodeNumber": 13,
        "title": "QUEEN FOR SEVEN DAYS - Episode 13",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wf7b8brb8nsrcy5/Queen+For+Seven+Days+Ep13+Hd.mp4/file"
      },
      {
        "id": "1191",
        "episodeNumber": 14,
        "title": "QUEEN FOR SEVEN DAYS - Episode 14",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t75zo82z5dx3l65/Queen+For+Seven+Days+Ep14+Hd.mp4/file"
      },
      {
        "id": "1192",
        "episodeNumber": 15,
        "title": "QUEEN FOR SEVEN DAYS - Episode 15",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gq38i8rnz8t8top/Queen+For+Seven+Days+Ep15+Hd.mp4/file"
      },
      {
        "id": "1193",
        "episodeNumber": 16,
        "title": "QUEEN FOR SEVEN DAYS - Episode 16",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9ud4nf4687xfhww/Queen+For+Seven+Days+Ep16+Hd.mp4/file"
      },
      {
        "id": "1194",
        "episodeNumber": 17,
        "title": "QUEEN FOR SEVEN DAYS - Episode 17",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vz2mq0n5ejvtqmi/Queen+For+Seven+Days+Ep17+Hd.mp4/file"
      },
      {
        "id": "1195",
        "episodeNumber": 18,
        "title": "QUEEN FOR SEVEN DAYS - Episode 18",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ej4dmiiaj4nt88k/Queen+For+Seven+Days+Ep18+Hd.mp4/file"
      },
      {
        "id": "1196",
        "episodeNumber": 19,
        "title": "QUEEN FOR SEVEN DAYS - Episode 19",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0h1lqfqd4ap6q26/Queen+For+Seven+Days+Ep19+Hd.mp4/file"
      },
      {
        "id": "1197",
        "episodeNumber": 20,
        "title": "QUEEN FOR SEVEN DAYS - Episode 20",
        "description": "QUEEN FOR SEVEN DAYS Season 1 Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mhgnuwp9lzzrar6/Queen+For+Seven+Days+Ep20+Final+Hd.mp4/file"
      }
    ],
  },
// THE OVAL - SEASON 2
{
  id: "109",
  title: "THE OVAL",
  slug: "the-oval-season-2",
  year: "2021",
  rating: "N/A",
  image: "the-oval2.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "The Oval Season 2 is presented in an Agasobanuye version by ROCK KIMOMO.",
  language: "English",
  genres: ["Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1198",
        "episodeNumber": 1,
        "title": "THE OVAL S02 - Episode 1",
        "description": "THE OVAL Season 2 Episode 1.",
        "streamUrl": "https://hgcloud.to/6ogqt7w5ow3a",
        "downloadUrl": "https://www.mediafire.com/file/sf5pkzcc3vedr6o/THE+OVAL+S02+E01.mp4/file"
      },
      {
        "id": "1199",
        "episodeNumber": 2,
        "title": "THE OVAL S02 - Episode 2",
        "description": "THE OVAL Season 2 Episode 2.",
        "streamUrl": "https://hgcloud.to/jmexssbmin5i",
        "downloadUrl": "https://www.mediafire.com/file/1poatkuyr6tiqgh/THE+OVAL+S02+E02.mp4/file"
      },
      {
        "id": "1200",
        "episodeNumber": 3,
        "title": "THE OVAL S02 - Episode 3",
        "description": "THE OVAL Season 2 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o3unuzph9kb7kqi/THE+OVAL+S02+E03.mp4/file"
      },
      {
        "id": "1201",
        "episodeNumber": 4,
        "title": "THE OVAL S02 - Episode 4",
        "description": "THE OVAL Season 2 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6iuwiqo4ft7hozz/THE+OVAL+S02+E04.mp4/file"
      },
      {
        "id": "1202",
        "episodeNumber": 5,
        "title": "THE OVAL S02 - Episode 5",
        "description": "THE OVAL Season 2 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0fzkkt68jc6kevr/THE+OVAL+S02+E05.mp4/file"
      },
      {
        "id": "1203",
        "episodeNumber": 6,
        "title": "THE OVAL S02 - Episode 6",
        "description": "THE OVAL Season 2 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gyvi0vd17v2h7zm/THE+OVAL+S02+E06.mp4/file"
      },
      {
        "id": "1204",
        "episodeNumber": 7,
        "title": "THE OVAL S02 - Episode 7",
        "description": "THE OVAL Season 2 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gjntzlpmem4jd90/THE+OVAL+S02+E07.mp4/file"
      }
    ],
  },

// STRONG WOMAN
{
  id: "110",
  title: "STRONG WOMAN",
  slug: "strong-woman",
  year: "",
  rating: "N/A",
  image: "strong-woman.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Strong Woman is presented in an Agasobanuye version by ROCK KIMOMO.",
  language: "English",
  genres: ["Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1205",
        "episodeNumber": 1,
        "title": "STRONG WOMAN - Episode 1",
        "description": "STRONG WOMAN Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/lr274jcalc0b",
        "downloadUrl": "https://www.mediafire.com/file/i1qbbettp87rh87/Strong+Women+Ep1+Hd.mp4/file"
      },
      {
        "id": "1206",
        "episodeNumber": 2,
        "title": "STRONG WOMAN - Episode 2",
        "description": "STRONG WOMAN Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/658kgmw9f70s",
        "downloadUrl": "https://www.mediafire.com/file/mazydo3m5qpruze/STRONG_WOMAN_E02.mp4/file"
      },
      {
        "id": "1207",
        "episodeNumber": 3,
        "title": "STRONG WOMAN - Episode 3",
        "description": "STRONG WOMAN Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/hxm5pu0oc2bz",
        "downloadUrl": "https://www.mediafire.com/file/rq4qfuyjh5g9ufm/Strong_Woman_Ep3_Hd.mp4/file"
      },
      {
        "id": "1208",
        "episodeNumber": 4,
        "title": "STRONG WOMAN - Episode 4",
        "description": "STRONG WOMAN Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o4ltld05nvyt149/Strong_Woman_Ep4_Hd.mp4/file"
      },
      {
        "id": "1209",
        "episodeNumber": 5,
        "title": "STRONG WOMAN - Episode 5",
        "description": "STRONG WOMAN Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/834052o51uky1uc/Strong_Woman_Ep5_Hd.mp4/file"
      },
      {
        "id": "1210",
        "episodeNumber": 6,
        "title": "STRONG WOMAN - Episode 6",
        "description": "STRONG WOMAN Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o5ceqkp2s809893/STRONG+WOMAN+E06.mp4/file"
      },
      {
        "id": "1211",
        "episodeNumber": 7,
        "title": "STRONG WOMAN - Episode 7",
        "description": "STRONG WOMAN Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e2hpixhjd1993vs/Strong_Woman_Ep7_Hd.mp4/file"
      },
      {
        "id": "1212",
        "episodeNumber": 8,
        "title": "STRONG WOMAN - Episode 8",
        "description": "STRONG WOMAN Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xlej6t1lbh63mxc/Strong_Woman_Ep8_Hd.mp4/file"
      },
      {
        "id": "1213",
        "episodeNumber": 9,
        "title": "STRONG WOMAN - Episode 9",
        "description": "STRONG WOMAN Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/k07uxb991j4xqi0/Strong_Woman_Ep9_Hd.mp4/file"
      },
      {
        "id": "1214",
        "episodeNumber": 10,
        "title": "STRONG WOMAN - Episode 10",
        "description": "STRONG WOMAN Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ke1qc5aytot0jjm/Strong_Woman_Ep10_Hd.mp4/file"
      },
      {
        "id": "1215",
        "episodeNumber": 11,
        "title": "STRONG WOMAN - Episode 11",
        "description": "STRONG WOMAN Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/iamldde63mx5ren/Strong_Woman_Ep11_Hd.mp4/file"
      },
      {
        "id": "1216",
        "episodeNumber": 12,
        "title": "STRONG WOMAN - Episode 12",
        "description": "STRONG WOMAN Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/b5j1s13o3z5t5c6/Strong_Woman_Ep12_Hd.mp4/file"
      },
      {
        "id": "1217",
        "episodeNumber": 13,
        "title": "STRONG WOMAN - Episode 13",
        "description": "STRONG WOMAN Season 1 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jfyoei78gi4am3o/Strong_Woman_Ep13.mp4/file"
      },
      {
        "id": "1218",
        "episodeNumber": 14,
        "title": "STRONG WOMAN - Episode 14",
        "description": "STRONG WOMAN Season 1 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/v5cg97b547ae35m/Strong_Woman_Ep14_Hd.mp4/file"
      },
      {
        "id": "1219",
        "episodeNumber": 15,
        "title": "STRONG WOMAN - Episode 15",
        "description": "STRONG WOMAN Season 1 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cpz52ms310xcw4r/Strong_Woman_Ep15_Hd.mp4/file"
      },
      {
        "id": "1220",
        "episodeNumber": 16,
        "title": "STRONG WOMAN - Episode 16",
        "description": "STRONG WOMAN Season 1 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n85swnj1m4vjcn6/Strong__Woman_Ep16_Final_Hd%25281%2529.mp4/file"
      }
    ],
  },

// OFF CAMPUS
{
  id: "111",
  title: "OFF CAMPUS",
  slug: "off-campus",
  year: "",
  rating: "N/A",
  image: "off-campus.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Off Campus is presented in an Agasobanuye version by PERFECT.",
  language: "English",
  genres: ["Drama", "Romance"],
  explainer: "PERFECT",

    episodes: [
      {
        "id": "1221",
        "episodeNumber": 1,
        "title": "OFF CAMPUS - Episode 1",
        "description": "OFF CAMPUS Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0u0rlzlmakped6s/Off_Campus_1_Perfect.mp4/file"
      },
      {
        "id": "1222",
        "episodeNumber": 2,
        "title": "OFF CAMPUS - Episode 2",
        "description": "OFF CAMPUS Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yqucwt3q0b7hoti/Off_Campus_2_Perfect.mp4/file"
      },
      {
        "id": "1223",
        "episodeNumber": 3,
        "title": "OFF CAMPUS - Episode 3",
        "description": "OFF CAMPUS Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e7plsxkcva7b1az/OFF_CAMPUS_3_perfect.mp4/file"
      },
      {
        "id": "1224",
        "episodeNumber": 4,
        "title": "OFF CAMPUS - Episode 4",
        "description": "OFF CAMPUS Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4lc7fgk4yd2aodw/OFF_CAMPUS_4_perfect.mp4/file"
      },
      {
        "id": "1225",
        "episodeNumber": 5,
        "title": "OFF CAMPUS - Episode 5",
        "description": "OFF CAMPUS Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ib8f3368qv4p4mo/OFF+CAMPUS+5+perfect.mp4/file"
      },
      {
        "id": "1226",
        "episodeNumber": 6,
        "title": "OFF CAMPUS - Episode 6",
        "description": "OFF CAMPUS Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8xo5srmxqxc1a3x/Off+Campus+6+Perfect.mp4/file"
      },
      {
        "id": "1227",
        "episodeNumber": 7,
        "title": "OFF CAMPUS - Episode 7",
        "description": "OFF CAMPUS Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6g2qxrz3wrkgw9f/Off+Campus+7.mp4/file"
      },
      {
        "id": "1228",
        "episodeNumber": 8,
        "title": "OFF CAMPUS - Episode 8",
        "description": "OFF CAMPUS Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5q0ombg1r8g4xih/OFF_CAMPUS_8FINAL_perfect.mp4/file"
      }
    ],
  },

// WATCHING YOU
{
  id: "112",
  title: "WATCHING YOU",
  slug: "watching-you",
  year: "2026",
  rating: "N/A",
  image: "watching-you.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Watching You is presented in an Agasobanuye version by SANKARA.",
  language: "English",
  genres: ["Thriller", "Drama"],
  explainer: "SANKARA",

    episodes: [
      {
        "id": "1229",
        "episodeNumber": 1,
        "title": "WATCHING YOU - Episode 1",
        "description": "WATCHING YOU Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/qdhgjnba43l5",
        "downloadUrl": "https://www.mediafire.com/file/4opd9y1to4yoq5g/WATCHING+YOU+E01.mp4/file"
      },
      {
        "id": "1230",
        "episodeNumber": 2,
        "title": "WATCHING YOU - Episode 2",
        "description": "WATCHING YOU Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/wi7xd3c5qxxq",
        "downloadUrl": "https://www.mediafire.com/file/7vqolp8r2pg7pe2/Watching+you+(2026)+Ep2.mp4/file"
      },
      {
        "id": "1231",
        "episodeNumber": 3,
        "title": "WATCHING YOU - Episode 3",
        "description": "WATCHING YOU Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/gr0b4d2pw0im",
        "downloadUrl": "https://www.mediafire.com/file/aq6b5o7q41y1qcm/Watching+you+Ep3+(2026).mp4/file"
      },
      {
        "id": "1232",
        "episodeNumber": 4,
        "title": "WATCHING YOU - Episode 4",
        "description": "WATCHING YOU Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/51np97w1lj7ss1i/Watching_you_Ep4%25282026%2529.mp4/file"
      },
      {
        "id": "1233",
        "episodeNumber": 5,
        "title": "WATCHING YOU - Episode 5",
        "description": "WATCHING YOU Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fktox2hocvtf7z3/Watching_you_Ep5_%25282026%2529.mp4/file"
      },
      {
        "id": "1234",
        "episodeNumber": 6,
        "title": "WATCHING YOU - Episode 6",
        "description": "WATCHING YOU Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vicplpv9rf0t9nm/Watching_you_Ep6_%25282026%2529.mp4/file"
      }
    ],
  },

// POLYGAMIST
{
  id: "113",
  title: "POLYGAMIST",
  slug: "polygamist",
  year: "",
  rating: "N/A",
  image: "polygamist.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Polygamist is presented in an Agasobanuye version by ROCK KIMOMO.",
  language: "English",
  genres: ["Drama"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1235",
        "episodeNumber": 1,
        "title": "POLYGAMIST - Episode 1",
        "description": "POLYGAMIST Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/1c2vxaw1bzcs",
        "downloadUrl": "https://www.mediafire.com/file/ch376qbujjdycj9/POLYGAMIST_EP1_.mp4/file"
      },
      {
        "id": "1236",
        "episodeNumber": 2,
        "title": "POLYGAMIST - Episode 2",
        "description": "POLYGAMIST Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/hhc9ls0jixvz",
        "downloadUrl": "https://www.mediafire.com/file/3lq9efpgk9w0bq6/POLYGAMIST_EP2.mp4/file"
      },
      {
        "id": "1237",
        "episodeNumber": 3,
        "title": "POLYGAMIST - Episode 3",
        "description": "POLYGAMIST Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/30yjixprztr7",
        "downloadUrl": "https://www.mediafire.com/file/twyr4q8ftcmj114/POLYGAMIST_EP3.mp4/file"
      },
      {
        "id": "1238",
        "episodeNumber": 4,
        "title": "POLYGAMIST - Episode 4",
        "description": "POLYGAMIST Season 1 Episode 4.",
        "streamUrl": "https://hgcloud.to/xi4zcwtlduig",
        "downloadUrl": "https://www.mediafire.com/file/aakys0ywb9vopwq/POLYGAMIST_EP4.mp4/file"
      },
      {
        "id": "1239",
        "episodeNumber": 5,
        "title": "POLYGAMIST - Episode 5",
        "description": "POLYGAMIST Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/27wc3fbof0g4a22/POLYGAMIST_EP5.mp4/file"
      },
      {
        "id": "1240",
        "episodeNumber": 6,
        "title": "POLYGAMIST - Episode 6",
        "description": "POLYGAMIST Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g1pjhh2nakvy8ns/POLYGAMIST_EP6.mp4/file"
      },
      {
        "id": "1241",
        "episodeNumber": 7,
        "title": "POLYGAMIST - Episode 7",
        "description": "POLYGAMIST Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gdfnstmp4zwvse5/POLYGAMIST_EP7.mp4/file"
      },
      {
        "id": "1242",
        "episodeNumber": 8,
        "title": "POLYGAMIST - Episode 8",
        "description": "POLYGAMIST Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/s9dnnmvv3ojkcyf/POLYGAMIST_EP8.mp4/file"
      },
      {
        "id": "1243",
        "episodeNumber": 9,
        "title": "POLYGAMIST - Episode 9",
        "description": "POLYGAMIST Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mpj5wxpfy8tkzgd/POLYGAMIST_EP9.mp4/file"
      },
      {
        "id": "1244",
        "episodeNumber": 10,
        "title": "POLYGAMIST - Episode 10",
        "description": "POLYGAMIST Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jjlcnjvu30pelos/POLYGAMIST_E10.mp4/file"
      },
      {
        "id": "1245",
        "episodeNumber": 11,
        "title": "POLYGAMIST - Episode 11",
        "description": "POLYGAMIST Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jsaaa15zjifie95/POLYGAMIST_Ep_11.mp4/file"
      },
      {
        "id": "1246",
        "episodeNumber": 12,
        "title": "POLYGAMIST - Episode 12",
        "description": "POLYGAMIST Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x7gnamml9qdxf7p/POLYGAMIST_E12.mp4/file"
      },
      {
        "id": "1247",
        "episodeNumber": 13,
        "title": "POLYGAMIST - Episode 13",
        "description": "POLYGAMIST Season 1 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6lz09taijbelhgt/POLYGAMIST_EP13.mp4/file"
      },
      {
        "id": "1248",
        "episodeNumber": 14,
        "title": "POLYGAMIST - Episode 14",
        "description": "POLYGAMIST Season 1 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/pm0o1qoe4k0a4nv/POLYGAMIST_EP14.mp4/file"
      },
      {
        "id": "1249",
        "episodeNumber": 15,
        "title": "POLYGAMIST - Episode 15",
        "description": "POLYGAMIST Season 1 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/571ecjmjhnsguep/POLYGAMIST_EP15.mp4/file"
      },
      {
        "id": "1250",
        "episodeNumber": 16,
        "title": "POLYGAMIST - Episode 16",
        "description": "POLYGAMIST Season 1 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z92h4y3db4spp5r/POLYGAMIST_EP16.mp4/file"
      },
      {
        "id": "1251",
        "episodeNumber": 17,
        "title": "POLYGAMIST - Episode 17",
        "description": "POLYGAMIST Season 1 Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g07g1noksgniq1b/POLYGAMIST_E17.mp4/file"
      },
      {
        "id": "1252",
        "episodeNumber": 18,
        "title": "POLYGAMIST - Episode 18",
        "description": "POLYGAMIST Season 1 Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zpm1wgpou77hrqo/POLYGAMIST_E18.mp4/file"
      },
      {
        "id": "1253",
        "episodeNumber": 19,
        "title": "POLYGAMIST - Episode 19",
        "description": "POLYGAMIST Season 1 Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9m6agr7b17xfqe0/POLYGAMIST_EP19.mp4/file"
      },
      {
        "id": "1254",
        "episodeNumber": 20,
        "title": "POLYGAMIST - Episode 20",
        "description": "POLYGAMIST Season 1 Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1ju9bnvkjq94oiy/POLYGAMIST_EP20.mp4/file"
      },
      {
        "id": "1255",
        "episodeNumber": 21,
        "title": "POLYGAMIST - Episode 21",
        "description": "POLYGAMIST Season 1 Episode 21.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qjt7293qobiaii7/POLYGAMIST_EP21.mp4/file"
      },
      {
        "id": "1256",
        "episodeNumber": 22,
        "title": "POLYGAMIST - Episode 22",
        "description": "POLYGAMIST Season 1 Episode 22.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bbw7t1zdhspns1m/POLYGAMIST_EP22+Fi.mp4/file"
      }
    ],
  },

// GAME OF THRONES - SEASON 6
{
  id: "114",
  title: "GAME OF THRONES",
  slug: "game-of-thrones-season-6",
  year: "2016",
  rating: "N/A",
  image: "game-of-thrones6.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Game of Thrones Season 6 is presented in an Agasobanuye version by PK-The Sound.",
  language: "English",
  genres: ["Fantasy", "Drama", "Adventure"],
  explainer: "PK-The Sound",

    episodes: [
      {
        "id": "1257",
        "episodeNumber": 1,
        "title": "GAME OF THRONES S06 - Episode 1",
        "description": "GAME OF THRONES Season 6 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wd9x81benpxommp/Game_Of_Throne_S6_Ep1.mp4/file"
      },
      {
        "id": "1258",
        "episodeNumber": 2,
        "title": "GAME OF THRONES S06 - Episode 2",
        "description": "GAME OF THRONES Season 6 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d7ulnku1sd91c5a/Game_Of_Throne_S6_Ep2.mp4/file"
      },
      {
        "id": "1259",
        "episodeNumber": 3,
        "title": "GAME OF THRONES S06 - Episode 3",
        "description": "GAME OF THRONES Season 6 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nrjpf8c0y466d10/Game_Of_Throne_S6_Ep3.mp4/file"
      },
      {
        "id": "1260",
        "episodeNumber": 4,
        "title": "GAME OF THRONES S06 - Episode 4",
        "description": "GAME OF THRONES Season 6 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/80fctm43imjncvu/Game_Of_Throne_S6_Ep4.mp4/file"
      },
      {
        "id": "1261",
        "episodeNumber": 5,
        "title": "GAME OF THRONES S06 - Episode 5",
        "description": "GAME OF THRONES Season 6 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9cihjv00m2tuvhx/Game_Of_Throne_S6_Ep5.mp4/file"
      },
      {
        "id": "1262",
        "episodeNumber": 6,
        "title": "GAME OF THRONES S06 - Episode 6",
        "description": "GAME OF THRONES Season 6 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/myorslpighngrwe/Game_Of_Throne_S6_Ep6.mp4/file"
      },
      {
        "id": "1263",
        "episodeNumber": 7,
        "title": "GAME OF THRONES S06 - Episode 7",
        "description": "GAME OF THRONES Season 6 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/s4p20s5qjcvi9ek/Game_Of_Throne_S6_Ep7.mp4/file"
      },
      {
        "id": "1264",
        "episodeNumber": 8,
        "title": "GAME OF THRONES S06 - Episode 8",
        "description": "GAME OF THRONES Season 6 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/saqitnol1oh3a94/Game_Of_Throne_S6_Ep8.mp4/file"
      },
      {
        "id": "1265",
        "episodeNumber": 9,
        "title": "GAME OF THRONES S06 - Episode 9",
        "description": "GAME OF THRONES Season 6 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7qdoh22hywav5oq/Game_Of_Throne_S6_Ep9.mp4/file"
      },
      {
        "id": "1266",
        "episodeNumber": 10,
        "title": "GAME OF THRONES S06 - Episode 10",
        "description": "GAME OF THRONES Season 6 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2196hvyobjugjkj/Game_Of_Throne_S6_Ep10_Final.mp4/file"
      }
    ],
  },

// GAME OF THRONES - SEASON 7
{
  id: "115",
  title: "GAME OF THRONES",
  slug: "game-of-thrones-season-7",
  year: "2017",
  rating: "N/A",
  image: "game-of-thrones7.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Game of Thrones Season 7 is presented in an Agasobanuye version by PK-The Sound.",
  language: "English",
  genres: ["Fantasy", "Drama", "Adventure"],
  explainer: "PK-The Sound",

    episodes: [
      {
        "id": "1267",
        "episodeNumber": 1,
        "title": "GAME OF THRONES S07 - Episode 1",
        "description": "GAME OF THRONES Season 7 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/abs6ny9q4hsd2c3/Game+Of+Throne+S7+Ep1+Hd.mp4/file"
      },
      {
        "id": "1268",
        "episodeNumber": 2,
        "title": "GAME OF THRONES S07 - Episode 2",
        "description": "GAME OF THRONES Season 7 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6kr9pfimdubjs4c/Game+Of+Throne+S7+Ep2.mp4/file"
      },
      {
        "id": "1269",
        "episodeNumber": 3,
        "title": "GAME OF THRONES S07 - Episode 3",
        "description": "GAME OF THRONES Season 7 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qi168f2o3e6l5tc/Game+Of+Throne+S7+Ep3.mp4/file"
      },
      {
        "id": "1270",
        "episodeNumber": 4,
        "title": "GAME OF THRONES S07 - Episode 4",
        "description": "GAME OF THRONES Season 7 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z6jk2zkf8vx1zxt/Game+Of+Throne+S7+Ep4.mp4/file"
      },
      {
        "id": "1271",
        "episodeNumber": 5,
        "title": "GAME OF THRONES S07 - Episode 5",
        "description": "GAME OF THRONES Season 7 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mp3qc932mc6o4i4/Game+Of+Thrones+S7ep05.mp4/file"
      },
      {
        "id": "1272",
        "episodeNumber": 6,
        "title": "GAME OF THRONES S07 - Episode 6",
        "description": "GAME OF THRONES Season 7 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t06l08td15ol017/Game+Of+Throne+S7+Ep6.mp4/file"
      },
      {
        "id": "1273",
        "episodeNumber": 7,
        "title": "GAME OF THRONES S07 - Episode 7",
        "description": "GAME OF THRONES Season 7 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/96u2r873vty9hc0/Game+Of+Throne+S7+Ep7+Final.mp4/file"
      }
    ],
  },

// GAME OF THRONES - SEASON 8
{
  id: "116",
  title: "GAME OF THRONES",
  slug: "game-of-thrones-season-8",
  year: "2019",
  rating: "N/A",
  image: "game-of-thrones.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Game of Thrones Season 8 is presented in an Agasobanuye version by PK-The Sound.",
  language: "English",
  genres: ["Fantasy", "Drama", "Adventure"],
  explainer: "PK-The Sound",

    episodes: [
      {
        "id": "1274",
        "episodeNumber": 1,
        "title": "GAME OF THRONES S08 - Episode 1",
        "description": "GAME OF THRONES Season 8 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dubh7k94wp2wmrg/Game_Of_Throne_S8_Ep1_Hd.mp4/file"
      },
      {
        "id": "1275",
        "episodeNumber": 2,
        "title": "GAME OF THRONES S08 - Episode 2",
        "description": "GAME OF THRONES Season 8 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l2etttojuve37ap/Game_Of_Throne_S8_Ep2.mp4/file"
      },
      {
        "id": "1276",
        "episodeNumber": 3,
        "title": "GAME OF THRONES S08 - Episode 3",
        "description": "GAME OF THRONES Season 8 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nad286fj7tpfycb/Game_Of_Throne_S8_Ep_3.mp4/file"
      },
      {
        "id": "1277",
        "episodeNumber": 4,
        "title": "GAME OF THRONES S08 - Episode 4",
        "description": "GAME OF THRONES Season 8 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qndiyx9l38cr5rh/Game_Of_Throne_S8_Ep4.mp4/file"
      },
      {
        "id": "1278",
        "episodeNumber": 5,
        "title": "GAME OF THRONES S08 - Episode 5",
        "description": "GAME OF THRONES Season 8 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/egkkk1vse50rba4/Game_Of_Throne_S8_Ep5.mp4/file"
      },
      {
        "id": "1279",
        "episodeNumber": 6,
        "title": "GAME OF THRONES S08 - Episode 6",
        "description": "GAME OF THRONES Season 8 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ngr6luiqbtgdlsw/Game_Of_Throne_S8_Final.mp4/file"
      }
    ],
  },
// UMTHETHO
{
  id: "117",
  title: "UMTHETHO",
  slug: "umthetho",
  year: "",
  rating: "N/A",
  image: "umthetho.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "UMTHETHO is presented in an Agasobanuye version by Mussa Savimbi. The available collection contains 5 episodes.",
  language: "English",
  genres: ["Drama", "Crime"],
  explainer: "MUSSA SAVIMBI",

    episodes: [
      {
        "id": "1280",
        "episodeNumber": 1,
        "title": "UMTHETHO - Episode 1",
        "description": "UMTHETHO Episode 1.",
        "streamUrl": "https://hgcloud.to/prblh5bg3l9r",
        "downloadUrl": "https://www.mediafire.com/file/czd92hs2dsy7550/UMTHETHO+1_1.mp4/file"
      },
      {
        "id": "1281",
        "episodeNumber": 2,
        "title": "UMTHETHO - Episode 2",
        "description": "UMTHETHO Episode 2.",
        "streamUrl": "https://hgcloud.to/6i107ulwfph0",
        "downloadUrl": "https://www.mediafire.com/file/0v9wupp3os1bysi/UMTHETHO+2_1.mp4/file"
      },
      {
        "id": "1282",
        "episodeNumber": 3,
        "title": "UMTHETHO - Episode 3",
        "description": "UMTHETHO Episode 3.",
        "streamUrl": "https://hgcloud.to/7spajg59jrb2",
        "downloadUrl": "https://www.mediafire.com/file/feilh2h4we3s8qe/UMUTHETHO+EP3.mp4/file"
      },
      {
        "id": "1283",
        "episodeNumber": 4,
        "title": "UMTHETHO - Episode 4",
        "description": "UMTHETHO Episode 4.",
        "streamUrl": "https://hgcloud.to/efrrh77pk6k6",
        "downloadUrl": "https://www.mediafire.com/file/hq1irhqiaocffkc/UMUTHETHO_EP4.mp4/file"
      },
      {
        "id": "1284",
        "episodeNumber": 5,
        "title": "UMTHETHO - Episode 5",
        "description": "UMTHETHO Episode 5.",
        "streamUrl": "https://hgcloud.to/lk2golzudx28",
        "downloadUrl": "https://www.mediafire.com/file/40590kts0f54hvt/UMTHETHO+5.mp4/file"
      }
    ],
  },

// OASIS
{
  id: "118",
  title: "OASIS",
  slug: "oasis",
  year: "",
  rating: "N/A",
  image: "oasis.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "OASIS is presented in an Agasobanuye version by Dylan. The available collection contains 3 episodes.",
  language: "English",
  genres: ["Drama", "Romance"],
  explainer: "DYLAN",

    episodes: [
      {
        "id": "1285",
        "episodeNumber": 1,
        "title": "OASIS - Episode 1",
        "description": "OASIS Episode 1.",
        "streamUrl": "https://hgcloud.to/dgs2wsdzbz5f",
        "downloadUrl": "https://www.mediafire.com/file/2y4p5uh92avwk9e/Oasis_Ep1.mp4/file"
      },
      {
        "id": "1286",
        "episodeNumber": 2,
        "title": "OASIS - Episode 2",
        "description": "OASIS Episode 2.",
        "streamUrl": "https://hgcloud.to/n25u2k6yuarx",
        "downloadUrl": "https://www.mediafire.com/file/w617dfnlygyhok6/Oasis_Ep2.mp4/file"
      },
      {
        "id": "1287",
        "episodeNumber": 3,
        "title": "OASIS - Episode 3",
        "description": "OASIS Episode 3.",
        "streamUrl": "https://hgcloud.to/3wgi8fe2llsz",
        "downloadUrl": "https://www.mediafire.com/file/crcmu0fdyp9shw3/Oasis_Ep3.mp4/file"
      }
    ],
  },

// SALAKAAR
{
  id: "119",
  title: "SALAKAAR",
  slug: "salakaar",
  year: "",
  rating: "N/A",
  image: "salakaar.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "SALAKAAR is presented in an Agasobanuye version by Skov. The available collection contains 6 episode entries, including Episode 3 Part B.",
  language: "English",
  genres: ["Crime", "Thriller", "Mystery"],
  explainer: "SKOV",

    episodes: [
      {
        "id": "1288",
        "episodeNumber": 1,
        "title": "SALAKAAR - Episode 1",
        "description": "SALAKAAR Episode 1.",
        "streamUrl": "https://hgcloud.to/tu2wnvn08g13",
        "downloadUrl": "https://www.mediafire.com/file/ymw7oybq5j3530f/SALAKAAR+EP+1+.mp4/file"
      },
      {
        "id": "1289",
        "episodeNumber": 2,
        "title": "SALAKAAR - Episode 2",
        "description": "SALAKAAR Episode 2.",
        "streamUrl": "https://hgcloud.to/nnmoqcgm1gk0",
        "downloadUrl": "https://www.mediafire.com/file/oufv3ak71x4ia7c/SALAKAAR+EP+2.mp4/file"
      },
      {
        "id": "1290",
        "episodeNumber": 3,
        "title": "SALAKAAR - Episode 3",
        "description": "SALAKAAR Episode 3.",
        "streamUrl": "https://hgcloud.to/hdx95rbsu8d2",
        "downloadUrl": "https://www.mediafire.com/file/52hwoixj0jh2ild/salakaar_ep3.mp4/file"
      },
      {
        "id": "1291",
        "episodeNumber": 3,
        "title": "SALAKAAR - Episode 3 Part B",
        "description": "SALAKAAR Episode 3 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3tgs9nsmjnyplae/Salakaar_Ep3_b.mp4/file"
      },
      {
        "id": "1292",
        "episodeNumber": 4,
        "title": "SALAKAAR - Episode 4",
        "description": "SALAKAAR Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p4z44t6kgnyfcvv/Salakaar_Ep4.mp4/file"
      },
      {
        "id": "1293",
        "episodeNumber": 5,
        "title": "SALAKAAR - Episode 5",
        "description": "SALAKAAR Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lg2i770h8w4sk8l/Salakaar_Ep5_Final.mp4/file"
      }
    ],
  },

// M.I.A
{
  id: "120",
  title: "M.I.A",
  slug: "mia",
  year: "",
  rating: "N/A",
  image: "mia.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "M.I.A is presented in an Agasobanuye version by Skov. The available collection contains 9 episodes.",
  language: "English",
  genres: ["Crime", "Drama", "Thriller"],
  explainer: "SKOV",

    episodes: [
      {
        "id": "1294",
        "episodeNumber": 1,
        "title": "M.I.A - Episode 1",
        "description": "M.I.A Episode 1.",
        "streamUrl": "https://hgcloud.to/t861ncjuym18",
        "downloadUrl": "https://www.mediafire.com/file/st5bscj1l3f1nlt/M.i.a_1_.mp4/file"
      },
      {
        "id": "1295",
        "episodeNumber": 2,
        "title": "M.I.A - Episode 2",
        "description": "M.I.A Episode 2.",
        "streamUrl": "https://hgcloud.to/7yr84p7zsozc",
        "downloadUrl": "https://www.mediafire.com/file/eg5ka0q25450rpl/M.i.a_2.mp4/file"
      },
      {
        "id": "1296",
        "episodeNumber": 3,
        "title": "M.I.A - Episode 3",
        "description": "M.I.A Episode 3.",
        "streamUrl": "https://hgcloud.to/qxutmavyb0hm",
        "downloadUrl": "https://www.mediafire.com/file/476d44zlxt0tnu6/M.i.a_3.mp4/file"
      },
      {
        "id": "1297",
        "episodeNumber": 4,
        "title": "M.I.A - Episode 4",
        "description": "M.I.A Episode 4.",
        "streamUrl": "https://hgcloud.to/mmbp2d3runz4",
        "downloadUrl": "https://www.mediafire.com/file/lmkdu4mxnnupvot/M.i.a_4.mp4/file"
      },
      {
        "id": "1298",
        "episodeNumber": 5,
        "title": "M.I.A - Episode 5",
        "description": "M.I.A Episode 5.",
        "streamUrl": "https://hgcloud.to/dxxz82k0zqrm",
        "downloadUrl": "https://www.mediafire.com/file/dlsuczaxsahzgvq/M.i.a_5.mp4/file"
      },
      {
        "id": "1299",
        "episodeNumber": 6,
        "title": "M.I.A - Episode 6",
        "description": "M.I.A Episode 6.",
        "streamUrl": "https://hgcloud.to/ep170s5bwj5g",
        "downloadUrl": "https://www.mediafire.com/file/432tvbu4jrobm7v/M.i.a_6.mp4/file"
      },
      {
        "id": "1300",
        "episodeNumber": 7,
        "title": "M.I.A - Episode 7",
        "description": "M.I.A Episode 7.",
        "streamUrl": "https://hgcloud.to/hqog6u05jvel",
        "downloadUrl": "https://www.mediafire.com/file/vt3gsth0jb35axz/M.i.a_7.mp4/file"
      },
      {
        "id": "1301",
        "episodeNumber": 8,
        "title": "M.I.A - Episode 8",
        "description": "M.I.A Episode 8.",
        "streamUrl": "https://hgcloud.to/ye2egd67uttl",
        "downloadUrl": "https://www.mediafire.com/file/x8r8nw90ayno55m/M.i.a_8.mp4/file"
      },
      {
        "id": "1302",
        "episodeNumber": 9,
        "title": "M.I.A - Episode 9",
        "description": "M.I.A Episode 9.",
        "streamUrl": "https://hgcloud.to/xace41b8xqrh",
        "downloadUrl": "https://www.mediafire.com/file/1ut9kc6jxq4hqk9/M.i.a_9_Final.mp4/file"
      }
    ],
  },

// 50 STATES OF FRIGHT
{
  id: "121",
  title: "50 STATES OF FRIGHT",
  slug: "50-states-of-fright",
  year: "",
  rating: "N/A",
  image: "50-states-of-fright.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "50 States of Fright is presented in an Agasobanuye version by Rock Kimomo. The collection contains 10 numbered episodes, with Episode 6 split into Parts A and B.",
  language: "English",
  genres: ["Horror", "Thriller", "Mystery"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1303",
        "episodeNumber": 1,
        "title": "50 STATES OF FRIGHT - Episode 1",
        "description": "50 STATES OF FRIGHT Episode 1.",
        "streamUrl": "https://hgcloud.to/wa88fn01tcni",
        "downloadUrl": "https://www.mediafire.com/file/ybmjgzucj8mbuim/50_STATES_OF_FRIGHT_HD_EP1.mp4/file"
      },
      {
        "id": "1304",
        "episodeNumber": 2,
        "title": "50 STATES OF FRIGHT - Episode 2",
        "description": "50 STATES OF FRIGHT Episode 2.",
        "streamUrl": "https://hgcloud.to/qmj6b07keuxe",
        "downloadUrl": "https://www.mediafire.com/file/njg5eljid3k2kdk/50_STATES_OF_FRIGHT_HD_EP2.mp4/file"
      },
      {
        "id": "1305",
        "episodeNumber": 3,
        "title": "50 STATES OF FRIGHT - Episode 3",
        "description": "50 STATES OF FRIGHT Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jwei3ci8y2joorx/50_STATES_OF_FRIGHT_HD_EP3.mp4/file"
      },
      {
        "id": "1306",
        "episodeNumber": 4,
        "title": "50 STATES OF FRIGHT - Episode 4",
        "description": "50 STATES OF FRIGHT Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gl5us1owf27fc4z/50_STATES_OF_FRIGHT_HD_EP4.mp4/file"
      },
      {
        "id": "1307",
        "episodeNumber": 5,
        "title": "50 STATES OF FRIGHT - Episode 5",
        "description": "50 STATES OF FRIGHT Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9xc4nubgebd6i5f/50_STATES_OF_FRIGHT_HD_EP5.mp4/file"
      },
      {
        "id": "1308",
        "episodeNumber": 6,
        "title": "50 STATES OF FRIGHT - Episode 6 Part A",
        "description": "50 STATES OF FRIGHT Episode 6 Part A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wj7t71ipqk8r5hj/50_STATES_OF_FRIGHT_HD_EP6_A.mp4/file"
      },
      {
        "id": "1309",
        "episodeNumber": 6,
        "title": "50 STATES OF FRIGHT - Episode 6 Part B",
        "description": "50 STATES OF FRIGHT Episode 6 Part B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j92m1684yty8e11/50_STATES_OF_FRIGHT_HD_EP6_B.mp4/file"
      },
      {
        "id": "1310",
        "episodeNumber": 7,
        "title": "50 STATES OF FRIGHT - Episode 7",
        "description": "50 STATES OF FRIGHT Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vwhsgz0txf3rrpu/50_STATES_OF_FRIGHT_HD_EP7.mp4/file"
      },
      {
        "id": "1311",
        "episodeNumber": 8,
        "title": "50 STATES OF FRIGHT - Episode 8",
        "description": "50 STATES OF FRIGHT Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1l8iwxr9rhd6zvw/50_STATES_OF_FRIGHT_HD_EP8.mp4/file"
      },
      {
        "id": "1312",
        "episodeNumber": 9,
        "title": "50 STATES OF FRIGHT - Episode 9",
        "description": "50 STATES OF FRIGHT Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q5og9864dj7cck9/50_STATES_OF_FRIGHT_HD_EP9.mp4/file"
      },
      {
        "id": "1313",
        "episodeNumber": 10,
        "title": "50 STATES OF FRIGHT - Episode 10",
        "description": "50 STATES OF FRIGHT Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mpxl4kx9f2jk6ua/50_STATES_OF_FRIGHT_HD_EP10.mp4/file"
      }
    ],
  },

// SEE - SEASON 1
{
  id: "122",
  title: "SEE",
  slug: "see-season-1",
  year: "",
  rating: "N/A",
  image: "see.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "SEE Season 1 is presented in an Agasobanuye version by Rock Kimomo. The available collection contains Episodes 1, 2, 3, 5, 6, 7 and 8.",
  language: "English",
  genres: ["Fantasy", "Drama", "Adventure"],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1314",
        "episodeNumber": 1,
        "title": "SEE - Season 1 Episode 1",
        "description": "SEE Season 1 Episode 1.",
        "streamUrl": "https://hgcloud.to/556p4i8mvqwi",
        "downloadUrl": "https://www.mediafire.com/file/vu52hodnkqoyb3c/See_S01_Ep1_Hd.mp4/file"
      },
      {
        "id": "1315",
        "episodeNumber": 2,
        "title": "SEE - Season 1 Episode 2",
        "description": "SEE Season 1 Episode 2.",
        "streamUrl": "https://hgcloud.to/vn9wr9xgjql1",
        "downloadUrl": "https://www.mediafire.com/file/lz20hydk18p9qh5/See_S01_Ep2_Hd.mp4/file"
      },
      {
        "id": "1316",
        "episodeNumber": 3,
        "title": "SEE - Season 1 Episode 3",
        "description": "SEE Season 1 Episode 3.",
        "streamUrl": "https://hgcloud.to/5rry8iyj1sii",
        "downloadUrl": "https://www.mediafire.com/file/k1kbp14f5bheysx/See_S01_Ep3_Hd.mp4/file"
      },
      {
        "id": "1317",
        "episodeNumber": 5,
        "title": "SEE - Season 1 Episode 5",
        "description": "SEE Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2i06ykmn1y855vb/See_S01_Ep5_Hd.mp4/file"
      },
      {
        "id": "1318",
        "episodeNumber": 6,
        "title": "SEE - Season 1 Episode 6",
        "description": "SEE Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/427w2p7fpezsbp0/See_S01_Ep6_Hd.mp4/file"
      },
      {
        "id": "1319",
        "episodeNumber": 7,
        "title": "SEE - Season 1 Episode 7",
        "description": "SEE Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gax4zcz3pnxpgkw/See_S01_Ep7_Hd.mp4/file"
      },
      {
        "id": "1320",
        "episodeNumber": 8,
        "title": "SEE - Season 1 Episode 8",
        "description": "SEE Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cjhjs82tcxae04a/See_S01_Ep8_Hd%25281%2529.mp4/file"
      }
    ],
  },
{
  id: "123",
  title: "LADY VOYEUR",
  slug: "lady-voyeur",
  year: "2023",
  rating: "N/A",
  image: "lady-voyeur.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "Lady Voyeur Season 1 is presented as an Agasobanuye version and contains 10 episodes.",
  language: "Portuguese",
  genres: ["Drama", "Thriller", "Mystery"],
  explainer: "Rock Kimomo",

    episodes: [
      {
        "id": "1321",
        "episodeNumber": 1,
        "title": "LADY VOYEUR - Episode 1",
        "description": "Lady Voyeur Season 1 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2502wu4evxghul5/LADY_VOYEUR_S01E01.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/chbadq436a30ohq/FormatFactoryLADY_VOYEUR_EP1.mp4/file"
        ]
      },
      {
        "id": "1322",
        "episodeNumber": 2,
        "title": "LADY VOYEUR - Episode 2",
        "description": "Lady Voyeur Season 1 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hh8nc56jliyci94/LADY+VOYEUR+S01E02.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/o9jowrhy7rrgmiu/FormatFactoryLADY_VOYEUR_EP2.mp4/file"
        ]
      },
      {
        "id": "1323",
        "episodeNumber": 3,
        "title": "LADY VOYEUR - Episode 3",
        "description": "Lady Voyeur Season 1 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0ipcwq1hzrb2g6r/LADY+VOYEUR+S01E03.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/qy4ez4wbalupr4h/FormatFactoryLADY_VOYEUR_EP3.mp4/file"
        ]
      },
      {
        "id": "1324",
        "episodeNumber": 4,
        "title": "LADY VOYEUR - Episode 4",
        "description": "Lady Voyeur Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sitrxkvmv8gzwj7/LADY+VOYEUR+S01E04.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/bbx14yo2n0o32w1/FormatFactoryLADY_VOYEUR_EP4.mp4/file"
        ]
      },
      {
        "id": "1325",
        "episodeNumber": 5,
        "title": "LADY VOYEUR - Episode 5",
        "description": "Lady Voyeur Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/45kjualr0n402cp/Lady.Voyeur.S01E05.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/hrxhnyuj1qg6ula/FormatFactoryLADY_VOYEUR_EP5.mp4/file"
        ]
      },
      {
        "id": "1326",
        "episodeNumber": 6,
        "title": "LADY VOYEUR - Episode 6",
        "description": "Lady Voyeur Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lsc1mcn2d9j4wqp/Lady.Voyeur.S01E06.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/2becsuonu4o4k5a/FormatFactoryLADY_VOYEUR_EP6.mp4/file"
        ]
      },
      {
        "id": "1327",
        "episodeNumber": 7,
        "title": "LADY VOYEUR - Episode 7",
        "description": "Lady Voyeur Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/k6xseyh42jdnykt/Lady.Voyeur.S01E07.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/wpnsos3fiw01ok9/FormatFactoryLADY_VOYEUR_EP7.mp4/file"
        ]
      },
      {
        "id": "1328",
        "episodeNumber": 8,
        "title": "LADY VOYEUR - Episode 8",
        "description": "Lady Voyeur Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hgjtndgsnbqg6ez/Lady.Voyeur.S01E08.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/7mtjx5ryfi12mvs/FormatFactoryLADY_VOYEUR_EP8.mp4/file"
        ]
      },
      {
        "id": "1329",
        "episodeNumber": 9,
        "title": "LADY VOYEUR - Episode 9",
        "description": "Lady Voyeur Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g4dur50cy8omqcm/Lady.Voyeur.S01E09.mp4/file",
        "alternateDownloadUrls": [
          "https://www.mediafire.com/file/re9b0lf57c95uw1/FormatFactoryLADY_VOYEUR_EP9.mp4/file"
        ]
      },
      {
        "id": "1330",
        "episodeNumber": 10,
        "title": "LADY VOYEUR - Episode 10 Final",
        "description": "Lady Voyeur Season 1 Episode 10 Final.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dn81qhgzuhpj8ks/Lady.Voyeur.S01E10final.mp4/file"
      },
      {
        "id": "1607",
        "episodeNumber": 10,
        "title": "LADY VOYEUR - Episode 10A",
        "description": "LADY VOYEUR Episode 10A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ryrcyhdr28b0npu/FormatFactoryLADY_VOYEUR_EP10A_FINAL.mp4/file"
      }
    ],
  },
{
  id: "124",
  title: "LIVE UP TO YOUR NAME",
  slug: "live-up-to-your-name",
  year: "",
  rating: "N/A",
  image: "live-up-to-your-name.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "LIVE UP TO YOUR NAME is presented in an Agasobanuye version by ROCK KIMOMO. The available collection contains Episodes 1 to 24, including split parts.",
  language: "",
  genres: [],
  explainer: "ROCK KIMOMO",

    episodes: [
      {
        "id": "1331",
        "episodeNumber": 1,
        "title": "LIVE UP TO YOUR NAME - Episode 1 A",
        "description": "LIVE UP TO YOUR NAME Episode 1 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/004qpj3q9kd0gw9/1.mp4/file"
      },
      {
        "id": "1332",
        "episodeNumber": 1,
        "title": "LIVE UP TO YOUR NAME - Episode 1 B",
        "description": "LIVE UP TO YOUR NAME Episode 1 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sjbhtzbtwt4q1h9/1b.mp4/file"
      },
      {
        "id": "1333",
        "episodeNumber": 2,
        "title": "LIVE UP TO YOUR NAME - Episode 2",
        "description": "LIVE UP TO YOUR NAME Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r97h4m6m4iho1cl/2.mp4/file"
      },
      {
        "id": "1334",
        "episodeNumber": 3,
        "title": "LIVE UP TO YOUR NAME - Episode 3 A",
        "description": "LIVE UP TO YOUR NAME Episode 3 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rojyj4ukbwd18rk/3a.mp4/file"
      },
      {
        "id": "1335",
        "episodeNumber": 3,
        "title": "LIVE UP TO YOUR NAME - Episode 3 B",
        "description": "LIVE UP TO YOUR NAME Episode 3 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/62h0qi9h16jhmkq/3b.mp4/file"
      },
      {
        "id": "1336",
        "episodeNumber": 4,
        "title": "LIVE UP TO YOUR NAME - Episode 4",
        "description": "LIVE UP TO YOUR NAME Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6veqy6gvh3izvlo/4a.mp4/file"
      },
      {
        "id": "1337",
        "episodeNumber": 5,
        "title": "LIVE UP TO YOUR NAME - Episode 5",
        "description": "LIVE UP TO YOUR NAME Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9avigfeoobyhrn0/4b--5.mp4/file"
      },
      {
        "id": "1338",
        "episodeNumber": 6,
        "title": "LIVE UP TO YOUR NAME - Episode 6 A",
        "description": "LIVE UP TO YOUR NAME Episode 6 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ng5ic7qlnowpnkk/6a.mp4/file"
      },
      {
        "id": "1339",
        "episodeNumber": 6,
        "title": "LIVE UP TO YOUR NAME - Episode 6 B",
        "description": "LIVE UP TO YOUR NAME Episode 6 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/am4st957x1tkqyd/6b.mp4/file"
      },
      {
        "id": "1340",
        "episodeNumber": 7,
        "title": "LIVE UP TO YOUR NAME - Episode 7",
        "description": "LIVE UP TO YOUR NAME Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gslxy9kkham4amo/7.mp4/file"
      },
      {
        "id": "1341",
        "episodeNumber": 8,
        "title": "LIVE UP TO YOUR NAME - Episode 8",
        "description": "LIVE UP TO YOUR NAME Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/666orkxsastkcrn/8.mp4/file"
      },
      {
        "id": "1342",
        "episodeNumber": 9,
        "title": "LIVE UP TO YOUR NAME - Episode 9",
        "description": "LIVE UP TO YOUR NAME Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bqeumhc43kjhpl0/9.mp4/file"
      },
      {
        "id": "1343",
        "episodeNumber": 10,
        "title": "LIVE UP TO YOUR NAME - Episode 10",
        "description": "LIVE UP TO YOUR NAME Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lpxemm7jj5ehywz/10.mp4/file"
      },
      {
        "id": "1344",
        "episodeNumber": 11,
        "title": "LIVE UP TO YOUR NAME - Episode 11",
        "description": "LIVE UP TO YOUR NAME Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z1y221ac793sab2/11.mp4/file"
      },
      {
        "id": "1345",
        "episodeNumber": 12,
        "title": "LIVE UP TO YOUR NAME - Episode 12",
        "description": "LIVE UP TO YOUR NAME Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7gnn04its6t3o3x/12.mp4/file"
      },
      {
        "id": "1346",
        "episodeNumber": 13,
        "title": "LIVE UP TO YOUR NAME - Episode 13",
        "description": "LIVE UP TO YOUR NAME Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wshpq9qiseoq2wv/13.mp4/file"
      },
      {
        "id": "1347",
        "episodeNumber": 14,
        "title": "LIVE UP TO YOUR NAME - Episode 14",
        "description": "LIVE UP TO YOUR NAME Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qfu3kjojg9s2vjm/14.mp4/file"
      },
      {
        "id": "1348",
        "episodeNumber": 15,
        "title": "LIVE UP TO YOUR NAME - Episode 15 A",
        "description": "LIVE UP TO YOUR NAME Episode 15 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z72cifuie94ya13/15.mp4/file"
      },
      {
        "id": "1349",
        "episodeNumber": 15,
        "title": "LIVE UP TO YOUR NAME - Episode 15 B",
        "description": "LIVE UP TO YOUR NAME Episode 15 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yda655lhvnamcpn/15b.mp4/file"
      },
      {
        "id": "1350",
        "episodeNumber": 16,
        "title": "LIVE UP TO YOUR NAME - Episode 16",
        "description": "LIVE UP TO YOUR NAME Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/63l0uym1rflrdfs/16.mp4/file"
      },
      {
        "id": "1351",
        "episodeNumber": 17,
        "title": "LIVE UP TO YOUR NAME - Episode 17",
        "description": "LIVE UP TO YOUR NAME Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/95xfqyic47p0ygb/17.mp4/file"
      },
      {
        "id": "1352",
        "episodeNumber": 18,
        "title": "LIVE UP TO YOUR NAME - Episode 18 A",
        "description": "LIVE UP TO YOUR NAME Episode 18 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/32k0vvqz8zt9mfc/18a.mp4/file"
      },
      {
        "id": "1353",
        "episodeNumber": 18,
        "title": "LIVE UP TO YOUR NAME - Episode 18 B",
        "description": "LIVE UP TO YOUR NAME Episode 18 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ynn739q7xc0nloa/18b.mp4/file"
      },
      {
        "id": "1354",
        "episodeNumber": 19,
        "title": "LIVE UP TO YOUR NAME - Episode 19",
        "description": "LIVE UP TO YOUR NAME Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7ib876q62j3di6v/19.mp4/file"
      },
      {
        "id": "1355",
        "episodeNumber": 20,
        "title": "LIVE UP TO YOUR NAME - Episode 20 A",
        "description": "LIVE UP TO YOUR NAME Episode 20 A.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/apq8fd16q00ou83/20A.mp4/file"
      },
      {
        "id": "1356",
        "episodeNumber": 20,
        "title": "LIVE UP TO YOUR NAME - Episode 20 B",
        "description": "LIVE UP TO YOUR NAME Episode 20 B.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zuv9x6s9fi08j1q/20B.mp4/file"
      },
      {
        "id": "1357",
        "episodeNumber": 21,
        "title": "LIVE UP TO YOUR NAME - Episode 21",
        "description": "LIVE UP TO YOUR NAME Episode 21.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qhjpc0mcube65s2/21.mp4/file"
      },
      {
        "id": "1358",
        "episodeNumber": 22,
        "title": "LIVE UP TO YOUR NAME - Episode 22",
        "description": "LIVE UP TO YOUR NAME Episode 22.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r3uozirtk3be12t/22.mp4/file"
      },
      {
        "id": "1359",
        "episodeNumber": 23,
        "title": "LIVE UP TO YOUR NAME - Episode 23",
        "description": "LIVE UP TO YOUR NAME Episode 23.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7xw36v7m5ugzh6y/23.mp4/file"
      },
      {
        "id": "1360",
        "episodeNumber": 24,
        "title": "LIVE UP TO YOUR NAME - Episode 24 Final",
        "description": "LIVE UP TO YOUR NAME Episode 24 Final.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cz0e8gk1dpxzvck/24final%25282%2529.mp4/file"
      }
    ],
  },
// INCOGNITO

{
  id: "125",
  title: "INCOGNITO",
  slug: "incognito",
  year: "",
  rating: "N/A",
  image: "incognito.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "INCOGNITO is presented in an Agasobanuye version by ROCK KIMOMO. The available collection contains 21 episodes.",
  language: "",
 genres: ["Drama", "Thriller", "Mystery"],
  explainer: "B THE GREAT",

    episodes: [
      {
        "id": "1361",
        "episodeNumber": 1,
        "title": "INCOGNITO - Episode 1",
        "description": "INCOGNITO Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/46vn0dgi7opfy7b/INCOGNITO_S01.mp4/file"
      },
      {
        "id": "1362",
        "episodeNumber": 2,
        "title": "INCOGNITO - Episode 2",
        "description": "INCOGNITO Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/26qk8lbu3d6tpkw/INCOGNITO_S02.mp4/file"
      },
      {
        "id": "1363",
        "episodeNumber": 3,
        "title": "INCOGNITO - Episode 3",
        "description": "INCOGNITO Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0m1dkzx06j4duoi/INCOGNITO_S03.mp4/file"
      },
      {
        "id": "1364",
        "episodeNumber": 4,
        "title": "INCOGNITO - Episode 4",
        "description": "INCOGNITO Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/heass508dk54vqr/INCOGNITO_S04.mp4/file"
      },
      {
        "id": "1365",
        "episodeNumber": 5,
        "title": "INCOGNITO - Episode 5",
        "description": "INCOGNITO Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d0cmxk83z9xtjck/INCOGNITO_S05.mp4/file"
      },
      {
        "id": "1366",
        "episodeNumber": 6,
        "title": "INCOGNITO - Episode 6",
        "description": "INCOGNITO Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/aii5yvzgznmqoi5/INCOGNITO_S06.mp4/file"
      },
      {
        "id": "1367",
        "episodeNumber": 7,
        "title": "INCOGNITO - Episode 7",
        "description": "INCOGNITO Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ygbv68d48ecj737/INCOGNITO_S07.mp4/file"
      },
      {
        "id": "1368",
        "episodeNumber": 8,
        "title": "INCOGNITO - Episode 8",
        "description": "INCOGNITO Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qq2yyqze9agwcqi/INCOGNITO_S08.mp4/file"
      },
      {
        "id": "1369",
        "episodeNumber": 9,
        "title": "INCOGNITO - Episode 9",
        "description": "INCOGNITO Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lba0e9wpb0pe2pz/INCOGNITO_S09.mp4/file"
      },
      {
        "id": "1370",
        "episodeNumber": 10,
        "title": "INCOGNITO - Episode 10",
        "description": "INCOGNITO Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cz2wax7woax670r/INCOGNITO_S10.mp4/file"
      },
      {
        "id": "1371",
        "episodeNumber": 11,
        "title": "INCOGNITO - Episode 11",
        "description": "INCOGNITO Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vfr94sd6gjosvj6/INCOGNITO_S11.mp4/file"
      },
      {
        "id": "1372",
        "episodeNumber": 12,
        "title": "INCOGNITO - Episode 12",
        "description": "INCOGNITO Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/24mm2e7pnx06q5c/INCOGNITO_S12.mp4/file"
      },
      {
        "id": "1373",
        "episodeNumber": 13,
        "title": "INCOGNITO - Episode 13",
        "description": "INCOGNITO Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mpsj8vi1cdf584o/INCOGNITO_S13.mp4/file"
      },
      {
        "id": "1374",
        "episodeNumber": 14,
        "title": "INCOGNITO - Episode 14",
        "description": "INCOGNITO Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dsma718roi54zqe/INCOGNITO_S14.mp4/file"
      },
      {
        "id": "1375",
        "episodeNumber": 15,
        "title": "INCOGNITO - Episode 15",
        "description": "INCOGNITO Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3pw30wcicl1xv13/INCOGNITO_S15.mp4/file"
      },
      {
        "id": "1376",
        "episodeNumber": 16,
        "title": "INCOGNITO - Episode 16",
        "description": "INCOGNITO Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nilklhhi7vdt5ys/INCOGNITO_S16.mp4/file"
      },
      {
        "id": "1377",
        "episodeNumber": 17,
        "title": "INCOGNITO - Episode 17",
        "description": "INCOGNITO Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/93ya6oib6eetddq/INCOGNITO_S17.mp4/file"
      },
      {
        "id": "1378",
        "episodeNumber": 18,
        "title": "INCOGNITO - Episode 18",
        "description": "INCOGNITO Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/58dvg4i44f0fbnq/INCOGNITO_S18.mp4/file"
      },
      {
        "id": "1379",
        "episodeNumber": 19,
        "title": "INCOGNITO - Episode 19",
        "description": "INCOGNITO Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3n55x0seqnschu0/INCOGNITO_S19.mp4/file"
      },
      {
        "id": "1380",
        "episodeNumber": 20,
        "title": "INCOGNITO - Episode 20",
        "description": "INCOGNITO Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gdg79353vgnp7h9/INCOGNITO_S20.mp4/file"
      },
      {
        "id": "1381",
        "episodeNumber": 21,
        "title": "INCOGNITO - Episode 21",
        "description": "INCOGNITO Episode 21.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6b0vsgq851coqia/INCOGNITO_S21.mp4/file"
      },
      {
        "id": "1382",
        "episodeNumber": 22,
        "title": "INCOGNITO - Episode 22",
        "description": "INCOGNITO Episode 22.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/92tv40flwxw94cf/INCOGNITO_S22.mp4/file"
      },
      {
        "id": "1383",
        "episodeNumber": 23,
        "title": "INCOGNITO - Episode 23",
        "description": "INCOGNITO Episode 23.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6ut4p6dhezswsv7/INCOGNITO_S23.mp4/file"
      },
      {
        "id": "1384",
        "episodeNumber": 24,
        "title": "INCOGNITO - Episode 24",
        "description": "INCOGNITO Episode 24.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9zvxomuxy1ok1p5/INCOGNITO_S24.mp4/file"
      },
      {
        "id": "1385",
        "episodeNumber": 25,
        "title": "INCOGNITO - Episode 25",
        "description": "INCOGNITO Episode 25.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3c8yld5sa7334u3/INCOGNITO_S25.mp4/file"
      },
      {
        "id": "1386",
        "episodeNumber": 26,
        "title": "INCOGNITO - Episode 26",
        "description": "INCOGNITO Episode 26.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hd77vhdosyi2j5p/INCOGNITO_S26.mp4/file"
      },
      {
        "id": "1387",
        "episodeNumber": 27,
        "title": "INCOGNITO - Episode 27",
        "description": "INCOGNITO Episode 27.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/awrtc7dvmtvmt35/INCOGNITO_S27.mp4/file"
      },
      {
        "id": "1388",
        "episodeNumber": 28,
        "title": "INCOGNITO - Episode 28",
        "description": "INCOGNITO Episode 28.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xw0tszyumnes2kx/INCOGNITO_S28.mp4/file"
      },
      {
        "id": "1389",
        "episodeNumber": 29,
        "title": "INCOGNITO - Episode 29",
        "description": "INCOGNITO Episode 29.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rgc7vza1hhhkt83/INCOGNITO_S29.mp4/file"
      },
      {
        "id": "1390",
        "episodeNumber": 30,
        "title": "INCOGNITO - Episode 30",
        "description": "INCOGNITO Episode 30.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rl8fdfxms0j3ra9/INCOGNITO_S30.mp4/file"
      },
      {
        "id": "1391",
        "episodeNumber": 31,
        "title": "INCOGNITO - Episode 31",
        "description": "INCOGNITO Episode 31.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e4q50jws7lfukwt/INCOGNITO_S31.mp4/file"
      },
      {
        "id": "1392",
        "episodeNumber": 32,
        "title": "INCOGNITO - Episode 32",
        "description": "INCOGNITO Episode 32.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ismo2yiwm34r18g/INCOGNITO_S32.mp4/file"
      },
      {
        "id": "1393",
        "episodeNumber": 33,
        "title": "INCOGNITO - Episode 33",
        "description": "INCOGNITO Episode 33.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jcwy806gsoxjlu5/INCOGNITO_S33.mp4/file"
      },
      {
        "id": "1394",
        "episodeNumber": 34,
        "title": "INCOGNITO - Episode 34",
        "description": "INCOGNITO Episode 34.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5b93g3o65d2p4qy/INCOGNITO_S34.mp4/file"
      },
      {
        "id": "1395",
        "episodeNumber": 35,
        "title": "INCOGNITO - Episode 35",
        "description": "INCOGNITO Episode 35.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5nokzootjzm6pqm/INCOGNITO_S35.mp4/file"
      },
      {
        "id": "1396",
        "episodeNumber": 36,
        "title": "INCOGNITO - Episode 36",
        "description": "INCOGNITO Episode 36.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6h63c69cs4u8kh7/INCOGNITO_S36.mp4/file"
      },
      {
        "id": "1397",
        "episodeNumber": 37,
        "title": "INCOGNITO - Episode 37",
        "description": "INCOGNITO Episode 37.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lnr33xm2vcatix1/INCOGNITO_S37.mp4/file"
      },
      {
        "id": "1398",
        "episodeNumber": 38,
        "title": "INCOGNITO - Episode 38",
        "description": "INCOGNITO Episode 38.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o8md45w240l6vxq/INCOGNITO_S38.mp4/file"
      },
      {
        "id": "1399",
        "episodeNumber": 39,
        "title": "INCOGNITO - Episode 39",
        "description": "INCOGNITO Episode 39.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a06t4wymyshd0z2/INCOGNITO_S39.mp4/file"
      },
      {
        "id": "1400",
        "episodeNumber": 40,
        "title": "INCOGNITO - Episode 40",
        "description": "INCOGNITO Episode 40.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/26f1k09jl7va2zq/INCOGNITO_S40.mp4/file"
      },
      {
        "id": "1401",
        "episodeNumber": 41,
        "title": "INCOGNITO - Episode 41",
        "description": "INCOGNITO Episode 41.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/v45i0jswxc7i5jk/INCOGNITO_S41.mp4/file"
      },
      {
        "id": "1402",
        "episodeNumber": 42,
        "title": "INCOGNITO - Episode 42",
        "description": "INCOGNITO Episode 42.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uzmdjqaxdiqyxaz/INCOGNITO_S42.mp4/file"
      },
      {
        "id": "1403",
        "episodeNumber": 43,
        "title": "INCOGNITO - Episode 43",
        "description": "INCOGNITO Episode 43.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/4xtq85nzyarw2f7/INCOGNITO_S43.mp4/file"
      },
      {
        "id": "1404",
        "episodeNumber": 44,
        "title": "INCOGNITO - Episode 44",
        "description": "INCOGNITO Episode 44.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ta412d3vxzqmrjh/INCOGNITO_S44.mp4/file"
      },
      {
        "id": "1405",
        "episodeNumber": 45,
        "title": "INCOGNITO - Episode 45",
        "description": "INCOGNITO Episode 45.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/r9h9oht7d5xgf46/INCOGNITO_S45.mp4/file"
      },
      {
        "id": "1406",
        "episodeNumber": 46,
        "title": "INCOGNITO - Episode 46",
        "description": "INCOGNITO Episode 46.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jc4vh28xsza02k4/INCOGNITO_S46.mp4/file"
      },
      {
        "id": "1407",
        "episodeNumber": 47,
        "title": "INCOGNITO - Episode 47",
        "description": "INCOGNITO Episode 47.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/u8tzu8lo13uxze3/INCOGNITO_S47.mp4/file"
      },
      {
        "id": "1408",
        "episodeNumber": 48,
        "title": "INCOGNITO - Episode 48",
        "description": "INCOGNITO Episode 48.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sxmikj8zbn249cp/INCOGNITO_S48.mp4/file"
      },
      {
        "id": "1409",
        "episodeNumber": 49,
        "title": "INCOGNITO - Episode 49",
        "description": "INCOGNITO Episode 49.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/f78cts9xe0pbujy/INCOGNITO_S49.mp4/file"
      },
      {
        "id": "1410",
        "episodeNumber": 50,
        "title": "INCOGNITO - Episode 50",
        "description": "INCOGNITO Episode 50.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ee8wi98u9nr0jhk/INCOGNITO_S50.mp4/file"
      },
      {
        "id": "1411",
        "episodeNumber": 51,
        "title": "INCOGNITO - Episode 51",
        "description": "INCOGNITO Episode 51.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rga85cgr4vca3ov/INCOGNITO_S51.mp4/file"
      },
      {
        "id": "1412",
        "episodeNumber": 52,
        "title": "INCOGNITO - Episode 52",
        "description": "INCOGNITO Episode 52.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vf34y4mpa7watzf/INCOGNITO_S52.mp4/file"
      },
      {
        "id": "1413",
        "episodeNumber": 53,
        "title": "INCOGNITO - Episode 53",
        "description": "INCOGNITO Episode 53.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/it6ftpnsnsy6xpz/INCOGNITO_S53.mp4/file"
      },
      {
        "id": "1414",
        "episodeNumber": 54,
        "title": "INCOGNITO - Episode 54",
        "description": "INCOGNITO Episode 54.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xx5znugijavw2sp/INCOGNITO_S54.mp4/file"
      },
      {
        "id": "1415",
        "episodeNumber": 55,
        "title": "INCOGNITO - Episode 55",
        "description": "INCOGNITO Episode 55.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rltgesyr0bn94d9/INCOGNITO_S55.mp4/file"
      },
      {
        "id": "1416",
        "episodeNumber": 56,
        "title": "INCOGNITO - Episode 56",
        "description": "INCOGNITO Episode 56.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nko9ydva0ry52em/INCOGNITO_S56.mp4/file"
      },
      {
        "id": "1417",
        "episodeNumber": 57,
        "title": "INCOGNITO - Episode 57",
        "description": "INCOGNITO Episode 57.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uhrv8zy7qgy6oh7/INCOGNITO_S57.mp4/file"
      },
      {
        "id": "1418",
        "episodeNumber": 58,
        "title": "INCOGNITO - Episode 58",
        "description": "INCOGNITO Episode 58.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a50tw8srqn69eca/INCOGNITO_S58.mp4/file"
      },
      {
        "id": "1419",
        "episodeNumber": 59,
        "title": "INCOGNITO - Episode 59",
        "description": "INCOGNITO Episode 59.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rk8shfjieqo77rm/INCOGNITO_S59.mp4/file"
      },
      {
        "id": "1420",
        "episodeNumber": 60,
        "title": "INCOGNITO - Episode 60",
        "description": "INCOGNITO Episode 60.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/03af0j55nu9mh01/INCOGNITO_S60.mp4/file"
      },
      {
        "id": "1421",
        "episodeNumber": 61,
        "title": "INCOGNITO - Episode 61",
        "description": "INCOGNITO Episode 61.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bydxsy9tz0pq98l/INCOGNITO_S61.mp4/file"
      },
      {
        "id": "1422",
        "episodeNumber": 62,
        "title": "INCOGNITO - Episode 62",
        "description": "INCOGNITO Episode 62.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tvul5qbagri8ojj/INCOGNITO_S62.mp4/file"
      },
      {
        "id": "1423",
        "episodeNumber": 63,
        "title": "INCOGNITO - Episode 63",
        "description": "INCOGNITO Episode 63.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ov519voa8w2m5m8/INCOGNITO_S63.mp4/file"
      },
      {
        "id": "1424",
        "episodeNumber": 64,
        "title": "INCOGNITO - Episode 64",
        "description": "INCOGNITO Episode 64.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lwsj9uxni5pyg8q/INCOGNITO_S64.mp4/file"
      },
      {
        "id": "1425",
        "episodeNumber": 65,
        "title": "INCOGNITO - Episode 65",
        "description": "INCOGNITO Episode 65.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ni0srsxzb1szvsy/INCOGNITO+S65.mp4/file"
      },
      {
        "id": "1426",
        "episodeNumber": 66,
        "title": "INCOGNITO - Episode 66",
        "description": "INCOGNITO Episode 66.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lm6skt0wealz3q1/INCOGNITO_S66.mp4/file"
      },
      {
        "id": "1427",
        "episodeNumber": 67,
        "title": "INCOGNITO - Episode 67",
        "description": "INCOGNITO Episode 67.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/n5mfr7z3sykevda/INCOGNITO_S67.mp4/file"
      },
      {
        "id": "1428",
        "episodeNumber": 68,
        "title": "INCOGNITO - Episode 68",
        "description": "INCOGNITO Episode 68.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/511fxvgaing9nox/INCOGNITO__S68.mp4/file"
      },
      {
        "id": "1429",
        "episodeNumber": 69,
        "title": "INCOGNITO - Episode 69",
        "description": "INCOGNITO Episode 69.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/06v3jq0zknwowg3/INCOGNITO_S69.mp4/file"
      },
      {
        "id": "1430",
        "episodeNumber": 70,
        "title": "INCOGNITO - Episode 70",
        "description": "INCOGNITO Episode 70.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sw0pqzvw58pwnf1/INCOGNITO+S70.mp4/file"
      },
      {
        "id": "1431",
        "episodeNumber": 71,
        "title": "INCOGNITO - Episode 71",
        "description": "INCOGNITO Episode 71.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/kzqtoxxgy4tx1j6/INCOGNITO_S71.mp4/file"
      },
      {
        "id": "1432",
        "episodeNumber": 72,
        "title": "INCOGNITO - Episode 72",
        "description": "INCOGNITO Episode 72.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7cttsbt8dr26fxx/INCOGNITO_S72.mp4/file"
      },
      {
        "id": "1433",
        "episodeNumber": 73,
        "title": "INCOGNITO - Episode 73",
        "description": "INCOGNITO Episode 73.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tqfejwk7yod27bo/INCOGNITO_S73.mp4/file"
      },
      {
        "id": "1434",
        "episodeNumber": 74,
        "title": "INCOGNITO - Episode 74",
        "description": "INCOGNITO Episode 74.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2f4t03akjntu9cb/INCOGNITO_S74.mp4/file"
      },
      {
        "id": "1435",
        "episodeNumber": 75,
        "title": "INCOGNITO - Episode 75",
        "description": "INCOGNITO Episode 75.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5hclx1uabebxvrn/INCOGNITO_S75.mp4/file"
      },
      {
        "id": "1436",
        "episodeNumber": 76,
        "title": "INCOGNITO - Episode 76",
        "description": "INCOGNITO Episode 76.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vsuzdex67r43aqv/INCOGNITO+S76.mp4/file"
      },
      {
        "id": "1437",
        "episodeNumber": 77,
        "title": "INCOGNITO - Episode 77",
        "description": "INCOGNITO Episode 77.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z2gbmmxbs1a8ygr/INCOGNITO+S77.mp4/file"
      },
      {
        "id": "1438",
        "episodeNumber": 78,
        "title": "INCOGNITO - Episode 78",
        "description": "INCOGNITO Episode 78.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zxo9iv44zc6fhzd/INCOGNITO_S78.mp4/file"
      },
      {
        "id": "1439",
        "episodeNumber": 79,
        "title": "INCOGNITO - Episode 79",
        "description": "INCOGNITO Episode 79.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hic9262qytiigov/INCOGNITO_S79.mp4/file"
      },
      {
        "id": "1440",
        "episodeNumber": 80,
        "title": "INCOGNITO - Episode 80",
        "description": "INCOGNITO Episode 80.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m4h8tuz5q4uz1jw/INCOGNITO_S80.mp4/file"
      },
      {
        "id": "1441",
        "episodeNumber": 81,
        "title": "INCOGNITO - Episode 81",
        "description": "INCOGNITO Episode 81.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sxtapg01aplbdhd/INCOGNITO_S81.mp4/file"
      },
      {
        "id": "1442",
        "episodeNumber": 82,
        "title": "INCOGNITO - Episode 82",
        "description": "INCOGNITO Episode 82.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yhqr2pbs9mmjva0/INCOGNITO_S82.mp4/file"
      },
      {
        "id": "1443",
        "episodeNumber": 83,
        "title": "INCOGNITO - Episode 83",
        "description": "INCOGNITO Episode 83.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j2o4igj00f176ha/INCOGNITO+S83.mp4/file"
      },
      {
        "id": "1444",
        "episodeNumber": 84,
        "title": "INCOGNITO - Episode 84",
        "description": "INCOGNITO Episode 84.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o3mqszps4xy25su/INCOGNITO+S84.mp4/file"
      },
      {
        "id": "1445",
        "episodeNumber": 85,
        "title": "INCOGNITO - Episode 85",
        "description": "INCOGNITO Episode 85.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/afwthwml0u0buag/INCOGNITO+S85.mp4/file"
      },
      {
        "id": "1446",
        "episodeNumber": 86,
        "title": "INCOGNITO - Episode 86",
        "description": "INCOGNITO Episode 86.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bzdw5zlabkgti86/INCOGNITO+S86.mp4/file"
      },
      {
        "id": "1447",
        "episodeNumber": 87,
        "title": "INCOGNITO - Episode 87",
        "description": "INCOGNITO Episode 87.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xh4tw08c0jg0b9n/INCOGNITO_S87.mp4/file"
      },
      {
        "id": "1448",
        "episodeNumber": 88,
        "title": "INCOGNITO - Episode 88",
        "description": "INCOGNITO Episode 88.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9y6mi1lz84kjszb/INCOGNITO+S88.mp4/file"
      },
      {
        "id": "1449",
        "episodeNumber": 89,
        "title": "INCOGNITO - Episode 89",
        "description": "INCOGNITO Episode 89.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/59zy01rot9p01tm/INCOGNITO_S89.mp4/file"
      },
      {
        "id": "1450",
        "episodeNumber": 90,
        "title": "INCOGNITO - Episode 90",
        "description": "INCOGNITO Episode 90.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ayknzpzhi7lh5x8/INCOGNITO_S90.mp4/file"
      },
      {
        "id": "1451",
        "episodeNumber": 91,
        "title": "INCOGNITO - Episode 91",
        "description": "INCOGNITO Episode 91.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p5lzn0zzn1s79aq/INCOGNITO_S91.mp4/file"
      },
      {
        "id": "1452",
        "episodeNumber": 92,
        "title": "INCOGNITO - Episode 92",
        "description": "INCOGNITO Episode 92.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8qxzyd7aod47046/INCOGNITO_S92_480p.mp4/file"
      },
      {
        "id": "1453",
        "episodeNumber": 93,
        "title": "INCOGNITO - Episode 93",
        "description": "INCOGNITO Episode 93.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8ew3p40uf0fvuo1/INCOGNITO_E93.mp4/file"
      },
      {
        "id": "1454",
        "episodeNumber": 94,
        "title": "INCOGNITO - Episode 94",
        "description": "INCOGNITO Episode 94.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ottuvm2gvs6j3oo/INCOGNITO_E94.mp4/file"
      },
      {
        "id": "1455",
        "episodeNumber": 95,
        "title": "INCOGNITO - Episode 95",
        "description": "INCOGNITO Episode 95.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rre9yls177t6q4w/INCOGNITO_E95.mp4/file"
      },
      {
        "id": "1456",
        "episodeNumber": 96,
        "title": "INCOGNITO - Episode 96",
        "description": "INCOGNITO Episode 96.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/syn7h48r3xgy4gp/INCOGNITO_E96.mp4/file"
      },
      {
        "id": "1457",
        "episodeNumber": 97,
        "title": "INCOGNITO - Episode 97",
        "description": "INCOGNITO Episode 97.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8ug6h4n5ypesa2e/INCOGNITO_E97.mp4/file"
      },
      {
        "id": "1458",
        "episodeNumber": 98,
        "title": "INCOGNITO - Episode 98",
        "description": "INCOGNITO Episode 98.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a3e3vqkyad8nsaw/INCOGNITO_E98.mp4/file"
      },
      {
        "id": "1459",
        "episodeNumber": 99,
        "title": "INCOGNITO - Episode 99",
        "description": "INCOGNITO Episode 99.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ad6c4lqt3z00bkp/INCOGNITO_E99.mp4/file"
      },
      {
        "id": "1460",
        "episodeNumber": 100,
        "title": "INCOGNITO - Episode 100",
        "description": "INCOGNITO Episode 100.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vxhj3r9ewqz5k36/INCOGNITO_E100.mp4/file"
      },
      {
        "id": "1461",
        "episodeNumber": 101,
        "title": "INCOGNITO - Episode 101",
        "description": "INCOGNITO Episode 101.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tboum95bkh9nrin/INCOGNITO_E101.mp4/file"
      },
      {
        "id": "1462",
        "episodeNumber": 102,
        "title": "INCOGNITO - Episode 102",
        "description": "INCOGNITO Episode 102.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/v7w8534mg6juwam/INCOGNITO_E102.mp4/file"
      },
      {
        "id": "1463",
        "episodeNumber": 103,
        "title": "INCOGNITO - Episode 103",
        "description": "INCOGNITO Episode 103.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/m8hjosn6x33rhkw/INCOGNITO_E103.mp4/file"
      },
      {
        "id": "1464",
        "episodeNumber": 104,
        "title": "INCOGNITO - Episode 104",
        "description": "INCOGNITO Episode 104.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3g31ursv1d37vm1/INCOGNITO+E104.mp4/file"
      },
      {
        "id": "1465",
        "episodeNumber": 105,
        "title": "INCOGNITO - Episode 105",
        "description": "INCOGNITO Episode 105.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ommechasyl9y9ei/INCOGNITO+E105.mp4/file"
      },
      {
        "id": "1466",
        "episodeNumber": 106,
        "title": "INCOGNITO - Episode 106",
        "description": "INCOGNITO Episode 106.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/f2hri028e93sika/INCOGNITO+E106.mp4/file"
      },
      {
        "id": "1467",
        "episodeNumber": 107,
        "title": "INCOGNITO - Episode 107",
        "description": "INCOGNITO Episode 107.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tqovfficgpfwtzf/INCOGNITO_E107.mp4.mp4/file"
      },
      {
        "id": "1468",
        "episodeNumber": 108,
        "title": "INCOGNITO - Episode 108",
        "description": "INCOGNITO Episode 108.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/58qahilm75tt76c/INCOGNITO_E108.mp4.mp4/file"
      },
      {
        "id": "1469",
        "episodeNumber": 109,
        "title": "INCOGNITO - Episode 109",
        "description": "INCOGNITO Episode 109.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zh3yaqowwejnqqz/INCOGNITO_E109.mp4.mp4/file"
      },
      {
        "id": "1470",
        "episodeNumber": 110,
        "title": "INCOGNITO - Episode 110",
        "description": "INCOGNITO Episode 110.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8hdo5bcbbwjmi0n/INCOGNITO_E110.mp4.mp4/file"
      },
      {
        "id": "1471",
        "episodeNumber": 111,
        "title": "INCOGNITO - Episode 111",
        "description": "INCOGNITO Episode 111.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/z2md1fktyyhp9j8/INCOGNITO+E111.mp4.mp4/file"
      },
      {
        "id": "1472",
        "episodeNumber": 112,
        "title": "INCOGNITO - Episode 112",
        "description": "INCOGNITO Episode 112.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zs3fjshnpeydtcq/INCOGNITO+E112.mp4.mp4/file"
      },
      {
        "id": "1473",
        "episodeNumber": 113,
        "title": "INCOGNITO - Episode 113",
        "description": "INCOGNITO Episode 113.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oyqy9f687p2apnl/INCOGNITO_E113.mp4.mp4/file"
      },
      {
        "id": "1474",
        "episodeNumber": 114,
        "title": "INCOGNITO - Episode 114",
        "description": "INCOGNITO Episode 114.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fklcaal5118zokf/INCOGNITO_E114.mp4.mp4/file"
      },
      {
        "id": "1475",
        "episodeNumber": 115,
        "title": "INCOGNITO - Episode 115",
        "description": "INCOGNITO Episode 115.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fr76tpwvcxz3tzi/INCOGNITO_E115.mp4.mp4/file"
      },
      {
        "id": "1476",
        "episodeNumber": 116,
        "title": "INCOGNITO - Episode 116",
        "description": "INCOGNITO Episode 116.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uhbhuwihpvc8gbh/INCOGNITO_E116.mp4.mp4/file"
      },
      {
        "id": "1477",
        "episodeNumber": 117,
        "title": "INCOGNITO - Episode 117",
        "description": "INCOGNITO Episode 117.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/sl78hdhxu35dn62/INCOGNITO_E117.mp4.mp4/file"
      },
      {
        "id": "1478",
        "episodeNumber": 118,
        "title": "INCOGNITO - Episode 118",
        "description": "INCOGNITO Episode 118.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/47ug2gvjyzyogdw/INCOGNITO_E118.mp4.mp4/file"
      },
      {
        "id": "1479",
        "episodeNumber": 119,
        "title": "INCOGNITO - Episode 119",
        "description": "INCOGNITO Episode 119.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0pfx04wnbn17k7i/INCOGNITO_E119.mp4.mp4/file"
      },
      {
        "id": "1480",
        "episodeNumber": 120,
        "title": "INCOGNITO - Episode 120",
        "description": "INCOGNITO Episode 120.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q073opdzaqm6rnt/INCOGNITO_E120.mp4.mp4/file"
      },
      {
        "id": "1481",
        "episodeNumber": 121,
        "title": "INCOGNITO - Episode 121",
        "description": "INCOGNITO Episode 121.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/41nvjvu0xj5yx8e/INCOGNITO+E121.mp4.mp4/file"
      },
      {
        "id": "1482",
        "episodeNumber": 122,
        "title": "INCOGNITO - Episode 122",
        "description": "INCOGNITO Episode 122.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hixtschs5kxc4tp/INCOGNITO+E122.mp4.mp4/file"
      },
      {
        "id": "1483",
        "episodeNumber": 123,
        "title": "INCOGNITO - Episode 123",
        "description": "INCOGNITO Episode 123.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/fhpxc9tf3iag5r3/INCOGNITO+E123.mp4.mp4/file"
      },
      {
        "id": "1484",
        "episodeNumber": 124,
        "title": "INCOGNITO - Episode 124",
        "description": "INCOGNITO Episode 124.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3zedx00votbe5k1/INCOGNITO+E124.mp4.mp4/file"
      },
      {
        "id": "1485",
        "episodeNumber": 125,
        "title": "INCOGNITO - Episode 125",
        "description": "INCOGNITO Episode 125.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6u88cx70wv2zv6e/INCOGNITO+E125.mp4.mp4/file"
      },
      {
        "id": "1486",
        "episodeNumber": 126,
        "title": "INCOGNITO - Episode 126",
        "description": "INCOGNITO Episode 126.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/e6dog08n50jmo32/INCOGNITO+E126.mp4.mp4/file"
      },
      {
        "id": "1487",
        "episodeNumber": 127,
        "title": "INCOGNITO - Episode 127",
        "description": "INCOGNITO Episode 127.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7ztblo39iq09so9/INCOGNITO+E127.mp4.mp4/file"
      },
      {
        "id": "1488",
        "episodeNumber": 128,
        "title": "INCOGNITO - Episode 128",
        "description": "INCOGNITO Episode 128.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tzixo9bzoxy3a9z/INCOGNITO+E128+FINALE.mp4.mp4/file"
      }
    ],
  },
{
  id: "126",
  title: "GANGS OF MANILA",
  slug: "gangs-of-manila",
  year: "",
  rating: "N/A",
  image: "gangs-of-manila.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "GANGS OF MANILA is presented in an Agasobanuye version. The available collection contains episodes from Season 2.",
  language: "",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  explainer: "Sankara",

    episodes: [
      {
        "id": "1489",
        "episodeNumber": 1,
        "title": "GANGS OF MANILA - Season 2 Episode 1",
        "description": "GANGS OF MANILA Season 2 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dbavivzdbep048h/GANGS_OF_MANILA_S2_EP1.mp4/file"
      },
      {
        "id": "1490",
        "episodeNumber": 2,
        "title": "GANGS OF MANILA - Season 2 Episode 2",
        "description": "GANGS OF MANILA Season 2 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d3y86d3r6z29poz/GANGS_OF_MANILA_S2_EP2.mp4/file"
      },
      {
        "id": "1491",
        "episodeNumber": 3,
        "title": "GANGS OF MANILA - Season 2 Episode 3",
        "description": "GANGS OF MANILA Season 2 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zfee6txvynjf901/GANGS_OF_MANILA_S2_EP3.mp4/file"
      },
      {
        "id": "1492",
        "episodeNumber": 4,
        "title": "GANGS OF MANILA - Season 2 Episode 4",
        "description": "GANGS OF MANILA Season 2 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9pigfen6w7w91ov/GANGS_OF_MANILA_S2_EP4.mp4/file"
      },
      {
        "id": "1493",
        "episodeNumber": 5,
        "title": "GANGS OF MANILA - Season 2 Episode 5",
        "description": "GANGS OF MANILA Season 2 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ymonkkrj8rz9zul/GANGS_OF_MANILA_S2_EP5.mp4/file"
      },
      {
        "id": "1494",
        "episodeNumber": 6,
        "title": "GANGS OF MANILA - Season 2 Episode 6",
        "description": "GANGS OF MANILA Season 2 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vj0ueuprxv3g3ef/GANGS_OF_MANILA_S2_EP6.mp4/file"
      },
      {
        "id": "1495",
        "episodeNumber": 7,
        "title": "GANGS OF MANILA - Season 2 Episode 7",
        "description": "GANGS OF MANILA Season 2 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rn0ziky74ydxyxd/GANGS_OF_MANILA_S2_EP7.mp4/file"
      },
      {
        "id": "1496",
        "episodeNumber": 8,
        "title": "GANGS OF MANILA - Season 2 Episode 8",
        "description": "GANGS OF MANILA Season 2 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/277gipdgzhi5778/GANGS_OF_MANILA_S2_EP8.mp4/file"
      },
      {
        "id": "1497",
        "episodeNumber": 9,
        "title": "GANGS OF MANILA - Season 2 Episode 9",
        "description": "GANGS OF MANILA Season 2 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oq0cfwh2al39wfz/GANGS_OF_MANILA_S2_EP9.mp4/file"
      },
      {
        "id": "1498",
        "episodeNumber": 10,
        "title": "GANGS OF MANILA - Season 2 Episode 10",
        "description": "GANGS OF MANILA Season 2 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/96q98l086irsr7y/GANGS_OF_MANILA_S2_EP10.mp4/file"
      },
      {
        "id": "1499",
        "episodeNumber": 11,
        "title": "GANGS OF MANILA - Season 2 Episode 11",
        "description": "GANGS OF MANILA Season 2 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/hk2e3mazzn2kmfx/GANGS_OF_MANILA_S2_EP11.mp4/file"
      },
      {
        "id": "1500",
        "episodeNumber": 12,
        "title": "GANGS OF MANILA - Season 2 Episode 12",
        "description": "GANGS OF MANILA Season 2 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1pf2h6xlhzwja3a/GANGS_OF_MANILA_S2_EP12.mp4/file"
      },
      {
        "id": "1501",
        "episodeNumber": 13,
        "title": "GANGS OF MANILA - Season 2 Episode 13",
        "description": "GANGS OF MANILA Season 2 Episode 13.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t08lzm79n8i53co/GANGS_OF_MANILA_S2_EP13.mp4/file"
      },
      {
        "id": "1502",
        "episodeNumber": 14,
        "title": "GANGS OF MANILA - Season 2 Episode 14",
        "description": "GANGS OF MANILA Season 2 Episode 14.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/si8ed2f82tn6t28/GANGS_OF_MANILA_S2_EP14.mp4/file"
      },
      {
        "id": "1503",
        "episodeNumber": 15,
        "title": "GANGS OF MANILA - Season 2 Episode 15",
        "description": "GANGS OF MANILA Season 2 Episode 15.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9ty7katefwel0co/GANGS_OF_MANILA_S2_EP15.mp4/file"
      },
      {
        "id": "1504",
        "episodeNumber": 16,
        "title": "GANGS OF MANILA - Season 2 Episode 16",
        "description": "GANGS OF MANILA Season 2 Episode 16.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/esqn7ilyhyel540/GANGS_OF_MANILA_S2_EP16.mp4/file"
      },
      {
        "id": "1505",
        "episodeNumber": 17,
        "title": "GANGS OF MANILA - Season 2 Episode 17",
        "description": "GANGS OF MANILA Season 2 Episode 17.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ogcliksdoj6ep39/GANGS_OF_MANILA_S2_EP17.mp4/file"
      },
      {
        "id": "1506",
        "episodeNumber": 18,
        "title": "GANGS OF MANILA - Season 2 Episode 18",
        "description": "GANGS OF MANILA Season 2 Episode 18.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2r8p02i16a0eaoh/GANGS_OF_MANILA_S2_EP18.mp4/file"
      },
      {
        "id": "1507",
        "episodeNumber": 19,
        "title": "GANGS OF MANILA - Season 2 Episode 19",
        "description": "GANGS OF MANILA Season 2 Episode 19.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wwcugp9omwkgyzv/GANGS_OF_MANILA_S2_EP19.mp4/file"
      },
      {
        "id": "1508",
        "episodeNumber": 20,
        "title": "GANGS OF MANILA - Season 2 Episode 20",
        "description": "GANGS OF MANILA Season 2 Episode 20.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yoob6kjw1rqw2ij/GANGS_OF_MANILA_S2_EP20.mp4/file"
      },
      {
        "id": "1509",
        "episodeNumber": 21,
        "title": "GANGS OF MANILA - Season 2 Episode 21",
        "description": "GANGS OF MANILA Season 2 Episode 21.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/7y18zycvjkrccal/GANGS_OF_MANILA_S2_EP21.mp4/file"
      },
      {
        "id": "1510",
        "episodeNumber": 22,
        "title": "GANGS OF MANILA - Season 2 Episode 22",
        "description": "GANGS OF MANILA Season 2 Episode 22.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2g590zrj0ygu7l4/GANGS_OF_MANILA_S2_EP22.mp4/file"
      },
      {
        "id": "1511",
        "episodeNumber": 23,
        "title": "GANGS OF MANILA - Season 2 Episode 23",
        "description": "GANGS OF MANILA Season 2 Episode 23.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ov5fh2ikla3nw6c/GANGS_OF_MANILA_S2_EP23.mp4/file"
      },
      {
        "id": "1512",
        "episodeNumber": 24,
        "title": "GANGS OF MANILA - Season 2 Episode 24",
        "description": "GANGS OF MANILA Season 2 Episode 24.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3nrztnjo8mq67ea/GANGS_OF_MANILA_S2_EP24.mp4/file"
      },
      {
        "id": "1513",
        "episodeNumber": 25,
        "title": "GANGS OF MANILA - Season 2 Episode 25",
        "description": "GANGS OF MANILA Season 2 Episode 25.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/20in2sxkfdkw3c3/GANGS_OF_MANILA_S2_EP25.mp4/file"
      },
      {
        "id": "1514",
        "episodeNumber": 26,
        "title": "GANGS OF MANILA - Season 2 Episode 26",
        "description": "GANGS OF MANILA Season 2 Episode 26.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/opm907hjbm46u0g/GANGS_OF_MANILA_S2_EP27.mp4/file"
      },
      {
        "id": "1515",
        "episodeNumber": 27,
        "title": "GANGS OF MANILA - Season 2 Episode 27",
        "description": "GANGS OF MANILA Season 2 Episode 27.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/opm907hjbm46u0g/GANGS_OF_MANILA_S2_EP27.mp4/file"
      },
      {
        "id": "1516",
        "episodeNumber": 28,
        "title": "GANGS OF MANILA - Season 2 Episode 28",
        "description": "GANGS OF MANILA Season 2 Episode 28.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/a9bxte6rwlbv07t/GANGS_OF_MANILA_S2_EP28.mp4/file"
      },
      {
        "id": "1517",
        "episodeNumber": 29,
        "title": "GANGS OF MANILA - Season 2 Episode 29",
        "description": "GANGS OF MANILA Season 2 Episode 29.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/48lwuamudyz49d6/GANGS_OF_MANILA_S2_EP29.mp4/file"
      },
      {
        "id": "1518",
        "episodeNumber": 30,
        "title": "GANGS OF MANILA - Season 2 Episode 30",
        "description": "GANGS OF MANILA Season 2 Episode 30.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/y7zi91luoo2qdu3/GANGS_OF_MANILA_S2_EP30.mp4/file"
      },
      {
        "id": "1519",
        "episodeNumber": 31,
        "title": "GANGS OF MANILA - Season 2 Episode 31",
        "description": "GANGS OF MANILA Season 2 Episode 31.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/q4lkg9vz99xj8m3/GANGS_OF_MANILA_S2_EP31.mp4/file"
      },
      {
        "id": "1520",
        "episodeNumber": 32,
        "title": "GANGS OF MANILA - Season 2 Episode 32",
        "description": "GANGS OF MANILA Season 2 Episode 32.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/w6srsyoi9y36spe/GANGS_OF_MANILA_S2_EP32.mp4/file"
      },
      {
        "id": "1521",
        "episodeNumber": 33,
        "title": "GANGS OF MANILA - Season 2 Episode 33",
        "description": "GANGS OF MANILA Season 2 Episode 33.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qurat62z7e5zqtg/GANGS_OF_MANILA_S2_EP33.mp4/file"
      },
      {
        "id": "1522",
        "episodeNumber": 34,
        "title": "GANGS OF MANILA - Season 2 Episode 34",
        "description": "GANGS OF MANILA Season 2 Episode 34.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/rd4a6y08a9gv1vb/GANGS_OF_MANILA_S2_EP34.mp4/file"
      },
      {
        "id": "1523",
        "episodeNumber": 35,
        "title": "GANGS OF MANILA - Season 2 Episode 35",
        "description": "GANGS OF MANILA Season 2 Episode 35.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/setcjwot4ahtn50/GANGS_OF_MANILA_S2_EP35.mp4/file"
      },
      {
        "id": "1524",
        "episodeNumber": 36,
        "title": "GANGS OF MANILA - Season 2 Episode 36",
        "description": "GANGS OF MANILA Season 2 Episode 36.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/34uzeidf025fx6j/GANGS_OF_MANILA_S2_EP36.mp4/file"
      },
      {
        "id": "1525",
        "episodeNumber": 37,
        "title": "GANGS OF MANILA - Season 2 Episode 37",
        "description": "GANGS OF MANILA Season 2 Episode 37.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o2h3o41oqrejq9l/GANGS_OF_MANILA_S2_EP37.mp4/file"
      },
      {
        "id": "1526",
        "episodeNumber": 38,
        "title": "GANGS OF MANILA - Season 2 Episode 38",
        "description": "GANGS OF MANILA Season 2 Episode 38.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qi0prrz50vu2ogb/GANGS_OF_MANILA_S2_EP38.mp4/file"
      },
      {
        "id": "1527",
        "episodeNumber": 39,
        "title": "GANGS OF MANILA - Season 2 Episode 39",
        "description": "GANGS OF MANILA Season 2 Episode 39.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ti5xgrump8difpj/GANGS_OF_MANILA_S2_EP40.mp4/file"
      },
      {
        "id": "1528",
        "episodeNumber": 40,
        "title": "GANGS OF MANILA - Season 2 Episode 40",
        "description": "GANGS OF MANILA Season 2 Episode 40.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ti5xgrump8difpj/GANGS_OF_MANILA_S2_EP40.mp4/file"
      },
      {
        "id": "1529",
        "episodeNumber": 41,
        "title": "GANGS OF MANILA - Season 2 Episode 41",
        "description": "GANGS OF MANILA Season 2 Episode 41.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5tym1hox8enqoso/GANGS_OF_MANILA_S2_EP41.mp4/file"
      },
      {
        "id": "1530",
        "episodeNumber": 42,
        "title": "GANGS OF MANILA - Season 2 Episode 42",
        "description": "GANGS OF MANILA Season 2 Episode 42.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5zeufh41oxw160k/GANGS_OF_MANILA_S2_EP43.mp4/file"
      },
      {
        "id": "1531",
        "episodeNumber": 43,
        "title": "GANGS OF MANILA - Season 2 Episode 43",
        "description": "GANGS OF MANILA Season 2 Episode 43.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5zeufh41oxw160k/GANGS_OF_MANILA_S2_EP43.mp4/file"
      },
      {
        "id": "1532",
        "episodeNumber": 44,
        "title": "GANGS OF MANILA - Season 2 Episode 44",
        "description": "GANGS OF MANILA Season 2 Episode 44.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wlrfailkdcp9hav/GANGS_OF_MANILA_S2_EP44.mp4/file"
      },
      {
        "id": "1533",
        "episodeNumber": 45,
        "title": "GANGS OF MANILA - Season 2 Episode 45",
        "description": "GANGS OF MANILA Season 2 Episode 45.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/d1mgasn8lpsl5tf/GANGS_OF_MANILA_S2_EP45.mp4/file"
      },
      {
        "id": "1534",
        "episodeNumber": 46,
        "title": "GANGS OF MANILA - Season 2 Episode 46",
        "description": "GANGS OF MANILA Season 2 Episode 46.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/vvh6pt5xq9ancxk/GANGS_OF_MANILA_S2_EP46.mp4/file"
      },
      {
        "id": "1535",
        "episodeNumber": 47,
        "title": "GANGS OF MANILA - Season 2 Episode 47",
        "description": "GANGS OF MANILA Season 2 Episode 47.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jny1x5nlkvyv0ta/GANGS_OF_MANILA_S2_EP47.mp4/file"
      },
      {
        "id": "1536",
        "episodeNumber": 48,
        "title": "GANGS OF MANILA - Season 2 Episode 48",
        "description": "GANGS OF MANILA Season 2 Episode 48.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gb90w088pcsxptz/GANGS_OF_MANILA_S2_EP48.mp4/file"
      },
      {
        "id": "1537",
        "episodeNumber": 49,
        "title": "GANGS OF MANILA - Season 2 Episode 49",
        "description": "GANGS OF MANILA Season 2 Episode 49.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x7d56e8claqw4bu/GANGS_OF_MANILA_S2_EP49.mp4/file"
      },
      {
        "id": "1538",
        "episodeNumber": 50,
        "title": "GANGS OF MANILA - Season 2 Episode 50",
        "description": "GANGS OF MANILA Season 2 Episode 50.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zxbbhpglm9d8v95/GANGS_OF_MANILA_S2_EP50.mp4/file"
      },
      {
        "id": "1539",
        "episodeNumber": 51,
        "title": "GANGS OF MANILA - Season 2 Episode 51",
        "description": "GANGS OF MANILA Season 2 Episode 51.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/g5co0xnnbw9kjee/GANGS_OF_MANILA_S2_EP51.mp4/file"
      },
      {
        "id": "1540",
        "episodeNumber": 52,
        "title": "GANGS OF MANILA - Season 2 Episode 52",
        "description": "GANGS OF MANILA Season 2 Episode 52.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/t5sqmi3bwi28tfi/GANGS+OF+MANILA+S2+EP52.mp4/file"
      },
      {
        "id": "1541",
        "episodeNumber": 53,
        "title": "GANGS OF MANILA - Season 2 Episode 53",
        "description": "GANGS OF MANILA Season 2 Episode 53.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lx4m4xyxaoc13rt/GANGS+OF+MANILA+S2+EP53.mp4/file"
      },
      {
        "id": "1542",
        "episodeNumber": 54,
        "title": "GANGS OF MANILA - Season 2 Episode 54",
        "description": "GANGS OF MANILA Season 2 Episode 54.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/j2gtueakl79blab/GANGS_OF_MANILA_S2_EP54.mp4/file"
      },
      {
        "id": "1543",
        "episodeNumber": 55,
        "title": "GANGS OF MANILA - Season 2 Episode 55",
        "description": "GANGS OF MANILA Season 2 Episode 55.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ib3gf5dzjzml40w/GANGS_OF_MANILA_S2_EP55.mp4/file"
      },
      {
        "id": "1544",
        "episodeNumber": 56,
        "title": "GANGS OF MANILA - Season 2 Episode 56",
        "description": "GANGS OF MANILA Season 2 Episode 56.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9xchp3cu7zx2z8a/GANGS_OF_MANILA_S2_EP56.mp4/file"
      },
      {
        "id": "1545",
        "episodeNumber": 57,
        "title": "GANGS OF MANILA - Season 2 Episode 57",
        "description": "GANGS OF MANILA Season 2 Episode 57.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/77k0ae4jkwxxb4f/GANGS_OF_MANILA_S2_EP57.mp4/file"
      },
      {
        "id": "1546",
        "episodeNumber": 58,
        "title": "GANGS OF MANILA - Season 2 Episode 58",
        "description": "GANGS OF MANILA Season 2 Episode 58.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/2daa7w9l29f50zd/GANGS_OF_MANILA_S2_EP58.mp4/file"
      },
      {
        "id": "1547",
        "episodeNumber": 59,
        "title": "GANGS OF MANILA - Season 2 Episode 59",
        "description": "GANGS OF MANILA Season 2 Episode 59.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/17e5pz43vbyo6t0/GANGS_OF_MANILA_S2_EP59.mp4/file"
      },
      {
        "id": "1548",
        "episodeNumber": 60,
        "title": "GANGS OF MANILA - Season 2 Episode 60",
        "description": "GANGS OF MANILA Season 2 Episode 60.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/ffsc7qu2yt3q8hg/GANGS_OF_MANILA_S2_EP60.mp4/file"
      },
      {
        "id": "1549",
        "episodeNumber": 61,
        "title": "GANGS OF MANILA - Season 2 Episode 61",
        "description": "GANGS OF MANILA Season 2 Episode 61.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/clwbvchc1263y60/GANGS_OF_MANILA_S2_EP61.mp4/file"
      },
      {
        "id": "1550",
        "episodeNumber": 62,
        "title": "GANGS OF MANILA - Season 2 Episode 62",
        "description": "GANGS OF MANILA Season 2 Episode 62.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8ks2ru5fyfo03e3/GANGS_OF_MANILA_S2_EP62.mp4/file"
      },
      {
        "id": "1551",
        "episodeNumber": 63,
        "title": "GANGS OF MANILA - Season 2 Episode 63",
        "description": "GANGS OF MANILA Season 2 Episode 63.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/22haokbxwdrnk39/GANGS_OF_MANILA_S2_EP63.mp4/file"
      },
      {
        "id": "1552",
        "episodeNumber": 67,
        "title": "GANGS OF MANILA - Season 2 Episode 67",
        "description": "GANGS OF MANILA Season 2 Episode 67.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/dyxigp5icv67g1p/GANGS_OF_MANILA_S2_EP67.mp4/file"
      },
      {
        "id": "1553",
        "episodeNumber": 68,
        "title": "GANGS OF MANILA - Season 2 Episode 68",
        "description": "GANGS OF MANILA Season 2 Episode 68.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/80vpfesdcpvjju3/GANGS_OF_MANILA_S2_EP68.mp4/file"
      },
      {
        "id": "1554",
        "episodeNumber": 69,
        "title": "GANGS OF MANILA - Season 2 Episode 69",
        "description": "GANGS OF MANILA Season 2 Episode 69.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6980zvqndn3bpnb/GANGS_OF_MANILA_S2_EP69.mp4/file"
      },
      {
        "id": "1555",
        "episodeNumber": 70,
        "title": "GANGS OF MANILA - Season 2 Episode 70",
        "description": "GANGS OF MANILA Season 2 Episode 70.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/1jytv9bm7qk1cs6/GANGS_OF_MANILA_S2_EP70.mp4/file"
      },
      {
        "id": "1556",
        "episodeNumber": 71,
        "title": "GANGS OF MANILA - Season 2 Episode 71",
        "description": "GANGS OF MANILA Season 2 Episode 71.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/inqnmisw90ednjk/GANGS_OF_MANILA_S2_EP71.mp4/file"
      },
      {
        "id": "1557",
        "episodeNumber": 72,
        "title": "GANGS OF MANILA - Season 2 Episode 72",
        "description": "GANGS OF MANILA Season 2 Episode 72.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yvv7unl22abln8g/GANGS_OF_MANILA_S2_EP72.mp4/file"
      },
      {
        "id": "1558",
        "episodeNumber": 73,
        "title": "GANGS OF MANILA - Season 2 Episode 73",
        "description": "GANGS OF MANILA Season 2 Episode 73.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lbtimwbclkms5wi/GANGS_OF_MANILA_S2_EP73.mp4/file"
      },
      {
        "id": "1559",
        "episodeNumber": 74,
        "title": "GANGS OF MANILA - Season 2 Episode 74",
        "description": "GANGS OF MANILA Season 2 Episode 74.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6ukh6zi2tgwyqdp/GANGS_OF_MANILA_S2_EP74.mp4/file"
      },
      {
        "id": "1560",
        "episodeNumber": 75,
        "title": "GANGS OF MANILA - Season 2 Episode 75",
        "description": "GANGS OF MANILA Season 2 Episode 75.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xb0kq9h7o9rzxd6/GANGS_OF_MANILA_S2_EP75.mp4/file"
      },
      {
        "id": "1561",
        "episodeNumber": 76,
        "title": "GANGS OF MANILA - Season 2 Episode 76",
        "description": "GANGS OF MANILA Season 2 Episode 76.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/nzw8cfitv4424jf/GANGS_OF_MANILA_S2_EP76.mp4/file"
      },
      {
        "id": "1562",
        "episodeNumber": 77,
        "title": "GANGS OF MANILA - Season 2 Episode 77",
        "description": "GANGS OF MANILA Season 2 Episode 77.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gylbu8qy2u7jce3/GANGS_OF_MANILA_S2_EP77.mp4/file"
      },
      {
        "id": "1563",
        "episodeNumber": 78,
        "title": "GANGS OF MANILA - Season 2 Episode 78",
        "description": "GANGS OF MANILA Season 2 Episode 78.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/yflakjosb64izfu/GANGS_OF_MANILA_S2_EP78.mp4/file"
      },
      {
        "id": "1564",
        "episodeNumber": 79,
        "title": "GANGS OF MANILA - Season 2 Episode 79",
        "description": "GANGS OF MANILA Season 2 Episode 79.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/53xgik5tb8g2d0m/GANGS_OF_MANILA_S2_EP79.mp4/file"
      },
      {
        "id": "1565",
        "episodeNumber": 80,
        "title": "GANGS OF MANILA - Season 2 Episode 80",
        "description": "GANGS OF MANILA Season 2 Episode 80.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xrvt0d1sg8dz8ng/GANGS_OF_MANILA_S2_EP80.mp4/file"
      },
      {
        "id": "1566",
        "episodeNumber": 81,
        "title": "GANGS OF MANILA - Season 2 Episode 81",
        "description": "GANGS OF MANILA Season 2 Episode 81.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oe579ibf1sajuvv/GANGS_OF_MANILA_S2_EP81.mp4/file"
      },
      {
        "id": "1567",
        "episodeNumber": 82,
        "title": "GANGS OF MANILA - Season 2 Episode 82",
        "description": "GANGS OF MANILA Season 2 Episode 82.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/28h5b9mg37puc3f/GANGS_OF_MANILA_S2_EP82.mp4/file"
      },
      {
        "id": "1568",
        "episodeNumber": 83,
        "title": "GANGS OF MANILA - Season 2 Episode 83",
        "description": "GANGS OF MANILA Season 2 Episode 83.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o3a0n7gslnjhy1a/GANGS_OF_MANILA_S2_EP83.mp4/file"
      },
      {
        "id": "1569",
        "episodeNumber": 84,
        "title": "GANGS OF MANILA - Season 2 Episode 84",
        "description": "GANGS OF MANILA Season 2 Episode 84.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/tmujf6sobj97wf3/GANGS_OF_MANILA_S2_EP84.mp4/file"
      },
      {
        "id": "1570",
        "episodeNumber": 85,
        "title": "GANGS OF MANILA - Season 2 Episode 85",
        "description": "GANGS OF MANILA Season 2 Episode 85.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3nx0z0b2qjddc9u/GANGS_OF_MANILA_S2_EP85.mp4/file"
      },
      {
        "id": "1571",
        "episodeNumber": 86,
        "title": "GANGS OF MANILA - Season 2 Episode 86",
        "description": "GANGS OF MANILA Season 2 Episode 86.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/197l11yzgvna90e/GANGS_OF_MANILA_S2_EP86.mp4/file"
      },
      {
        "id": "1572",
        "episodeNumber": 87,
        "title": "GANGS OF MANILA - Season 2 Episode 87",
        "description": "GANGS OF MANILA Season 2 Episode 87.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/uu9q7ag903e1j4m/GANGS_OF_MANILA_S2_EP87.mp4/file"
      },
      {
        "id": "1573",
        "episodeNumber": 88,
        "title": "GANGS OF MANILA - Season 2 Episode 88",
        "description": "GANGS OF MANILA Season 2 Episode 88.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/17wprn1bzkd8ury/GANGS_OF_MANILA_S2_EP88.mp4/file"
      },
      {
        "id": "1574",
        "episodeNumber": 89,
        "title": "GANGS OF MANILA - Season 2 Episode 89",
        "description": "GANGS OF MANILA Season 2 Episode 89.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/bhvthsrhwpm2n0n/GANGS_OF_MANILA_S2_EP89.mp4/file"
      },
      {
        "id": "1575",
        "episodeNumber": 90,
        "title": "GANGS OF MANILA - Season 2 Episode 90",
        "description": "GANGS OF MANILA Season 2 Episode 90.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gc28fo2f7xszv8l/GANGS_OF_MANILA_S2_EP90.mp4/file"
      },
      {
        "id": "1576",
        "episodeNumber": 91,
        "title": "GANGS OF MANILA - Season 2 Episode 91",
        "description": "GANGS OF MANILA Season 2 Episode 91.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/zo69t2lcswb9p1w/GANGS_OF_MANILA_S2_EP91.mp4/file"
      },
      {
        "id": "1577",
        "episodeNumber": 92,
        "title": "GANGS OF MANILA - Season 2 Episode 92",
        "description": "GANGS OF MANILA Season 2 Episode 92.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/lwv70jpshu0ikxa/GANGS_OF_MANILA_S2_EP92.mp4/file"
      },
      {
        "id": "1578",
        "episodeNumber": 93,
        "title": "GANGS OF MANILA - Season 2 Episode 93",
        "description": "GANGS OF MANILA Season 2 Episode 93.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/gp11734ap17cmhh/GANGS+OF+MANILA+S2+EP93.mp4/file"
      },
      {
        "id": "1579",
        "episodeNumber": 94,
        "title": "GANGS OF MANILA - Season 2 Episode 94",
        "description": "GANGS OF MANILA Season 2 Episode 94.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/23i0ybdngpivyzn/GANGS+OF+MANILA+S2+EP94.mp4/file"
      },
      {
        "id": "1580",
        "episodeNumber": 95,
        "title": "GANGS OF MANILA - Season 2 Episode 95",
        "description": "GANGS OF MANILA Season 2 Episode 95.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o54jraqeu0b7ya8/GANGS+OF+MANILA+S2+EP95.mp4/file"
      },
      {
        "id": "1581",
        "episodeNumber": 96,
        "title": "GANGS OF MANILA - Season 2 Episode 96",
        "description": "GANGS OF MANILA Season 2 Episode 96.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5pz67r6ah84ny8j/GANGS+OF+MANILA+S2+EP96.mp4/file"
      },
      {
        "id": "1582",
        "episodeNumber": 97,
        "title": "GANGS OF MANILA - Season 2 Episode 97",
        "description": "GANGS OF MANILA Season 2 Episode 97.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/mvqceifirrmmvra/GANGS+OF+MANILA+S2+EP97.mp4/file"
      },
      {
        "id": "1583",
        "episodeNumber": 98,
        "title": "GANGS OF MANILA - Season 2 Episode 98",
        "description": "GANGS OF MANILA Season 2 Episode 98.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/o90ebe9jn7ttffn/GANGS+OF+MANILA+S2EP88.mp4/file"
      },
      {
        "id": "1584",
        "episodeNumber": 99,
        "title": "GANGS OF MANILA - Season 2 Episode 99",
        "description": "GANGS OF MANILA Season 2 Episode 99.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/5km5879mog46xsw/GANGS+OF+MANILA+S2EP99.mp4/file"
      },
      {
        "id": "1585",
        "episodeNumber": 100,
        "title": "GANGS OF MANILA - Season 2 Episode 100",
        "description": "GANGS OF MANILA Season 2 Episode 100.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0g9f44hu9peulbr/GANGS+OF+MANILA+S2EP100.mp4/file"
      },
      {
        "id": "1586",
        "episodeNumber": 101,
        "title": "GANGS OF MANILA - Season 2 Episode 101",
        "description": "GANGS OF MANILA Season 2 Episode 101.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qo3durfgwm6n0s1/GANGS+OF+MANILA+S2EP101.mp4/file"
      },
      {
        "id": "1587",
        "episodeNumber": 102,
        "title": "GANGS OF MANILA - Season 2 Episode 102",
        "description": "GANGS OF MANILA Season 2 Episode 102.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/qdaz4p5uzx9afw0/GANGS+OF+MANILA+S2EP102FINAL.mp4/file"
      }
    ],
  },
{
  id: "127",
  title: "SQUID GAME",
  slug: "squid-game",
  year: "2021",
  rating: "N/A",
  image: "squid-game1.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "SQUID GAME is presented in an Agasobanuye version by Rocky Kimono.",
  language: "Korean",
  genres: ["Action", "Drama", "Mystery", "Thriller"],
  explainer: "Rocky Kimono",

    episodes: [
      {
        "id": "1588",
        "episodeNumber": 1,
        "title": "SQUID GAME - Episode 1",
        "description": "SQUID GAME Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/vnJj0LTZ#qLXkTryKf3qczFx6BtH87BAaIl-V3l2FjJamHeHDj_E"
      },
      {
        "id": "1589",
        "episodeNumber": 2,
        "title": "SQUID GAME - Episode 2",
        "description": "SQUID GAME Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/PvwC3DKD#zRxPd4iNApMi-qMy_vqEPMNROXpuC0ohfd1Zme0biTw"
      },
      {
        "id": "1590",
        "episodeNumber": 3,
        "title": "SQUID GAME - Episode 3",
        "description": "SQUID GAME Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/zr4gyAKL#qEseokk3vphV_WIEvmRmtxXcXj9Gy2MPEcJ2L_w-O_g"
      },
      {
        "id": "1591",
        "episodeNumber": 4,
        "title": "SQUID GAME - Episode 4",
        "description": "SQUID GAME Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/O75FySQY#stpNEcS8nT7HP9UbNRuJxCbLQ3PyHtWO_d1EokM9AWc"
      },
      {
        "id": "1592",
        "episodeNumber": 5,
        "title": "SQUID GAME - Episode 5A",
        "description": "SQUID GAME Episode 5A.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/nzISxJ4D#vf-v2p6uP1AIVBCiXlUe32t8zjnD6itfLcs7khyKudo"
      },
      {
        "id": "1593",
        "episodeNumber": 5,
        "title": "SQUID GAME - Episode 5B",
        "description": "SQUID GAME Episode 5B.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/iyZBQb6Z#T68EtxM5K2-3dHSIuFS4cL6DMx1qUGhnjLMB1AE81ZE"
      },
      {
        "id": "1594",
        "episodeNumber": 6,
        "title": "SQUID GAME - Episode 6",
        "description": "SQUID GAME Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/jmgk1IpK#_lB6fCi1RXcH8vFj6T0S-CTxHkLzOLSVXRh6gQd9-QY"
      },
      {
        "id": "1595",
        "episodeNumber": 7,
        "title": "SQUID GAME - Episode 7",
        "description": "SQUID GAME Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/bzBRwArB#uGazj3Q5wUOJ3Xnm3eKJ8WW8wnuL3BuVOxIzncPmvls"
      },
      {
        "id": "1596",
        "episodeNumber": 8,
        "title": "SQUID GAME - Episode 8",
        "description": "SQUID GAME Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/OypygADD#RIr6Fn6Jy6eSQdINT-HqIQhAlhoEkaE9xnb9AsgAFHw"
      },
      {
        "id": "1597",
        "episodeNumber": 9,
        "title": "SQUID GAME - Episode 9",
        "description": "SQUID GAME Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://mega.nz/file/irQ0xYbL#fLc7NQ1Duwl4n5Rgf75HHlLEApio3l8Zw5oKFlm5QSI"
      }
    ],
  },

{
  id: "129",
  title: "ALL OF US ARE DEAD",
  slug: "all-of-us-are-dead",
  year: "2022",
  rating: "N/A",
  image: "all-of-us-are-dead.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "ALL OF US ARE DEAD is presented in an Agasobanuye version.",
  language: "Korean",
  genres: ["Action", "Drama", "Horror", "Thriller"],
  explainer: "Rock Kimomo",

    episodes: [
      {
        "id": "1608",
        "episodeNumber": 1,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 1",
        "description": "ALL OF US ARE DEAD Season 1 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/11kkf6ouy3pttay/All_Of_Us_Are_Dead_S01e01.mp4/file"
      },
      {
        "id": "1609",
        "episodeNumber": 2,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 2",
        "description": "ALL OF US ARE DEAD Season 1 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/6h27z1bwtotmgvp/All_Of_Us_Are_Dead_S01e02.mp4/file"
      },
      {
        "id": "1610",
        "episodeNumber": 3,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 3",
        "description": "ALL OF US ARE DEAD Season 1 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/esjg8o26ao8lw2c/All_Of_Us_Are_Dead_S01e03.mp4/file"
      },
      {
        "id": "1611",
        "episodeNumber": 4,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 4",
        "description": "ALL OF US ARE DEAD Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oz2ia78hklnz9ud/All_Of_Us_Are_Dead_S01e04.mp4/file"
      },
      {
        "id": "1612",
        "episodeNumber": 5,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 5",
        "description": "ALL OF US ARE DEAD Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3v8dgs6ot3hpkw0/All_Of_Us_Are_Dead_S01e05.mp4/file"
      },
      {
        "id": "1613",
        "episodeNumber": 6,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 6",
        "description": "ALL OF US ARE DEAD Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/p5dm13dejggmhou/All_Of_Us_Are_Dead_S01e06.mp4/file"
      },
      {
        "id": "1614",
        "episodeNumber": 7,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 7",
        "description": "ALL OF US ARE DEAD Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/jc7hyc6bdtp7h38/All_Of_Us_Are_Dead_S01e07.mp4/file"
      },
      {
        "id": "1615",
        "episodeNumber": 8,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 8",
        "description": "ALL OF US ARE DEAD Season 1 Episode 8.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/oosgnr6vm94wbmd/All_Of_Us_Are_Dead_S01e08.mp4/file"
      },
      {
        "id": "1616",
        "episodeNumber": 9,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 9",
        "description": "ALL OF US ARE DEAD Season 1 Episode 9.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/9dlc9v3d7zpf06p/All_Of_Us_Are_Dead_S01e09.mp4/file"
      },
      {
        "id": "1617",
        "episodeNumber": 10,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 10",
        "description": "ALL OF US ARE DEAD Season 1 Episode 10.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/l29hy6gxholtfgc/All_Of_Us_Are_Dead_S01e10.mp4/file"
      },
      {
        "id": "1618",
        "episodeNumber": 11,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 11",
        "description": "ALL OF US ARE DEAD Season 1 Episode 11.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/31xuu88sxgjw5dw/All_Of_Us_Are_Dead_S01e11.mp4/file"
      },
      {
        "id": "1619",
        "episodeNumber": 12,
        "title": "ALL OF US ARE DEAD - Season 1 Episode 12",
        "description": "ALL OF US ARE DEAD Season 1 Episode 12.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/3aafus8vocohhk1/All_Of_Us_Are_Dead_S01e12_Final.mp4/file"
      }
    ],
  },
{
  id: "130",
  title: "PARIS HAS FALLEN",
  slug: "paris-has-fallen",
  year: "2024",
  rating: "N/A",
  image: "paris-has-fallen.jpg",
  isFeatured: false,
  createdAt: "2026-11-05",
  description: "PARIS HAS FALLEN is presented in an Agasobanuye version.",
  language: "English",
  genres: ["Action", "Drama", "Thriller"],
  explainer: "Rock Kimomo",

    episodes: [
      {
        "id": "1620",
        "episodeNumber": 1,
        "title": "PARIS HAS FALLEN - Season 1 Episode 1",
        "description": "PARIS HAS FALLEN Season 1 Episode 1.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/cebof5dt6m22fju/PARIS+HAS+FALLEN+E01.mp4/file"
      },
      {
        "id": "1621",
        "episodeNumber": 2,
        "title": "PARIS HAS FALLEN - Season 1 Episode 2",
        "description": "PARIS HAS FALLEN Season 1 Episode 2.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/onlxfizxr6uexvd/PARIS+HAS+FALLEN+EP+S01E02.mp4/file"
      },
      {
        "id": "1622",
        "episodeNumber": 3,
        "title": "PARIS HAS FALLEN - Season 1 Episode 3",
        "description": "PARIS HAS FALLEN Season 1 Episode 3.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/8160sbuzvj3m677/PARIS+HAS+FALLEN+EP+S01+03.mp4/file"
      },
      {
        "id": "1623",
        "episodeNumber": 4,
        "title": "PARIS HAS FALLEN - Season 1 Episode 4",
        "description": "PARIS HAS FALLEN Season 1 Episode 4.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/wfv4xkg4d70qsvc/PARIS+HAS+FALLEN+E04.mp4/file"
      },
      {
        "id": "1624",
        "episodeNumber": 5,
        "title": "PARIS HAS FALLEN - Season 1 Episode 5",
        "description": "PARIS HAS FALLEN Season 1 Episode 5.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/xwstucz8zedakox/PARIS+HAS+FALLEN+E05.mp4/file"
      },
      {
        "id": "1625",
        "episodeNumber": 6,
        "title": "PARIS HAS FALLEN - Season 1 Episode 6",
        "description": "PARIS HAS FALLEN Season 1 Episode 6.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/x1mbfldsre1qh0e/PARIS+HAS+FALLEN+E06++DJ+ERIC+nyanza+og+tel+0790881712++.mp4/file"
      },
      {
        "id": "1626",
        "episodeNumber": 7,
        "title": "PARIS HAS FALLEN - Season 1 Episode 7",
        "description": "PARIS HAS FALLEN Season 1 Episode 7.",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/koa4fhxc20mn04l/PARIS+HAS+FALLEN+E07+DJ+ERIC+nyanza+og+tel+0790881712+.mp4/file"
      },
      {
        "id": "1627",
        "episodeNumber": 8,
        "title": "PARIS HAS FALLEN - Season 1 Episode 8 (Final)",
        "description": "PARIS HAS FALLEN Season 1 Episode 8 (Final).",
        "streamUrl": "",
        "downloadUrl": "https://www.mediafire.com/file/0674lw423i1djl3/PARIS+HAS+FALLEN+EP+08+final.mp4.mp4/file"
      }
    ],
  },
{
  id: "131",
  title: "LUCKY ",
  slug: "lucky-7",
  year: "2026",
  rating: "N/A",
  image: "lucky-7.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "LUCKY 7 is presented in an Agasobanuye version.",
  language: "English",
  genres: ["Drama"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2018",
        "episodeNumber": 1,
        "title": "LUCKY 7 - Episode 1",
        "description": "LUCKY 7 Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_1_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_1_Perfect.mp4"
      },
      {
        "id": "2019",
        "episodeNumber": 2,
        "title": "LUCKY 7 - Episode 2",
        "description": "LUCKY 7 Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_2_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_2_Perfect.mp4"
      },
      {
        "id": "2020",
        "episodeNumber": 3,
        "title": "LUCKY 7 - Episode 3",
        "description": "LUCKY 7 Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_3_perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_3_perfect.mp4"
      },
      {
        "id": "2021",
        "episodeNumber": 4,
        "title": "LUCKY 7 - Episode 4",
        "description": "LUCKY 7 Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLuck_4_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLuck_4_Perfect.mp4"
      },
      {
        "id": "2022",
        "episodeNumber": 5,
        "title": "LUCKY 7 - Episode 5",
        "description": "LUCKY 7 Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_5_perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_5_perfect.mp4"
      },
      {
        "id": "2023",
        "episodeNumber": 6,
        "title": "LUCKY 7 - Episode 6",
        "description": "LUCKY 7 Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_6_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FLUCKY_6_Perfect.mp4"
      },
      {
        "id": "2024",
        "episodeNumber": 7,
        "title": "LUCKY 7 - Episode 7",
        "description": "LUCKY 7 Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_7FINAL_perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2FOas%2FLUCKY_7FINAL_perfect.mp4"
      }
    ],
  },
{
  id: "132",
  title: "NOW AND FOREVER",
  slug: "now-and-forever",
  year: "2026",
  rating: "N/A",
  image: "now-and-forever.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "NOW AND FOREVER is presented in an Agasobanuye version.",
  language: "Filipino",
  genres: ["Drama", "Romance"],
  explainer: "Gaheza",

    episodes: [
      {
        "id": "1967",
        "episodeNumber": 1,
        "title": "NOW AND FOREVER - Episode 1",
        "description": "NOW AND FOREVER Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP1.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP1.mp4"
      },
      {
        "id": "1968",
        "episodeNumber": 2,
        "title": "NOW AND FOREVER - Episode 2",
        "description": "NOW AND FOREVER Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP2.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP2.mp4"
      },
      {
        "id": "1969",
        "episodeNumber": 3,
        "title": "NOW AND FOREVER - Episode 3",
        "description": "NOW AND FOREVER Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP3.mp4"
      },
      {
        "id": "1970",
        "episodeNumber": 4,
        "title": "NOW AND FOREVER - Episode 4",
        "description": "NOW AND FOREVER Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP4.mp4"
      },
      {
        "id": "1971",
        "episodeNumber": 5,
        "title": "NOW AND FOREVER - Episode 5",
        "description": "NOW AND FOREVER Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP5.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FNOW_AND_FOREVER_EP5.mp4"
      },
      {
        "id": "1972",
        "episodeNumber": 6,
        "title": "NOW AND FOREVER - Episode 6",
        "description": "NOW AND FOREVER Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP6.mp4"
      },
      {
        "id": "1973",
        "episodeNumber": 7,
        "title": "NOW AND FOREVER - Episode 7",
        "description": "NOW AND FOREVER Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP7.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP7.mp4"
      },
      {
        "id": "1974",
        "episodeNumber": 8,
        "title": "NOW AND FOREVER - Episode 8",
        "description": "NOW AND FOREVER Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP8.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP8.mp4"
      },
      {
        "id": "1975",
        "episodeNumber": 9,
        "title": "NOW AND FOREVER - Episode 9",
        "description": "NOW AND FOREVER Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP9.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP9.mp4"
      },
      {
        "id": "1976",
        "episodeNumber": 10,
        "title": "NOW AND FOREVER - Episode 10",
        "description": "NOW AND FOREVER Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP10.mp4"
      },
      {
        "id": "1977",
        "episodeNumber": 11,
        "title": "NOW AND FOREVER - Episode 11",
        "description": "NOW AND FOREVER Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP11.mp4"
      },
      {
        "id": "1978",
        "episodeNumber": 12,
        "title": "NOW AND FOREVER - Episode 12",
        "description": "NOW AND FOREVER Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP12.mp4"
      },
      {
        "id": "1979",
        "episodeNumber": 13,
        "title": "NOW AND FOREVER - Episode 13",
        "description": "NOW AND FOREVER Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP13.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP13.mp4"
      },
      {
        "id": "1980",
        "episodeNumber": 14,
        "title": "NOW AND FOREVER - Episode 14",
        "description": "NOW AND FOREVER Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP14.mp4"
      },
      {
        "id": "1981",
        "episodeNumber": 15,
        "title": "NOW AND FOREVER - Episode 15",
        "description": "NOW AND FOREVER Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP15.mp4"
      },
      {
        "id": "1982",
        "episodeNumber": 16,
        "title": "NOW AND FOREVER - Episode 16",
        "description": "NOW AND FOREVER Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP16.mp4"
      },
      {
        "id": "1983",
        "episodeNumber": 17,
        "title": "NOW AND FOREVER - Episode 17",
        "description": "NOW AND FOREVER Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP17.mp4"
      },
      {
        "id": "1984",
        "episodeNumber": 18,
        "title": "NOW AND FOREVER - Episode 18",
        "description": "NOW AND FOREVER Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP18.mp4"
      },
      {
        "id": "1985",
        "episodeNumber": 19,
        "title": "NOW AND FOREVER - Episode 19",
        "description": "NOW AND FOREVER Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP19.mp4"
      },
      {
        "id": "1986",
        "episodeNumber": 20,
        "title": "NOW AND FOREVER - Episode 20",
        "description": "NOW AND FOREVER Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP20.mp4"
      },
      {
        "id": "1987",
        "episodeNumber": 21,
        "title": "NOW AND FOREVER - Episode 21",
        "description": "NOW AND FOREVER Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP21.mp4"
      },
      {
        "id": "1988",
        "episodeNumber": 22,
        "title": "NOW AND FOREVER - Episode 22",
        "description": "NOW AND FOREVER Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP22.mp4"
      },
      {
        "id": "1989",
        "episodeNumber": 23,
        "title": "NOW AND FOREVER - Episode 23",
        "description": "NOW AND FOREVER Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP23.mp4"
      },
      {
        "id": "1990",
        "episodeNumber": 24,
        "title": "NOW AND FOREVER - Episode 24",
        "description": "NOW AND FOREVER Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP24.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP24.mp4"
      },
      {
        "id": "1991",
        "episodeNumber": 25,
        "title": "NOW AND FOREVER - Episode 25",
        "description": "NOW AND FOREVER Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP25.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP25.mp4"
      },
      {
        "id": "1992",
        "episodeNumber": 26,
        "title": "NOW AND FOREVER - Episode 26",
        "description": "NOW AND FOREVER Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP26.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP26.mp4"
      },
      {
        "id": "1993",
        "episodeNumber": 27,
        "title": "NOW AND FOREVER - Episode 27",
        "description": "NOW AND FOREVER Episode 27.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP27.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP27.mp4"
      },
      {
        "id": "1994",
        "episodeNumber": 28,
        "title": "NOW AND FOREVER - Episode 28",
        "description": "NOW AND FOREVER Episode 28.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP28.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP28.mp4"
      },
      {
        "id": "1995",
        "episodeNumber": 29,
        "title": "NOW AND FOREVER - Episode 29",
        "description": "NOW AND FOREVER Episode 29.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP29.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP29.mp4"
      },
      {
        "id": "1996",
        "episodeNumber": 30,
        "title": "NOW AND FOREVER - Episode 30",
        "description": "NOW AND FOREVER Episode 30.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP30.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP30.mp4"
      },
      {
        "id": "1997",
        "episodeNumber": 31,
        "title": "NOW AND FOREVER - Episode 31",
        "description": "NOW AND FOREVER Episode 31.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP31.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP31.mp4"
      },
      {
        "id": "1998",
        "episodeNumber": 32,
        "title": "NOW AND FOREVER - Episode 32",
        "description": "NOW AND FOREVER Episode 32.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP32.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP32.mp4"
      },
      {
        "id": "1999",
        "episodeNumber": 33,
        "title": "NOW AND FOREVER - Episode 33",
        "description": "NOW AND FOREVER Episode 33.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP33.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP33.mp4"
      },
      {
        "id": "2000",
        "episodeNumber": 34,
        "title": "NOW AND FOREVER - Episode 34",
        "description": "NOW AND FOREVER Episode 34.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP34.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP34.mp4"
      },
      {
        "id": "2001",
        "episodeNumber": 35,
        "title": "NOW AND FOREVER - Episode 35",
        "description": "NOW AND FOREVER Episode 35.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP35.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP35.mp4"
      },
      {
        "id": "2002",
        "episodeNumber": 36,
        "title": "NOW AND FOREVER - Episode 36",
        "description": "NOW AND FOREVER Episode 36.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP36.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP36.mp4"
      },
      {
        "id": "2003",
        "episodeNumber": 37,
        "title": "NOW AND FOREVER - Episode 37",
        "description": "NOW AND FOREVER Episode 37.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP37.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP37.mp4"
      },
      {
        "id": "2004",
        "episodeNumber": 38,
        "title": "NOW AND FOREVER - Episode 38",
        "description": "NOW AND FOREVER Episode 38.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP38.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP38.mp4"
      },
      {
        "id": "2005",
        "episodeNumber": 38,
        "title": "NOW AND FOREVER - Episode 38",
        "description": "NOW AND FOREVER Episode 38.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP38.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP38.mp4"
      },
      {
        "id": "2006",
        "episodeNumber": 39,
        "title": "NOW AND FOREVER - Episode 39",
        "description": "NOW AND FOREVER Episode 39.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP39.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP39.mp4"
      },
      {
        "id": "2007",
        "episodeNumber": 40,
        "title": "NOW AND FOREVER - Episode 40",
        "description": "NOW AND FOREVER Episode 40.",
        "streamUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP40.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/philipins/nowforever/NOW_AND_FOREVER_EP40.mp4"
      },
      {
        "id": "2008",
        "episodeNumber": 41,
        "title": "NOW AND FOREVER - Episode 41",
        "description": "NOW AND FOREVER Episode 41.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP41.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP41.mp4"
      },
      {
        "id": "2009",
        "episodeNumber": 42,
        "title": "NOW AND FOREVER - Episode 42",
        "description": "NOW AND FOREVER Episode 42.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP42.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP42.mp4"
      },
      {
        "id": "2010",
        "episodeNumber": 43,
        "title": "NOW AND FOREVER - Episode 43",
        "description": "NOW AND FOREVER Episode 43.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP43.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP43.mp4"
      },
      {
        "id": "2011",
        "episodeNumber": 44,
        "title": "NOW AND FOREVER - Episode 44",
        "description": "NOW AND FOREVER Episode 44.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP44.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP44.mp4"
      },
      {
        "id": "2012",
        "episodeNumber": 45,
        "title": "NOW AND FOREVER - Episode 45",
        "description": "NOW AND FOREVER Episode 45.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP45.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP45.mp4"
      },
      {
        "id": "2013",
        "episodeNumber": 46,
        "title": "NOW AND FOREVER - Episode 46",
        "description": "NOW AND FOREVER Episode 46.",
        "streamUrl": "https://yawe.isatafilez.my/files/series/2026/philipins/NOW_AND_FOREVER_EP46.mp4",
        "downloadUrl": "https://yawe.isatafilez.my/files/series/2026/philipins/NOW_AND_FOREVER_EP46.mp4"
      },
      {
        "id": "2014",
        "episodeNumber": 47,
        "title": "NOW AND FOREVER - Episode 47",
        "description": "NOW AND FOREVER Episode 47.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP47.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP47.mp4"
      },
      {
        "id": "2015",
        "episodeNumber": 48,
        "title": "NOW AND FOREVER - Episode 48",
        "description": "NOW AND FOREVER Episode 48.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP48.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP48.mp4"
      },
      {
        "id": "2016",
        "episodeNumber": 49,
        "title": "NOW AND FOREVER - Episode 49",
        "description": "NOW AND FOREVER Episode 49.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP49.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP49.mp4"
      },
      {
        "id": "2017",
        "episodeNumber": 50,
        "title": "NOW AND FOREVER - Episode 50",
        "description": "NOW AND FOREVER Episode 50.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP50.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP50.mp4"
      },
      {
        "id": "2249",
        "episodeNumber": 51,
        "title": "NOW AND FOREVER - Episode 51",
        "description": "NOW AND FOREVER Episode 51.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP51.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP51.mp4"
      },
      {
        "id": "2181",
        "episodeNumber": 52,
        "title": "NOW AND FOREVER - Episode 52",
        "description": "NOW AND FOREVER Episode 52.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP52.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP52.mp4"
      },
      {
        "id": "2182",
        "episodeNumber": 53,
        "title": "NOW AND FOREVER - Episode 53",
        "description": "NOW AND FOREVER Episode 53.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP53.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP53.mp4"
      },
      {
        "id": "2183",
        "episodeNumber": 54,
        "title": "NOW AND FOREVER - Episode 54",
        "description": "NOW AND FOREVER Episode 54.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP54.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP54.mp4"
      },
      {
        "id": "2184",
        "episodeNumber": 55,
        "title": "NOW AND FOREVER - Episode 55",
        "description": "NOW AND FOREVER Episode 55.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP55.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fnowforever%2FNOW_AND_FOREVER_EP55.mp4"
      }
    ],
  },
{
  id: "133",
  title: "VEIL OF SHADOWS",
  slug: "veil-of-shadows",
  year: "2026",
  rating: "N/A",
  image: "veil-of-shadows.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "VEIL OF SHADOWS is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Drama", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1938",
        "episodeNumber": 1,
        "title": "VEIL OF SHADOWS - Episode 1",
        "description": "VEIL OF SHADOWS Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E01.mp4"
      },
      {
        "id": "1939",
        "episodeNumber": 2,
        "title": "VEIL OF SHADOWS - Episode 2",
        "description": "VEIL OF SHADOWS Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E02.mp4"
      },
      {
        "id": "1940",
        "episodeNumber": 3,
        "title": "VEIL OF SHADOWS - Episode 3",
        "description": "VEIL OF SHADOWS Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E03.mp4"
      },
      {
        "id": "1941",
        "episodeNumber": 4,
        "title": "VEIL OF SHADOWS - Episode 4",
        "description": "VEIL OF SHADOWS Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FVeil_of_Shadows_E04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FVeil_of_Shadows_E04.mp4"
      },
      {
        "id": "1942",
        "episodeNumber": 5,
        "title": "VEIL OF SHADOWS - Episode 5",
        "description": "VEIL OF SHADOWS Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E05.mp4"
      },
      {
        "id": "1943",
        "episodeNumber": 6,
        "title": "VEIL OF SHADOWS - Episode 6",
        "description": "VEIL OF SHADOWS Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E06.mp4"
      },
      {
        "id": "1944",
        "episodeNumber": 7,
        "title": "VEIL OF SHADOWS - Episode 7",
        "description": "VEIL OF SHADOWS Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E07.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E07.mp4"
      },
      {
        "id": "1945",
        "episodeNumber": 8,
        "title": "VEIL OF SHADOWS - Episode 8",
        "description": "VEIL OF SHADOWS Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E08.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E08.mp4"
      },
      {
        "id": "1946",
        "episodeNumber": 9,
        "title": "VEIL OF SHADOWS - Episode 9",
        "description": "VEIL OF SHADOWS Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E09.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E09.mp4"
      },
      {
        "id": "1947",
        "episodeNumber": 10,
        "title": "VEIL OF SHADOWS - Episode 10",
        "description": "VEIL OF SHADOWS Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E10.mp4"
      },
      {
        "id": "1948",
        "episodeNumber": 11,
        "title": "VEIL OF SHADOWS - Episode 11",
        "description": "VEIL OF SHADOWS Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E11.mp4"
      },
      {
        "id": "1949",
        "episodeNumber": 12,
        "title": "VEIL OF SHADOWS - Episode 12",
        "description": "VEIL OF SHADOWS Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E12.mp4"
      },
      {
        "id": "1950",
        "episodeNumber": 13,
        "title": "VEIL OF SHADOWS - Episode 13",
        "description": "VEIL OF SHADOWS Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fveil%2FVeil_of_Shadows_E13.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fveil%2FVeil_of_Shadows_E13.mp4"
      },
      {
        "id": "1951",
        "episodeNumber": 14,
        "title": "VEIL OF SHADOWS - Episode 14",
        "description": "VEIL OF SHADOWS Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fveil%2FVeil_of_Shadows_E14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fveil%2FVeil_of_Shadows_E14.mp4"
      },
      {
        "id": "1952",
        "episodeNumber": 15,
        "title": "VEIL OF SHADOWS - Episode 15",
        "description": "VEIL OF SHADOWS Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E15.mp4"
      },
      {
        "id": "1953",
        "episodeNumber": 16,
        "title": "VEIL OF SHADOWS - Episode 16",
        "description": "VEIL OF SHADOWS Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E16.mp4"
      },
      {
        "id": "1954",
        "episodeNumber": 17,
        "title": "VEIL OF SHADOWS - Episode 17",
        "description": "VEIL OF SHADOWS Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E17.mp4"
      },
      {
        "id": "1955",
        "episodeNumber": 18,
        "title": "VEIL OF SHADOWS - Episode 18",
        "description": "VEIL OF SHADOWS Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E18.mp4"
      },
      {
        "id": "1956",
        "episodeNumber": 19,
        "title": "VEIL OF SHADOWS - Episode 19",
        "description": "VEIL OF SHADOWS Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E19.mp4"
      },
      {
        "id": "1957",
        "episodeNumber": 20,
        "title": "VEIL OF SHADOWS - Episode 20",
        "description": "VEIL OF SHADOWS Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E20.mp4"
      },
      {
        "id": "1958",
        "episodeNumber": 21,
        "title": "VEIL OF SHADOWS - Episode 21",
        "description": "VEIL OF SHADOWS Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E21.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E21.mp4.mp4"
      },
      {
        "id": "1959",
        "episodeNumber": 22,
        "title": "VEIL OF SHADOWS - Episode 22",
        "description": "VEIL OF SHADOWS Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E22.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E22.mp4.mp4"
      },
      {
        "id": "1960",
        "episodeNumber": 23,
        "title": "VEIL OF SHADOWS - Episode 23",
        "description": "VEIL OF SHADOWS Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E23.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E23.mp4.mp4"
      },
      {
        "id": "1961",
        "episodeNumber": 24,
        "title": "VEIL OF SHADOWS - Episode 24",
        "description": "VEIL OF SHADOWS Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E24.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E24.mp4.mp4"
      },
      {
        "id": "1962",
        "episodeNumber": 25,
        "title": "VEIL OF SHADOWS - Episode 25",
        "description": "VEIL OF SHADOWS Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E25.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E25.mp4.mp4"
      },
      {
        "id": "1963",
        "episodeNumber": 26,
        "title": "VEIL OF SHADOWS - Episode 26",
        "description": "VEIL OF SHADOWS Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E26.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E26.mp4.mp4"
      },
      {
        "id": "1964",
        "episodeNumber": 27,
        "title": "VEIL OF SHADOWS - Episode 27",
        "description": "VEIL OF SHADOWS Episode 27.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E27.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E27.mp4.mp4"
      },
      {
        "id": "1965",
        "episodeNumber": 28,
        "title": "VEIL OF SHADOWS - Episode 28",
        "description": "VEIL OF SHADOWS Episode 28.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E28.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E28.mp4.mp4"
      },
      {
        "id": "1966",
        "episodeNumber": 29,
        "title": "VEIL OF SHADOWS - Episode 29 (Finale)",
        "description": "VEIL OF SHADOWS Episode 29 (Finale).",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E29_Finale.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FVeil_of_Shadows_E29_Finale.mp4.mp4"
      }
    ],
  },
{
  id: "134",
  title: "FATE CHOOSES YOU",
  slug: "fate-chooses-you",
  year: "2026",
  rating: "N/A",
  image: "fate-chooses-you.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "FATE CHOOSES YOU is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Drama", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1898",
        "episodeNumber": 1,
        "title": "FATE CHOOSES YOU - Episode 1",
        "description": "FATE CHOOSES YOU Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FFate_Chooses_You_S01E01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FFate_Chooses_You_S01E01.mp4"
      },
      {
        "id": "1899",
        "episodeNumber": 2,
        "title": "FATE CHOOSES YOU - Episode 2",
        "description": "FATE CHOOSES YOU Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FFate_Chooses_You_S01E02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FFate_Chooses_You_S01E02.mp4"
      },
      {
        "id": "1900",
        "episodeNumber": 3,
        "title": "FATE CHOOSES YOU - Episode 3",
        "description": "FATE CHOOSES YOU Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E03.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E03.mp4.mp4"
      },
      {
        "id": "1901",
        "episodeNumber": 4,
        "title": "FATE CHOOSES YOU - Episode 4",
        "description": "FATE CHOOSES YOU Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E04.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E04.mp4.mp4"
      },
      {
        "id": "1902",
        "episodeNumber": 5,
        "title": "FATE CHOOSES YOU - Episode 5",
        "description": "FATE CHOOSES YOU Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E05.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E05.mp4.mp4"
      },
      {
        "id": "1903",
        "episodeNumber": 6,
        "title": "FATE CHOOSES YOU - Episode 6",
        "description": "FATE CHOOSES YOU Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E06.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E06.mp4.mp4"
      },
      {
        "id": "1904",
        "episodeNumber": 7,
        "title": "FATE CHOOSES YOU - Episode 7",
        "description": "FATE CHOOSES YOU Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E07.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E07.mp4.mp4"
      },
      {
        "id": "1905",
        "episodeNumber": 8,
        "title": "FATE CHOOSES YOU - Episode 8",
        "description": "FATE CHOOSES YOU Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E08.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E08.mp4.mp4"
      },
      {
        "id": "1906",
        "episodeNumber": 9,
        "title": "FATE CHOOSES YOU - Episode 9",
        "description": "FATE CHOOSES YOU Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E09.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E09.mp4.mp4"
      },
      {
        "id": "1907",
        "episodeNumber": 10,
        "title": "FATE CHOOSES YOU - Episode 10",
        "description": "FATE CHOOSES YOU Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E10.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E10.mp4.mp4"
      },
      {
        "id": "1908",
        "episodeNumber": 11,
        "title": "FATE CHOOSES YOU - Episode 11",
        "description": "FATE CHOOSES YOU Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E11.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E11.mp4.mp4"
      },
      {
        "id": "1909",
        "episodeNumber": 12,
        "title": "FATE CHOOSES YOU - Episode 12",
        "description": "FATE CHOOSES YOU Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E12.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E12.mp4.mp4"
      },
      {
        "id": "1910",
        "episodeNumber": 13,
        "title": "FATE CHOOSES YOU - Episode 13",
        "description": "FATE CHOOSES YOU Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E13.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E13.mp4.mp4"
      },
      {
        "id": "1911",
        "episodeNumber": 14,
        "title": "FATE CHOOSES YOU - Episode 14",
        "description": "FATE CHOOSES YOU Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E14.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E14.mp4.mp4"
      },
      {
        "id": "1912",
        "episodeNumber": 15,
        "title": "FATE CHOOSES YOU - Episode 15",
        "description": "FATE CHOOSES YOU Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E15.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E15.mp4.mp4"
      },
      {
        "id": "1913",
        "episodeNumber": 16,
        "title": "FATE CHOOSES YOU - Episode 16",
        "description": "FATE CHOOSES YOU Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E16.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E16.mp4.mp4"
      },
      {
        "id": "1914",
        "episodeNumber": 17,
        "title": "FATE CHOOSES YOU - Episode 17",
        "description": "FATE CHOOSES YOU Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E17.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E17.mp4.mp4"
      },
      {
        "id": "1915",
        "episodeNumber": 18,
        "title": "FATE CHOOSES YOU - Episode 18",
        "description": "FATE CHOOSES YOU Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E18.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E18.mp4.mp4"
      },
      {
        "id": "1916",
        "episodeNumber": 19,
        "title": "FATE CHOOSES YOU - Episode 19",
        "description": "FATE CHOOSES YOU Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E19.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E19.mp4.mp4"
      },
      {
        "id": "1917",
        "episodeNumber": 20,
        "title": "FATE CHOOSES YOU - Episode 20",
        "description": "FATE CHOOSES YOU Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E20.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E20.mp4.mp4"
      },
      {
        "id": "1918",
        "episodeNumber": 21,
        "title": "FATE CHOOSES YOU - Episode 21",
        "description": "FATE CHOOSES YOU Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E21.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E21.mp4.mp4"
      },
      {
        "id": "1919",
        "episodeNumber": 22,
        "title": "FATE CHOOSES YOU - Episode 22",
        "description": "FATE CHOOSES YOU Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E22.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E22.mp4.mp4"
      },
      {
        "id": "1920",
        "episodeNumber": 23,
        "title": "FATE CHOOSES YOU - Episode 23",
        "description": "FATE CHOOSES YOU Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E23.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E23.mp4.mp4"
      },
      {
        "id": "1921",
        "episodeNumber": 24,
        "title": "FATE CHOOSES YOU - Episode 24",
        "description": "FATE CHOOSES YOU Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E24.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E24.mp4.mp4"
      },
      {
        "id": "1922",
        "episodeNumber": 25,
        "title": "FATE CHOOSES YOU - Episode 25",
        "description": "FATE CHOOSES YOU Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E25.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E25.mp4.mp4"
      },
      {
        "id": "1923",
        "episodeNumber": 26,
        "title": "FATE CHOOSES YOU - Episode 26",
        "description": "FATE CHOOSES YOU Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E26.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E26.mp4.mp4"
      },
      {
        "id": "1924",
        "episodeNumber": 27,
        "title": "FATE CHOOSES YOU - Episode 27",
        "description": "FATE CHOOSES YOU Episode 27.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E27.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E27.mp4.mp4"
      },
      {
        "id": "1925",
        "episodeNumber": 28,
        "title": "FATE CHOOSES YOU - Episode 28",
        "description": "FATE CHOOSES YOU Episode 28.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E28.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E28.mp4.mp4"
      },
      {
        "id": "1926",
        "episodeNumber": 29,
        "title": "FATE CHOOSES YOU - Episode 29",
        "description": "FATE CHOOSES YOU Episode 29.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E29.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E29.mp4.mp4"
      },
      {
        "id": "1927",
        "episodeNumber": 30,
        "title": "FATE CHOOSES YOU - Episode 30",
        "description": "FATE CHOOSES YOU Episode 30.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E30.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E30.mp4.mp4"
      },
      {
        "id": "1928",
        "episodeNumber": 31,
        "title": "FATE CHOOSES YOU - Episode 31",
        "description": "FATE CHOOSES YOU Episode 31.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E31.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E31.mp4.mp4"
      },
      {
        "id": "1929",
        "episodeNumber": 32,
        "title": "FATE CHOOSES YOU - Episode 32",
        "description": "FATE CHOOSES YOU Episode 32.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E32.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E32.mp4.mp4"
      },
      {
        "id": "1930",
        "episodeNumber": 33,
        "title": "FATE CHOOSES YOU - Episode 33",
        "description": "FATE CHOOSES YOU Episode 33.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E33.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E33.mp4.mp4"
      },
      {
        "id": "1931",
        "episodeNumber": 34,
        "title": "FATE CHOOSES YOU - Episode 34",
        "description": "FATE CHOOSES YOU Episode 34.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E34.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E34.mp4.mp4"
      },
      {
        "id": "1932",
        "episodeNumber": 35,
        "title": "FATE CHOOSES YOU - Episode 35",
        "description": "FATE CHOOSES YOU Episode 35.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E35.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E35.mp4.mp4"
      },
      {
        "id": "1933",
        "episodeNumber": 36,
        "title": "FATE CHOOSES YOU - Episode 36",
        "description": "FATE CHOOSES YOU Episode 36.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E36.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E36.mp4.mp4"
      },
      {
        "id": "1934",
        "episodeNumber": 37,
        "title": "FATE CHOOSES YOU - Episode 37",
        "description": "FATE CHOOSES YOU Episode 37.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E37.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E37.mp4.mp4"
      },
      {
        "id": "1935",
        "episodeNumber": 38,
        "title": "FATE CHOOSES YOU - Episode 38",
        "description": "FATE CHOOSES YOU Episode 38.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E38.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E38.mp4.mp4"
      },
      {
        "id": "1936",
        "episodeNumber": 39,
        "title": "FATE CHOOSES YOU - Episode 39",
        "description": "FATE CHOOSES YOU Episode 39.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E39.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E39.mp4"
      },
      {
        "id": "1937",
        "episodeNumber": 40,
        "title": "FATE CHOOSES YOU - Episode 40",
        "description": "FATE CHOOSES YOU Episode 40.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E40_Finale.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FFate_Chooses_You_S01E40_Finale.mp4"
      }
    ],
  },
{
  id: "135",
  title: "THE ETERNAL FRAGRANCE",
  slug: "the-eternal-fragrance",
  year: "2026",
  rating: "N/A",
  image: "the-eternal-fragrance.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "THE ETERNAL FRAGRANCE is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Drama", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1865",
        "episodeNumber": 1,
        "title": "THE ETERNAL FRAGRANCE - Episode 1",
        "description": "THE ETERNAL FRAGRANCE Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_ENTERNAL_FRAGRANCE_E01.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_ENTERNAL_FRAGRANCE_E01.mp4.mp4"
      },
      {
        "id": "1866",
        "episodeNumber": 2,
        "title": "THE ETERNAL FRAGRANCE - Episode 2",
        "description": "THE ETERNAL FRAGRANCE Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_ENTERNAL_FRAGRANCE_E02.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_ENTERNAL_FRAGRANCE_E02.mp4.mp4"
      },
      {
        "id": "1867",
        "episodeNumber": 3,
        "title": "THE ETERNAL FRAGRANCE - Episode 3",
        "description": "THE ETERNAL FRAGRANCE Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E03.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E03.mp4.mp4"
      },
      {
        "id": "1868",
        "episodeNumber": 4,
        "title": "THE ETERNAL FRAGRANCE - Episode 4",
        "description": "THE ETERNAL FRAGRANCE Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E04.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E04.mp4.mp4"
      },
      {
        "id": "1869",
        "episodeNumber": 5,
        "title": "THE ETERNAL FRAGRANCE - Episode 5",
        "description": "THE ETERNAL FRAGRANCE Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FTHE_ENTERNAL_FRAGRANCE_E05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FTHE_ENTERNAL_FRAGRANCE_E05.mp4"
      },
      {
        "id": "1870",
        "episodeNumber": 6,
        "title": "THE ETERNAL FRAGRANCE - Episode 6",
        "description": "THE ETERNAL FRAGRANCE Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FTHE_ENTERNAL_FRAGRANCE_E06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Ffate%2FTHE_ENTERNAL_FRAGRANCE_E06.mp4"
      },
      {
        "id": "1871",
        "episodeNumber": 7,
        "title": "THE ETERNAL FRAGRANCE - Episode 7",
        "description": "THE ETERNAL FRAGRANCE Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E07.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E07.mp4.mp4"
      },
      {
        "id": "1872",
        "episodeNumber": 8,
        "title": "THE ETERNAL FRAGRANCE - Episode 8",
        "description": "THE ETERNAL FRAGRANCE Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E08.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E08.mp4.mp4"
      },
      {
        "id": "1873",
        "episodeNumber": 9,
        "title": "THE ETERNAL FRAGRANCE - Episode 9",
        "description": "THE ETERNAL FRAGRANCE Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E09.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E09.mp4.mp4"
      },
      {
        "id": "1874",
        "episodeNumber": 10,
        "title": "THE ETERNAL FRAGRANCE - Episode 10",
        "description": "THE ETERNAL FRAGRANCE Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E10.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E10.mp4.mp4"
      },
      {
        "id": "1875",
        "episodeNumber": 11,
        "title": "THE ETERNAL FRAGRANCE - Episode 11",
        "description": "THE ETERNAL FRAGRANCE Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E11.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E11.mp4.mp4"
      },
      {
        "id": "1876",
        "episodeNumber": 12,
        "title": "THE ETERNAL FRAGRANCE - Episode 12",
        "description": "THE ETERNAL FRAGRANCE Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E12.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E12.mp4.mp4"
      },
      {
        "id": "1877",
        "episodeNumber": 13,
        "title": "THE ETERNAL FRAGRANCE - Episode 13",
        "description": "THE ETERNAL FRAGRANCE Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E13.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E13.mp4.mp4"
      },
      {
        "id": "1878",
        "episodeNumber": 14,
        "title": "THE ETERNAL FRAGRANCE - Episode 14",
        "description": "THE ETERNAL FRAGRANCE Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E14.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E14.mp4.mp4"
      },
      {
        "id": "1879",
        "episodeNumber": 15,
        "title": "THE ETERNAL FRAGRANCE - Episode 15",
        "description": "THE ETERNAL FRAGRANCE Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E15.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E15.mp4.mp4"
      },
      {
        "id": "1880",
        "episodeNumber": 16,
        "title": "THE ETERNAL FRAGRANCE - Episode 16",
        "description": "THE ETERNAL FRAGRANCE Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E16.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E16.mp4.mp4"
      },
      {
        "id": "1881",
        "episodeNumber": 17,
        "title": "THE ETERNAL FRAGRANCE - Episode 17",
        "description": "THE ETERNAL FRAGRANCE Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E17.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E17.mp4.mp4"
      },
      {
        "id": "1882",
        "episodeNumber": 18,
        "title": "THE ETERNAL FRAGRANCE - Episode 18",
        "description": "THE ETERNAL FRAGRANCE Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E18.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E18.mp4.mp4"
      },
      {
        "id": "1883",
        "episodeNumber": 19,
        "title": "THE ETERNAL FRAGRANCE - Episode 19",
        "description": "THE ETERNAL FRAGRANCE Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E19.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E19.mp4.mp4"
      },
      {
        "id": "1884",
        "episodeNumber": 20,
        "title": "THE ETERNAL FRAGRANCE - Episode 20",
        "description": "THE ETERNAL FRAGRANCE Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E20.mp4"
      },
      {
        "id": "1885",
        "episodeNumber": 21,
        "title": "THE ETERNAL FRAGRANCE - Episode 21",
        "description": "THE ETERNAL FRAGRANCE Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E21.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E21.mp4.mp4"
      },
      {
        "id": "1886",
        "episodeNumber": 22,
        "title": "THE ETERNAL FRAGRANCE - Episode 22",
        "description": "THE ETERNAL FRAGRANCE Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E22.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E22.mp4.mp4"
      },
      {
        "id": "1887",
        "episodeNumber": 23,
        "title": "THE ETERNAL FRAGRANCE - Episode 23",
        "description": "THE ETERNAL FRAGRANCE Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E23.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E23.mp4.mp4"
      },
      {
        "id": "1888",
        "episodeNumber": 24,
        "title": "THE ETERNAL FRAGRANCE - Episode 24",
        "description": "THE ETERNAL FRAGRANCE Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E24.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2FTHE_ENTERNAL_FRAGRANCE_E24.mp4.mp4"
      },
      {
        "id": "1889",
        "episodeNumber": 25,
        "title": "THE ETERNAL FRAGRANCE - Episode 25",
        "description": "THE ETERNAL FRAGRANCE Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E25.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E25.mp4"
      },
      {
        "id": "1890",
        "episodeNumber": 26,
        "title": "THE ETERNAL FRAGRANCE - Episode 26",
        "description": "THE ETERNAL FRAGRANCE Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E26.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E26.mp4"
      },
      {
        "id": "1891",
        "episodeNumber": 27,
        "title": "THE ETERNAL FRAGRANCE - Episode 27",
        "description": "THE ETERNAL FRAGRANCE Episode 27.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E27.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E27.mp4"
      },
      {
        "id": "1892",
        "episodeNumber": 28,
        "title": "THE ETERNAL FRAGRANCE - Episode 28",
        "description": "THE ETERNAL FRAGRANCE Episode 28.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E28.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E28.mp4"
      },
      {
        "id": "1893",
        "episodeNumber": 29,
        "title": "THE ETERNAL FRAGRANCE - Episode 29",
        "description": "THE ETERNAL FRAGRANCE Episode 29.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E29.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E29.mp4"
      },
      {
        "id": "1894",
        "episodeNumber": 30,
        "title": "THE ETERNAL FRAGRANCE - Episode 30",
        "description": "THE ETERNAL FRAGRANCE Episode 30.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E30.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E30.mp4"
      },
      {
        "id": "1895",
        "episodeNumber": 31,
        "title": "THE ETERNAL FRAGRANCE - Episode 31",
        "description": "THE ETERNAL FRAGRANCE Episode 31.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E31.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FTHE_ENTERNAL_FRAGRANCE_E31.mp4"
      },
      {
        "id": "1896",
        "episodeNumber": 32,
        "title": "THE ETERNAL FRAGRANCE - Episode 32",
        "description": "THE ETERNAL FRAGRANCE Episode 32.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E32.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E32.mp4"
      },
      {
        "id": "1897",
        "episodeNumber": 33,
        "title": "THE ETERNAL FRAGRANCE - Episode 33",
        "description": "THE ETERNAL FRAGRANCE Episode 33.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E33_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FTHE_ENTERNAL_FRAGRANCE_E33_FINALE.mp4"
      }
    ],
  },
{
  id: "136",
  title: "YOUNG SWORDSMAN",
  slug: "young-swordsman",
  year: "2026",
  rating: "N/A",
  image: "young-swordsman.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "YOUNG SWORDSMAN is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Drama"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1839",
        "episodeNumber": 1,
        "title": "YOUNG SWORDSMAN - Episode 1",
        "description": "YOUNG SWORDSMAN Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP01.mp4"
      },
      {
        "id": "1840",
        "episodeNumber": 2,
        "title": "YOUNG SWORDSMAN - Episode 2",
        "description": "YOUNG SWORDSMAN Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP02.mp4"
      },
      {
        "id": "1841",
        "episodeNumber": 3,
        "title": "YOUNG SWORDSMAN - Episode 3",
        "description": "YOUNG SWORDSMAN Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP03.mp4"
      },
      {
        "id": "1842",
        "episodeNumber": 4,
        "title": "YOUNG SWORDSMAN - Episode 4",
        "description": "YOUNG SWORDSMAN Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP04.mp4"
      },
      {
        "id": "1843",
        "episodeNumber": 5,
        "title": "YOUNG SWORDSMAN - Episode 5",
        "description": "YOUNG SWORDSMAN Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP05.mp4"
      },
      {
        "id": "1844",
        "episodeNumber": 6,
        "title": "YOUNG SWORDSMAN - Episode 6",
        "description": "YOUNG SWORDSMAN Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP06.mp4"
      },
      {
        "id": "1845",
        "episodeNumber": 7,
        "title": "YOUNG SWORDSMAN - Episode 7",
        "description": "YOUNG SWORDSMAN Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP07.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP07.mp4"
      },
      {
        "id": "1846",
        "episodeNumber": 8,
        "title": "YOUNG SWORDSMAN - Episode 8",
        "description": "YOUNG SWORDSMAN Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP08.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2FYOUNG_SWORDSMAN_EP08.mp4"
      },
      {
        "id": "1847",
        "episodeNumber": 9,
        "title": "YOUNG SWORDSMAN - Episode 9",
        "description": "YOUNG SWORDSMAN Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP09.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP09.mp4"
      },
      {
        "id": "1848",
        "episodeNumber": 10,
        "title": "YOUNG SWORDSMAN - Episode 10",
        "description": "YOUNG SWORDSMAN Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP10.mp4"
      },
      {
        "id": "1849",
        "episodeNumber": 11,
        "title": "YOUNG SWORDSMAN - Episode 11",
        "description": "YOUNG SWORDSMAN Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP11.mp4"
      },
      {
        "id": "1850",
        "episodeNumber": 12,
        "title": "YOUNG SWORDSMAN - Episode 12",
        "description": "YOUNG SWORDSMAN Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP12.mp4"
      },
      {
        "id": "1851",
        "episodeNumber": 13,
        "title": "YOUNG SWORDSMAN - Episode 13",
        "description": "YOUNG SWORDSMAN Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP13.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP13.mp4"
      },
      {
        "id": "1852",
        "episodeNumber": 14,
        "title": "YOUNG SWORDSMAN - Episode 14",
        "description": "YOUNG SWORDSMAN Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP14.mp4"
      },
      {
        "id": "1853",
        "episodeNumber": 15,
        "title": "YOUNG SWORDSMAN - Episode 15",
        "description": "YOUNG SWORDSMAN Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP15.mp4"
      },
      {
        "id": "1854",
        "episodeNumber": 16,
        "title": "YOUNG SWORDSMAN - Episode 16",
        "description": "YOUNG SWORDSMAN Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP16.mp4"
      },
      {
        "id": "1855",
        "episodeNumber": 17,
        "title": "YOUNG SWORDSMAN - Episode 17",
        "description": "YOUNG SWORDSMAN Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP17.mp4"
      },
      {
        "id": "1856",
        "episodeNumber": 18,
        "title": "YOUNG SWORDSMAN - Episode 18",
        "description": "YOUNG SWORDSMAN Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP18.mp4"
      },
      {
        "id": "1857",
        "episodeNumber": 19,
        "title": "YOUNG SWORDSMAN - Episode 19",
        "description": "YOUNG SWORDSMAN Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP19.mp4"
      },
      {
        "id": "1858",
        "episodeNumber": 20,
        "title": "YOUNG SWORDSMAN - Episode 20",
        "description": "YOUNG SWORDSMAN Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP20.mp4"
      },
      {
        "id": "1859",
        "episodeNumber": 21,
        "title": "YOUNG SWORDSMAN - Episode 21",
        "description": "YOUNG SWORDSMAN Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP21.mp4"
      },
      {
        "id": "1860",
        "episodeNumber": 22,
        "title": "YOUNG SWORDSMAN - Episode 22",
        "description": "YOUNG SWORDSMAN Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP22.mp4"
      },
      {
        "id": "1861",
        "episodeNumber": 23,
        "title": "YOUNG SWORDSMAN - Episode 23",
        "description": "YOUNG SWORDSMAN Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP23.mp4"
      },
      {
        "id": "1862",
        "episodeNumber": 24,
        "title": "YOUNG SWORDSMAN - Episode 24",
        "description": "YOUNG SWORDSMAN Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP24.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP24.mp4"
      },
      {
        "id": "1863",
        "episodeNumber": 25,
        "title": "YOUNG SWORDSMAN - Episode 25",
        "description": "YOUNG SWORDSMAN Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP25.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP25.mp4"
      },
      {
        "id": "1864",
        "episodeNumber": 26,
        "title": "YOUNG SWORDSMAN - Episode 26",
        "description": "YOUNG SWORDSMAN Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP26_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fyoungsword%2FYOUNG_SWORDSMAN_EP26_FINALE.mp4"
      }
    ],
  },
{
  id: "137",
  title: "SWORD GOD",
  slug: "sword",
  year: "2026",
  rating: "N/A",
  image: "sword.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "SWORD is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Drama"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1813",
        "episodeNumber": 2,
        "title": "SWORD - Episode 2",
        "description": "SWORD Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2Fsword_Ep2.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2Fsword_Ep2.mp4"
      },
      {
        "id": "1814",
        "episodeNumber": 3,
        "title": "SWORD - Episode 3",
        "description": "SWORD Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FSWORD_EP3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FSWORD_EP3.mp4"
      },
      {
        "id": "1815",
        "episodeNumber": 4,
        "title": "SWORD - Episode 4",
        "description": "SWORD Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/agen/enter/SWORD_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/agen/enter/SWORD_EP04.mp4"
      },
      {
        "id": "1816",
        "episodeNumber": 5,
        "title": "SWORD - Episode 5",
        "description": "SWORD Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/Sword_Ep5.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/Sword_Ep5.mp4"
      },
      {
        "id": "1817",
        "episodeNumber": 6,
        "title": "SWORD - Episode 6",
        "description": "SWORD Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/Sword_Ep6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/Sword_Ep6.mp4"
      },
      {
        "id": "1818",
        "episodeNumber": 7,
        "title": "SWORD - Episode 7",
        "description": "SWORD Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FSWORD_EP07.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fagen%2Fenter%2FSWORD_EP07.mp4"
      },
      {
        "id": "1819",
        "episodeNumber": 8,
        "title": "SWORD - Episode 8",
        "description": "SWORD Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP08.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP08.mp4"
      },
      {
        "id": "1820",
        "episodeNumber": 9,
        "title": "SWORD - Episode 9",
        "description": "SWORD Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP09.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP09.mp4"
      },
      {
        "id": "1821",
        "episodeNumber": 10,
        "title": "SWORD - Episode 10",
        "description": "SWORD Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP10.mp4"
      },
      {
        "id": "1822",
        "episodeNumber": 11,
        "title": "SWORD - Episode 11",
        "description": "SWORD Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP11.mp4"
      },
      {
        "id": "1823",
        "episodeNumber": 12,
        "title": "SWORD - Episode 12",
        "description": "SWORD Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP12.mp4"
      },
      {
        "id": "1824",
        "episodeNumber": 13,
        "title": "SWORD - Episode 13",
        "description": "SWORD Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP13.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP13.mp4"
      },
      {
        "id": "1825",
        "episodeNumber": 14,
        "title": "SWORD - Episode 14",
        "description": "SWORD Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP14.mp4"
      },
      {
        "id": "1826",
        "episodeNumber": 15,
        "title": "SWORD - Episode 15",
        "description": "SWORD Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP15.mp4"
      },
      {
        "id": "1827",
        "episodeNumber": 16,
        "title": "SWORD - Episode 16",
        "description": "SWORD Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP16.mp4"
      },
      {
        "id": "1828",
        "episodeNumber": 17,
        "title": "SWORD - Episode 17",
        "description": "SWORD Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP17.mp4"
      },
      {
        "id": "1829",
        "episodeNumber": 18,
        "title": "SWORD - Episode 18",
        "description": "SWORD Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP18.mp4"
      },
      {
        "id": "1830",
        "episodeNumber": 19,
        "title": "SWORD - Episode 19",
        "description": "SWORD Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP19.mp4"
      },
      {
        "id": "1831",
        "episodeNumber": 20,
        "title": "SWORD - Episode 20",
        "description": "SWORD Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP20.mp4"
      },
      {
        "id": "1832",
        "episodeNumber": 21,
        "title": "SWORD - Episode 21",
        "description": "SWORD Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/SWORD_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/SWORD_EP21.mp4"
      },
      {
        "id": "1833",
        "episodeNumber": 22,
        "title": "SWORD - Episode 22",
        "description": "SWORD Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/SWORD_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/sword/SWORD_EP22.mp4"
      },
      {
        "id": "1834",
        "episodeNumber": 23,
        "title": "SWORD - Episode 23",
        "description": "SWORD Episode 23.",
        "streamUrl": "http://yawe.isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP23.mp4",
        "downloadUrl": "http://yawe.isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP23.mp4"
      },
      {
        "id": "1835",
        "episodeNumber": 24,
        "title": "SWORD - Episode 24",
        "description": "SWORD Episode 24.",
        "streamUrl": "http://yawe.isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP24.mp4",
        "downloadUrl": "http://yawe.isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP24.mp4"
      },
      {
        "id": "1836",
        "episodeNumber": 25,
        "title": "SWORD - Episode 25",
        "description": "SWORD Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP25.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FSWORD_EP25.mp4"
      },
      {
        "id": "1837",
        "episodeNumber": 26,
        "title": "SWORD - Episode 26",
        "description": "SWORD Episode 26.",
        "streamUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/SWORD_EP26.mp4",
        "downloadUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/SWORD_EP26.mp4"
      },
      {
        "id": "1838",
        "episodeNumber": 27,
        "title": "SWORD - Episode 27",
        "description": "SWORD Episode 27.",
        "streamUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/SWORD_EP27_FINALE.mp4",
        "downloadUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/SWORD_EP27_FINALE.mp4"
      }
    ],
  },
{
  id: "138",
  title: "PRELUDE OF THE WHITE SNAKE",
  slug: "prelude-of-the-white-snake",
  year: "2026",
  rating: "N/A",
  image: "prelude-of-the-white-snake.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "PRELUDE OF THE WHITE SNAKE is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Fantasy", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1805",
        "episodeNumber": 1,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 1",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FPRELUDE_OF_THE_WHITE_SNAKE_EP01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FPRELUDE_OF_THE_WHITE_SNAKE_EP01.mp4"
      },
      {
        "id": "1806",
        "episodeNumber": 2,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 2",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FPRELUDE_OF_THE_WHITE_SNAKE_EP02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fsword%2FPRELUDE_OF_THE_WHITE_SNAKE_EP02.mp4"
      },
      {
        "id": "1807",
        "episodeNumber": 3,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 3",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP03.mp4"
      },
      {
        "id": "1808",
        "episodeNumber": 4,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 4",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP04.mp4"
      },
      {
        "id": "1809",
        "episodeNumber": 5,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 5",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP05.mp4"
      },
      {
        "id": "1810",
        "episodeNumber": 6,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 6",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP06.mp4"
      },
      {
        "id": "1811",
        "episodeNumber": 7,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 7",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP07.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP07.mp4"
      },
      {
        "id": "1812",
        "episodeNumber": 8,
        "title": "PRELUDE OF THE WHITE SNAKE - Episode 8",
        "description": "PRELUDE OF THE WHITE SNAKE Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP08.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FPRELUDE_OF_THE_WHITE_SNAKE_EP08.mp4"
      }
    ],
  },
{
  id: "139",
  title: "BE YOURSELF",
  slug: "be-yourself",
  year: "2026",
  rating: "N/A",
  image: "be-yourself.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "BE YOURSELF is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Drama", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1781",
        "episodeNumber": 1,
        "title": "BE YOURSELF - Episode 1",
        "description": "BE YOURSELF Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP01.mp4"
      },
      {
        "id": "1782",
        "episodeNumber": 2,
        "title": "BE YOURSELF - Episode 2",
        "description": "BE YOURSELF Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP02.mp4"
      },
      {
        "id": "1783",
        "episodeNumber": 3,
        "title": "BE YOURSELF - Episode 3",
        "description": "BE YOURSELF Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP03.mp4"
      },
      {
        "id": "1784",
        "episodeNumber": 4,
        "title": "BE YOURSELF - Episode 4",
        "description": "BE YOURSELF Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP04.mp4"
      },
      {
        "id": "1785",
        "episodeNumber": 5,
        "title": "BE YOURSELF - Episode 5",
        "description": "BE YOURSELF Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP05.mp4"
      },
      {
        "id": "1786",
        "episodeNumber": 6,
        "title": "BE YOURSELF - Episode 6",
        "description": "BE YOURSELF Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FBE_YOURSELF_EP06.mp4"
      },
      {
        "id": "1787",
        "episodeNumber": 7,
        "title": "BE YOURSELF - Episode 7",
        "description": "BE YOURSELF Episode 7.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP07.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP07.mp4"
      },
      {
        "id": "1788",
        "episodeNumber": 8,
        "title": "BE YOURSELF - Episode 8",
        "description": "BE YOURSELF Episode 8.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP08.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP08.mp4"
      },
      {
        "id": "1789",
        "episodeNumber": 9,
        "title": "BE YOURSELF - Episode 9",
        "description": "BE YOURSELF Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP09.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP09.mp4"
      },
      {
        "id": "1790",
        "episodeNumber": 10,
        "title": "BE YOURSELF - Episode 10",
        "description": "BE YOURSELF Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP10.mp4"
      },
      {
        "id": "1791",
        "episodeNumber": 11,
        "title": "BE YOURSELF - Episode 11",
        "description": "BE YOURSELF Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP11.mp4"
      },
      {
        "id": "1792",
        "episodeNumber": 12,
        "title": "BE YOURSELF - Episode 12",
        "description": "BE YOURSELF Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP12.mp4"
      },
      {
        "id": "1793",
        "episodeNumber": 13,
        "title": "BE YOURSELF - Episode 13",
        "description": "BE YOURSELF Episode 13.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP13.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP13.mp4"
      },
      {
        "id": "1794",
        "episodeNumber": 14,
        "title": "BE YOURSELF - Episode 14",
        "description": "BE YOURSELF Episode 14.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP14.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP14.mp4"
      },
      {
        "id": "1795",
        "episodeNumber": 15,
        "title": "BE YOURSELF - Episode 15",
        "description": "BE YOURSELF Episode 15.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP15.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP15.mp4"
      },
      {
        "id": "1796",
        "episodeNumber": 16,
        "title": "BE YOURSELF - Episode 16",
        "description": "BE YOURSELF Episode 16.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP16.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP16.mp4"
      },
      {
        "id": "1797",
        "episodeNumber": 17,
        "title": "BE YOURSELF - Episode 17",
        "description": "BE YOURSELF Episode 17.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP17.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP17.mp4"
      },
      {
        "id": "1798",
        "episodeNumber": 18,
        "title": "BE YOURSELF - Episode 18",
        "description": "BE YOURSELF Episode 18.",
        "streamUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP18.mp4",
        "downloadUrl": "https://yawe.isatafilez.my/files/series/2026/chinese/great/white/BE_YOURSELF_EP18.mp4"
      },
      {
        "id": "1799",
        "episodeNumber": 19,
        "title": "BE YOURSELF - Episode 19",
        "description": "BE YOURSELF Episode 19.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP19.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP19.mp4"
      },
      {
        "id": "1800",
        "episodeNumber": 20,
        "title": "BE YOURSELF - Episode 20",
        "description": "BE YOURSELF Episode 20.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP20.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP20.mp4"
      },
      {
        "id": "1801",
        "episodeNumber": 21,
        "title": "BE YOURSELF - Episode 21",
        "description": "BE YOURSELF Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP21.mp4"
      },
      {
        "id": "1802",
        "episodeNumber": 22,
        "title": "BE YOURSELF - Episode 22",
        "description": "BE YOURSELF Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP22.mp4"
      },
      {
        "id": "1803",
        "episodeNumber": 23,
        "title": "BE YOURSELF - Episode 23",
        "description": "BE YOURSELF Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fbeyour%2FBE_YOURSELF_EP23.mp4"
      },
      {
        "id": "1804",
        "episodeNumber": 24,
        "title": "BE YOURSELF - Episode 24",
        "description": "BE YOURSELF Episode 24.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP24_FINALE.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/beyour/BE_YOURSELF_EP24_FINALE.mp4"
      }
    ],
  },
{
  id: "140",
  title: "SWORD AND BELOVED",
  slug: "sword-and-beloved",
  year: "2026",
  rating: "N/A",
  image: "sword-and-beloved.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "SWORD AND BELOVED is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Drama", "Fantasy"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1734",
        "episodeNumber": 1,
        "title": "SWORD AND BELOVED - Episode 1",
        "description": "SWORD AND BELOVED Episode 1.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP1.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP1.MP4"
      },
      {
        "id": "1735",
        "episodeNumber": 2,
        "title": "SWORD AND BELOVED - Episode 2",
        "description": "SWORD AND BELOVED Episode 2.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP2.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP2.MP4"
      },
      {
        "id": "1736",
        "episodeNumber": 3,
        "title": "SWORD AND BELOVED - Episode 3",
        "description": "SWORD AND BELOVED Episode 3.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP3.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP3.MP4"
      },
      {
        "id": "1737",
        "episodeNumber": 4,
        "title": "SWORD AND BELOVED - Episode 4",
        "description": "SWORD AND BELOVED Episode 4.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP4.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP4.mp4"
      },
      {
        "id": "1738",
        "episodeNumber": 5,
        "title": "SWORD AND BELOVED - Episode 5",
        "description": "SWORD AND BELOVED Episode 5.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP5.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP5.mp4"
      },
      {
        "id": "1739",
        "episodeNumber": 6,
        "title": "SWORD AND BELOVED - Episode 6",
        "description": "SWORD AND BELOVED Episode 6.",
        "streamUrl": "https://isatafilez.my/files/SWORD_AND_BELOVED_EP6.mp4",
        "downloadUrl": "https://isatafilez.my/files/SWORD_AND_BELOVED_EP6.mp4"
      },
      {
        "id": "1740",
        "episodeNumber": 7,
        "title": "SWORD AND BELOVED - Episode 7",
        "description": "SWORD AND BELOVED Episode 7.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP7.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP7.mp4"
      },
      {
        "id": "1741",
        "episodeNumber": 8,
        "title": "SWORD AND BELOVED - Episode 8",
        "description": "SWORD AND BELOVED Episode 8.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP8.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP8.mp4"
      },
      {
        "id": "1742",
        "episodeNumber": 9,
        "title": "SWORD AND BELOVED - Episode 9",
        "description": "SWORD AND BELOVED Episode 9.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP9.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP9.mp4"
      },
      {
        "id": "1743",
        "episodeNumber": 10,
        "title": "SWORD AND BELOVED - Episode 10",
        "description": "SWORD AND BELOVED Episode 10.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP10.mp4"
      },
      {
        "id": "1744",
        "episodeNumber": 11,
        "title": "SWORD AND BELOVED - Episode 11",
        "description": "SWORD AND BELOVED Episode 11.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP11.mp4"
      },
      {
        "id": "1745",
        "episodeNumber": 12,
        "title": "SWORD AND BELOVED - Episode 12",
        "description": "SWORD AND BELOVED Episode 12.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP12.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP12.mp4"
      },
      {
        "id": "1746",
        "episodeNumber": 13,
        "title": "SWORD AND BELOVED - Episode 13",
        "description": "SWORD AND BELOVED Episode 13.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP13.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP13.mp4"
      },
      {
        "id": "1747",
        "episodeNumber": 14,
        "title": "SWORD AND BELOVED - Episode 14",
        "description": "SWORD AND BELOVED Episode 14.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP14.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP14.mp4"
      },
      {
        "id": "1748",
        "episodeNumber": 15,
        "title": "SWORD AND BELOVED - Episode 15",
        "description": "SWORD AND BELOVED Episode 15.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP15.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP15.mp4"
      },
      {
        "id": "1749",
        "episodeNumber": 16,
        "title": "SWORD AND BELOVED - Episode 16",
        "description": "SWORD AND BELOVED Episode 16.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP16.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP16.mp4"
      },
      {
        "id": "1750",
        "episodeNumber": 17,
        "title": "SWORD AND BELOVED - Episode 17",
        "description": "SWORD AND BELOVED Episode 17.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP17.mp4"
      },
      {
        "id": "1751",
        "episodeNumber": 18,
        "title": "SWORD AND BELOVED - Episode 18",
        "description": "SWORD AND BELOVED Episode 18.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP18.mp4"
      },
      {
        "id": "1752",
        "episodeNumber": 19,
        "title": "SWORD AND BELOVED - Episode 19",
        "description": "SWORD AND BELOVED Episode 19.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP19.mp4"
      },
      {
        "id": "1753",
        "episodeNumber": 20,
        "title": "SWORD AND BELOVED - Episode 20",
        "description": "SWORD AND BELOVED Episode 20.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP20.mp4"
      },
      {
        "id": "1754",
        "episodeNumber": 21,
        "title": "SWORD AND BELOVED - Episode 21",
        "description": "SWORD AND BELOVED Episode 21.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP21.mp4"
      },
      {
        "id": "1755",
        "episodeNumber": 22,
        "title": "SWORD AND BELOVED - Episode 22",
        "description": "SWORD AND BELOVED Episode 22.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP22.mp4"
      },
      {
        "id": "1756",
        "episodeNumber": 23,
        "title": "SWORD AND BELOVED - Episode 23",
        "description": "SWORD AND BELOVED Episode 23.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_23.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_23.mp4"
      },
      {
        "id": "1757",
        "episodeNumber": 24,
        "title": "SWORD AND BELOVED - Episode 24",
        "description": "SWORD AND BELOVED Episode 24.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_24.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_24.mp4"
      },
      {
        "id": "1758",
        "episodeNumber": 25,
        "title": "SWORD AND BELOVED - Episode 25",
        "description": "SWORD AND BELOVED Episode 25.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP25.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP25.MP4"
      },
      {
        "id": "1759",
        "episodeNumber": 26,
        "title": "SWORD AND BELOVED - Episode 26",
        "description": "SWORD AND BELOVED Episode 26.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP26.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP26.MP4"
      },
      {
        "id": "1760",
        "episodeNumber": 27,
        "title": "SWORD AND BELOVED - Episode 27",
        "description": "SWORD AND BELOVED Episode 27.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP27.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP27.MP4"
      },
      {
        "id": "1761",
        "episodeNumber": 28,
        "title": "SWORD AND BELOVED - Episode 28",
        "description": "SWORD AND BELOVED Episode 28.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP28.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP28.MP4"
      },
      {
        "id": "1762",
        "episodeNumber": 29,
        "title": "SWORD AND BELOVED - Episode 29",
        "description": "SWORD AND BELOVED Episode 29.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP29.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP29.MP4"
      },
      {
        "id": "1763",
        "episodeNumber": 30,
        "title": "SWORD AND BELOVED - Episode 30",
        "description": "SWORD AND BELOVED Episode 30.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP30.MP4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP30.MP4"
      },
      {
        "id": "1764",
        "episodeNumber": 31,
        "title": "SWORD AND BELOVED - Episode 31",
        "description": "SWORD AND BELOVED Episode 31.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP31.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP31.mp4"
      },
      {
        "id": "1765",
        "episodeNumber": 32,
        "title": "SWORD AND BELOVED - Episode 32",
        "description": "SWORD AND BELOVED Episode 32.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP32.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP32.mp4"
      },
      {
        "id": "1766",
        "episodeNumber": 33,
        "title": "SWORD AND BELOVED - Episode 33",
        "description": "SWORD AND BELOVED Episode 33.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP33.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP33.mp4"
      },
      {
        "id": "1767",
        "episodeNumber": 34,
        "title": "SWORD AND BELOVED - Episode 34",
        "description": "SWORD AND BELOVED Episode 34.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP34.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP34.mp4"
      },
      {
        "id": "1768",
        "episodeNumber": 36,
        "title": "SWORD AND BELOVED - Episode 36",
        "description": "SWORD AND BELOVED Episode 36.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP36_FINAL.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FSWORD_AND_BELOVED_EP36_FINAL.mp4"
      }
    ],
  },
{
  id: "141",
  title: "THE JOURNEY OF LEGEND",
  slug: "the-journey-of-legend",
  year: "2026",
  rating: "N/A",
  image: "the-journey-of-legend.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "THE JOURNEY OF LEGEND is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Adventure", "Drama"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1694",
        "episodeNumber": 1,
        "title": "THE JOURNEY OF LEGEND - Episode 1",
        "description": "THE JOURNEY OF LEGEND Episode 1.",
        "streamUrl": "https://isatafilez.my/files/Newthi%2FKorea%2FTHE_JOURNEY_OF_LEGEND_01.mp4",
        "downloadUrl": "https://isatafilez.my/files/Newthi%2FKorea%2FTHE_JOURNEY_OF_LEGEND_01.mp4"
      },
      {
        "id": "1695",
        "episodeNumber": 2,
        "title": "THE JOURNEY OF LEGEND - Episode 2",
        "description": "THE JOURNEY OF LEGEND Episode 2.",
        "streamUrl": "https://isatafilez.my/files/Newthi%2FKorea%2FTHE_JOURNEY_OF_LEGEND_02.mp4",
        "downloadUrl": "https://isatafilez.my/files/Newthi%2FKorea%2FTHE_JOURNEY_OF_LEGEND_02.mp4"
      },
      {
        "id": "1696",
        "episodeNumber": 3,
        "title": "THE JOURNEY OF LEGEND - Episode 3",
        "description": "THE JOURNEY OF LEGEND Episode 3.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_03.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_03.mp4"
      },
      {
        "id": "1697",
        "episodeNumber": 4,
        "title": "THE JOURNEY OF LEGEND - Episode 4",
        "description": "THE JOURNEY OF LEGEND Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/gn1229t683it7r4/THE_JOURNEY_OF_LEGEND_04.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/gn1229t683it7r4/THE_JOURNEY_OF_LEGEND_04.mp4/file"
      },
      {
        "id": "1698",
        "episodeNumber": 5,
        "title": "THE JOURNEY OF LEGEND - Episode 5",
        "description": "THE JOURNEY OF LEGEND Episode 5.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FTHE_JOURNEY_OF_LEGEND_05.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FTHE_JOURNEY_OF_LEGEND_05.mp4"
      },
      {
        "id": "1699",
        "episodeNumber": 6,
        "title": "THE JOURNEY OF LEGEND - Episode 6",
        "description": "THE JOURNEY OF LEGEND Episode 6.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_06.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_06.mp4"
      },
      {
        "id": "1700",
        "episodeNumber": 7,
        "title": "THE JOURNEY OF LEGEND - Episode 7",
        "description": "THE JOURNEY OF LEGEND Episode 7.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_07.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_07.mp4"
      },
      {
        "id": "1701",
        "episodeNumber": 8,
        "title": "THE JOURNEY OF LEGEND - Episode 8",
        "description": "THE JOURNEY OF LEGEND Episode 8.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_08.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_08.mp4"
      },
      {
        "id": "1702",
        "episodeNumber": 9,
        "title": "THE JOURNEY OF LEGEND - Episode 9",
        "description": "THE JOURNEY OF LEGEND Episode 9.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_09.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_09.mp4"
      },
      {
        "id": "1703",
        "episodeNumber": 10,
        "title": "THE JOURNEY OF LEGEND - Episode 10",
        "description": "THE JOURNEY OF LEGEND Episode 10.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_10.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_10.mp4"
      },
      {
        "id": "1704",
        "episodeNumber": 11,
        "title": "THE JOURNEY OF LEGEND - Episode 11",
        "description": "THE JOURNEY OF LEGEND Episode 11.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_11.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_11.mp4"
      },
      {
        "id": "1705",
        "episodeNumber": 12,
        "title": "THE JOURNEY OF LEGEND - Episode 12",
        "description": "THE JOURNEY OF LEGEND Episode 12.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_12.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_12.mp4"
      },
      {
        "id": "1706",
        "episodeNumber": 13,
        "title": "THE JOURNEY OF LEGEND - Episode 13",
        "description": "THE JOURNEY OF LEGEND Episode 13.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_13.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_13.mp4"
      },
      {
        "id": "1707",
        "episodeNumber": 14,
        "title": "THE JOURNEY OF LEGEND - Episode 14",
        "description": "THE JOURNEY OF LEGEND Episode 14.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_14.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_14.mp4"
      },
      {
        "id": "1708",
        "episodeNumber": 15,
        "title": "THE JOURNEY OF LEGEND - Episode 15",
        "description": "THE JOURNEY OF LEGEND Episode 15.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_15.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_15.mp4"
      },
      {
        "id": "1709",
        "episodeNumber": 16,
        "title": "THE JOURNEY OF LEGEND - Episode 16",
        "description": "THE JOURNEY OF LEGEND Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_16.mp4"
      },
      {
        "id": "1710",
        "episodeNumber": 17,
        "title": "THE JOURNEY OF LEGEND - Episode 17",
        "description": "THE JOURNEY OF LEGEND Episode 17.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_17.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_17.mp4"
      },
      {
        "id": "1711",
        "episodeNumber": 18,
        "title": "THE JOURNEY OF LEGEND - Episode 18",
        "description": "THE JOURNEY OF LEGEND Episode 18.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_18.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_18.mp4"
      },
      {
        "id": "1712",
        "episodeNumber": 19,
        "title": "THE JOURNEY OF LEGEND - Episode 19",
        "description": "THE JOURNEY OF LEGEND Episode 19.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_19.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_19.mp4"
      },
      {
        "id": "1713",
        "episodeNumber": 20,
        "title": "THE JOURNEY OF LEGEND - Episode 20",
        "description": "THE JOURNEY OF LEGEND Episode 20.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_20.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_20.mp4"
      },
      {
        "id": "1714",
        "episodeNumber": 21,
        "title": "THE JOURNEY OF LEGEND - Episode 21",
        "description": "THE JOURNEY OF LEGEND Episode 21.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_21.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_21.mp4"
      },
      {
        "id": "1715",
        "episodeNumber": 22,
        "title": "THE JOURNEY OF LEGEND - Episode 22",
        "description": "THE JOURNEY OF LEGEND Episode 22.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_22.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_22.mp4"
      },
      {
        "id": "1716",
        "episodeNumber": 23,
        "title": "THE JOURNEY OF LEGEND - Episode 23",
        "description": "THE JOURNEY OF LEGEND Episode 23.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_23.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_23.mp4"
      },
      {
        "id": "1717",
        "episodeNumber": 24,
        "title": "THE JOURNEY OF LEGEND - Episode 24",
        "description": "THE JOURNEY OF LEGEND Episode 24.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_24.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_24.mp4"
      },
      {
        "id": "1718",
        "episodeNumber": 25,
        "title": "THE JOURNEY OF LEGEND - Episode 25",
        "description": "THE JOURNEY OF LEGEND Episode 25.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_25.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_25.mp4"
      },
      {
        "id": "1719",
        "episodeNumber": 26,
        "title": "THE JOURNEY OF LEGEND - Episode 26",
        "description": "THE JOURNEY OF LEGEND Episode 26.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FTHE_JOURNEY_OF_LEGEND_26.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FTHE_JOURNEY_OF_LEGEND_26.mp4"
      },
      {
        "id": "1720",
        "episodeNumber": 27,
        "title": "THE JOURNEY OF LEGEND - Episode 27",
        "description": "THE JOURNEY OF LEGEND Episode 27.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_27.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_27.mp4"
      },
      {
        "id": "1721",
        "episodeNumber": 28,
        "title": "THE JOURNEY OF LEGEND - Episode 28",
        "description": "THE JOURNEY OF LEGEND Episode 28.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_28.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_28.mp4"
      },
      {
        "id": "1722",
        "episodeNumber": 29,
        "title": "THE JOURNEY OF LEGEND - Episode 29",
        "description": "THE JOURNEY OF LEGEND Episode 29.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_29.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_29.mp4"
      },
      {
        "id": "1723",
        "episodeNumber": 30,
        "title": "THE JOURNEY OF LEGEND - Episode 30 (Fixed)",
        "description": "THE JOURNEY OF LEGEND Episode 30.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_30.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2FTHE_JOURNEY_OF_LEGEND_30.mp4"
      },
      {
        "id": "1724",
        "episodeNumber": 31,
        "title": "THE JOURNEY OF LEGEND - Episode 31",
        "description": "THE JOURNEY OF LEGEND Episode 31.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_31.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_31.mp4"
      },
      {
        "id": "1725",
        "episodeNumber": 32,
        "title": "THE JOURNEY OF LEGEND - Episode 32",
        "description": "THE JOURNEY OF LEGEND Episode 32.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_32.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_32.mp4"
      },
      {
        "id": "1726",
        "episodeNumber": 33,
        "title": "THE JOURNEY OF LEGEND - Episode 33",
        "description": "THE JOURNEY OF LEGEND Episode 33.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_33.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_33.mp4"
      },
      {
        "id": "1727",
        "episodeNumber": 34,
        "title": "THE JOURNEY OF LEGEND - Episode 34",
        "description": "THE JOURNEY OF LEGEND Episode 34.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_34.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_34.mp4"
      },
      {
        "id": "1728",
        "episodeNumber": 35,
        "title": "THE JOURNEY OF LEGEND - Episode 35",
        "description": "THE JOURNEY OF LEGEND Episode 35.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_35.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_35.mp4"
      },
      {
        "id": "1729",
        "episodeNumber": 36,
        "title": "THE JOURNEY OF LEGEND - Episode 36",
        "description": "THE JOURNEY OF LEGEND Episode 36.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_36.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_36.mp4"
      },
      {
        "id": "1730",
        "episodeNumber": 37,
        "title": "THE JOURNEY OF LEGEND - Episode 37",
        "description": "THE JOURNEY OF LEGEND Episode 37.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_37.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_37.mp4"
      },
      {
        "id": "1731",
        "episodeNumber": 38,
        "title": "THE JOURNEY OF LEGEND - Episode 38",
        "description": "THE JOURNEY OF LEGEND Episode 38.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_38.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_38.mp4"
      },
      {
        "id": "1732",
        "episodeNumber": 39,
        "title": "THE JOURNEY OF LEGEND - Episode 39",
        "description": "THE JOURNEY OF LEGEND Episode 39.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_39.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_39.mp4"
      },
      {
        "id": "1733",
        "episodeNumber": 40,
        "title": "THE JOURNEY OF LEGEND - Episode 40 (Finale)",
        "description": "THE JOURNEY OF LEGEND Episode 40 (Finale).",
        "streamUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_40_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FChinese%2FTHE_JOURNEY_OF_LEGEND_40_FINALE.mp4"
      }
    ],
  },
{
  id: "142",
  title: "REALM'S NIGHT RAIN",
  slug: "realm-s-night-rain",
  year: "2026",
  rating: "N/A",
  image: "realm-s-night-rain.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "REALM'S NIGHT RAIN is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Action", "Drama", "Fantasy"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1680",
        "episodeNumber": 1,
        "title": "REALM'S NIGHT RAIN - Episode 1",
        "description": "REALM'S NIGHT RAIN Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP01.mp4"
      },
      {
        "id": "1681",
        "episodeNumber": 2,
        "title": "REALM'S NIGHT RAIN - Episode 2",
        "description": "REALM'S NIGHT RAIN Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP02.mp4"
      },
      {
        "id": "1682",
        "episodeNumber": 3,
        "title": "REALM'S NIGHT RAIN - Episode 3",
        "description": "REALM'S NIGHT RAIN Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP03.mp4"
      },
      {
        "id": "1683",
        "episodeNumber": 4,
        "title": "REALM'S NIGHT RAIN - Episode 4",
        "description": "REALM'S NIGHT RAIN Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Freal%2FREALM_S_NIGHT_RAIN_DL_EP04.mp4"
      },
      {
        "id": "1684",
        "episodeNumber": 5,
        "title": "REALM'S NIGHT RAIN - Episode 5",
        "description": "REALM'S NIGHT RAIN Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP05.mp4"
      },
      {
        "id": "1685",
        "episodeNumber": 6,
        "title": "REALM'S NIGHT RAIN - Episode 6",
        "description": "REALM'S NIGHT RAIN Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP06.mp4"
      },
      {
        "id": "1686",
        "episodeNumber": 7,
        "title": "REALM'S NIGHT RAIN - Episode 7",
        "description": "REALM'S NIGHT RAIN Episode 7.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP07.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP07.mp4"
      },
      {
        "id": "1687",
        "episodeNumber": 8,
        "title": "REALM'S NIGHT RAIN - Episode 8",
        "description": "REALM'S NIGHT RAIN Episode 8.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP08.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP08.mp4"
      },
      {
        "id": "1688",
        "episodeNumber": 9,
        "title": "REALM'S NIGHT RAIN - Episode 9",
        "description": "REALM'S NIGHT RAIN Episode 9.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP09.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP09.mp4"
      },
      {
        "id": "1689",
        "episodeNumber": 10,
        "title": "REALM'S NIGHT RAIN - Episode 10",
        "description": "REALM'S NIGHT RAIN Episode 10.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP10.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP10.mp4"
      },
      {
        "id": "1690",
        "episodeNumber": 11,
        "title": "REALM'S NIGHT RAIN - Episode 11",
        "description": "REALM'S NIGHT RAIN Episode 11.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP11.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP11.mp4"
      },
      {
        "id": "1691",
        "episodeNumber": 12,
        "title": "REALM'S NIGHT RAIN - Episode 12",
        "description": "REALM'S NIGHT RAIN Episode 12.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP12.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP12.mp4"
      },
      {
        "id": "1692",
        "episodeNumber": 13,
        "title": "REALM'S NIGHT RAIN - Episode 13",
        "description": "REALM'S NIGHT RAIN Episode 13.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP13.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP13.mp4"
      },
      {
        "id": "1693",
        "episodeNumber": 14,
        "title": "REALM'S NIGHT RAIN - Episode 14",
        "description": "REALM'S NIGHT RAIN Episode 14.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP14.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP14.mp4"
      },
      {
        "id": "2140",
        "episodeNumber": 15,
        "title": "REALM'S NIGHT RAIN - Episode 15",
        "description": "REALM'S NIGHT RAIN Episode 15.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP15.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP15.mp4"
      },
      {
        "id": "2141",
        "episodeNumber": 16,
        "title": "REALM'S NIGHT RAIN - Episode 16",
        "description": "REALM'S NIGHT RAIN Episode 16.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP16.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP16.mp4"
      },
      {
        "id": "2142",
        "episodeNumber": 17,
        "title": "REALM'S NIGHT RAIN - Episode 17",
        "description": "REALM'S NIGHT RAIN Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP17.mp4"
      },
      {
        "id": "2143",
        "episodeNumber": 18,
        "title": "REALM'S NIGHT RAIN - Episode 18",
        "description": "REALM'S NIGHT RAIN Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP18.mp4"
      },
      {
        "id": "2185",
        "episodeNumber": 15,
        "title": "REALM'S NIGHT RAIN - Episode 15",
        "description": "REALM'S NIGHT RAIN Episode 15.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP15.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP15.mp4"
      },
      {
        "id": "2186",
        "episodeNumber": 16,
        "title": "REALM'S NIGHT RAIN - Episode 16",
        "description": "REALM'S NIGHT RAIN Episode 16.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP16.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALMS_NIGHT_RAIN_DL_EP16.mp4"
      },
      {
        "id": "2187",
        "episodeNumber": 17,
        "title": "REALM'S NIGHT RAIN - Episode 17",
        "description": "REALM'S NIGHT RAIN Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP17.mp4"
      },
      {
        "id": "2188",
        "episodeNumber": 18,
        "title": "REALM'S NIGHT RAIN - Episode 18",
        "description": "REALM'S NIGHT RAIN Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FREALM_S_NIGHT_RAIN_DL_EP18.mp4"
      },
      {
        "id": "2189",
        "episodeNumber": 19,
        "title": "REALM'S NIGHT RAIN - Episode 19",
        "description": "REALM'S NIGHT RAIN Episode 19.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP19.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP19.mp4"
      },
      {
        "id": "2190",
        "episodeNumber": 20,
        "title": "REALM'S NIGHT RAIN - Episode 20",
        "description": "REALM'S NIGHT RAIN Episode 20.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP20.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP20.mp4"
      },
      {
        "id": "2191",
        "episodeNumber": 21,
        "title": "REALM'S NIGHT RAIN - Episode 21",
        "description": "REALM'S NIGHT RAIN Episode 21.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP21.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP21.mp4"
      },
      {
        "id": "2192",
        "episodeNumber": 22,
        "title": "REALM'S NIGHT RAIN - Episode 22",
        "description": "REALM'S NIGHT RAIN Episode 22.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP22.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/real/REALM_S_NIGHT_RAIN_DL_EP22.mp4"
      }
    ],
  },
{
  id: "143",
  title: "SHADOW LOVE",
  slug: "shadow-love",
  year: "2026",
  rating: "N/A",
  image: "shadow-love.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "SHADOW LOVE is presented in an Agasobanuye version.",
  language: "Chinese",
  genres: ["Drama", "Romance"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "1636",
        "episodeNumber": 1,
        "title": "SHADOW LOVE - Episode 1",
        "description": "SHADOW LOVE Episode 1.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_01.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_01.mp4"
      },
      {
        "id": "1637",
        "episodeNumber": 2,
        "title": "SHADOW LOVE - Episode 2",
        "description": "SHADOW LOVE Episode 2.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_02.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_02.mp4"
      },
      {
        "id": "1638",
        "episodeNumber": 3,
        "title": "SHADOW LOVE - Episode 3",
        "description": "SHADOW LOVE Episode 3.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_03.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_03.mp4"
      },
      {
        "id": "1639",
        "episodeNumber": 4,
        "title": "SHADOW LOVE - Episode 4",
        "description": "SHADOW LOVE Episode 4.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_04.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_04.mp4"
      },
      {
        "id": "1640",
        "episodeNumber": 5,
        "title": "SHADOW LOVE - Episode 5",
        "description": "SHADOW LOVE Episode 5.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_05.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_05.mp4"
      },
      {
        "id": "1641",
        "episodeNumber": 6,
        "title": "SHADOW LOVE - Episode 6",
        "description": "SHADOW LOVE Episode 6.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_06.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_06.mp4"
      },
      {
        "id": "1642",
        "episodeNumber": 7,
        "title": "SHADOW LOVE - Episode 7",
        "description": "SHADOW LOVE Episode 7.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_07.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_07.mp4"
      },
      {
        "id": "1643",
        "episodeNumber": 8,
        "title": "SHADOW LOVE - Episode 8",
        "description": "SHADOW LOVE Episode 8.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_08.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_08.mp4"
      },
      {
        "id": "1644",
        "episodeNumber": 9,
        "title": "SHADOW LOVE - Episode 9",
        "description": "SHADOW LOVE Episode 9.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_09.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_09.mp4"
      },
      {
        "id": "1645",
        "episodeNumber": 10,
        "title": "SHADOW LOVE - Episode 10",
        "description": "SHADOW LOVE Episode 10.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_10.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_10.mp4"
      },
      {
        "id": "1646",
        "episodeNumber": 11,
        "title": "SHADOW LOVE - Episode 11",
        "description": "SHADOW LOVE Episode 11.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_11.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_11.mp4"
      },
      {
        "id": "1647",
        "episodeNumber": 12,
        "title": "SHADOW LOVE - Episode 12",
        "description": "SHADOW LOVE Episode 12.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_12.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_12.mp4"
      },
      {
        "id": "1648",
        "episodeNumber": 13,
        "title": "SHADOW LOVE - Episode 13",
        "description": "SHADOW LOVE Episode 13.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_13.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_13.mp4"
      },
      {
        "id": "1649",
        "episodeNumber": 14,
        "title": "SHADOW LOVE - Episode 14",
        "description": "SHADOW LOVE Episode 14.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_14.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_14.mp4"
      },
      {
        "id": "1650",
        "episodeNumber": 15,
        "title": "SHADOW LOVE - Episode 15",
        "description": "SHADOW LOVE Episode 15.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_15.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_15.mp4"
      },
      {
        "id": "1651",
        "episodeNumber": 16,
        "title": "SHADOW LOVE - Episode 16",
        "description": "SHADOW LOVE Episode 16.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_16.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_16.mp4"
      },
      {
        "id": "1652",
        "episodeNumber": 17,
        "title": "SHADOW LOVE - Episode 17",
        "description": "SHADOW LOVE Episode 17.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_17.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_17.mp4"
      },
      {
        "id": "1653",
        "episodeNumber": 18,
        "title": "SHADOW LOVE - Episode 18",
        "description": "SHADOW LOVE Episode 18.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_18.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_18.mp4"
      },
      {
        "id": "1654",
        "episodeNumber": 19,
        "title": "SHADOW LOVE - Episode 19",
        "description": "SHADOW LOVE Episode 19.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_19.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_19.mp4"
      },
      {
        "id": "1655",
        "episodeNumber": 20,
        "title": "SHADOW LOVE - Episode 20",
        "description": "SHADOW LOVE Episode 20.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_20.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_20.mp4"
      },
      {
        "id": "1656",
        "episodeNumber": 21,
        "title": "SHADOW LOVE - Episode 21",
        "description": "SHADOW LOVE Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_21.mp4"
      },
      {
        "id": "1657",
        "episodeNumber": 22,
        "title": "SHADOW LOVE - Episode 22",
        "description": "SHADOW LOVE Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_22.mp4"
      },
      {
        "id": "1658",
        "episodeNumber": 23,
        "title": "SHADOW LOVE - Episode 23",
        "description": "SHADOW LOVE Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_23.mp4"
      },
      {
        "id": "1659",
        "episodeNumber": 24,
        "title": "SHADOW LOVE - Episode 24",
        "description": "SHADOW LOVE Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_24.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fshadow%2FSHADOW_LOVE_24.mp4"
      },
      {
        "id": "1660",
        "episodeNumber": 25,
        "title": "SHADOW LOVE - Episode 25",
        "description": "SHADOW LOVE Episode 25.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_25.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_25.mp4"
      },
      {
        "id": "1661",
        "episodeNumber": 26,
        "title": "SHADOW LOVE - Episode 26",
        "description": "SHADOW LOVE Episode 26.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_26.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_26.mp4"
      },
      {
        "id": "1662",
        "episodeNumber": 27,
        "title": "SHADOW LOVE - Episode 27",
        "description": "SHADOW LOVE Episode 27.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_27.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_27.mp4"
      },
      {
        "id": "1663",
        "episodeNumber": 28,
        "title": "SHADOW LOVE - Episode 28",
        "description": "SHADOW LOVE Episode 28.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_28.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_28.mp4"
      },
      {
        "id": "1664",
        "episodeNumber": 29,
        "title": "SHADOW LOVE - Episode 29",
        "description": "SHADOW LOVE Episode 29.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_29.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_29.mp4"
      },
      {
        "id": "1665",
        "episodeNumber": 30,
        "title": "SHADOW LOVE - Episode 30",
        "description": "SHADOW LOVE Episode 30.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_30.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSHADOW_LOVE_30.mp4"
      },
      {
        "id": "1666",
        "episodeNumber": 31,
        "title": "SHADOW LOVE - Episode 31",
        "description": "SHADOW LOVE Episode 31.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_31.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_31.mp4"
      },
      {
        "id": "1667",
        "episodeNumber": 32,
        "title": "SHADOW LOVE - Episode 32",
        "description": "SHADOW LOVE Episode 32.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_32.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_32.mp4"
      },
      {
        "id": "1668",
        "episodeNumber": 33,
        "title": "SHADOW LOVE - Episode 33",
        "description": "SHADOW LOVE Episode 33.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_33.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_33.mp4"
      },
      {
        "id": "1669",
        "episodeNumber": 34,
        "title": "SHADOW LOVE - Episode 34",
        "description": "SHADOW LOVE Episode 34.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_34.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_34.mp4"
      },
      {
        "id": "1670",
        "episodeNumber": 35,
        "title": "SHADOW LOVE - Episode 35",
        "description": "SHADOW LOVE Episode 35.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_35.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_35.mp4"
      },
      {
        "id": "1671",
        "episodeNumber": 36,
        "title": "SHADOW LOVE - Episode 36",
        "description": "SHADOW LOVE Episode 36.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_36.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_36.mp4"
      },
      {
        "id": "1672",
        "episodeNumber": 37,
        "title": "SHADOW LOVE - Episode 37",
        "description": "SHADOW LOVE Episode 37.",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_37.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_37.mp4"
      },
      {
        "id": "1673",
        "episodeNumber": 38,
        "title": "SHADOW LOVE - Episode 38 (Final)",
        "description": "SHADOW LOVE Episode 38 (Final).",
        "streamUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_38_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2Fshadowlove%2FSHADOW_LOVE_38_FINALE.mp4"
      }
    ],
  },
{
  id: "144",
  title: "SQUID GAME",
  slug: "squid-game-season-3",
  year: "2021",
  rating: "N/A",
  image: "squid-game.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "SQUID GAME is presented in an Agasobanuye version.",
  language: "Korean",
  genres: ["Action", "Drama", "Thriller"],
  explainer: "Rock Kimomo",

    episodes: [
      {
        "id": "1674",
        "episodeNumber": 1,
        "title": "SQUID GAME - Season 3 Episode 1",
        "description": "SQUID GAME Season 3 Episode 1.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E01.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E01.mp4"
      },
      {
        "id": "1675",
        "episodeNumber": 2,
        "title": "SQUID GAME - Season 3 Episode 2",
        "description": "SQUID GAME Season 3 Episode 2.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E02.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E02.mp4"
      },
      {
        "id": "1676",
        "episodeNumber": 3,
        "title": "SQUID GAME - Season 3 Episode 3",
        "description": "SQUID GAME Season 3 Episode 3.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E03.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E03.mp4"
      },
      {
        "id": "1677",
        "episodeNumber": 4,
        "title": "SQUID GAME - Season 3 Episode 4",
        "description": "SQUID GAME Season 3 Episode 4.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E04.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E04.mp4"
      },
      {
        "id": "1678",
        "episodeNumber": 5,
        "title": "SQUID GAME - Season 3 Episode 5",
        "description": "SQUID GAME Season 3 Episode 5.",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E05.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E05.mp4"
      },
      {
        "id": "1679",
        "episodeNumber": 6,
        "title": "SQUID GAME - Season 3 Episode 6 (Final)",
        "description": "SQUID GAME Season 3 Episode 6 (Final).",
        "streamUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E06_FINAL.mp4",
        "downloadUrl": "https://isatafilez.my/files/Serie%2FKorea%2FSQUID_GAME_S03E06_FINAL.mp4"
      }
    ],
  },
{
  id: "145",
  title: "RAISING DION SEASON 2",
  slug: "raising-dion-season-2",
  year: "2026",
  rating: "N/A",
  image: "raising-dion-season-2.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "RAISING DION SEASON 2 is presented in a Gaheza version.",
  language: "English",
  genres: ["Action", "Drama", "Fantasy"],
  explainer: "Gaheza",

    episodes: [
      {
        "id": "2091",
        "episodeNumber": 1,
        "title": "RAISING DION SEASON 2 - Episode 1",
        "description": "RAISING DION SEASON 2 Episode 1.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_1_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_1_Perfect.mp4"
      },
      {
        "id": "2092",
        "episodeNumber": 2,
        "title": "RAISING DION SEASON 2 - Episode 2",
        "description": "RAISING DION SEASON 2 Episode 2.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_2_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_2_Perfect.mp4"
      },
      {
        "id": "2132",
        "episodeNumber": 3,
        "title": "RAISING DION SEASON 2 - Episode 3",
        "description": "RAISING DION SEASON 2 Episode 3.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_3_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/perf/news/Raising_Dion_3_Perfect.mp4"
      },
      {
        "id": "2133",
        "episodeNumber": 4,
        "title": "RAISING DION SEASON 2 - Episode 4",
        "description": "RAISING DION SEASON 2 Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_4.mp4"
      },
      {
        "id": "2134",
        "episodeNumber": 5,
        "title": "RAISING DION SEASON 2 - Episode 5",
        "description": "RAISING DION SEASON 2 Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_5_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_5_Perfect.mp4"
      },
      {
        "id": "2135",
        "episodeNumber": 6,
        "title": "RAISING DION SEASON 2 - Episode 6",
        "description": "RAISING DION SEASON 2 Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_6_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnews%2FRaising_Dion_6_Perfect.mp4"
      }
    ],
  },
{
  id: "146",
  title: "DEAD END JOB",
  slug: "dead-end-job",
  year: "2026",
  rating: "N/A",
  image: "dead-end-job.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "DEAD END JOB is presented in a Gaheza version.",
  language: "Korean",
  genres: ["Drama", "Thriller"],
  explainer: "Gaheza",

    episodes: [
      {
        "id": "2087",
        "episodeNumber": 1,
        "title": "DEAD END JOB - Episode 1",
        "description": "DEAD END JOB Episode 1.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_1_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_1_Perfect.mp4"
      },
      {
        "id": "2088",
        "episodeNumber": 2,
        "title": "DEAD END JOB - Episode 2",
        "description": "DEAD END JOB Episode 2.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_2_Pefect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_2_Pefect.mp4"
      },
      {
        "id": "2089",
        "episodeNumber": 3,
        "title": "DEAD END JOB - Episode 3",
        "description": "DEAD END JOB Episode 3.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_3_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_3_Perfect.mp4"
      },
      {
        "id": "2090",
        "episodeNumber": 4,
        "title": "DEAD END JOB - Episode 4",
        "description": "DEAD END JOB Episode 4.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_4_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/perf/east/Dead_End_Job_4_Perfect.mp4"
      }
    ],
  },
{
  id: "147",
  title: "THE ROYAL GAMBLER",
  slug: "the-royal-gambler",
  year: "2026",
  rating: "N/A",
  image: "the-royal-gambler.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "THE ROYAL GAMBLER is presented in a Junior Giti version.",
  language: "Korean",
  genres: ["Action", "Drama", "History"],
  explainer: "Junior Giti",

    episodes: [
      {
        "id": "2078",
        "episodeNumber": 1,
        "title": "THE ROYAL GAMBLER - Episode 1",
        "description": "THE ROYAL GAMBLER Episode 1.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_01_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_01_JACKPOT.mp4"
      },
      {
        "id": "2079",
        "episodeNumber": 2,
        "title": "THE ROYAL GAMBLER - Episode 2",
        "description": "THE ROYAL GAMBLER Episode 2.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_02_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_02_JACKPOT.mp4"
      },
      {
        "id": "2080",
        "episodeNumber": 3,
        "title": "THE ROYAL GAMBLER - Episode 3",
        "description": "THE ROYAL GAMBLER Episode 3.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_03_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_03_JACKPOT.mp4"
      },
      {
        "id": "2081",
        "episodeNumber": 4,
        "title": "THE ROYAL GAMBLER - Episode 4",
        "description": "THE ROYAL GAMBLER Episode 4.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_04_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_04_JACKPOT.mp4"
      },
      {
        "id": "2082",
        "episodeNumber": 5,
        "title": "THE ROYAL GAMBLER - Episode 5",
        "description": "THE ROYAL GAMBLER Episode 5.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_05_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_05_JACKPOT.mp4"
      },
      {
        "id": "2083",
        "episodeNumber": 6,
        "title": "THE ROYAL GAMBLER - Episode 6",
        "description": "THE ROYAL GAMBLER Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_06_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_06_JACKPOT.mp4"
      },
      {
        "id": "2084",
        "episodeNumber": 7,
        "title": "THE ROYAL GAMBLER - Episode 7",
        "description": "THE ROYAL GAMBLER Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_07_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_07_JACKPOT.mp4"
      },
      {
        "id": "2085",
        "episodeNumber": 8,
        "title": "THE ROYAL GAMBLER - Episode 8",
        "description": "THE ROYAL GAMBLER Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_08_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_08_JACKPOT.mp4"
      },
      {
        "id": "2086",
        "episodeNumber": 9,
        "title": "THE ROYAL GAMBLER - Episode 9",
        "description": "THE ROYAL GAMBLER Episode 9.",
        "streamUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_09_JACKPOT.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/korea/junio/royal/THE_ROYAL_GAMBLER_EP_09_JACKPOT.mp4"
      },
      {
        "id": "2197",
        "episodeNumber": 10,
        "title": "THE ROYAL GAMBLER - Episode 10",
        "description": "THE ROYAL GAMBLER Episode 10 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_10_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_10_JACKPOT.mp4"
      },
      {
        "id": "2198",
        "episodeNumber": 11,
        "title": "THE ROYAL GAMBLER - Episode 11",
        "description": "THE ROYAL GAMBLER Episode 11 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_11_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_11_JACKPOT.mp4"
      },
      {
        "id": "2199",
        "episodeNumber": 12,
        "title": "THE ROYAL GAMBLER - Episode 12",
        "description": "THE ROYAL GAMBLER Episode 12 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_12_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_12_JACKPOT.mp4"
      },
      {
        "id": "2200",
        "episodeNumber": 13,
        "title": "THE ROYAL GAMBLER - Episode 13",
        "description": "THE ROYAL GAMBLER Episode 13 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_13_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_13_JACKPOT.mp4"
      },
      {
        "id": "2201",
        "episodeNumber": 14,
        "title": "THE ROYAL GAMBLER - Episode 14",
        "description": "THE ROYAL GAMBLER Episode 14 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_14_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_14_JACKPOT.mp4"
      },
      {
        "id": "2202",
        "episodeNumber": 15,
        "title": "THE ROYAL GAMBLER - Episode 15",
        "description": "THE ROYAL GAMBLER Episode 15 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_15_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_15_JACKPOT.mp4"
      },
      {
        "id": "2203",
        "episodeNumber": 16,
        "title": "THE ROYAL GAMBLER - Episode 16",
        "description": "THE ROYAL GAMBLER Episode 16 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_16_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_16_JACKPOT.mp4"
      },
      {
        "id": "2204",
        "episodeNumber": 17,
        "title": "THE ROYAL GAMBLER - Episode 17",
        "description": "THE ROYAL GAMBLER Episode 17 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_17_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_17_JACKPOT.mp4"
      },
      {
        "id": "2205",
        "episodeNumber": 18,
        "title": "THE ROYAL GAMBLER - Episode 18",
        "description": "THE ROYAL GAMBLER Episode 18 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_18_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_18_JACKPOT.mp4"
      },
      {
        "id": "2206",
        "episodeNumber": 19,
        "title": "THE ROYAL GAMBLER - Episode 19",
        "description": "THE ROYAL GAMBLER Episode 19 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_19_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_19_JACKPOT.mp4"
      },
      {
        "id": "2207",
        "episodeNumber": 20,
        "title": "THE ROYAL GAMBLER - Episode 20",
        "description": "THE ROYAL GAMBLER Episode 20 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_20_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_20_JACKPOT.mp4"
      },
      {
        "id": "2208",
        "episodeNumber": 21,
        "title": "THE ROYAL GAMBLER - Episode 21",
        "description": "THE ROYAL GAMBLER Episode 21 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_21_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_21_JACKPOT.mp4"
      },
      {
        "id": "2209",
        "episodeNumber": 22,
        "title": "THE ROYAL GAMBLER - Episode 22",
        "description": "THE ROYAL GAMBLER Episode 22 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_22_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_22_JACKPOT.mp4"
      },
      {
        "id": "2210",
        "episodeNumber": 23,
        "title": "THE ROYAL GAMBLER - Episode 23",
        "description": "THE ROYAL GAMBLER Episode 23 Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_23_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_23_JACKPOT.mp4"
      },
      {
        "id": "2211",
        "episodeNumber": 24,
        "title": "THE ROYAL GAMBLER - Episode 24 Final",
        "description": "THE ROYAL GAMBLER Episode 24 Final Jackpot.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_24_FINAL_JACKPOT.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fjunio%2Froyal%2FTHE_ROYAL_GAMBLER_EP_24_FINAL_JACKPOT.mp4"
      }
    ],
  },
{
  id: "148",
  title: "BLOOD VS DUTY",
  slug: "blood-vs-duty",
  year: "2026",
  rating: "N/A",
  image: "blood-vs-duty.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "BLOOD VS DUTY is presented in a B The Great version.",
  language: "Filipino",
  genres: ["Action", "Drama", "Crime"],
  explainer: "B The Great",

    episodes: [
      {
        "id": "2048",
        "episodeNumber": 1,
        "title": "BLOOD VS DUTY - Episode 1",
        "description": "BLOOD VS DUTY Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E01.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E01.mp4.mp4"
      },
      {
        "id": "2049",
        "episodeNumber": 2,
        "title": "BLOOD VS DUTY - Episode 2",
        "description": "BLOOD VS DUTY Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E02.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E02.mp4.mp4"
      },
      {
        "id": "2050",
        "episodeNumber": 3,
        "title": "BLOOD VS DUTY - Episode 3",
        "description": "BLOOD VS DUTY Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E03.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E03.mp4.mp4"
      },
      {
        "id": "2051",
        "episodeNumber": 4,
        "title": "BLOOD VS DUTY - Episode 4",
        "description": "BLOOD VS DUTY Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E04.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E04.mp4.mp4"
      },
      {
        "id": "2052",
        "episodeNumber": 5,
        "title": "BLOOD VS DUTY - Episode 5",
        "description": "BLOOD VS DUTY Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E05.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E05.mp4.mp4"
      },
      {
        "id": "2053",
        "episodeNumber": 6,
        "title": "BLOOD VS DUTY - Episode 6",
        "description": "BLOOD VS DUTY Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E06.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E06.mp4.mp4"
      },
      {
        "id": "2054",
        "episodeNumber": 7,
        "title": "BLOOD VS DUTY - Episode 7",
        "description": "BLOOD VS DUTY Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E07.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E07.mp4.mp4"
      },
      {
        "id": "2055",
        "episodeNumber": 8,
        "title": "BLOOD VS DUTY - Episode 8",
        "description": "BLOOD VS DUTY Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E08.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E08.mp4.mp4"
      },
      {
        "id": "2056",
        "episodeNumber": 9,
        "title": "BLOOD VS DUTY - Episode 9",
        "description": "BLOOD VS DUTY Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E09.mp4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E09.mp4.mp4"
      },
      {
        "id": "2057",
        "episodeNumber": 10,
        "title": "BLOOD VS DUTY - Episode 10",
        "description": "BLOOD VS DUTY Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E10.mp4"
      },
      {
        "id": "2058",
        "episodeNumber": 11,
        "title": "BLOOD VS DUTY - Episode 11",
        "description": "BLOOD VS DUTY Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E11.mp4"
      },
      {
        "id": "2059",
        "episodeNumber": 12,
        "title": "BLOOD VS DUTY - Episode 12",
        "description": "BLOOD VS DUTY Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Ftill%2FBlood_vs_Duty_E12.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Ftill%2FBlood_vs_Duty_E12.mp4"
      },
      {
        "id": "2060",
        "episodeNumber": 13,
        "title": "BLOOD VS DUTY - Episode 13",
        "description": "BLOOD VS DUTY Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E13.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E13.mp4"
      },
      {
        "id": "2061",
        "episodeNumber": 14,
        "title": "BLOOD VS DUTY - Episode 14",
        "description": "BLOOD VS DUTY Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E14.mp4"
      },
      {
        "id": "2062",
        "episodeNumber": 15,
        "title": "BLOOD VS DUTY - Episode 15",
        "description": "BLOOD VS DUTY Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E15.mp4"
      },
      {
        "id": "2063",
        "episodeNumber": 16,
        "title": "BLOOD VS DUTY - Episode 16",
        "description": "BLOOD VS DUTY Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E16.mp4"
      },
      {
        "id": "2064",
        "episodeNumber": 17,
        "title": "BLOOD VS DUTY - Episode 17",
        "description": "BLOOD VS DUTY Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E17.mp4"
      },
      {
        "id": "2065",
        "episodeNumber": 18,
        "title": "BLOOD VS DUTY - Episode 18",
        "description": "BLOOD VS DUTY Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E18.mp4"
      },
      {
        "id": "2066",
        "episodeNumber": 19,
        "title": "BLOOD VS DUTY - Episode 19",
        "description": "BLOOD VS DUTY Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E19.mp4"
      },
      {
        "id": "2067",
        "episodeNumber": 20,
        "title": "BLOOD VS DUTY - Episode 20",
        "description": "BLOOD VS DUTY Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E20.mp4"
      },
      {
        "id": "2068",
        "episodeNumber": 21,
        "title": "BLOOD VS DUTY - Episode 21",
        "description": "BLOOD VS DUTY Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E21.mp4"
      },
      {
        "id": "2069",
        "episodeNumber": 22,
        "title": "BLOOD VS DUTY - Episode 22",
        "description": "BLOOD VS DUTY Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E22.mp4"
      },
      {
        "id": "2070",
        "episodeNumber": 23,
        "title": "BLOOD VS DUTY - Episode 23",
        "description": "BLOOD VS DUTY Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E23.mp4"
      },
      {
        "id": "2071",
        "episodeNumber": 24,
        "title": "BLOOD VS DUTY - Episode 24",
        "description": "BLOOD VS DUTY Episode 24.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E24.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E24.mp4"
      },
      {
        "id": "2072",
        "episodeNumber": 25,
        "title": "BLOOD VS DUTY - Episode 25",
        "description": "BLOOD VS DUTY Episode 25.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E25.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E25.mp4"
      },
      {
        "id": "2073",
        "episodeNumber": 26,
        "title": "BLOOD VS DUTY - Episode 26",
        "description": "BLOOD VS DUTY Episode 26.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E26.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E26.mp4"
      },
      {
        "id": "2074",
        "episodeNumber": 27,
        "title": "BLOOD VS DUTY - Episode 27",
        "description": "BLOOD VS DUTY Episode 27.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E27.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E27.mp4"
      },
      {
        "id": "2075",
        "episodeNumber": 28,
        "title": "BLOOD VS DUTY - Episode 28",
        "description": "BLOOD VS DUTY Episode 28.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E28.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E28.mp4"
      },
      {
        "id": "2076",
        "episodeNumber": 29,
        "title": "BLOOD VS DUTY - Episode 29",
        "description": "BLOOD VS DUTY Episode 29.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E29.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E29.mp4"
      },
      {
        "id": "2077",
        "episodeNumber": 30,
        "title": "BLOOD VS DUTY - Episode 30",
        "description": "BLOOD VS DUTY Episode 30.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E30.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2FBlood_vs_Duty_E30.mp4"
      }
    ],
  },
{
  id: "149",
  title: "CARRIE SEASON 1",
  slug: "carrie-season-1",
  year: "2026",
  rating: "N/A",
  image: "carrie-season-1.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "CARRIE SEASON 1 is presented in a Perfect version.",
  language: "English",
  genres: ["Horror", "Drama", "Thriller"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2040",
        "episodeNumber": 1,
        "title": "CARRIE - Episode 1",
        "description": "CARRIE Episode 1.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/perf/new/laten/Carrie_1_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/perf/new/laten/Carrie_1_Perfect.mp4"
      },
      {
        "id": "2041",
        "episodeNumber": 2,
        "title": "CARRIE - Episode 2",
        "description": "CARRIE Episode 2.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/perf/new/laten/Carrie_2_Perfect.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/perf/new/laten/Carrie_2_Perfect.mp4"
      },
      {
        "id": "2042",
        "episodeNumber": 3,
        "title": "CARRIE - Episode 3",
        "description": "CARRIE Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCarrie_3_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCarrie_3_Perfect.mp4"
      },
      {
        "id": "2043",
        "episodeNumber": 4,
        "title": "CARRIE - Episode 4",
        "description": "CARRIE Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCarrie_4_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCarrie_4_Perfect.mp4"
      },
      {
        "id": "2044",
        "episodeNumber": 5,
        "title": "CARRIE - Episode 5",
        "description": "CARRIE Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E05.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E05.mp4"
      },
      {
        "id": "2045",
        "episodeNumber": 6,
        "title": "CARRIE - Episode 6",
        "description": "CARRIE Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E06.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E06.mp4"
      },
      {
        "id": "2046",
        "episodeNumber": 7,
        "title": "CARRIE - Episode 7",
        "description": "CARRIE Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E07.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E07.mp4"
      },
      {
        "id": "2047",
        "episodeNumber": 8,
        "title": "CARRIE - Episode 8",
        "description": "CARRIE Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E08_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fperf%2Fnew%2Flaten%2FCARRIE_S01_E08_FINALE.mp4"
      }
    ],
  },
{
  id: "150",
  title: "A BONA FIDE KILLER",
  slug: "a-bona-fide-killer-perfect",
  year: "2026",
  rating: "N/A",
  image: "a-bona-fide-killer.jpg",
  isFeatured: false,
  createdAt: "2026-11-06",
  description: "A BONA FIDE KILLER is presented in a Perfect version.",
  language: "Korean",
  genres: ["Action", "Crime", "Thriller"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2025",
        "episodeNumber": 1,
        "title": "A BONA FIDE KILLER - Episode 1",
        "description": "A BONA FIDE KILLER Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_1_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_1_Perfect.mp4"
      },
      {
        "id": "2026",
        "episodeNumber": 2,
        "title": "A BONA FIDE KILLER - Episode 2",
        "description": "A BONA FIDE KILLER Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_2_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_2_Perfect.mp4"
      },
      {
        "id": "2027",
        "episodeNumber": 3,
        "title": "A BONA FIDE KILLER - Episode 3",
        "description": "A BONA FIDE KILLER Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_3.mp4"
      },
      {
        "id": "2028",
        "episodeNumber": 4,
        "title": "A BONA FIDE KILLER - Episode 4",
        "description": "A BONA FIDE KILLER Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_4_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_4_Perfect.mp4"
      },
      {
        "id": "2029",
        "episodeNumber": 5,
        "title": "A BONA FIDE KILLER - Episode 5A",
        "description": "A BONA FIDE KILLER Episode 5A.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_5A_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_5A_Perfect.mp4"
      },
      {
        "id": "2030",
        "episodeNumber": 5,
        "title": "A BONA FIDE KILLER - Episode 5B",
        "description": "A BONA FIDE KILLER Episode 5B.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_5B.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_5B.mp4"
      },
      {
        "id": "2031",
        "episodeNumber": 6,
        "title": "A BONA FIDE KILLER - Episode 6",
        "description": "A BONA FIDE KILLER Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_6_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_6_Perfect.mp4"
      },
      {
        "id": "2032",
        "episodeNumber": 7,
        "title": "A BONA FIDE KILLER - Episode 7",
        "description": "A BONA FIDE KILLER Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_7_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_7_Perfect.mp4"
      },
      {
        "id": "2033",
        "episodeNumber": 8,
        "title": "A BONA FIDE KILLER - Episode 8",
        "description": "A BONA FIDE KILLER Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_8_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_8_Perfect.mp4"
      },
      {
        "id": "2034",
        "episodeNumber": 9,
        "title": "A BONA FIDE KILLER - Episode 9",
        "description": "A BONA FIDE KILLER Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_9_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_9_Perfect.mp4"
      },
      {
        "id": "2035",
        "episodeNumber": 10,
        "title": "A BONA FIDE KILLER - Episode 10",
        "description": "A BONA FIDE KILLER Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_10_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_10_Perfect.mp4"
      },
      {
        "id": "2036",
        "episodeNumber": 11,
        "title": "A BONA FIDE KILLER - Episode 11",
        "description": "A BONA FIDE KILLER Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_11Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_11Perfect.mp4"
      },
      {
        "id": "2037",
        "episodeNumber": 12,
        "title": "A BONA FIDE KILLER - Episode 12",
        "description": "A BONA FIDE KILLER Episode 12.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_12_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_12_Perfect.mp4"
      },
      {
        "id": "2038",
        "episodeNumber": 13,
        "title": "A BONA FIDE KILLER - Episode 13",
        "description": "A BONA FIDE KILLER Episode 13.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_13_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_13_Perfect.mp4"
      },
      {
        "id": "2039",
        "episodeNumber": 14,
        "title": "A BONA FIDE KILLER - Episode 14",
        "description": "A BONA FIDE KILLER Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_14Final_Perfect.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_14Final_Perfect.mp4"
      }
    ],
  },
{
  id: "151",
  title: "STRANGER THINGS SEASON 1",
  slug: "stranger-things-season-1",
  year: "2016",
  rating: "N/A",
  image: "stranger-things-season-1.jpg",
  isFeatured: false,
  createdAt: "2026-11-08",
  description: "STRANGER THINGS SEASON 1 follows a group of friends as they investigate a mysterious disappearance and discover supernatural secrets.",
  language: "English",
  genres: ["Drama", "Fantasy", "Horror", "Mystery"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2093",
        "episodeNumber": 1,
        "title": "STRANGER THINGS SEASON 1 - Episode 1",
        "description": "STRANGER THINGS SEASON 1 Episode 1.",
        "streamUrl": "https://www.mediafire.com/file/x0z0mhn09k3791k/Stranger_Things_S01E01_-The_Vanishing_of_Will_Byers_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/x0z0mhn09k3791k/Stranger_Things_S01E01_-The_Vanishing_of_Will_Byers_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2094",
        "episodeNumber": 2,
        "title": "STRANGER THINGS SEASON 1 - Episode 2",
        "description": "STRANGER THINGS SEASON 1 Episode 2.",
        "streamUrl": "https://www.mediafire.com/file/7a07vne4rljs75z/Stranger_Things_S01E02_-_The_Weirdo_on_Maple_Street_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/7a07vne4rljs75z/Stranger_Things_S01E02_-_The_Weirdo_on_Maple_Street_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2095",
        "episodeNumber": 3,
        "title": "STRANGER THINGS SEASON 1 - Episode 3",
        "description": "STRANGER THINGS SEASON 1 Episode 3.",
        "streamUrl": "https://www.mediafire.com/file/ncce5v0bqayxv35/Stranger_Things_S01E03_-_Holly%252C_Jolly_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ncce5v0bqayxv35/Stranger_Things_S01E03_-_Holly%252C_Jolly_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2096",
        "episodeNumber": 4,
        "title": "STRANGER THINGS SEASON 1 - Episode 4",
        "description": "STRANGER THINGS SEASON 1 Episode 4.",
        "streamUrl": "https://www.mediafire.com/file/bxt4nuaozpbw23s/Stranger_Things_S01E04_-The_Body_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/bxt4nuaozpbw23s/Stranger_Things_S01E04_-The_Body_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2097",
        "episodeNumber": 5,
        "title": "STRANGER THINGS SEASON 1 - Episode 5",
        "description": "STRANGER THINGS SEASON 1 Episode 5.",
        "streamUrl": "https://www.mediafire.com/file/8zfy7m3ubpedtbb/Stranger_Things_S01E05_-The_Flea_and_the_Acrobat_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8zfy7m3ubpedtbb/Stranger_Things_S01E05_-The_Flea_and_the_Acrobat_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2098",
        "episodeNumber": 6,
        "title": "STRANGER THINGS SEASON 1 - Episode 6",
        "description": "STRANGER THINGS SEASON 1 Episode 6.",
        "streamUrl": "https://www.mediafire.com/file/tiqdugdyc5ha2vf/Stranger_Things_S01E06_-The_Monster_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tiqdugdyc5ha2vf/Stranger_Things_S01E06_-The_Monster_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2099",
        "episodeNumber": 7,
        "title": "STRANGER THINGS SEASON 1 - Episode 7",
        "description": "STRANGER THINGS SEASON 1 Episode 7.",
        "streamUrl": "https://www.mediafire.com/file/qboa5r0h7nixlur/Stranger_Things_S01E07_-The_Bathtub_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/qboa5r0h7nixlur/Stranger_Things_S01E07_-The_Bathtub_HD_%25281%2529.mp4/file"
      },
      {
        "id": "2100",
        "episodeNumber": 8,
        "title": "STRANGER THINGS SEASON 1 - Episode 8",
        "description": "STRANGER THINGS SEASON 1 Episode 8.",
        "streamUrl": "https://www.mediafire.com/file/cu7nnbiveno66es/Stranger_Things_S01E08_-final_The_Upside_Down_HD_%25281%2529.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/cu7nnbiveno66es/Stranger_Things_S01E08_-final_The_Upside_Down_HD_%25281%2529.mp4/file"
      }
    ],
  },
{
  id: "152",
  title: "STRANGER THINGS SEASON 2",
  slug: "stranger-things-season-2",
  year: "2017",
  rating: "N/A",
  image: "stranger-things-season-2.jpg",
  isFeatured: false,
  createdAt: "2026-11-08",
  description: "STRANGER THINGS SEASON 2 continues the story as the friends face new supernatural threats in Hawkins.",
  language: "English",
  genres: ["Drama", "Fantasy", "Horror", "Mystery"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2101",
        "episodeNumber": 1,
        "title": "STRANGER THINGS SEASON 2 - Episode 1",
        "description": "STRANGER THINGS SEASON 2 Episode 1.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP1.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP1.mp4"
      },
      {
        "id": "2102",
        "episodeNumber": 2,
        "title": "STRANGER THINGS SEASON 2 - Episode 2",
        "description": "STRANGER THINGS SEASON 2 Episode 2.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP2.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP2.mp4"
      },
      {
        "id": "2103",
        "episodeNumber": 3,
        "title": "STRANGER THINGS SEASON 2 - Episode 3",
        "description": "STRANGER THINGS SEASON 2 Episode 3.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP3.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP3.mp4"
      },
      {
        "id": "2104",
        "episodeNumber": 4,
        "title": "STRANGER THINGS SEASON 2 - Episode 4",
        "description": "STRANGER THINGS SEASON 2 Episode 4.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP4.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP4.mp4"
      },
      {
        "id": "2105",
        "episodeNumber": 5,
        "title": "STRANGER THINGS SEASON 2 - Episode 5",
        "description": "STRANGER THINGS SEASON 2 Episode 5.",
        "streamUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP5.mp4",
        "downloadUrl": "https://isatafilez.my/files/Ne%2FSTRANGER_THINGS_S02_EP5.mp4"
      },
      {
        "id": "2106",
        "episodeNumber": 6,
        "title": "STRANGER THINGS SEASON 2 - Episode 6",
        "description": "STRANGER THINGS SEASON 2 Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep6.mp4"
      },
      {
        "id": "2107",
        "episodeNumber": 7,
        "title": "STRANGER THINGS SEASON 2 - Episode 7",
        "description": "STRANGER THINGS SEASON 2 Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep7.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep7.mp4"
      },
      {
        "id": "2108",
        "episodeNumber": 8,
        "title": "STRANGER THINGS SEASON 2 - Episode 8",
        "description": "STRANGER THINGS SEASON 2 Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep8.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep8.mp4"
      },
      {
        "id": "2109",
        "episodeNumber": 9,
        "title": "STRANGER THINGS SEASON 2 - Episode 9",
        "description": "STRANGER THINGS SEASON 2 Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep9.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s2ep9.mp4"
      }
    ],
  },
{
  id: "153",
  title: "STRANGER THINGS SEASON 3",
  slug: "stranger-things-season-3",
  year: "2019",
  rating: "N/A",
  image: "stranger-things-season-3.jpg",
  isFeatured: false,
  createdAt: "2026-11-08",
  description: "STRANGER THINGS SEASON 3 follows the group as new dangers emerge in Hawkins during the summer.",
  language: "English",
  genres: ["Drama", "Fantasy", "Horror", "Mystery"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2110",
        "episodeNumber": 1,
        "title": "STRANGER THINGS SEASON 3 - Episode 1",
        "description": "STRANGER THINGS SEASON 3 Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3ep1.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3ep1.mp4"
      },
      {
        "id": "2111",
        "episodeNumber": 2,
        "title": "STRANGER THINGS SEASON 3 - Episode 2",
        "description": "STRANGER THINGS SEASON 3 Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3ep2.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3ep2.mp4"
      },
      {
        "id": "2112",
        "episodeNumber": 3,
        "title": "STRANGER THINGS SEASON 3 - Episode 3",
        "description": "STRANGER THINGS SEASON 3 Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_Ep3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_Ep3.mp4"
      },
      {
        "id": "2113",
        "episodeNumber": 4,
        "title": "STRANGER THINGS SEASON 3 - Episode 4",
        "description": "STRANGER THINGS SEASON 3 Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_S3_Ep4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_S3_Ep4.mp4"
      },
      {
        "id": "2114",
        "episodeNumber": 5,
        "title": "STRANGER THINGS SEASON 3 - Episode 5",
        "description": "STRANGER THINGS SEASON 3 Episode 5.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep5.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep5.mp4"
      },
      {
        "id": "2115",
        "episodeNumber": 6,
        "title": "STRANGER THINGS SEASON 3 - Episode 6",
        "description": "STRANGER THINGS SEASON 3 Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep6.mp4"
      },
      {
        "id": "2116",
        "episodeNumber": 7,
        "title": "STRANGER THINGS SEASON 3 - Episode 7",
        "description": "STRANGER THINGS SEASON 3 Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep7.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_s3_Ep7.mp4"
      },
      {
        "id": "2117",
        "episodeNumber": 8,
        "title": "STRANGER THINGS SEASON 3 - Episode 8",
        "description": "STRANGER THINGS SEASON 3 Episode 8.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_S3_Ep_8_Final.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fdlyan%2FStranger_Things_S3_Ep_8_Final.mp4"
      }
    ],
  },
{
  id: "154",
  title: "RAISING DION S1 FINAL AGASOBANUYE",
  slug: "raising-dion-s1-final-agasobanuye",
  year: "2019",
  rating: "N/A",
  image: "raising-dion-s1-final-agasobanuye.jpg",
  isFeatured: false,
  createdAt: "2026-11-08",
  description: "RAISING DION S1 FINAL AGASOBANUYE follows Dion, a young boy who discovers extraordinary supernatural abilities while facing dangerous challenges.",
  language: "Kinyarwanda",
  genres: ["Drama", "Fantasy", "Science Fiction"],
  explainer: "Perfect",

    episodes: [
      {
        "id": "2118",
        "episodeNumber": 1,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 1",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 1.",
        "streamUrl": "https://mega.nz/file/TfBWjb7S#J2B15GIdZW7g9FrgSlIAm9Nje8uQta6R4MeXAfyQKXA",
        "downloadUrl": "https://mega.nz/file/TfBWjb7S#J2B15GIdZW7g9FrgSlIAm9Nje8uQta6R4MeXAfyQKXA"
      },
      {
        "id": "2119",
        "episodeNumber": 2,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 2",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 2.",
        "streamUrl": "https://mega.nz/file/mSJk2TZK#D2FgtLmGh2o_dNQG8FmXv-bp6l6qeMsFmw4Ne8kxeGo",
        "downloadUrl": "https://mega.nz/file/mSJk2TZK#D2FgtLmGh2o_dNQG8FmXv-bp6l6qeMsFmw4Ne8kxeGo"
      },
      {
        "id": "2120",
        "episodeNumber": 3,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 3",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 3.",
        "streamUrl": "https://mega.nz/file/3aBGXZTJ#ekRSCDM8f-XJ1aFfSxpWbS2Bkz9W44YrqXkBFkKlD2g",
        "downloadUrl": "https://mega.nz/file/3aBGXZTJ#ekRSCDM8f-XJ1aFfSxpWbS2Bkz9W44YrqXkBFkKlD2g"
      },
      {
        "id": "2121",
        "episodeNumber": 4,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 4A",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 4A.",
        "streamUrl": "https://mega.nz/file/aGZDmRrY#v-cPWRFi78K-lPEcOOiPgfminacCoOqiZqlXdckRLJQ",
        "downloadUrl": "https://mega.nz/file/aGZDmRrY#v-cPWRFi78K-lPEcOOiPgfminacCoOqiZqlXdckRLJQ"
      },
      {
        "id": "2122",
        "episodeNumber": 4,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 4B",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 4B.",
        "streamUrl": "https://mega.nz/file/6bxR1RZR#mOWHS_l6HLtBdXe6j_pwNuvc-pcqQLd218yVbe_3Wqc",
        "downloadUrl": "https://mega.nz/file/6bxR1RZR#mOWHS_l6HLtBdXe6j_pwNuvc-pcqQLd218yVbe_3Wqc"
      },
      {
        "id": "2123",
        "episodeNumber": 5,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 5",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 5.",
        "streamUrl": "https://mega.nz/file/LKJQwLwC#TNPkeCiABlUPYI124iejf7q-8RhKTvk1zrnwCM2x1-A",
        "downloadUrl": "https://mega.nz/file/LKJQwLwC#TNPkeCiABlUPYI124iejf7q-8RhKTvk1zrnwCM2x1-A"
      },
      {
        "id": "2124",
        "episodeNumber": 6,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 6A",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 6A.",
        "streamUrl": "https://mega.nz/file/OehhULII#KAF-WHP-v1VhC2H-aDCDJbENwTYU4Y3eni_42GhlSDU",
        "downloadUrl": "https://mega.nz/file/OehhULII#KAF-WHP-v1VhC2H-aDCDJbENwTYU4Y3eni_42GhlSDU"
      },
      {
        "id": "2125",
        "episodeNumber": 6,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 6B",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 6B.",
        "streamUrl": "https://mega.nz/file/faohyBKb#7MEkOXBb9_hCSakvpCfe-ksLTtEmp19xtaQZ1T25AEE",
        "downloadUrl": "https://mega.nz/file/faohyBKb#7MEkOXBb9_hCSakvpCfe-ksLTtEmp19xtaQZ1T25AEE"
      },
      {
        "id": "2126",
        "episodeNumber": 7,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 7A",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 7A.",
        "streamUrl": "https://mega.nz/file/DLRllJKA#nM9yI6m_tumSxNXbKOSCnL7xi0xugS7libOIy-XuvIw",
        "downloadUrl": "https://mega.nz/file/DLRllJKA#nM9yI6m_tumSxNXbKOSCnL7xi0xugS7libOIy-XuvIw"
      },
      {
        "id": "2127",
        "episodeNumber": 7,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 7B",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 7B.",
        "streamUrl": "https://mega.nz/file/GWRjTBxI#w7A956OjMY3xRgrd8IyDcvJl_heE14XH13Bs44kBl8E",
        "downloadUrl": "https://mega.nz/file/GWRjTBxI#w7A956OjMY3xRgrd8IyDcvJl_heE14XH13Bs44kBl8E"
      },
      {
        "id": "2128",
        "episodeNumber": 8,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 8A",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 8A.",
        "streamUrl": "https://mega.nz/file/Lax0jKyR#7laFZUQ-TzwvZzzEw_3NbL_elJoU9Ux3C4zGgqoKRb4",
        "downloadUrl": "https://mega.nz/file/Lax0jKyR#7laFZUQ-TzwvZzzEw_3NbL_elJoU9Ux3C4zGgqoKRb4"
      },
      {
        "id": "2129",
        "episodeNumber": 8,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 8B",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 8B.",
        "streamUrl": "https://mega.nz/file/De4RyRJC#p2Q4Peaxt577cea1cspF71Ux18H1qDybOnKjNLOT1jA",
        "downloadUrl": "https://mega.nz/file/De4RyRJC#p2Q4Peaxt577cea1cspF71Ux18H1qDybOnKjNLOT1jA"
      },
      {
        "id": "2130",
        "episodeNumber": 9,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 9A Final",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 9A Final.",
        "streamUrl": "https://mega.nz/file/qX5zQYyZ#IwM1jWh07PkJmDxbnvO_QSxfeN8Rjikp7k8Cyvi-v6I",
        "downloadUrl": "https://mega.nz/file/qX5zQYyZ#IwM1jWh07PkJmDxbnvO_QSxfeN8Rjikp7k8Cyvi-v6I"
      },
      {
        "id": "2131",
        "episodeNumber": 9,
        "title": "RAISING DION S1 FINAL AGASOBANUYE - Episode 9B Final",
        "description": "RAISING DION S1 FINAL AGASOBANUYE Episode 9B Final.",
        "streamUrl": "https://mega.nz/file/eCRHFCTL#H0_ye6HxeP9_YWhyRmrUsEFmmQCaSk_MPcVepSkE1lE",
        "downloadUrl": "https://mega.nz/file/eCRHFCTL#H0_ye6HxeP9_YWhyRmrUsEFmmQCaSk_MPcVepSkE1lE"
      }
    ],
  },
{
  id: "155",
  title: "WITHIN THE GRIP",
  slug: "within-the-grip",
  year: "2026",
  rating: "N/A",
  image: "within-the-grip.jpg",
  isFeatured: false,
  createdAt: "2026-11-08",
  description: "WITHIN THE GRIP follows a gripping story of characters facing dangerous challenges and unexpected events.",
  language: "Kinyarwanda",
  genres: ["Drama", "Thriller"],
  explainer: "B The Great",
  trailer: "https://www.youtube.com/shorts/SjTKv5T-E9M?t=10&feature=share",

    episodes: [
      {
        "id": "1769",
        "episodeNumber": 1,
        "title": "WITHIN THE GRIP - Episode 1",
        "description": "WITHIN THE GRIP Episode 1.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP01.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP01.mp4"
      },
      {
        "id": "1770",
        "episodeNumber": 2,
        "title": "WITHIN THE GRIP - Episode 2",
        "description": "WITHIN THE GRIP Episode 2.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP02.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP02.mp4"
      },
      {
        "id": "1771",
        "episodeNumber": 3,
        "title": "WITHIN THE GRIP - Episode 3",
        "description": "WITHIN THE GRIP Episode 3.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP03.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP03.mp4"
      },
      {
        "id": "1772",
        "episodeNumber": 4,
        "title": "WITHIN THE GRIP - Episode 4",
        "description": "WITHIN THE GRIP Episode 4.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP04.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP04.mp4"
      },
      {
        "id": "1773",
        "episodeNumber": 5,
        "title": "WITHIN THE GRIP - Episode 5",
        "description": "WITHIN THE GRIP Episode 5.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP05.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP05.mp4"
      },
      {
        "id": "1774",
        "episodeNumber": 6,
        "title": "WITHIN THE GRIP - Episode 6",
        "description": "WITHIN THE GRIP Episode 6.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP06.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP06.mp4"
      },
      {
        "id": "1775",
        "episodeNumber": 7,
        "title": "WITHIN THE GRIP - Episode 7",
        "description": "WITHIN THE GRIP Episode 7.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP07.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP07.mp4"
      },
      {
        "id": "1776",
        "episodeNumber": 8,
        "title": "WITHIN THE GRIP - Episode 8",
        "description": "WITHIN THE GRIP Episode 8.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP08.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP08.mp4"
      },
      {
        "id": "1777",
        "episodeNumber": 9,
        "title": "WITHIN THE GRIP - Episode 9",
        "description": "WITHIN THE GRIP Episode 9.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP09.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP09.mp4"
      },
      {
        "id": "1778",
        "episodeNumber": 10,
        "title": "WITHIN THE GRIP - Episode 10",
        "description": "WITHIN THE GRIP Episode 10.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP10.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP10.mp4"
      },
      {
        "id": "1779",
        "episodeNumber": 11,
        "title": "WITHIN THE GRIP - Episode 11",
        "description": "WITHIN THE GRIP Episode 11.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP11.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP11.mp4"
      },
      {
        "id": "1780",
        "episodeNumber": 12,
        "title": "WITHIN THE GRIP - Episode 12",
        "description": "WITHIN THE GRIP Episode 12.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP12.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP12.mp4"
      },
      {
        "id": "2136",
        "episodeNumber": 13,
        "title": "WITHIN THE GRIP - Episode 13",
        "description": "WITHIN THE GRIP Episode 13.",
        "streamUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP13.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/chinese/great/white/WITHIN_THE_GRIP_EP13.mp4"
      },
      {
        "id": "2137",
        "episodeNumber": 14,
        "title": "WITHIN THE GRIP - Episode 14",
        "description": "WITHIN THE GRIP Episode 14.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP14.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP14.mp4"
      },
      {
        "id": "2138",
        "episodeNumber": 15,
        "title": "WITHIN THE GRIP - Episode 15",
        "description": "WITHIN THE GRIP Episode 15.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP15.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP15.mp4"
      },
      {
        "id": "2139",
        "episodeNumber": 16,
        "title": "WITHIN THE GRIP - Episode 16",
        "description": "WITHIN THE GRIP Episode 16.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP16.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP16.mp4"
      },
      {
        "id": "2193",
        "episodeNumber": 20,
        "title": "WITHIN THE GRIP - Episode 20",
        "description": "WITHIN THE GRIP Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP20.mp4"
      },
      {
        "id": "2194",
        "episodeNumber": 19,
        "title": "WITHIN THE GRIP - Episode 19",
        "description": "WITHIN THE GRIP Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP19.mp4"
      },
      {
        "id": "2195",
        "episodeNumber": 18,
        "title": "WITHIN THE GRIP - Episode 18",
        "description": "WITHIN THE GRIP Episode 18.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP18.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP18.mp4"
      },
      {
        "id": "2196",
        "episodeNumber": 17,
        "title": "WITHIN THE GRIP - Episode 17",
        "description": "WITHIN THE GRIP Episode 17.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP17.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP17.mp4"
      },
      {
        "id": "2212",
        "episodeNumber": 19,
        "title": "WITHIN THE GRIP - Episode 19",
        "description": "WITHIN THE GRIP Episode 19.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP19.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP19.mp4"
      },
      {
        "id": "2213",
        "episodeNumber": 20,
        "title": "WITHIN THE GRIP - Episode 20",
        "description": "WITHIN THE GRIP Episode 20.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP20.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP20.mp4"
      },
      {
        "id": "2214",
        "episodeNumber": 21,
        "title": "WITHIN THE GRIP - Episode 21",
        "description": "WITHIN THE GRIP Episode 21.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP21.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP21.mp4"
      },
      {
        "id": "2215",
        "episodeNumber": 22,
        "title": "WITHIN THE GRIP - Episode 22",
        "description": "WITHIN THE GRIP Episode 22.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP22.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP22.mp4"
      },
      {
        "id": "2216",
        "episodeNumber": 23,
        "title": "WITHIN THE GRIP - Episode 23",
        "description": "WITHIN THE GRIP Episode 23.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP23.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP23.mp4"
      },
      {
        "id": "2217",
        "episodeNumber": 24,
        "title": "WITHIN THE GRIP - Episode 24 Finale",
        "description": "WITHIN THE GRIP Episode 24 Finale.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP24_FINALE.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fchinese%2Fgreat%2Fwhite%2FWITHIN_THE_GRIP_EP24_FINALE.mp4"
      }
    ],
  },
{
  id: "156",
  title: "FRIENDS, SEX AND GAMES",
  slug: "friends-sex-and-games",
  year: "2026",
  rating: "N/A",
  image: "friends-sex-and-games.jpg",
  isFeatured: false,
  createdAt: "2026-11-14",
  description: "FRIENDS, SEX AND GAMES follows a story of friendship, relationships, romance, and unexpected challenges.",
  language: "English",
  genres: ["Drama", "Romance"],
  explainer: "Sankara",
  trailer: "https://www.youtube.com/watch?v=sqdIqL1I-BY&pp=ygUWRlJJRU5EUywgU0VYIEFORCBHQU1FU9IHCQnHBwGHKiGM7w%3D%3D",


    episodes: [
      {
        "id": "2218",
        "episodeNumber": 1,
        "title": "FRIENDS, SEX AND GAMES - Episode 1",
        "description": "FRIENDS, SEX AND GAMES Episode 1.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sanka/movie/Friends_sex_and_games_ep1.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sanka/movie/Friends_sex_and_games_ep1.mp4"
      },
      {
        "id": "2219",
        "episodeNumber": 2,
        "title": "FRIENDS, SEX AND GAMES - Episode 2",
        "description": "FRIENDS, SEX AND GAMES Episode 2.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sanka/movie/Friends_sex_and_games_ep2.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sanka/movie/Friends_sex_and_games_ep2.mp4"
      },
      {
        "id": "2220",
        "episodeNumber": 3,
        "title": "FRIENDS, SEX AND GAMES - Episode 3",
        "description": "FRIENDS, SEX AND GAMES Episode 3.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep3.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep3.mp4"
      },
      {
        "id": "2221",
        "episodeNumber": 4,
        "title": "FRIENDS, SEX AND GAMES - Episode 4",
        "description": "FRIENDS, SEX AND GAMES Episode 4.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep4.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep4.mp4"
      },
      {
        "id": "2222",
        "episodeNumber": 5,
        "title": "FRIENDS, SEX AND GAMES - Episode 5",
        "description": "FRIENDS, SEX AND GAMES Episode 5.",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep5.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sanka/seas/Friends_sex_and_games_Ep5.mp4"
      },
      {
        "id": "2223",
        "episodeNumber": 6,
        "title": "FRIENDS, SEX AND GAMES - Episode 6",
        "description": "FRIENDS, SEX AND GAMES Episode 6.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fseas%2FFriends_sex_and_games_Ep6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fseas%2FFriends_sex_and_games_Ep6.mp4"
      },
      {
        "id": "2224",
        "episodeNumber": 7,
        "title": "FRIENDS, SEX AND GAMES - Episode 7",
        "description": "FRIENDS, SEX AND GAMES Episode 7.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fmovie%2FFriends_sex_and_games_ep7.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fmovie%2FFriends_sex_and_games_ep7.mp4"
      },
      {
        "id": "2225",
        "episodeNumber": 8,
        "title": "FRIENDS, SEX AND GAMES - Episode 8 Finale",
        "description": "FRIENDS, SEX AND GAMES Episode 8 Finale.",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fmovie%2FFriends_sex_and_games_ep8final.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsanka%2Fmovie%2FFriends_sex_and_games_ep8final.mp4"
      }
    ],
  },
{
  id: "157",
  title: "THE GOOD SON",
  slug: "the-good-son",
  year: "2026",
  rating: "N/A",
  image: "the-good-son.jpg",
  isFeatured: false,
  createdAt: "2026-11-14",
  description: "THE GOOD SON is a Filipino series following a story of family, relationships, and unexpected challenges.",
  language: "Filipino",
  genres: ["Drama"],
  explainer: "Gaheza",
  trailer: "https://www.youtube.com/watch?v=CmjYtCdU004&pp=ygUVVEhFIEdPT0QgU09OIHRyYWlsZXIg",

    episodes: [
      {
        "id": "2226",
        "episodeNumber": 1,
        "title": "THE GOOD SON - Episode 1",
        "description": "THE GOOD SON Episode 1",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep1.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep1.mp4"
      },
      {
        "id": "2227",
        "episodeNumber": 2,
        "title": "THE GOOD SON - Episode 2",
        "description": "THE GOOD SON Episode 2",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep2.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep2.mp4"
      },
      {
        "id": "2228",
        "episodeNumber": 3,
        "title": "THE GOOD SON - Episode 3",
        "description": "THE GOOD SON Episode 3",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Fphilipins%2Fgood%2FThe_Good_Son_Ep3.mp4"
      }
    ],
  },


  {
    id: "158",
    title: "DA VINCI'S DEMONS - SEASON 1",
    slug: "da-vincis-demons-season-1",
    year: "2013",
    rating: "7.9/10",
    image: "da-vincis-demons.jpg",
    isFeatured: true,
    createdAt: "2026-11-17",
    description: "Season 1 of Da Vinci's Demons follows the young Leonardo da Vinci in Renaissance Florence as he investigates mysterious secrets, faces political conspiracies, and searches for the Book of Leaves.",
    language: "English",
    genres: ["Drama", "Romance"],
    explainer: "Gaheza",
    trailer: "https://www.youtube.com/results?search_query=Da+Vinci%27s+Demons+Season+1+trailer",

    episodes: [
      {
        "id": "2229",
        "episodeNumber": 1,
        "title": "DA VINCI'S DEMONS - S1 Episode 1",
        "description": "Da Vinci's Demons Season 1 Episode 1",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_1_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_1_HD.mp4"
      },
      {
        "id": "2230",
        "episodeNumber": 2,
        "title": "DA VINCI'S DEMONS - S1 Episode 2",
        "description": "Da Vinci's Demons Season 1 Episode 2",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_2.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_2.mp4"
      },
      {
        "id": "2231",
        "episodeNumber": 3,
        "title": "DA VINCI'S DEMONS - S1 Episode 3",
        "description": "Da Vinci's Demons Season 1 Episode 3",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_3.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDA_VINCIS_DEMON_EP_3.mp4"
      },
      {
        "id": "2232",
        "episodeNumber": 4,
        "title": "DA VINCI'S DEMONS - S1 Episode 4",
        "description": "Da Vinci's Demons Season 1 Episode 4",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_4.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_4.mp4"
      },
      {
        "id": "2233",
        "episodeNumber": 5,
        "title": "DA VINCI'S DEMONS - S1 Episode 5",
        "description": "Da Vinci's Demons Season 1 Episode 5",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_5.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_5.mp4"
      },
      {
        "id": "2234",
        "episodeNumber": 6,
        "title": "DA VINCI'S DEMONS - S1 Episode 6",
        "description": "Da Vinci's Demons Season 1 Episode 6",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_6.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_6.mp4"
      },
      {
        "id": "2235",
        "episodeNumber": 7,
        "title": "DA VINCI'S DEMONS - S1 Episode 7",
        "description": "Da Vinci's Demons Season 1 Episode 7",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMON_7.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMON_7.mp4"
      },
      {
        "id": "2236",
        "episodeNumber": 8,
        "title": "DA VINCI'S DEMONS - S1 Episode 8 (Final)",
        "description": "Da Vinci's Demons Season 1 Episode 8 Final",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_8_FINAL.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_8_FINAL.mp4"
      }
    ],
  },
  {
    id: "159",
    title: "DA VINCI'S DEMONS - SEASON 2",
    slug: "da-vincis-demons-season-2",
    year: "2014",
    rating: "7.9/10",
    image: "da-vincis-demons2.jpg",
    isFeatured: false,
    createdAt: "2026-11-17",
    description: "Season 2 continues Leonardo da Vinci's adventures as he faces new enemies, political conflicts, dangerous mysteries, and challenges that test his intelligence and inventions.",
    language: "English",
    genres: ["Drama", "Romance"],
    explainer: "Gaheza",
    trailer: "https://www.youtube.com/results?search_query=Da+Vinci%27s+Demons+Season+2+trailer",

    episodes: [
      {
        "id": "2237",
        "episodeNumber": 1,
        "title": "DA VINCI'S DEMONS - S2 Episode 1",
        "description": "Da Vinci's Demons Season 2 Episode 1",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_1_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_1_GVN_HD.mp4"
      },
      {
        "id": "2238",
        "episodeNumber": 2,
        "title": "DA VINCI'S DEMONS - S2 Episode 2",
        "description": "Da Vinci's Demons Season 2 Episode 2",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_2_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_2_GVN_HD.mp4"
      },
      {
        "id": "2239",
        "episodeNumber": 3,
        "title": "DA VINCI'S DEMONS - S2 Episode 3",
        "description": "Da Vinci's Demons Season 2 Episode 3",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_3_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_3_GVN_HD.mp4"
      },
      {
        "id": "2240",
        "episodeNumber": 4,
        "title": "DA VINCI'S DEMONS - S2 Episode 4",
        "description": "Da Vinci's Demons Season 2 Episode 4",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_4_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_4_GVN_HD.mp4"
      },
      {
        "id": "2241",
        "episodeNumber": 5,
        "title": "DA VINCI'S DEMONS - S2 Episode 5",
        "description": "Da Vinci's Demons Season 2 Episode 5",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_5_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_5_GVN_HD.mp4"
      },
      {
        "id": "2242",
        "episodeNumber": 6,
        "title": "DA VINCI'S DEMONS - S2 Episode 6",
        "description": "Da Vinci's Demons Season 2 Episode 6",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_6_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_6_GVN_HD.mp4"
      },
      {
        "id": "2243",
        "episodeNumber": 7,
        "title": "DA VINCI'S DEMONS - S2 Episode 7",
        "description": "Da Vinci's Demons Season 2 Episode 7",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_7_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_7_GVN_HD.mp4"
      },
      {
        "id": "2244",
        "episodeNumber": 8,
        "title": "DA VINCI'S DEMONS - S2 Episode 8",
        "description": "Da Vinci's Demons Season 2 Episode 8",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_8_GVN_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_8_GVN_HD.mp4"
      },
      {
        "id": "2245",
        "episodeNumber": 9,
        "title": "DA VINCI'S DEMONS - S2 Episode 9A",
        "description": "Da Vinci's Demons Season 2 Episode 9A",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_9A.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_9A.mp4"
      },
      {
        "id": "2246",
        "episodeNumber": 9,
        "title": "DA VINCI'S DEMONS - S2 Episode 9B",
        "description": "Da Vinci's Demons Season 2 Episode 9B",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_9B.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_9B.mp4"
      },
      {
        "id": "2247",
        "episodeNumber": 10,
        "title": "DA VINCI'S DEMONS - S2 Episode 10 (Final)",
        "description": "Da Vinci's Demons Season 2 Episode 10 Final",
        "streamUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_10_FINAL_HD.mp4",
        "downloadUrl": "https://isatafilez.my/files/series%2F2026%2Famerica%2Fsav%2Fdavinc%2FDAVINCIS_DEMONS_S2_EP_10_FINAL_HD.mp4"
      }
    ],
  },
  {
    id: "160",
    title: "DA VINCI'S DEMONS - SEASON 3",
    slug: "da-vincis-demons-season-3",
    year: "2015",
    rating: "7.9/10",
    image: "da-vincis-demons2.jpg",
    isFeatured: true,
    createdAt: "2026-11-17",
    description: "Season 3 follows Leonardo as he confronts the consequences of his discoveries and faces his greatest challenges in a world filled with secrets, war, betrayal, and powerful enemies.",
    language: "English",
   genres: ["Drama", "Romance"],
    explainer: "Gaheza",
    trailer: "https://www.youtube.com/results?search_query=Da+Vinci%27s+Demons+Season+3+trailer",

    episodes: [
      {
        "id": "2248",
        "episodeNumber": 1,
        "title": "DA VINCI'S DEMONS - S3 Episode 1",
        "description": "Da Vinci's Demons Season 3 Episode 1",
        "streamUrl": "http://isatafilez.my/files/series/2026/america/sav/davinc/DA_VINCI_DEMON_S3_EP1.mp4",
        "downloadUrl": "http://isatafilez.my/files/series/2026/america/sav/davinc/DA_VINCI_DEMON_S3_EP1.mp4"
      }
    ],
  },


  {
    id: "161",
    title: "SENIOR HIGH",
    slug: "senior-high",
    year: "",
    rating: "",
    image: "senior-high.jpg",
    isFeatured: true,
    createdAt: "2026-11-19",
    description: "Senior High is a drama series exploring the lives of students as they navigate school, friendships, relationships, personal struggles, and unexpected secrets. Their experiences reveal the challenges of growing up and the complicated realities of life in a school community.",
    language: "",
    genres: ["Drama"],
    explainer: "",
    trailer: "",

    episodes: [
      {
        "id": "2269",
        "episodeNumber": 1,
        "title": "SENIOR HIGH - Episode 1",
        "description": "Senior High Season 1 Episode 1",
        "streamUrl": "https://www.mediafire.com/file/1bq33psfbtsmaaf/SENIOR_HIGH_EP1.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/1bq33psfbtsmaaf/SENIOR_HIGH_EP1.mp4/file"
      },
      {
        "id": "2250",
        "episodeNumber": 2,
        "title": "SENIOR HIGH - Episode 2",
        "description": "Senior High Season 1 Episode 2",
        "streamUrl": "https://www.mediafire.com/file/kcbixhn0cjdwx80/SENIOR+HIGH+EP2.cineva.storemp4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/kcbixhn0cjdwx80/SENIOR+HIGH+EP2.cineva.storemp4.mp4/file"
      }
    ],
  },

  {
    id: "162",
    title: "ME - SEASON 1",
    slug: "me-season-1",
    year: "",
    rating: "",
    image: "me-season-1.jpg",
    isFeatured: true,
    createdAt: "2026-11-19",
    description: "Me Season 1 follows a journey of self-discovery, identity, personal growth, and the challenges of finding one's place in the world. Through changing experiences and relationships, the series explores what it means to understand yourself and face life's unexpected situations.",
    language: "",
    genres: ["Drama"],
    explainer: "",
    trailer: "",

    episodes: [
      {
        "id": "2251",
        "episodeNumber": 1,
        "title": "ME - S1 Episode 1",
        "description": "Me Season 1 Episode 1",
        "streamUrl": "https://www.mediafire.com/file/8iedkcxictl0rn5/Me-s1-ep1.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/8iedkcxictl0rn5/Me-s1-ep1.mp4/file"
      },
      {
        "id": "2252",
        "episodeNumber": 2,
        "title": "ME - S1 Episode 2",
        "description": "Me Season 1 Episode 2",
        "streamUrl": "https://www.mediafire.com/file/uai3oi5lxijxfe9/Me-s1-ep2.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/uai3oi5lxijxfe9/Me-s1-ep2.mp4/file"
      },
      {
        "id": "2253",
        "episodeNumber": 3,
        "title": "ME - S1 Episode 3",
        "description": "Me Season 1 Episode 3",
        "streamUrl": "https://www.mediafire.com/file/a9nz76fqb11zl94/Me-s1-ep3.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/a9nz76fqb11zl94/Me-s1-ep3.mp4/file"
      },
      {
        "id": "2254",
        "episodeNumber": 4,
        "title": "ME - S1 Episode 4",
        "description": "Me Season 1 Episode 4",
        "streamUrl": "https://www.mediafire.com/file/keaxwhyqkmrkzxs/Me-s1-ep4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/keaxwhyqkmrkzxs/Me-s1-ep4.mp4/file"
      },
      {
        "id": "2255",
        "episodeNumber": 5,
        "title": "ME - S1 Episode 5",
        "description": "Me Season 1 Episode 5",
        "streamUrl": "https://www.mediafire.com/file/tsqat4ngt6hreoo/Me-s1-ep5.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/tsqat4ngt6hreoo/Me-s1-ep5.mp4/file"
      },
      {
        "id": "2256",
        "episodeNumber": 6,
        "title": "ME - S1 Episode 6A",
        "description": "Me Season 1 Episode 6A - Part A",
        "streamUrl": "https://www.mediafire.com/file/850qh0te9zr006r/Me-s1-ep6A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/850qh0te9zr006r/Me-s1-ep6A.mp4/file"
      },
      {
        "id": "2257",
        "episodeNumber": 6,
        "title": "ME - S1 Episode 6B",
        "description": "Me Season 1 Episode 6B - Part B",
        "streamUrl": "https://www.mediafire.com/file/2enw4gga8dvelxt/Me-s1-ep6B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/2enw4gga8dvelxt/Me-s1-ep6B.mp4/file"
      },
      {
        "id": "2258",
        "episodeNumber": 7,
        "title": "ME - S1 Episode 7",
        "description": "Me Season 1 Episode 7",
        "streamUrl": "https://www.mediafire.com/file/c8qgpzbop06jgfs/Me-s1-ep7.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/c8qgpzbop06jgfs/Me-s1-ep7.mp4/file"
      },
      {
        "id": "2259",
        "episodeNumber": 9,
        "title": "ME - S1 Episode 9A",
        "description": "Me Season 1 Episode 9A - Part A",
        "streamUrl": "https://www.mediafire.com/file/0tmxw9rpy31ti7k/Me-s1-ep9A.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/0tmxw9rpy31ti7k/Me-s1-ep9A.mp4/file"
      },
      {
        "id": "2260",
        "episodeNumber": 9,
        "title": "ME - S1 Episode 9B",
        "description": "Me Season 1 Episode 9B - Part B",
        "streamUrl": "https://www.mediafire.com/file/ap96i9rwawj0bk1/Me-s1-ep9B.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ap96i9rwawj0bk1/Me-s1-ep9B.mp4/file"
      },
      {
        "id": "2261",
        "episodeNumber": 10,
        "title": "ME - S1 Episode 10 FINAL",
        "description": "Me Season 1 Episode 10 - Final Episode",
        "streamUrl": "https://www.mediafire.com/file/kbwmxpxu2fulkxa/Me-s1-ep10+FINAL.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/kbwmxpxu2fulkxa/Me-s1-ep10+FINAL.mp4/file"
      }
    ],
  },

  {
    id: "163",
    title: "SHADOW PUNISHER",
    slug: "shadow-punisher",
    year: "",
    rating: "",
    image: "shadow-punisher.jpg",
    isFeatured: true,
    createdAt: "2026-11-19",
    description: "Shadow Punisher is an action and thriller series centered on justice, revenge, and the confrontation between those who seek to punish wrongdoing and the forces standing in their way. The story explores conflict, danger, and the consequences of fighting against powerful enemies.",
    language: "",
    genres: ["Action", "Thriller"],
    explainer: "",
    trailer: "",

    episodes: [
      {
        "id": "2262",
        "episodeNumber": 1,
        "title": "SHADOW PUNISHER - Episode 1",
        "description": "Shadow Punisher Episode 1",
        "streamUrl": "https://www.mediafire.com/file/ooodjfl4mamo8ff/SHADOW_PUNISHER_E01.CINEVA.STOREmp4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/ooodjfl4mamo8ff/SHADOW_PUNISHER_E01.CINEVA.STOREmp4.mp4/file"
      },
      {
        "id": "2263",
        "episodeNumber": 2,
        "title": "SHADOW PUNISHER - Episode 2",
        "description": "Shadow Punisher Episode 2",
        "streamUrl": "https://www.mediafire.com/file/j0nfkouxs71202l/SHADOW+PUNISHER+E02.mp4/file?action=check",
        "downloadUrl": "https://www.mediafire.com/file/j0nfkouxs71202l/SHADOW+PUNISHER+E02.mp4/file?action=check"
      },
      {
        "id": "2264",
        "episodeNumber": 3,
        "title": "SHADOW PUNISHER - Episode 3",
        "description": "Shadow Punisher Episode 3",
        "streamUrl": "https://www.mediafire.com/file/uzekgbua9n4jlit/SHADOW_PUNISHER_E03.CINEVA.STIRE+mp4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/uzekgbua9n4jlit/SHADOW_PUNISHER_E03.CINEVA.STIRE+mp4.mp4/file"
      },
      {
        "id": "2265",
        "episodeNumber": 4,
        "title": "SHADOW PUNISHER - Episode 4",
        "description": "Shadow Punisher Episode 4",
        "streamUrl": "https://www.mediafire.com/file/6fg1rkjszpzchw4/SHADOW_PUNISHER_E04.CINEVA.STORE+mp4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/6fg1rkjszpzchw4/SHADOW_PUNISHER_E04.CINEVA.STORE+mp4.mp4/file"
      },
      {
        "id": "2266",
        "episodeNumber": 5,
        "title": "SHADOW PUNISHER - Episode 5",
        "description": "Shadow Punisher Episode 5",
        "streamUrl": "https://www.mediafire.com/file/xxwjjmxidgaho56/Shadow+Punisher+ep5.cineva.store+mp4.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/xxwjjmxidgaho56/Shadow+Punisher+ep5.cineva.store+mp4.mp4/file"
      },
      {
        "id": "2267",
        "episodeNumber": 6,
        "title": "SHADOW PUNISHER - Episode 6",
        "description": "Shadow Punisher Episode 6",
        "streamUrl": "https://www.mediafire.com/file/hfmqgwdsaxm5luh/Shadow+Punisher+ep6cineva.store.mp4/file?action=check",
        "downloadUrl": "https://www.mediafire.com/file/hfmqgwdsaxm5luh/Shadow+Punisher+ep6cineva.store.mp4/file?action=check"
      },
      {
        "id": "2268",
        "episodeNumber": 7,
        "title": "SHADOW PUNISHER - Episode 7",
        "description": "Shadow Punisher Episode 7",
        "streamUrl": "https://www.mediafire.com/file/s5rokf7c6jh0ca2/Shadow+Punisher+ep7cineva.store+.mp4/file",
        "downloadUrl": "https://www.mediafire.com/file/s5rokf7c6jh0ca2/Shadow+Punisher+ep7cineva.store+.mp4/file"
      }
    ],
  }



];

const seriesSummaries: readonly SeriesSummary[] = Object.freeze(series.map((item) => {
    const { episodes, ...summary } = item;
    void episodes;
    return Object.freeze(summary);
  }));

export function getSeriesSummaries(): readonly SeriesSummary[] {
  return seriesSummaries;
}
