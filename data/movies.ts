
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
    description:
      "A movie presented in multiple parts.",
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
    description:
      "A movie presented in multiple parts.",
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
        streamUrl: "https://hanerix.com/mjajegxiwx6s",
        downloadUrl:
          "https://www.mediafire.com/file/kds6dvvixn3t4iy/Kung+Fu+Jungle+A+Hd.Mp4.mp4/file",
      },
      {
        id: "7-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "https://vibuxer.com/7757v2eha2by",
        downloadUrl:
          "https://www.mediafire.com/file/9mie4kwccjle3aq/Kung+Fu+Jungle+B+Hd.Mp4.mp4/file",
      },
       {
        id: "7-3",
        partNumber: 3,
        title: "Part C",
        streamUrl: "https://vibuxer.com/j35szpe4922y",
        downloadUrl:
          "https://www.mediafire.com/file/501yy66m4pezfyd/Kung+Fu+Jungle+D+Hd.Mp4.mp4/file",
      },
    ],
  },
  
  
  
];

