// Central business data pulled from the live site's JSON-LD + footer/nav.
export const business = {
  name: "TRL Soft-Pressure Washing",
  shortName: "TRL",
  tagline: "Thin Red Line · Firefighter Owned",
  phone: "+1-931-213-0234",
  phoneDisplay: "(931) 213-0234",
  phoneHref: "tel:+19312130234",
  smsHref: "sms:9312130234?body=Hi%20I%20would%20like%20a%20quote%20for%20pressure%20washing.",
  email: "trlsoftpressurewashing@gmail.com",
  facebook: "https://www.facebook.com/trlwashing",
  addressLocality: "Smyrna",
  addressRegion: "TN",
  addressCountry: "US",
  geo: { latitude: 36.2, longitude: -86.5186 },
  priceRange: "$$",
  rating: { value: "5.0", count: "12" },
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
  areaServed: [
    "Smyrna, TN",
    "Murfreesboro, TN",
    "Spring Hill, TN",
    "Centerville, TN",
    "Columbia, TN",
    "Hohenwald, TN",
    "Summertown, TN",
    "Dickson, TN",
  ],
  servicesOffered: [
    "House Washing",
    "Roof Cleaning",
    "Concrete Cleaning",
    "Commercial Pressure Washing",
    "Christmas Tree Haul Away",
  ],
  siteUrl: "https://trlsoftpressurewashing.com",
  logo: "/images/about/TRLt.png",
  ownerName: "Mikey Hobbs",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-trl" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
];

export const services = [
  {
    slug: "house-wash",
    label: "House Soft Wash",
    eyebrow: "Exterior House",
    tag: "Safe for vinyl, wood, stucco & brick",
    description:
      "Gentle, low-pressure soft washing that removes mold, mildew, algae, and grime from siding, stucco, brick, and wood — without damaging your home's surface.",
    image: "/images/services/house-wash.jpg",
  },
  {
    slug: "concrete",
    label: "Driveway & Concrete",
    eyebrow: "Concrete Cleaning",
    tag: "Concrete, pavers & pool decks",
    description:
      "High-pressure surface cleaning blasts away oil stains, tire marks, algae, and years of buildup from driveways, walkways, patios, and pool decks.",
    image: "/images/services/driveway.jpg",
  },
  {
    slug: "roof-cleaning",
    label: "Roof Cleaning",
    eyebrow: "Roof Treatment",
    tag: "Shingles, tiles & metal roofs",
    description:
      "Non-pressure soft wash treatment eliminates black streaks, moss, lichen, and algae from shingles and tiles — extending your roof's lifespan significantly.",
    image: "/images/services/roof.jpg",
  },
  {
    slug: "decks-and-fences",
    label: "Deck & Fence",
    eyebrow: "Wood & Vinyl",
    tag: "Wood, composite & vinyl",
    description:
      "Restore the natural beauty of weathered wood decks and fences. We remove grey oxidation, mildew, and staining to prep surfaces for staining or just leave them looking refreshed.",
    image: "/images/services/deck.jpg",
  },
  {
    slug: null,
    href: "/commercial",
    label: "Commercial",
    eyebrow: "Commercial Services",
    tag: "Storefronts, lots & buildings",
    description:
      "Storefronts, parking lots, fleet vehicles, warehouses, and more. We keep your business looking professional with flexible scheduling that works around your hours.",
    image: "/images/services/commercial.jpg",
  },
  {
    slug: "gutters-windows",
    label: "Gutter Cleaning",
    eyebrow: "Gutters",
    tag: "Exterior gutter faces",
    description:
      "We remove leaves, debris, and buildup to restore proper drainage and prevent overflow or foundation issues.",
    image: "/images/services/gutters.jpg",
  },
];

export const serviceAreas = [
  { slug: "smyrna-tn", city: "Smyrna", state: "TN" },
  { slug: "murfreesboro-tn", city: "Murfreesboro", state: "TN" },
  { slug: "spring-hill-tn", city: "Spring Hill", state: "TN" },
  { slug: "centerville-tn", city: "Centerville", state: "TN" },
  { slug: "columbia-tn", city: "Columbia", state: "TN" },
  { slug: "hohenwald-tn", city: "Hohenwald", state: "TN" },
  { slug: "summertown-tn", city: "Summertown", state: "TN" },
  { slug: "dickson-tn", city: "Dickson", state: "TN" },
];

export const homeFaqs = [
  {
    q: "What is soft washing?",
    a: "Soft washing uses low-pressure pumps and specialized cleaning solutions to kill mold, mildew, and algae at the root without damaging surfaces like high pressure can.",
  },
  {
    q: "Do you offer bundle or recurring discounts?",
    a: "Yes. Combine house wash + driveway + gutters and you can save up to 20%. We also offer seasonal and annual exterior cleaning plans.",
  },
  {
    q: "How often should I have my home professionally washed?",
    a: "Most homes benefit from professional exterior cleaning once every 12–18 months. Homes with heavy shade, nearby trees, or high humidity may require cleaning more frequently to prevent algae and mold buildup.",
  },
];
