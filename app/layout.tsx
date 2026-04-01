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
  title: "Francesca • TikTok",
  description: '250K views, 18K likes, 1,200 comments: "What you don\'t know about the new Harry Potter..."',
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
    title: '250K views, 18K likes, 1,200 comments: "What you don\'t know about the new Harry Potter..."',
    description: '250K views, 18K likes, 1,200 comments: "What you don\'t know about the new Harry Potter..."',
    siteName: "Francesca • TikTok",
    images: [
      {
        url: "/lead-in-image.png",
        width: 990,
        height: 1762,
      },
    ],
    type: "video.other",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesca • TikTok",
    description: '250K views, 18K likes, 1,200 comments: "What you don\'t know about the new Harry Potter..."',
    images: ["/lead-in-image.png"],
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
