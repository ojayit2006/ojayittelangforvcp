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

// REAL — verbatim from resume/activities. Keep this section factual only.
export const trackRecord = {
  eyebrow: "03 — Track Record",
  title: "Track Record",
  subtitle: "What I've actually held and delivered — not what I'm promising.",
  timeline: [
    {
      role: "Events Head",
      org: "CSI SPIT",
      period: "2025 — Present",
      bullets: [
        "Owns end-to-end planning and execution of CSI SPIT's event calendar.",
        "Coordinates logistics, speakers, and sponsors for flagship technical events.",
      ],
    },
    {
      role: "Head of Subcommittee",
      org: "IEEE SPIT",
      period: "2025 — Present",
      bullets: [
        "Leads a subcommittee within IEEE SPIT, working alongside CSI and IETE leadership.",
      ],
    },
    {
      role: "PR Subcommittee Member",
      org: "IETE SPIT",
      period: "2024 — 2025",
      bullets: [
        "Handled outreach and promotion for IETE SPIT's events and initiatives.",
      ],
    },
    {
      role: "Data Acquisition Team",
      org: "Alumni Relations Cell, SPIT",
      period: "2024 — 2025",
      bullets: [
        "Worked on building and maintaining SPIT's alumni data and outreach pipeline.",
      ],
    },
  ],
  achievements: [
    "Winner — Fortune '26 Case Competition, DTU",
    "Winner — Best UI/UX, SPIT SE Hackathon",
    "Top 4 Teams — Synergy Hardware Hackathon, FRCRCE",
    "2nd Runner-Up — Merge Mania Case Study Competition",
    "Finalist — SCOE Hackathon",
  ],
};

// DRAFT — these are proposed initiatives grounded in your real experience.
// Sharpen or replace any that don't reflect what you actually intend to do.
export const vision = {
  eyebrow: "04 — Vision",
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

// PLACEHOLDER — do not publish fabricated figures. Replace allocation
// values with real numbers once confirmed with the outgoing committee.
export const budget = {
  eyebrow: "05 — Budget",
  title: "Budget & Transparency",
  subtitle:
    "A commitment to publish real numbers — not a guess dressed up as one.",
  philosophy:
    "Every rupee CSI SPIT spends should be visible to the people it's spent on. If elected, I'll publish an itemized breakdown for every major event within two weeks of it happening — not just a total, but where it went.",
  disclaimer:
    "The allocations below are placeholders for illustration only. Real figures will be published once confirmed with the outgoing committee and treasurer — this page will be updated to match.",
  lineItems: [
    {
      category: "Technical Events & Workshops",
      description: "Speaker fees, venue, and materials for flagship technical events.",
      allocation: "—",
    },
    {
      category: "Hackathons & Competitions",
      description: "Prizes, judging, and logistics for CSI-run competitions.",
      allocation: "—",
    },
    {
      category: "Outreach & PR",
      description: "Design, promotion, and cross-society coordination costs.",
      allocation: "—",
    },
    {
      category: "Contingency",
      description: "Buffer for unplanned costs across the year.",
      allocation: "—",
    },
  ],
};

// PLACEHOLDER — replace with real quotes from real people before publishing.
// Do not invent names, roles, or quotes here.
export const testimonials: { name: string; role: string; quote: string }[] = [];
