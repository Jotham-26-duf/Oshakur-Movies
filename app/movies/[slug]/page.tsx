
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import MovieCard from "@/app/components/MovieCard";
import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { getExplainerImage } from "@/app/lib/explainers";
import CommentsSection from "@/app/components/CommentsSection";
import { createOpenGraphMetadata } from "@/app/seo";

interface MovieDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: MovieDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const movie = movies.find((item) => item.slug === slug);

  if (!movie) {
    return {};
  }

  const title = movie.title;
  const openGraphTitle = `${movie.title} | OSHAKUR MOVIES`;
  const description = `Watch ${movie.title} on OSHAKUR MOVIES.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://oshakurmovies.party/movies/${movie.slug}`,
    },
    openGraph: createOpenGraphMetadata(
      `/movies/${movie.slug}`,
      openGraphTitle,
      description,
    ),
  };
}

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { slug } = await params;

  const movie = movies.find((item) => item.slug === slug);

  if (!movie) {
    notFound();
  }

  const recommendations = [
    ...movies.filter((item) => item.slug !== movie.slug).map((item) => ({...item, type: "movie" as const})),
    ...series.map((item) => ({...item, type: "series" as const})),
  ].sort((a,b) => Number(b.genres?.some((genre) => movie.genres.includes(genre))) - Number(a.genres?.some((genre) => movie.genres.includes(genre))) || Number(b.explainer?.trim().toLowerCase() === movie.explainer?.trim().toLowerCase()) - Number(a.explainer?.trim().toLowerCase() === movie.explainer?.trim().toLowerCase()) || (b.createdAt ?? "").localeCompare(a.createdAt ?? "")).slice(0, 6);

  const isSinglePart = movie.parts.length === 1;
  const singlePart = movie.parts[0];

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex min-w-0 items-center gap-2 overflow-hidden text-sm text-[#999]">
          <Link href="/" className="shrink-0 hover:text-white">Home</Link><span>/</span><Link href="/movies" className="shrink-0 hover:text-white">Movies</Link><span>/</span><span aria-current="page" className="truncate text-white">{movie.title}</span>
        </nav>
        <section>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl">
            <img src={`/images/movies/${movie.image}`} alt={movie.title} fetchPriority="high" className="h-[260px] w-full object-cover opacity-85 sm:h-[380px] lg:h-[480px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/35 to-black/5" />
            {singlePart?.streamUrl && <a href={singlePart.streamUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${movie.title}`} className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#E50914] text-2xl shadow-xl transition hover:scale-105 hover:bg-[#FF2633]">▶</a>}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8"><p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#E50914]">Movie</p><h1 className="text-3xl font-black tracking-tight sm:text-5xl">{movie.title}</h1></div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            {movie.genres.map((genre) => <span key={genre} className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-semibold text-white">{genre}</span>)}
            <span className="text-[#AAA]">{movie.year} · {movie.language}</span>
            {movie.rating && movie.rating !== "N/A" && <span className="rounded-full bg-white/10 px-3 py-1 text-xs">★ {movie.rating}</span>}
            {movie.explainer && <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><img src={getExplainerImage(movie.explainer) || "/favicon.svg"} alt="" className="h-6 w-6 rounded-full object-cover" />{movie.explainer}</span>}
            {movie.createdAt && <span className="text-xs text-[#888]">Added {new Date(movie.createdAt).toLocaleDateString()}</span>}
          </div>
          <div className="mt-9">
            <h2 className="cinema-section-title mb-4 text-xl font-bold sm:text-2xl">Watch / Download</h2>
            {isSinglePart ? (
              <div className="flex flex-wrap gap-3">
                {singlePart?.streamUrl && <a href={singlePart.streamUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#E50914] px-5 py-3 font-semibold text-white hover:bg-[#FF2633]">▶ Watch Now</a>}
                {singlePart?.downloadUrl && <a href={singlePart.downloadUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20">↓ Download</a>}
              </div>
            ) : (
              <div className="space-y-3">
                {movie.parts.map((part) => <div key={part.id} className="flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-[#191919] p-4 transition hover:border-white/20 sm:flex-row sm:items-center"><div><h3 className="font-semibold">{part.title}</h3><p className="mt-1 text-sm text-[#777]">Part {part.partNumber}</p></div><div className="flex flex-wrap gap-2">{part.streamUrl && <a href={part.streamUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#E50914] px-5 py-2.5 text-sm font-semibold hover:bg-[#FF2633]">▶ Watch</a>}{part.downloadUrl && <a href={part.downloadUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">↓ Download</a>}</div></div>)}
              </div>
            )}
          </div>
        </section>
      </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><h2 className="cinema-section-title text-2xl font-bold">Summary</h2><p className="mt-4 max-w-4xl text-sm leading-7 text-[#AAA] sm:text-base">{movie.description || "No summary is available for this title yet."}</p></section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)] lg:px-8">
        <div><CommentsSection movieSlug={movie.slug} /></div>
        {recommendations.length > 0 && <aside className="lg:sticky lg:top-28 lg:self-start"><h2 className="cinema-section-title mb-5 text-2xl font-bold">More Films</h2><div className="grid grid-cols-2 gap-4">{recommendations.map((item) => <MovieCard key={`${item.type}-${item.id}`} title={item.title} year={item.year} rating={item.rating ?? ""} image={item.image} slug={item.slug} explainer={item.explainer} createdAt={item.createdAt} hrefPrefix={item.type === "series" ? "/series" : "/movies"} />)}</div></aside>}
      </div>

      <SiteBottom />
    </main>
  );
}
