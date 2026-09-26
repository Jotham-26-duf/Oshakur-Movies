
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
      aria-hidden="true"
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
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.4 3.7-6.4 3.7Z" />
    </svg>
  );
}

function InstagramIcon() {
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
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.3 7.1a5.8 5.8 0 0 1-3.5-1.2v8.3a5.8 5.8 0 1 1-5-5.7v3a2.8 2.8 0 1 0 2 2.7V2h3a5.8 5.8 0 0 0 3.5 3.5v1.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.88 11.88 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.43ZM12.06 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.85 9.85 0 0 1-1.51-5.28c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.93a9.9 9.9 0 0 1 2.91 7.05c0 5.48-4.46 9.94-9.95 9.94Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function SiteBottom() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0D0D] px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block">
            <div className="flex items-center gap-3">
              {/* Text-based logo - no image file required */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#1B1B1B]">
                <span className="text-xl font-black text-white">
                  OM8
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-wide text-white">
                  Oshakur
                  Movies
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#00E5FF]">
                  Oshakur Movies
                </p>
              </div>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[#AAAAAA]">
            Reba Agasobanuye aho waba uri hose kubuntu. Abasobanuzi,
            Rocky Kimomo, Junior Giti, Sankara, Savimbi, PK, Gaheza
            n&apos;abandi.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="relative inline-block pb-2 font-semibold text-white">
            Quick Links
            <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-[#E50914]" />
          </h3>

          <nav className="mt-5 flex flex-col gap-3 text-sm text-[#AAAAAA]">
            <Link
              href="/about-us"
              className="transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="relative inline-block pb-2 font-semibold text-white">
            Follow Us
            <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-[#E50914]" />
          </h3>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href="https://www.youtube.com/@oshakurfilms.com."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakur Films on YouTube"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#FF0000]"
            >
              <YouTubeIcon />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/oshakurfilms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakur Films on Instagram"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#E1306C]"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@oshakurfilms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakur Films on TikTok"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-white"
            >
              <TikTokIcon />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="relative inline-block pb-2 font-semibold text-white">
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-[#E50914]" />
          </h3>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href="tel:+250788821628"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#00E5FF]"
            >
              <PhoneIcon />
              <span>+250 788 821 628</span>
            </a>

            <a
              href="https://wa.me/250788821628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#25D366]"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:info@oshakurfilms.com"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#E040FB]"
            >
              <MailIcon />
              <span>info@oshakurfilms.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-[#666666]">
          Copyright © {new Date().getFullYear()} OSHAkurFilms. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

