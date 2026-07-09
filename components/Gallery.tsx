import Image from "next/image";

import { galleryPhotos } from "@/lib/media";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="section cream"
    >
      <div className="container">
        <p className="eyebrow">Photo gallery</p>

        <div className="split-heading">
          <h2>
            Thoughtfully finished from the kitchen to the covered patio.
          </h2>

          <p>
            A curated look at the home, land, premium features, and the
            mountain view. The full set of web-ready listing photos is included
            locally in this build.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.src}
              className={
                photo.layout === "wide"
                  ? "gallery-wide"
                  : "gallery-standard"
              }
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.layout === "wide"
                    ? "(max-width: 900px) 100vw, 1240px"
                    : "(max-width: 900px) 100vw, 610px"
                }
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
