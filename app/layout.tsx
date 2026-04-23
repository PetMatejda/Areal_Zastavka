import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Areál Zastávka | Váš servisní hub pro podnikání v Praze",
  description: "Pronájem hal, kanceláří a skladových prostor v Praze. Kompletní servis pro podnikání a volný čas na jednom místě.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${dmSans.variable} ${barlowCondensed.variable} font-sans antialiased bg-[var(--bg)] text-[var(--text)] overflow-x-hidden w-full m-0 p-0`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
