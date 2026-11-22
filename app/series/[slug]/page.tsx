
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { getSeriesSummaries, series } from "@/data/series";
import { movies } from "@/data/movies";
import { getExplainerImage } from "@/app/lib/explainers";
import MovieCard from "@/app/components/MovieCard";
import { createOpenGraphMetadata } from "@/app/seo";
import TrailerPlayer from "@/app/components/TrailerPlayer";
import { DetailViewTracker, ViewCount } from "@/app/components/CatalogFeatures";
import MomoSupport from "@/app/components/MomoSupport";
import ExpandableDescription from "@/app/components/ExpandableDescription";
import { selectRecommendations } from "@/lib/recommendations";

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

  const title = currentSeries.title;
  const openGraphTitle = `${currentSeries.title} | OSHAKUR MOVIES`;
  const description = `Explore ${currentSeries.title} on OSHAKUR MOVIES and find episodes to watch.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://oshakurmovies.party/series/${currentSeries.slug}`,
    },
    openGraph: createOpenGraphMetadata(
      `/series/${currentSeries.slug}`,
      openGraphTitle,
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

  const seriesEpisodes = currentSeries.episodes;

  function getEpisodeDisplayTitle(title: string, seriesTitle: string, episodeNumber: number) {
    let specificTitle = title.trim();
    seriesTitle = seriesTitle.trim();
    if (specificTitle.toLowerCase().startsWith(seriesTitle.toLowerCase())) {
      specificTitle = specificTitle.slice(seriesTitle.length).trim().replace(/^[-:–—]\s*/, "");
    }
    specificTitle = specificTitle
      .replace(new RegExp(`^Episode\\s+0?${episodeNumber}\\b\\s*[-:–—]?\\s*`, "i"), "")
      .trim();
    return specificTitle
      ? `Episode ${episodeNumber} — ${specificTitle}`
      : `Episode ${episodeNumber}`;
  }

  const recommendations = selectRecommendations([
    ...series.map((item) => ({ ...item, type: "series" as const })),
    ...movies.map((item) => ({ ...item, type: "movie" as const })),
  ], currentSeries, "series");

  return (
    <main className="cinema-page min-h-screen text-white">
      <DetailViewTracker contentType="series" slug={currentSeries.slug} />
      <Navbar series={getSeriesSummaries()} />
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex min-w-0 items-center gap-2 overflow-hidden text-sm text-[#999]"><Link href="/" className="shrink-0 hover:text-white">Home</Link><span>/</span><Link href="/series" className="shrink-0 hover:text-white">Series</Link><span>/</span><span aria-current="page" className="truncate text-white">{currentSeries.title}</span></nav>
      </div>
      <TrailerPlayer trailer={currentSeries.trailer} info={{ type: "series", title: currentSeries.title, image: currentSeries.image, year: currentSeries.year, genres: currentSeries.genres, language: currentSeries.language, rating: currentSeries.rating }} />
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <section className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:gap-7 sm:p-6 md:grid-cols-[minmax(150px,220px)_minmax(0,1fr)] md:items-start lg:p-8">
          <div className="mx-auto w-full max-w-[190px] md:max-w-none">
            <div className="media-poster"><img src={`/images/series/${currentSeries.image}`} alt={currentSeries.title} /></div>
          </div>
          <div className="min-w-0">
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">{currentSeries.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            {currentSeries.genres.map((genre) => <span key={genre} className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-semibold text-white">{genre}</span>)}
            <span className="rounded-full bg-[#E5A93B] px-3 py-1 text-xs font-bold text-black">{currentSeries.title.match(/season\s*\d+/i)?.[0] ?? "Series"}</span>
            <span className="text-[#AAA]">{currentSeries.year} · {currentSeries.language}</span>
            {currentSeries.rating && currentSeries.rating !== "N/A" && <span className="rounded-full bg-white/10 px-3 py-1 text-xs">★ {currentSeries.rating}</span>}
            <ViewCount contentType="series" slug={currentSeries.slug} />
            {currentSeries.explainer && <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><img src={getExplainerImage(currentSeries.explainer) || "/favicon.svg"} alt="" className="h-6 w-6 rounded-full object-cover" />{currentSeries.explainer}</span>}
            {currentSeries.createdAt && <span className="text-xs text-[#888]">Added {new Date(currentSeries.createdAt).toLocaleDateString()}</span>}
          </div>
          <ExpandableDescription description={currentSeries.description} className="mt-4" />
          </div>
        </section>
      </div>

      <div className="pb-8"><MomoSupport /></div>

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
                className="flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-[#191919] p-4 transition hover:border-white/20 sm:flex-row sm:items-center sm:p-5"
              >
                <h3 className="min-w-0 text-lg font-bold sm:text-xl">
                  {getEpisodeDisplayTitle(episode.title, currentSeries.title, episode.episodeNumber)}
                </h3>
                <div className="flex flex-wrap gap-2 sm:shrink-0 sm:justify-end">
                  {episode.streamUrl && (
                    <a
                      href={episode.streamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-[#E50914] px-5 py-2.5 font-semibold text-white transition hover:bg-[#FF2633]"
                    >
                      ▶ Watch
                    </a>
                  )}
                  {episode.downloadUrl && (
                    <a
                      href={episode.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                    >
                      ↓ Download
                    </a>
                  )}
                  {episode.alternateDownloadUrls?.map((downloadUrl, index) => (
                    <a
                      key={`${episode.id}-alternate-download-${index}`}
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                    >
                      ↓ Download {index + 2}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {recommendations.length > 0 && <aside><h2 className="cinema-section-title mb-4 text-2xl font-bold">More Films</h2><div className="catalog-card-grid">{recommendations.map((item) => <MovieCard key={`${item.type}-${item.id}`} title={item.title} year={item.year} rating={item.rating ?? ""} image={item.image} slug={item.slug} explainer={item.explainer} createdAt={item.createdAt} hrefPrefix={item.type === "series" ? "/series" : "/movies"} />)}</div></aside>}
      </div>

      <SiteBottom />
    </main>
  );
}
