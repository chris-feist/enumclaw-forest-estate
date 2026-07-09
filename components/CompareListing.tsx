import { listingSites } from "@/lib/property";
import { ListingSiteCard } from "./ListingSiteCard";

export function CompareListing() {
  return (
    <section className="section compare-listing" id="listing-sites">
      <div className="section-kicker">Compare This Listing</div>
      <h2>View this property on your favorite real estate platform.</h2>
      <p>
        Prefer browsing on a familiar listing site? You can also find the
        property on these major real estate platforms.
      </p>

      <div className="listing-sites-grid">
        {listingSites.map((site) => (
          <ListingSiteCard key={site.name} name={site.name} url={site.url} />
        ))}
      </div>

      <p className="listing-sites-note">
        Looking for the most complete property experience? This website includes
        the full photo gallery, drone video, floor plans, Matterport tour,
        feature details, and additional information that may not appear on every
        listing site.
      </p>
    </section>
  );
}
