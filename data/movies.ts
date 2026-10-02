
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

];
