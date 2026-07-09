import { getUpcomingOpenHouses, property } from "@/lib/property";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

export function OpenHouseBanner() {
  if (!getUpcomingOpenHouses().length) {
    return null;
  }

  return (
    <aside className="open-house-banner" aria-label="Upcoming open houses">
      <span className="open-house-kicker">Open Houses This Weekend</span>
      <div className="open-house-times">
        {getUpcomingOpenHouses().map((openHouse) => (
          <span key={`${formatDate(openHouse.date)}-${openHouse.time}`}>
            <strong>{formatDate(openHouse.date)}</strong> {openHouse.time}
          </span>
        ))}
      </div>
      <a className="open-house-link" href="#contact">
        Schedule a Private Tour
      </a>
    </aside>
  );
}
