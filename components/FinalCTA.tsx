import { AnalyticsEvents } from "@/lib/analytics";
import { property } from "@/lib/property";
import { TrackedLink } from "./TrackedLink";

const subject = encodeURIComponent(
  "Private Tour Request - Enumclaw Forest Estate",
);
const body = encodeURIComponent(
  `Hi ${property.realtor.name},\n\nI'd like to schedule a private tour of Enumclaw Forest Estate.\n\nThank you,`,
);

export function FinalCTA() {
  return (
    <section className="final-cta" id="schedule">
      <div className="final-cta-overlay" />
      <div className="container final-cta-content">
        <p className="eyebrow light">Schedule Your Private Tour</p>
        <h2>Some homes impress. Others change the way you want to live.</h2>
        <p>
          Enumclaw Forest Estate offers space, privacy, nature, and a modern
          custom home designed to embrace all three.
        </p>
        <div className="final-cta-actions">
          <TrackedLink
            className="button button-light"
            href={`mailto:${property.realtor.email}?subject=${subject}&body=${body}`}
            eventName={AnalyticsEvents.ScheduleTour}
            eventParams={{ location: "final_cta" }}
          >
            Schedule Private Tour
          </TrackedLink>
          <TrackedLink
            className="button button-outline"
            href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
            download
            eventName={AnalyticsEvents.DownloadPortfolio}
            eventParams={{ location: "final_cta" }}
          >
            Download Portfolio
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
