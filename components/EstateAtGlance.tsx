import { property, propertyDisplay } from "@/lib/property";

const estateItems = [
  ["Acreage", `${propertyDisplay.acres} Acres`],
  ["Living Area", `${propertyDisplay.squareFeet} Sq Ft`],
  ["Bedrooms", propertyDisplay.bedrooms],
  ["Bathrooms", propertyDisplay.bathrooms],
  ["Garage", propertyDisplay.garage],
  ["Built", propertyDisplay.yearBuilt],
] as const;

const lifestyleItems = [
  ["Private Forest", "Mature Trees"],
  ["Trails", property.features.trails],
  ["Views", property.features.views],
  ["Generator", property.features.generator],
  ["Shop", "Potential Location"],
  ["HOA", property.features.hoa],
] as const;

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
