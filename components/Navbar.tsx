import { BrandMark } from "./BrandMark";
export function Navbar() {
  return <header className="nav"><a href="#top" aria-label="Enumclaw Forest Estate home"><BrandMark light /></a><nav><a href="#home">The Home</a><a href="#land">The Land</a><a href="#pbrs">PBRS</a><a href="#location">Location</a><a href="#contact">Contact</a></nav></header>;
}
