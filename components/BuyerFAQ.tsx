const questions = [
  [
    "What makes this property different from a typical luxury home?",
    "It combines a modern custom home with 19.55 private acres, mature forest, private trails, Mount Rainier views, whole-home generator, and future shop potential.",
  ],
  [
    "Can buyers review the property before touring?",
    "Yes. The website includes a Matterport 3D tour, floor plans, curated photo gallery, county parcel link, and downloadable property portfolio.",
  ],
  [
    "Is the property secluded?",
    "The setting feels private and wooded, while downtown Enumclaw and everyday conveniences remain nearby.",
  ],
  [
    "Where can buyers find county information?",
    "The Buyer Download Center links directly to the King County parcel record for public property data and reference materials.",
  ],
] as const;

export function BuyerFAQ() {
  return (
    <section className="section buyer-faq">
      <div className="container">
        <div className="buyer-faq-header">
          <p className="eyebrow">Buyer FAQ</p>
          <h2>Helpful answers before your private tour.</h2>
        </div>
        <div className="buyer-faq-grid">
          {questions.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
