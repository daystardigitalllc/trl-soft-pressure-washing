// Combined service x location content for the /services/[service]/[location]
// pages. Each entry blends that service's real technical angle with that
// city's real local specifics (landmarks, climate, housing stock) so every
// one of the 55 pages says something genuinely different, not a
// city-name find-and-replace on a template.

export const serviceHighlights = {
  "house-wash": [
    { title: "Algae & Mold Removal", desc: "Safely lifts green and black algae, mold, and mildew from siding without damaging paint or material." },
    { title: "Low-Pressure Soft Wash", desc: "We use low pressure and a specialized solution, not a pressure washer wand, on siding, stucco, brick, and trim." },
    { title: "Curb Appeal & Protection", desc: "Removing organic growth protects your investment and keeps your home looking cared for." },
  ],
  concrete: [
    { title: "Driveway & Walkway Cleaning", desc: "Deep surface cleaning lifts oil stains, tire marks, algae, and years of embedded grime." },
    { title: "Slip Hazard Removal", desc: "Algae-covered concrete gets dangerously slick when wet; we clear it before it becomes a hazard." },
    { title: "Sealing Available", desc: "We can seal concrete after cleaning to protect it from future staining and wear." },
  ],
  "roof-cleaning": [
    { title: "Black Streak Removal", desc: "Gloeocapsa Magma algae causes the black streaks on shingles; our soft wash kills it at the root." },
    { title: "Moss & Lichen Treatment", desc: "Moss and lichen trap moisture against shingles; we remove both without cracking or loosening them." },
    { title: "Warranty-Safe Process", desc: "Low-pressure soft washing won't strip granules or void a roofing manufacturer's warranty." },
  ],
  "decks-and-fences": [
    { title: "Wood-Safe Cleaning", desc: "Controlled pressure and wood-safe solution removes algae and grime without splintering or damaging wood fibers." },
    { title: "Gray Weathering Restored", desc: "Sun and moisture turn wood gray over time; cleaning brings back a brighter, more natural look." },
    { title: "Safer Footing", desc: "Algae makes decks slick when wet; removing it makes outdoor space safer to use." },
  ],
  "gutters-windows": [
    { title: "Debris Removal", desc: "Leaves, twigs, and roof grit are cleared by hand so water can flow the way the system was designed to." },
    { title: "Downspout Flush", desc: "We flush downspouts after clearing gutters to confirm water is actually draining, not just cleared at the top." },
    { title: "Foundation Protection", desc: "Properly draining gutters keep water from pooling against your foundation and causing erosion or leaks." },
  ],
};

export const serviceLocationContent = {
  "house-wash": {
    "hohenwald-tn": {
      intro: "Hohenwald homes sit under heavy hardwood cover near the Natchez Trace, which keeps siding shaded and damp longer than open properties, exactly the conditions algae and mildew need to take hold. Since we're based right here, house washing in Hohenwald is usually the easiest job on our schedule to fit in.",
      intro2: "We see it most on the north-facing walls of older farmhouses around Lewis County, where full shade means algae comes back faster than the rest of the house.",
      faqs: [
        { q: "Does being your home base mean Hohenwald house washing costs less?", a: "There's no travel fee for Hohenwald jobs since we're based here, and scheduling is usually faster too." },
        { q: "Why does my house get dirty faster than my neighbor's?", a: "Shade is usually the reason. Homes under heavier tree cover near the Trace or along wooded lots collect algae and mildew noticeably faster than homes with more direct sun." },
      ],
    },
    "summertown-tn": {
      intro: "Summertown properties are some of the most heavily wooded in our service area, and that shade holds moisture against siding long after a storm has passed. Algae and mildew show up fast on north- and east-facing walls shielded from direct sun.",
      intro2: "A lot of our Summertown house washing jobs are older farmhouses with wood or metal siding, which need a gentler touch than a newer vinyl build.",
      faqs: [
        { q: "My house is surrounded by trees, will that make house washing harder?", a: "Not harder, just more frequent. Heavily shaded homes in Summertown typically need washing closer to every 12 months instead of 18." },
        { q: "Is soft washing safe on older farmhouse siding?", a: "Yes, we adjust pressure and cleaning solution specifically for older wood and metal siding common on Summertown properties." },
      ],
    },
    "centerville-tn": {
      intro: "Homes near the Duck River and Centerville's historic square deal with higher humidity than more open parts of Hickman County, which speeds up algae growth on siding facing the water or shaded by mature trees.",
      intro2: "We use a lower-pressure approach on the older homes near downtown Centerville to protect original siding and trim, saving higher pressure for newer construction that can handle it.",
      faqs: [
        { q: "Do homes near the Duck River need washing more often?", a: "Yes, the extra humidity near the river speeds up algae growth compared to more open properties elsewhere in Hickman County." },
        { q: "Will soft washing damage the trim on my older Centerville home?", a: "No, we use low pressure specifically to protect older trim and siding rather than the higher pressure a newer home's vinyl could handle." },
      ],
    },
    "columbia-tn": {
      intro: "Columbia's mix of century-old homes near the square and newer builds out toward Highway 31 means no two house washing jobs look the same. Historic siding and masonry near downtown need a soft touch, while newer stucco and vinyl subdivisions can handle a more standard clean.",
      intro2: "We also see a lot of demand right before Mule Day each spring, when homeowners want their property looking sharp before visitors come through town.",
      faqs: [
        { q: "Can you clean a historic home near the Columbia square without damaging it?", a: "Yes, we use a low-pressure soft wash on older siding, brick, and masonry near downtown specifically to avoid stripping paint or damaging old mortar." },
        { q: "Should I book before Mule Day if I want my house looking good for the festival?", a: "Yes, we'd recommend booking a few weeks ahead of Mule Day weekend rather than the week of, since that's one of our busiest stretches in Columbia." },
      ],
    },
    "dickson-tn": {
      intro: "Homes near Interstate 40 and Highway 46 in Dickson pick up more road film and diesel soot on their siding than properties further from the highway, on top of the usual humidity-driven algae most Middle Tennessee homes deal with.",
      intro2: "We wash everything from older homes near downtown Dickson to newer subdivisions off Highway 48, adjusting pressure for the age and material of each.",
      faqs: [
        { q: "Does living near I-40 make my house dirtier than average?", a: "It can. Homes close to the interstate tend to pick up more road grime and soot on siding than properties set back from traffic." },
        { q: "How often should a Dickson home be washed?", a: "Most homes do well every 12 to 18 months, sooner if you're right along the I-40 corridor or under heavy shade." },
      ],
    },
    "spring-hill-tn": {
      intro: "Spring Hill's rapid growth means a lot of the homes we wash are only a few years old, still surrounded by active construction near GM Ultium Cells and the newer subdivisions. New siding picks up builder dust and mud splash faster than most homeowners expect.",
      intro2: "We also still serve the rural and older properties scattered around town, not just the new construction that's reshaping Spring Hill.",
      faqs: [
        { q: "My house is new, why does it already need washing?", a: "New siding near active construction picks up builder dust and mud splash within the first year or two, well before it looks obviously dirty." },
        { q: "Do you only work in the new subdivisions, or older parts of Spring Hill too?", a: "Both. We regularly wash older and rural properties around Spring Hill in addition to the newer neighborhoods." },
      ],
    },
    "thompsons-station-tn": {
      intro: "Almost every house wash we do in Thompson's Station is on a newer build, and new siding still needs regular cleaning to keep builder haze, mud splash from construction traffic, and early algae from setting in.",
      intro2: "Between the subdivisions, we also wash the older rural homes scattered around town, where more mature trees mean more shade and faster algae growth than a typical new build sees.",
      faqs: [
        { q: "Is it too early to wash a house that's only a year or two old?", a: "No, that's actually the ideal window. New siding in Thompson's Station usually starts showing builder dust and early algae film within the first year or two." },
        { q: "Will washing affect my new siding's warranty?", a: "We use a low-pressure soft wash specifically because it's the gentler method most builders and manufacturers recommend to protect newer siding warranties." },
      ],
    },
    "franklin-tn": {
      intro: "Franklin's house washing jobs range from 100-year-old homes near Main Street to five-year-old builds in Westhaven, and we treat them differently. Older wood siding and painted trim need a gentler soft wash, while newer fiber-cement can handle a more standard clean.",
      intro2: "Cool Springs businesses and Franklin HOAs also call on us for storefront and common-area washing, not just single-family homes.",
      faqs: [
        { q: "Is it safe to wash a historic home near downtown Franklin?", a: "Yes, as long as it's done with low pressure. We use a soft wash approach specifically to protect older wood siding, brick, and trim near Main Street." },
        { q: "Do you handle HOA-managed properties in Franklin, not just individual homes?", a: "Yes, we regularly work with Franklin HOAs on common-area and shared-building washing in addition to single-family homes." },
      ],
    },
    "nolensville-tn": {
      intro: "Nolensville homeowners deal with a spring pollen film that's almost as common a reason to call us as algae. Between the open new-construction lots and mature trees near Sunset and Clovercroft, there's a lot of surface area for pollen and dust to collect on siding.",
      intro2: "We also wash the older farmhouses and larger acreage properties scattered around town, which usually carry more tree-driven algae buildup than the newer subdivisions.",
      faqs: [
        { q: "Why does my house look dirty every spring even though I just had it washed last fall?", a: "That's almost always pollen, not algae. Nolensville's mix of open lots and mature trees creates heavy pollen film every spring regardless of how clean the house was in the fall." },
        { q: "Do you wash older farmhouses, not just newer subdivision homes?", a: "Yes, we regularly wash older and rural Nolensville properties in addition to the newer subdivisions closer to town." },
      ],
    },
    "murfreesboro-tn": {
      intro: "Murfreesboro's growth means we're constantly washing brand-new homes near active subdivisions, as well as older properties near the Square and student rentals near MTSU. Each needs a different level of care.",
      intro2: "Multi-family and rental properties near the university are some of our most frequent Murfreesboro jobs; we scale up for larger buildings without changing the low-pressure approach that protects the siding.",
      faqs: [
        { q: "Do you wash rental and student housing, not just owner-occupied homes?", a: "Yes, multi-family and student housing near MTSU is some of our most common Murfreesboro work." },
        { q: "Does new construction dust near Murfreesboro's growing subdivisions affect house washing?", a: "Yes, homes near active construction usually need washing sooner than fully built-out neighborhoods, since dust and debris settle on new siding faster." },
      ],
    },
    "smyrna-tn": {
      intro: "Smyrna homes near Percy Priest Lake deal with more humidity and pollen film than properties farther from the water, which speeds up algae growth on siding compared to homes elsewhere in town.",
      intro2: "We also regularly wash homes near the Nissan plant and Sam Ridley Parkway corridor, where road dust adds to the usual buildup.",
      faqs: [
        { q: "Do lakefront homes near Percy Priest Lake need washing more often?", a: "Yes, the added humidity near the lake speeds up algae growth compared to homes farther inland." },
        { q: "Is spring pollen or summer algae the bigger issue for Smyrna homes?", a: "Both show up, just at different times. Pollen film is the main spring complaint, while algae becomes more noticeable in the humid summer months." },
      ],
    },
  },

  concrete: {
    "hohenwald-tn": {
      intro: "Rural driveways and gravel-adjacent concrete pads around Hohenwald pick up dirt and organic staining fast under the tree cover near the Natchez Trace. Since we're based here, concrete cleaning in Hohenwald is easy to schedule without any travel delay.",
      intro2: "A lot of what we clean out here is farm-adjacent: equipment pads, barn aprons, and long rural driveways, not just a typical subdivision slab.",
      faqs: [
        { q: "Do you clean farm equipment pads, not just driveways?", a: "Yes, we regularly clean barn aprons, equipment pads, and long rural driveways around Lewis County, not just standard home driveways." },
        { q: "Is there a travel charge for concrete cleaning in Hohenwald?", a: "No, Hohenwald is our home base, so there's never a travel fee here." },
      ],
    },
    "summertown-tn": {
      intro: "Shaded rural driveways around Summertown collect algae faster than open concrete, and that algae gets dangerously slick when wet. We clean it off before it becomes a slip hazard, not just a cosmetic issue.",
      intro2: "Patios and outdoor pads on acreage properties are common here too, since a lot of Summertown living happens outdoors.",
      faqs: [
        { q: "Is algae on my driveway actually dangerous, or just ugly?", a: "Both. Algae-covered concrete gets extremely slick when wet, so it's a real slip hazard, not just a cosmetic issue." },
        { q: "Do you clean patios as well as driveways in Summertown?", a: "Yes, patio and outdoor pad cleaning is common here given how much outdoor living space rural Summertown properties tend to have." },
      ],
    },
    "centerville-tn": {
      intro: "Concrete near the Duck River recreation areas and downtown Centerville square holds moisture longer than more open parts of Hickman County, which means faster algae buildup on driveways and walkways.",
      intro2: "We clean everything from historic sidewalks near the square to long rural driveways out toward the county line.",
      faqs: [
        { q: "Why does concrete near the river get dirty faster?", a: "Higher humidity near the Duck River speeds up algae growth on concrete compared to more open, sun-exposed driveways elsewhere in the county." },
        { q: "Do you seal concrete after cleaning in Centerville?", a: "Yes, sealing is available after cleaning to help protect concrete from future staining, especially useful on older driveways near downtown." },
      ],
    },
    "columbia-tn": {
      intro: "Columbia's concrete cleaning jobs range from historic sidewalks near the square to large driveways in the newer subdivisions off James Campbell Blvd. Oil stains and tire marks are the most common complaint we hear regardless of the neighborhood.",
      intro2: "Demand picks up before Mule Day each spring, when homeowners and downtown businesses want their walkways looking clean for the crowds.",
      faqs: [
        { q: "Will oil stains on my Columbia driveway come out completely?", a: "Most oil staining lightens significantly with professional cleaning, though very old or deep stains may not disappear completely; we'll be upfront about expected results during inspection." },
        { q: "Should I get my sidewalk cleaned before Mule Day?", a: "If you're downtown or expecting festival traffic, booking a few weeks before Mule Day weekend is a good idea since that's one of our busiest stretches." },
      ],
    },
    "dickson-tn": {
      intro: "Driveways and parking areas near Interstate 40 and Highway 46 in Dickson pick up more road grime than properties set back from traffic, on top of the algae staining common across Middle Tennessee.",
      intro2: "We handle both residential driveways and commercial lots along the Highway 46 and 48 corridor.",
      faqs: [
        { q: "Does traffic from I-40 make my driveway dirtier?", a: "It can. Properties near the interstate tend to collect more road film and grime than driveways farther from major traffic." },
        { q: "Do you clean commercial parking areas in Dickson, not just home driveways?", a: "Yes, we regularly clean commercial lots and walkways along the Highway 46 corridor in addition to residential driveways." },
      ],
    },
    "spring-hill-tn": {
      intro: "Spring Hill driveways near active construction and the newer subdivisions around GM Ultium Cells deal with red clay staining and construction traffic buildup that older, fully built-out neighborhoods don't see as much.",
      intro2: "We also clean patio and pool deck surfaces, which are increasingly common in Spring Hill's newer developments.",
      faqs: [
        { q: "Why is my new driveway already stained with red clay?", a: "Construction traffic near new subdivisions tracks red clay onto driveways faster than normal wear, it's one of the most common issues we clean up in Spring Hill." },
        { q: "Do you clean pool decks, not just driveways?", a: "Yes, pool deck and patio cleaning is common in Spring Hill's newer developments where outdoor living space is a bigger feature." },
      ],
    },
    "thompsons-station-tn": {
      intro: "Almost every driveway we clean in Thompson's Station deals with red clay staining from nearby construction traffic; it's the most common complaint in this fast-growing town.",
      intro2: "We also clean the older, rural driveways scattered between the newer subdivisions, which tend to have more algae buildup from surrounding tree cover instead.",
      faqs: [
        { q: "Why does my new driveway have red clay stains already?", a: "Construction traffic from nearby subdivisions tracks red clay onto driveways quickly; this is the most common concrete issue we see in Thompson's Station." },
        { q: "Do rural driveways need different treatment than new subdivision ones?", a: "Usually, yes. Rural driveways tend to have more algae from tree cover, while new subdivision driveways deal more with construction dust and clay staining." },
      ],
    },
    "franklin-tn": {
      intro: "Cool Springs businesses and Franklin HOAs call on us for sidewalk and common-area concrete cleaning, while historic homes near downtown usually just need driveway and walkway cleaning around older masonry.",
      intro2: "Newer subdivisions in Westhaven and Berry Farms bring their own issue: construction dust and mud tracked in before landscaping fully settles.",
      faqs: [
        { q: "Do you clean commercial sidewalks in Cool Springs, not just residential driveways?", a: "Yes, storefront and sidewalk cleaning for Cool Springs businesses and Franklin HOAs is a regular part of our concrete work." },
        { q: "Is concrete near historic homes cleaned differently?", a: "We're mindful of older masonry and hardscaping near historic Franklin homes, but the concrete itself typically holds up fine to our standard surface cleaning process." },
      ],
    },
    "nolensville-tn": {
      intro: "Nolensville driveways deal with a heavy spring pollen film in addition to typical algae staining, thanks to the mix of open new-construction lots and mature trees near Sunset and Clovercroft.",
      intro2: "We also clean the sidewalks and pads around the historic Nolensville Road town center, alongside driveways in the newer subdivisions.",
      faqs: [
        { q: "Is the yellow film on my driveway every spring pollen or algae?", a: "Almost always pollen. It's one of the most common reasons Nolensville homeowners call us in spring, separate from the algae staining that shows up later in summer." },
        { q: "Do you clean the historic Nolensville Road area, or just newer subdivisions?", a: "Both. We regularly clean sidewalks and pads around the historic town center in addition to driveways in the newer developments." },
      ],
    },
    "murfreesboro-tn": {
      intro: "Murfreesboro's fast growth means a lot of the concrete we clean is either brand new, still dealing with construction dust, or part of a larger multi-family property near MTSU that needs commercial-scale equipment.",
      intro2: "We also handle older driveways and sidewalks near the historic Square, where oil staining tends to be more built up from years of use.",
      faqs: [
        { q: "Can you clean large parking areas for apartment complexes near MTSU?", a: "Yes, multi-family and student housing parking areas are common jobs for us; we bring commercial-grade equipment for larger surfaces." },
        { q: "Are older driveways near the Square harder to clean?", a: "They usually just need more time. Years of built-up oil staining takes longer to lift than a newer driveway but responds well to professional cleaning." },
      ],
    },
    "smyrna-tn": {
      intro: "Smyrna driveways near Percy Priest Lake deal with extra humidity-driven algae, while properties closer to the Nissan plant and Sam Ridley Parkway pick up more everyday road dust and grime.",
      intro2: "We clean both residential driveways and larger commercial lots throughout Smyrna.",
      faqs: [
        { q: "Do driveways near the lake need cleaning more often?", a: "Yes, the added humidity near Percy Priest Lake speeds up algae growth on concrete compared to drier parts of town." },
        { q: "Do you clean commercial lots near the Nissan plant corridor?", a: "Yes, we handle commercial concrete cleaning along the Sam Ridley Parkway corridor in addition to residential driveways." },
      ],
    },
  },

  "roof-cleaning": {
    "hohenwald-tn": {
      intro: "Roofs shaded by the hardwood canopy near the Natchez Trace hold moisture longer than roofs in open areas, which is exactly what lets Gloeocapsa Magma algae take hold and cause the black streaks you see on so many Hohenwald roofs.",
      intro2: "Being based in Hohenwald means we can usually get to local roof jobs faster than anywhere else on our route.",
      faqs: [
        { q: "Why do so many roofs near the Trace have black streaks?", a: "Heavy tree cover keeps roofs shaded and damp longer, which is the ideal condition for the algae that causes black streaking." },
        { q: "Is roof cleaning in Hohenwald scheduled faster since you're local?", a: "Usually, yes, since we're based here, Hohenwald roof jobs tend to have the shortest lead time on our schedule." },
      ],
    },
    "summertown-tn": {
      intro: "Summertown's heavy tree cover means roofs stay shaded most of the day, which speeds up moss and algae growth compared to roofs with more direct sun exposure.",
      intro2: "A lot of our Summertown roof work involves both algae streaking and actual moss growth in shaded valleys and ridges, not just one or the other.",
      faqs: [
        { q: "Do shaded Summertown roofs get moss as well as algae?", a: "Yes, it's common to see both: algae causing black streaks on open slopes and moss building up in shaded valleys and ridges." },
        { q: "How often do wooded Summertown roofs need cleaning?", a: "More often than open roofs, typically every 2 to 3 years versus the usual 2 to 4, given how much shade most properties here get." },
      ],
    },
    "centerville-tn": {
      intro: "Humidity near the Duck River and heavy shade around Centerville's older neighborhoods create ideal conditions for roof algae and moss, especially on homes with mature trees close to the roofline.",
      intro2: "We clean both historic homes near the square and rural properties with metal roofing scattered across Hickman County.",
      faqs: [
        { q: "Do you clean metal roofs, not just shingles, in Centerville?", a: "Yes, metal roofing is common on rural Hickman County properties, and our soft wash process is safe for both metal and asphalt shingle roofs." },
        { q: "Why does my roof near the river streak faster than roofs elsewhere in town?", a: "Higher humidity near the Duck River speeds up the algae growth responsible for black roof streaking." },
      ],
    },
    "columbia-tn": {
      intro: "Columbia's mature, tree-lined neighborhoods near downtown see more roof algae and moss than the newer subdivisions out toward Highway 31, where roofs get more direct sun and less shade.",
      intro2: "We treat historic homes with the same low-pressure care we use everywhere, since older roofing can be more sensitive to aggressive cleaning methods.",
      faqs: [
        { q: "Do older Columbia homes need a different roof cleaning approach?", a: "We're extra cautious with older roofing near downtown, using a gentle soft wash rather than any method that risks dislodging aged shingles or granules." },
        { q: "Why do roofs in older Columbia neighborhoods streak more than newer subdivisions?", a: "More mature trees near downtown mean more shade, and shade is the main driver of the algae that causes roof streaking." },
      ],
    },
    "dickson-tn": {
      intro: "Dickson roofs near I-40 collect more airborne dust and soot on top of the usual algae staining, which can make streaking look worse than it actually is until a proper soft wash clears both away.",
      intro2: "We clean roofs throughout Dickson County, from homes along Highway 46 to properties tucked back off the interstate corridor.",
      faqs: [
        { q: "Is the dark staining on my roof soot from I-40 or algae?", a: "Usually it's algae, though homes near the interstate can have some added dust and soot mixed in; our soft wash process removes both." },
        { q: "Do you clean roofs throughout Dickson County or just near town?", a: "Throughout the county, including properties well off Highway 46 and 48, not just homes close to downtown." },
      ],
    },
    "spring-hill-tn": {
      intro: "New roofs in Spring Hill's growing subdivisions near GM Ultium Cells still need attention sooner than most homeowners expect; early algae growth can start within the first couple years, well before visible streaking sets in heavily.",
      intro2: "We use a soft wash approach specifically because it protects newer roofing warranties, which matters a lot given how much new construction is going up around Spring Hill.",
      faqs: [
        { q: "My roof is only a few years old, does it need cleaning already?", a: "Early algae growth can start within a couple of years even on new roofing; catching it early is easier than waiting for heavy streaking to set in." },
        { q: "Will roof cleaning void my new home's roofing warranty in Spring Hill?", a: "No, we use a low-pressure soft wash specifically because it's the method most roofing manufacturers approve for warranty-safe cleaning." },
      ],
    },
    "thompsons-station-tn": {
      intro: "Thompson's Station is almost entirely new construction, so roof cleaning here is more about catching early algae growth before it streaks heavily than removing years of built-up moss.",
      intro2: "Protecting the roofing warranty matters even more here given how new most of the housing stock is, which is exactly why we stick to a low-pressure soft wash.",
      faqs: [
        { q: "Is it too early to clean a roof that's only 1-2 years old?", a: "No, that's actually the ideal time. Catching early algae growth on new roofing prevents heavier streaking down the line." },
        { q: "Does soft washing protect my new roof's warranty?", a: "Yes, low-pressure soft washing is the method most roofing manufacturers recommend specifically to avoid voiding a newer roof's warranty." },
      ],
    },
    "franklin-tn": {
      intro: "Older, tree-shaded roofs near downtown Franklin tend to carry heavier moss and algae buildup than the newer roofs going up in Westhaven and Berry Farms, which usually just need routine streak removal.",
      intro2: "We also handle roof cleaning for Cool Springs commercial buildings alongside residential work throughout Williamson County.",
      faqs: [
        { q: "Do historic Franklin homes need moss removal more than newer builds?", a: "Often yes, mature tree cover near downtown creates more shade, which is what drives heavier moss and algae growth compared to newer, more open subdivisions." },
        { q: "Do you clean commercial roofs in Cool Springs?", a: "Yes, we handle roof cleaning for Cool Springs commercial buildings in addition to residential work throughout Franklin." },
      ],
    },
    "nolensville-tn": {
      intro: "Nolensville roofs near mature trees around Sunset and Clovercroft see more moss and algae than roofs in the newer, more open subdivisions closer to town, where direct sun keeps growth in check longer.",
      intro2: "We also clean roofs on the older farmhouses and outbuildings scattered around the edges of town.",
      faqs: [
        { q: "Why do roofs near Sunset and Clovercroft streak more than newer Nolensville homes?", a: "More mature tree cover in those areas means more shade, which is the main condition that lets roof algae take hold." },
        { q: "Do you clean outbuilding roofs on Nolensville farm properties?", a: "Yes, we regularly clean roofing on barns and outbuildings in addition to main house roofs on rural Nolensville properties." },
      ],
    },
    "murfreesboro-tn": {
      intro: "Murfreesboro's older neighborhoods near the Square tend to have heavier roof algae and moss under mature tree cover, while newer roofs in growing subdivisions usually just need early streak prevention.",
      intro2: "We also clean roofing on multi-family and rental properties near MTSU as part of our larger-property work.",
      faqs: [
        { q: "Do rental properties near MTSU need roof cleaning too?", a: "Yes, we handle roof cleaning for multi-family and rental properties near MTSU, not just single-family homes." },
        { q: "Are roofs near the historic Square more prone to moss?", a: "Often, yes, more mature tree cover in Murfreesboro's older neighborhoods creates more shade than the newer, more open subdivisions." },
      ],
    },
    "smyrna-tn": {
      intro: "Smyrna roofs near Percy Priest Lake see more algae growth thanks to the added humidity off the water, while homes closer to the Nissan plant and Sam Ridley Parkway deal more with everyday dust settling into streaking.",
      intro2: "Spring pollen also plays a role in how dirty Smyrna roofs look before algae even becomes visible.",
      faqs: [
        { q: "Do lakefront Smyrna roofs need cleaning more often?", a: "Yes, the extra humidity near Percy Priest Lake speeds up the algae growth responsible for black roof streaking." },
        { q: "Is it pollen or algae making my roof look dirty in Smyrna?", a: "Could be either: pollen creates a lighter film in spring while algae causes the darker streaking that builds over the humid summer months." },
      ],
    },
  },

  "decks-and-fences": {
    "hohenwald-tn": {
      intro: "Wood decks and fences on rural Hohenwald properties near the Natchez Trace sit under heavy shade for most of the day, which speeds up the gray weathering and algae buildup that makes wood look tired and feel slick underfoot.",
      intro2: "Since we're based here, deck and fence cleaning in Hohenwald is easy to schedule without any travel delay added to the job.",
      faqs: [
        { q: "Why does my deck near the Trace turn gray faster than expected?", a: "Heavy shade from surrounding hardwoods holds moisture against the wood longer, which speeds up the natural graying and algae growth." },
        { q: "Is there a travel fee for deck cleaning since you're based in Hohenwald?", a: "No, Hohenwald is our home base, so there's no travel charge for local jobs." },
      ],
    },
    "summertown-tn": {
      intro: "A lot of Summertown living happens outdoors on decks and porches, and the heavy tree cover across most rural properties means algae and mildew build up on wood surfaces faster than in more open parts of the county.",
      intro2: "We see plenty of older wood fencing out here too, which needs a gentler approach than newer composite decking.",
      faqs: [
        { q: "Do wooded Summertown decks get slippery from algae?", a: "Yes, algae buildup on shaded decks makes them noticeably slick when wet; cleaning restores safer footing." },
        { q: "Can you clean older wood fencing, not just decks?", a: "Yes, we regularly clean older wood fencing around Summertown properties in addition to decks and patios." },
      ],
    },
    "centerville-tn": {
      intro: "Decks near the Duck River recreation areas deal with extra humidity that speeds up mildew and algae growth on wood, especially on shaded sides facing away from direct sun.",
      intro2: "We clean everything from newer composite decking to older wood fencing scattered across rural Hickman County.",
      faqs: [
        { q: "Do decks near the Duck River need cleaning more often?", a: "Yes, the added humidity near the river speeds up mildew and algae growth on wood surfaces." },
        { q: "Do you clean composite decking as well as real wood?", a: "Yes, we adjust our cleaning approach for composite versus real wood so either surface gets cleaned safely." },
      ],
    },
    "columbia-tn": {
      intro: "Columbia's older neighborhoods near downtown often have mature wood fencing and decks that have gone gray under years of shade, while newer subdivisions out toward Highway 31 tend to have composite decking that just needs routine algae removal.",
      intro2: "We're careful with older, weathered wood to avoid splintering while still lifting the gray buildup underneath.",
      faqs: [
        { q: "Can old, weathered wood fencing actually be restored?", a: "Cleaning removes the algae, mildew, and gray surface buildup; most fencing looks dramatically better afterward even if it doesn't fully return to its original color." },
        { q: "Is composite decking cleaned differently than real wood in Columbia?", a: "Yes, we adjust pressure and solution based on the material so composite decking common in newer subdivisions is cleaned safely." },
      ],
    },
    "dickson-tn": {
      intro: "Decks and fences near the I-40 corridor in Dickson pick up more airborne dust on top of the typical algae and mildew buildup, which can dull the wood faster than in quieter parts of the county.",
      intro2: "We clean both residential decks and larger fenced areas throughout Dickson County.",
      faqs: [
        { q: "Does dust from I-40 affect my deck's appearance?", a: "It can add to the dulling alongside typical algae and mildew; our cleaning process removes both." },
        { q: "Do you clean large fenced yards, not just small decks?", a: "Yes, we handle larger fenced properties throughout Dickson County in addition to standard decks and patios." },
      ],
    },
    "spring-hill-tn": {
      intro: "New decks in Spring Hill's growing subdivisions near GM Ultium Cells still need attention sooner than expected: construction dust and mud splash settle into new wood grain faster than most homeowners realize.",
      intro2: "We also clean older fencing and decking on the more established properties around town.",
      faqs: [
        { q: "My deck is new, why does it need cleaning already?", a: "Construction dust and mud from nearby building activity settles into new wood grain quickly; cleaning early keeps it from staining permanently." },
        { q: "Do you work on older Spring Hill decks too, not just new construction?", a: "Yes, we clean both new decking near active subdivisions and older decks and fencing on established properties." },
      ],
    },
    "thompsons-station-tn": {
      intro: "Most of the decks and fences we clean in Thompson's Station are new, and new wood picks up construction dust and mud splash from nearby building activity faster than most homeowners expect.",
      intro2: "We also handle the older rural fencing and decking scattered between the newer subdivisions.",
      faqs: [
        { q: "Should I wait longer before cleaning a brand-new deck?", a: "No, new decking near construction activity often needs cleaning within the first year to remove dust and mud splash before it stains permanently." },
        { q: "Do you clean rural fencing between the subdivisions?", a: "Yes, we regularly clean older rural fencing and decking on the properties scattered between Thompson's Station's newer developments." },
      ],
    },
    "franklin-tn": {
      intro: "Historic homes near downtown Franklin often have older wood fencing that needs a gentler cleaning approach, while newer decks in Westhaven and Berry Farms can typically handle a more standard wash.",
      intro2: "Cool Springs HOAs also call on us for common-area fencing and shared deck structures.",
      faqs: [
        { q: "Is older wood fencing near downtown Franklin harder to clean safely?", a: "We use a gentler, wood-safe approach on older fencing specifically to avoid splintering or damaging aged wood." },
        { q: "Do you clean HOA-managed fencing in Franklin, not just private decks?", a: "Yes, we work with Cool Springs and Franklin HOAs on common-area fencing and shared structures." },
      ],
    },
    "nolensville-tn": {
      intro: "Decks near mature trees around Sunset and Clovercroft see more algae and mildew than decks in Nolensville's newer, more open subdivisions, where direct sun keeps wood drier.",
      intro2: "We also clean fencing and outbuildings on the larger rural properties around the edges of town.",
      faqs: [
        { q: "Why does my deck near Sunset Road get slippery faster than a neighbor's in a newer subdivision?", a: "More shade from mature trees keeps the wood damp longer, which speeds up algae growth and makes the surface slicker." },
        { q: "Do you clean fencing on larger rural Nolensville properties?", a: "Yes, we regularly clean fencing and outbuildings on the acreage properties around town, not just standard residential decks." },
      ],
    },
    "murfreesboro-tn": {
      intro: "Older Murfreesboro neighborhoods near the Square often have mature wood fencing that's gone gray under years of tree cover, while decks in the newer, fast-growing subdivisions typically just need routine algae removal.",
      intro2: "We also clean shared deck and patio structures for multi-family properties near MTSU.",
      faqs: [
        { q: "Can gray, weathered fencing near the Square be brought back?", a: "Cleaning lifts the algae, mildew, and gray surface buildup; most fencing looks noticeably better afterward, ready for staining if you want to go further." },
        { q: "Do you clean shared outdoor spaces for apartments near MTSU?", a: "Yes, we handle shared deck and patio cleaning for multi-family properties in addition to single-family decks and fences." },
      ],
    },
    "smyrna-tn": {
      intro: "Decks near Percy Priest Lake deal with extra humidity that speeds up algae and mildew growth on wood, making them slicker underfoot than decks farther from the water.",
      intro2: "We also clean fencing throughout Smyrna's established neighborhoods near Sam Ridley Parkway.",
      faqs: [
        { q: "Are lakefront decks near Percy Priest Lake more slippery than others?", a: "Yes, the added humidity near the lake speeds up algae growth on wood; cleaning restores safer footing." },
        { q: "Do you clean fencing as well as decks in Smyrna?", a: "Yes, fence cleaning is a regular part of our Smyrna work alongside deck and patio cleaning." },
      ],
    },
  },

  "gutters-windows": {
    "hohenwald-tn": {
      intro: "Rural Hohenwald properties near the Natchez Trace sit under heavy tree cover, which means gutters fill with leaves and debris faster than homes in more open areas, and clogged gutters lead to overflow damage fast.",
      intro2: "Being based here, gutter cleaning in Hohenwald is one of the easier jobs for us to schedule without travel delay.",
      faqs: [
        { q: "Do gutters near the Trace clog faster because of the trees?", a: "Yes, heavy hardwood cover means more leaf and debris buildup than open properties, so gutters here often need clearing more than once a year." },
        { q: "Is gutter cleaning in Hohenwald scheduled quickly since you're local?", a: "Usually, yes, Hohenwald jobs tend to have the shortest lead time on our schedule." },
      ],
    },
    "summertown-tn": {
      intro: "Summertown's heavy tree cover means gutters fill with leaves and debris quickly, and a clogged gutter on a rural property can mean water pooling right against the foundation before anyone notices.",
      intro2: "We flush downspouts on every job to confirm water is actually draining, not just cleared at the top.",
      faqs: [
        { q: "How often do wooded Summertown properties need gutter cleaning?", a: "Twice a year is common given how much leaf and debris buildup comes off the surrounding trees, more than a typical open property would need." },
        { q: "Do you check that downspouts are actually draining, not just clear the gutters?", a: "Yes, we flush the whole system on every job to confirm water is really flowing away from the house, not just that the gutter itself looks clear." },
      ],
    },
    "centerville-tn": {
      intro: "Homes near the Duck River and Centerville's tree-lined older neighborhoods deal with heavier leaf debris than more open parts of Hickman County, and overflow near downtown's historic homes can be especially damaging to older foundations.",
      intro2: "We serve rural properties throughout the county as well as homes closer to the square.",
      faqs: [
        { q: "Are older homes near downtown Centerville more at risk from clogged gutters?", a: "Overflow can be more damaging to older foundations and masonry, so we make sure debris and downspouts are fully cleared rather than just the visible gutter run." },
        { q: "Do you clean gutters on rural properties, not just in-town homes?", a: "Yes, we service gutter cleaning throughout Hickman County, including rural properties well outside town." },
      ],
    },
    "columbia-tn": {
      intro: "Columbia's mature, tree-lined streets near downtown mean heavier leaf buildup in gutters than the newer subdivisions off Highway 31, where younger landscaping sheds less debris.",
      intro2: "We check downspouts on every job since a clogged downspout causes the same overflow damage as a clogged gutter, just less visibly.",
      faqs: [
        { q: "Do older Columbia neighborhoods need gutter cleaning more often?", a: "Often yes, more mature trees near downtown mean more leaf debris than newer subdivisions see." },
        { q: "What actually happens if I skip gutter cleaning for a year?", a: "Overflow can damage siding, fascia boards, and roofing, and water pooling at the foundation can lead to erosion or basement leaks over time." },
      ],
    },
    "dickson-tn": {
      intro: "Homes near I-40 and Highway 46 in Dickson deal with debris blown in from nearby tree lines in addition to normal seasonal leaf drop, which can clog gutters faster than expected.",
      intro2: "We service both residential gutters and commercial roof drainage along the Highway 46 corridor.",
      faqs: [
        { q: "Does debris from nearby tree lines add to normal gutter buildup in Dickson?", a: "It can, properties near wooded areas along the highway corridor often see more debris than fully open lots." },
        { q: "Do you clean commercial gutter systems in Dickson, not just homes?", a: "Yes, we handle commercial roof drainage cleaning along the Highway 46 corridor in addition to residential gutters." },
      ],
    },
    "spring-hill-tn": {
      intro: "New homes in Spring Hill's growing subdivisions near GM Ultium Cells still need gutter cleaning: construction dust and debris from nearby building sites can clog a new system faster than homeowners expect.",
      intro2: "We also service the established, tree-covered properties around older parts of town.",
      faqs: [
        { q: "Why would a new home's gutters already need cleaning?", a: "Construction dust and debris from nearby building sites can settle into a new gutter system faster than typical seasonal leaf drop alone." },
        { q: "Do you service older, established Spring Hill neighborhoods too?", a: "Yes, we clean gutters throughout Spring Hill, from new construction near Ultium Cells to older, more established tree-covered properties." },
      ],
    },
    "thompsons-station-tn": {
      intro: "Even in a town this new, gutters near Thompson's Station's growing subdivisions collect construction dust and debris fast, on top of whatever landscaping has been planted so far.",
      intro2: "We also service the rural properties between subdivisions, where mature trees create the more typical leaf-clog situation.",
      faqs: [
        { q: "Do new homes in Thompson's Station really need gutter cleaning already?", a: "Yes, construction dust and debris from ongoing nearby building work clogs new systems faster than people expect." },
        { q: "Are rural properties between the subdivisions different to service?", a: "They tend to have heavier leaf debris from mature trees, closer to the typical gutter-clogging pattern you'd see anywhere else." },
      ],
    },
    "franklin-tn": {
      intro: "Historic homes near downtown Franklin often sit under decades-old tree canopy, meaning heavier gutter debris than the newer, more open subdivisions in Westhaven and Berry Farms.",
      intro2: "Cool Springs businesses also call on us for commercial roof drainage cleaning alongside residential gutter work.",
      faqs: [
        { q: "Do older Franklin homes near downtown need gutter cleaning more often?", a: "Often yes, mature tree canopy near downtown means more leaf debris than newer subdivisions typically see." },
        { q: "Do you clean commercial gutters for Cool Springs businesses?", a: "Yes, commercial roof drainage cleaning is a regular part of our Franklin work alongside residential gutters." },
      ],
    },
    "nolensville-tn": {
      intro: "Properties near Sunset and Clovercroft with mature tree cover collect more gutter debris than Nolensville's newer, more open subdivisions, where landscaping hasn't fully matured yet.",
      intro2: "We also service the larger rural properties around the edges of town, where debris volume is even higher.",
      faqs: [
        { q: "Do properties near Sunset Road need more frequent gutter cleaning?", a: "Yes, mature tree cover in that part of Nolensville sheds more debris than the newer, more open subdivisions closer to town." },
        { q: "Do you service rural Nolensville properties, not just in-town homes?", a: "Yes, we clean gutters on the larger acreage properties around town in addition to standard residential lots." },
      ],
    },
    "murfreesboro-tn": {
      intro: "Older Murfreesboro neighborhoods near the Square deal with heavier gutter debris under mature tree cover, while newer subdivisions and multi-family properties near MTSU usually see less, but still need regular checks.",
      intro2: "We service apartment and rental properties as part of our larger-scale Murfreesboro work.",
      faqs: [
        { q: "Do older Murfreesboro homes need gutter cleaning more than newer ones?", a: "Generally yes, more mature trees near the Square mean more leaf debris than the newer, more open subdivisions." },
        { q: "Do you clean gutters for multi-family properties near MTSU?", a: "Yes, apartment and rental property gutter cleaning is part of our regular Murfreesboro work." },
      ],
    },
    "smyrna-tn": {
      intro: "Homes near Percy Priest Lake and the surrounding tree cover deal with heavier gutter debris than properties closer to the Nissan plant and more open parts of town.",
      intro2: "We service both residential gutters and larger commercial roof drainage systems throughout Smyrna.",
      faqs: [
        { q: "Do lakefront Smyrna homes need gutter cleaning more often?", a: "Often yes, the tree cover near Percy Priest Lake tends to shed more debris than the more open areas near town." },
        { q: "Do you clean commercial roof drainage in Smyrna, not just home gutters?", a: "Yes, we service commercial roof drainage systems throughout Smyrna in addition to residential gutter cleaning." },
      ],
    },
  },
};
