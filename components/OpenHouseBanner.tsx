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
        href="#contact"
        eventName={AnalyticsEvents.OpenHouseCta}
        eventParams={{ location: "open_house_banner" }}
      >
        Schedule a Private Tour
      </TrackedLink>
    </aside>
  );
}
