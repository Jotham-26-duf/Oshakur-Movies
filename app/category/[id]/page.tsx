import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import { movies } from "@/data/movies";
import { getSeriesSummaries } from "@/data/series";
import { createOpenGraphMetadata } from "@/app/seo";
import type { Genre } from "@/data/genres";
import MovieCard from "@/app/components/MovieCard";
import { getGenreCollection } from "@/app/lib/genreCollections";

interface Category {
  id: string;
  name: Genre;
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

  const title = `${category.name} Movies & Series`;
  const openGraphTitle = `${title} | OSHAKUR MOVIES`;
  const description = `Explore ${category.name.toLowerCase()} movies and series on OSHAKUR MOVIES.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://oshakurmovies.party/category/${category.id}`,
    },
    openGraph: createOpenGraphMetadata(
      `/category/${category.id}`,
      openGraphTitle,
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

  const categoryEntries = getGenreCollection(movies, getSeriesSummaries(), category.name);

  return (
    <>
      <Navbar series={getSeriesSummaries()} />
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

        {categoryEntries.length > 0 && <section aria-label={`${category.name} movies and series`}><h2 className="mb-5 text-2xl font-bold">Movies &amp; Series</h2><div className="catalog-card-grid">{categoryEntries.map(({ type, item }) => <MovieCard key={`${type}-${item.id}`} title={item.title} year={item.year} rating={item.rating} image={item.image} slug={item.slug} hrefPrefix={type === "movie" ? "/movies" : "/series"} explainer={item.explainer} createdAt={item.createdAt} genres={item.genres} partCount={type === "movie" ? item.parts.length : undefined} />)}</div></section>}

        {/* Empty category */}
        {categoryEntries.length === 0 && (
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
