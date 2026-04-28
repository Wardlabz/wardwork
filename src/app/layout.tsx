import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { ClientBackground } from "@/components/layout/ClientBackground";
import { NavigationProgress } from "@/components/ui/NavigationProgress";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "WARDWORK | The Future of On-Chain Bounties",
    template: "%s | WARDWORK",
  },
  description:
    "WARDWORK empowers marketplaces to provide secure, non-custodial escrow payments without building complex payment infrastructure.",
  metadataBase: new URL("https://wardwork.tech"),

  // ── Favicon & icon variants ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",       sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  // ── PWA manifest ──────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Theme colour (browser chrome on Android / Safari pinned tab) ──────────
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e9898" },
    { media: "(prefers-color-scheme: dark)",  color: "#0a0a0a" },
  ],

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: "WARDWORK | The Future of On-Chain Bounties",
    description:
      "WARDWORK empowers marketplaces to provide secure, non-custodial escrow payments without building complex payment infrastructure.",
    url: "https://wardwork.tech",
    siteName: "WARDWORK",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WARDWORK - Secure, non-custodial escrow for your marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "WARDWORK | The Future of On-Chain Bounties",
    description:
      "WARDWORK empowers marketplaces to provide secure, non-custodial escrow payments without building complex payment infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative min-h-screen`}>
        <ThemeProvider>
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <Analytics />
          <ClientBackground />
          {children}
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}