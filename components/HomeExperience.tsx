import { media } from "@/lib/property";

const features = [
  "Whole-home generator with automatic transfer switch",
  "Commercial dog wash station",
  "Floor-to-ceiling cabinetry and a hidden walk-in pantry",
  "Whole-home audio system",
  "Enhanced whole-home insulation",
  "Large upstairs bonus room",
  "Stamped-concrete covered patio and walkways",
  "Custom-built dining table included",
  "Four bedrooms, including a main-level bedroom",
  "Central air, heat pump, gas fireplace and tankless water heater",
  "1,000 sq. ft. attached garage, EV charging and RV parking",
  "Built-in vacuum, security system and high-tech cabling",
];

export function HomeExperience() {
  return (
    <section id="home" className="section">
      <div className="container">
        <p className="eyebrow">Explore the home</p>
        <div className="split-heading">
          <h2>Premium details, practical systems, and room to live well.</h2>
          <p>Built in 2019, the 3,820-square-foot residence pairs craftsman character with thoughtful upgrades, generous gathering spaces, and modern infrastructure designed for comfort in every season.</p>
        </div>
        <div className="interior-grid">
          {media.interiors.map(([title, url]) => (
            <figure key={title}>
              <img src={url} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="feature-panel">
          <h3>Notable features</h3>
          <div className="feature-list">{features.map((feature) => <div key={feature}>✓ <span>{feature}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
