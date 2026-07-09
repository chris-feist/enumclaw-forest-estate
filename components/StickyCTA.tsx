import { TrackedLink } from "./TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import { property } from "@/lib/property";

export function StickyCTA() {
  const realtor = property.realtor;
  const showingSubject = encodeURIComponent(
    "Enumclaw Forest Estate Showing Request",
  );
  const showingBody = encodeURIComponent(
    `Hi ${realtor.name},

I would like to schedule a private tour of ${property.name} at ${property.address}.

Thank you,`,
  );

  return (
    <div className="sticky-cta" aria-label="Schedule a private tour">
      <TrackedLink
        className="button button-dark"
        href={`mailto:${realtor.email}?subject=${showingSubject}&body=${showingBody}`}
        eventName={AnalyticsEvents.ScheduleTour}
        eventParams={{ location: "sticky_cta" }}
      >
        Schedule a Private Tour
      </TrackedLink>
    </div>
  );
}
