import { SocialLinks } from "./SocialLinks";
import { property } from "@/lib/property";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer>
      <BrandMark light />
      <div>
        <p>{property.address}</p>
        <p>
          Presented by {property.realtor.name} · {property.realtor.company}
        </p>
        <p>NWMLS #{property.mlsNumber}</p>
      </div>
      <div className="footer-links">
        <a href="/portfolio">View Portfolio</a>
        <a href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf" download>
          Download PDF
        </a>
      </div>
      <p>© {new Date().getFullYear()} Enumclaw Forest Estate</p>
      <SocialLinks variant="footer" />
    </footer>
  );
}
