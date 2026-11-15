"use client";

import { useState } from "react";

interface PosterImageProps {
  src: string;
  alt: string;
  contentType: "movie" | "series";
}

const fallbackPoster = "/images/movies/unknown-mega-movie.jpg";

export default function PosterImage({ src, alt, contentType }: PosterImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  function handleError() {
    if (imageSrc !== fallbackPoster) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Could not load ${contentType} poster for "${alt}": ${imageSrc}`);
      }
      setImageSrc(fallbackPoster);
      return;
    }

    setFallbackFailed(true);
  }

  if (fallbackFailed) {
    return <div className="h-full w-full bg-[#171719]" role="img" aria-label={alt} />;
  }

  return <img src={imageSrc} alt={alt} loading="lazy" onError={handleError} />;
}
