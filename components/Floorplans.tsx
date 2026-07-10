import Image from "next/image";

import { AnalyticsEvents } from "@/lib/analytics";
import { media } from "@/lib/property";
import { TrackedLink } from "./TrackedLink";

const mainLevelRooms = [
  [
    "01",
    "Great Room",
    "Fireplace, built-ins, and open gathering space.",
    "/assets/photos/photo-03.jpg",
  ],
  [
    "02",
    "Chef's Kitchen",
    "Custom cabinetry, generous island, and entertaining flow.",
    "/assets/photos/photo-10.jpg",
  ],
  [
    "03",
    "Hidden Pantry",
    "A memorable everyday luxury with practical storage.",
    "/assets/photos/photo-19.jpg",
  ],
  [
    "04",
    "Office / Flex Bedroom",
    "Main-level flexibility for work, guests, hobbies, or a bedroom.",
    "/assets/photos/photo-02.jpg",
  ],
  [
    "05",
    "Covered Patio",
    "Outdoor living space directly connected to the home.",
    "/assets/photos/photo-45.jpg",
  ],
  [
    "06",
    "Dog Wash",
    "Practical utility space for acreage, pets, and outdoor life.",
    "/assets/photos/photo-23.jpg",
  ],
] as const;

const upperLevelRooms = [
  [
    "01",
    "Primary Suite",
    "A private upper-level retreat with generous proportions and direct access to the spa-inspired primary bath.",
    "/assets/photos/photo-34.jpg",
  ],
  [
    "02",
    "Oversized Laundry Room",
    "Generous workspace with extensive built-in cabinetry, abundant storage, and room to keep everyday household tasks organized.",
    "/assets/photos/photo-32.jpg",
  ],
  [
    "03",
    "Bedrooms",
    "Comfortable secondary bedrooms thoughtfully separated from the primary suite for privacy and flexibility.",
    "/assets/photos/photo-28.jpg",
  ],
  [
    "04",
    "Primary Bathroom",
    "Spa-inspired bath with dual vanities, a freestanding soaking tub, and an oversized walk-in shower.",
    "/assets/photos/photo-41.jpg",
  ],
  [
    "05",
    "Large Bonus Room",
    "An expansive flex space ideal for a media room, playroom, fitness area, or additional family gathering space.",
    "/assets/photos/photo-24.jpg",
  ],
] as const;

function FloorPlanSpread({
  title,
  image,
  rooms,
}: {
  title: string;
  image: string;
  rooms: readonly (readonly [string, string, string, string])[];
}) {
  return (
    <article className="interactive-floorplan-spread">
      <div className="floorplan-board">
        <Image src={image} alt={`${title} floor plan`} fill sizes="60vw" />
      </div>

      <div className="floorplan-room-panel">
        <p className="eyebrow">{title}</p>
        <h3>{title}</h3>
        <div className="floorplan-room-list">
          {rooms.map(([number, room, description, photo]) => (
            <TrackedLink
              key={room}
              href={media.matterport}
              target="_blank"
              rel="noreferrer"
              className="floorplan-room-card"
              eventName={AnalyticsEvents.FloorPlanRoom}
              eventParams={{ room, floor: title }}
            >
              <span>{number}</span>
              <div>
                <strong>{room}</strong>
                <p>{description}</p>
              </div>
              <div className="floorplan-room-photo">
                <Image src={photo} alt={room} fill sizes="84px" />
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Floorplans() {
  return (
    <section id="floorplans" className="section interactive-floorplans">
      <div className="container">
        <p className="eyebrow">Interactive floor plans</p>
        <div className="split-heading">
          <h2>Understand how the home lives.</h2>
          <p>
            Explore the main rooms, see supporting photos, then open the
            Matterport tour for a full walk-through experience.
          </p>
        </div>

        <div className="interactive-floorplan-list">
          <FloorPlanSpread
            title="Main Level"
            image={media.floorplans[0].url}
            rooms={mainLevelRooms}
          />
          <FloorPlanSpread
            title="Upper Level"
            image={media.floorplans[1].url}
            rooms={upperLevelRooms}
          />
        </div>

        <div className="floorplan-actions">
          <TrackedLink
            className="button button-dark"
            href={media.matterport}
            target="_blank"
            rel="noreferrer"
            eventName={AnalyticsEvents.MatterportOpen}
            eventParams={{ location: "floorplans" }}
          >
            Open Matterport Tour
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
