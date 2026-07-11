import { Contact } from "@/components/Contact";
import { Film } from "@/components/Film";
import { Floorplans } from "@/components/Floorplans";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { FutureShop } from "@/components/FutureShop";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HomeExperience } from "@/components/HomeExperience";
import { Land } from "@/components/Land";
import { Location } from "@/components/Location";
import { LifestyleTimeline } from "@/components/LifestyleTimeline";
import { CommunityGuide } from "@/components/CommunityGuide";
import { Matterport } from "@/components/Matterport";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";
import { PBRS } from "@/components/PBRS";
import { PortfolioPromo } from "@/components/PortfolioPromo";
import { EstateAtGlance } from "@/components/EstateAtGlance";
import { StickyCTA } from "@/components/StickyCTA";
import { QuickNav } from "@/components/QuickNav";
import { BuyerResources } from "@/components/BuyerResources";
import { BuyerFAQ } from "@/components/BuyerFAQ";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <QuickNav />
      <Overview />
      <EstateAtGlance />
      <Film />
      <PortfolioPromo />
      <HomeExperience />
      <Gallery />
      <LifestyleTimeline />
      <Matterport />
      <Floorplans />
      <Land />
      <PBRS />
      <FutureShop />
      <Location />
      <CommunityGuide />
      <BuyerResources />
      <BuyerFAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
