export interface Episode {
  id: string;
  seriesSlug: string;
  episodeNumber: number;
  title: string;
  description: string;
  image: string;
  streamUrl: string;
  downloadUrl: string;
}

export const episodes: Episode[] = [
  {
    id: "stranger-things-1",
    seriesSlug: "stranger-things",
    episodeNumber: 1,
    title: "Chapter One",
    description:
      "A young boy disappears, and his friends begin searching for him while strange events unfold in their town.",
    image:
      "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    streamUrl: "https://hanerix.com/1fj7d86277le",
    downloadUrl:
      "https://www.mediafire.com/file/jwqeex6rmckhzol/Ad_The_Bible_Continues_Ep1_Hd_Mp4.mp4/file",
  },
];