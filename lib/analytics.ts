export const GOOGLE_ADS_ID = "AW-18311573663";

export const AnalyticsEvents = {
  ListingSiteClicked: "listing_site_clicked",
  WatchFilm: "watch_film_clicked",
  ScheduleTour: "schedule_tour_clicked",
  CallTodd: "call_todd_clicked",
  EmailTodd: "email_todd_clicked",
  OpenHouseCta: "open_house_cta_clicked",
  ContactSection: "contact_section_clicked",
  DownloadPortfolio: "download_portfolio_clicked",
  ViewPortfolio: "view_portfolio_clicked",
  MatterportOpen: "matterport_open_clicked",
  FloorPlanRoom: "floorplan_room_clicked",
  GallerySection: "gallery_section_clicked",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  action: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", action, {
    event_category: "engagement",
    ...params,
  });
}
