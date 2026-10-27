
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { createOpenGraphMetadata, siteName, siteUrl } from "./seo";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  openGraph: createOpenGraphMetadata(
    "/",
    "OSHAKUR MOVIES | Watch Agasobanye Movies & Series",
    "Watch and discover Agasobanuye movies and series online on OSHAKUR MOVIES.",
  ),
};

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "Oshakur Movies",
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeClient movies={movies} series={series} />
    </>
  );
}

