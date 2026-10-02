
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://oshakurmovies.party";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "OSHAKUR MOVIES | Watch Agasobanuye Movies & Series",
    template: "%s | OSHAKUR MOVIES",
  },

  description:
    "OSHAKUR MOVIES — Watch and discover Agasobanuye movies and series online. Browse Action, Adventure, Comedy, Drama, Horror, Romance and Thriller movies.",

  keywords: [
    "OSHAKUR MOVIES",
    "OSHAKUR",
    "Agasobanuye",
    "Rwanda movies",
    "movies",
    "series",
    "watch movies",
    "watch series",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "OSHAKUR MOVIES | Watch Agasobanuye Movies & Series",
    description:
      "Watch and discover Agasobanuye movies and series on OSHAKUR MOVIES.",
    url: siteUrl,
    siteName: "OSHAKUR MOVIES",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "OSHAKUR MOVIES | Watch Agasobanuye Movies & Series",
    description:
      "Watch and discover Agasobanuye movies and series on OSHAKUR MOVIES.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OSHAKUR MOVIES",
              alternateName: "OSHAKUR",
              url: siteUrl,
            }),
          }}
        />
      </body>
    </html>
  );
}

