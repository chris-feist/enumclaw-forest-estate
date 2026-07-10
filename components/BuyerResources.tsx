import { AnalyticsEvents } from "@/lib/analytics";
import { listingSites, media, property } from "@/lib/property";
import { TrackedLink } from "./TrackedLink";

const primaryResources = [
  {
    title: "Property Portfolio",
    description:
      "The complete property book with maps, floor plans, trails, wetlands, wildlife, Mount Rainier views, and buyer reference materials.",
    href: "/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf",
    label: "Download PDF",
    download: true,
    meta: "25-page digital property book",
  },
  {
    title: "Matterport 3D Tour",
    description:
      "Walk through the interior online before scheduling a private showing.",
    href: media.matterport,
    label: "Open 3D Tour",
    download: false,
    meta: "Interactive interior walkthrough",
  },
  {
    title: "King County Parcel Record",
    description:
      "Review public parcel data, property details, tax information, and county reference material.",
    href: "https://blue.kingcounty.com/Assessor/eRealProperty/Dashboard.aspx?ParcelNbr=2220069212",
    label: "View County Record",
    download: false,
    meta: `Parcel ${property.parcelNumber}`,
  },
] as const;

const floorPlanResources = [
  {
    title: "Main Floor Plan",
    href: "/assets/floorplans/main-floor.jpg",
    label: "Open Main Level",
  },
  {
    title: "Upper Floor Plan",
    href: "/assets/floorplans/second-floor.jpg",
    label: "Open Upper Level",
  },
] as const;

export function BuyerResources() {
  return (
    <section
      className="section buyer-resources download-center"
      id="buyer-resources"
    >
      <div className="container">
        <div className="download-center-header">
          <p className="eyebrow">Buyer Download Center</p>
          <h2>Everything serious buyers need in one place.</h2>
          <p className="lead">
            Review the full property portfolio, explore the 3D tour, open floor
            plans, verify county records, and compare the listing across major
            real estate platforms.
          </p>
        </div>

        <div className="download-center-grid">
          {primaryResources.map((resource) => (
            <article
              className="download-card download-card-featured"
              key={resource.title}
            >
              <span>{resource.meta}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <TrackedLink
                className="button button-dark"
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  resource.href.startsWith("http") ? "noreferrer" : undefined
                }
                download={resource.download}
                eventName={
                  resource.download
                    ? AnalyticsEvents.DownloadPortfolio
                    : AnalyticsEvents.ViewPortfolio
                }
                eventParams={{
                  location: "download_center",
                  resource: resource.title,
                }}
              >
                {resource.label}
              </TrackedLink>
            </article>
          ))}
        </div>

        <div className="download-secondary-grid">
          <article className="download-card">
            <span>Floor Plans</span>
            <h3>Open floor plan images.</h3>
            <p>
              View the main and upper level plans directly, or use the enhanced
              floor plan section above for room-by-room context.
            </p>
            <div className="download-link-list">
              {floorPlanResources.map((resource) => (
                <TrackedLink
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  eventName={AnalyticsEvents.FloorPlanRoom}
                  eventParams={{
                    location: "download_center",
                    resource: resource.title,
                  }}
                >
                  {resource.label}
                </TrackedLink>
              ))}
            </div>
          </article>

          <article className="download-card">
            <span>Listing Platforms</span>
            <h3>Compare on your preferred site.</h3>
            <p>
              Browse the property on major consumer listing platforms using the
              same official listing information.
            </p>
            <div className="download-link-list">
              {listingSites.map((site) => (
                <TrackedLink
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  eventName={AnalyticsEvents.ListingSiteClicked}
                  eventParams={{ location: "download_center", site: site.name }}
                >
                  {site.name}
                </TrackedLink>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
