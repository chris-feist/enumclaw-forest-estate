import { TrackedLink } from "./TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import { property, propertyDisplay } from "@/lib/property";

export function Contact() {
  const realtor = property.realtor;
  const showingSubject = encodeURIComponent(
    "Enumclaw Forest Estate Showing Request",
  );
  const showingBody = encodeURIComponent(
    `Hi ${realtor.name},

I would like to schedule a private tour of ${property.name} at ${propertyDisplay.fullAddress}.

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
            <TrackedLink
              className="button button-dark"
              href={`mailto:${realtor.email}?subject=${showingSubject}&body=${showingBody}`}
              eventName={AnalyticsEvents.ScheduleTour}
              eventParams={{ location: "contact_section" }}
            >
              Schedule a Private Tour
            </TrackedLink>
            <TrackedLink
              className="button button-plain"
              href={`tel:+1${realtor.phone.replaceAll("-", "")}`}
              eventName={AnalyticsEvents.CallTodd}
              eventParams={{ location: "contact_section" }}
            >
              Call Todd
            </TrackedLink>
            <TrackedLink
              className="button button-plain"
              href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
              download
              eventName={AnalyticsEvents.DownloadPortfolio}
              eventParams={{ location: "contact_section" }}
            >
              Download Portfolio
            </TrackedLink>
          </div>
        </div>

        <aside className="agent-card">
          <img src={realtor.logoUrl} alt="KW Mountains to Sound Realty" />
          <h3>{realtor.name}</h3>
          <p>{realtor.company}</p>
          <TrackedLink
            href={`mailto:${realtor.email}`}
            eventName={AnalyticsEvents.EmailTodd}
            eventParams={{ location: "agent_card" }}
          >
            {realtor.email}
          </TrackedLink>
          <TrackedLink
            href={`tel:+1${realtor.phone.replaceAll("-", "")}`}
            eventName={AnalyticsEvents.CallTodd}
            eventParams={{ location: "agent_card" }}
          >
            {realtor.phone}
          </TrackedLink>
          <small>
            NWMLS #{property.mlsNumber}. Listing information is believed
            reliable but is not guaranteed. Buyer to verify all information.
          </small>
        </aside>
      </div>
    </section>
  );
}
