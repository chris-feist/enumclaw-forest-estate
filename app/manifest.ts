import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enumclaw Forest Estate",
    short_name: "Forest Estate",
    description:
      "A custom home on 19.55 private acres in Enumclaw, Washington.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#1f3128",
    icons: [
      {
        src: "/assets/social/enumclaw-forest-estate-preview.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
      },
    ],
  };
}
