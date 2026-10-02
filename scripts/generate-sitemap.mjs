import fs from "fs";
import path from "path";

const baseUrl = "https://oshakurmovies.party";

const moviesFile = fs.readFileSync(
  path.join(process.cwd(), "data", "movies.ts"),
  "utf8"
);

const seriesFile = fs.readFileSync(
  path.join(process.cwd(), "data", "series.ts"),
  "utf8"
);

// Extract movie slugs from movies.ts
const movieSlugs = [
  ...moviesFile.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g),
].map((match) => match[1]);

// Extract series slugs from series.ts
const seriesSlugs = [
  ...seriesFile.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g),
].map((match) => match[1]);

const urls = [
  {
    url: baseUrl,
    changeFrequency: "daily",
    priority: "1.0",
  },
  {
    url: `${baseUrl}/movies`,
    changeFrequency: "daily",
    priority: "0.9",
  },
  {
    url: `${baseUrl}/series`,
    changeFrequency: "daily",
    priority: "0.9",
  },

  ...movieSlugs.map((slug) => ({
    url: `${baseUrl}/movies/${slug}`,
    changeFrequency: "weekly",
    priority: "0.8",
  })),

  ...seriesSlugs.map((slug) => ({
    url: `${baseUrl}/series/${slug}`,
    changeFrequency: "weekly",
    priority: "0.8",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(outputPath, xml, "utf8");

console.log("Sitemap generated successfully!");
console.log(`Total URLs: ${urls.length}`);
console.log(`Saved to: ${outputPath}`);