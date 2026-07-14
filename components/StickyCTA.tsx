import { TrackedLink } from "./TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import { property, propertyDisplay } from "@/lib/property";

export function StickyCTA() {
  const realtor = property.realtor;
  const showingSubject = encodeURIComponent(
    "Enumclaw Forest Estate Showing Request",
  );
  const showingBody = encodeURIComponent(
    `Hi ${realtor.name},

I would like to schedule a private tour of ${property.name} at ${propertyDisplay.fullAddress}.

Thank you,`,
  );

  return (
    <div className="sticky-cta" aria-label="Property actions">
      <TrackedLink
        className="button button-dark"
        href={`mailto:${realtor.email}?subject=${showingSubject}&body=${showingBody}`}
        eventName={AnalyticsEvents.ScheduleTour}
        eventParams={{ location: "sticky_cta" }}
        aria-label="Schedule a private tour by email"
      >
        Schedule a Private Tour
      </TrackedLink>
      <TrackedLink
        className="button button-light sticky-secondary"
        href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
        download
        eventName={AnalyticsEvents.DownloadPortfolio}
        eventParams={{ location: "sticky_cta" }}
        aria-label="Download the property brochure"
      >
        Download Brochure
      </TrackedLink>
    </div>
  );
}
