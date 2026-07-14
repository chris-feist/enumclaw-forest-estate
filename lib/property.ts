export const property = {
  name: "Enumclaw Forest Estate",
  tagline: "Modern Living. Immersed in Nature.",
  address: "23670 SE 448th St, Enumclaw, WA 98022",
  price: "$1,499,990",
  mlsNumber: "2543724",
  squareFeet: 3820,
  bedrooms: 4,
  bathrooms: 2.5,
  acres: 19.55,
  pbrsAcres: 17.5,
  yearBuilt: 2019,
  garageSqFt: 1000,
  coveredParking: 4,
  annualTaxes: 9618,
  taxYear: 2026,
  parcelNumber: "2220069212",
  openHouses: [
    {
      date: "2026-07-10",
      label: "Friday, July 10",
      time: "3–5 PM",
    },
    {
      date: "2026-07-11",
      label: "Saturday, July 11",
      time: "12–2 PM",
    },
    {
      date: "2026-07-12",
      label: "Sunday, July 12",
      time: "12–2 PM",
    },
  ],
  sectionLinks: {
    gallery: "#gallery",
    floorplans: "#floorplans",
    features: "#features",
    land: "#land",
    location: "#location",
    contact: "#contact",
  },
  schools: [
    { name: "Sunrise Elementary School", grades: "K–5", distance: "1.2 mi" },
    { name: "Enumclaw Middle School", grades: "6–8", distance: "1.3 mi" },
    { name: "Enumclaw Sr High School", grades: "9–12", distance: "1.2 mi" },
  ],
  realtor: {
    name: "Todd Huizenga",
    company: "KW Mountains to Sound Realty",
    phone: "253-569-5341",
    email: "toddh@kw.com",
    logoUrl: "/assets/logos/kw-mountains-to-sound.png",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/enumclawforestestate/",
    facebook: "https://www.facebook.com/EnumclawForestEstate",
  },
};

export const media = {
  hero: "/assets/photos/photo-63.jpeg",
  exterior: [
    "/assets/photos/photo-51.jpg",
    "/assets/photos/photo-52.jpg",
    "/assets/photos/photo-53.jpg",
    "/assets/photos/photo-54.jpg",
  ],
  trail: "/assets/photos/photo-61.jpg",
  aerial: "/assets/photos/photo-57.jpg",
  boundary: "/assets/photos/photo-64.jpg",
  location: "/assets/photos/photo-68.jpg",
  mountain: "/assets/photos/photo-67.jpg",
  floorplans: [
    { title: "Main Floor", url: "/assets/floorplans/main-floor.jpg" },
    { title: "Second Floor", url: "/assets/floorplans/second-floor.jpg" },
  ],
  interiors: [
    ["Great Room", "/assets/photos/photo-03.jpg"],
    ["Chef's Kitchen", "/assets/photos/photo-10.jpg"],
    ["Hidden Pantry", "/assets/photos/photo-19.jpg"],
    ["Commercial Dog Wash", "/assets/photos/photo-23.jpg"],
    ["Large Bonus Room", "/assets/photos/photo-24.jpg"],
    ["Primary Suite", "/assets/photos/photo-34.jpg"],
    ["Primary Bath", "/assets/photos/photo-38.jpg"],
    ["Covered Patio", "/assets/photos/photo-45.jpg"],
  ] as const,
  video:
    "https://listings.foto-guy.com/videos/019d3191-55d9-7303-8173-0973176473fd",
  matterport:
    "https://my.matterport.com/show/?m=JiT3r3aNSj1&nt=1&brand=0&mls=1&",
};

export type OpenHouse = (typeof property.openHouses)[number];

export function isOpenHouseUpcoming(openHouse: OpenHouse) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const openHouseDate = new Date(`${openHouse.date}T00:00:00`);
  openHouseDate.setHours(0, 0, 0, 0);

  return openHouseDate >= today;
}

export function getUpcomingOpenHouses() {
  return property.openHouses.filter(isOpenHouseUpcoming);
}

export const listingSites = [
  {
    name: "Zillow",
    url: "https://www.zillow.com/homedetails/23670-SE-448th-St-Enumclaw-WA-98022/318323178_zpid/",
  },
  {
    name: "Redfin",
    url: "https://www.redfin.com/WA/Enumclaw/23670-SE-448th-St-98022/home/22526582",
  },
  {
    name: "Realtor.com",
    url: "https://www.realtor.com/realestateandhomes-detail/23670-SE-448th-St_Enumclaw_WA_98022_M98368-49750",
  },
  {
    name: "Homes.com",
    url: "https://www.homes.com/property/23670-se-448th-st-enumclaw-wa/v5fnrqgj3m77v/",
  },
] as const;

export const propertyFacts = {
  name: "Enumclaw Forest Estate",
  address: "23670 SE 448th St",
  cityState: "Enumclaw, Washington",
  website: "www.enumclawforestestate.com",
  price: "$1,550,000",
  mls: "2543724",
  acres: "19.55",
  squareFeet: "3,820",
  bedrooms: "4",
  bathrooms: "2.5",
  garage: "4 Covered Spaces",
  yearBuilt: "2019",
  hoa: "No HOA",
  generator: "Whole-Home Generator",
  dogRun: "Fenced Turf Dog Run",
  trails: "Private Forest Trails",
  futureShop: "Future Shop Potential",
  views: "Mount Rainier Views",
} as const;

export const portfolioHighlights = [
  {
    title: "Nearly 20 Private Acres",
    description:
      "A rare combination of open homesite, private forest, trails, and long-term flexibility.",
  },
  {
    title: "Mount Rainier Views",
    description:
      "A dramatic mountain backdrop that gives the property a distinctly Pacific Northwest sense of place.",
  },
  {
    title: "Custom-Built Home",
    description:
      "A thoughtfully designed 3,820 sq ft home with premium finishes and generous everyday living spaces.",
  },
  {
    title: "Whole-Home Generator",
    description:
      "Automatic backup power adds peace of mind through Pacific Northwest storms and outages.",
  },
  {
    title: "Private Trail Network",
    description:
      "Active walking trails offer a way to experience the forest without leaving your own property.",
  },
  {
    title: "Future Shop Potential",
    description:
      "The cleared homesite area creates compelling possibilities for a future shop or additional improvements.",
  },
  {
    title: "Protected Forest",
    description:
      "PBRS enrollment helps preserve the natural setting while contributing to lower property taxes.",
  },
  {
    title: "Nature at Your Doorstep",
    description:
      "Bald eagles, hawks, owls, and songbirds have been regularly observed by the current owners.",
  },
  {
    title: "Minutes to Town",
    description:
      "A private setting with downtown Enumclaw, restaurants, shopping, and everyday conveniences nearby.",
  },
  {
    title: "Truly One of a Kind",
    description:
      "Luxury, acreage, privacy, views, and future potential come together in one exceptional property.",
  },
] as const;
