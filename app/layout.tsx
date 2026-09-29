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
  manifest: "/manifest.json",
  title: "GothBaddie • Instagram",
  description: '340K views, 35K likes, 4500 comments: "Could you survive this haunted house?..."',
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
    title: '340K views, 35K likes, 4500 comments: "Could you survive this haunted house?..."',
    description: '340K views, 35K likes, 4500 comments: "Could you survive this haunted house?..."',
    siteName: "GothBaddie • Instagram",
    images: [
      {
        url: "/lead-in-haunted-house.jpg",
        width: 335,
        height: 597,
      },
    ],
    type: "video.other",
  },
  twitter: {
    card: "summary_large_image",
    title: "GothBaddie • Instagram",
    description: '340K views, 35K likes, 4500 comments: "Could you survive this haunted house?..."',
    images: ["/lead-in-haunted-house.jpg"],
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
