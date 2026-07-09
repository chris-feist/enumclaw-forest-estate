import { media, property } from "@/lib/property";

export function Location() {
  return (
    <section id="location" className="section forest">
      <div className="container">
        <p className="eyebrow light">Location and views</p>
        <h2 className="light-heading">Secluded, not isolated.</h2>
        <p className="light-copy max-copy">Downtown Enumclaw is approximately five minutes away, placing shopping, restaurants, bars, breweries and local nightlife within easy reach.</p>
        <div className="location-grid">
          <figure className="mountain"><img src={media.mountain} alt="Mount Rainier view from the property" /><figcaption>A direct Mount Rainier view from the property</figcaption></figure>
          <figure><img src={media.location} alt="Aerial image labeling nearby schools and downtown Enumclaw" /><figcaption>Schools and town conveniences nearby</figcaption></figure>
        </div>
        <div className="school-strip">
          {property.schools.map((school) => (
            <span key={school.name}><strong>{school.name}</strong><small>Grades {school.grades} · {school.distance}</small></span>
          ))}
          <span><strong>Downtown Enumclaw</strong><small>Approx. 5 minutes · Shopping, dining, bars, breweries and nightlife</small></span>
        </div>
      </div>
    </section>
  );
}
