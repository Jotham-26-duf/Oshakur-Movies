
import fs from "fs";
import path from "path";

const baseUrl = "https://oshakurmovies.party";

// Read the existing movie and series data files.
const moviesFile = fs.readFileSync(
  path.join(process.cwd(), "data", "movies.ts"),
  "utf8"
);

const seriesFile = fs.readFileSync(
  path.join(process.cwd(), "data", "series.ts"),
  "utf8"
);

// Extract slugs such as:
// slug: "let-it-shine"
// slug: 'outer-banks'
// slug: `kung-fu-panda`
function extractSlugs(fileContent, fileName) {
  const matches = [
    ...fileContent.matchAll(/\bslug\s*:\s*["'`]([^"'`]*)["'`]/g),
  ];

  const slugs = matches.map((match) => match[1]);

  const invalidSlugs = slugs.filter(
    (slug) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug),
  );

  if (invalidSlugs.length > 0) {
    throw new Error(
      `${fileName}: invalid URL slug(s): ${invalidSlugs.map((slug) => JSON.stringify(slug)).join(", ")}`,
    );
  }

  // Remove duplicate slugs while preserving their original order.
  const uniqueSlugs = [...new Set(slugs)];

  console.log(`${fileName}: ${slugs.length} slug entries found`);
  console.log(`${fileName}: ${uniqueSlugs.length} unique slugs`);

  return uniqueSlugs;
}

const movieSlugs = extractSlugs(moviesFile, "Movies");
const seriesSlugs = extractSlugs(seriesFile, "Series");

// Build the sitemap URLs.
const urls = [
  `${baseUrl}/`,
  `${baseUrl}/movies`,
  `${baseUrl}/series`,
  `${baseUrl}/trending`,

  ...["1", "2", "3", "4", "5", "6"].map(
    (categoryId) => `${baseUrl}/category/${categoryId}`,
  ),

  ...movieSlugs.map((slug) => `${baseUrl}/movies/${slug}`),
  ...seriesSlugs.map((slug) => `${baseUrl}/series/${slug}`),
];

// Remove duplicate URLs.
const uniqueUrls = [...new Set(urls)];

// Escape special XML characters.
function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Generate valid XML sitemap content.
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// Save the generated sitemap.
const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(outputPath, xml, "utf8");

console.log("\nSitemap generated successfully!");
console.log(`Total URLs: ${uniqueUrls.length}`);
console.log(`Saved to: ${outputPath}`);
