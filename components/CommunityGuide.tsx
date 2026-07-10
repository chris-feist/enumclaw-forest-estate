const places = [
  [
    "5 min",
    "Downtown Enumclaw",
    "Coffee, restaurants, grocery, boutiques, bars, breweries, and local services.",
  ],
  [
    "10–15 min",
    "Foothills & Recreation",
    "Trails, parks, golf, equestrian community, and open-space recreation nearby.",
  ],
  [
    "35–45 min",
    "Auburn / South Sound",
    "Larger retail, commuting corridors, services, and regional conveniences.",
  ],
  [
    "60+ min",
    "Mountain Adventures",
    "Crystal Mountain, Mount Rainier National Park access, hiking, skiing, and scenic drives.",
  ],
] as const;

export function CommunityGuide() {
  return (
    <section className="section community-guide" id="community">
      <div className="container">
        <div className="community-guide-header">
          <p className="eyebrow">Community & location</p>
          <h2>Private country living without giving up convenience.</h2>
        </div>

        <div className="community-guide-grid">
          {places.map(([time, title, description]) => (
            <article key={title}>
              <span>{time}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
