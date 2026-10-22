import type { Metadata } from "next";

export const siteUrl = "https://oshakurmovies.party/";
export const siteName = "OSHAKUR MOVIES";

const defaultOpenGraph = {
  title: "OSHAKUR MOVIES | Watch Agasobanye Movies & Series",
  description:
    "Watch and discover Agasobanuye movies and series online on OSHAKUR MOVIES.",
  siteName,
  type: "website" as const,
  locale: "en_US",
  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "OSHAKUR MOVIES — Watch Agasobanye Movies & Series",
    },
  ],
};

export const siteOpenGraph: Metadata["openGraph"] = defaultOpenGraph;

export function createOpenGraphMetadata(
  path: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    ...defaultOpenGraph,
    title,
    description,
    url: new URL(path, siteUrl).toString(),
  };
}
