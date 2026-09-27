
export interface MoviePart {
  id: string;
  partNumber: number;
  title: string;
  streamUrl: string;
  downloadUrl: string;
}

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
  parts: MoviePart[];
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "LET IT SHINE",
    slug: "let-it-shine",
    year: "2026",
    rating: "8.0",
    image: "images.webp",
    description:
      "A talented young musician dreams of becoming a successful performer but struggles with his confidence and the expectations of his strict father. When his music begins to gain attention, he must find the courage to follow his passion, express his true voice, and stand up for what he believes in.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "1-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/vvy3gson944l",
        downloadUrl:
          "https://www.mediafire.com/file/jz6maf65arpaucx/LET+IT+SHINE+HD+ROCKY.mp4/file",
      },
    ],
  },

  {
    id: "2",
    title: "One Last Shot",
    slug: "one-last-shot",
    year: "2026",
    rating: "8.0",
    image: "onelatstshot.webp",
    description:
      "A talented young musician dreams of becoming a successful performer but struggles with his confidence and the expectations of his strict father. When his music begins to gain attention, he must find the courage to follow his passion, express his true voice, and stand up for what he believes in.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "2-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/n5q52h6t6toq",
        downloadUrl:
          "https://www.mediafire.com/file/6w5370ax61sub9z/One_last_shot_sankara.mp4/file",
      },
    ],
  },

  {
    id: "3",
    title: "KNOCK KNOCK",
    slug: "knock-knock",
    year: "2026",
    rating: "8.0",
    image: "knock.webp",
    description: "A movie presented in multiple parts.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "3-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://vibuxer.com/5qix1khhii0h",
        downloadUrl:
          "https://www.mediafire.com/file/c6xa76fu6nupptd/KNOCK_KNOCK_A.mp4/file",
      },
      {
        id: "3-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://vibuxer.com/hrx1d6isn0il",
        downloadUrl:
          "https://www.mediafire.com/file/jj0827ckyt2gpnd/KNOCK+KNOCK+B.mp4/file",
      },
    ],
  },

  {
    id: "4",
    title: "KAL HO NAA HO",
    slug: "kal-ho-naa-ho",
    year: "2026",
    rating: "8.0",
    image: "jab.webp",
    description: "A movie presented in multiple parts.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "4-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://vibuxer.com/xckgisa7j0xx",
        downloadUrl:
          "https://www.mediafire.com/file/gk8jvf9s0s3chl5/Kal_Ho_Naa_Ho_A_Hd.mp4/file",
      },
      {
        id: "4-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://vibuxer.com/52z9sqhe313d",
        downloadUrl:
          "https://www.mediafire.com/file/13dswq5xqxv96tu/Kal_Ho_Naa_Ho_B_Hd.mp4/file",
      },
    ],
  },

  {
    id: "5",
    title: "Alpha",
    slug: "alpha",
    year: "2026",
    rating: "8.0",
    image: "alpha.webp",
    description:
      "Watch and enjoy this movie on Oshakur Movies. Explore an entertaining story, memorable characters, and exciting moments, then discover more great movies available on our platform.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "5-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://vibuxer.com/kp56qg1vfgwp",
        downloadUrl:
          "https://www.mediafire.com/file/xpyvkcz2mzmlz6y/ALPHA_ROCKY.mp4/file",
      },
      {
        id: "5-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://vibuxer.com/5ryyqqyzes6n",
        downloadUrl:
          "https://www.mediafire.com/file/n4v1kf0ns4mlmnb/ALPHA_+B+BY+ROCKY.mp4/file",
      },
    ],
  },

  {
    id: "6",
    title: "Tom and Jerry",
    slug: "tom-and-jerry",
    year: "2026",
    rating: "8.0",
    image: "tom.webp",
    description:
      "Watch and enjoy this movie on Oshakur Movies. Explore an entertaining story, memorable characters, and exciting moments, then discover more great movies available on our platform.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "6-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://audinifer.com/ubr11fezjwcw",
        downloadUrl:
          "https://www.mediafire.com/file/9dmtf41ukw71pz8/Tom_And_Jerry_A_Hd.mp4/file",
      },
      {
        id: "6-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://audinifer.com/ubr11fezjwcw",
        downloadUrl:
          "https://www.mediafire.com/file/4uos42vc794bb8n/Tom_And_Jerry_B_Hd.mp4/file",
      },
    ],
  },

  {
    id: "7",
    title: "KUNG FU JUNGLE",
    slug: "kung-fu-jungle",
    year: "2026",
    rating: "8.0",
    image: "kung.jpg",
    description:
      "Watch and enjoy this movie on Oshakur Movies. Explore an entertaining story, memorable characters, and exciting moments, then discover more great movies available on our platform.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "7-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://audinifer.com/mjajegxiwx6s",
        downloadUrl:
          "https://www.mediafire.com/file/kds6dvvixn3t4iy/Kung+Fu+Jungle+A+Hd.Mp4.mp4/file",
      },
      {
        id: "7-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://audinifer.com/7757v2eha2by",
        downloadUrl:
          "https://www.mediafire.com/file/9mie4kwccjle3aq/Kung+Fu+Jungle+B+Hd.Mp4.mp4/file",
      },
      {
        id: "7-3",
        partNumber: 3,
        title: "Part C",
        streamUrl: "https://hanerix.com/j35szpe4922y",
        downloadUrl:
          "https://www.mediafire.com/file/501yy66m4pezfyd/Kung+Fu+Jungle+D+Hd.Mp4.mp4/file",
      },
    ],
  },

  {
    id: "8",
    title: "Furious Attack",
    slug: "furious-attack",
    year: "2026",
    rating: "8.0",
    image: "furious.jpg",
    description:
      "A talented young musician dreams of becoming a successful performer but struggles with his confidence and the expectations of his strict father. When his music begins to gain attention, he must find the courage to follow his passion, express his true voice, and stand up for what he believes in.",
    language: "English",
    genres: ["Comedy", "Drama", "Horror", "Thriller", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-24",

    parts: [
      {
        id: "8-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "..",
        downloadUrl:
          "https://www.mediafire.com/file/a5gbis8ujp0qtei/Furios+Attack.mp4/file",
      },
    ],
  },

  {
    id: "9",
    title: "Fifty Shades Freed",
    slug: "fifty-shades-freed",
    year: "2018",
    rating: "8.0",
    image: "fifty-shades-freed.jpg",
    description:
      "Newlyweds Christian and Ana begin their married life together, but new threats from the past put their relationship and future at risk.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "9-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hanerix.com/kjtq8kes5jsf",
        downloadUrl:
          "https://www.mediafire.com/file/2z5h5dwm43clqq4/Watch_Fifty_Shades_Freed_Hd.mp4/file",
      },
    ],
  },

  {
    id: "10",
    title: "Getting Played",
    slug: "getting-played",
    year: "2005",
    rating: "8.0",
    image: "getting-played.jpg",
    description:
      "Three friends decide to play a game of seduction on a stranger, but their plan takes an unexpected turn when they discover that he knows what they are trying to do.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "10-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/jjjhxcgxz14z",
        downloadUrl:
          "https://www.mediafire.com/file/io4b33afjsh571u/Getting+Played+Hd.mp4/file",
      },
    ],
  },

  {
    id: "11",
    title: "Bad Sister",
    slug: "bad-sister",
    year: "2015",
    rating: "8.0",
    image: "bad-sister.jpg",
    description:
      "A student becomes suspicious of a new nun whose behavior seems increasingly disturbing, leading her to uncover a dangerous secret.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "11-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hanerix.com/no1v0ip154g4",
        downloadUrl:
          "https://www.mediafire.com/file/cbc1i4sylr8i61q/BAD+SISTER.mp4/file",
      },
    ],
  },

  {
    id: "12",
    title: "Desire",
    slug: "desire",
    year: "2026",
    rating: "8.0",
    image: "desire.jpg",
    description:
      "A dramatic story of desire, relationships, and the consequences of choices that change the lives of those involved.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "12-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hanerix.com/9qso57igb2uv",
        downloadUrl:
          "https://www.mediafire.com/file/zbfm4mk4lhjlss7/DESIRE_2026_perfect.mp4/file",
      },
    ],
  },

  {
    id: "13",
    title: "Fifty Shades Darker",
    slug: "fifty-shades-darker",
    year: "2017",
    rating: "8.0",
    image: "fifty-shades-darker.jpg",
    description:
      "Christian Grey and Anastasia Steele try to rebuild their relationship, but figures from Christian's past threaten their future together.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "13-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hanerix.com/eoa6yohtnzgv",
        downloadUrl: "",
      },
    ],
  },

  {
    id: "14",
    title: "Fifty Shades of Grey",
    slug: "fifty-shades-of-grey",
    year: "2015",
    rating: "8.0",
    image: "fifty-shades-of-grey.jpg",
    description:
      "An inexperienced college student meets wealthy businessman Christian Grey, and their relationship develops into an intense romance as she discovers more about his private world.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "14-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/ivfxc0cta24w",
        downloadUrl:
          "https://www.mediafire.com/file/lmlzjjr8rmw5ei9/Fifty_Shades_Of_Grey_Hd.mp4/file",
      },
    ],
  },

  {
    id: "15",
    title: "Pretty Woman",
    slug: "pretty-woman",
    year: "1990",
    rating: "8.0",
    image: "pretty-woman.jpg",
    description:
      "A wealthy businessman hires Vivian to accompany him during a business trip in Los Angeles, and their unexpected relationship gradually develops into something deeper.",
    language: "English",
    genres: ["Romance"],
    isFeatured: true,
    createdAt: "2026-09-27",

    parts: [
      {
        id: "15-1",
        partNumber: 1,
        title: "Part A",
        streamUrl: "https://audinifer.com/yo6pfx310pny",
        downloadUrl:
          "https://www.mediafire.com/file/ihyy65jjhl8hnsq/Pretty_Woman_A_Hd.mp4/file",
      },
      {
        id: "15-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://audinifer.com/g4bdrqomneoe",
        downloadUrl:
          "https://www.mediafire.com/file/tvulzrcvvzo4j5x/Pretty_Woman_B_Hd.mp4/file",
      },
    ],
  },
];

