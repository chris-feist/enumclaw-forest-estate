import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAds } from "@/components/GoogleAds";
import { MetaPixel } from "@/components/MetaPixel";
import { AnalyticsPageViews } from "@/components/AnalyticsPageViews";
import { PropertyJsonLd } from "@/components/PropertyJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { NoScriptFallback } from "@/components/NoScriptFallback";
import "./globals.css";

const siteUrl = "https://enumclawforestestate.com";
const socialImage = "/assets/social/enumclaw-forest-estate-preview.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Enumclaw Forest Estate | 19.55 Acres in Enumclaw, WA",
  description:
    "Explore a 3,820 sq. ft. custom home on 19.55 private acres in Enumclaw, Washington, with Mount Rainier views, forest privacy, a whole-home generator, future shop potential, and downtown Enumclaw just minutes away.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enumclaw Forest Estate | 19.55 Private Acres",
    description:
      "A custom 3,820 sq. ft. home on 19.55 private acres in Enumclaw, Washington, with forest privacy, Mount Rainier views, and future shop potential.",
    url: siteUrl,
    siteName: "Enumclaw Forest Estate",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Enumclaw Forest Estate social preview with aerial home view and key property highlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enumclaw Forest Estate | 19.55 Private Acres",
    description:
      "A custom 3,820 sq. ft. home on 19.55 private acres in Enumclaw, Washington.",
    images: [
      {
        url: socialImage,
        alt: "Enumclaw Forest Estate social preview with aerial home view and key property highlights",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <GoogleAds />
        <MetaPixel />
        <AnalyticsPageViews />
        <PropertyJsonLd />
        <FaqJsonLd />
        <NoScriptFallback />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
