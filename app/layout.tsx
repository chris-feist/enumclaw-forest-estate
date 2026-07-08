import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enumclaw Forest Estate | Nearly 20 Private Acres",
  description:
    "A 3,820-square-foot craftsman home on 19.55 private acres in Enumclaw, Washington, with forest trails, Mount Rainier views and room to grow.",
  metadataBase: new URL("https://enumclawforestestate.com"),
  openGraph: {
    title: "Enumclaw Forest Estate",
    description: "Modern Living. Immersed in Nature.",
    type: "website",
    images: ["/assets/location/mount-rainier-view.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
