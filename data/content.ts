// All campaign copy lives here so it's editable in one place.
// Tags used below:
//   REAL        — verified from your resume/activities, safe to publish as-is
//   DRAFT       — grounded in your real background, but written in your voice
//                 for you to personalize before publishing
//   PLACEHOLDER — content only you can supply (quotes, exact figures).
//                 Do not publish these as real until replaced.

export const candidate = {
  name: "Ojayit Telang", // REAL
  tagline: "For Vice Chairperson, CSI SPIT",
  institute: "Sardar Patel Institute of Technology", // REAL
  society: "CSI SPIT",
  electionYear: "2026",
  email: "ojayittelang@gmail.com", // REAL
};

// Ticker — real facts only, used on the homepage marquee.
export const tickerFacts: string[] = [
  "EVENTS HEAD, CSI SPIT",
  "HEAD OF SUBCOMMITTEE, IEEE SPIT",
  "WINNER — FORTUNE '26 CASE COMPETITION, DTU",
  "WINNER — BEST UI/UX, SPIT SE HACKATHON",
  "TOP 4 — SYNERGY HARDWARE HACKATHON, FRCRCE",
];

// DRAFT — personalize the specifics before publishing.
export const motivation = {
  eyebrow: "01 — Motivation",
  title: "Why I'm Running",
  subtitle:
    "Not a slogan. It comes down to the people who made this place worth showing up for.",
  paragraphs: [
    "Some of the best people I've met in college, and some of the people I'm proudest to call my friends, are people I met through CSI. Late nights during events, random conversations in between, and everything that happened when no one was keeping track of it, those are the moments I remember most from the last couple of years.",
    "CSI became more than a society because of the people in it, and that's something I want to preserve. I want the person who joins next year to find what I found here: people worth staying for, friendships that go beyond a committee, and a culture that continues even as the people leading it change.",
    "Over the past year, I've had the opportunity to lead two teams at once, as Events Head at CSI SPIT and Head of Subcommittee at IEEE SPIT. Working with different people, navigating disagreements, taking responsibility when things went wrong, and making sure things actually got done taught me far more than any title could.",
    "Now, I want to take that experience beyond one vertical. I want to contribute to CSI at a larger level, not just by helping run its events, but by helping shape the society, its culture, and the experience it creates for everyone who becomes a part of it.",
  ],
};

// DRAFT — personalize before publishing.
export const whyMe = {
  eyebrow: "02 — Why Me",
  title: "Why Me",
  subtitle: "Four things I bring that the role actually needs.",
  pillars: [
    {
      title: "I've Already Run the Events",
      description:
        "As Events Head of CSI SPIT, I own the planning and execution of the society's event calendar — logistics, speakers, sponsors, and the cross-team coordination that makes an event actually happen on the day.",
    },
    {
      title: "Cross-Society Experience",
      description:
        "Head of Subcommittee at IEEE SPIT and PR Subcommittee at IETE SPIT means I've worked inside SPIT's other technical societies too — I know where CSI's coordination with them helps, and where it currently doesn't exist at all.",
    },
    {
      title: "I Build, Not Just Plan",
      description:
        "I built Nexus, a full-stack workflow automation system with role-based approvals and real-time tracking. If CSI needs a real internal tool — event registration, membership tracking, approval flows — I can build it instead of managing it on spreadsheets.",
    },
    {
      title: "Proven Under Pressure",
      description:
        "Winner at the Fortune '26 Case Competition (DTU) and Best UI/UX at the SPIT SE Hackathon, plus a Top 4 finish at Synergy (FRCRCE) and a runner-up at Merge Mania. I compete, and I deliver when it counts.",
    },
  ],
};

// DRAFT — these are proposed initiatives grounded in your real experience.
// Sharpen or replace any that don't reflect what you actually intend to do.
export const vision = {
  eyebrow: "03 — Vision",
  title: "My Vision",
  subtitle: "Five things I want to fix, not five things I want to say.",
  pillars: [
    {
      title: "A Society That Outlives Its Committee",
      description:
        "Documented handover for every event and process, so knowledge doesn't reset when a committee graduates. I'll build this as an actual internal tool, not a shared folder nobody opens.",
    },
    {
      title: "One Calendar, Not Three Committees",
      description:
        "A shared event calendar across CSI, IEEE, and IETE so flagship events stop clashing and cross-promotion becomes the default instead of an afterthought.",
    },
    {
      title: "Build Skills, Not Just Attendance",
      description:
        "Recurring hands-on workshops in web development, AI/ML, and embedded systems — run by students who've actually shipped in these areas, not one-off sessions that vanish after a semester.",
    },
    {
      title: "Alumni as an Active Resource",
      description:
        "Turn the Alumni Relations data pipeline into something that actually connects current members to alumni for mentorship and referrals — not just a spreadsheet of names.",
    },
    {
      title: "A Budget Everyone Can See",
      description:
        "Publish an itemized budget for every major event. See the Budget page for what that commitment looks like in practice.",
    },
  ],
};

// REAL — finalized event budget. Do not alter categories, line items, or
// figures without a matching update from the treasurer/outgoing committee.
export const budget = {
  eyebrow: "04 Budget",
  title: "Budget",
  subtitle:
    "The 11th edition of the SPIT Hackathon, bigger than ever, and the budget behind it.",
  stats: [
    { label: "Total Prize Pool", value: "₹3,00,000", note: "₹2,50,000 Cash + ₹50,000 In-Kind" },
    { label: "Cash Prizes", value: "₹2,50,000" },
    { label: "In-Kind Value", value: "₹50,000" },
    { label: "Total Event Value", value: "₹4,49,000" },
  ],
  groups: [
    {
      category: "Prize Pool",
      value: 300000,
      color: "#3987e5",
      items: [
        { particular: "1st Prize", cash: "₹1,00,000", inKind: "₹20,000", total: "₹1,20,000" },
        { particular: "2nd Prize", cash: "₹50,000", inKind: "₹15,000", total: "₹65,000" },
        { particular: "3rd Prize", cash: "₹35,000", inKind: "₹15,000", total: "₹50,000" },
        { particular: "Domain Winner 1", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 2", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 3", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 4", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Best UI/UX", cash: "₹5,000", inKind: "-", total: "₹5,000" },
      ],
      subtotal: { particular: "Prize Pool Subtotal", cash: "₹2,50,000", inKind: "₹50,000", total: "₹3,00,000" },
    },
    {
      category: "Food & Refreshments",
      value: 94000,
      color: "#d95926",
      items: [
        { particular: "Lunch (Day 1)", cash: "₹30,000", inKind: "-", total: "₹30,000" },
        { particular: "Dinner (Day 1)", cash: "₹30,000", inKind: "-", total: "₹30,000" },
        { particular: "Breakfast (Day 2)", cash: "₹12,000", inKind: "-", total: "₹12,000" },
        { particular: "High Tea & Energy Drinks", cash: "₹22,000", inKind: "-", total: "₹22,000" },
      ],
      subtotal: { particular: "Food Subtotal", cash: "₹94,000", inKind: "-", total: "₹94,000" },
    },
    {
      category: "Accommodation",
      value: 15000,
      color: "#199e70",
      items: [
        { particular: "Sleeping Accommodation", cash: "₹15,000", inKind: "-", total: "₹15,000" },
      ],
      subtotal: null,
    },
    {
      category: "Stationery",
      value: 14500,
      color: "#c98500",
      items: [
        { particular: "ID Card Printing", cash: "₹2,500", inKind: "-", total: "₹2,500" },
        { particular: "ID Card Straps / Lanyards", cash: "₹1,200", inKind: "-", total: "₹1,200" },
        { particular: "Winner Certificates", cash: "₹2,000", inKind: "-", total: "₹2,000" },
        { particular: "Posters & Printouts", cash: "₹3,000", inKind: "-", total: "₹3,000" },
        { particular: "A4 Sheets / Printing Paper", cash: "₹1,000", inKind: "-", total: "₹1,000" },
        { particular: "Pens", cash: "₹1,000", inKind: "-", total: "₹1,000" },
        { particular: "Notepads / Writing Material", cash: "₹2,000", inKind: "-", total: "₹2,000" },
        { particular: "Tape / Glue / Scissors", cash: "₹800", inKind: "-", total: "₹800" },
        { particular: "File Folders / Documentation", cash: "₹1,000", inKind: "-", total: "₹1,000" },
      ],
      subtotal: { particular: "Stationery Subtotal", cash: "₹14,500", inKind: "-", total: "₹14,500" },
    },
    {
      category: "Décor & Branding",
      value: 25000,
      color: "#d55181",
      items: [
        { particular: "Banner Drop", cash: "₹6,000", inKind: "-", total: "₹6,000" },
        { particular: "Sponsor Branding Printouts", cash: "₹3,000", inKind: "-", total: "₹3,000" },
        { particular: "Standees & Table Branding", cash: "₹5,500", inKind: "-", total: "₹5,500" },
        { particular: "Stage & Venue Décor", cash: "₹8,000", inKind: "-", total: "₹8,000" },
        { particular: "Welcome / Entrance Décor", cash: "₹2,000", inKind: "-", total: "₹2,000" },
        { particular: "Misc. Printing & Branding", cash: "₹500", inKind: "-", total: "₹500" },
      ],
      subtotal: { particular: "Décor Subtotal", cash: "₹25,000", inKind: "-", total: "₹25,000" },
    },
    {
      category: "Hospitality",
      value: 5500,
      color: "#008300",
      items: [
        { particular: "Tokens of Appreciation for Judges", cash: "₹1,500", inKind: "-", total: "₹1,500" },
        { particular: "Other Hospitality Charges", cash: "₹4,000", inKind: "-", total: "₹4,000" },
      ],
      subtotal: { particular: "Hospitality Subtotal", cash: "₹5,500", inKind: "-", total: "₹5,500" },
    },
  ],
  grandTotal: { particular: "TOTAL", cash: "₹3,99,000", inKind: "₹50,000", total: "₹4,49,000" },
};

// PLACEHOLDER — replace with real quotes from real people before publishing.
// Do not invent names, roles, or quotes here.
export const testimonials: {
  name: string;
  role: string;
  quote: string;
  photo?: string;
}[] = [
  {
    name: "Shivaji Deshmukh",
    role: "Creatives Head, CSI SPIT 2025–26",
    quote:
      "Honestly, working with Ojayit during our core year showed me how reliable he really is. He pulled off some of our best events without sweating it, and he's definitely the right fit to help lead CSI as Vice Chairperson.",
    photo: "/testimonial-shivaji.png",
  },
  {
    name: "Pranav Sapkale",
    role: "Vice Chairperson, IEEE SPIT 2025–26",
    quote:
      "When I think of CSI, I think Ojayit Telang. Every event I've seen CSI do this past tenure, I find that even from an outsider's perspective, and from my own dealings with the committee, Ojayit is a crucial part of it and is extremely pivotal in its dealings. In my eyes, I would find no better suitor for the position of VCP than Ojayit Omkar Jagdish Telang.",
    photo: "/testimonial-pranav.png",
  },
  {
    name: "Sampada Daware",
    role: "Marketing Head, CSI SPIT 2025–26",
    quote:
      "I have had the pleasure of working with Ojayit as an event head; I think he did a great job, and honestly, he is a very approachable person who truly knows what he is doing, though he also goes out of his way to make new connections and bonds, which only enhances his great personality.",
    photo: "/testimonial-sampada.png",
  },
  {
    name: "Gurjeev Kohli",
    role: "Marketing Head, CSI SPIT 2025–26",
    quote:
      "Ojayit is one of those people who makes an event work without making a big deal out of it. He's earned this, and Telang for VCP is an easy call for me.",
    photo: "/testimonial-gurjeev.png",
  },
  {
    name: "Prathamesh Sonawane",
    role: "Social Media Head, CSI SPIT 2025–26",
    quote:
      "And the scent of the rain,\nwhen he first became Events Lead,\nis ingrained in my brain.\nAny human being still sane\nwould choose OJ to be VCP of CSI,\nand anyone asking why\nhas clearly never seen the guy.\nThrough every event, every deadline, every plea,\nOJ as VCP is how it's meant to be.",
    photo: "/testimonial-prathamesh.png",
  },
];
