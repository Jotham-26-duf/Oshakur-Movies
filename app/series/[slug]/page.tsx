import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { episodes } from "@/data/episodes";
import { series } from "@/data/series";

interface SeriesDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
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

  const relatedSeries = series
    .filter((item) => item.slug !== currentSeries.slug)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentSeries.image}
            alt=""
            className="h-full w-full object-cover opacity-20 blur-sm"
          />

          <div className="absolute inset-0 bg-[#121212]/80" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[280px]">
              <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] shadow-2xl">
                <img
                  src={currentSeries.image}
                  alt={currentSeries.title}
                  className="aspect-[2/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00E5FF]">
                Series
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {currentSeries.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-[#AAAAAA]">
                  {currentSeries.year}
                </span>

                <span className="text-[#666666]">•</span>

                <span className="rounded-md bg-[#5C6BC0] px-3 py-1.5 text-xs font-semibold">
                  <span className="mr-1 text-[#FFC107]">★</span>
                  {currentSeries.rating}
                </span>

                <span className="text-[#666666]">•</span>

                <span className="text-[#AAAAAA]">
                  {currentSeries.language}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#AAAAAA] sm:text-base">
                {currentSeries.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Episodes
          </h2>

          <p className="mt-1 text-sm text-[#AAAAAA]">
            {seriesEpisodes.length}{" "}
            {seriesEpisodes.length === 1 ? "episode" : "episodes"}{" "}
            available for {currentSeries.title}.
          </p>
        </div>

        {seriesEpisodes.length > 0 ? (
          <div className="space-y-5">
            {seriesEpisodes.map((episode) => (
              <article
                key={episode.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B]"
              >
                <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                  <div className="bg-[#2A2A2A]">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="h-full min-h-[180px] w-full object-cover"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#00E5FF]">
                      Episode {episode.episodeNumber}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {episode.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#AAAAAA]">
                      {episode.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {episode.streamUrl ? (
                        <a
                          href={episode.streamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-[#2979FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E63D6]"
                        >
                          <span className="mr-2">▶</span>
                          Watch
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-[#2A2A2A] px-5 py-3 text-sm font-semibold text-[#666666]"
                        >
                          <span className="mr-2">▶</span>
                          Watch
                        </button>
                      )}

                      {episode.downloadUrl ? (
                        <a
                          href={episode.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                        >
                          <span className="mr-2">↓</span>
                          Download
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-[#2A2A2A] px-5 py-3 text-sm font-semibold text-[#666666]"
                        >
                          <span className="mr-2">↓</span>
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
            <p className="text-sm text-[#AAAAAA]">
              No episodes have been added yet.
            </p>
          </div>
        )}
      </section>

      {relatedSeries.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                More Series
              </h2>

              <p className="mt-1 text-sm text-[#AAAAAA]">
                Explore more series.
              </p>
            </div>

            <Link
              href="/series"
              className="shrink-0 text-sm font-semibold text-[#00E5FF] transition hover:text-white"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {relatedSeries.map((item) => (
              <Link
                key={item.id}
                href={`/series/${item.slug}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl bg-[#2A2A2A]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 truncate font-semibold transition group-hover:text-[#00E5FF]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[#AAAAAA]">
                  {item.year}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteBottom />
    </main>
  );
}