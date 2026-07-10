import { property } from "@/lib/property";

const links = [
  ["Film", "#film"],
  ["Gallery", property.sectionLinks.gallery],
  ["Floor Plans", property.sectionLinks.floorplans],
  ["Land", property.sectionLinks.land],
  ["Location", property.sectionLinks.location],
  ["Downloads", "#buyer-resources"],
  ["Portfolio", "/portfolio"],
] as const;

export function QuickNav() {
  return (
    <nav className="quick-nav" aria-label="Property section navigation">
      {links.map(([label, href]) => (
        <a key={label} href={href} aria-label={`Jump to ${label}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}
