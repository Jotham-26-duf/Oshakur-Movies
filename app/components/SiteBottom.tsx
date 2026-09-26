import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";

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
                  Oshakuru Movies
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#00E5FF]">
                  Oshakuru Movies
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
              href="https://www.youtube.com/@oshakurfilm.com."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakuru Movies on YouTube"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#FF0000]"
            >
              <SiYoutube size={20} aria-hidden="true" />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/oshakurfilm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakuru Movies on Instagram"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#E1306C]"
            >
              <SiInstagram size={20} aria-hidden="true" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@oshakurfilm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Oshakuru Movies on TikTok"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-white"
            >
              <SiTiktok size={20} aria-hidden="true" />
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
              href="tel:+250789063094"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#00E5FF]"
            >
              <FiPhone size={20} aria-hidden="true" />
              <span>+250 789063094</span>
            </a>

            <a
              href="https://wa.me/250789063094"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#25D366]"
            >
              <SiWhatsapp size={20} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:oshakurmovies@gmail.com"
              className="flex items-center gap-3 text-sm text-[#AAAAAA] transition hover:text-[#E040FB]"
            >
              <FiMail size={20} aria-hidden="true" />
              <span>oshakurmovies@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-[#666666]">
          Copyright © {new Date().getFullYear()} Oshakuru Movies. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}