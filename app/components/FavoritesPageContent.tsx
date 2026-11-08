"use client";

import Link from "next/link";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import MovieCard from "./MovieCard";
import { FavoriteButton, ViewCount, useCatalog } from "./CatalogFeatures";

export default function FavoritesPageContent() {
  const catalog = useCatalog();
  const favorites = catalog?.favorites ?? new Set<string>();
  const ready = catalog?.ready ?? false;
  const savedMovies = movies.filter((movie) => favorites.has(`movie:${movie.slug}`));
  const savedSeries = series.filter((item) => favorites.has(`series:${item.slug}`));
  return <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-[5%]"><nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-[#888]"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span aria-current="page">Favorites</span></nav><h1 className="mb-7 text-3xl font-extrabold">My Favorites</h1>{!ready ? <p className="text-white/60">Loading favorites…</p> : catalog?.loadError ? <div role="alert" className="rounded-xl border border-red-300/20 bg-red-950/30 p-6 text-red-100">Favorites could not be loaded. <button type="button" onClick={catalog.retryLoad} className="ml-2 underline underline-offset-2">Try again</button></div> : savedMovies.length + savedSeries.length === 0 ? <p className="rounded-xl border border-white/10 bg-white/5 p-8 text-white/60">Your saved movies and series will appear here.</p> : <div className="media-grid">{savedMovies.map((item) => <MovieCard key={`movie:${item.slug}`} title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} />)}{savedSeries.map((item) => <article key={`series:${item.slug}`} className="cinema-card group relative min-w-0"><Link href={`/series/${item.slug}`} className="block"><div className="media-poster relative"><img src={`/images/series/${item.image}`} alt={item.title} loading="lazy"/><span className="media-play" aria-hidden="true">▶</span></div><h2 className="media-title">{item.title}</h2></Link><FavoriteButton contentType="series" slug={item.slug}/><div className="px-2 pt-1"><ViewCount contentType="series" slug={item.slug}/></div></article>)}</div>}</section>;
}
