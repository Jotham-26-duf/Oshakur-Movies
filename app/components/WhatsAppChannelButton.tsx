import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppChannelButton() {
  return (
    <a
      href="https://whatsapp.com/channel/0029Vb9FAiT6hENkuTGlcy1W"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join the OSHAKUR MOVIES WhatsApp Channel"
      className="floating-whatsapp group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-[#168B4E] px-4 text-sm font-bold text-white shadow-[0_8px_28px_rgba(0,0,0,0.42)] transition duration-200 hover:-translate-y-1 hover:bg-[#1BA85D] hover:shadow-[0_10px_32px_rgba(37,211,102,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1320] max-[380px]:min-h-11 max-[380px]:gap-1.5 max-[380px]:px-3 max-[380px]:text-xs"
    >
      <SiWhatsapp
        size={21}
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:scale-110"
      />
      <span>Join Channel</span>
    </a>
  );
}
