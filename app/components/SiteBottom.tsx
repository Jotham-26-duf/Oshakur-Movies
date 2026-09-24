import Link from "next/link";

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function SiteBottom() {
  return (
    <>
      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B] p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2979FF]/20 text-[#2979FF]">
              <MailIcon />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Need Help?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#AAAAAA]">
              Contact us if you have questions, suggestions, or need support
              while using Oshakur Movies.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://wa.me/250789063094"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 transition hover:border-[#25D366]/50"
            >
              <div className="text-[#25D366]">WhatsApp</div>
              <p className="mt-2 text-sm text-[#AAAAAA]">
                Chat with us
              </p>
            </a>

            <a
              href="tel:+250789063094"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 transition hover:border-[#2979FF]/50"
            >
              <div className="flex items-center gap-3 text-[#2979FF]">
                <PhoneIcon />
                <span>Phone</span>
              </div>

              <p className="mt-2 text-sm text-[#AAAAAA]">
                Call us directly
              </p>
            </a>

            <a
              href="mailto:dufitumurengezijotham21@gmail.com"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 transition hover:border-[#E040FB]/50"
            >
              <div className="flex items-center gap-3 text-[#E040FB]">
                <MailIcon />
                <span>Email</span>
              </div>

              <p className="mt-2 text-sm text-[#AAAAAA]">
                Send us an email
              </p>
            </a>

            <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
              <div className="flex items-center gap-3 text-[#00E5FF]">
                <LocationIcon />
                <span>Location</span>
              </div>

              <p className="mt-2 text-sm text-[#AAAAAA]">
                Rwanda
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-sm font-semibold text-white">
              Join our community
            </p>

            <a
              href="https://chat.whatsapp.com/J3WZy8GpRpT61LhbugxQBL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl border border-white/10 bg-[#121212] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#25D366] hover:text-[#25D366]"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0D0D0D] px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-wider"
            >
              <span className="text-[#00E5FF]">OSHAKUR</span>
              <span className="text-[#E040FB]"> MOVIES</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#777777]">
              Discover movies and series in one simple place.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#AAAAAA]">
              <Link
                href="/"
                className="transition hover:text-[#00E5FF]"
              >
                Home
              </Link>

              <Link
                href="/movies"
                className="transition hover:text-[#00E5FF]"
              >
                Movies
              </Link>

              <Link
                href="/series"
                className="transition hover:text-[#00E5FF]"
              >
                Series
              </Link>

              <Link
                href="/trending"
                className="transition hover:text-[#00E5FF]"
              >
                Trending
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Oshakur Movies
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#777777]">
              Watch, discover, and explore movies and series.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#666666]">
          © {new Date().getFullYear()} Oshakur Movies. All rights reserved.
        </div>
      </footer>
    </>
  );
}