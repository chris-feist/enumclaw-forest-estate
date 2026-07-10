import { AnalyticsEvents } from "@/lib/analytics";
import { propertyFacts } from "@/lib/property";
import { TrackedLink } from "./TrackedLink";

export function PortfolioPromo() {
  return (
    <section className="section portfolio-promo" id="property-portfolio">
      <div className="container portfolio-promo-grid">
        <div className="portfolio-promo-copy">
          <p className="eyebrow">Property Portfolio</p>
          <h2>Download the full property book.</h2>
          <p className="lead">
            A polished digital portfolio with the full estate story: aerial maps,
            floor plans, trails, wetlands, wildlife, Mount Rainier views, and
            buyer reference materials.
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
              Download PDF
            </TrackedLink>
          </div>
        </div>

        <div className="portfolio-promo-card" aria-label="Property portfolio preview">
          <div className="portfolio-promo-image" />
          <div className="portfolio-promo-card-content">
            <span>{propertyFacts.acres} acres</span>
            <strong>Enumclaw Forest Estate</strong>
            <p>Modern Living. Immersed in Nature.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
