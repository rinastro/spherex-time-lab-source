import type { Metadata } from "next";
import "./globals.css";
import "./observatory.css";

export const metadata: Metadata = {
  title: "SPHEREx Time Lab: the sky in motion",
  description: "Compare real NASA SPHEREx infrared exposures of the same patch of sky over time.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
