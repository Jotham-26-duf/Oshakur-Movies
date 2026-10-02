import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://oshakurmovies.party";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "OSHAKUR MOVIES | Watch Agasobanuye Movies & Series",
    template: "%s | OSHAKUR MOVIES",
  },

  description:
    "OSHAKUR MOVIES — Watch and discover Agasobanuye movies and series online. Browse Action, Adventure, Comedy, Drama, Horror, and Thriller movies and series.",

  keywords: [
    "OSHAKUR MOVIES",
    "OSHAKUR",
    "Agasobanuye",
    "Rwanda movies",
    "Rwanda series",
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
      "Watch and discover Agasobanuye movies and series online on OSHAKUR MOVIES.",
    url: siteUrl,
    siteName: "OSHAKUR MOVIES",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/movies/images.webp",
        width: 1200,
        height: 630,
        alt: "OSHAKUR MOVIES",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OSHAKUR MOVIES | Watch Agasobanuye Movies & Series",
    description:
      "Watch and discover Agasobanuye movies and series online on OSHAKUR MOVIES.",
    images: ["/images/movies/images.webp"],
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
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6421049945104967"
          crossOrigin="anonymous"
        />
      </head>

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
              description:
                "OSHAKUR MOVIES — Watch and discover Agasobanuye movies and series online.",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}