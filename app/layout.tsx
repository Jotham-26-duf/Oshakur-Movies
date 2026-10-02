
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSHAKUR MOVIES",
  description:
    "OSHAKUR MOVIES — Watch and discover movies and series online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

