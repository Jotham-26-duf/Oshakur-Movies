import Link from "next/link";
import { notFound } from "next/navigation";
import { FiDownload, FiPlay } from "react-icons/fi";

import CommentsSection from "@/app/components/CommentsSection";
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

      {/* Series Hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={`/images/series/${currentSeries.image}`}
            alt={currentSeries.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
            {/* Series Poster */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={`/images/series/${currentSeries.image}`}
                alt={currentSeries.title}
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            {/* Series Information */}
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#00E5FF]">
                Series
              </p>

              <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
                {currentSeries.title}
              </h1>

              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <span>{currentSeries.year}</span>

                <span>•</span>

                <span>★ {currentSeries.rating}</span>

                <span>•</span>

                <span>{currentSeries.language}</span>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {currentSeries.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-200"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                {currentSeries.description}
              </p>

              <a
                href="#episodes"
                className="inline-flex items-center rounded-lg bg-[#00E5FF] px-6 py-3 font-semibold text-black transition hover:bg-[#00cfe8]"
              >
                View Episodes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section
        id="episodes"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Episodes
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
          <div className="space-y-5">
            {seriesEpisodes.map((episode) => (
              <article
                key={episode.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] transition hover:border-white/20"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Series image used for every episode */}
                  <div className="overflow-hidden">
                    <img
                      src={`/images/series/${currentSeries.image}`}
                      alt={currentSeries.title}
                      className="h-full min-h-[180px] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#00E5FF]">
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
                        className="inline-flex items-center gap-2 rounded-lg bg-[#00E5FF] px-5 py-2.5 font-semibold text-black transition hover:bg-[#00cfe8]"
                      >
                        <FiPlay
                          size={17}
                          aria-hidden="true"
                        />
                        Watch
                      </a>

                      <a
                        href={episode.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                      >
                        <FiDownload
                          size={17}
                          aria-hidden="true"
                        />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Comments */}
      <CommentsSection seriesSlug={currentSeries.slug} />

      {/* Related Series */}
      {relatedSeries.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              More Series
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {relatedSeries.map((item) => (
              <Link
                key={item.id}
                href={`/series/${item.slug}`}
                className="group overflow-hidden rounded-lg bg-[#1b1b1b]"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={`/images/series/${item.image}`}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <h3 className="truncate font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteBottom />
    </main>
  );
}