import { SocialLinks } from "./SocialLinks";
import { property } from "@/lib/property";

export function Contact() {
  const realtor = property.realtor;
  const showingSubject = encodeURIComponent(
    "Enumclaw Forest Estate Showing Request",
  );
  const showingBody = encodeURIComponent(
    `Hi ${realtor.name},

I would like to schedule a private tour of ${property.name} at ${property.address}.

Thank you,`,
  );

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Private showings</p>
          <h2>Come experience the estate.</h2>
          <p className="lead">
            Photos tell part of the story. The privacy, scale, trail and view
            are best understood in person.
          </p>
          <div className="contact-actions">
            <a
              className="button button-dark"
              href={`mailto:${realtor.email}?subject=${showingSubject}&body=${showingBody}`}
            >
              Schedule a Private Tour
            </a>
            <a
              className="button button-plain"
              href={`tel:+1${realtor.phone.replaceAll("-", "")}`}
            >
              Call Todd
            </a>
          </div>
        </div>

        <aside className="agent-card">
          <img src={realtor.logoUrl} alt="KW Mountains to Sound Realty" />
          <h3>{realtor.name}</h3>
          <p>{realtor.company}</p>
          <a href={`mailto:${realtor.email}`}>{realtor.email}</a>
          <a href={`tel:+1${realtor.phone.replaceAll("-", "")}`}>
            {realtor.phone}
          </a>
          <small>
            NWMLS #{property.mlsNumber}. Listing information is believed
            reliable but is not guaranteed. Buyer to verify all information.
          </small>
        </aside>
      </div>
    </section>
  );
}
