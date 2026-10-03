
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
    isFeatured: false,
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
    isFeatured: false,
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
    isFeatured: false,
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
    isFeatured: false,
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
    isFeatured: false,
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
    genres: ["Comedy", "Drama", "Romance", "Thriller", "Action", "Adventure"],
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
  {
    id: "16",
    title: "The Legend Of White Dragon",
    slug: "the-legend-of-white-dragon",
    year: "2026",
    rating: "8.0",
    image: "the-legend-of-white-dragon.jpg",
    description:
      "Watch and enjoy The Legend Of White Dragon on Oshakur Movies.",
    language: "English",
    genres: ["Action", "Adventure", "Fantasy"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "16-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/qhh1y2jeilrajwq/The_Legend_Of_White_Dragon_-_Perfect_Nyir%257E.mp4/file",
      },
    ],
  },
  {
    id: "17",
    title: "Kung Fu Panda",
    slug: "kung-fu-panda",
    year: "2008",
    rating: "8.0",
    image: "kung-fu-panda.jpg",
    description:
      "Po, a clumsy but determined panda, unexpectedly becomes the Dragon Warrior and must learn kung fu to protect his valley.",
    language: "English",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "17-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/cnwl8tc814znwcz/Kung+Fu+Panda+1.mp4/file",
      },
      {
        id: "17-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/u7kfpbya2wif62n/Kung+Fu+Panda+B.mp4/file",
      },
    ],
  },
  {
    id: "18",
    title: "Kung Fu Panda 2",
    slug: "kung-fu-panda-2",
    year: "2011",
    rating: "8.0",
    image: "kung-fu-panda-2.jpg",
    description:
      "Po and the Furious Five face a dangerous enemy while Po discovers more about his mysterious past.",
    language: "English",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "18-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/sqnxw7ltjemm126/Kung+Fu+Panda+2.mp4/file",
      },
    ],
  },
  {
    id: "19",
    title: "Kung Fu Panda 3",
    slug: "kung-fu-panda-3",
    year: "2016",
    rating: "8.0",
    image: "kung-fu-panda-3.jpg",
    description:
      "Po reunites with his biological father and must train a village of pandas to face a powerful supernatural threat.",
    language: "English",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "19-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/pulgwzyjwxbtf6h/Kung+Fu+Panda+3.mp4/file",
      },
    ],
  },
  {
    id: "20",
    title: "Moana",
    slug: "moana",
    year: "2016",
    rating: "8.0",
    image: "moana.jpg",
    description:
      "A determined young girl sets out across the ocean on an extraordinary journey to save her people and restore balance to her island.",
    language: "English",
    genres: ["Animation", "Adventure", "Comedy", "Fantasy"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "20-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/qjx1qgqd6ut5vgt/MOANA++2016+HD+Pk.mp4/file",
      },
    ],
  },
  {
    id: "21",
    title: "Peter Rabbit",
    slug: "peter-rabbit",
    year: "2018",
    rating: "8.0",
    image: "peter-rabbit.jpg",
    description:
      "Peter Rabbit and his friends find themselves in a hilarious conflict with the new owner of the farm.",
    language: "English",
    genres: ["Animation", "Comedy", "Adventure", "Family"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "21-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/04xw0iw481y2vwk/Peter+Rabbit+Hd.mp4/file",
      },
    ],
  },
  {
    id: "22",
    title: "Bilal",
    slug: "bilal",
    year: "2015",
    rating: "8.0",
    image: "bilal.jpg",
    description:
      "An inspiring animated story about Bilal's journey from hardship to becoming a symbol of courage, faith, and freedom.",
    language: "English",
    genres: ["Animation", "Action", "Adventure", "Drama"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "22-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/2z3gmczapjnckgq/Bilal_Hd.mp4/file",
      },
      {
        id: "22-2",
        partNumber: 2,
        title: "Part B",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/3frcjl5an97kh0c/Bilal_B.mp4/file",
      },
    ],
  },
  {
    id: "23",
    title: "Coco",
    slug: "coco",
    year: "2017",
    rating: "8.0",
    image: "coco.jpg",
    description:
      "A young boy who dreams of becoming a musician enters the Land of the Dead and discovers important secrets about his family.",
    language: "English",
    genres: ["Animation", "Adventure", "Comedy", "Drama"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "23-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/vpncfdf1fcpvckc/Coco+Hd+Mp4(1).mp4/file",
      },
    ],
  },
  {
    id: "24",
    title: "GOAT",
    slug: "goat",
    year: "2026",
    rating: "8.0",
    image: "goat.jpg",
    description: "Watch and enjoy GOAT on Oshakur Movies.",
    language: "English",
    genres: ["Animation", "Comedy", "Adventure", "Family"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "24-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/ppqav3w0xkiw25o/GOAT+(2).mp4/file",
      },
    ],
  },
  {
    id: "25",
    title: "Rango",
    slug: "rango",
    year: "2011",
    rating: "8.0",
    image: "rango.jpg",
    description:
      "A pet chameleon finds himself in a desert town where he unexpectedly becomes the sheriff and faces a dangerous mystery.",
    language: "English",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "25-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/vxosv41efcz5tiw/Rango+Hd2.mp4/file",
      },
    ],
  },
  {
    id: "26",
    title: "Kirikou and the Sorceress",
    slug: "kirikou-and-the-sorceress",
    year: "1998",
    rating: "8.0",
    image: "kirikou-and-the-sorceress.jpg",
    description:
      "A brave young boy named Kirikou sets out to protect his village and uncover the truth behind a powerful sorceress.",
    language: "French",
    genres: ["Animation", "Adventure", "Fantasy", "Family"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "26-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/c93mnvcgsemjvz4/Kiriku_Et_La_Sorciere%25282%2529.mp4/file",
      },
    ],
  },
  {
    id: "27",
    title: "Kirikou and the Beast",
    slug: "kirikou-and-the-beast",
    year: "2005",
    rating: "8.0",
    image: "kirikou-and-the-beast.jpg",
    description:
      "Kirikou faces a series of adventures while helping his village overcome mysterious challenges and dangers.",
    language: "French",
    genres: ["Animation", "Adventure", "Fantasy", "Family"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "27-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/kzd46ahrai0deau/Kirikou+And+Beasto.mp4/file",
      },
    ],
  },
  {
    id: "28",
    title: "Wrong Turn",
    slug: "wrong-turn",
    year: "2003",
    rating: "8.0",
    image: "wrong-turn.jpg",
    description:
      "A group of travelers become stranded in the wilderness and encounter dangerous and mysterious threats.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "28-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/73lnwx8rphgdth5/Wrong+Turn+1+Hd+Mp4.mp4/file",
      },
    ],
  },
  {
    id: "29",
    title: "Wrong Turn 2",
    slug: "wrong-turn-2",
    year: "2007",
    rating: "8.0",
    image: "wrong-turn-2.jpg",
    description:
      "A group of contestants taking part in a survival reality show find themselves facing deadly dangers in the wilderness.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "29-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/rq3h7nkrih78iut/Wrong_Turn_2_Hd.mp4/file",
      },
    ],
  },
  {
    id: "30",
    title: "Wrong Turn 3",
    slug: "wrong-turn-3",
    year: "2009",
    rating: "8.0",
    image: "wrong-turn-3.jpg",
    description:
      "A group of people must fight for survival after becoming trapped in a dangerous wilderness.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "30-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/yvlccok61kkn2st/Wrong_Turn_3_Hd.mp4/file",
      },
    ],
  },
  {
    id: "31",
    title: "Wrong Turn 5",
    slug: "wrong-turn-5",
    year: "2012",
    rating: "8.0",
    image: "wrong-turn-5.jpg",
    description:
      "A group of young people become trapped in a remote town where they face terrifying dangers.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "31-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/7ch0pt16r8c4zee/Wrong_Turn_5_Hd.mp4/file",
      },
    ],
  },
  {
    id: "32",
    title: "Wrong Turn 6",
    slug: "wrong-turn-6",
    year: "2014",
    rating: "8.0",
    image: "wrong-turn-6.jpg",
    description:
      "A group of friends travel to an inherited resort and discover a terrifying family secret.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "32-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/brmqa5qibhfp0ql/Wrong+Turn+6+Hd.mp4/file",
      },
    ],
  },
  {
    id: "33",
    title: "The Devil's Mouth",
    slug: "the-devils-mouth",
    year: "2026",
    rating: "8.0",
    image: "the-devils-mouth.jpg",
    description:
      "A terrifying story involving dark secrets, danger, and mysterious forces.",
    language: "English",
    genres: ["Horror", "Thriller", "Mystery"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "33-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/35uvcsrjt1qhkw2/The_Devil_mouth_.mp4/file",
      },
    ],
  },
  {
    id: "34",
    title: "A Quiet Place: Day One",
    slug: "a-quiet-place-day-one",
    year: "2024",
    rating: "8.0",
    image: "a-quiet-place-day-one.jpg",
    description:
      "A woman struggles to survive as terrifying creatures hunt anything that makes a sound.",
    language: "English",
    genres: ["Horror", "Thriller", "Drama", "Sci-Fi"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "34-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/4gy9v9fo2uw34vn/AQUITEPLACEDAYONE.mp4/file",
      },
    ],
  },
  {
    id: "35",
    title: "Evil Dead Burn",
    slug: "evil-dead-burn",
    year: "2026",
    rating: "8.0",
    image: "evil-dead-burn.jpg",
    description:
      "A terrifying horror story involving supernatural forces and a fight for survival.",
    language: "English",
    genres: ["Horror", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "35-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/rasdl65qreqsfkh/Evil+dead+burn+2026.mp4/file",
      },
    ],
  },
  {
    id: "36",
    title: "The Last House",
    slug: "the-last-house",
    year: "2026",
    rating: "8.0",
    image: "the-last-house.jpg",
    description:
      "A suspenseful story of survival involving a mysterious house and dangerous events.",
    language: "English",
    genres: ["Horror", "Thriller", "Mystery"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "36-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/vj3fx384z3v1gxu/The_Last_House.mp4/file",
      },
    ],
  },
  {
    id: "37",
    title: "Ready or Not 2",
    slug: "ready-or-not-2",
    year: "2026",
    rating: "8.0",
    image: "ready-or-not-2.jpg",
    description:
      "A new dangerous game unfolds as survival becomes the ultimate challenge.",
    language: "English",
    genres: ["Horror", "Thriller", "Comedy"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "37-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/bh1udp098bfeuod/READY_OR_NOT_2_.mp4/file",
      },
    ],
  },
  {
    id: "38",
    title: "Day Breaker",
    slug: "day-breaker",
    year: "2020",
    rating: "8.0",
    image: "day-breaker.jpg",
    description: "Watch and enjoy Day Breaker on Oshakur Movies.",
    language: "English",
    genres: ["Action", "Thriller", "Drama"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "38-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/tr1v9n48pde2g9v/Watch_Day_breaker_%25282020%2529_1.mp4/file",
      },
    ],
  },
  {
    id: "39",
    title: "Deep Water",
    slug: "deep-water",
    year: "2022",
    rating: "8.0",
    image: "deep-water.jpg",
    description:
      "A psychological thriller exploring a complicated relationship and the dangerous consequences of hidden secrets.",
    language: "English",
    genres: ["Drama", "Thriller", "Mystery"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "39-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/pk60hbl8q6yryv5/DEEP+WATER.mp4/file",
      },
    ],
  },
  {
    id: "40",
    title: "Fall",
    slug: "fall",
    year: "2022",
    rating: "8.0",
    image: "fall.jpg",
    description:
      "Two friends become trapped at the top of a remote tower and must find a way to survive.",
    language: "English",
    genres: ["Thriller", "Adventure", "Drama"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "40-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/ytjjg3sd2xwr5lz/Fall.mp4/file",
      },
    ],
  },
  {
    id: "41",
    title: "Thrash - Gaheza",
    slug: "thrash-gaheza",
    year: "2026",
    rating: "8.0",
    image: "thrash-gaheza.jpg",
    description: "Watch and enjoy Thrash - Gaheza on Oshakur Movies.",
    language: "Kinyarwanda",
    genres: ["Drama", "Action", "Thriller"],
    isFeatured: true,
    createdAt: "2026-09-30",
    parts: [
      {
        id: "41-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/57pw50wvhmzbn68/Thrash+-+Gaheza.mp4/file",
      },
    ],
  },
    {
    id: "42",
    title: "RHADE SHYAM A",
    slug: "rhade-shyam-a",
    year: "2022",
    rating: "8.0",
    image: "rhade-shyam-a.jpg",
    description:
      "A romantic period drama centered on love, destiny, and the difficult choices faced by two people whose lives become deeply connected.",
    language: "Telugu",
    genres: ["Drama", "Romance"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "42-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/n9xwbh81vqgf",
        downloadUrl:
          "https://www.mediafire.com/file/hisxymlff3liw7u/RHADE+SHYAM+A+(1).mp4/file",
      },
    ],
  },
  {
    id: "43",
    title: "London Has Fallen",
    slug: "london-has-fallen",
    year: "2016",
    rating: "8.0",
    image: "london-has-fallen.jpg",
    description:
      "A secret service agent must protect world leaders and fight to survive after a devastating attack takes place in London.",
    language: "English",
    genres: ["Action", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "43-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/v2bttq268ach",
        downloadUrl:
          "https://www.mediafire.com/file/wwuybs7uq6e4ww4/London_Has_Fallen.mp4/file",
      },
    ],
  },
  {
    id: "44",
    title: "The Contractor",
    slug: "the-contractor",
    year: "2022",
    rating: "8.0",
    image: "the-contractor.jpg",
    description:
      "A former special forces soldier becomes involved in a dangerous mission after leaving military service.",
    language: "English",
    genres: ["Action", "Thriller", "Drama"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "44-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/n9xwbh81vqgf",
        downloadUrl:
          "https://www.mediafire.com/file/xeh74cczy6s9f9i/The+Contractor.mp4/file",
      },
    ],
  },
  {
    id: "45",
    title: "Snake Woman",
    slug: "snake-woman",
    year: "2026",
    rating: "8.0",
    image: "snake-woman.jpg",
    description:
      "A mysterious story involving danger, secrets, and a woman whose identity becomes connected to a terrifying supernatural mystery.",
    language: "English",
    genres: ["Horror", "Thriller", "Mystery"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "45-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/d9m8f9whij7r",
        downloadUrl:
          "https://www.mediafire.com/file/03ixa87b7bl5djp/SNAKE+WOMAN.mp4/file",
      },
    ],
  },
  {
    id: "46",
    title: "Mutiny",
    slug: "mutiny",
    year: "2026",
    rating: "8.0",
    image: "mutiny.jpg",
    description:
      "An action thriller involving conflict, betrayal, and a dangerous struggle for survival.",
    language: "English",
    genres: ["Action", "Thriller", "Drama"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "46-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/hphyiekgm15u17",
        downloadUrl:
          "https://www.mediafire.com/file/rdlhay8x126ycpk/Mutiny+2026.mp4/file",
      },
    ],
  },
  {
    id: "47",
    title: "Rango",
    slug: "rango-new",
    year: "2011",
    rating: "8.0",
    image: "rango.jpg",
    description:
      "A pet chameleon finds himself in a desert town where he unexpectedly becomes the sheriff and faces a dangerous mystery.",
    language: "English",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "47-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/yljz6q7s3ean",
        downloadUrl:
          "https://www.mediafire.com/file/vxosv41efcz5tiw/Rango+Hd2.mp4/file",
      },
    ],
  },
  {
    id: "48",
    title: "Face Off",
    slug: "face-off",
    year: "1997",
    rating: "8.0",
    image: "face-off.jpg",
    description:
      "An FBI agent and a dangerous criminal become caught in an extraordinary identity-swapping conflict.",
    language: "English",
    genres: ["Action", "Thriller", "Crime"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "48-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/qf8mlnpbl6en",
        downloadUrl:
          "https://www.mediafire.com/file/afmu8t2pi1i7z78/Face+Off+Hd.mp4/file",
      },
    ],
  },
  {
    id: "49",
    title: "Mortal Kombat",
    slug: "mortal-kombat",
    year: "2021",
    rating: "8.0",
    image: "mortal-kombat.jpg",
    description:
      "A group of fighters prepare to defend Earth in a legendary tournament against powerful supernatural opponents.",
    language: "English",
    genres: ["Action", "Fantasy", "Adventure"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "49-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/33tgfy5dreu3",
        downloadUrl:
          "https://www.mediafire.com/file/fnwk15xdt9n9anr/MORTAL_KOMBAT.mp4/file",
      },
    ],
  },
  {
    id: "50",
    title: "xXx: The Return of Xander Cage",
    slug: "xxx-the-return-of-xander-cage",
    year: "2017",
    rating: "8.0",
    image: "xxx-the-return-of-xander-cage.jpg",
    description:
      "Xander Cage returns from self-imposed exile and joins a dangerous mission involving a powerful weapon and international criminals.",
    language: "English",
    genres: ["Action", "Adventure", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "50-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "",
        downloadUrl:
          "https://www.mediafire.com/file/txya9zvgf3yprpq/xXx+the+return+of+xander+cage.mp4/file",
      },
    ],
  },
  {
    id: "51",
    title: "Troll 2",
    slug: "troll-2",
    year: "2026",
    rating: "8.0",
    image: "troll-2.jpg",
    description:
      "A new supernatural adventure involving mysterious creatures, danger, and a fight for survival.",
    language: "English",
    genres: ["Fantasy", "Adventure", "Action"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "51-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/ff3jto6t3td4",
        downloadUrl:
          "https://www.mediafire.com/file/d1wreg7lo23ufkl/TROLL_2_.mp4/file",
      },
    ],
  },
  {
    id: "52",
    title: "Little Brother",
    slug: "little-brother",
    year: "2026",
    rating: "8.0",
    image: "little-brother.jpg",
    description:
      "A dramatic story about family, relationships, and the challenges faced by people brought together by difficult circumstances.",
    language: "English",
    genres: ["Drama", "Comedy"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "52-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hgcloud.to/f3ebm57jn8mk",
        downloadUrl:
          "https://www.mediafire.com/file/abbs2mqzt63his8/Little+Brother+2026+Perfect.mp4/file",
      },
    ],
  },
  {
    id: "53",
    title: "Taken",
    slug: "taken",
    year: "2008",
    rating: "8.0",
    image: "taken.jpg",
    description:
      "A former special agent uses his particular skills to rescue his kidnapped daughter from a dangerous criminal network.",
    language: "English",
    genres: ["Action", "Thriller", "Crime"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "53-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/rdy2ldxgk56d",
        downloadUrl:
          "https://www.mediafire.com/file/dhvt2izz9lisa64/Taken.mp4/file",
      },
    ],
  },
  {
    id: "54",
    title: "Shang-Chi and the Legend of the Ten Rings",
    slug: "shang-chi-and-the-legend-of-the-ten-rings",
    year: "2021",
    rating: "8.0",
    image: "shang-chi.jpg",
    description:
      "Shang-Chi confronts his past after becoming involved with the mysterious Ten Rings organization and discovers secrets about his family.",
    language: "English",
    genres: ["Action", "Adventure", "Fantasy"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "54-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/oywmw2d549wd",
        downloadUrl:
          "https://www.mediafire.com/file/e463930jpg6m63l/Shang_Chi_1.mp4/file",
      },
    ],
  },
  {
    id: "55",
    title: "The Sea Beast",
    slug: "the-sea-beast",
    year: "2022",
    rating: "8.0",
    image: "the-sea-beast.jpg",
    description:
      "A young girl joins a legendary sea monster hunter and discovers that the creatures they fear may not be what they seem.",
    language: "English",
    genres: ["Animation", "Adventure", "Action", "Fantasy"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "55-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://hanerix.com/2imvzbmws3te",
        downloadUrl:
          "https://www.mediafire.com/file/s2x3uhocqk23ch8/The+Sea+Beast++Hd+Mp4.mp4/file",
      },
    ],
  },
  {
    id: "56",
    title: "Zootopia",
    slug: "zootopia",
    year: "2016",
    rating: "8.0",
    image: "zootopia.jpg",
    description:
      "A determined rabbit police officer teams up with a clever fox to uncover a mystery threatening the animal city of Zootopia.",
    language: "English",
    genres: ["Animation", "Comedy", "Adventure", "Family"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "56-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://audinifer.com/ueh3u0qmej26",
        downloadUrl:
          "https://www.mediafire.com/file/6j2q636k9dzf38r/Zootopia.mp4/file",
      },
    ],
  },
  {
    id: "57",
    title: "Push",
    slug: "push",
    year: "2009",
    rating: "8.0",
    image: "push.jpg",
    description:
      "People with extraordinary abilities become involved in a dangerous struggle involving a secret government program and powerful enemies.",
    language: "English",
    genres: ["Action", "Sci-Fi", "Thriller"],
    isFeatured: true,
    createdAt: "2026-10-01",
    parts: [
      {
        id: "57-1",
        partNumber: 1,
        title: "Part 1",
        streamUrl: "https://vibuxer.com/e88ejv2wubug",
        downloadUrl:
          "https://www.mediafire.com/file/e9t2wvv0knz2oix/www.agasobanuyenow.com+-+Push+-+Rocky.mp4/file",
      },
    ],
  },
  {
  id: "58",
  title: "Blood Brothers",
  slug: "blood-brothers",
  year: "2026",
  rating: "8.0",
  image: "blood-brothers.jpg",
  description: "Blood Brothers is an action drama movie.",
  language: "English",
  genres: ["Action", "Drama", "Thriller"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "58-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/xxlxa47z80zr",
      downloadUrl:
        "https://www.mediafire.com/file/ebfpsjtdt74vkh7/Blood+Brothers+A.mp4/file",
    },
    {
      id: "58-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://audinifer.com/31q6wc0x58us",
      downloadUrl:
        "https://www.mediafire.com/file/kz58sonut5sa1g9/Blood+Brothers+B.mp4/file",
    },
  ],
},

{
  id: "59",
  title: "Gallowwalkers",
  slug: "gallowwalkers",
  year: "2012",
  rating: "8.0",
  image: "gallowwalkers.jpg",
  description: "Gallowwalkers is an action horror western movie.",
  language: "English",
  genres: ["Action", "Horror", "Western"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "59-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://vibuxer.com/12b44b2s0mhg",
      downloadUrl:
        "https://www.mediafire.com/file/divjm2ugqhhqucf/Gallowwalkers.A._Hd.Mp4.mp4/file",
    },
    {
      id: "59-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/m0w4c06c2fmbhsj/Gallowwalkers.B._Hd.Mp4.mp4/file",
    },
  ],
},

{
  id: "60",
  title: "Kuch Kuch Hota Hai",
  slug: "kuch-kuch-hota-hai",
  year: "1998",
  rating: "8.0",
  image: "kuch-kuch-hota-hai.jpg",
  description: "Kuch Kuch Hota Hai is a romantic drama movie.",
  language: "Hindi",
  genres: ["Romance", "Drama", "Comedy"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "60-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/w1l77wematae",
      downloadUrl:
        "https://www.mediafire.com/file/6wqo5yv9bwac6c5/Kuch+Kuch+Hota+Hai+A+.mp4/file",
    },
      {
      id: "60-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/w1l77wematae",
      downloadUrl:
        "https://www.mediafire.com/file/7jkgwmzmaoovsjm/Kuch+Kuch+Hota+Hai-720P.mp4/file",
    },
  ],
  
},

{
  id: "61",
  title: "Step Up All In",
  slug: "step-up-all-in",
  year: "2014",
  rating: "8.0",
  image: "step-up-all-in.jpg",
  description: "Step Up All In is a dance drama movie.",
  language: "English",
  genres: ["Drama", "Romance", "Music"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "61-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/qvtq7ltyq8nzoez/Step_Up_All_In_A_Hd.mp4/file",
    },
    {
      id: "61-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://audinifer.com/wrywb7q7il2z",
      downloadUrl:
        "https://www.mediafire.com/file/qkt6jdjbb6ay72s/Step+Up+All+In+B+Hd.mp4/file",
    },
  ],
},
{
  id: "62",
  title: "Secret Superstar",
  slug: "secret-superstar",
  year: "2017",
  rating: "8.0",
  image: "secret-superstar.jpg",
  description: "Secret Superstar is a Hindi drama and music movie.",
  language: "Hindi",
  genres: ["Drama", "Music"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "62-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/l12cojos646q",
      downloadUrl:
        "https://www.mediafire.com/file/k99bguvrf416kkm/Secret_Superstar_A_Hd.mp4/file",
    },
    {
      id: "62-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/dfkpcsc0ibar",
      downloadUrl:
        "https://www.mediafire.com/file/04ar7hwjkegc8r6/Secret_Superstar_B_Hd.mp4/file",
    },
  ],
},

{
  id: "63",
  title: "Dhadkan",
  slug: "dhadkan",
  year: "2000",
  rating: "8.0",
  image: "dhadkan.jpg",
  description: "Dhadkan is a romantic drama movie.",
  language: "Hindi",
  genres: ["Romance", "Drama"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "63-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/a8m9eubkq0i1",
      downloadUrl:
        "https://www.mediafire.com/file/mdcltx4xn3ol4p5/Dhadkan_A_Hd.mp4/file",
    },
    {
      id: "63-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/5rgnnmo7r2hs",
      downloadUrl:
        "https://www.mediafire.com/file/y8ntfejjyrp38fc/Dhadkan_B_Hd.mp4/file",
    },
    {
      id: "63-3",
      partNumber: 3,
      title: "Part C",
      streamUrl: "https://hanerix.com/skenrmdvbi5a",
      downloadUrl:
        "https://www.mediafire.com/file/2kfkvzrenj6hu1u/Dhadkan_C_Hd.mp4/file",
    },
  ],
},

{
  id: "64",
  title: "Blast",
  slug: "blast",
  year: "2026",
  rating: "8.0",
  image: "blast.jpg",
  description: "Blast is an action thriller movie.",
  language: "English",
  genres: ["Action", "Thriller"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "64-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://vibuxer.com/xngslo3hic28",
      downloadUrl:
        "https://www.mediafire.com/file/1w7ki6je3ztwuwl/BLAST+A+ROCKY.mp4/file",
    },
    {
      id: "64-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://vibuxer.com/r3t0v279l4yy",
      downloadUrl:
        "https://www.mediafire.com/file/0u0qrmok7v05zw3/BLAST_B+BY+ROCKY+new.mp4/file",
    },
  ],
},

{
  id: "65",
  title: "Vishwanath",
  slug: "vishwanath",
  year: "2026",
  rating: "8.0",
  image: "vishwanath.jpg",
  description: "Vishwanath is an action drama movie.",
  language: "English",
  genres: ["Action", "Drama"],
  isFeatured: true,
  createdAt: "2026-10-01",
  parts: [
    {
      id: "65-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/ix7ci8px6lqm",
      downloadUrl:
        "https://www.mediafire.com/file/psqsnndecw78xqc/VISHWANA+A.mp4/file",
    },
    {
      id: "65-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/nyctfl5z27n5",
      downloadUrl:
        "https://www.mediafire.com/file/59bgo33ask1nze2/VISHWANATH+B.mp4/file",
    },
    {
      id: "65-3",
      partNumber: 3,
      title: "Part C",
      streamUrl: "https://audinifer.com/dzk8gcxviz1s",
      downloadUrl:
        "https://www.mediafire.com/file/c3axzu9zu2ril95/VISHWANATH+C.mp4/file",
    },
  ],
},
  {
  id: "66",
  title: "Who Am I",
  slug: "who-am-i",
  year: "2014",
  rating: "8.0",
  image: "who-am-i.jpg",
  description:
    "Who Am I follows a young computer hacker who becomes involved in a dangerous world of cybercrime, secrets, deception, and high-stakes missions. As the situation becomes more dangerous, he must use his intelligence and hacking skills to survive.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "66-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://vibuxer.com/gbphk1any60y",
      downloadUrl:
        "https://www.mediafire.com/file/qgs4fcwcnt7u076/Who+Am+I+A+Hd.mp4/file",
    },
    {
      id: "66-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/9klp1gnbhdac",
      downloadUrl:
        "https://www.mediafire.com/file/expor2xmx9uyoeq/Who+Am+I+B+Hd.mp4/file",
    },
  ],
},

{
  id: "67",
  title: "The Secret Woman",
  slug: "the-secret-woman",
  year: "2026",
  rating: "8.0",
  image: "the-secret-woman.jpg",
  description:
    "The Secret Woman follows a mysterious woman whose hidden past becomes connected to a dangerous situation. As secrets are uncovered, she must face unexpected challenges, conflicts, and threats while fighting to protect herself.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "67-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/p74scp9qptyy",
      downloadUrl:
        "https://www.mediafire.com/file/z8tiauuvfp0pl5x/The_Secret_Woman_-_Genius.mp4/file",
    },
  ],
},

{
  id: "68",
  title: "Runner 2026 Delivery Men",
  slug: "runner-2026-delivery-men",
  year: "2026",
  rating: "8.0",
  image: "runner-2026-delivery-men.jpg",
  description:
    "Runner 2026 Delivery Men follows delivery workers who become caught in a dangerous mission. What begins as an ordinary delivery turns into a fast-paced struggle involving powerful enemies, unexpected obstacles, and intense action.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "68-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/9m84jctthn29",
      downloadUrl:
        "https://www.mediafire.com/file/9rmjgwcdgoxyic7/Runner+2026+Delivery+Men+Perfect.mp4/file",
    },
  ],
},

{
  id: "69",
  title: "Rambo: The Last Blood",
  slug: "rambo-the-last-blood",
  year: "2019",
  rating: "8.0",
  image: "rambo-the-last-blood.jpg",
  description:
    "Rambo: The Last Blood follows John Rambo as he attempts to live a quiet life until a violent threat forces him back into action. He travels across dangerous territory to rescue someone close to him and confronts ruthless enemies in a brutal fight for survival.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "69-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://audinifer.com/67on3e83bqbp",
      downloadUrl:
        "https://www.mediafire.com/file/ss3qvoteqqyk4sz/Rambo_The_Last_Blood_A_Hd.mp4/file",
    },
    {
      id: "69-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/pheqgzqhco18",
      downloadUrl:
        "https://www.mediafire.com/file/outjuogcjrzvp8i/Rambo_The_Last_Blood_B_Hd.mp4/file",
    },
  ],
},

{
  id: "70",
  title: "Firebeak",
  slug: "firebeak",
  year: "2026",
  rating: "8.0",
  image: "firebeak.jpg",
  description:
    "Firebeak is a fast-paced action movie centered around dangerous confrontations, powerful enemies, and intense battles. The story follows characters who must overcome difficult challenges while fighting to survive.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "70-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/ec2on44uxp5g",
      downloadUrl:
        "https://www.mediafire.com/file/ueh9giw4mluk7th/Firebeak_-_Genius.mp4/file",
    },
  ],
},

{
  id: "71",
  title: "Mayday",
  slug: "mayday",
  year: "2026",
  rating: "8.0",
  image: "mayday.jpg",
  description:
    "Mayday follows a dangerous mission that quickly turns into a fight for survival. The characters must deal with unexpected threats, difficult decisions, and powerful enemies while trying to complete their mission.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "71-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/6rudntcmkb4r",
      downloadUrl:
        "https://www.mediafire.com/file/az2qe9d2msmr93v/MAYDAY_A.mp4/file",
    },
    {
      id: "71-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://vibuxer.com/b38p36s7a0gv",
      downloadUrl: "",
    },
  ],
},

{
  id: "72",
  title: "Knights of the Zodiac",
  slug: "knights-of-the-zodiac",
  year: "2023",
  rating: "8.0",
  image: "knights-of-the-zodiac.jpg",
  description:
    "Knights of the Zodiac follows a young warrior who discovers extraordinary abilities and becomes involved in a dangerous battle to protect a powerful goddess. He must master his skills and face powerful enemies in a series of intense battles.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "72-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://filemoon.org/de/5pVzNnOJz7wv/file",
      downloadUrl:
        "https://www.mediafire.com/file/qvgw90uyce03uzm/Knights+of+the+Zodiac+A.mp4/file",
    },
    {
      id: "72-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://filemoon.org/de/QN9mEkowz6dW/file",
      downloadUrl:
        "https://www.mediafire.com/file/2sjfobw6j2rm4ui/Knights_of_the_Zodiac_B.mp4/file",
    },
  ],
},

{
  id: "73",
  title: "Lucky Strike",
  slug: "lucky-strike",
  year: "2026",
  rating: "8.0",
  image: "lucky-strike.jpg",
  description:
    "Lucky Strike follows characters caught in a dangerous situation where survival depends on courage, quick decisions, and determination. The story is filled with confrontations, unexpected challenges, and intense action.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "73-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/qgmvzyxo8601",
      downloadUrl:
        "https://www.mediafire.com/file/amipv3li86ugs1m/Lucky_Strike.mp4/file",
    },
  ],
},

{
  id: "74",
  title: "The Wrath of Vajra",
  slug: "the-wrath-of-vajra",
  year: "2013",
  rating: "8.0",
  image: "the-wrath-of-vajra.jpg",
  description:
    "The Wrath of Vajra follows a powerful fighter trained to become a deadly warrior. He is drawn into a violent conflict where martial arts, revenge, and survival collide in a series of intense battles.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "74-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/fh66t7iz1cd6",
      downloadUrl:
        "https://www.mediafire.com/file/71uaq6roef72ucr/The+Wrath+Of+Vajra+Hd.mp4/file",
    },
  ],
},

{
  id: "75",
  title: "Just Play Dead 2026",
  slug: "just-play-dead-2026",
  year: "2026",
  rating: "8.0",
  image: "just-play-dead-2026.jpg",
  description:
    "Just Play Dead 2026 follows characters trapped in a dangerous situation where deception and survival become essential. They must stay ahead of their enemies while dealing with unexpected threats and intense confrontations.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "75-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/q6eq8u19nooks2x/JUST+PLAY+DEAD+2026+perfect.mp4/file",
    },
  ],
},

{
  id: "76",
  title: "Ip Man 2",
  slug: "ip-man-2",
  year: "2010",
  rating: "8.0",
  image: "ip-man-2.jpg",
  description:
    "Ip Man 2 follows the legendary martial artist as he moves to Hong Kong and attempts to establish his own martial arts school. He faces rival fighters and powerful opponents while defending his students and his reputation.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "76-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/mp66904mavs6",
      downloadUrl:
        "https://www.mediafire.com/file/5csjnc7584knjk4/Ip_Man_2_Hd.mp4/file",
    },
  ],
},

{
  id: "77",
  title: "Ip Man 3",
  slug: "ip-man-3",
  year: "2015",
  rating: "8.0",
  image: "ip-man-3.jpg",
  description:
    "Ip Man 3 follows the legendary martial artist as he protects his community and his students from dangerous rivals. When a powerful fighter threatens his school, Ip Man must face one of his most challenging battles.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "77-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/uv7xwph1epbm",
      downloadUrl:
        "https://www.mediafire.com/file/ya9qjuaif453gzn/Ip_Man_3_Hd.mp4/file",
    },
  ],
},

{
  id: "78",
  title: "Ip Man 4",
  slug: "ip-man-4",
  year: "2019",
  rating: "8.0",
  image: "ip-man-4.jpg",
  description:
    "Ip Man 4 follows Ip Man as he travels to the United States and encounters new challenges involving martial arts, cultural differences, and powerful opponents. He must once again use his skills and discipline to defend those around him.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "78-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/8bl9l1jybt4j",
      downloadUrl:
        "https://www.mediafire.com/file/quh3siqd6vte5bx/Ip_Man_4_Hd.mp4/file",
    },
  ],
},

{
  id: "79",
  title: "Rise of the Legend",
  slug: "rise-of-the-legend",
  year: "2014",
  rating: "8.0",
  image: "rise-of-the-legend.jpg",
  description:
    "Rise of the Legend follows a skilled fighter who returns to a city controlled by dangerous criminals. Using his martial arts abilities and determination, he takes on powerful enemies and fights to protect innocent people.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "79-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/ipfm9hqzfra3",
      downloadUrl:
        "https://www.mediafire.com/file/rhr4buiyd8wn7co/Rise+Of+The+Legend+Hd.mp4/file",
    },
  ],
},

{
  id: "80",
  title: "Ninja Assassin",
  slug: "ninja-assassin",
  year: "2009",
  rating: "8.0",
  image: "ninja-assassin.jpg",
  description:
    "Ninja Assassin follows a highly trained warrior who turns against the organization that raised him. Pursued by deadly enemies, he uses his extraordinary combat skills to survive and protect the people he cares about.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "80-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/z3h0wmnbkt73",
      downloadUrl:
        "https://www.mediafire.com/file/4qsb40hhfahtpnu/Ninja_Assassin__Hd_.mp4/file",
    },
  ],
},

{
  id: "81",
  title: "Ip Man 1",
  slug: "ip-man-1",
  year: "2008",
  rating: "8.0",
  image: "ip-man-1.jpg",
  description:
    "Ip Man tells the story of a respected martial artist living in Foshan who is known for his exceptional Wing Chun skills. When conflict reaches his hometown, he is forced to defend his principles and face powerful opponents.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "81-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/fkvi80ju8aot",
      downloadUrl:
        "https://www.mediafire.com/file/i5gysj75auiocv7/Ip_Man_1_A_Hd.mp4/file",
    },
    {
      id: "81-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://vibuxer.com/tvm47did6j6f",
      downloadUrl:
        "https://www.mediafire.com/file/qv4dkwrahuuf5rk/Ip_Man_1_B_Hd%25281%2529.mp4/file",
    },
  ],
},

{
  id: "82",
  title: "Chinese Zodiac",
  slug: "chinese-zodiac",
  year: "2012",
  rating: "8.0",
  image: "chinese-zodiac.jpg",
  description:
    "Chinese Zodiac follows a skilled adventurer who searches for valuable historical artifacts around the world. His dangerous mission leads to thrilling chases, difficult obstacles, and intense confrontations with those seeking the same treasures.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "82-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/cnwsqtj9uvn9",
      downloadUrl:
        "https://www.mediafire.com/file/f7xpspeao0hz4sx/Chinese+Zodiac-Hd.mp4/file",
    },
  ],
},

{
  id: "83",
  title: "Hidden Strike",
  slug: "hidden-strike",
  year: "2023",
  rating: "8.0",
  image: "hidden-strike.jpg",
  description:
    "Hidden Strike follows two former soldiers who must work together to escort civilians through a dangerous war zone. Their mission becomes a race against time as armed enemies threaten their survival.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "83-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/6qomdt9foziz",
      downloadUrl:
        "https://www.mediafire.com/file/opv4k9wjjivmv0n/Hidden_Strike_Hd.mp4/file",
    },
  ],
},

{
  id: "84",
  title: "Creed 3",
  slug: "creed-3",
  year: "2023",
  rating: "8.0",
  image: "creed-3.jpg",
  description:
    "Creed 3 follows Adonis Creed as he faces a former friend who returns with a powerful ambition and a personal challenge. Adonis must confront his past and prepare for a major fight that tests his strength and determination.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "84-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/2x4o4ekku6pw",
      downloadUrl:
        "https://www.mediafire.com/file/m7l64lkdu3yzv1w/CREED_3_ROCKY.mp4/file",
    },
  ],
},

{
  id: "85",
  title: "Rise of the Planet of the Apes",
  slug: "rise-of-the-planet-of-the-apes",
  year: "2011",
  rating: "8.0",
  image: "rise-of-the-planet-of-the-apes.jpg",
  description:
    "Rise of the Planet of the Apes follows a scientist whose experiments lead to the creation of an extraordinarily intelligent ape. As the apes grow stronger and more independent, a chain of events begins that changes the future of humanity.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "85-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/j8od38j28j8z",
      downloadUrl:
        "https://www.mediafire.com/file/b8p9ka64qj3xh5z/Rise_PLANET_OF_APES_1.mp4/file",
    },
  ],
},

{
  id: "86",
  title: "Dawn of the Planet of the Apes",
  slug: "dawn-of-the-planet-of-the-apes",
  year: "2014",
  rating: "8.0",
  image: "dawn-of-the-planet-of-the-apes.jpg",
  description:
    "Dawn of the Planet of the Apes follows a growing community of intelligent apes as they encounter a group of human survivors. Tensions rise between the two groups, leading to dangerous conflicts and a struggle for control and survival.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "86-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/5yt5r8nym3ab",
      downloadUrl:
        "https://www.mediafire.com/file/gwhvdbqdj8wppfg/Dawn+On+Planet+Of+Apes.mp4/file",
    },
  ],
},

{
  id: "87",
  title: "Indemnity",
  slug: "indemnity",
  year: "2021",
  rating: "8.0",
  image: "indemnity.jpg",
  description:
    "Indemnity follows a former firefighter who wakes up accused of a terrible crime he cannot remember committing. Forced to run from powerful enemies, he uses his survival skills to uncover the truth and clear his name.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "87-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/g39s7v9jy7gw",
      downloadUrl:
        "https://www.mediafire.com/file/y9jhous2684hn6l/Watch_Indeminity_%25282021%2529_1.mp4/file",
    },
  ],
},

{
  id: "88",
  title: "From Paris with Love",
  slug: "from-paris-with-love",
  year: "2010",
  rating: "8.0",
  image: "from-paris-with-love.jpg",
  description:
    "From Paris with Love follows a young intelligence agent who is paired with an unpredictable and highly experienced operative. Together they uncover a dangerous conspiracy and must fight their way through a series of deadly missions.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "88-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/d67be82jk6d6",
      downloadUrl:
        "https://www.mediafire.com/file/mrcnsj8pxkqoerf/FROM+PARIS+WITH+LOVE+FULL.mp4/file",
    },
  ],
},

{
  id: "89",
  title: "In the Grey",
  slug: "in-the-grey",
  year: "2025",
  rating: "8.0",
  image: "in-the-grey.jpg",
  description:
    "In the Grey follows a team of highly skilled agents who become involved in a dangerous mission against powerful criminals. As the operation becomes more complicated, they must rely on teamwork, combat skills, and determination to survive.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "89-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/hk8obr37pmgk",
      downloadUrl:
        "https://www.mediafire.com/file/l5bfjq4r0nlpumo/IN+THE+GREY.mp4/file",
    },
  ],
},

{
  id: "90",
  title: "The Maze Runner",
  slug: "the-maze-runner",
  year: "2014",
  rating: "8.0",
  image: "the-maze-runner.jpg",
  description:
    "The Maze Runner follows a young man who wakes up in a mysterious maze with no memory of his past. Alongside other trapped survivors, he must discover the secrets of the maze, avoid deadly dangers, and find a way to escape.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "90-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/5ud7jbzo1udl",
      downloadUrl:
        "https://www.mediafire.com/file/v2ns8pxqpqslhqa/THE+MAZE+RUNNER.mp4/file",
    },
  ],
},

{
  id: "91",
  title: "xXx: The Return of Xander Cage",
  slug: "xxx-the-return-of-xander-cage",
  year: "2017",
  rating: "8.0",
  image: "xxx-the-return-of-xander-cage.jpg",
  description:
    "xXx: The Return of Xander Cage follows an extreme athlete and government operative who returns to action after a dangerous weapon falls into the wrong hands. He assembles a team and takes on a powerful enemy in a series of high-risk missions.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "91-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/rcymgknylohx",
      downloadUrl:
        "https://www.mediafire.com/file/txya9zvgf3yprpq/xXx+the+return+of+xander+cage.mp4/file",
    },
  ],
},

{
  id: "92",
  title: "Skin Trade",
  slug: "skin-trade",
  year: "2014",
  rating: "8.0",
  image: "skin-trade.jpg",
  description:
    "Skin Trade follows a determined detective who travels across borders to confront a powerful criminal organization. After suffering a personal loss, he joins forces with another lawman and takes on dangerous criminals involved in an international operation.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "92-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/ugbo2phi4sqb",
      downloadUrl:
        "https://www.mediafire.com/file/lenq3eog8oau5c0/Skin_Trade_A_Hd.mp4/file",
    },
    {
      id: "92-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://audinifer.com/qbyj23katiqe",
      downloadUrl:
        "https://www.mediafire.com/file/hdriy5gvr213pmh/Skin_Trad_B_Hd.mp4/file",
    },
  ],
},

{
  id: "93",
  title: "Iceman: The Time Traveler",
  slug: "iceman-the-time-traveler",
  year: "2018",
  rating: "8.0",
  image: "iceman-the-time-traveler.jpg",
  description:
    "Iceman: The Time Traveler follows a warrior who becomes caught between different eras after a mysterious journey through time. He must survive dangerous enemies and use his fighting skills while trying to understand his new surroundings.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "93-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/cczp98n98cfr",
      downloadUrl:
        "https://www.mediafire.com/file/7tvnhmthm4bxim7/Iceman-+The+Time+Traveler+Hd.mp4/file",
    },
  ],
},

{
  id: "94",
  title: "Big Game",
  slug: "big-game",
  year: "2014",
  rating: "8.0",
  image: "big-game.jpg",
  description:
    "Big Game follows a young boy who becomes responsible for protecting a powerful political leader after their aircraft crashes in a remote wilderness. Together they must survive dangerous attackers and find a way to escape.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "94-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/4zz74legncce",
      downloadUrl:
        "https://www.mediafire.com/file/e11bsm1lmsq0b6h/BIG_GAME_-_AGASOBANUYEFILMS.COM.mp4/file",
    },
  ],
},

{
  id: "95",
  title: "The Furious",
  slug: "the-furious-2026",
  year: "2026",
  rating: "8.0",
  image: "the-furious-2026.jpg",
  description:
    "The Furious follows determined fighters who become involved in a dangerous conflict filled with intense battles and powerful enemies. They must use their strength, skills, and courage to survive the fight.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "95-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/a48a35vjprc1",
      downloadUrl:
        "https://www.mediafire.com/file/pixq3wkodejuqh8/The+furious+(2026).mp4/file",
    },
  ],
},

{
  id: "96",
  title: "Man of War",
  slug: "man-of-war",
  year: "2026",
  rating: "8.0",
  image: "man-of-war.jpg",
  description:
    "Man of War follows a skilled fighter who becomes involved in a dangerous mission against powerful enemies. As the mission develops, he must fight through difficult situations and protect himself and those around him.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "96-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/5x06x807i4sf",
      downloadUrl:
        "https://www.mediafire.com/file/vo55brh9nmz765t/MAN+OF+WAR+A.mp4/file",
    },
    {
      id: "96-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://hanerix.com/lxdvqh5a0npr",
      downloadUrl:
        "https://www.mediafire.com/file/3udyrg2r3cgr888/MAN+OF+WAR+B.mp4/file",
    },
  ],
},

{
  id: "97",
  title: "The Furious",
  slug: "the-furious",
  year: "2026",
  rating: "8.0",
  image: "the-furious.jpg",
  description:
    "The Furious follows characters caught in a dangerous conflict where survival depends on courage, strength, and combat skills. The story is filled with intense confrontations and fast-paced action.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "97-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/w4io7oqp12ig",
      downloadUrl:
        "https://www.mediafire.com/file/vria10f98kdjf3w/The_Furious.mp4/file",
    },
  ],
},

{
  id: "98",
  title: "Day Shift",
  slug: "day-shift",
  year: "2022",
  rating: "8.0",
  image: "day-shift.jpg",
  description:
    "Day Shift follows a hardworking father who secretly hunts dangerous supernatural creatures while trying to provide for his family. His dangerous missions become increasingly difficult as he faces powerful enemies and unexpected challenges.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "98-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/0ec9q09stksm",
      downloadUrl:
        "https://www.mediafire.com/file/e49g5du2sbhd5v1/Day+Shift+A.mp4/file",
    },
    {
      id: "98-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://vibuxer.com/qacutr8nr9cz",
      downloadUrl:
        "https://www.mediafire.com/file/yajkdizgz2ljdtu/Day+Shift+B.mp4/file",
    },
  ],
},

{
  id: "99",
  title: "The Call",
  slug: "the-call",
  year: "2020",
  rating: "8.0",
  image: "the-call.jpg",
  description:
    "The Call follows a woman who receives a mysterious phone call that connects her to a dangerous situation. As the events unfold, she must uncover the truth and confront a powerful threat before it is too late.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "99-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/ofrd8iu3xmew",
      downloadUrl:
        "https://www.mediafire.com/file/ae1h1lvmo0wsstl/The_Call_A.mp4/file",
    },
    {
      id: "99-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "https://audinifer.com/a6fk7ep6e7ti",
      downloadUrl:
        "https://www.mediafire.com/file/yie2i9s4470kbfj/The_Call_B.mp4/file",
    },
  ],
},

{
  id: "100",
  title: "Seven Snipers",
  slug: "seven-snipers",
  year: "2026",
  rating: "8.0",
  image: "seven-snipers.jpg",
  description:
    "Seven Snipers follows a group of highly trained fighters who are brought together for a dangerous mission. They must work as a team, overcome heavily armed enemies, and complete their objective under extreme pressure.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "100-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/dwc55ks99lgv",
      downloadUrl:
        "https://www.mediafire.com/file/ia4o0n5dp743w1b/SEVEN+SNIPERS+(1).mp4/file",
    },
  ],
},

{
  id: "101",
  title: "Blade of the Guardians",
  slug: "blade-of-the-guardians",
  year: "2026",
  rating: "8.0",
  image: "blade-of-the-guardians.jpg",
  description:
    "Blade of the Guardians follows a skilled warrior who accepts a dangerous mission to protect an important person. His journey takes him through violent conflicts where he must face powerful enemies and use his exceptional fighting abilities.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "101-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/yfi2q057xfd0",
      downloadUrl:
        "https://www.mediafire.com/file/ocaas0miygmp6i2/Blade_Of_The_Guardians_2026_Perfect.mp4/file",
    },
  ],
},

{
  id: "102",
  title: "The Myth",
  slug: "the-myth",
  year: "2005",
  rating: "8.0",
  image: "the-myth.jpg",
  description:
    "The Myth follows an archaeologist and his companions as they search for an ancient treasure connected to a legendary mystery. Their journey leads to dangerous discoveries, powerful enemies, and spectacular battles.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "102-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/gnncv9b7b4dp",
      downloadUrl:
        "https://www.mediafire.com/file/lfopf5a6fexsqk0/The+Myth+Hd.mp4/file",
    },
  ],
},

{
  id: "103",
  title: "China Salesma",
  slug: "china-salesma",
  year: "2026",
  rating: "8.0",
  image: "china-salesma.jpg",
  description:
    "China Salesma follows a character who becomes involved in a dangerous conflict involving powerful opponents. As the situation escalates, he must rely on courage, determination, and combat skills to overcome the threats around him.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "103-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/f55xrz9mawjb",
      downloadUrl:
        "https://www.mediafire.com/file/34kwz7dflzj6ejx/CHINA_SALESMA.mp4/file",
    },
  ],
},

{
  id: "104",
  title: "Normal",
  slug: "normal",
  year: "2026",
  rating: "8.0",
  image: "normal.jpg",
  description:
    "Normal follows characters whose ordinary lives are disrupted by a dangerous situation. As the conflict grows, they are forced to make difficult choices and fight against unexpected threats.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "104-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/agnnor4678glc1t/Normal.mp4/file",
    },
  ],
},

{
  id: "105",
  title: "Over Your Dead Body",
  slug: "over-your-dead-body",
  year: "2014",
  rating: "8.0",
  image: "over-your-dead-body.jpg",
  description:
    "Over Your Dead Body follows characters caught in a dangerous and mysterious situation where hidden threats begin to emerge. They must uncover what is happening while struggling to survive against unexpected dangers.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "105-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/iyvogjre7g35",
      downloadUrl:
        "https://www.mediafire.com/file/yezun0g3odw0pfd/Over_Your_Dead_Body.mp4/file",
    },
  ],
},

{
  id: "106",
  title: "Thieves' Highway",
  slug: "thieves-highway",
  year: "1949",
  rating: "8.0",
  image: "thieves-highway.jpg",
  description:
    "Thieves' Highway follows a determined man who becomes involved in a dangerous struggle against powerful criminals. As he confronts corruption and betrayal, he must take risks and fight to protect himself and those close to him.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "106-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/jjqpzsix2etkxeq/Thieves_Highway.mp4/file",
    },
  ],
},

{
  id: "107",
  title: "Red Notice",
  slug: "red-notice",
  year: "2021",
  rating: "8.0",
  image: "red-notice.jpg",
  description:
    "Red Notice follows an FBI agent who is forced to work with a notorious art thief to track down a dangerous criminal. Their mission takes them around the world through clever escapes, dangerous confrontations, and unexpected betrayals.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "107-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/nwrkphdfm9ff2tn/Red_Notice_A.mp4/file",
    },
    {
      id: "107-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/sl3dzr1xxt2abcj/Red_Notice_B.mp4/file",
    },
  ],
},

{
  id: "108",
  title: "Beast",
  slug: "beast-2026",
  year: "2026",
  rating: "8.0",
  image: "beast-2026.jpg",
  description:
    "Beast follows characters facing a powerful and dangerous threat that puts their lives at risk. They must use courage, strategy, and strength to confront their enemies and survive the escalating conflict.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "108-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/l0yi9a2we3pz",
      downloadUrl:
        "https://www.mediafire.com/file/q6t54wtgsjhhdfp/Beast+2026+Hd.mp4/file",
    },
  ],
},

{
  id: "109",
  title: "The Witch: Part 1 – The Subversion",
  slug: "the-witch-part-1-the-subversion",
  year: "2018",
  rating: "8.0",
  image: "the-witch-part-1-the-subversion.jpg",
  description:
    "The Witch: Part 1 – The Subversion follows a young woman whose mysterious past begins to reveal extraordinary abilities. As dangerous people search for her, she becomes involved in a violent conflict that forces her to fight for survival.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "109-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/aiypp3wkxj0y",
      downloadUrl:
        "https://www.mediafire.com/file/g9n9sbg5nrq5f88/The_Witch_Part_1_-_The_Subversion_Hd.mp4/file",
    },
  ],
},

{
  id: "110",
  title: "Fuze Sankra",
  slug: "fuze-sankra",
  year: "2026",
  rating: "8.0",
  image: "fuze-sankra.jpg",
  description:
    "Fuze Sankra follows a character who becomes involved in a dangerous conflict involving powerful enemies and unexpected challenges. He must use determination and courage to survive and overcome the threats around him.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "110-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/c1b26fym4tu9",
      downloadUrl:
        "https://www.mediafire.com/file/kucmfqzayt8asow/Fuze_Sankra_.mp4/file",
    },
  ],
},

{
  id: "111",
  title: "The Lone Ranger",
  slug: "the-lone-ranger",
  year: "2013",
  rating: "8.0",
  image: "the-lone-ranger.jpg",
  description:
    "The Lone Ranger follows a masked lawman and his Native American companion as they fight corruption and powerful criminals. Their journey is filled with dangerous encounters, horseback pursuits, and battles across the frontier.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "111-1",
      partNumber: 1,
      title: "Part A",
      streamUrl: "https://hanerix.com/tfgxoij8uewl",
      downloadUrl:
        "https://www.mediafire.com/file/d8yvhfj22qb3d2j/THE+LONE+RANGER+A.mp4/file",
    },
    {
      id: "111-2",
      partNumber: 2,
      title: "Part B",
      streamUrl: "",
      downloadUrl:
        "https://www.mediafire.com/file/6u84a7f9xmxrerc/THE_LONE_RANGER_B.mp4/file",
    },
  ],
},

{
  id: "112",
  title: "Red Dawn",
  slug: "red-dawn",
  year: "2012",
  rating: "8.0",
  image: "red-dawn.jpg",
  description:
    "Red Dawn follows a group of young people who find themselves defending their hometown after a sudden invasion. Forced to become fighters, they organize a resistance and face dangerous enemy forces.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "112-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/lbhbwp4l5zns",
      downloadUrl:
        "https://www.mediafire.com/file/v33lvclo2itmxhz/Red+Dawn+Hd.mp4/file",
    },
  ],
},

{
  id: "113",
  title: "London Has Fallen",
  slug: "london-has-fallen-new",
  year: "2016",
  rating: "8.0",
  image: "london-has-fallen-new.jpg",
  description:
    "London Has Fallen follows a secret service agent who must protect the United States president during a coordinated attack in London. With the city under threat, he fights through dangerous situations to keep the president alive and stop the attackers.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "113-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/24qm6jpidq7u",
      downloadUrl:
        "https://www.mediafire.com/file/wwuybs7uq6e4ww4/London_Has_Fallen.mp4/file",
    },
  ],
},

{
  id: "114",
  title: "Angel Has Fallen",
  slug: "angel-has-fallen",
  year: "2019",
  rating: "8.0",
  image: "angel-has-fallen.jpg",
  description:
    "Angel Has Fallen follows a highly trained secret service agent who becomes the target of a dangerous conspiracy. Forced to escape and uncover the truth, he must use his skills to protect the president and clear his name.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "114-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/ki8aom2fs81n",
      downloadUrl:
        "https://www.mediafire.com/file/sbn05ei57wun9ax/Angel+Has+Fallen+Hd.mp4/file",
    },
  ],
},

{
  id: "115",
  title: "Close Gaheza",
  slug: "close-gaheza",
  year: "2026",
  rating: "8.0",
  image: "close-gaheza.jpg",
  description:
    "Close Gaheza follows a character who becomes involved in a dangerous situation where survival requires courage and determination. Facing powerful opponents, he must overcome obstacles and fight his way through the conflict.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "115-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/ym252obnjmyt",
      downloadUrl:
        "https://www.mediafire.com/file/jype48vg1819ukd/Close+Gaheza+Full.mp4/file",
    },
  ],
},

{
  id: "116",
  title: "Black Adam",
  slug: "black-adam",
  year: "2022",
  rating: "8.0",
  image: "black-adam.jpg",
  description:
    "Black Adam follows an ancient champion who is awakened after thousands of years and discovers a modern world very different from the one he knew. As powerful enemies emerge, he must decide how to use his extraordinary abilities in a dangerous battle.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "116-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/xqtzqfpa1oku",
      downloadUrl:
        "https://www.mediafire.com/file/8mtikjh0p9ylszc/BLACK_ADAM_Rocky.mp4/file",
    },
  ],
},

{
  id: "117",
  title: "Buffalo Boy",
  slug: "buffalo-boy",
  year: "2004",
  rating: "8.0",
  image: "buffalo-boy.jpg",
  description:
    "Buffalo Boy follows a young boy growing up in a challenging environment where survival requires courage and determination. His journey takes him through difficult situations and dangerous encounters as he searches for a better future.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "117-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/vdzvmsvuesee",
      downloadUrl:
        "https://www.mediafire.com/file/rq2ysklb22n69ws/Buffalo+Boy+Hd.mp4/file",
    },
  ],
},

{
  id: "118",
  title: "Apex",
  slug: "apex",
  year: "2026",
  rating: "8.0",
  image: "apex.jpg",
  description:
    "Apex follows a dangerous mission in which a skilled fighter must survive against powerful opponents. With threats coming from every direction, he must rely on his abilities and determination to stay alive.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "118-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/h0rn7ho2y946",
      downloadUrl:
        "https://www.mediafire.com/file/l5zv71x87vma5a0/APEX+-+SIKOV.mp4.mp4/file",
    },
  ],
},

{
  id: "119",
  title: "Wuxia",
  slug: "wuxia",
  year: "2011",
  rating: "8.0",
  image: "wuxia.jpg",
  description:
    "Wuxia follows a skilled fighter whose quiet life is disrupted when his mysterious past begins to surface. As investigators and dangerous enemies close in, he must reveal his abilities and fight to protect himself and his family.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "119-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/kj49r5ylstho",
      downloadUrl:
        "https://www.mediafire.com/file/e8i3qgda2kdig4p/Wuxia_Hd.mp4/file",
    },
  ],
},

{
  id: "120",
  title: "The Debt Collector",
  slug: "the-debt-collector",
  year: "2018",
  rating: "8.0",
  image: "the-debt-collector.jpg",
  description:
    "The Debt Collector follows a martial arts expert who takes a job collecting debts for a powerful organization. What seems like ordinary work quickly becomes dangerous as he encounters criminals, violent opponents, and unexpected threats.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "120-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://vibuxer.com/2o7padcb2fz8",
      downloadUrl:
        "https://www.mediafire.com/file/btqlbwsr1t344qu/The_Debt_Collector.mp4/file",
    },
  ],
},

{
  id: "121",
  title: "Ong Bak 2",
  slug: "ong-bak-2",
  year: "2008",
  rating: "8.0",
  image: "ong-bak-2.jpg",
  description:
    "Ong Bak 2 follows a young warrior who seeks revenge after suffering a devastating loss. He trains in different fighting styles and faces powerful enemies while developing into a formidable fighter.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "121-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/hpyn0kcp1mxc",
      downloadUrl:
        "https://www.mediafire.com/file/vgym5l2t51j6jbb/Ong+Bak+2+Hd.mp4/file",
    },
  ],
},

{
  id: "122",
  title: "Infinite",
  slug: "infinite",
  year: "2021",
  rating: "8.0",
  image: "infinite.jpg",
  description:
    "Infinite follows a man who discovers that his strange memories are connected to past lives and an ancient conflict. As powerful enemies hunt him, he must unlock his abilities and join others in a battle that could affect the future.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "122-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://hanerix.com/vchq0u5grijp",
      downloadUrl:
        "https://www.mediafire.com/file/qbuppq2pni5u30k/INFINITE.mp4/file",
    },
  ],
},

{
  id: "123",
  title: "Protector",
  slug: "protector",
  year: "2026",
  rating: "8.0",
  image: "protector.jpg",
  description:
    "Protector follows a determined fighter who takes on a dangerous mission to protect someone from powerful enemies. As the threats increase, he must use his skills, courage, and experience to overcome the people standing in his way.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "123-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/gsjll0zwatw0",
      downloadUrl:
        "https://www.mediafire.com/file/aa7wil0bo19bxnz/PROTECTOR.mp4/file",
    },
  ],
},

{
  id: "124",
  title: "Savior",
  slug: "savior",
  year: "2026",
  rating: "8.0",
  image: "savior.jpg",
  description:
    "Savior follows a courageous character who becomes responsible for protecting others during a dangerous conflict. Facing powerful enemies and difficult situations, he must fight to keep those around him safe.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "124-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/xl62gh2c72yn",
      downloadUrl:
        "https://www.mediafire.com/file/9xybgb3r9uqykyj/Savior+Hd.mp4/file",
    },
  ],
},

{
  id: "125",
  title: "Gladiator",
  slug: "gladiator",
  year: "2000",
  rating: "8.0",
  image: "gladiator.jpg",
  description:
    "Gladiator follows a respected Roman general who is betrayed and forced into slavery after a political struggle. He becomes a powerful gladiator and fights through brutal arenas while seeking justice and confronting the people responsible for destroying his life.",
  language: "English",
  genres: ["Action"],
  isFeatured: true,
  createdAt: "2026-10-03",
  parts: [
    {
      id: "125-1",
      partNumber: 1,
      title: "Part 1",
      streamUrl: "https://audinifer.com/bvw3iymrplij",
      downloadUrl:
        "https://www.mediafire.com/file/ww704svxwnt6g7c/GLADIATOR.mp4/file",
    },
  ],
},
];
