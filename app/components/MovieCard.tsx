
import Link from "next/link";
import { getExplainerImage } from "../lib/explainers";

interface MovieCardProps {
  title: string;
  year: string;
  rating: string;
  image: string;
  slug: string;
  hrefPrefix?: "/movies" | "/series";
  explainer?: string;
  createdAt?: string;
  streamUrl?: string;
  downloadUrl?: string;
  genres?: string[];
  onExplainerClick?: (name: string) => void;
}

function getTimeAgo(createdAt?: string): string {
  if (!createdAt) return "Upload date unavailable";

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) {
    return "Upload date unavailable";
  }

  const elapsed = Date.now() - createdTime;

  if (elapsed < 0) return "Just uploaded";

  const minutes = Math.floor(elapsed / (1000 * 60));
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) return "Just now";

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  if (days < 30) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  if (days < 365) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }

  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

export default function MovieCard({
  title,
  year,
  rating,
  image,
  slug,
  hrefPrefix = "/movies",
  explainer,
  createdAt,
  streamUrl,
  downloadUrl,
  genres,
  onExplainerClick,
}: MovieCardProps) {
  const timeAgo = getTimeAgo(createdAt);
  const explainerName = explainer?.trim();

  return (
    <article className="cinema-card group block w-full min-w-0">
      <Link href={`${hrefPrefix}/${slug}`} className="block">
        <div className="media-poster relative">
          <img
            src={`/images/movies/${image}`}
            alt={title}
            loading="lazy"
          />
          {genres?.[0] && <span className="media-genre">{genres[0]}</span>}
          <span className="media-play" aria-hidden="true">▶</span>
        </div>
      </Link>

      <Link href={`${hrefPrefix}/${slug}`} className="block">
        <h3 className="media-title">
          {title}
        </h3>
      </Link>

      <div className="media-byline">
        {explainerName ? (
          <span className="flex min-w-0 items-center gap-1.5">
            {getExplainerImage(explainerName) && <img src={getExplainerImage(explainerName)} alt="" className="h-5 w-5 shrink-0 rounded-full object-cover" />}
            {onExplainerClick ? (
              <button
                type="button"
                onClick={() => onExplainerClick(explainerName)}
                title={explainerName}
                className="min-w-0 truncate text-left text-xs text-[#00E5FF] hover:underline"
              >
                🎙 {explainerName}
              </button>
            ) : (
              <span
                title={explainerName}
                className="min-w-0 truncate text-xs text-[#00E5FF]"
              >
                🎙 {explainerName}
              </span>
            )}
          </span>
        ) : (
          <span className="min-w-0 text-xs text-white/40">
            Explainer unavailable
          </span>
        )}
      </div>

      {createdAt && timeAgo !== "Upload date unavailable" && <time title={timeAgo} dateTime={createdAt} className="media-time">{timeAgo}</time>}

      {rating && rating !== "N/A" && (
        <div className="media-meta">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#5C6BC0] px-2 py-1 text-xs font-semibold text-white">
            <span className="text-[#FFC107]">★</span>
            {rating}
          </span>
        </div>
      )}

      <div className="mt-3 flex gap-2 px-2 pb-2">
        {streamUrl && (
          <a
            href={streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-[#E50914] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#FF2633]"
          >
            ▶ Watch
          </a>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-white/10 px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/20"
          >
            ↓ Download
          </a>
        )}
      </div>
    </article>
  );
}
