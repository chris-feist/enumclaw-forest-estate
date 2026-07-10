import Image from "next/image";

import { AnalyticsEvents } from "@/lib/analytics";
import { TrackedLink } from "./TrackedLink";

const gallerySections = [
  {
    title: "Kitchen & Gathering",
    description:
      "Bright, functional spaces designed for everyday living and entertaining.",
    photos: [
      [
        "/assets/photos/photo-03.jpg",
        "Great room with fireplace and built-ins",
        "wide",
      ],
      [
        "/assets/photos/photo-10.jpg",
        "Kitchen with custom cabinetry",
        "standard",
      ],
      [
        "/assets/photos/photo-08.jpg",
        "Kitchen and gathering space detail",
        "standard",
      ],
      ["/assets/photos/photo-18.jpg", "Kitchen detail and storage", "standard"],
    ],
  },
  {
    title: "Private Retreats",
    description:
      "Comfortable bedrooms, baths, and flexible spaces for family, guests, and work.",
    photos: [
      ["/assets/photos/photo-34.jpg", "Primary suite", "wide"],
      ["/assets/photos/photo-38.jpg", "Primary bathroom", "standard"],
      ["/assets/photos/photo-24.jpg", "Large bonus room", "standard"],
      ["/assets/photos/photo-23.jpg", "Commercial-style dog wash", "standard"],
    ],
  },
  {
    title: "Outdoor Living",
    description:
      "Covered patio space, lawn, fenced dog run, and room to enjoy the clearing.",
    photos: [
      ["/assets/photos/photo-45.jpg", "Covered patio", "wide"],
      ["/assets/photos/photo-47.jpg", "Rear exterior and lawn", "standard"],
      ["/assets/photos/photo-51.jpg", "Front exterior", "standard"],
      [
        "/assets/photos/photo-55.jpg",
        "Top-down aerial of the homesite",
        "standard",
      ],
    ],
  },
  {
    title: "Land, Trails & Views",
    description:
      "Aerial perspectives, private forest, trail access, and Mount Rainier views.",
    photos: [
      [
        "/assets/photos/photo-57.jpg",
        "Aerial view of the forested acreage",
        "wide",
      ],
      ["/assets/photos/photo-61.jpg", "Private walking trail", "standard"],
      ["/assets/photos/photo-64.jpg", "Property boundary aerial", "standard"],
      [
        "/assets/portfolio/mount-rainier-real-view.jpg",
        "Authentic Mount Rainier view",
        "standard",
      ],
    ],
  },
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="section cream enhanced-gallery">
      <div className="container">
        <p className="eyebrow">Curated gallery</p>

        <div className="split-heading">
          <h2>Explore the home, land, and lifestyle by category.</h2>
          <p>
            The gallery is organized the way buyers naturally experience the
            property: interiors first, then outdoor living, acreage, trails, and
            views.
          </p>
        </div>

        <div className="gallery-section-list">
          {gallerySections.map((section) => (
            <section className="gallery-category" key={section.title}>
              <div className="gallery-category-heading">
                <div>
                  <p className="eyebrow">{section.title}</p>
                  <h3>{section.title}</h3>
                </div>
                <p>{section.description}</p>
              </div>

              <div className="gallery-category-grid">
                {section.photos.map(([src, alt, layout]) => (
                  <figure
                    key={src}
                    className={
                      layout === "wide"
                        ? "gallery-category-wide"
                        : "gallery-category-standard"
                    }
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes={
                        layout === "wide"
                          ? "(max-width: 900px) 100vw, 760px"
                          : "(max-width: 900px) 100vw, 380px"
                      }
                    />
                  </figure>
                ))}
              </div>

              <TrackedLink
                href="#contact"
                className="gallery-category-link"
                eventName={AnalyticsEvents.GallerySection}
                eventParams={{ section: section.title }}
              >
                Ask about {section.title.toLowerCase()} →
              </TrackedLink>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
