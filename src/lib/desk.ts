export const researchedOn = "3 November 2026";

export const countries = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
] as const;

export type Country = (typeof countries)[number];

export const grades = ["budget", "mid", "upper", "luxury"] as const;
export type Grade = (typeof grades)[number];

export const kinds = [
  "portal",
  "classifieds",
  "luxury",
  "brokerage",
  "developer",
  "official",
] as const;
export type Kind = (typeof kinds)[number];

export type Scale = "local" | "national" | "regional";

export type SiteLink = {
  country: Country;
  label: string;
  href: string;
};

export type Source = { label: string; href: string };

export type Marketplace = {
  slug: string;
  name: string;
  arabicName?: string;
  kind: Kind;
  scale: Scale;
  grades: Grade[];
  countries: Country[];
  links: SiteLink[];
  summary: string;
  whoItsFor: string;
  howMoneyWorks: string;
  strengths: string[];
  flaws: string[];
  missing: string;
  sources: Source[];
};

export const gradeLabel: Record<Grade, string> = {
  budget: "Budget",
  mid: "Mid-market",
  upper: "Upper",
  luxury: "Luxury",
};

export const kindLabel: Record<Kind, string> = {
  portal: "Property portal",
  classifieds: "Classifieds",
  luxury: "Luxury desk",
  brokerage: "Brokerage",
  developer: "Builder direct",
  official: "Official tool",
};

export const scaleLabel: Record<Scale, string> = {
  local: "Smaller / local",
  national: "National",
  regional: "Regional group",
};

export const marketplaces: Marketplace[] = [
  {
    slug: "property-finder",
    name: "Property Finder",
    kind: "portal",
    scale: "regional",
    grades: ["budget", "mid", "upper"],
    countries: ["UAE", "Saudi Arabia", "Qatar", "Bahrain"],
    links: [
      { country: "UAE", label: "propertyfinder.ae", href: "https://www.propertyfinder.ae/" },
      { country: "Saudi Arabia", label: "propertyfinder.sa", href: "https://www.propertyfinder.sa/" },
      { country: "Qatar", label: "propertyfinder.qa", href: "https://www.propertyfinder.qa/" },
      { country: "Bahrain", label: "propertyfinder.bh", href: "https://www.propertyfinder.bh/" },
    ],
    summary:
      "The regional portal overseas buyers already know. Separate sites for the UAE, Saudi Arabia, Qatar, and Bahrain. The group also runs Egypt and Turkey (Zingat); it does not run Kuwait or Oman.",
    whoItsFor:
      "Renters and buyers who want agency listings with a permit number, plus investors who start their search in English.",
    howMoneyWorks:
      "Agencies pay for accounts and placement. Searching is free. The portal earns when agents pay to be seen, so an ad can stay up because it produces calls.",
    strengths: [
      "Deep agency inventory in four Gulf countries, with Arabic and English.",
      "Verified-listing badges and, in Dubai, a Trakheesi permit on the ad.",
      "The website has a “See upfront costs” breakdown. Their App Store reply said the app was due to follow.",
      "In Bahrain it absorbed the older local portal Bahrain Property World.",
    ],
    flaws: [
      "Renters on r/dubai and r/dubairealestate describe bait ads: the home is gone, or the price was never real, and the agent offers something else.",
      "Trustpilot reviews say a reported scam or a dead listing stays on the site.",
      "The same apartment is posted by several agencies at several prices.",
      "People still meet a different number on the phone from the number on the card. An App Store review asked for the full Dubai purchase cost, including the DLD fee and the agency fee.",
    ],
    missing:
      "A card that refuses to show a home until someone has confirmed it is free, at that price, with every cheque and government fee written in one total.",
    sources: [
      { label: "Property Finder, countries they operate", href: "https://www.propertyfinder.com/home_page_intro/explore-our-brand/" },
      { label: "Trustpilot reviews", href: "https://www.trustpilot.com/review/www.propertyfinder.ae" },
      { label: "r/dubairealestate on false listings", href: "https://www.reddit.com/r/dubairealestate/comments/1lk2y7x/false_property_listings_on_property_finder/" },
      { label: "App Store reviews, including the full-price request", href: "https://apps.apple.com/ae/app/property-finder-real-estate/id897540233?see-all=reviews" },
    ],
  },
  {
    slug: "bayut",
    name: "Bayut",
    arabicName: "بيوت",
    kind: "portal",
    scale: "regional",
    grades: ["budget", "mid", "upper"],
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Bahrain", "Oman"],
    links: [
      { country: "UAE", label: "bayut.com", href: "https://www.bayut.com/" },
      { country: "Saudi Arabia", label: "bayut.sa", href: "https://www.bayut.sa/" },
      { country: "Kuwait", label: "bayut.com.kw", href: "https://www.bayut.com.kw/" },
      { country: "Bahrain", label: "bayut.bh", href: "https://www.bayut.bh/en/" },
      { country: "Oman", label: "bayut.om", href: "https://www.bayut.om/en/" },
    ],
    summary:
      "The high-traffic portal in the same group as dubizzle. In the UAE it is the site many people open first. Saudi, Kuwait, Bahrain, and Oman each have their own Bayut. Qatar is not one of their Gulf sites.",
    whoItsFor:
      "People comparing a lot of agency listings, from a normal rental up to expensive apartments. Serious luxury curation lives on other desks.",
    howMoneyWorks:
      "Agencies buy credits and packages so their ads rank. Leads are the product. A guide aimed at developers put a typical Bayut cost-per-lead below Property Finder’s, with more window-shoppers in the mix. Treat those figures as that guide’s estimate.",
    strengths: [
      "Volume. More homes on the screen, which matters when you are still learning a city.",
      "TruCheck: an agent is supposed to have visited. Useful, and not the same as “available today”.",
      "In Saudi, public pages show REGA licence cues, drive-time search, a map, and 360° tours.",
      "BayutGPT, their conversational search, is further along than a plain filter form.",
    ],
    flaws: [
      "Trustpilot and r/dubai describe the same bait pattern as Property Finder: the home is not for sale, the price jumps 30–40%, or the ad is still there after you bought it.",
      "People who report a fake listing say it stays up for days or weeks.",
      "Guides disagree on who is “premium”. One calls Bayut stronger above AED 10 million. Another calls it the mid-market site and Property Finder the international brand. Read both, then judge the listing.",
    ],
    missing:
      "One record per real unit. Today the same door is five ads. A single page with the true price range, the permit, and a last-confirmed date would remove most of the wasted visits.",
    sources: [
      { label: "Trustpilot reviews", href: "https://www.trustpilot.com/review/bayut.com" },
      { label: "r/dubai on whether the ads are real", href: "https://www.reddit.com/r/dubai/comments/1jh96i1/are_bayut_and_propertyfinder_reliable_or_just/" },
      { label: "r/dubairealestate on prices that change", href: "https://www.reddit.com/r/dubairealestate/comments/1ujm17z/wrong_advertised_prices_and_shady_agents/" },
      { label: "Bayut vs Property Finder, a 2026 UAE guide", href: "https://www.uaeexperthub.com/best-property-portals-uae/" },
    ],
  },
  {
    slug: "dubizzle",
    name: "dubizzle",
    kind: "classifieds",
    scale: "regional",
    grades: ["budget", "mid"],
    countries: ["UAE", "Kuwait", "Bahrain", "Oman"],
    links: [
      { country: "UAE", label: "dubizzle.com", href: "https://www.dubizzle.com/" },
      { country: "Kuwait", label: "dubizzle.com.kw", href: "https://www.dubizzle.com.kw/" },
      { country: "Bahrain", label: "dubizzle.com.bh", href: "https://www.dubizzle.com.bh/en/" },
      { country: "Oman", label: "dubizzle.com.om", href: "https://www.dubizzle.com.om/en/" },
    ],
    summary:
      "The classifieds board in the Bayut group. Property sits beside cars and furniture. In the UAE it is one of the few places an owner can still post, including rooms and holiday homes. Bahrain and Oman were OLX and now carry the dubizzle name.",
    whoItsFor:
      "Budget renters, people happy to deal direct, and anyone hunting a room or a short let. Less useful if you want a curated expensive home.",
    howMoneyWorks:
      "Some categories are paid, some are cheap or free, and agents also advertise. Prices differ by city. You only see the real fee on the post-an-ad screen.",
    strengths: [
      "Owner ads and smaller tickets that the big agency portals bury.",
      "Rooms, short stays, and commercial mixed in with normal homes.",
      "The UAE app shows a RERA number on listings, according to dubizzle’s own help material.",
    ],
    flaws: [
      "No TruCheck-style visit badge. You do more of the checking yourself.",
      "A new account is treated as an agent until support changes it, so “owner” is not always what it looks like.",
      "Inventory overlaps with Bayut. Searching both still means seeing the same agency ad twice.",
    ],
    missing:
      "A clear owner / agent label that is actually checked, and a filter that means something for “bills included”, “chiller included”, and “families only”.",
    sources: [
      { label: "How the UAE portals differ, including dubizzle", href: "https://listandlist.com/en/guides/best-property-websites-in-dubai" },
      { label: "UAE portal guide, 2026", href: "https://www.uaeexperthub.com/best-property-portals-uae/" },
      { label: "dubizzle Oman, formerly OLX", href: "https://www.dubizzle.com.om/en/" },
    ],
  },
  {
    slug: "opensooq",
    name: "OpenSooq",
    arabicName: "السوق المفتوح",
    kind: "classifieds",
    scale: "regional",
    grades: ["budget", "mid"],
    countries: ["Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
    links: [
      { country: "Saudi Arabia", label: "sa.opensooq.com", href: "https://sa.opensooq.com/" },
      { country: "Qatar", label: "qa.opensooq.com", href: "https://qa.opensooq.com/" },
      { country: "Kuwait", label: "kw.opensooq.com", href: "https://kw.opensooq.com/en/real-estate" },
      { country: "Bahrain", label: "bh.opensooq.com", href: "https://bh.opensooq.com/" },
      { country: "Oman", label: "om.opensooq.com", href: "https://om.opensooq.com/" },
    ],
    summary:
      "The Arabic classifieds market for the Levant and the Gulf. Real estate is one large section: apartments, villas, land, shops. People use it when they want a local price, a direct number, and a home the agency portals never listed.",
    whoItsFor:
      "Arabic-first renters and buyers, landlords posting their own place, and anyone price-checking the bottom and middle of the market.",
    howMoneyWorks:
      "A mix of free ads and paid bumps. The person on the other end may be an owner or a broker. The site does not run the deal.",
    strengths: [
      "Local liquidity in Arabic, including cities the English portals cover thinly.",
      "Direct contact. You are not forced through a lead form.",
      "Useful as a second opinion on rent after you have looked at Aqar, Bayut, or 4Sale.",
    ],
    flaws: [
      "Ads repeat, photos are uneven, and a listing’s age is your problem to notice.",
      "Almost no help with the all-in cost, the building rules, or whether a foreigner can buy.",
      "English search is the weaker path.",
    ],
    missing:
      "The same plain-language card the big portals lack, in Arabic first: who is advertising, when it was last confirmed, and what the neighbourhood actually rented for.",
    sources: [
      { label: "Saudi portal landscape, OpenSooq included", href: "https://coraly.ai/gppi/markets/saudi-arabia" },
      { label: "Kuwait portal landscape", href: "https://coraly.ai/gppi/markets/kuwait" },
      { label: "OpenSooq Kuwait property", href: "https://kw.opensooq.com/en/real-estate" },
    ],
  },
  {
    slug: "aqar",
    name: "Aqar",
    arabicName: "عقار",
    kind: "portal",
    scale: "national",
    grades: ["budget", "mid", "upper"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "sa.aqar.fm", href: "https://sa.aqar.fm/en" }],
    summary:
      "The Saudi app people already have on their phone. Map first, Arabic first, used for daily rentals, long leases, and sales. Google Play showed about 3.5 stars from roughly 61,300 reviews when this desk was compiled, and the store listing cites a very large download count.",
    whoItsFor:
      "Anyone housing themselves in the Kingdom, and owners who want to advertise without joining an agency portal.",
    howMoneyWorks:
      "Browsing is free. Advertisers pay to list and to bump. Aqar has said ad fees are most of its income and that it does not take a cut of the deal. Aqar Plus is a paid tier for searchers (map of favourites, owner-only ads, more saved requests).",
    strengths: [
      "The local habit. If a Saudi home is online, it is often here.",
      "The store listing says ads are licensed with the real-estate authority and advertisers pass Nafath, with rental contracts tied to Ejar.",
      "Neighbourhood price averages, a “request this home” alert, and daily booking for chalets and rest houses.",
      "An English web version exists at sa.aqar.fm/en.",
    ],
    flaws: [
      "App Store reviews, as gathered by review trackers, complain about old ads, repeated or missing photos, and prices that do not match the villa.",
      "A long-time user said contact now goes through a marketer, so the owner is harder to reach.",
      "A Play review asked for Google Maps and real English. Another, in 2026, said the app does not open outside Saudi Arabia.",
      "Renters on r/Riyadh still tell each other to assume some pretty, cheap ads are bait, and to pay only through Ejar.",
    ],
    missing:
      "English that a newcomer can search in, a map that opens in the navigation app you already use, and a hard line between the owner and the marketer. The licence number is necessary. It does not, by itself, tell you the photo is of this room.",
    sources: [
      { label: "Aqar on Google Play", href: "https://play.google.com/store/apps/details?hl=en&id=fm.aqar" },
      { label: "Review themes on the App Store listing", href: "https://mwm.ai/apps/aqar-saudi-real-estate/879992882" },
      { label: "r/Riyadh: Aqar or Bayut, and how to avoid a scam", href: "https://www.reddit.com/r/Riyadh/comments/1mcm3pc/aqar_or_bayut_genuine_ads/" },
      { label: "Aqar English site", href: "https://sa.aqar.fm/en" },
    ],
  },
  {
    slug: "wasalt",
    name: "Wasalt",
    arabicName: "وصلت",
    kind: "portal",
    scale: "national",
    grades: ["mid", "upper"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "wasalt.sa", href: "https://wasalt.sa/" }],
    summary:
      "A Saudi portal licensed by the Real Estate General Authority. The site shows REGA licence 1200016591, a tourism licence for short stays, and auctions that include enforcement (Infath) sales as well as private ones.",
    whoItsFor:
      "Buyers and renters who want a licensed Saudi platform, and bidders looking at auctions rather than only classifieds.",
    howMoneyWorks:
      "A licensed marketplace: advertisers and auction participants use the platform. The public site is in Arabic.",
    strengths: [
      "REGA licence shown on the site, which is the right kind of proof in this market.",
      "Auctions in one place, not only broker ads.",
      "Positions itself around checked listings and broker contact.",
    ],
    flaws: [
      "English-language forums barely discuss it, so a newcomer has little crowd wisdom to read.",
      "The public site is Arabic. If you cannot read the licence and the auction terms yourself, bring someone who can.",
      "A licence is not a promise that every photo is current. The same freshness problem as everywhere else still needs a date.",
    ],
    missing:
      "A bilingual auction and listing page that says, in one screen, what the deposit is, whether the sale is binding, and what the last confirmed visit found.",
    sources: [
      { label: "Wasalt", href: "https://wasalt.sa/" },
      { label: "Saudi portal landscape", href: "https://coraly.ai/gppi/markets/saudi-arabia" },
    ],
  },
  {
    slug: "haraj",
    name: "Haraj",
    arabicName: "حراج",
    kind: "classifieds",
    scale: "national",
    grades: ["budget", "mid"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "haraj.com.sa", href: "https://haraj.com.sa/" }],
    summary:
      "Saudi Arabia’s giant classifieds site. Property is one busy section among many: rent, sale, residential, commercial. People come here for a direct deal and a lower fee, then sort the noise themselves.",
    whoItsFor:
      "Budget hunters and anyone who wants to talk to a person rather than an agency brand. A poor first stop if you need English or a verified building file.",
    howMoneyWorks:
      "Classified advertising. The site is not the broker and not the landlord.",
    strengths: [
      "Raw supply, including homes that never reach Bayut or Property Finder.",
      "Direct conversation, which renters on r/Riyadh treat as a plus when the papers check out.",
    ],
    flaws: [
      "No standard permit badge in the way a property portal now shows one. You have to ask for the REGA ad licence yourself.",
      "Photos, duplicates, and expired ads are the cost of a free-form board.",
      "English support is not the product.",
    ],
    missing:
      "A property aisle that borrows Aqar’s licence check without losing Haraj’s direct contact. Show the licence, the date, and the phone of the person who can say yes.",
    sources: [
      { label: "Haraj", href: "https://haraj.com.sa/" },
      { label: "Saudi portal landscape", href: "https://coraly.ai/gppi/markets/saudi-arabia" },
    ],
  },
  {
    slug: "expatriates",
    name: "Expatriates.com",
    kind: "classifieds",
    scale: "regional",
    grades: ["budget", "mid"],
    countries: ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"],
    links: [
      { country: "Saudi Arabia", label: "expatriates.com", href: "https://www.expatriates.com/" },
      { country: "UAE", label: "expatriates.com", href: "https://www.expatriates.com/" },
      { country: "Qatar", label: "expatriates.com", href: "https://www.expatriates.com/" },
      { country: "Kuwait", label: "expatriates.com", href: "https://www.expatriates.com/" },
      { country: "Bahrain", label: "expatriates.com", href: "https://www.expatriates.com/" },
      { country: "Oman", label: "expatriates.com", href: "https://www.expatriates.com/" },
    ],
    summary:
      "An old expat noticeboard that still carries rental ads, especially where English-speaking newcomers look before they learn the local app. It is a classifieds board, not a checked portal.",
    whoItsFor:
      "New arrivals price-checking a neighbourhood and landlords posting a simple ad. Use it beside a real portal, not instead of one.",
    howMoneyWorks:
      "Classified ads. Standards are looser than on Aqar or Bayut, and duplicates are common.",
    strengths: [
      "English, and a long memory of what expats actually pay.",
      "Still cited for Saudi and Bahrain rental discovery in portal surveys.",
    ],
    flaws: [
      "Little structure: weak proof of who is posting, weak dates, repeated ads.",
      "Easy to mistake a broker blast for an owner.",
    ],
    missing:
      "Anything a 2000s board never grew: a permit, a map pin you can trust, and a way to see that the room is gone.",
    sources: [
      { label: "Expatriates.com", href: "https://www.expatriates.com/" },
      { label: "Mentioned in the Saudi and Bahrain portal surveys", href: "https://coraly.ai/gppi/markets/bahrain" },
    ],
  },
  {
    slug: "sakani",
    name: "Sakani",
    arabicName: "سكني",
    kind: "official",
    scale: "national",
    grades: ["budget", "mid"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "sakani.sa", href: "https://sakani.sa/" }],
    summary:
      "The government housing program, not a public souq. It is where eligible Saudi households look at supported products, projects, and digital housing services. It will not help a newcomer rent a furnished apartment next week.",
    whoItsFor:
      "Citizens using the housing program. Investors and expats should not start here.",
    howMoneyWorks:
      "A state platform tied to home-ownership policy. It is not an ad business.",
    strengths: [
      "The official door for program products, which private portals only echo.",
      "Arabic and an English presence have both been reported; confirm the language toggle on the live site.",
    ],
    flaws: [
      "People mix it up with ordinary listing sites and then cannot find a normal rental.",
      "Eligibility rules are the product. The site cannot be skimmed like Bayut.",
    ],
    missing:
      "A first screen, in everyday Arabic and English, that says who this is for and sends everyone else to Aqar or Ejar. The confusion is the bug.",
    sources: [
      { label: "Sakani", href: "https://sakani.sa/" },
      { label: "Listed by REGA among licensed platforms", href: "https://rega.gov.sa/en/media-center/news-announcements/rega-licenses-71-electronic-real-estate-platforms/" },
    ],
  },
  {
    slug: "ejar",
    name: "Ejar",
    arabicName: "إيجار",
    kind: "official",
    scale: "national",
    grades: ["budget", "mid", "upper"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "ejar.sa", href: "https://www.ejar.sa/" }],
    summary:
      "The national network for rental contracts. This is where a Saudi lease becomes a real document. It is not where you browse photos. Renters who have been through it tell others: pay through Ejar, not to a number that moved the conversation off the app.",
    whoItsFor:
      "Every tenant and landlord in the Kingdom at the moment of signing. Look at homes on Aqar or Bayut, then land here.",
    howMoneyWorks:
      "A government rental system. Unified contracts, not featured ads.",
    strengths: [
      "The contract standard that makes a verbal deal enforceable.",
      "The practical anti-scam step: if they will not do Ejar, walk away. That advice shows up unprompted on r/Riyadh.",
    ],
    flaws: [
      "It sits apart from the pretty listing, so people fall in love with an ad and only then discover the paperwork.",
      "A first-timer is not told, on the listing, what Ejar will ask for.",
    ],
    missing:
      "The listing and the contract on one timeline: ad, viewing, Ejar, key. The portal and Ejar still feel like two countries.",
    sources: [
      { label: "Ejar", href: "https://www.ejar.sa/" },
      { label: "r/Riyadh payment advice", href: "https://www.reddit.com/r/Riyadh/comments/1mcm3pc/aqar_or_bayut_genuine_ads/" },
    ],
  },
  {
    slug: "rega",
    name: "REGA",
    arabicName: "الهيئة العامة للعقار",
    kind: "official",
    scale: "national",
    grades: ["budget", "mid", "upper", "luxury"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "rega.gov.sa", href: "https://rega.gov.sa/en" }],
    summary:
      "The Real Estate General Authority. It licenses brokers and the electronic platforms themselves, and it issues the advertisement licence (FAL) that a legal Saudi property ad is supposed to carry. REGA has published lists of licensed platforms, including Aqar, Wasalt, Property Finder, and Sakani, and it has said unlicensed platforms face action.",
    whoItsFor:
      "Anyone about to trust an ad. Look up the broker and the advertisement licence before you transfer a riyal.",
    howMoneyWorks:
      "A regulator. The service is the licence check, not a marketplace.",
    strengths: [
      "The licence query is the single most useful “is this ad allowed to exist” button in Saudi Arabia.",
      "Platform licensing raised the floor: a serious portal now has to connect to the authority.",
    ],
    flaws: [
      "The check lives on a government site, while the dream lives on Aqar. Most people never make the jump.",
      "A valid licence can still sit on a stale photo. The authority does not view the apartment for you.",
    ],
    missing:
      "The licence check opened from the ad itself, with the answer written in a sentence: valid, expired, or this person is not allowed to advertise.",
    sources: [
      { label: "REGA", href: "https://rega.gov.sa/en" },
      { label: "REGA: 71 licensed electronic platforms", href: "https://rega.gov.sa/en/media-center/news-announcements/rega-licenses-71-electronic-real-estate-platforms/" },
    ],
  },
  {
    slug: "dld",
    name: "Dubai Land Department",
    arabicName: "دائرة الأراضي والأملاك",
    kind: "official",
    scale: "national",
    grades: ["budget", "mid", "upper", "luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "dubailand.gov.ae", href: "https://dubailand.gov.ae/en/" }],
    summary:
      "The official record for Dubai property. The consumer face is the Dubai REST app and the DLD e-services: title deed, whether a unit is blocked, service charges, and real sale prices. Trakheesi is the permit a Dubai advertisement is supposed to show. Ejari is where the lease is registered. None of that is a shopping site, and all of it decides whether the shopping site was telling the truth.",
    whoItsFor:
      "Every Dubai renter and buyer, after they have a shortlist and before they pay. Abu Dhabi and the other emirates have their own land departments; this one is Dubai.",
    howMoneyWorks:
      "Government services and fees. The 4% registration fee on a Dubai sale is the number buyers argue about: the schedule splits it, and in practice the buyer is often asked for all of it.",
    strengths: [
      "The only price that is not an asking price.",
      "A blocked unit — often unpaid service charges — shows up here. Renters on r/dubai have lost the ability to register Ejari, connect DEWA, or get a parking card because of the owner’s bill.",
      "The permit check takes seconds and costs nothing.",
    ],
    flaws: [
      "It is a second app, in official language, so people treat it as homework and skip it.",
      "Service-charge pain still lands on the tenant even though the bill is the owner’s. The forum threads are full of that.",
    ],
    missing:
      "These facts printed on the Bayut or Property Finder card: last sold price, service charge per square foot, blocked or clear, chiller company, permit status. The data exists. The listing does not show it.",
    sources: [
      { label: "Dubai Land Department", href: "https://dubailand.gov.ae/en/" },
      { label: "r/dubai: unpaid service charges blocked the unit", href: "https://www.reddit.com/r/dubai/comments/10e2xv1/what_are_the_real_cons_of_renting_an_apartment/" },
      { label: "Why a side tool now shows Mollak service charges", href: "https://zamanprop.com/en" },
    ],
  },
  {
    slug: "luxhabitat",
    name: "Luxhabitat",
    kind: "luxury",
    scale: "local",
    grades: ["luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "luxhabitat.ae", href: "https://www.luxhabitat.ae/" }],
    summary:
      "A Dubai portal that only wants the top of the market. Their own listing rules: sales above AED 5 million, rentals above AED 400,000 a year, and photos without watermarks. They say they are a portal, not a brokerage, and that they do not deal with owners directly.",
    whoItsFor:
      "Someone buying or leasing a genuinely expensive Dubai home who is tired of scrolling past studio ads. Not a tool for a normal first apartment.",
    howMoneyWorks:
      "Agencies and developers pay for packages, often via an XML feed from their own software. Placement is selective, which is the point.",
    strengths: [
      "The inventory is edited. That is rare, and it is why the site exists.",
      "Editorial presentation instead of the same five portal badges.",
      "Their site claims 14+ years, a large annual audience, and an average listed value of AED 25 million. Those are company claims.",
    ],
    flaws: [
      "You will not see the rest of the market, including a fair mid-market comparable.",
      "A curated ad can still be stale. The same “is it actually free?” question applies at AED 20 million.",
      "The all-in cost — DLD, agency, service charge on a big villa — is still something you have to ask a human.",
    ],
    missing:
      "The luxury version of the plain card: price per square foot against real DLD sales, service charge, and a date the viewing was last possible. Curation without proof is still a brochure.",
    sources: [
      { label: "Luxhabitat, list with us", href: "https://www.luxhabitat.ae/list-with-us/" },
      { label: "Their note that Houza and JustProperty are no longer active", href: "https://www.luxhabitat.ae/the-journal/best-property-portals-in-dubai/" },
    ],
  },
  {
    slug: "sothebys",
    name: "Dubai Sotheby’s International Realty",
    kind: "luxury",
    scale: "local",
    grades: ["luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "sothebysrealty.ae", href: "https://sothebysrealty.ae/" }],
    summary:
      "A branded brokerage desk for super-prime Dubai homes: Palm villas, Dubai Hills, Al Barari, branded residences. You are hiring an advisor with a global shop window, not searching a public database.",
    whoItsFor:
      "Buyers who already know they want the top slice and who value discretion and a short list. The public portals will not show this firm’s quiet stock.",
    howMoneyWorks:
      "Brokerage. You pay through the normal agency arrangement on a deal. The website is a gallery.",
    strengths: [
      "Homes and a tone that mass portals are bad at.",
      "A path to off-market stock, which is how a lot of the very top actually trades.",
      "Global referral network for buyers who do not live in Dubai.",
    ],
    flaws: [
      "No way to see the wider market, so you cannot tell if the asking price is lonely.",
      "The process is a relationship. There is no self-serve total-cost figure.",
      "Smaller budgets will waste the enquiry.",
    ],
    missing:
      "A private version of the proof card: comparable recorded sales, service charge, and what “off market” actually means for this address. Discretion and clarity can live on the same page.",
    sources: [
      { label: "Dubai Sotheby’s International Realty", href: "https://sothebysrealty.ae/" },
    ],
  },
  {
    slug: "knight-frank",
    name: "Knight Frank UAE",
    kind: "luxury",
    scale: "regional",
    grades: ["upper", "luxury"],
    countries: ["UAE"],
    links: [
      {
        country: "UAE",
        label: "knightfrank.ae",
        href: "https://www.knightfrank.ae/residential/prime-residential",
      },
    ],
    summary:
      "The global advisory firm’s UAE residential desk, aimed at prime and super-prime: Downtown, the Marina, Emirates Hills, the Palm. They also publish research, which is often more useful than their listing count.",
    whoItsFor:
      "Buyers who want an advisor and a research view, including people relocating a family office or a household into a prime district.",
    howMoneyWorks:
      "Professional fees on advice and transactions. This is not a place you post a free ad.",
    strengths: [
      "Named districts and a point of view, instead of an infinite grid.",
      "Research you can read before you ever enquire.",
      "A human who is supposed to say no to the wrong house.",
    ],
    flaws: [
      "The live public stock is a sample, not the market.",
      "Prime advice still will not show you the owner’s unpaid service charge unless someone looks it up on DLD.",
    ],
    missing:
      "Research and the specific unit on one page: their district view, plus this building’s recorded sales and annual charges.",
    sources: [
      { label: "Knight Frank UAE prime residential", href: "https://www.knightfrank.ae/residential/prime-residential" },
    ],
  },
  {
    slug: "betterhomes",
    name: "Betterhomes",
    kind: "brokerage",
    scale: "national",
    grades: ["mid", "upper", "luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "bhomes.com", href: "https://www.bhomes.com/en" }],
    summary:
      "One of the long-running UAE brokerages, on the portals and on its own site. Sales, leasing, off-plan, mortgages, and management. Their site says 40 years in the market and membership of international luxury networks.",
    whoItsFor:
      "Buyers, tenants, and landlords who want a full-service agency rather than a self-serve search. The same homes are usually also on Bayut and Property Finder.",
    howMoneyWorks:
      "Agency commission, plus marketing spend on the big portals. Off-plan commission is often paid by the developer, which is why the buyer is told the introduction is free.",
    strengths: [
      "A known brand with mortgage, conveyancing, and management under one roof.",
      "Covers ordinary apartments through expensive villas, so you are not locked into a luxury-only gallery.",
      "Useful when you want a person after the portals have exhausted you.",
    ],
    flaws: [
      "Their ads on the big portals suffer the same bait-price habits renters describe. The brand on the ad is not proof the price is real.",
      "You are one client among a large sales floor. A boutique desk will claim the opposite problem.",
    ],
    missing:
      "A client page that shows the shortlist with the all-in number and the DLD check already done, so the portal browsing does not start again from zero.",
    sources: [
      { label: "Betterhomes", href: "https://www.bhomes.com/en" },
    ],
  },
  {
    slug: "allsopp",
    name: "Allsopp & Allsopp",
    kind: "brokerage",
    scale: "national",
    grades: ["mid", "upper", "luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "allsoppandallsopp.com", href: "https://www.allsoppandallsopp.com/" }],
    summary:
      "A large independent Dubai agency: sales, leasing, off-plan, management, and mortgages, with a private-office line for very wealthy clients. Their site stated a 4.4 Google rating from 1,742 reviews, RERA office 1815, and trade licence 613873.",
    whoItsFor:
      "People who want a Dubai-grown agency with a wide book, and ultra-luxury clients who want a separate private office.",
    howMoneyWorks:
      "Brokerage commissions and developer referrals. Listings are pushed to the big portals as well as kept on the agency site.",
    strengths: [
      "Scale plus a named ultra-luxury desk, so both markets are explicit.",
      "They publish the RERA office number, which is what you should ask any agency for.",
      "Management and mortgage in-house, which matters after the keys more than before.",
    ],
    flaws: [
      "A big agency site is still a shop window. The truth of a unit is on DLD, not in the brochure copy.",
      "Google stars mix buyers, tenants, and job applicants. Read the recent complaints, not the average.",
    ],
    missing:
      "Each listing stamped with the same RERA honesty they put on the about page: permit, office number, and the fee you will actually be charged.",
    sources: [
      { label: "Allsopp & Allsopp", href: "https://www.allsoppandallsopp.com/" },
    ],
  },
  {
    slug: "emaar",
    name: "Emaar",
    kind: "developer",
    scale: "national",
    grades: ["mid", "upper", "luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "emaar.com", href: "https://www.emaar.com/en" }],
    summary:
      "Dubai’s best-known developer. Buying from the project page is the direct route for their off-plan homes. You see Emaar’s stock only. Guides tell first-time off-plan buyers to start with the developer because the developer usually pays the agent.",
    whoItsFor:
      "Buyers of Emaar projects, from a mid-market apartment to a Downtown or Dubai Hills home. Not a search of the resale market.",
    howMoneyWorks:
      "You buy the unit from the developer on a payment plan. An outside broker, if you use one, is typically paid by Emaar on off-plan.",
    strengths: [
      "You are talking to the party that is building the home.",
      "Payment plans and inventory are first-party, which cuts one layer of “the unit just went”.",
      "Handover, service charges, and snagging still come back to the developer’s community team.",
    ],
    flaws: [
      "A project page is a campaign. The service charge you will pay in year five is rarely the headline.",
      "Resale of the same tower is happening on Bayut at the same time, often at a number the project page ignores.",
      "The plan (on booking, during construction, on handover, after handover) is hard to hold in your head.",
    ],
    missing:
      "One plain schedule: every future payment, the estimated service charge, and what completed units in this tower actually resold for.",
    sources: [
      { label: "Emaar", href: "https://www.emaar.com/en" },
      { label: "Why off-plan buyers are pointed to the developer", href: "https://www.uaeexperthub.com/best-property-portals-uae/" },
    ],
  },
  {
    slug: "aldar",
    name: "Aldar",
    kind: "developer",
    scale: "national",
    grades: ["mid", "upper", "luxury"],
    countries: ["UAE"],
    links: [{ country: "UAE", label: "aldar.com", href: "https://www.aldar.com/en" }],
    summary:
      "Abu Dhabi’s major developer, with communities and projects sold from its own site. Same idea as Emaar: the right place to buy their homes, and the wrong place to see the whole city.",
    whoItsFor:
      "Buyers focused on Aldar communities in Abu Dhabi. Pair it with Property Finder and Bayut for resale, and with Abu Dhabi’s own municipality records for the official check.",
    howMoneyWorks:
      "Developer sales and payment plans. Brokers are an extra door, not the only door.",
    strengths: [
      "First-party stock and a clear community brand.",
      "A sensible starting point if you already know you want an Aldar district.",
    ],
    flaws: [
      "Off-plan pages lead with the render and the first cheque. The ongoing community fee is quieter.",
      "You cannot compare a neighbour’s resale without leaving the site.",
    ],
    missing:
      "The same one-page plan: cheques by date, estimated service charge, and a link to the official sale record once units start trading.",
    sources: [{ label: "Aldar", href: "https://www.aldar.com/en" }],
  },
  {
    slug: "roshn",
    name: "ROSHN",
    arabicName: "روشن",
    kind: "developer",
    scale: "national",
    grades: ["mid", "upper"],
    countries: ["Saudi Arabia"],
    links: [{ country: "Saudi Arabia", label: "roshn.sa", href: "https://www.roshn.sa/" }],
    summary:
      "A large Saudi developer of new communities. The website is the sales office for ROSHN projects. It is not a window onto Riyadh or Jeddah resale — that remains Aqar, Wasalt, and the other portals.",
    whoItsFor:
      "Households buying a new home in a ROSHN community, often alongside the Sakani program if they are eligible.",
    howMoneyWorks:
      "Developer sales. Read the plan and the eligibility rules on the project, then keep the contract path inside official channels.",
    strengths: [
      "New master-planned stock that classifieds only advertise second-hand.",
      "A single seller, so you are not comparing six brokers’ photos of one plot.",
    ],
    flaws: [
      "A master plan is a promise about a neighbourhood that is still being built. Schools, shops, and the real commute arrive later.",
      "The resale price of a similar villa on Aqar is not on this site.",
    ],
    missing:
      "A “life in year three” note next to the render: what is open now, what is still a site, and what comparable homes already cost on the resale market.",
    sources: [{ label: "ROSHN", href: "https://www.roshn.sa/" }],
  },
  {
    slug: "qatar-living",
    name: "Qatar Living",
    kind: "classifieds",
    scale: "national",
    grades: ["budget", "mid"],
    countries: ["Qatar"],
    links: [{ country: "Qatar", label: "qatarliving.com", href: "https://www.qatarliving.com/" }],
    summary:
      "Doha’s long-standing expat board: property, jobs, cars, and a forum. Google Play showed roughly 3.4 stars from about 3,000 reviews. Everyone in Qatar has used it. Few people describe the current app with any fondness.",
    whoItsFor:
      "Renters who want the local classifieds feed and the comment threads under it, especially for a cheaper or furnished flat.",
    howMoneyWorks:
      "Paid ads for property. A r/qatar comment in January 2024 put a property ad at about 200 QAR for a week or 500 QAR for a month. That is one user’s figure from that date, not a current price list. Confirm on the site.",
    strengths: [
      "The forum next to the ads. Complaints about buildings, landlords, and areas sit in the same brand.",
      "Still where a lot of ordinary rentals are shouted about.",
    ],
    flaws: [
      "Play reviews through 2026 say the filters do not work, the app crashes, pop-up ads get stuck, and a phone number can be trapped on an old profile.",
      "On r/qatar the site is the example people use when they say classifieds in Qatar feel stuck in an old decade.",
      "You pay to list a home, and the search still fights you. That is a bad trade.",
    ],
    missing:
      "Filters that actually filter, a map, and a listing date that means the home is free. The forum already knows which buildings are a problem. The ad does not.",
    sources: [
      { label: "Qatar Living", href: "https://www.qatarliving.com/" },
      { label: "Google Play reviews", href: "https://play.google.com/store/apps/details?id=com.qatarliving.classifieds&hl=en" },
      { label: "r/qatar on Qatar Living and Mzad", href: "https://www.reddit.com/r/qatar/comments/19crdno/existing_classifieds_websites_are_so_bad_i_want/" },
    ],
  },
  {
    slug: "saakin",
    name: "Saakin",
    kind: "portal",
    scale: "local",
    grades: ["budget", "mid", "upper"],
    countries: ["Qatar"],
    links: [{ country: "Qatar", label: "saakin.qa", href: "https://www.saakin.qa/" }],
    summary:
      "A Qatar property directory: apartments, villas, land, and commercial, posted by agencies, with price, size, and a “last updated” line. They also offer an AI search box and say a team checks listings. Trustpilot’s page for them is short and reads mostly like agency testimonials, so treat the “fastest-growing” line as their marketing.",
    whoItsFor:
      "Doha renters and buyers who want a cleaner property-only site than Qatar Living or Mzad, beside Property Finder rather than instead of it.",
    howMoneyWorks:
      "Agencies list and take the lead. Saakin is a directory and a small CRM for those agencies.",
    strengths: [
      "Property only, with area, beds, furnishing, and an updated date on the card.",
      "English, and written guides for people who just arrived.",
      "Small enough that a serious agency might answer.",
    ],
    flaws: [
      "Public independent reviews are thin. The visible praise is largely from advertisers.",
      "“Verified” needs a definition you can see: visited, or merely a filled-in form?",
      "A young directory’s inventory will have holes. If it is not here, it may still be on Property Finder.",
    ],
    missing:
      "A public definition of verified, and the all-in Doha number people actually negotiate: rent, commission, deposit, and whether bills are inside the price.",
    sources: [
      { label: "Saakin", href: "https://www.saakin.qa/" },
      { label: "Trustpilot", href: "https://www.trustpilot.com/review/saakin.qa" },
    ],
  },
  {
    slug: "bunyan",
    name: "Bunyan",
    arabicName: "بنيان",
    kind: "portal",
    scale: "local",
    grades: ["budget", "mid", "upper"],
    countries: ["Qatar"],
    links: [{ country: "Qatar", label: "bunyan.com.qa", href: "https://www.bunyan.com.qa/" }],
    summary:
      "A smaller Qatar property marketplace that calls itself a full board for sale and rent. When a public copy of the homepage was read for this desk, many cards were dated three and four years earlier. That is the fact to remember.",
    whoItsFor:
      "A secondary look at Doha agency stock, if you are already searching Property Finder and Saakin. Do not make it the only tab.",
    howMoneyWorks:
      "Agency listings and premium banners. The site also carries home-services ads, so it behaves a bit like a directory.",
    strengths: [
      "Another local URL agencies still appear on.",
      "Area browsing for Lusail, Wakrah, and central Doha.",
    ],
    flaws: [
      "Stale dates on the homepage are a direct warning. A four-year-old “premium” ad is not a home.",
      "Small site, thin public review trail, so you cannot lean on crowd corrections.",
    ],
    missing:
      "An automatic expiry. If the agent has not confirmed the home this month, the card should leave the homepage.",
    sources: [{ label: "Bunyan Qatar", href: "https://www.bunyan.com.qa/" }],
  },
  {
    slug: "mzad-qatar",
    name: "Mzad Qatar",
    arabicName: "مزاد قطر",
    kind: "classifieds",
    scale: "national",
    grades: ["budget", "mid"],
    countries: ["Qatar"],
    links: [{ country: "Qatar", label: "mzadqatar.com", href: "https://mzadqatar.com/" }],
    summary:
      "The big Qatar buy-and-sell app, with auctions as well as ads. Property is one category inside a general market. On r/qatar, people who want a modern classifieds site name Mzad and Qatar Living as the two that frustrate them.",
    whoItsFor:
      "Bargain hunters and anyone already in the app for cars and furniture who might as well look at rooms and flats.",
    howMoneyWorks:
      "Mostly free consumer ads, plus auction fees and promoted placement. The company says there is no commission on ordinary deals.",
    strengths: [
      "A huge local audience and Arabic/English.",
      "Direct chat or a phone call, without an agency in the middle.",
    ],
    flaws: [
      "Search is the complaint: slow, and padded with ads that do not match the words you typed. That is from r/qatar and from App Store reviews.",
      "App Store reviews also fault customer service. Separate car-auction reviews say a winning bid is not always a sale and the reserve is hidden. Do not assume a property offer behaves better until you have asked.",
      "A renter said you cannot post a property ad for free on the main Qatar boards. Confirm the current property fee in the app.",
    ],
    missing:
      "Search that returns the thing you named, and a property form that requires a date, a map pin, and a real photo before the ad can go up.",
    sources: [
      { label: "Mzad Qatar", href: "https://mzadqatar.com/" },
      { label: "App Store", href: "https://apps.apple.com/us/app/mzad-qatar-%D9%85%D8%B2%D8%A7%D8%AF-%D9%82%D8%B7%D8%B1/id680268461" },
      { label: "r/qatar", href: "https://www.reddit.com/r/qatar/comments/19crdno/existing_classifieds_websites_are_so_bad_i_want/" },
    ],
  },
  {
    slug: "4sale",
    name: "4Sale",
    arabicName: "فور سيل",
    kind: "classifieds",
    scale: "national",
    grades: ["budget", "mid", "upper"],
    countries: ["Kuwait"],
    links: [{ country: "Kuwait", label: "q84sale.com", href: "https://www.q84sale.com/en/property" }],
    summary:
      "Kuwait’s main classifieds app, and the property section most residents will open. The company says the property area draws a very large audience and tens of thousands of listings: villas, apartments, chalets, land, and shops, including exchange deals. 4Sale Realty is their tighter service, with 3D tours and measured floor plans.",
    whoItsFor:
      "Almost everyone renting or buying in Kuwait, from a furnished apartment to a house. Start here, then use a specialist if the feed is too noisy.",
    howMoneyWorks:
      "Paid ads and add-ons so a listing is seen. Realty is a paid, more documented path.",
    strengths: [
      "The audience is already here. A home that is only on a small portal may be invisible.",
      "Arabic and English, and coverage across the governorates.",
      "Realty’s 3D tour is an honest answer to “the photos are not the house”.",
    ],
    flaws: [
      "A general classifieds feed will include old ads, agent spam, and thin descriptions. That is why they built a separate Realty tier.",
      "The all-in cost and the PACI address are not treated as the heart of the ordinary ad.",
      "Exchange listings and international ads add noise when all you want is a flat in Hawally.",
    ],
    missing:
      "Make the Realty proof — a current tour, a measured plan, a PACI pin — the default for property, not an upgrade. The ordinary ad is where people get tired.",
    sources: [
      { label: "4Sale property", href: "https://www.q84sale.com/en/property" },
      { label: "Kuwait portal landscape", href: "https://coraly.ai/gppi/markets/kuwait" },
    ],
  },
  {
    slug: "dallal",
    name: "Dallal",
    arabicName: "دلال",
    kind: "portal",
    scale: "local",
    grades: ["mid", "upper"],
    countries: ["Kuwait"],
    links: [{ country: "Kuwait", label: "dallal.com.kw", href: "https://dallal.com.kw/" }],
    summary:
      "A newer Kuwait marketplace whose whole pitch is the classifieds headache: checked listings, search by PACI (the national address), filters, a comparison view, and chat that stays in the app. The App Store listing sells subscriptions for sellers — starter, pro, and a high “elite” tier.",
    whoItsFor:
      "Buyers and renters who want a quieter Kuwait search than 4Sale, and owners willing to pay to be presented properly.",
    howMoneyWorks:
      "The App Store text says premium placement, sponsored ads, advanced filters, and unlimited comparisons sit behind a subscription. Confirm the live prices in the app; they were listed in US dollars there.",
    strengths: [
      "PACI search matters in Kuwait. A building address that is real is half the battle.",
      "Compare and in-app chat are exactly what people say is missing when they are juggling WhatsApp threads.",
      "Verification is the brand, not an afterthought.",
    ],
    flaws: [
      "New, and smaller than 4Sale. The best mandate in the country may never be on it.",
      "This pass did not find a deep pile of independent renter reviews. The feature list is the company’s.",
      "Paid insight features can hide the useful filters from the person who most needs them.",
    ],
    missing:
      "Proof, in public, that “verified” means a visit this month. If Dallal shows that date on every card, it has the opening 4Sale’s free-form feed leaves.",
    sources: [
      { label: "Dallal", href: "https://dallal.com.kw/" },
      { label: "App Store listing, including the paid tiers", href: "https://apps.apple.com/tm/app/dallal-%D8%AF%D9%84-%D8%A7%D9%84/id6747333029" },
    ],
  },
  {
    slug: "sakan",
    name: "Sakan",
    arabicName: "سكن",
    kind: "portal",
    scale: "regional",
    grades: ["mid", "upper"],
    countries: ["Kuwait", "Saudi Arabia"],
    links: [
      { country: "Kuwait", label: "sakan.co", href: "https://sakan.co/" },
      { country: "Saudi Arabia", label: "sakan.co", href: "https://sakan.co/" },
    ],
    summary:
      "A Kuwait-founded property platform with offices in Kuwait and in Saudi Arabia (Riyadh, Jeddah, Khobar). The Arabic site presents listings plus market statistics, property management, a broker network, and advisory services. It is a company with a product, not a pure noticeboard.",
    whoItsFor:
      "Buyers and landlords who want a managed service around the listing, especially in Kuwait, with a Saudi footprint if the home is there.",
    howMoneyWorks:
      "Listings, affiliate marketing, management, and broker services. The commercial menu is wider than “pay to bump an ad”.",
    strengths: [
      "Market stats next to homes, which pure classifieds never bother with.",
      "A named company with a Kuwait office address and a phone on the contact page.",
      "Covers both sides: find a home, or have them run one you own.",
    ],
    flaws: [
      "The English surface is thinner than the Arabic one.",
      "A services company can be opaque about which homes are exclusive and which are just ads.",
      "Independent renter write-ups are scarce in the English forums checked for this desk.",
    ],
    missing:
      "The statistics they already talk about, stuck to each listing: what this block rented for, not what the advertiser hopes.",
    sources: [
      { label: "Sakan", href: "https://sakan.co/" },
      { label: "Contact page, Kuwait and Saudi offices", href: "https://sakan.co/en/contact" },
      { label: "Kuwait portal landscape", href: "https://coraly.ai/gppi/markets/kuwait" },
    ],
  },
  {
    slug: "homes-bahrain",
    name: "Homes Bahrain",
    kind: "portal",
    scale: "local",
    grades: ["budget", "mid", "upper"],
    countries: ["Bahrain"],
    links: [{ country: "Bahrain", label: "homesbahrain.com", href: "https://homesbahrain.com/" }],
    summary:
      "A small Bahrain search site: apartments and villas for rent and sale, posted under agency names, with beds, size, and a price in dinars. Juffair, Amwaj, Janabiya, and Saar show up the way residents actually search.",
    whoItsFor:
      "Someone who wants a local board after Property Finder and Bayut, or an agency that wants another window.",
    howMoneyWorks:
      "Agency listings. The site publishes a Bahrain phone and an email, so there is a person behind it.",
    strengths: [
      "Local areas in the language of a Bahrain search.",
      "Small enough to be a direct conversation.",
    ],
    flaws: [
      "Thin inventory next to Property Finder. A quiet site can also be a stale site.",
      "No public review culture to warn you off a bad ad.",
      "You still have to do the RERA / title homework yourself.",
    ],
    missing:
      "A last-confirmed date and the agency’s licence on the card. On a small site, trust is the only advantage worth building.",
    sources: [{ label: "Homes Bahrain", href: "https://homesbahrain.com/" }],
  },
  {
    slug: "find-bahrain",
    name: "Find Bahrain",
    kind: "portal",
    scale: "local",
    grades: ["budget", "mid", "upper"],
    countries: ["Bahrain"],
    links: [{ country: "Bahrain", label: "findbahrain.com", href: "https://findbahrain.com/" }],
    summary:
      "A smaller Bahrain property site. The homepage presents itself as a place to find a home in the country. It does not have the inventory or the public paper trail of Property Finder or Bayut, so treat it as an extra pair of eyes.",
    whoItsFor:
      "Local renters and buyers doing a sweep of Bahrain-only sites, and agencies posting where the big portals are expensive.",
    howMoneyWorks:
      "A local listing site. Confirm fees and who posts before you rely on an ad.",
    strengths: [
      "Another local door, which sometimes holds a home the regional sites are slow to show.",
    ],
    flaws: [
      "Little independent commentary. You cannot tell freshness from the brand name.",
      "Easy to over-trust a clean template. The ad still needs a viewing and a licence check.",
    ],
    missing:
      "The same three lines every small Gulf board is missing: who is allowed to advertise this, when they last confirmed it, and what you pay besides the headline.",
    sources: [
      { label: "Find Bahrain", href: "https://findbahrain.com/" },
      { label: "Bahrain portal landscape", href: "https://coraly.ai/gppi/markets/bahrain" },
    ],
  },
  {
    slug: "weetas",
    name: "Weetas",
    kind: "brokerage",
    scale: "local",
    grades: ["mid", "upper"],
    countries: ["Bahrain"],
    links: [{ country: "Bahrain", label: "weetas.com", href: "https://www.weetas.com/" }],
    summary:
      "A Bahrain real-estate company site, used for expat-oriented rentals and sales and for area guides. Their homepage markets them as a leading Bahrain firm. That is their claim. The market’s widest boards remain Property Finder and Bayut.",
    whoItsFor:
      "Expats who want a Bahrain firm to talk to, especially if they would rather have an agent than keep scrolling.",
    howMoneyWorks:
      "A brokerage. You enquire, they work a shortlist, and a fee applies on the deal as agreed.",
    strengths: [
      "Neighbourhood content, which helps a new arrival more than another infinite grid.",
      "A named company rather than an anonymous classified.",
    ],
    flaws: [
      "A company site shows the homes they want to talk about.",
      "You should still see the same areas on a portal before you decide the shortlist is complete.",
    ],
    missing:
      "A written shortlist that includes homes they do not list, with the fee and the licence on the first page of the pack.",
    sources: [
      { label: "Weetas", href: "https://www.weetas.com/" },
      { label: "Bahrain portal landscape", href: "https://coraly.ai/gppi/markets/bahrain" },
    ],
  },
  {
    slug: "mawa",
    name: "Mawa",
    arabicName: "مأوى",
    kind: "portal",
    scale: "national",
    grades: ["budget", "mid", "upper"],
    countries: ["Oman"],
    links: [{ country: "Oman", label: "mawa.om", href: "https://www.mawa.om/en" }],
    summary:
      "An Omani property-only portal, run by Higher Horizon Information Technology LLC. It is built for agencies, developers, owners, and brokers to post homes, and for people to search them. The about page is explicit that this is not a general classifieds site.",
    whoItsFor:
      "Anyone looking in Muscat and the rest of Oman who wants property without the car ads, from an apartment in Mawaleh to a villa in Al Mouj.",
    howMoneyWorks:
      "Professionals pay to list and to be found. Buyers and tenants browse and contact the agent they choose.",
    strengths: [
      "Property only, which already beats a horizontal classifieds feed for focus.",
      "English and Arabic, and a local company rather than a thin overseas landing page.",
      "Agency dashboards, so a serious broker has a reason to keep ads current.",
    ],
    flaws: [
      "“Leading” is their word. Bayut, dubizzle, and OpenSooq also carry Oman inventory, so search those too.",
      "Foreign buyers still need to know whether a building is in an Integrated Tourism Complex. The portal should say that in the first line.",
      "Public complaint threads in English are thin, so freshness is something you test, not something you can read about.",
    ],
    missing:
      "A badge on every card: foreign ownership eligible or not, last confirmed date, and the fee the agent will ask. Those three lines are the whole Omani search for a newcomer.",
    sources: [
      { label: "Mawa", href: "https://www.mawa.om/en" },
      { label: "Mawa about page", href: "https://www.mawa.om/en/about-us" },
      { label: "Oman portal landscape", href: "https://coraly.ai/gppi/markets/oman" },
    ],
  },
  {
    slug: "oman-real",
    name: "Oman Real",
    kind: "portal",
    scale: "local",
    grades: ["budget", "mid", "upper"],
    countries: ["Oman"],
    links: [{ country: "Oman", label: "omanreal.com", href: "https://omanreal.com/" }],
    summary:
      "A small Muscat-built portal whose distinguishing idea is the map: see homes on a map, compare what is nearby, and post your own ad. The site is bilingual and the footer runs 2015–2026. A phone number is published for chat.",
    whoItsFor:
      "Renters and buyers who think in locations — Qurum, Al Mouj, a specific road — and owners who want to post without joining a large agency.",
    howMoneyWorks:
      "A technical company selling exposure. Individuals can post. It is closer to a map board than to a full agency.",
    strengths: [
      "Map first. In a city of similar beige listings, the pin is the useful part.",
      "Long-running and local, with Arabic and English.",
      "You can post, which the agency-only portals often refuse.",
    ],
    flaws: [
      "A map pin can still be approximate, and an old ad looks the same as a new one until you open it.",
      "Small audience next to Bayut and OpenSooq. Posting here alone will not find the tenant.",
    ],
    missing:
      "The map they already believe in, with two extra layers: “confirmed this month” and “ownership open to non-citizens”.",
    sources: [
      { label: "Oman Real", href: "https://omanreal.com/" },
      { label: "Oman portal landscape", href: "https://coraly.ai/gppi/markets/oman" },
    ],
  },
  {
    slug: "savills-oman",
    name: "Savills Oman",
    kind: "luxury",
    scale: "local",
    grades: ["upper", "luxury"],
    countries: ["Oman"],
    links: [{ country: "Oman", label: "savills.om", href: "https://www.savills.om/" }],
    summary:
      "The international firm’s Oman desk: prime residential and commercial, plus research notes on Muscat rents. This is how you look at Al Mouj and the other Integrated Tourism Complexes with an advisor, not how you find a budget flat in Ruwi.",
    whoItsFor:
      "Higher-budget buyers and tenants, including people who need a clear foreign-ownership path, and anyone who wants a written view of the Muscat market.",
    howMoneyWorks:
      "Advisory and brokerage fees. Research is the public part; the best stock is a conversation.",
    strengths: [
      "Prime focus and published benchmarks, which the classifieds do not have.",
      "A firm that already speaks to overseas buyers.",
    ],
    flaws: [
      "You will not see the ordinary market.",
      "A research PDF and a specific villa are still two documents. The fee, the service charge, and the eligibility should be on the villa.",
    ],
    missing:
      "Eligibility and the all-in cost on the property page, written for a buyer who has never heard the phrase “Integrated Tourism Complex”.",
    sources: [
      { label: "Savills Oman", href: "https://www.savills.om/" },
      { label: "Oman portal landscape", href: "https://coraly.ai/gppi/markets/oman" },
    ],
  },
];

export const retiredNames: { name: string; note: string }[] = [
  {
    name: "Houza",
    note: "Still appears in old Dubai round-ups. Guides in 2026 say the portal is no longer active.",
  },
  {
    name: "JustProperty",
    note: "Same story. Searching the name wastes an evening. Use Property Finder, Bayut, or dubizzle.",
  },
  {
    name: "Bahrain Property World",
    note: "A local board Property Finder acquired. Look on propertyfinder.bh, not for the old brand.",
  },
];

export const hazards: { name: string; domain: string; note: string }[] = [
  {
    name: "Estate Hub Oman",
    domain: "estatehuboman.com",
    note: "Portal surveys still list this domain. On 3 November 2026 the homepage was a defacement (“Hacked by ./KeyzNet”) with an autoplay prompt. Do not log in, do not post an ad, and do not treat it as a property site until the real operator has it back.",
  },
];

export type StartHere = {
  title: string;
  detail: string;
  slugs: string[];
};

export const startHere: StartHere[] = [
  {
    title: "A normal rental in Dubai",
    detail: "Open Bayut and dubizzle, then Property Finder. Before you pay, check the permit and whether the unit is blocked.",
    slugs: ["bayut", "dubizzle", "property-finder", "dld"],
  },
  {
    title: "Buying in Dubai",
    detail: "The two big portals, then the Land Department for the real sale price and the transfer fees. Off-plan is cleaner from the developer.",
    slugs: ["property-finder", "bayut", "dld", "emaar"],
  },
  {
    title: "A high-end Dubai home",
    detail: "Use a curated desk, and still run the address through the Land Department. Quiet stock never hits the public grid.",
    slugs: ["luxhabitat", "sothebys", "knight-frank", "dld"],
  },
  {
    title: "Everyday Saudi rent or buy",
    detail: "Aqar first. Wasalt and Haraj next. Sign and pay on Ejar. Look up the ad licence at REGA. Sakani is only for the housing program.",
    slugs: ["aqar", "wasalt", "haraj", "ejar", "rega"],
  },
  {
    title: "Finding a home in Qatar",
    detail: "Property Finder for agency stock, Saakin as the local directory, Qatar Living if you can tolerate the app. Skip ads with old dates.",
    slugs: ["property-finder", "saakin", "qatar-living", "mzad-qatar"],
  },
  {
    title: "Finding a home in Kuwait",
    detail: "4Sale has the crowd. Dallal is the quieter verified pitch. Sakan and Bayut are the other serious doors.",
    slugs: ["4sale", "dallal", "sakan", "bayut"],
  },
  {
    title: "Finding a home in Bahrain",
    detail: "Property Finder and Bayut hold the market. dubizzle, Homes Bahrain, and Find Bahrain are the extra sweep.",
    slugs: ["property-finder", "bayut", "dubizzle", "homes-bahrain"],
  },
  {
    title: "Finding a home in Oman",
    detail: "Mawa and Bayut for property-only search, Oman Real if you think in maps, dubizzle and OpenSooq for classifieds, Savills when the budget is prime.",
    slugs: ["mawa", "bayut", "oman-real", "dubizzle", "savills-oman"],
  },
];

export function getMarketplace(slug: string) {
  return marketplaces.find((item) => item.slug === slug);
}

export function gradeSentence(gradesOn: Grade[]) {
  return gradesOn.map((grade) => gradeLabel[grade]).join(" · ");
}
