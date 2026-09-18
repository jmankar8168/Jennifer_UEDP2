import type { Metadata, Viewport } from "next";
import { Figtree, Caveat } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jenni | Designer",
  description: "Designer who loves to build & explore new things. Currently exploring communication and product design.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon.webp?v=3", type: "image/webp" },
      { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Jenni | Designer",
    description: "Designer who loves to build & explore new things. Currently exploring communication and product design.",
    url: "https://www.jenni.design",
    siteName: "Jenni",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Jenni | Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenni | Designer",
    description: "Designer who loves to build & explore new things. Currently exploring communication and product design.",
    images: ["/og-image.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jenni",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
      </head>
      <body className="h-full w-full overflow-hidden select-none bg-[var(--figma-bg)] text-[var(--figma-text)] font-sans">
        {children}
      </body>
    </html>
  );
}
