const moments = [
  {
    time: "Morning",
    title: "Quiet before the day begins.",
    text: "Coffee, birdsong, and the soft light of the forest before town wakes up.",
  },
  {
    time: "Midday",
    title: "Space for work, play, and exploration.",
    text: "Remote work feels different with nearly twenty acres outside the window and trails just beyond the clearing.",
  },
  {
    time: "Afternoon",
    title: "Private trails replace neighborhood sidewalks.",
    text: "Walk the land, watch hawks overhead, and experience the property from within the trees.",
  },
  {
    time: "Evening",
    title: "Outdoor living becomes second nature.",
    text: "Dinner on the covered patio, quiet surroundings, and room for everyone to slow down.",
  },
];

export function LifestyleTimeline() {
  return (
    <section className="section lifestyle-timeline" id="daily-life">
      <div className="container lifestyle-timeline-grid">
        <div className="lifestyle-timeline-intro">
          <p className="eyebrow light">Daily life</p>
          <h2 className="light-heading">A day at Enumclaw Forest Estate.</h2>
          <p className="light-copy">
            The property is more than a beautiful home on acreage. It changes
            the pace of daily life: more privacy, more quiet, more room to move,
            and more connection to the outdoors.
          </p>
        </div>

        <div className="timeline-list">
          {moments.map((moment) => (
            <article key={moment.time}>
              <span>{moment.time}</span>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
