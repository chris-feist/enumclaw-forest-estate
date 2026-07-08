import { BrandMark } from "./BrandMark"; import { property } from "@/lib/property";
export function Footer(){return <footer><BrandMark light/><div><p>{property.address}</p><p>Presented by Todd Huizenga · KW Mountains to Sound Realty</p></div><p>© {new Date().getFullYear()} Enumclaw Forest Estate</p></footer>}
