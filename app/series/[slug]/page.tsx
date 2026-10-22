
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { episodes } from "@/data/episodes";
import { series } from "@/data/series";
import { movies } from "@/data/movies";
import { getExplainerImage } from "@/app/lib/explainers";
import MovieCard from "@/app/components/MovieCard";
import CommentsSection from "@/app/components/CommentsSection";
import { createOpenGraphMetadata } from "@/app/seo";

interface SeriesDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SeriesDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const currentSeries = series.find((item) => item.slug === slug);

  if (!currentSeries) {
    return {};
  }

  const title = `${currentSeries.title} | OSHAKUR MOVIES`;
  const description = `Explore ${currentSeries.title} on OSHAKUR MOVIES and find episodes to watch.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://oshakurmovies.party/series/${currentSeries.slug}`,
    },
    openGraph: createOpenGraphMetadata(
      `/series/${currentSeries.slug}`,
      title,
      description,
    ),
  };
}

export default async function SeriesDetailsPage({
  params,
}: SeriesDetailsPageProps) {
  const { slug } = await params;

  const currentSeries = series.find((item) => item.slug === slug);

  if (!currentSeries) {
    notFound();
  }

  const seriesEpisodes = episodes
    .filter((episode) => episode.seriesSlug === currentSeries.slug)
    .sort((a, b) => a.episodeNumber - b.episodeNumber);

  const recommendations = [
    ...series.filter((item) => item.slug !== currentSeries.slug).map((item) => ({...item, type: "series" as const})),
    ...movies.map((item) => ({...item, type: "movie" as const})),
  ].sort((a,b) => Number(b.genres?.some((genre) => currentSeries.genres.includes(genre))) - Number(a.genres?.some((genre) => currentSeries.genres.includes(genre))) || Number(b.explainer?.trim().toLowerCase() === currentSeries.explainer?.trim().toLowerCase()) - Number(a.explainer?.trim().toLowerCase() === currentSeries.explainer?.trim().toLowerCase()) || (b.createdAt ?? "").localeCompare(a.createdAt ?? "")).slice(0, 6);

  return (
    <main className="cinema-page min-h-screen text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex min-w-0 items-center gap-2 overflow-hidden text-sm text-[#999]"><Link href="/" className="shrink-0 hover:text-white">Home</Link><span>/</span><Link href="/series" className="shrink-0 hover:text-white">Series</Link><span>/</span><span aria-current="page" className="truncate text-white">{currentSeries.title}</span></nav>
        <section>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl">
            <img src={`/images/series/${currentSeries.image}`} alt={currentSeries.title} fetchPriority="high" className="h-[260px] w-full object-cover opacity-85 sm:h-[380px] lg:h-[480px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/35 to-black/5" />
            {seriesEpisodes[0]?.streamUrl && <a href={seriesEpisodes[0].streamUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${currentSeries.title}`} className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#E50914] text-2xl shadow-xl shadow-red-950/60 transition hover:scale-105 hover:bg-[#FF2633]">▶</a>}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8"><p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#E50914]">Series</p><h1 className="text-3xl font-black tracking-tight sm:text-5xl">{currentSeries.title}</h1></div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            {currentSeries.genres.map((genre) => <span key={genre} className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-semibold text-white">{genre}</span>)}
            <span className="rounded-full bg-[#E5A93B] px-3 py-1 text-xs font-bold text-black">{currentSeries.title.match(/season\s*\d+/i)?.[0] ?? "Series"}</span>
            <span className="text-[#AAA]">{currentSeries.year} · {currentSeries.language}</span>
            {currentSeries.rating && currentSeries.rating !== "N/A" && <span className="rounded-full bg-white/10 px-3 py-1 text-xs">★ {currentSeries.rating}</span>}
            {currentSeries.explainer && <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><img src={getExplainerImage(currentSeries.explainer) || "/favicon.svg"} alt="" className="h-6 w-6 rounded-full object-cover" />{currentSeries.explainer}</span>}
            {currentSeries.createdAt && <span className="text-xs text-[#888]">Added {new Date(currentSeries.createdAt).toLocaleDateString()}</span>}
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#AAA] sm:text-base">{currentSeries.description || "No summary is available for this title yet."}</p>
        </section>
      </div>


      {/* Episodes */}
      <section
        id="episodes"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Watch / Download
          </h2>

          <p className="mt-2 text-gray-400">
            Watch or download episodes of {currentSeries.title}.
          </p>
        </div>

        {seriesEpisodes.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-gray-400">
              No episodes available yet.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {seriesEpisodes.map((episode) => (
              <article
                key={episode.id}
                className="rounded-xl border border-white/10 bg-[#191919] p-4 transition hover:border-white/20 sm:p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#E50914]">
                        Episode {episode.episodeNumber}
                      </p>

                      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                        {episode.title}
                      </h3>

                      <p className="leading-6 text-gray-400">
                        {episode.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={episode.streamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#E50914] px-5 py-2.5 font-semibold text-white transition hover:bg-[#FF2633]"
                      >
                        ▶ Watch
                      </a>

                      <a
                        href={episode.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                      >
                        ↓ Download
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)] lg:px-8">
        <div><CommentsSection seriesSlug={currentSeries.slug} /></div>
        {recommendations.length > 0 && <aside className="lg:sticky lg:top-28 lg:self-start"><h2 className="cinema-section-title mb-5 text-2xl font-bold">More Films</h2><div className="grid grid-cols-2 gap-4">{recommendations.map((item) => <MovieCard key={`${item.type}-${item.id}`} title={item.title} year={item.year} rating={item.rating ?? ""} image={item.image} slug={item.slug} explainer={item.explainer} createdAt={item.createdAt} hrefPrefix={item.type === "series" ? "/series" : "/movies"} />)}</div></aside>}
      </div>

      <SiteBottom />
    </main>
  );
}
