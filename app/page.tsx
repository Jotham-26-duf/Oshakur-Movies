
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://oshakurmovies.party/",
  },
};

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OSHAKUR MOVIES",
    alternateName: "Oshakur Movies",
    url: "https://oshakurmovies.party/",
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

