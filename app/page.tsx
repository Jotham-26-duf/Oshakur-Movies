
import HomeClient from "./components/HomeClient";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

export default function Home() {
  return (
    <HomeClient
      movies={movies}
      series={series}
    />
  );
}

