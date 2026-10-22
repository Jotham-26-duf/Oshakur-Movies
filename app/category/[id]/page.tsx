import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { series } from "@/data/series";
import { createOpenGraphMetadata } from "@/app/seo";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Action",
  },
  {
    id: "2",
    name: "Adventure",
  },
  {
    id: "3",
    name: "Comedy",
  },
  {
    id: "4",
    name: "Drama",
  },
  {
    id: "5",
    name: "Romance",
  },
  {
    id: "6",
    name: "Thriller",
  },
];

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const category = categories.find((item) => item.id === id);

  if (!category) return {};

  const title = `${category.name} Movies & Series | OSHAKUR MOVIES`;
  const description = `Explore ${category.name.toLowerCase()} movies and series on OSHAKUR MOVIES.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://oshakurmovies.party/category/${category.id}`,
    },
    openGraph: createOpenGraphMetadata(
      `/category/${category.id}`,
      title,
      description,
    ),
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { id } = await params;

  const category = categories.find((item) => item.id === id);

  if (!category) {
    notFound();
  }

  const categoryMovies = movies.filter((movie) =>
    movie.genres.includes(category.name)
  );

  const categorySeries = series.filter((item) =>
    item.genres.includes(category.name)
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#AAAAAA] transition hover:text-[#00E5FF]"
          >
            ← Back Home
          </Link>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
            Category
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            {category.name}
          </h1>

          <p className="mt-2 text-sm text-[#AAAAAA]">
            Movies and series in the {category.name.toLowerCase()} category.
          </p>
        </div>

        {/* Movies */}
        {categoryMovies.length > 0 && (
          <section>
            <h2 className="mb-5 text-2xl font-bold">Movies</h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categoryMovies.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movies/${movie.slug}`}
                  className="group media-tile block min-w-0"
                >
                  <div className="media-tile-frame relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={`/images/movies/${movie.image}`}
                      alt={movie.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="media-tile-overlay pointer-events-none absolute inset-0 grid place-items-center bg-black/0 text-2xl text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">▶</span>

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                  </div>

                  <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                    {movie.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{movie.year}</span>

                    <span>•</span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#FFC107]">★</span>
                      {movie.rating}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Series */}
        {categorySeries.length > 0 && (
          <section
            className={
              categoryMovies.length > 0 ? "mt-12" : ""
            }
          >
            <h2 className="mb-5 text-2xl font-bold">Series</h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categorySeries.map((item) => (
                <Link
                  key={item.id}
                  href={`/series/${item.slug}`}
                  className="group media-tile block min-w-0"
                >
                  <div className="media-tile-frame relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={`/images/series/${item.image}`}
                      alt={item.title}
                      className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="media-tile-overlay pointer-events-none absolute inset-0 grid place-items-center bg-black/0 text-2xl text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">▶</span>

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                  </div>

                  <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#AAAAAA]">
                    <span>{item.year}</span>

                    <span>•</span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#FFC107]">★</span>
                      {item.rating}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Empty category */}
        {categoryMovies.length === 0 &&
          categorySeries.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 text-center">
              <h2 className="text-lg font-semibold">
                No content in this category yet
              </h2>

              <p className="mt-2 text-sm text-[#AAAAAA]">
                Movies and series added to this category will appear here.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-lg bg-[#2979FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2468D7]"
              >
                Back Home
              </Link>
            </div>
          )}
      </div>
      </main>
      <SiteBottom />
    </>
  );
}
