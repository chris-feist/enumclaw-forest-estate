import { property } from "@/lib/property";
const facts = [
  ["$1,499,900", "Offered at"],
  [property.squareFeet.toLocaleString(), "Square feet"],
  [String(property.bedrooms), "Bedrooms"],
  [String(property.bathrooms), "Bathrooms"],
  [String(property.acres), "Private acres"],
  [String(property.yearBuilt), "Built"],
];
export function Overview() {
  return (
    <section id="overview" className="section cream">
      <div className="container">
        <p className="eyebrow">A rare Enumclaw retreat</p>
        <div className="overview-grid">
          <h2>Modern comfort, surrounded by nearly twenty private acres.</h2>
          <p className="lead">
            A thoughtfully designed craftsman home set within a secluded forest
            landscape, with Mount Rainier views, an established recreational
            trail with room to add more, space for RVs and future improvements,
            and everyday conveniences close at hand.
          </p>
        </div>
        <div className="facts">
          {facts.map(([v, l]) => (
            <div key={l}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
