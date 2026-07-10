import { property } from "@/lib/property";

export function PropertyJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: property.name,
    description:
      "Custom home on 19.55 private acres in Enumclaw, Washington, with forest privacy, Mount Rainier views, private trails, whole-home generator, and future shop potential.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23670 SE 448th St",
      addressLocality: "Enumclaw",
      addressRegion: "WA",
      postalCode: "98022",
      addressCountry: "US",
    },
    numberOfRooms: property.bedrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.squareFeet,
      unitCode: "FTK",
    },
    lotSize: {
      "@type": "QuantitativeValue",
      value: property.acres,
      unitText: "acres",
    },
    yearBuilt: property.yearBuilt,
    url: "https://www.enumclawforestestate.com/",
    image: "https://www.enumclawforestestate.com/assets/social/enumclaw-forest-estate-preview.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
