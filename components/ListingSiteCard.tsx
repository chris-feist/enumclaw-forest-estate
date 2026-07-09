"use client";

import { AnalyticsEvents, trackEvent } from "@/lib/analytics";
type ListingSiteCardProps = {
  name: string;
  url: string;
};

export function ListingSiteCard({ name, url }: ListingSiteCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="listing-site-card"
      aria-label={`Open ${name} listing in a new tab`}
      onClick={() => {
        trackEvent(AnalyticsEvents.ListingSiteClicked, { listing_site: name });
      }}
    >
      <span className="listing-site-name">{name}</span>
      <span className="listing-site-action">Open Listing ↗</span>
    </a>
  );
}
