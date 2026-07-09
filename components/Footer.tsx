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
      <p>© {new Date().getFullYear()} Enumclaw Forest Estate</p>
      <SocialLinks variant="footer" />
    </footer>
  );
}
