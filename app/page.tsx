import { Contact } from "@/components/Contact";
import { Film } from "@/components/Film";
import { Floorplans } from "@/components/Floorplans";
import { Footer } from "@/components/Footer";
import { FutureShop } from "@/components/FutureShop";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HomeExperience } from "@/components/HomeExperience";
import { Land } from "@/components/Land";
import { Location } from "@/components/Location";
import { Matterport } from "@/components/Matterport";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";
import { PBRS } from "@/components/PBRS";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <Film />
      <HomeExperience />
      <Gallery />
      <Matterport />
      <Floorplans />
      <Land />
      <PBRS />
      <FutureShop />
      <Location />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
