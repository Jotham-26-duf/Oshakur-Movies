"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import SiteBottom from "./SiteBottom";
import Navbar from "./Navbar";
import { getCanonicalExplainerName, getExplainerImage, normalizeExplainerName } from "../lib/explainers";
import type { Movie } from "@/data/movies";
import type { SeriesSummary } from "@/data/series";
import { GENRE_SECTION_ORDER, GENRE_SLUGS, type Genre } from "@/data/genres";
import { sortGenreEntriesNewestFirst } from "../lib/genreCollections";

type HomeSeries = SeriesSummary & { episodeCount: number };
type HomeClientProps = { movies: Movie[]; series: readonly HomeSeries[] };
type CatalogEntry = { type: "movie"; item: Movie } | { type: "series"; item: HomeSeries };
type Explainer = { key: string; name: string; movies: Movie[]; series: HomeSeries[] };


function getInitials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0).toUpperCase()).join("");
}

function newestFirst<T extends { createdAt: string }>(items: readonly T[]) {
  return [...items].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

function SectionHeading({ title, href, subtitle }: { title: string; href?: string; subtitle?: string }) {
  return <div className="home-section-heading"><div><h2 className="cinema-section-title">{title}</h2>{subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}</div>{href && <Link href={href} className="shrink-0 text-sm font-semibold text-[#E50914] transition hover:text-white">View More <span aria-hidden="true">→</span></Link>}</div>;
}

function CardRow({ entries, onExplainerClick, ranked = false }: { entries: CatalogEntry[]; onExplainerClick?: (name: string) => void; ranked?: boolean }) {
  if (!entries.length) return <p className="home-empty">No titles available in this collection yet.</p>;
  return <div className="home-card-row">{entries.map(({ type, item }, index) => <div className="home-card-slot" key={`${type}-${item.id}`}>{ranked && <span className="home-rank" aria-label={`Rank ${index + 1}`}>{index + 1}</span>}<MovieCard title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} hrefPrefix={type === "series" ? "/series" : "/movies"} explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} partCount={type === "movie" ? item.parts.length : undefined} episodeCount={type === "series" ? (item as HomeSeries).episodeCount : undefined} onExplainerClick={onExplainerClick} /></div>)}</div>;
}

export default function HomeClient({ movies, series: seriesSummaries }: HomeClientProps) {
  const [selectedExplainer, setSelectedExplainer] = useState<string | null>(null);
  const allSeries = useMemo(() => seriesSummaries as readonly HomeSeries[], [seriesSummaries]);
  const movieEntries = useMemo(() => movies.map((item) => ({ type: "movie" as const, item })), [movies]);
  const seriesEntries = useMemo(() => allSeries.map((item) => ({ type: "series" as const, item })), [allSeries]);
  const allEntries = useMemo(() => [...movieEntries, ...seriesEntries], [movieEntries, seriesEntries]);
  const recent = useMemo(() => newestFirst(allEntries.map((entry) => ({ ...entry, key: `${entry.type}:${entry.item.id}`, createdAt: entry.item.createdAt }))).filter((entry, index, arr) => arr.findIndex((other) => other.key === entry.key) === index).slice(0, 12), [allEntries]);
  const trending = useMemo(() => {
    const featured = allEntries.filter(({ item }) => item.isFeatured);
    return newestFirst(featured.map((entry) => ({ ...entry, createdAt: entry.item.createdAt }))).slice(0, 12);
  }, [allEntries]);
  const mostViewed = useMemo(() => newestFirst(movies.filter((movie) => typeof movie.views === "number").map((item) => ({ type: "movie" as const, item, views: item.views!, createdAt: item.createdAt }))).sort((a, b) => b.views - a.views).slice(0, 10), [movies]);

  const explainers = useMemo(() => {
    const map = new Map<string, Explainer>();
    const ensure = (name: string) => {
      const key = normalizeExplainerName(name);
      if (!map.has(key)) map.set(key, { key, name: getCanonicalExplainerName(name), movies: [], series: [] });
      return map.get(key)!;
    };
    movies.forEach((movie) => { const name = movie.explainer?.trim(); if (name) ensure(name).movies.push(movie); });
    allSeries.forEach((item) => { const name = item.explainer?.trim(); if (name) ensure(name).series.push(item); });
    return [...map.values()].sort((a, b) => b.movies.length - a.movies.length || a.name.localeCompare(b.name));
  }, [movies, allSeries]);
  const activeExplainer = explainers.find((item) => item.key === selectedExplainer);
  const heroItems = useMemo(() => allEntries.filter(({ item }) => item.isFeatured).slice(0, 8).map(({ type, item }) => ({ ...item, type, language: item.language ?? "", genres: item.genres ?? [] })), [allEntries]);

  return <main className="cinema-page min-h-screen text-white">
    <Navbar series={seriesSummaries} />
    <Hero items={heroItems} />
    <div className="home-collections">
      <section><SectionHeading title="Trending" href="/trending" /><CardRow entries={trending} onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /></section>
      <section><SectionHeading title="Recent" href="/movies" subtitle="The newest uploads across movies and series." /><CardRow entries={recent} onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /></section>
      <section><SectionHeading title="Top 10 Movies Everyone Is Watching This Week" subtitle="Ranked by recorded catalogue views (all time)." /><CardRow entries={mostViewed} ranked onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /></section>
      <section><SectionHeading title="Seasons" href="/series" /><CardRow entries={newestFirst(seriesEntries.map((entry) => ({ ...entry, createdAt: entry.item.createdAt }))).slice(0, 12)} onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /></section>
      <section id="abasobanuzi"><SectionHeading title="Abasobanuzi" /><div className="explainer-list">{explainers.length ? explainers.map((person) => <button key={person.key} type="button" className="explainer-card" onClick={() => setSelectedExplainer(person.key)}>{getExplainerImage(person.name) ? <img src={getExplainerImage(person.name)} alt="" /> : <span className="explainer-initials">{getInitials(person.name)}</span>}<span className="explainer-name">{person.name}</span><span className="explainer-count">{person.movies.length} {person.movies.length === 1 ? "movie" : "movies"}</span></button>) : <p className="home-empty">Narrator details will appear when they are available.</p>}</div></section>
      {GENRE_SECTION_ORDER.map((genre: Genre) => {
        const matches = sortGenreEntriesNewestFirst(allEntries.filter(({ item }) => item.genres.includes(genre)));
        if (!matches.length) return null;
        return <section key={genre}><SectionHeading title={genre} href={`/genre/${GENRE_SLUGS[genre]}`} /><CardRow entries={matches.slice(0, 12)} onExplainerClick={(name) => setSelectedExplainer(normalizeExplainerName(name))} /></section>;
      })}
    </div>
    {activeExplainer && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4" onClick={() => setSelectedExplainer(null)}><section role="dialog" aria-modal="true" aria-label={`${activeExplainer.name} narrator profile`} className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#101010] p-6" onClick={(event) => event.stopPropagation()}><button type="button" className="float-right text-white/60 hover:text-white" onClick={() => setSelectedExplainer(null)} aria-label="Close narrator profile">✕</button><h2 className="text-xl font-bold">{activeExplainer.name}</h2><p className="mt-2 text-sm text-white/60">{activeExplainer.movies.length} associated movies</p><div className="mt-5 max-h-[55vh] space-y-2 overflow-y-auto">{activeExplainer.movies.map((movie) => <Link key={movie.id} href={`/movies/${movie.slug}`} onClick={() => setSelectedExplainer(null)} className="block rounded-lg border border-white/10 p-3 text-sm hover:border-[#E50914]/50">{movie.title}</Link>)}{activeExplainer.series.map((item) => <Link key={item.id} href={`/series/${item.slug}`} onClick={() => setSelectedExplainer(null)} className="block rounded-lg border border-white/10 p-3 text-sm hover:border-[#E50914]/50">{item.title} <span className="text-white/50">(series)</span></Link>)}</div></section></div>}
    <SiteBottom />
  </main>;
}
