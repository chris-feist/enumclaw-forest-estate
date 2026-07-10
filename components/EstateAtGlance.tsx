import { propertyFacts } from "@/lib/property";

const estateItems = [
  ["Acreage", `${propertyFacts.acres} Acres`],
  ["Living Area", `${propertyFacts.squareFeet} Sq Ft`],
  ["Bedrooms", propertyFacts.bedrooms],
  ["Bathrooms", propertyFacts.bathrooms],
  ["Garage", propertyFacts.garage],
  ["Built", propertyFacts.yearBuilt],
];

const lifestyleItems = [
  ["Private Forest", "Mature Trees"],
  ["Trails", propertyFacts.trails],
  ["Views", propertyFacts.views],
  ["Generator", propertyFacts.generator],
  ["Shop", "Potential Location"],
  ["HOA", "No HOA"],
];

export function EstateAtGlance() {
  return (
    <section className="section estate-glance">
      <div className="container">
        <div className="estate-glance-heading">
          <p className="eyebrow">Estate at a glance</p>
          <h2>The essentials, beautifully simplified.</h2>
        </div>

        <div className="estate-glance-grid">
          <div>
            <h3>Estate</h3>
            <dl>
              {estateItems.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3>Lifestyle</h3>
            <dl>
              {lifestyleItems.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
