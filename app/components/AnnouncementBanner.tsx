const announcement = (
  <>
    Murakaza neza kuri Oshakur Movies! Ushaka movies na series injira muri WhatsApp Channel na Group byacu! Ufite ikibazo cyo kureba cyangwa gukura movies kuri website Twandikire tugufashe. Wifuza gukora website nk’iyi cyangwa izindi? Tuvugishe tugufashe! ❤️ Sangiza inshuti zawe website yacu: {" "}
    <a
      href="https://oshakurmovies.party"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#00E5FF] underline decoration-[#00E5FF]/50 underline-offset-2"
    >
      https://oshakurmovies.party
    </a>
  </>
);

export default function AnnouncementBanner() {
  return (
    <aside className="announcement-bar" aria-label="Oshakur Movies announcement">
      <div className="announcement-track">
        <p className="announcement-copy">{announcement}</p>
        <p className="announcement-copy" aria-hidden="true" inert>
          {announcement}
        </p>
      </div>
    </aside>
  );
}
