export const siteConfig = {
  name: "Enumclaw Forest Estate",
  url: "https://enumclawforestestate.com",
  canonicalUrl: "https://www.enumclawforestestate.com",
  portfolioPath: "/portfolio",
  portfolioPdfPath:
    "/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf",
  socialImagePath: "/assets/social/enumclaw-forest-estate-preview.jpg",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
