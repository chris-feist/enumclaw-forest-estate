import Image from "next/image";
import { galleryPhotos } from "@/lib/media";

export function Gallery() {
  return (
    <section id="gallery" className="section cream">
      <div className="container">
        <p className="eyebrow">Photo gallery</p>
        <div className="split-heading">
          <h2>Thoughtfully finished from the kitchen to the covered patio.</h2>
          <p>A curated look at the home, land, premium features, and the mountain view. The full set of web-ready listing photos is included locally in this build.</p>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <figure key={photo.src} className={index % 5 === 0 ? "gallery-wide" : ""}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
