import { BrandMark } from "./BrandMark";
import { SocialLinks } from "./SocialLinks";
import { property } from "@/lib/property";

export function Navbar() {
  return (
    <header className="nav">
      <a href="#top" aria-label="Enumclaw Forest Estate home">
        <BrandMark light />
      </a>
      <nav>
        <a href="#home">The Home</a>
        <a href={property.sectionLinks.gallery}>Gallery</a>
        <a href={property.sectionLinks.floorplans}>Floorplans</a>
        <a href="/portfolio">Portfolio</a>
        <a href={property.sectionLinks.land}>The Land</a>
        <a href="#pbrs">PBRS</a>
        <a href={property.sectionLinks.location}>Location</a>
        <a href={property.sectionLinks.contact}>Contact</a>
        <SocialLinks variant="header" />
      </nav>
    </header>
  );
}
