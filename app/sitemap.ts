import type { MetadataRoute } from "next";

const baseUrl = "https://enumclawforestestate.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
