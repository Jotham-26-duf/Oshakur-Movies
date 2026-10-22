
import type { Metadata } from "next";
import "./globals.css";
import MonetagScripts from "./MonetagScripts";
import AnnouncementBanner from "./components/AnnouncementBanner";
import WhatsAppChannelButton from "./components/WhatsAppChannelButton";
import { createOpenGraphMetadata, siteName, siteOpenGraph, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "OSHAKUR MOVIES | Watch Agasobanye Movies & Series",
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


  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: siteOpenGraph,

  twitter: {
    card: "summary_large_image",
    title: "OSHAKUR MOVIES | Watch Agasobanye Movies & Series",
    description:
      "Watch and discover Agasobanuye movies and series online on OSHAKUR MOVIES.",
    images: ["/images/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-6421049945104967"
        />

        {/* Google AdSense — preserved from the original */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6421049945104967"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {/* Monetag scripts are managed by app/MonetagScripts.tsx */}
        <MonetagScripts />

        <AnnouncementBanner />

        {children}

        <WhatsAppChannelButton />

        {/* Organization structured data — preserved */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: new URL("/favicon.svg", siteUrl).toString(),
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
