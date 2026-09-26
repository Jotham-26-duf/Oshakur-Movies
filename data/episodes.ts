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
      "The story begins with new challenges, relationships, and unexpected events.",
    streamUrl: "https://vibuxer.com/0g41asjxvwd9",
    downloadUrl:
      "https://www.mediafire.com/file/e6chl3zhlqp6drh/BEAUTY+IN+BLACK+S2+EP+01_.mp4/file",
  },

  {
    id: "2",
    seriesSlug: "beauty-in-black",
    episodeNumber: 2,
    title: "Episode 2",
    description:
      "The story continues as new conflicts and unexpected events unfold.",
    streamUrl: "https://vibuxer.com/7xhn27rfj61o",
    downloadUrl:
      "https://www.mediafire.com/file/48yqk96kb9qumao/BEAUTY_IN_BLACK_S02E02.mp4/file",
  },

  {
    id: "3",
    seriesSlug: "beauty-in-black-season-2",
    episodeNumber: 1,
    title: "Episode 1",
    description:
      "The second season continues with new challenges, conflicts, and unexpected events.",
    streamUrl: "https://filemoon.org/de/0rpmvZNJmRgZ/file",
    downloadUrl:
      "https://www.mediafire.com/file/9qxlplnnsp9p79z/BEAUTY+IN+BLACK+S03+E01___.mp4/file",
  },

  {
    id: "4",
    seriesSlug: "treadstone",
    episodeNumber: 1,
    title: "Episode 1",
    description:
      "The story follows covert operatives connected to a secret government program.",
    streamUrl: "",
    downloadUrl:
      "https://www.mediafire.com/file/2q88edic2tdare5/Treadstone+Ep1.mp4/file",
  },
];