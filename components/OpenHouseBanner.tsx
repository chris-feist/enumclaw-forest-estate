import { TrackedLink } from "./TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import { getUpcomingOpenHouses } from "@/lib/property";

export function OpenHouseBanner() {
  if (!getUpcomingOpenHouses().length) {
    return null;
  }

  return (
    <aside className="open-house-banner" aria-label="Upcoming open houses">
      <span className="open-house-kicker">Open Houses This Weekend</span>
      <div className="open-house-times">
        {getUpcomingOpenHouses().map((openHouse) => (
          <span key={`${openHouse.date}-${openHouse.time}`}>
            <strong>{openHouse.label}</strong> {openHouse.time}
          </span>
        ))}
      </div>
      <TrackedLink
        className="open-house-link"
        href="https://www.google.com/maps/dir/?api=1&destination=23670+SE+448th+St%2C+Enumclaw%2C+WA+98022"
        eventName={AnalyticsEvents.OpenHouseCta}
        eventParams={{ location: "open_house_banner" }}
        target="_blank"
        rel="noreferrer"
        aria-label="Get directions to Enumclaw Forest Estate in Google Maps"
      >
        Get Directions
      </TrackedLink>
    </aside>
  );
}
