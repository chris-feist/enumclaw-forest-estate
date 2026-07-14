import { AnalyticsEvents } from "@/lib/analytics";
import { property, propertyDisplay } from "@/lib/property";
import { TrackedLink } from "./TrackedLink";

export function PortfolioPromo() {
  return (
    <section className="section portfolio-promo" id="property-portfolio">
      <div className="container portfolio-promo-grid">
        <div className="portfolio-promo-copy">
          <p className="eyebrow">Property Portfolio</p>
          <h2>Explore the interactive property portfolio.</h2>
          <p className="lead">
            A polished, interactive presentation of the full estate story: aerial
            maps, floor plans, trails, wetlands, wildlife, Mount Rainier views,
            and buyer reference materials.
          </p>

          <div className="portfolio-promo-actions">
            <TrackedLink
              className="button button-dark"
              href="/portfolio"
              eventName={AnalyticsEvents.ViewPortfolio}
              eventParams={{ location: "portfolio_promo" }}
            >
              View Portfolio
            </TrackedLink>
            <TrackedLink
              className="button button-plain"
              href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
              download
              eventName={AnalyticsEvents.DownloadPortfolio}
              eventParams={{ location: "portfolio_promo" }}
            >
              Download Brochure
            </TrackedLink>
          </div>
        </div>

        <div
          className="portfolio-promo-card"
          aria-label="Property portfolio preview"
        >
          <div className="portfolio-promo-image" />
          <div className="portfolio-promo-card-content">
            <span>{propertyDisplay.acres} acres</span>
            <strong>{property.name}</strong>
            <p>{property.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
