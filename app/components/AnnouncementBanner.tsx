"use client";

const announcements = [
  {
    message: "Murakaza neza kuri OSHAKUR MOVIES! Reba movies na series nshya.",
    label: "Reba ubu",
    href: "/movies",
  },
  {
    message: "Kurikirana amakuru mashya kuri WhatsApp Channel yacu.",
    label: "Follow channel",
    href: "https://whatsapp.com/channel/0029Vb9FAiT6hENkuTGlcy1W",
  },
  {
    message: "Ufite ikibazo cyo kureba cyangwa gukura movies? Twandikire.",
    label: "Twandikire",
    href: "https://wa.me/250789063094",
  },
  {
    message: "Wifuza gukora website nk’iyi? Tuvugishe tugufashe.",
    label: "Tuvugishe",
    href: "https://wa.me/250789063094",
  },
  {
    message: "Sangiza inshuti zawe website yacu.",
    label: "oshakurmovies.party",
    href: "https://oshakurmovies.party",
  },
];

export default function AnnouncementBanner() {
  return (
    <aside
      className="announcement-bar"
      aria-label="OSHAKUR MOVIES announcements"
    >
      <div className="announcement-label" aria-hidden="true">
        <span className="announcement-live-dot" />
        <span>UPDATE</span>
      </div>

      <div className="announcement-viewport">
        {[false, true].map((duplicate) => (
          <div className="announcement-track" key={duplicate ? "duplicate" : "primary"} aria-hidden={duplicate}>
            {announcements.map((announcement, index) => (
              <p className="announcement-copy" key={`${duplicate ? "duplicate" : "primary"}-${index}`}>
                <span className="announcement-message">{announcement.message}</span>
                <a
                  className="announcement-link"
                  href={announcement.href}
                  target={announcement.href.startsWith("http") ? "_blank" : undefined}
                  rel={announcement.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  tabIndex={duplicate ? -1 : undefined}
                >
                  {announcement.label}
                </a>
              </p>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
