import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inztugram.com"),
  title: "Jake Ryan • Reel",
  description: '100K views, 2,500 likes, 120 comments: "EXPOSING THE LIBERALS"',
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/FAVICON.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: '100K views, 2,500 likes, 120 comments: "EXPOSING THE LIBERALS"',
    description: '100K views, 2,500 likes, 120 comments: "EXPOSING THE LIBERALS"',
    siteName: "Jake Ryan • Reel",
    images: [
      {
        url: "/lead-in-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "video.other",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Ryan • Reel",
    description: '100K views, 2,500 likes, 120 comments: "EXPOSING THE LIBERALS"',
    images: ["/lead-in-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
