import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";
import { AnalyticsEvents } from "@/lib/analytics";
import {
  listingSites,
  portfolioHighlights,
  property,
  propertyFacts,
} from "@/lib/property";
import "./portfolio.css";

const heroImage = "/assets/photos/photo-54.jpg";
const lifestyleImage = "/assets/photos/photo-18.jpg";
const aerialImage = "/assets/photos/photo-55.jpg";
const trailMapImage = "/assets/portfolio/forest-trails.png";
const pbrsClearingImage = "/assets/portfolio/site-clearing-pbrs.png";
const wetlandBufferImage = "/assets/portfolio/site-plan-wetland-buffer.png";
const shopConceptImage = "/assets/photos/photo-55.jpg";
const estateOverviewMap = "/assets/portfolio/estate-overview-map.png";
const homeSectionImage = "/assets/photos/photo-55.jpg";
const kitchenSectionImage = "/assets/photos/photo-18.jpg";
const livingSectionImage = "/assets/photos/photo-57.jpg";

const wildlifeHeroImage = "/assets/portfolio/wildlife-eagle.jpg";
const wildlifeSecondImage = "/assets/portfolio/wildlife-hawks-nest.jpg";
const wildlifeThirdImage = "/assets/portfolio/wildlife-hawk.jpg";
const wildlifeFourthImage = "/assets/portfolio/wildlife-hawk-close.jpg";
const detailSectionImage = "/assets/photos/photo-60.jpg";
const realRainierImage = "/assets/portfolio/mount-rainier-real-view.jpg";
const mainFloorPlanImage = "/assets/floorplans/main-floor.jpg";
const secondFloorPlanImage = "/assets/floorplans/second-floor.jpg";
const primarySuiteImage = "/assets/photos/photo-34.jpg";
const primaryBathImage = "/assets/photos/photo-38.jpg";
const patioImage = "/assets/photos/photo-45.jpg";
const mountainViewImage = "/assets/photos/photo-67.jpg";
const seasonsSpringImage = "/assets/photos/photo-61.jpg";
const seasonsSummerImage = "/assets/photos/summer-patio-lawn.jpg";
const seasonsFallImage = "/assets/photos/photo-57.jpg";
const seasonsWinterImage = "/assets/photos/winter-backyard-forest.jpg";
const differenceImage = "/assets/photos/photo-55.jpg";
const rarityImage = "/assets/photos/photo-54.jpg";
const closingImage = "/assets/photos/photo-63.jpeg";

const glanceItems = [
  ["Acreage", `${propertyFacts.acres} Acres`],
  ["Living Area", `${propertyFacts.squareFeet} Sq Ft`],
  ["Bedrooms", propertyFacts.bedrooms],
  ["Bathrooms", propertyFacts.bathrooms],
  ["Garage", propertyFacts.garage],
  ["Year Built", propertyFacts.yearBuilt],
  ["Generator", propertyFacts.generator],
  ["Views", propertyFacts.views],
  ["Trails", propertyFacts.trails],
  ["MLS", `#${propertyFacts.mls}`],
];

export const metadata = {
  title: "Property Portfolio | Enumclaw Forest Estate",
  description:
    "Download and explore the premium digital property portfolio for Enumclaw Forest Estate, a custom home on 19.55 private acres in Enumclaw, Washington.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Property Portfolio | Enumclaw Forest Estate",
    description:
      "Explore the full property book with aerial maps, floor plans, trails, wetlands, wildlife, Mount Rainier views, and buyer resources.",
    url: "/portfolio",
    images: [
      {
        url: "/assets/social/enumclaw-forest-estate-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Enumclaw Forest Estate property portfolio preview",
      },
    ],
  },
};

function PortfolioPage({
  children,
  className = "",
  page,
}: {
  children: React.ReactNode;
  className?: string;
  page: string;
}) {
  return (
    <section className={`portfolio-page ${className}`}>{children}</section>
  );
}

export default function PropertyPortfolioPage() {
  return (
    <main id="main-content" className="portfolio">
      <div className="portfolio-actions-shell">
        <div className="portfolio-actions">
          <div className="portfolio-actions-identity">
            <span>Enumclaw Forest Estate</span>
            <strong>Property Portfolio</strong>
          </div>

          <div className="portfolio-actions-links">
            <TrackedLink
              href="/"
              className="portfolio-back-link"
              eventName={AnalyticsEvents.ViewPortfolio}
              eventParams={{
                location: "portfolio_header",
                action: "back_home",
              }}
            >
              Back to Property Website
            </TrackedLink>

            <TrackedLink
              href="/assets/portfolio/enumclaw-forest-estate-property-portfolio.pdf"
              className="portfolio-print-button"
              download
              eventName={AnalyticsEvents.DownloadPortfolio}
              eventParams={{ location: "portfolio_header" }}
            >
              Download Brochure
            </TrackedLink>
          </div>
        </div>
      </div>

      <PortfolioPage className="portfolio-cover" page="Cover">
        <Image
          src={heroImage}
          alt="Aerial view of Enumclaw Forest Estate surrounded by private forest"
          fill
          priority
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-cover-overlay" />
        <div className="portfolio-cover-content">
          <p className="portfolio-kicker">Property Portfolio</p>
          <h1>{propertyFacts.name}</h1>
          <p className="portfolio-address">
            {propertyFacts.address}
            <br />
            {propertyFacts.cityState}
          </p>
          <p className="portfolio-cover-line">
            Nearly 20 Private Acres • Custom Home • Mount Rainier Views
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-quote-page" page="02">
        <blockquote>
          <span>Some homes are simply places to live.</span>
          <strong>Others become places you’ll never want to leave.</strong>
        </blockquote>
        <p>
          Prepared exclusively for prospective buyers of {propertyFacts.name}.
        </p>
      </PortfolioPage>

      <PortfolioPage className="portfolio-story-page" page="03">
        <div className="portfolio-story-copy">
          <p className="portfolio-kicker">The Experience</p>
          <h2>More Than a Home</h2>
          <p>
            Some properties offer more bedrooms. Others offer more acreage. Very
            few offer something that is becoming increasingly difficult to find.
          </p>
          <p>
            Nearly twenty private acres. Towering evergreens. Mount Rainier
            rising above the horizon. Peaceful trails. The quiet confidence that
            comes from being surrounded by nature while remaining minutes from
            town.
          </p>
          <p>
            Enumclaw Forest Estate is not simply a beautiful custom home. It is
            a place designed for a different pace of life.
          </p>
        </div>
        <div className="portfolio-story-image">
          <Image
            src={lifestyleImage}
            alt="Interior view showcasing custom cabinetry and luxury finishes"
            fill
            sizes="50vw"
          />
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-love-page" page="04">
        <p className="portfolio-kicker">Why Buyers Fall in Love</p>
        <h2>Ten reasons this property stands apart.</h2>
        <div className="portfolio-highlight-grid">
          {portfolioHighlights.map((item, index) => (
            <article key={item.title} className="portfolio-highlight-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-glance-page" page="05">
        <div className="portfolio-glance-header">
          <p className="portfolio-kicker">Property at a Glance</p>
          <h2>The essentials, beautifully simplified.</h2>
        </div>
        <div className="portfolio-glance-grid">
          {glanceItems.map(([label, value]) => (
            <article key={label} className="portfolio-glance-card">
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
        <div className="portfolio-included">
          <h3>Included in the Full Portfolio</h3>
          <p>
            Home highlights, floor plans, property maps, trail map, PBRS
            overview, wetland reference, future shop potential, wildlife
            gallery, FAQ, and local area resources.
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-divider-page" page="06">
        <Image
          src={aerialImage}
          alt="Aerial view of the private forest and homesite"
          fill
          sizes="100vw"
        />
        <div className="portfolio-cover-overlay" />
        <div className="portfolio-divider-content">
          <p className="portfolio-kicker">Coming Next</p>
          <h2>Discover the Land</h2>
          <p>
            Trail maps, cleared homesite plans, PBRS context, wetland reference
            maps, and future shop vision.
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-estate-overview-page"
        page="LAND • THE ESTATE"
      >
        <div className="portfolio-estate-intro">
          <p className="portfolio-kicker">Discover</p>
          <h2>The Estate</h2>
          <p>
            Hidden behind a private driveway on 19.55 acres, Enumclaw Forest
            Estate offers an uncommon balance of luxury living and natural
            beauty. The custom home sits within its own private clearing,
            surrounded by mature forest, established walking trails, protected
            wetlands, and space for future possibilities.
          </p>
          <div
            className="portfolio-estate-stat-row"
            aria-label="Property summary"
          >
            <span>19.55 Acres</span>
            <span>Built 2019</span>
            <span>3,476 SF</span>
            <span>4 Bedrooms</span>
            <span>3.5 Baths</span>
            <span>3-Car Garage</span>
          </div>
        </div>

        <figure className="portfolio-estate-map-frame">
          <Image
            src={estateOverviewMap}
            alt="Annotated aerial map showing the custom home, private driveway, trail network, wetlands, and potential shop location"
            fill
            sizes="100vw"
            className="portfolio-estate-map-image"
          />
          <figcaption>
            The custom residence occupies a thoughtfully cleared homesite
            surrounded by mature forest, providing privacy while preserving the
            natural character of the property.
          </figcaption>
        </figure>

        <div className="portfolio-estate-highlights">
          <article>
            <span>01</span>
            <h3>Custom Home</h3>
            <p>Thoughtfully positioned within its own private clearing.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Private Trail Network</h3>
            <p>Established walking trails wind through the mature woodland.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Protected Wetlands</h3>
            <p>Natural habitat that enhances privacy and forest character.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Potential Shop Location</h3>
            <p>
              Cleared area offering future flexibility, subject to verification.
            </p>
          </article>
          <article>
            <span>05</span>
            <h3>Private Driveway</h3>
            <p>A long approach creates a quiet sense of arrival.</p>
          </article>
          <article>
            <span>06</span>
            <h3>Nearly Twenty Acres</h3>
            <p>
              A rare blend of usable homesite, trails, forest, and open
              possibility.
            </p>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-home-divider-page"
        page="HOME • INTRODUCTION"
      >
        <Image
          src={homeSectionImage}
          alt="Aerial view of the custom home and private homesite"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-cover-overlay" />
        <div className="portfolio-divider-content">
          <p className="portfolio-kicker">The Home</p>
          <h2>Modern living, surrounded by forest.</h2>
          <p>
            Thoughtfully positioned within its own private clearing, the home
            offers generous living space, refined finishes, and a strong
            connection to the land around it.
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-home-highlights-page"
        page="HOME • HIGHLIGHTS"
      >
        <div className="portfolio-home-highlight-copy">
          <p className="portfolio-kicker">Interior Highlights</p>
          <h2>Designed for everyday comfort.</h2>
          <p>
            The home balances polished custom details with warm, highly livable
            spaces - from the kitchen and gathering areas to the private
            bedrooms, office spaces, and outdoor living areas.
          </p>
        </div>

        <div className="portfolio-home-photo-grid">
          <figure className="portfolio-home-photo-large">
            <Image
              src={kitchenSectionImage}
              alt="Kitchen and custom cabinetry"
              fill
              sizes="62vw"
            />
            <figcaption>Designed for gathering.</figcaption>
          </figure>
          <figure>
            <Image
              src={livingSectionImage}
              alt="Custom home interior detail"
              fill
              sizes="32vw"
            />
            <figcaption>Comfortable everyday living.</figcaption>
          </figure>
          <figure>
            <Image
              src={detailSectionImage}
              alt="Property lifestyle and home detail"
              fill
              sizes="32vw"
            />
            <figcaption>Refined finishes throughout.</figcaption>
          </figure>
        </div>

        <div className="portfolio-home-feature-row">
          <article>
            <span>01</span>
            <h3>Open Living</h3>
            <p>
              Spaces designed for connection, entertaining, and quiet nights at
              home.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Custom Kitchen</h3>
            <p>
              Thoughtful cabinetry, generous prep areas, and a natural gathering
              point.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Private Retreats</h3>
            <p>
              Bedrooms and flexible spaces that support work, rest, and family
              life.
            </p>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-floorplan-page"
        page="HOME • MAIN LEVEL"
      >
        <div className="portfolio-floorplan-header">
          <p className="portfolio-kicker">Floor Plan</p>
          <h2>Main level living, designed for connection.</h2>
          <p>
            The main level brings everyday function and entertaining together:
            generous gathering spaces, a chef&apos;s kitchen, covered outdoor
            living, a private primary suite, and practical utility spaces that
            support acreage life.
          </p>
        </div>

        <div className="portfolio-floorplan-layout">
          <figure className="portfolio-floorplan-frame">
            <Image
              src={mainFloorPlanImage}
              alt="Main floor plan"
              fill
              sizes="62vw"
              className="portfolio-floorplan-image"
            />
          </figure>
          <div className="portfolio-floorplan-callouts">
            <article>
              <span>01</span>
              <h3>Great Room</h3>
              <p>
                Open gathering space for daily life, entertaining, and quiet
                evenings at home.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Chef&apos;s Kitchen</h3>
              <p>
                Designed as the natural center of the home, with flow to dining
                and living areas.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Hidden Pantry</h3>
              <p>
                Practical storage and prep space tucked cleanly out of view.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Covered Patio</h3>
              <p>
                Outdoor living that connects the home to the surrounding forest
                and open yard.
              </p>
            </article>
            <article>
              <span>05</span>
              <h3>Primary Suite</h3>
              <p>
                A private retreat thoughtfully separated from the main gathering
                areas.
              </p>
            </article>
            <article>
              <span>06</span>
              <h3>Garage & Utility</h3>
              <p>
                Generous covered parking, storage, mud room functionality, and
                dog wash practicality.
              </p>
            </article>
          </div>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-floorplan-page"
        page="HOME • UPPER LEVEL"
      >
        <div className="portfolio-floorplan-header">
          <p className="portfolio-kicker">Floor Plan</p>
          <h2>Room for family, guests, work, and play.</h2>
          <p>
            The upper level adds flexibility, with bedrooms, bonus space, and
            room to adapt as needs change over time. It&apos;s a home that can
            support quiet work, busy family life, visiting guests, and space to
            spread out.
          </p>
        </div>

        <div className="portfolio-floorplan-layout portfolio-floorplan-layout-reverse">
          <div className="portfolio-floorplan-callouts">
            <article>
              <span>01</span>
              <h3>Bonus Room</h3>
              <p>
                A generous flexible area for media, play, fitness, hobbies, or
                guests.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Additional Bedrooms</h3>
              <p>
                Comfortable private spaces for family, visitors, or long-term
                flexibility.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Office / Flex Space</h3>
              <p>
                Dedicated room for remote work, creative projects, or quiet
                study.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Storage</h3>
              <p>
                Practical square footage that makes the home easier to live in
                every day.
              </p>
            </article>
          </div>
          <figure className="portfolio-floorplan-frame">
            <Image
              src={secondFloorPlanImage}
              alt="Upper floor plan"
              fill
              sizes="62vw"
              className="portfolio-floorplan-image"
            />
          </figure>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-features-page" page="HOME • FEATURES">
        <div className="portfolio-features-header">
          <p className="portfolio-kicker">Luxury Features</p>
          <h2>Elegant where it should be. Practical where it matters.</h2>
          <p>
            The best acreage homes are more than beautiful. They work hard every
            day. This home combines refined finishes, modern comfort, and the
            practical spaces that make living on nearly twenty acres easier.
          </p>
        </div>

        <div className="portfolio-features-grid">
          <article>
            <span>Luxury Living</span>
            <h3>Designed to feel special.</h3>
            <ul>
              <li>Custom-built home</li>
              <li>Quartz surfaces</li>
              <li>Designer cabinetry</li>
              <li>Large picture windows</li>
              <li>Open entertaining spaces</li>
            </ul>
          </article>
          <article>
            <span>Everyday Comfort</span>
            <h3>Built for real life.</h3>
            <ul>
              <li>Whole-home generator</li>
              <li>Covered outdoor living</li>
              <li>Generous garage space</li>
              <li>Efficient floor plan</li>
              <li>Flexible living areas</li>
            </ul>
          </article>
          <article>
            <span>Outdoor Lifestyle</span>
            <h3>Space to breathe.</h3>
            <ul>
              <li>Private forest setting</li>
              <li>Walking trail network</li>
              <li>Potential shop location</li>
              <li>Wildlife habitat</li>
              <li>19.55 private acres</li>
            </ul>
          </article>
        </div>

        <div className="portfolio-features-photo-row">
          <figure>
            <Image
              src={primarySuiteImage}
              alt="Primary suite"
              fill
              sizes="33vw"
            />
            <figcaption>Private retreat</figcaption>
          </figure>
          <figure>
            <Image
              src={primaryBathImage}
              alt="Primary bathroom"
              fill
              sizes="33vw"
            />
            <figcaption>Refined finishes</figcaption>
          </figure>
          <figure>
            <Image src={patioImage} alt="Covered patio" fill sizes="33vw" />
            <figcaption>Outdoor living</figcaption>
          </figure>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-life-page"
        page="LIFESTYLE • DAILY LIFE"
      >
        <Image
          src={mountainViewImage}
          alt="Mount Rainier view from the property"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-cover-overlay portfolio-life-overlay" />
        <div className="portfolio-life-content">
          <p className="portfolio-kicker">Life at Enumclaw Forest Estate</p>
          <h2>Life moves differently here.</h2>
          <p>
            Morning begins with coffee overlooking your own forest. Private
            trails replace sidewalks. Hawks circle overhead. Owls call at dusk.
            The changing seasons become part of everyday life.
          </p>
          <p>
            Whether entertaining friends on the covered patio, exploring the
            trails, or simply enjoying the quiet of nearly twenty acres, this is
            a home designed to slow life down without sacrificing modern luxury.
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-map-page" page="LAND • TRAILS">
        <div className="portfolio-map-copy">
          <p className="portfolio-kicker">Private Trail Network</p>
          <h2>Explore your own forest.</h2>
          <p>
            The property includes an established trail system that gives future
            owners a simple way to experience the forest, explore the acreage,
            and imagine additional outdoor possibilities over time.
          </p>
          <div className="portfolio-map-legend" aria-label="Trail map legend">
            <span>
              <i className="trail-active" /> Active trails
            </span>
            <span>
              <i className="trail-historic" /> Historic trails, not currently
              maintained
            </span>
          </div>
        </div>
        <div className="portfolio-map-frame">
          <Image
            src={trailMapImage}
            alt="Trail map showing active and historic forest trails"
            fill
            sizes="58vw"
            className="portfolio-map-image"
          />
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-nature-divider-page"
        page="LIFESTYLE • NATURE"
      >
        <Image
          src={wildlifeHeroImage}
          alt="Wildlife photographed on or near the property"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-cover-overlay" />
        <div className="portfolio-divider-content">
          <p className="portfolio-kicker">Nature at Your Doorstep</p>
          <h2>A living forest.</h2>
          <p>
            Mature trees, protected natural areas, and quiet acreage create a
            memorable setting where bald eagles, hawks, owls, and native
            songbirds are part of everyday life.
          </p>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-nature-gallery-page"
        page="LIFESTYLE • WILDLIFE"
      >
        <div className="portfolio-nature-copy">
          <p className="portfolio-kicker">Wildlife Encounters</p>
          <h2>Actual owner photographs from the property.</h2>
          <p>
            These images were captured by the current owners and help illustrate
            the living forest environment that makes the property feel so
            special. Bald eagles, hawks, owls, and native songbirds have all
            been part of the experience of living here.
          </p>
        </div>

        <div className="portfolio-nature-gallery portfolio-nature-gallery-four">
          <figure className="portfolio-nature-main">
            <Image
              src={wildlifeHeroImage}
              alt="Bald eagle perched near the property"
              fill
              sizes="60vw"
            />
            <figcaption>Bald eagle photographed on the property.</figcaption>
          </figure>
          <figure>
            <Image
              src={wildlifeSecondImage}
              alt="Hawks nesting in a tree on the property"
              fill
              sizes="30vw"
            />
            <figcaption>Hawks nesting in the surrounding trees.</figcaption>
          </figure>
          <figure>
            <Image
              src={wildlifeThirdImage}
              alt="Hawk perched in a tree on the property"
              fill
              sizes="30vw"
            />
            <figcaption>A hawk resting above the forest clearing.</figcaption>
          </figure>
          <figure>
            <Image
              src={wildlifeFourthImage}
              alt="Close view of a hawk photographed on the property"
              fill
              sizes="30vw"
            />
            <figcaption>Another owner-captured wildlife moment.</figcaption>
          </figure>
        </div>

        <div className="portfolio-nature-notes">
          <article>
            <span>Observed Wildlife</span>
            <strong>Bald eagles, hawks, owls, and native songbirds</strong>
          </article>
          <article>
            <span>Setting</span>
            <strong>
              Mature forest, open clearing, trails, and protected natural
              habitat
            </strong>
          </article>
          <article>
            <span>Experience</span>
            <strong>
              Morning birdsong, evening owl calls, and raptors overhead
            </strong>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-plan-page" page="LAND • PBRS">
        <div className="portfolio-plan-header">
          <p className="portfolio-kicker">Homesite & PBRS Context</p>
          <h2>The developed area is easy to understand.</h2>
          <p>
            This plan helps illustrate the cleared homesite area and the portion
            of the property excluded from PBRS, giving buyers a clearer picture
            of how the home, yard, driveway, and usable cleared space relate to
            the surrounding forest.
          </p>
        </div>
        <div className="portfolio-plan-frame">
          <Image
            src={pbrsClearingImage}
            alt="Site clearing plan showing the homesite area not included in PBRS"
            fill
            sizes="80vw"
            className="portfolio-plan-image"
          />
        </div>
        <p className="portfolio-plan-note">
          Buyers should verify all land-use, PBRS, and improvement questions
          with King County and qualified professionals during due diligence.
        </p>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-plan-page"
        page="LAND • NATURAL FEATURES"
      >
        <div className="portfolio-plan-header">
          <p className="portfolio-kicker">Natural Features</p>
          <h2>Wetland and buffer reference.</h2>
          <p>
            The wetland buffer plan provides a helpful reference for
            understanding the mapped natural features on the property and how
            they relate to the existing homesite and driveway.
          </p>
        </div>
        <div className="portfolio-plan-frame">
          <Image
            src={wetlandBufferImage}
            alt="Site plan showing wetland buffer reference areas"
            fill
            sizes="80vw"
            className="portfolio-plan-image"
          />
        </div>
        <p className="portfolio-plan-note">
          Official parcel and environmental information can be reviewed through
          King County records for parcel 2220069212.
        </p>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-shop-page"
        page="LAND • FUTURE POTENTIAL"
      >
        <Image
          src={shopConceptImage}
          alt="Aerial image of the estate used to discuss future shop potential"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-cover-overlay" />
        <div className="portfolio-shop-card">
          <p className="portfolio-kicker">Future Potential</p>
          <h2>Build your dream shop.</h2>
          <p>
            The cleared homesite area creates a compelling opportunity for a
            future detached shop, RV garage, workshop, or hobby space.
          </p>
          <ul>
            <li>Potential future shop location near the existing homesite</li>
            <li>Room for RV, equipment, toys, or a dedicated workshop</li>
            <li>Conceptual only; buyer to verify feasibility and permitting</li>
          </ul>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-location-page"
        page="LIFESTYLE • ENUMCLAW"
      >
        <div className="portfolio-location-header">
          <p className="portfolio-kicker">Living Here</p>
          <h2>Private country living, with town close at hand.</h2>
          <p>
            One of the property&apos;s most compelling advantages is the balance
            it offers: a deeply private homesite with forest, trails, and space
            to breathe, while still being minutes from downtown Enumclaw,
            day-to-day essentials, schools, and community amenities.
          </p>
        </div>

        <figure className="portfolio-location-image-frame">
          <Image
            src="/assets/photos/photo-68.jpg"
            alt="Aerial location image showing the property in relation to nearby Enumclaw amenities"
            fill
            sizes="100vw"
            className="portfolio-location-image"
          />
        </figure>

        <div className="portfolio-location-grid">
          <article>
            <span>01</span>
            <h3>Minutes to downtown</h3>
            <p>
              Restaurants, coffee shops, grocery stores, services, and local
              events are all conveniently nearby.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Everyday practicality</h3>
            <p>
              Schools, recreation, and daily errands remain accessible without
              giving up the privacy of a wooded estate.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Pacific Northwest lifestyle</h3>
            <p>
              Open skies, foothill scenery, outdoor recreation, and a small-town
              feel all add to the appeal of the location.
            </p>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-day-page"
        page="LIFESTYLE • A DAY HERE"
      >
        <div className="portfolio-day-header">
          <p className="portfolio-kicker">A Day Here</p>
          <h2>Life moves differently on nearly twenty private acres.</h2>
        </div>
        <div className="portfolio-day-grid">
          <article>
            <span>Morning</span>
            <h3>Coffee. Birds. Quiet.</h3>
            <p>
              Start the day with forest views, birdsong, and the kind of privacy
              that changes the pace of everything.
            </p>
          </article>
          <article>
            <span>Afternoon</span>
            <h3>Walk your own trails.</h3>
            <p>
              Explore the acreage, follow the trail network, watch hawks
              overhead, or work from home without feeling boxed in.
            </p>
          </article>
          <article>
            <span>Evening</span>
            <h3>The forest settles.</h3>
            <p>
              Dinner outside, quiet surroundings, and space to unwind without
              the noise of a typical neighborhood.
            </p>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-land-design-page"
        page="DESIGNED AROUND THE LAND"
      >
        <div className="portfolio-land-design-copy">
          <p className="portfolio-kicker">Intentional Placement</p>
          <h2>Positioned With Intention</h2>
          <p>
            Every major element of the estate works with the land: the private
            driveway, the cleared homesite, the trail network, the protected
            natural features, and the potential future shop area.
          </p>
        </div>
        <div className="portfolio-land-design-grid">
          <figure>
            <Image
              src={estateOverviewMap}
              alt="Estate overview map"
              fill
              sizes="50vw"
            />
          </figure>
          <div className="portfolio-land-design-points">
            <article>
              <span>01</span>
              <strong>Preserve privacy</strong>
              <p>
                The home is set into its own clearing while mature forest
                remains a defining part of the estate.
              </p>
            </article>
            <article>
              <span>02</span>
              <strong>Maintain usable space</strong>
              <p>
                The cleared homesite supports outdoor living, circulation, and
                future possibilities.
              </p>
            </article>
            <article>
              <span>03</span>
              <strong>Respect natural features</strong>
              <p>
                Wetlands, forest, and trails are treated as part of the
                property's long-term character.
              </p>
            </article>
          </div>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-seasons-page"
        page="LIFESTYLE • FOUR SEASONS"
      >
        <div className="portfolio-seasons-header">
          <p className="portfolio-kicker">Four Seasons</p>
          <h2>The Estate Through the Seasons</h2>
          <p>
            The estate is not experienced the same way twice. From spring
            greenery and summer evenings to fall color and quiet winter
            mornings, the forest becomes part of everyday life.
          </p>
        </div>

        <div className="portfolio-seasons-grid">
          <figure>
            <Image
              src={seasonsSpringImage}
              alt="Spring greenery and private trails"
              fill
              sizes="50vw"
            />
            <figcaption>
              <span>Spring</span>Fresh growth, birdsong, and new color along the
              trails.
            </figcaption>
          </figure>
          <figure>
            <Image
              src={seasonsSummerImage}
              alt="Summer outdoor living at the estate"
              fill
              sizes="50vw"
            />
            <figcaption>
              <span>Summer</span>Long evenings, outdoor entertaining, and shaded
              forest walks.
            </figcaption>
          </figure>
          <figure>
            <Image
              src={seasonsFallImage}
              alt="Aerial view of the wooded estate"
              fill
              sizes="50vw"
            />
            <figcaption>
              <span>Fall</span>Changing color across nearly twenty private
              acres.
            </figcaption>
          </figure>
          <figure>
            <Image
              src={seasonsWinterImage}
              alt="Snow-covered backyard, garden shed, and private forest"
              fill
              sizes="50vw"
            />
            <figcaption>
              <span>Winter</span>Quiet mornings, crisp air, and views that feel
              unmistakably Northwest.
            </figcaption>
          </figure>
        </div>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-rainier-editorial-page"
        page="LIFESTYLE • MOUNT RAINIER"
      >
        <div className="portfolio-rainier-editorial-copy">
          <p className="portfolio-kicker">Mount Rainier Views</p>
          <h2>Living beneath an icon.</h2>
          <p>
            Mount Rainier becomes part of the rhythm of the property — appearing
            on clear mornings, shifting with the weather, and anchoring the
            landscape in a way that feels unmistakably Pacific Northwest.
          </p>
          <blockquote>
            Some mornings begin with one of the Northwest's most recognizable
            skylines.
          </blockquote>
        </div>
        <figure className="portfolio-rainier-editorial-image">
          <Image
            src={realRainierImage}
            alt="Authentic Mount Rainier view near the property"
            fill
            sizes="56vw"
          />
        </figure>
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-difference-page"
        page="WHY THIS PROPERTY IS DIFFERENT"
      >
        <div className="portfolio-difference-copy">
          <p className="portfolio-kicker">A Rare Combination</p>
          <h2>Not just another luxury home.</h2>
          <p>
            Many homes offer beautiful interiors. Far fewer combine modern
            construction, acreage, privacy, trails, views, a future shop
            opportunity, and no HOA in one cohesive estate setting.
          </p>
        </div>

        <div className="portfolio-difference-layout">
          <div
            className="portfolio-difference-table"
            aria-label="Property comparison"
          >
            <div>
              <span>Typical Luxury Home</span>
              <strong>Small lot or subdivision setting</strong>
            </div>
            <div>
              <span>Enumclaw Forest Estate</span>
              <strong>19.55 private acres</strong>
            </div>
            <div>
              <span>Typical Luxury Home</span>
              <strong>Neighboring homes close by</strong>
            </div>
            <div>
              <span>Enumclaw Forest Estate</span>
              <strong>Private forest and long driveway</strong>
            </div>
            <div>
              <span>Typical Luxury Home</span>
              <strong>Landscaped backyard</strong>
            </div>
            <div>
              <span>Enumclaw Forest Estate</span>
              <strong>Private trail network</strong>
            </div>
            <div>
              <span>Typical Luxury Home</span>
              <strong>Limited expansion flexibility</strong>
            </div>
            <div>
              <span>Enumclaw Forest Estate</span>
              <strong>Potential shop location</strong>
            </div>
            <div>
              <span>Typical Luxury Home</span>
              <strong>Standard backup planning</strong>
            </div>
            <div>
              <span>Enumclaw Forest Estate</span>
              <strong>Whole-home generator</strong>
            </div>
          </div>

          <figure>
            <Image
              src={differenceImage}
              alt="Aerial view showing the home's private setting"
              fill
              sizes="42vw"
            />
          </figure>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-rarity-page" page="VALUE • SCARCITY">
        <div className="portfolio-rarity-card">
          <p className="portfolio-kicker">Difficult to Recreate</p>
          <h2>Modern construction. Mature forest. Nearly twenty acres.</h2>
          <p>
            Properties like this are increasingly difficult to create: a
            custom-built home, significant acreage, mature trees, mapped natural
            features, privacy, trail access, and room for future possibilities.
          </p>
          <p>
            The value is not found in any single feature. It is found in the
            combination — luxury living, protected natural beauty, usable
            homesite, and long-term flexibility.
          </p>
        </div>
        <Image
          src={rarityImage}
          alt="Private aerial view of the estate"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-rarity-overlay" />
      </PortfolioPage>

      <PortfolioPage
        className="portfolio-closing-page"
        page="SCHEDULE YOUR PRIVATE TOUR"
      >
        <Image
          src={closingImage}
          alt="Enumclaw Forest Estate hero exterior"
          fill
          sizes="100vw"
          className="portfolio-cover-image"
        />
        <div className="portfolio-closing-overlay" />
        <div className="portfolio-closing-content">
          <p className="portfolio-kicker">Enumclaw Forest Estate</p>
          <h2>Modern Living. Immersed in Nature.</h2>
          <p>
            23670 SE 448th St
            <br />
            Enumclaw, Washington
          </p>
          <div className="portfolio-closing-contact">
            <strong>{property.realtor.name}</strong>
            <span>{property.realtor.company}</span>
            <a href={`tel:${property.realtor.phone}`}>
              {property.realtor.phone}
            </a>
            <a href={`mailto:${property.realtor.email}`}>
              {property.realtor.email}
            </a>
            <span>{propertyFacts.website}</span>
          </div>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-faq-page" page="BUYER • FAQ">
        <div className="portfolio-faq-header">
          <p className="portfolio-kicker">Buyer FAQ</p>
          <h2>Questions buyers often ask first.</h2>
        </div>

        <div className="portfolio-faq-grid">
          <article>
            <h3>How should buyers think about PBRS?</h3>
            <p>
              The property includes land currently enrolled in PBRS. The
              portfolio visuals help explain the relationship between the
              homesite and the protected forest area, and buyers should confirm
              details with King County during due diligence.
            </p>
          </article>
          <article>
            <h3>Is there a mapped wetland area?</h3>
            <p>
              Yes. A wetland and buffer reference exhibit is included in the
              portfolio for general understanding. Buyers should verify any
              environmental or land-use questions with qualified professionals.
            </p>
          </article>
          <article>
            <h3>Are the trails already in place?</h3>
            <p>
              Yes. The property includes an established trail network, along
              with older trail routes that are no longer actively maintained.
            </p>
          </article>
          <article>
            <h3>Can a future shop be added?</h3>
            <p>
              A potential location has been identified conceptually near the
              homesite. Feasibility, dimensions, permitting, and final placement
              should be verified by the buyer.
            </p>
          </article>
        </div>
      </PortfolioPage>

      <PortfolioPage className="portfolio-next-page" page="NEXT STEPS">
        <div className="portfolio-next-header">
          <p className="portfolio-kicker">Next Steps</p>
          <h2>Explore the listing further or schedule your private tour.</h2>
          <p>
            Review the property on your preferred listing site, then connect
            with the listing broker for additional materials, questions, or a
            private showing.
          </p>
        </div>

        <div className="portfolio-next-grid">
          <div className="portfolio-next-contact">
            <span>Listing Broker</span>
            <h3>{property.realtor.name}</h3>
            <p>{property.realtor.company}</p>
            <p>
              <a href={`tel:${property.realtor.phone}`}>
                {property.realtor.phone}
              </a>
              <br />
              <a href={`mailto:${property.realtor.email}`}>
                {property.realtor.email}
              </a>
            </p>
            <p className="portfolio-next-site">{propertyFacts.website}</p>
          </div>

          <div className="portfolio-next-links">
            <span>Popular Listing Sites</span>
            <ul>
              {listingSites.map((site) => (
                <li key={site.name}>
                  <a href={site.url} target="_blank" rel="noreferrer">
                    View on {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PortfolioPage>
    </main>
  );
}
