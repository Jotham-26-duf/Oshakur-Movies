
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { movies } from "@/data/movies";
import { series } from "@/data/series";

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
    name: "Horror",
  },
  {
    id: "6",
    name: "Thriller",
  },
];

const categoryImages = categories.map((category) => {
  const movieImages = movies
    .filter((movie) => movie.genres.includes(category.name))
    .map((movie) => movie.image);

  const seriesImages = series
    .filter((item) => item.genres.includes(category.name))
    .map((item) => item.image);

  const images = [...movieImages, ...seriesImages].filter(
    (image) => image && image !== "..."
  );

  return {
    ...category,
    images: images.length > 0 ? images : ["/placeholder.jpg"],
  };
});

export default function CategorySection() {
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    categories.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((currentIndexes) =>
        currentIndexes.map((currentIndex, categoryIndex) => {
          const imageCount =
            categoryImages[categoryIndex].images.length;

          if (imageCount <= 1) {
            return 0;
          }

          return (currentIndex + 1) % imageCount;
        })
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
            Explore by Type
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Popular Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categoryImages.map((category, categoryIndex) => {
            const currentImage =
              category.images[imageIndexes[categoryIndex]];

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                  <img
                    src={currentImage}
                    alt={category.name}
                    className="aspect-[2/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-[#CCCCCC] transition group-hover:text-[#00E5FF]">
                      Explore movies
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

