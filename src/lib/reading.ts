import type { Source } from "./desk";

export type Gap = {
  slug: string;
  title: string;
  whoFeelsIt: string;
  problem: string;
  change: string;
  closest: string;
  sources: Source[];
};

export const gaps: Gap[] = [
  {
    slug: "still-there",
    title: "Say whether the home is still free",
    whoFeelsIt: "Anyone who has called five ads and been offered a different apartment.",
    problem:
      "The card stays up after the home is rented or sold, because the call is what the portal gets paid for. Agents on r/dubairealestate have said as much. Trustpilot reviews of Bayut and Property Finder describe the same loop, including ads that remain after a report.",
    change:
      "The ad expires unless someone confirms it this week. A report of “already gone” takes it down in public, with the reason left on the card. One confirmation beats another badge.",
    closest:
      "Bayut’s TruCheck means someone visited. Property Finder’s verified badge checks a permit. Saakin shows an updated date. None of these is the same as “free today, at this price”.",
    sources: [
      { label: "r/dubairealestate", href: "https://www.reddit.com/r/dubairealestate/comments/1lk2y7x/false_property_listings_on_property_finder/" },
      { label: "Trustpilot, Bayut", href: "https://www.trustpilot.com/review/bayut.com" },
      { label: "Trustpilot, Property Finder", href: "https://www.trustpilot.com/review/www.propertyfinder.ae" },
    ],
  },
  {
    slug: "one-home",
    title: "Show one home, not six ads",
    whoFeelsIt: "Buyers who find the same tower listed by seven agencies at seven prices.",
    problem:
      "A Dubai apartment can be on Bayut and Property Finder under several offices, and still be there two months after it sold. The r/dubai thread about the two portals is full of that. You cannot tell the real price from the grid.",
    change:
      "Group every ad that shares a permit or a unit number. Show the price range, the newest photo, and which agency answered last. The other five cards can disappear.",
    closest:
      "The permit number is already on many Dubai ads. The portals display it and then let the duplicates pile up beside it.",
    sources: [
      { label: "r/dubai", href: "https://www.reddit.com/r/dubai/comments/1jh96i1/are_bayut_and_propertyfinder_reliable_or_just/" },
    ],
  },
  {
    slug: "real-price",
    title: "Print the amount you will actually pay",
    whoFeelsIt: "Renters counting cheques, and buyers who thought the advertised price was the price.",
    problem:
      "The headline leaves out the agency fee, the deposit, the chiller, the housing fee, and — on a Dubai purchase — the land-department fee and the trustee. An App Store review asked Property Finder for that total. Their team pointed at a “See upfront costs” button on the website and said the app would follow. People still write that the number on the phone is higher.",
    change:
      "One total on the card, with the lines open underneath: rent or price, agency, deposit, government fees, and what is not included (chiller, DEWA, service charge). A toggle for “1 cheque” versus “4 cheques”, because that changes the cash you need on day one.",
    closest:
      "Property Finder’s web breakdown is the nearest thing. It is easy to miss, and it does not stop an agent from quoting a different rent.",
    sources: [
      { label: "Property Finder App Store reviews", href: "https://apps.apple.com/ae/app/property-finder-real-estate/id897540233?see-all=reviews" },
      { label: "r/dubairealestate on prices that move", href: "https://www.reddit.com/r/dubairealestate/comments/1ujm17z/wrong_advertised_prices_and_shady_agents/" },
    ],
  },
  {
    slug: "building-blocks",
    title: "Warn me if the building will not let me in",
    whoFeelsIt: "Tenants who paid rent and then could not register the contract, connect power, or open the parking gate.",
    problem:
      "In Dubai the service charge is the owner’s bill. If it is unpaid, the unit can be blocked. r/dubai and the ExpatWoman forum both describe tenants stuck: no Ejari, no DEWA, no access card, even after the rent was paid. Chiller bills (Empower, Emicool, and others) are a separate surprise. Pet rules and short-let rules are wrong on a lot of ads because the agent typed them.",
    change:
      "On the card, from the official record: service charge per year, whether the unit is blocked, who bills the cooling, and the house rules that actually get enforced. A side tool such as ZamanProp exists only because the portals leave this off.",
    closest:
      "Dubai REST and the Land Department already store it. ZamanProp, Diyarat, and TryBeforeDubai are outside attempts to put it in human language.",
    sources: [
      { label: "r/dubai on a blocked apartment", href: "https://www.reddit.com/r/dubai/comments/10e2xv1/what_are_the_real_cons_of_renting_an_apartment/" },
      { label: "ExpatWoman forum", href: "https://www.expatwoman.com/dubai/forum/dubai-northern-emirates/emaar-not-issuing-key-card-landlord-not-paid-service-charge" },
      { label: "ZamanProp on service charges", href: "https://zamanprop.com/en" },
      { label: "Diyarat on asking price versus recorded sales", href: "https://diyarat.ae/" },
    ],
  },
  {
    slug: "this-room",
    title: "Show this room, with a date",
    whoFeelsIt: "People who arrive to a tired flat after saving photos of a styled one.",
    problem:
      "Aqar reviews complain of missing photos, repeated photos, and a picture that cannot be the villa described. Dubai renters say the same of portal ads. 4Sale built an entire Realty tier with 3D tours because the ordinary Kuwait ad does not prove the house.",
    change:
      "A photo is tied to the unit and dated. Stock images and another apartment’s living room cannot be the cover. A short tour beats ten borrowed angles.",
    closest:
      "4Sale Realty’s measured tour, Bayut’s TruCheck visit, and Luxhabitat’s ban on watermarked photos. The mass of ads on Aqar, Haraj, OpenSooq, and Qatar Living are still unmarked.",
    sources: [
      { label: "Aqar review themes", href: "https://mwm.ai/apps/aqar-saudi-real-estate/879992882" },
      { label: "4Sale Realty", href: "https://www.q84sale.com/en/property" },
    ],
  },
  {
    slug: "daily-life",
    title: "Let me search the way the week actually works",
    whoFeelsIt: "Families, single renters, and anyone with a school run or an 8am desk.",
    problem:
      "The filters are beds, baths, and a price. Life in these cities turns on other facts: families only or singles only, chiller included, parking, pets, how many cheques, bills in the rent, a closed kitchen, a PACI or CPR address, the school, the Friday traffic. Property Finder users have asked for chiller and parking as real filters. Aqar users have asked for a map that opens in a normal navigation app, and for English. Qatar Living’s filters are reported broken. Mzad’s search is reported padded with the wrong ads.",
    change:
      "Those facts become filters with teeth, plus one life line: minutes to your work and to a named school at the hour you drive. TryBeforeDubai ranks areas on the school run because the portals will not.",
    closest:
      "Dallal’s PACI search and comparison view are the right idea for Kuwait. Aqar’s neighbourhood prices help in Saudi. Nobody has put the school run on the listing.",
    sources: [
      { label: "Property Finder reviews asking for better filters", href: "https://apps.apple.com/ae/app/property-finder-real-estate/id897540233?see-all=reviews" },
      { label: "Aqar Play reviews on maps and English", href: "https://play.google.com/store/apps/details?hl=en&id=fm.aqar" },
      { label: "TryBeforeDubai", href: "https://trybeforedubai.com/" },
      { label: "Qatar Living filters", href: "https://play.google.com/store/apps/details?id=com.qatarliving.classifieds&hl=en" },
    ],
  },
  {
    slug: "who-decides",
    title: "Let me reach the person who can say yes",
    whoFeelsIt: "Buyers who can see the home and cannot find the owner, and renters passed from agent to agent.",
    problem:
      "An Aqar reviewer said the app now sends you to a marketer, and the owner is out of reach. dubizzle is one of the few UAE places an owner can post, but a new account is treated as an agent until support changes it. WhatsApp threads then leave the site, and so does any record of what was promised.",
    change:
      "A checked label: owner, or licensed broker, with the licence visible. Messages stay on the record. The person who can accept an offer is named before you drive over.",
    closest:
      "Ejar and REGA are the Saudi backstop. Dallal’s in-app chat is a small version of “keep the conversation in one place”. The big portals still optimise for a phone call.",
    sources: [
      { label: "Aqar reviews on marketers", href: "https://mwm.ai/apps/aqar-saudi-real-estate/879992882" },
      { label: "How dubizzle treats a new account", href: "https://listandlist.com/en/guides/best-property-websites-in-dubai" },
      { label: "Dallal’s chat pitch", href: "https://dallal.com.kw/" },
    ],
  },
  {
    slug: "report-closes",
    title: "Make a report do something I can see",
    whoFeelsIt: "People who spent longer reporting fakes than viewing homes.",
    problem:
      "Bayut reviewers describe reports that sit for a week, then a request for the same screenshots again, while the ad stays live. Property Finder reviews describe the same silence after a scam that started on the site. When reporting feels useless, the bad ads set the culture.",
    change:
      "A public status on the report: received, ad paused, ad removed, or ad stood up because the agent proved it. Repeat offenders lose the right to post. The authority licence (Trakheesi, REGA) is part of that loop, not a logo in the footer.",
    closest:
      "Both big UAE portals say they review reports. The public writing says the loop does not close. REGA’s licence check is the Saudi piece that could be wired in.",
    sources: [
      { label: "Trustpilot, Bayut", href: "https://www.trustpilot.com/review/bayut.com" },
      { label: "Trustpilot, Property Finder", href: "https://www.trustpilot.com/review/www.propertyfinder.ae" },
      { label: "REGA licence announcement", href: "https://rega.gov.sa/en/media-center/news-announcements/rega-licenses-71-electronic-real-estate-platforms/" },
    ],
  },
];

export type Forum = {
  name: string;
  href: string;
  where: string;
  readFor: string;
};

export const forums: Forum[] = [
  {
    name: "r/dubai",
    href: "https://www.reddit.com/r/dubai/",
    where: "UAE",
    readFor:
      "The ordinary renter’s file: bait ads, service charges, blocked units, cheque games, and which buildings people regret.",
  },
  {
    name: "r/dubairealestate",
    href: "https://www.reddit.com/r/dubairealestate/",
    where: "UAE",
    readFor:
      "Agents and buyers arguing in public about fake prices and dead listings. Useful because the agents sometimes admit the tactic.",
  },
  {
    name: "r/abudhabi",
    href: "https://www.reddit.com/r/abudhabi/",
    where: "UAE",
    readFor:
      "The Abu Dhabi version of the same housing threads. The Dubai portals cover this city, and the local habits are not identical.",
  },
  {
    name: "r/Riyadh",
    href: "https://www.reddit.com/r/Riyadh/",
    where: "Saudi Arabia",
    readFor:
      "Aqar versus Bayut, what a pretty cheap ad usually means, and the practical rule: see the home, read the papers, pay through Ejar.",
  },
  {
    name: "r/saudiarabia",
    href: "https://www.reddit.com/r/saudiarabia/",
    where: "Saudi Arabia",
    readFor:
      "Wider Kingdom threads on rent, compounds, and which apps people actually open outside Riyadh.",
  },
  {
    name: "r/qatar",
    href: "https://www.reddit.com/r/qatar/",
    where: "Qatar",
    readFor:
      "The blunt reviews of Qatar Living and Mzad, plus neighbourhood advice the portals never write.",
  },
  {
    name: "r/Kuwait",
    href: "https://www.reddit.com/r/Kuwait/",
    where: "Kuwait",
    readFor:
      "Which areas and which apps residents mention when a newcomer asks where to live. 4Sale comes up because that is where the ads are.",
  },
  {
    name: "r/Bahrain",
    href: "https://www.reddit.com/r/Bahrain/",
    where: "Bahrain",
    readFor:
      "Expat housing threads for Juffair, Amwaj, Saar, and the gap between a portal price and a landlord’s price.",
  },
  {
    name: "r/Oman",
    href: "https://www.reddit.com/r/Oman/",
    where: "Oman",
    readFor:
      "Muscat neighbourhoods, compounds, and the ownership question newcomers ask before they fall for a listing.",
  },
  {
    name: "Trustpilot — Property Finder",
    href: "https://www.trustpilot.com/review/www.propertyfinder.ae",
    where: "UAE",
    readFor:
      "Long, angry, specific stories: a scam that started on a listing, a report that went nowhere, a price that was bait.",
  },
  {
    name: "Trustpilot — Bayut",
    href: "https://www.trustpilot.com/review/bayut.com",
    where: "UAE",
    readFor:
      "The same stories under the other logo. Read both before you decide one portal is the careful one.",
  },
  {
    name: "Trustpilot — Saakin",
    href: "https://www.trustpilot.com/review/saakin.qa",
    where: "Qatar",
    readFor:
      "A short page. Several reviews read like agencies praising a lead source. Weight them accordingly.",
  },
  {
    name: "ExpatWoman Dubai forum",
    href: "https://www.expatwoman.com/dubai/forum",
    where: "UAE",
    readFor:
      "Older, detailed threads on landlords, access cards, and service charges. The dates matter. The building habits often have not changed.",
  },
  {
    name: "British Expats — Sandpit",
    href: "https://britishexpats.com/forum/sand-pit-116/",
    where: "Gulf",
    readFor:
      "A long-running Gulf forum. Search the housing threads. Some posts are years old; use them as warnings about patterns, then check the current rule.",
  },
  {
    name: "Aqar on Google Play",
    href: "https://play.google.com/store/apps/details?hl=en&id=fm.aqar",
    where: "Saudi Arabia",
    readFor:
      "Tens of thousands of reviews. Sort by newest. The useful ones name maps, English, crashes, and the app refusing to open abroad.",
  },
  {
    name: "Property Finder on the App Store",
    href: "https://apps.apple.com/ae/app/property-finder-real-estate/id897540233?see-all=reviews",
    where: "UAE",
    readFor:
      "Feature requests in the users’ own words: full price, chiller and parking filters, and fewer fake ads. The developer sometimes replies.",
  },
  {
    name: "Qatar Living on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.qatarliving.classifieds&hl=en",
    where: "Qatar",
    readFor:
      "Filters, crashes, and pop-ups, written by people who still have to use the app.",
  },
  {
    name: "Mzad Qatar on the App Store",
    href: "https://apps.apple.com/us/app/mzad-qatar-%D9%85%D8%B2%D8%A7%D8%AF-%D9%82%D8%B7%D8%B1/id680268461",
    where: "Qatar",
    readFor:
      "Search quality and support. Read the auction complaints as a trust signal, and ask how a property deal is protected before you pay.",
  },
  {
    name: "Dallal on the App Store",
    href: "https://apps.apple.com/tm/app/dallal-%D8%AF%D9%84-%D8%A7%D9%84/id6747333029",
    where: "Kuwait",
    readFor:
      "The company’s own description of verification, PACI search, and paid tiers. Independent reviews are still thin, so check back.",
  },
];

export type RuleBlock = {
  country: string;
  lede: string;
  points: { title: string; body: string }[];
};

export const rules: RuleBlock[] = [
  {
    country: "UAE — Dubai, mainly",
    lede:
      "Abu Dhabi and the other emirates have their own land departments and rent committees. The machinery below is the Dubai one, because that is where the big portals and the loudest complaints are.",
    points: [
      {
        title: "The ad needs a permit",
        body: "A Dubai property advertisement is supposed to carry a Trakheesi permit from the Land Department. The broker should be RERA-registered. Ask for the broker card and the office number. Allsopp, for example, publishes its RERA office number on its own site. Any agency can do that.",
      },
      {
        title: "The lease is not real until Ejari",
        body: "Register the tenancy. Power, cooling accounts, and sometimes the building’s move-in permit depend on it. If the unit is blocked for the owner’s unpaid service charge, Ejari can fail after you have already handed over a cheque.",
      },
      {
        title: "The advertised price is the start",
        body: "On a rental, an agency commonly asks about 5% and a security deposit of about 5%. That is a market habit, not a tax, and it is negotiable. Cheques matter: one cheque means the whole year up front. On a purchase, budget the land-department registration fee (buyers are often asked for the full 4%), an agency fee commonly around 2%, and a trustee office fee. Confirm the current schedule with the Land Department before you sign anything.",
      },
      {
        title: "Cooling and the building fee are extra characters in the story",
        body: "DEWA is electricity and water. In many towers the air conditioning is a district chiller with its own bill. The annual service charge is the owner’s, but a tenant feels it when the owner has not paid. Look it up before the viewing, not after the deposit.",
      },
      {
        title: "“Families only” is a real rule",
        body: "Some buildings will not rent to single people, and some areas are the other way around. If the filter does not say so, ask before you cross the city. Photos will not tell you.",
      },
    ],
  },
  {
    country: "Saudi Arabia",
    lede:
      "The market spent the last few years moving from anonymous ads to licensed ones. The useful habit is simple: licence, viewing, Ejar. In that order.",
    points: [
      {
        title: "The ad needs a FAL licence",
        body: "The Real Estate General Authority licenses brokers and the platforms, and it issues the advertisement licence. Aqar’s store listing says its advertisers pass Nafath and its ads are licensed. On Haraj or OpenSooq you may have to ask for that licence yourself. Check it on REGA.",
      },
      {
        title: "Pay through Ejar",
        body: "Ejar is the rental-contract network. Renters on r/Riyadh tell newcomers not to send a booking fee to a number that will not meet, and not to pay outside Ejar. Meet at a real office. Read whose name is on the deed.",
      },
      {
        title: "Sakani is a different door",
        body: "Sakani is the government housing program for eligible households. It is not the Saudi version of Bayut. If you are not in the program, go back to Aqar.",
      },
      {
        title: "Language and the map are part of access",
        body: "The best inventory is in Arabic, on Aqar. English exists and is thinner. If you are searching from outside the Kingdom, check that the app opens; a 2026 Play review said it does not open abroad.",
      },
    ],
  },
  {
    country: "Qatar",
    lede:
      "Doha’s agency stock sits on Property Finder. The local conversation sits on Qatar Living, and the general souq sits on Mzad. The complaints are about the tools, not about a shortage of apartments.",
    points: [
      {
        title: "Read the words “bills included” as a claim",
        body: "Renters hunt that phrase because cooling and electricity change the month. It is often buried in a paragraph. A real filter would do more than a keyword.",
      },
      {
        title: "Assume a property ad may be a paid ad",
        body: "A renter on r/qatar said in January 2024 that posting a property on the big local boards was a paid listing, on the order of a few hundred riyals. Confirm today’s fee in the app. Free consumer categories and paid property categories get mixed up in people’s heads.",
      },
      {
        title: "Trust the date",
        body: "Bunyan’s public homepage, when read for this desk, still showed cards from three and four years ago. If the date is old, the home is a rumour.",
      },
    ],
  },
  {
    country: "Kuwait",
    lede:
      "4Sale is the crowd. Everything else is an attempt to be calmer than 4Sale. The address system is PACI, and a listing that cannot give you that address is asking you to guess the building.",
    points: [
      {
        title: "Ask for the PACI address",
        body: "Dallal built search around it because “near the co-op” is not an address. Get the number, then open it in a map you trust.",
      },
      {
        title: "Ownership rules are strict",
        body: "A sale listing and a right for a non-citizen to buy are not the same fact. Confirm the current rule for that property type before you spend a month on viewings. Do not take the advertiser’s word as the law.",
      },
      {
        title: "A 3D tour is worth more than another gallery",
        body: "4Sale Realty’s measured tours exist because ordinary photos were not enough. Prefer a home you can walk through on a screen to one with twelve bright angles and no plan.",
      },
    ],
  },
  {
    country: "Bahrain",
    lede:
      "Property Finder and Bayut are the market. The local boards are the second pass. Property Finder’s purchase of Bahrain Property World is why some old bookmarks feel empty.",
    points: [
      {
        title: "Use the CPR address",
        body: "Ads that bother to include it are easier to verify. If the pin and the address disagree, believe neither until you have been there.",
      },
      {
        title: "Check who is writing the ad",
        body: "A small site such as Homes Bahrain shows the agency name. That is good. It is not a background check. Ask for the licence and see the unit.",
      },
      {
        title: "Keep the official databank in the loop",
        body: "Bahrain’s regulator, RERA, runs market information and an address people refer to as Aqari. Use the regulator’s own site for the record, and the portals for the photos.",
      },
    ],
  },
  {
    country: "Oman",
    lede:
      "Muscat searches split between property portals (Mawa, Bayut, Oman Real) and classifieds (dubizzle, OpenSooq). Prime and foreign-ownership questions belong with a desk that will say the quiet part out loud.",
    points: [
      {
        title: "Ask if you are allowed to own it",
        body: "Foreign buyers are generally pointed at Integrated Tourism Complexes and similar designated areas. A beautiful ad outside those rules is a dead end. Make the listing say “eligible” or “not eligible” before the photo.",
      },
      {
        title: "The rules were rewritten",
        body: "A consolidated real-estate law was reported to take effect on 10 March 2026, with the Ministry of Housing and Urban Planning in the supervisory seat. Read the ministry’s current guidance for a purchase. A portal summary is not the law.",
      },
      {
        title: "Skip a site that is not itself",
        body: "estatehuboman.com was showing a hacked homepage on 3 November 2026. A domain that used to be a portal can stop being one overnight.",
      },
    ],
  },
];

export const sideTools: { name: string; href: string; note: string }[] = [
  {
    name: "ZamanProp",
    href: "https://zamanprop.com/en",
    note: "Dubai service charges and recorded sale prices, because the listing will not show them.",
  },
  {
    name: "Diyarat",
    href: "https://diyarat.ae/",
    note: "Asks where an asking price sits against Dubai Land Department sales.",
  },
  {
    name: "TryBeforeDubai",
    href: "https://trybeforedubai.com/",
    note: "Ranks areas by school run, 8am traffic, and a first-year cost. Built for the question the portals do not take.",
  },
  {
    name: "Dubai Land Department",
    href: "https://dubailand.gov.ae/en/",
    note: "The official record. Dubai REST is the app people use for a title deed and a blocked unit.",
  },
];
