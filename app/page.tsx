
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
  return (
    <HomeClient
      movies={movies}
      series={series}
    />
  );
}

