import { AnalyticsEvents } from "@/lib/analytics";
import { property } from "@/lib/property";

import { BrandMark } from "./BrandMark";
import { SocialLinks } from "./SocialLinks";
import { TrackedLink } from "./TrackedLink";

export function Footer() {
  return (
    <footer>
      <BrandMark light />
      <div>
        <p>
          <TrackedLink
            className="footer-address"
            href="https://www.google.com/maps/dir/?api=1&destination=23670+SE+448th+St%2C+Enumclaw%2C+WA+98022"
            target="_blank"
            rel="noreferrer"
            eventName={AnalyticsEvents.GetDirections}
            eventParams={{ location: "footer" }}
          >
            {property.address}
          </TrackedLink>
        </p>
        <p>
          Presented by {property.realtor.name} · {property.realtor.company}
        </p>
        <p>NWMLS #{property.mlsNumber}</p>
      </div>
      <div className="footer-links">
        <TrackedLink
          href="/portfolio"
          eventName={AnalyticsEvents.ViewPortfolio}
          eventParams={{ location: "footer" }}
        >
          View Portfolio
        </TrackedLink>
        <TrackedLink
          href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
          download
          eventName={AnalyticsEvents.DownloadPortfolio}
          eventParams={{ location: "footer" }}
        >
          Download Brochure
        </TrackedLink>
      </div>
      <p>© {new Date().getFullYear()} Enumclaw Forest Estate</p>
      <SocialLinks variant="footer" />
    </footer>
  );
}
