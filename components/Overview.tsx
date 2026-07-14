import { property, propertyDisplay } from "@/lib/property";

const facts = [
  // TODO: If compactPrice === to price, then use compactPrice
  [propertyDisplay.price, "Offered at"],
  [propertyDisplay.squareFeet, "Square feet"],
  [propertyDisplay.bedrooms, "Bedrooms"],
  [propertyDisplay.bathrooms, "Bathrooms"],
  [propertyDisplay.acres, "Private acres"],
  [propertyDisplay.yearBuilt, "Built"],
] as const;

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
          {facts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
