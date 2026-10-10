
import Link from "next/link";

interface MovieCardProps {
  title: string;
  year: string;
  rating: string;
  image: string;
  slug: string;
  explainer?: string;
  createdAt?: string;
  streamUrl?: string;
  downloadUrl?: string;
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
  explainer,
  createdAt,
  streamUrl,
  downloadUrl,
  onExplainerClick,
}: MovieCardProps) {
  const timeAgo = getTimeAgo(createdAt);
  const explainerName = explainer?.trim();

  return (
    <article className="group block w-full min-w-0">
      <Link href={`/movies/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
          <img
            src={`/images/movies/${image}`}
            alt={title}
            loading="lazy"
            className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
            <div className="scale-0 rounded-full bg-[#2979FF] p-4 text-white shadow-xl transition duration-300 group-hover:scale-100">
              <span className="text-lg">▶</span>
            </div>
          </div>
        </div>
      </Link>

      <Link href={`/movies/${slug}`} className="block">
        <h3 className="mt-3 truncate font-semibold text-white transition group-hover:text-[#00E5FF]">
          {title}
        </h3>
      </Link>

      <div className="mt-2 flex min-w-0 items-center justify-between gap-2">
        {explainerName ? (
          onExplainerClick ? (
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
          )
        ) : (
          <span className="min-w-0 text-xs text-white/40">
            Explainer unavailable
          </span>
        )}

        <span
          title={timeAgo}
          className="shrink-0 text-right text-xs text-[#AAAAAA]"
        >
          {timeAgo}
        </span>
      </div>

      {rating && (
        <div className="mt-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#5C6BC0] px-2 py-1 text-xs font-semibold text-white">
            <span className="text-[#FFC107]">★</span>
            {rating}
          </span>
        </div>
      )}

      <div className="mt-3 flex gap-2">
        {streamUrl && (
          <a
            href={streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-[#2979FF] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#1E63D6]"
          >
            ▶ Watch
          </a>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-[#22C55E] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#16A34A]"
          >
            ↓ Download
          </a>
        )}
      </div>
    </article>
  );
}
