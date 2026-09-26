export interface Episode {
  id: string;
  seriesSlug: string;
  episodeNumber: number;
  title: string;
  description: string;
  streamUrl: string;
  downloadUrl: string;
}

export const episodes: Episode[] = [
  {
    id: "1",
    seriesSlug: "beauty-in-black",
    episodeNumber: 1,
    title: "Episode 1",
    description:
      "Wednesday begins her new life at Nevermore Academy.",
    streamUrl: "https://vibuxer.com/0g41asjxvwd9",
    downloadUrl: "https://www.mediafire.com/file/e6chl3zhlqp6drh/BEAUTY+IN+BLACK+S2+EP+01_.mp4/file",
  },
  {
    id: "2",
    seriesSlug: "beauty-in-black",
    episodeNumber: 2,
    title: "Episode 2",
    description:
      "Wednesday investigates the strange events surrounding Nevermore Academy.",
    streamUrl: "https://vibuxer.com/7xhn27rfj61o",
    downloadUrl: "https://www.mediafire.com/file/48yqk96kb9qumao/BEAUTY_IN_BLACK_S02E02.mp4/file",
  },
  {
    id: "3",
    seriesSlug: "beauty-in-black-season-2",
    episodeNumber: 1,
    title: "Episode 1",
    description:
      "Wednesday investigates the strange events surrounding Nevermore Academy.",
    streamUrl: "https://filemoon.org/de/0rpmvZNJmRgZ/file",
    downloadUrl: "https://www.mediafire.com/file/9qxlplnnsp9p79z/BEAUTY+IN+BLACK+S03+E01___.mp4/file",
  },
];