import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MovieCard from "@/app/components/MovieCard";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { createOpenGraphMetadata } from "@/app/seo";
import { GENRE_SLUGS, genreFromSlug } from "@/data/genres";
import { movies } from "@/data/movies";
import { getSeriesSummaries } from "@/data/series";
import { getGenreCollection } from "@/app/lib/genreCollections";

type GenrePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.values(GENRE_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { slug } = await params;
  const genre = genreFromSlug(slug);
  if (!genre) return {};
  const title = `${genre} Movies & Series`;
  const description = `Browse ${genre.toLowerCase()} movies and series on OSHAKUR MOVIES.`;
  return {
    title,
    description,
    alternates: { canonical: `https://oshakurmovies.party/genre/${slug}` },
    openGraph: createOpenGraphMetadata(`/genre/${slug}`, `${title} | OSHAKUR MOVIES`, description),
  };
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { slug } = await params;
  const genre = genreFromSlug(slug);
  if (!genre) notFound();
  const genreEntries = getGenreCollection(movies, getSeriesSummaries(), genre);

  return <main className="cinema-page min-h-screen text-white">
    <Navbar series={getSeriesSummaries()} />
    <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-10 sm:px-6 lg:px-[5%]">
      <header className="mb-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E50914]">Genre collection</p><h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{genre} Movies &amp; Series</h1><p className="mt-2 text-sm text-white/55">{genreEntries.length} titles</p></header>
      {genreEntries.length ? <div className="catalog-card-grid">
        {genreEntries.map(({ type, item }) => <MovieCard key={`${type}-${item.id}`} title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} hrefPrefix={type === "movie" ? "/movies" : "/series"} explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} partCount={type === "movie" ? item.parts.length : undefined} />)}
      </div> : <p className="home-empty">No titles are currently tagged {genre}.</p>}
    </section>
    <SiteBottom />
  </main>;
}
