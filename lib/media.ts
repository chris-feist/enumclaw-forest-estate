export type GalleryPhotoLayout = "standard" | "wide";

export interface GalleryPhoto {
  src: string;
  alt: string;
  layout: GalleryPhotoLayout;
}

export const exteriorPhotos = [
  {
    src: "/assets/photos/photo-51.jpg",
    alt: "Front exterior of Enumclaw Forest Estate",
  },
  {
    src: "/assets/photos/photo-47.jpg",
    alt: "Covered rear patio and lawn",
  },
  {
    src: "/assets/photos/photo-55.jpg",
    alt: "Top-down aerial view of the homesite",
  },
  {
    src: "/assets/photos/photo-57.jpg",
    alt: "Aerial view of the forested acreage",
  },
  {
    src: "/assets/photos/photo-61.jpg",
    alt: "Existing trail spanning the wooded acreage",
  },
  {
    src: "/assets/photos/photo-63.jpeg",
    alt: "Twilight exterior of the residence",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/assets/photos/photo-03.jpg",
    alt: "Great room with built-ins and fireplace",
    layout: "wide",
  },
  {
    src: "/assets/photos/photo-10.jpg",
    alt: "Kitchen with floor-to-ceiling cabinetry",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-19.jpg",
    alt: "Hidden walk-in pantry",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-23.jpg",
    alt: "Commercial-style dog wash station",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-24.jpg",
    alt: "Large bonus room",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-34.jpg",
    alt: "Spacious primary suite",
    layout: "wide",
  },
  {
    src: "/assets/photos/photo-38.jpg",
    alt: "Primary bathroom with freestanding tub",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-45.jpg",
    alt: "Stamped concrete covered patio",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-51.jpg",
    alt: "Front exterior of the home",
    layout: "wide",
  },
  {
    src: "/assets/photos/photo-57.jpg",
    alt: "Aerial view of the property",
    layout: "standard",
  },
  {
    src: "/assets/photos/photo-67.jpg",
    alt: "Mount Rainier view from the property",
    layout: "standard",
  },
];

export const propertyVideoUrl =
  "https://listings.foto-guy.com/videos/019d3191-55d9-7303-8173-0973176473fd";
