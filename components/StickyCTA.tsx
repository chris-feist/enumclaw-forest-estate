import { property } from "@/lib/property";

export function StickyCTA() {
  const realtor = property.realtor;
  const showingSubject = encodeURIComponent("Enumclaw Forest Estate Showing Request");
  const showingBody = encodeURIComponent(
    `Hi ${realtor.name},

I would like to schedule a private tour of ${property.name} at ${property.address}.

Thank you,`
  );

  return (
    <div className="sticky-cta" aria-label="Schedule a private tour">
      <a
        className="button button-dark"
        href={`mailto:${realtor.email}?subject=${showingSubject}&body=${showingBody}`}
      >
        Schedule a Private Tour
      </a>
    </div>
  );
}
