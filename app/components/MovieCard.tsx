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
}

function getTimeAgo(createdAt?: string): string {
  if (!createdAt) return "";

  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();
  const difference = now - createdTime;

  if (difference < 0) return "Just now";

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (weeks < 4) return `${weeks}w ago`;
  return `${months}mo ago`;
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
}: MovieCardProps) {
  const timeAgo = getTimeAgo(createdAt);

  return (
    <div className="group block w-full min-w-0">
      <Link href={`/movies/${slug}`}>
        <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
          <img
            src={`/images/movies/${image}`}
            alt={title}
            className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
            <div className="scale-0 rounded-full bg-[#2979FF] p-4 text-white shadow-xl transition duration-300 group-hover:scale-100">
              <span className="text-lg">▶</span>
            </div>
          </div>
        </div>
      </Link>

      <Link href={`/movies/${slug}`}>
        <h3 className="mt-3 truncate font-semibold text-[#FFFFFF] transition group-hover:text-[#00E5FF]">
          {title}
        </h3>
      </Link>

      <div className="mt-2 flex items-center gap-2 text-sm">
        {timeAgo && (
          <span className="text-[#AAAAAA]">{timeAgo}</span>
        )}

        <span className="text-[#AAAAAA]">•</span>

        <span className="flex items-center gap-1 rounded-md bg-[#5C6BC0] px-2 py-1 text-xs font-semibold text-white">
          <span className="text-[#FFC107]">★</span>
          {rating}
        </span>

        {explainer && (
          <>
            <span className="text-[#AAAAAA]">•</span>

            <span className="truncate text-[#AAAAAA]">
              🎙 {explainer}
            </span>
          </>
        )}
      </div>

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
    </div>
  );
}