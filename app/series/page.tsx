import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { series } from "@/data/series";

export default function SeriesPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00E5FF]">
            Oshakur Movies
          </p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold sm:text-4xl">
                All Series
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#AAAAAA]">
                Explore our collection of series and discover your next
                favorite show.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-[#1B1B1B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
            >
              ← Home
            </Link>
          </div>
        </div>

        {series.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {series.map((item) => (
              <Link
                key={item.id}
                href={`/series/${item.slug}`}
                className="group block min-w-0"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                  <img
                    src={`/images/series/${item.image}`}
                    alt={item.title}
                    className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/60">
                    <div className="scale-0 rounded-full bg-[#2979FF] p-4 text-white shadow-xl transition duration-300 group-hover:scale-100">
                      <span className="text-lg">▶</span>
                    </div>
                  </div>
                </div>

                <h2 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                  {item.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="text-[#AAAAAA]">{item.year}</span>

                  <span className="text-[#AAAAAA]">•</span>

                  <span className="flex items-center gap-1 rounded-md bg-[#5C6BC0] px-2 py-1 text-xs font-semibold">
                    <span className="text-[#FFC107]">★</span>
                    {item.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] px-6 py-16 text-center">
            <h2 className="text-xl font-bold">No series found</h2>

            <p className="mt-2 text-sm text-[#AAAAAA]">
              There are currently no series available.
            </p>
          </div>
        )}
      </section>

      <SiteBottom />
    </main>
  );
}