
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

  /* Website favicon / site logo */
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
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
        <meta
          name="google-adsense-account"
          content="ca-pub-6421049945104967"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6421049945104967"
          crossOrigin="anonymous"
        />

        {/* Monetag Multitag */}
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="289831"
          async
          data-cfasync="false"
        />
      </head>

      <body>
        {children}

        {/* Website + Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },

              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "OSHAKUR MOVIES",
                url: siteUrl,
                logo: `${siteUrl}/images/logo.jpg`,
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

