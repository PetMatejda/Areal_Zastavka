import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Areál Zastávka - Váš servisní hub",
  description: "Všechny služby pro firmy a jejich zaměstnance na jednom místě",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}

