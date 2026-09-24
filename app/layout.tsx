import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oshakur Movies",
  description: "Watch and discover movies and series on Oshakur Movies.",
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