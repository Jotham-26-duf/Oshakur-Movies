
import HomeClient from "./components/HomeClient";
import { movies } from "@/data/movies";
import { series } from "@/data/series";

export default function Home() {
  const featuredMovies = movies.filter((movie) => movie.isFeatured);
  const featuredSeries = series.filter((item) => item.isFeatured);

  return (
    <HomeClient
      movies={movies}
      series={series}
      featuredMovies={featuredMovies}
      featuredSeries={featuredSeries}
    />
  );
}

