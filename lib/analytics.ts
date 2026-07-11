export const GOOGLE_ADS_ID = "AW-18311573663";
export const GA4_MEASUREMENT_ID = "G-4GLY6T12V5";
export const META_PIXEL_ID = "869637042892768";

export const AnalyticsEvents = {
  ListingSiteClicked: "listing_site_clicked",
  WatchFilm: "watch_film",
  ScheduleTour: "schedule_private_tour",
  CallTodd: "call_agent",
  EmailTodd: "email_agent",
  GetDirections: "get_directions",
  OpenHouseCta: "get_directions",
  ContactSection: "buyer_resources_viewed",
  DownloadPortfolio: "download_brochure",
  ViewPortfolio: "view_portfolio",
  MatterportOpen: "view_matterport",
  CountyRecordOpen: "view_county_record",
  FloorPlanRoom: "view_floorplan",
  GallerySection: "view_gallery",
} as const;

type AnalyticsParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const metaStandardEvents: Record<string, string> = {
  [AnalyticsEvents.ScheduleTour]: "Lead",
  [AnalyticsEvents.CallTodd]: "Contact",
  [AnalyticsEvents.EmailTodd]: "Contact",
  [AnalyticsEvents.GetDirections]: "ViewContent",
  [AnalyticsEvents.DownloadPortfolio]: "ViewContent",
  [AnalyticsEvents.ViewPortfolio]: "ViewContent",
  [AnalyticsEvents.MatterportOpen]: "ViewContent",
  [AnalyticsEvents.WatchFilm]: "ViewContent",
  [AnalyticsEvents.FloorPlanRoom]: "ViewContent",
  [AnalyticsEvents.ListingSiteClicked]: "ViewContent",
  [AnalyticsEvents.CountyRecordOpen]: "ViewContent",
};

export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });

  window.fbq?.("track", "PageView");
}

export function trackEvent(action: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    event_category: "buyer_engagement",
    page_path: window.location.pathname,
    ...params,
  };

  window.gtag?.("event", action, eventParams);

  const standardEvent = metaStandardEvents[action];
  if (standardEvent) {
    window.fbq?.("track", standardEvent, {
      content_name: action,
      ...params,
    });
  }

  window.fbq?.("trackCustom", action, {
    ...params,
    page_path: window.location.pathname,
  });
}
