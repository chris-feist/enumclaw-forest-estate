import { OpenHouseBanner } from "@/components/OpenHouseBanner";
import { TrackedLink } from "@/components/TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import { media, property } from "@/lib/property";

export function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(12,28,21,.25),rgba(12,28,21,.72)),url('${media.hero}')`,
      }}
    >
      <OpenHouseBanner />

      <div className="hero-content">
        <p className="eyebrow light">
          23670 SE 448th Street · Enumclaw, Washington
        </p>
        <h1>{property.name}</h1>
        <p className="hero-tagline">{property.tagline}</p>
        <div className="hero-actions">
          <TrackedLink
            className="button button-light"
            href="#film"
            eventName={AnalyticsEvents.WatchFilm}
            eventParams={{ location: "hero" }}
          >
            Watch the Film
          </TrackedLink>
          <TrackedLink
            className="button button-outline"
            href="#contact"
            eventName={AnalyticsEvents.ScheduleTour}
            eventParams={{ location: "hero" }}
          >
            Schedule a Tour
          </TrackedLink>
          <TrackedLink
            className="button button-outline button-muted"
            href="/portfolio"
            eventName={AnalyticsEvents.ViewPortfolio}
            eventParams={{ location: "hero" }}
          >
            View Portfolio
          </TrackedLink>
        </div>
      </div>

      <a className="scroll-cue" href="#overview">
        Explore <span>↓</span>
      </a>
    </section>
  );
}
