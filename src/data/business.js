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
  addressLocality: "Hohenwald",
  addressRegion: "TN",
  addressCountry: "US",
  geo: { latitude: 35.5495, longitude: -87.5478 },
  priceRange: "$$",
  rating: { value: "5.0", count: "77" },
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
  areaServed: [
    "Smyrna, TN",
    "Murfreesboro, TN",
    "Nolensville, TN",
    "Franklin, TN",
    "Thompson's Station, TN",
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
  siteUrl: "https://trl-spw.com",
  logo: "/images/about/TRLt.png",
  ownerName: "Mikey Hobbs",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-trl" },
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
];

export const services = [
  {
    slug: "house-wash",
    label: "House Soft Wash",
    eyebrow: "Exterior House",
    tag: "Safe for vinyl, wood, stucco & brick",
    description:
      "Gentle, low-pressure soft washing that removes mold, mildew, algae, and grime from siding, stucco, brick, and wood, without damaging your home's surface.",
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
      "Non-pressure soft wash treatment eliminates black streaks, moss, lichen, and algae from shingles and tiles, extending your roof's lifespan significantly.",
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

// lat/lng are approximate town-center coordinates -- accurate enough for the
// schematic service-area map, not meant for turn-by-turn precision.
// countyIds must match a <path id="..."> in src/data/county-map.svg exactly.
export const serviceAreas = [
  { slug: "hohenwald-tn", city: "Hohenwald", state: "TN", lat: 35.5495, lng: -87.5478, countyIds: ["Lewis"] },
  { slug: "summertown-tn", city: "Summertown", state: "TN", lat: 35.4023, lng: -87.3242, countyIds: ["Lawrence"] },
  { slug: "centerville-tn", city: "Centerville", state: "TN", lat: 35.7776, lng: -87.4636, countyIds: ["Hickman"] },
  { slug: "columbia-tn", city: "Columbia", state: "TN", lat: 35.6151, lng: -87.0353, countyIds: ["Maury"] },
  { slug: "dickson-tn", city: "Dickson", state: "TN", lat: 36.0770, lng: -87.3878, countyIds: ["Dickson"] },
  { slug: "spring-hill-tn", city: "Spring Hill", state: "TN", lat: 35.7509, lng: -86.9297, countyIds: ["Maury", "Williamson"] },
  { slug: "thompsons-station-tn", city: "Thompson's Station", state: "TN", lat: 35.7973, lng: -86.9114, countyIds: ["Williamson"] },
  { slug: "franklin-tn", city: "Franklin", state: "TN", lat: 35.9251, lng: -86.8689, countyIds: ["Williamson"] },
  { slug: "nolensville-tn", city: "Nolensville", state: "TN", lat: 35.9509, lng: -86.6714, countyIds: ["Williamson"] },
  { slug: "murfreesboro-tn", city: "Murfreesboro", state: "TN", lat: 35.8456, lng: -86.3903, countyIds: ["Rutherford"] },
  { slug: "smyrna-tn", city: "Smyrna", state: "TN", lat: 35.9828, lng: -86.5186, countyIds: ["Rutherford"] },
];

// Nearest N other service areas by straight-line distance -- used to power
// each location page's "We Also Service This Area" cross-links so every
// page links out without hand-curating pairs (and staying correct if
// serviceAreas ever changes).
export function nearbyServiceAreas(slug, count = 3) {
  const origin = serviceAreas.find((a) => a.slug === slug);
  if (!origin) return [];
  return serviceAreas
    .filter((a) => a.slug !== slug)
    .map((a) => ({ ...a, dist: Math.hypot(a.lat - origin.lat, a.lng - origin.lng) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, count);
}

export const reviews = [
  {
    name: "Amy Burns",
    text: "TRL was very prompt in communicating and providing exceptional service in the same day! I appreciated the streamline process of securing his service and the before/after photos he provided. I highly recommend his service!",
  },
  {
    name: "Lore Wright",
    text: "Excellent job! If you want commercial equipment, reasonable pricey, Mikey is your guy! Did multiple areas, front porch, BBQ overhang, sidewalks, breezeway and driveway. All turned out better than we hoped. Will definitely use him for all our future power and soft washing needs.",
  },
  {
    name: "Ryan Burns",
    text: "Mikey is very good at his job, and he does it for a fair price! I would gladly recommend him to anyone needing pressure washing services. We need more businesses like his!",
  },
  {
    name: "Lisa Tatum",
    text: "I could not be more pleased with all the hard work put into cleaning my home that is white vinyl siding. It is glistening! Even the UPS driver commented on how bright and new it looked. And my concrete driveway, it hasn't looked this good in years.",
  },
  {
    name: "Justin Cross",
    text: "I couldn't be happier with the work performed by TRL. Mikey went above and beyond to make sure all areas of my roof and driveway were perfect. I highly recommend TRL for all of your pressure and soft washing needs.",
  },
  {
    name: "Debra Imes",
    text: "Mikey did a great job. He was very meticulous with his work and made sure everything was cleaned up. Would recommend him highly.",
  },
  {
    name: "Leslie Lyell",
    text: "Mikey came last week to give us an estimate. It was very reasonable. He communicated with us in a timely manner, and arrived when he said he would. He cleaned the exterior of our house including porches and decks. He did a great job, and we would highly recommend him.",
  },
  {
    name: "Benjamin Huck",
    text: "Mikey was fantastic. The house looks amazing! Will be using him again.",
  },
  {
    name: "Jarod Gilles",
    text: "Showed up on time. Did a fantastic job, way better than expected. Smells so fresh outside that it made inside the house smell good as well! Highly recommend and will use again!!",
  },
  {
    name: "Josh Hill",
    text: "Great job getting tough mud stains off our brick. Made the whole house look new. I would definitely recommend using this company!",
  },
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
