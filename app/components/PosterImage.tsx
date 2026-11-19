"use client";

import { useState } from "react";

interface PosterImageProps {
  src: string;
  alt: string;
  contentType: "movie" | "series";
  className?: string;
  loading?: "eager" | "lazy";
}

const fallbackPoster = "/images/movies/unknown-mega-movie.jpg";

export function getPosterImageSrc(image: string, contentType: "movie" | "series") {
  if (image.startsWith("/") || /^(https?:|data:|blob:)/i.test(image)) return image;
  return `/images/${contentType === "series" ? "series" : "movies"}/${image.replace(/^\/+/, "")}`;
}

export default function PosterImage({ src, alt, contentType, className, loading = "lazy" }: PosterImageProps) {
  const normalizedSrc = getPosterImageSrc(src, contentType);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageSrc = failedSrc === normalizedSrc ? fallbackPoster : normalizedSrc;
  const fallbackFailed = failedSrc === fallbackPoster;

  function handleError() {
    if (imageSrc !== fallbackPoster) {
      if (process.env.NODE_ENV === "development") console.warn(`Could not load ${contentType} poster for "${alt}": ${imageSrc}`);
      setFailedSrc(normalizedSrc);
      return;
    }

    setFailedSrc(fallbackPoster);
  }

  if (fallbackFailed) {
    return <div className={`h-full w-full bg-[#171719] ${className ?? ""}`} role="img" aria-label={alt} />;
  }

  return <img src={imageSrc} alt={alt} loading={loading} className={className} onError={handleError} />;
}
