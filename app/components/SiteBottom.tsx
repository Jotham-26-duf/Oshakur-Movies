import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import OshakurLogo from "./OshakurLogo";

const socialButtonClass =
  "inline-flex min-h-11 items-center gap-2.5 rounded-[9px] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1320]";

export default function SiteBottom() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1320] px-4 py-12 pb-28 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <Link
          href="/"
          aria-label="OSHAKUR MOVIES home"
          className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
        >
          <OshakurLogo className="size-11 shrink-0 transition group-hover:scale-105" />
          <span className="text-xl font-extrabold tracking-[0.04em] text-white sm:text-2xl">
            OSHAKUR <span className="text-[#00D8EF]">MOVIES</span>
          </span>
        </Link>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#AAB5C4]">
          Reba Agasobanuye aho waba uri hose kubuntu. Abasobanuzi, Rocky
          Kimomo, Junior Giti, Sankara, Savimbi, PK, Gaheza n&apos;abandi.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium"
        >
          <Link
            href="/about-us"
            className="text-[#B8C2CE] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            About Us
          </Link>
          <a
            href="mailto:oshakurmovies@gmail.com"
            className="text-[#B8C2CE] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            Contact Us
          </a>
          <Link
            href="/privacy"
            className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#B8C2CE] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            Terms
          </Link>
        </nav>

        <section aria-labelledby="footer-follow-heading" className="mt-9 w-full">
          <h2
            id="footer-follow-heading"
            className="text-base font-bold tracking-wide text-white"
          >
            Follow Us
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/J3WZy8GpRpT61LhbugxQBL?s=cl&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join OSHAKUR MOVIES on WhatsApp"
              className={`${socialButtonClass} bg-[#168B4E] hover:bg-[#1BA85D]`}
            >
              <SiWhatsapp size={19} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OSHAKUR MOVIES on Instagram"
              className={`${socialButtonClass} bg-gradient-to-r from-[#9B2A78] via-[#D43569] to-[#E96B45] hover:brightness-110`}
            >
              <SiInstagram size={19} aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@oshakurmovies23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OSHAKUR MOVIES on TikTok"
              className={`${socialButtonClass} border border-white/20 bg-[#10141B] hover:border-white/50 hover:bg-[#171D27]`}
            >
              <SiTiktok size={18} aria-hidden="true" />
              TikTok
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb9FAiT6hENkuTGlcy1W"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow OSHAKUR MOVIES WhatsApp Channel"
              className={`${socialButtonClass} bg-[#168B4E] hover:bg-[#1BA85D]`}
            >
              <SiWhatsapp size={19} aria-hidden="true" />
              WhatsApp Channel
            </a>
          </div>
        </section>

        <address className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm not-italic text-[#AAB5C4]">
          <a
            href="tel:+250789063094"
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <FiPhone aria-hidden="true" />
            +250 789063094
          </a>
          <a
            href="https://wa.me/250789063094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <SiWhatsapp aria-hidden="true" />
            WhatsApp Contact
          </a>
          <a
            href="mailto:oshakurmovies@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <FiMail aria-hidden="true" />
            oshakurmovies@gmail.com
          </a>
        </address>
      </div>

      <div className="mx-auto mt-9 max-w-6xl border-t border-white/10 pt-5 text-center">
        <p className="text-xs tracking-wide text-[#8290A1]">
          Good night! © {new Date().getFullYear()} OSHAKUR MOVIES. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
