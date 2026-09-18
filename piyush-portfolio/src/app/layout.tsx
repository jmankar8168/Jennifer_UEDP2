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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.webp", type: "image/webp" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
      <body className="h-full w-full overflow-hidden select-none bg-[var(--figma-bg)] text-[var(--figma-text)] font-sans">
        {children}
      </body>
    </html>
  );
}
