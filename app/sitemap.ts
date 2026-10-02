import type { MetadataRoute } from "next";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

const baseUrl = "https://oshakurmovies.party";

export default function sitemap(): MetadataRoute.Sitemap {
  const moviePages = movies.map((movie) => ({
    url: `${baseUrl}/movies/${movie.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const seriesPages = series.map((item) => ({
    url: `${baseUrl}/series/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/movies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/series`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...moviePages,
    ...seriesPages,
  ];
}