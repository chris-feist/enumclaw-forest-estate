import Image from "next/image";
import { exteriorPhotos } from "@/lib/media";

export function Welcome() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="section-eyebrow mb-6">Private Forest Residence</div>
          <h2 className="font-serif text-5xl leading-tight text-forest md:text-7xl">
            Nearly twenty private acres. One modern retreat.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-charcoal/75">
            Hidden among mature Pacific Northwest evergreens, Enumclaw Forest Estate offers a rare blend of modern construction, quiet privacy, and everyday convenience just minutes from town.
          </p>
        </div>
        <div className="relative h-[520px] overflow-hidden rounded-t-full rounded-b-sm shadow-2xl">
          <Image src={exteriorPhotos[0].src} alt={exteriorPhotos[0].alt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
