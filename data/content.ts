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
  selectionYear: "2026",
  email: "ojayittelang@gmail.com", // REAL
};

// Ticker — real facts only, used on the homepage marquee.
export const tickerFacts: string[] = [
  "EVENTS HEAD, CSI SPIT",
  "HEAD OF SUBCOMMITTEE, IEEE SPIT",
  "WINNER: FORTUNE '26 CASE COMPETITION, DTU",
  "WINNER: BEST UI/UX, SPIT SE HACKATHON",
  "TOP 4: SYNERGY HARDWARE HACKATHON, FRCRCE",
];

// DRAFT — personalize the specifics before publishing.
export const motivation = {
  eyebrow: "01. Motivation",
  title: "Why I'm Running",
  subtitle:
    "Not a slogan. It comes down to the people who made this place worth showing up for.",
  paragraphs: [
    "Some of the best people I've met in college, and some of the people I'm proudest to call my friends, are people I met through CSI. Late nights during events, random conversations in between, and everything that happened when no one was keeping track of it, those are the moments I remember most from the last year.",
    "CSI became more than a society because of the people in it, and that's something I want to preserve. I want the person who joins next year to find what I found here: people worth staying for, friendships that go beyond a committee, and a culture that continues even as the people leading it change.",
    "Over the past year, I've had the opportunity to lead two teams at once, as Events Head at CSI SPIT and Head of Subcommittee at IEEE SPIT. Working with different people, navigating disagreements, taking responsibility when things went wrong, and making sure things actually got done taught me far more than any title could.",
    "Now, I want to take that experience beyond one vertical. I want to contribute to CSI at a larger level, not just by helping run its events, but by helping shape the society, its culture, and the experience it creates for everyone who becomes a part of it.",
  ],
};

// DRAFT — personalize before publishing.
// The whole page argues one question: why can I actually execute the vision
// I've presented. Five pieces of evidence, not a list of generic traits.
export const whyMe = {
  eyebrow: "02. Why Me",
  title: "Why Me",
  subtitle: "One question. Five pieces of evidence.",
  informalCards: [
    { src: "/why-me-photo.png", alt: "Ojayit Telang", caption: "I Am Nonchalant", rotate: "rotate-2" },
    {
      src: "/why-me-finance.png",
      alt: "Reading up on financial statements",
      caption: "I Am Good With Finance",
      rotate: "-rotate-2",
    },
    {
      src: "/why-me-animals.jpeg",
      alt: "Sitting with two goats wearing sunglasses",
      caption: "I Am Good With Animals",
      rotate: "rotate-1",
    },
    {
      src: "/why-me-children.png",
      alt: "Teaching a workshop to school students",
      caption: "I Am Good With Children",
      rotate: "-rotate-3",
    },
  ],
  transitionLabel: "On a More Serious Note",
  aboutLabel: "About Me",
  about:
    "I'm an Electronics & Telecommunication Engineering student at SPIT with strong experience in leadership, team management, event execution, and working with people. Through my roles in IETE, the Alumni Relations Cell, CSI SPIT as Events Head, and IEEE SPIT as Head of Subcommittee, I've gained hands-on experience in managing teams, coordinating events, handling responsibilities, and turning plans into execution. I also have experience winning case study competitions, including Fortune '26 at DTU, which has strengthened my public speaking, business thinking, decision-making, and ability to perform under pressure. I enjoy taking ownership, managing people, solving problems, and creating teams that work well together, while also bringing a strong technical foundation in programming, AI/ML, full-stack development, and embedded systems.",
  centralQuestion: "The Case for My Candidacy",
  centralCaption:
    "Five reasons, each one grounded in work I have already done rather than promises about what I might do.",
  reasons: [
    {
      number: "01",
      heading: "I Have Already Done the Job",
      body: [
        "For the past year I have held two leadership positions at once: Events Head at CSI SPIT and Head of Subcommittee at IEEE SPIT. Those are not honorary titles. They meant owning event calendars end to end, allocating tasks, tracking progress, and answering for the result when something slipped.",
      ],
      proofLabel: "Evidence",
      proof: "Events Head, CSI SPIT · Head of Subcommittee, IEEE SPIT · Two committees, concurrently",
    },
    {
      number: "02",
      heading: "I Know Where the Good People Are",
      body: [
        "I have worked inside three of SPIT's technical bodies: CSI, IEEE, and IETE, along with the Alumni Relations Cell. That means the people I can call on are not limited to one committee's existing circle, which matters most at selection time, when a committee is only as strong as the people it recruits.",
      ],
      proofLabel: "Evidence",
      proof: "CSI SPIT · IEEE SPIT · IETE SPIT · Alumni Relations Cell",
    },
    {
      number: "03",
      heading: "I Can Represent the Committee Externally",
      body: [
        "A significant part of this role happens outside the committee: sponsorship conversations, negotiations, speaker outreach, and representing CSI to people who have no prior reason to say yes. That requires structuring an argument and holding it under questioning, which is exactly what winning case competitions like Fortune '26 at DTU demanded.",
      ],
      proofLabel: "Evidence",
      proof: "Winner, Fortune '26 Case Competition (DTU) · Published research · Sponsor and speaker outreach",
    },
    {
      number: "04",
      heading: "Approachable, Without Being Unserious",
      body: [
        "My working style is deliberately informal in ordinary situations. People should be able to raise a problem early, admit they are behind, or disagree with a decision without rehearsing how to say it. Teams that fear their seniors hide problems until the problems are expensive. That said, being easy to talk to and being easy to ignore are different things.",
      ],
      stance: {
        left: {
          label: "Approachable",
          note: "Open to being questioned, easy to reach, comfortable with informal working relationships.",
        },
        right: {
          label: "Accountable",
          note: "Clear expectations, tracked commitments, and a willingness to make the difficult call.",
        },
      },
      proofLabel: "Principle",
      proof: "Accountability without a culture of fear.",
    },
    {
      number: "05",
      heading: "I Am Steady When Things Go Wrong",
      body: [
        "Events do not fail quietly. They fail on the morning of, when a speaker drops out, a vendor is late, or a room changes. The useful quality in that moment is not enthusiasm; it is the ability to reprioritise quickly and keep the rest of the team moving, and a year of running events has given me repeated exposure to exactly that.",
      ],
      proofLabel: "Evidence",
      proof: "A year of event execution · Hackathons and case competitions · Concurrent research and academic roles",
    },
  ],
  formula: ["Experience", "Network", "Representation", "Leadership Style", "Composure"],
  conclusion:
    "I'm not stepping into leadership to learn how it works. I'm stepping up because I've already done the work, and I'm ready to do it at this level.",
};

// REAL — roles and dates as supplied. `lead: true` marks the two leadership
// positions that get the visually dominant treatment on the timeline.
export const experience = {
  eyebrow: "The Journey",
  title: "My Experience",
  subtitle: "From contributing to committees to leading them.",
  closing: "Started by contributing. Grew by leading.",
  eras: [
    {
      year: "2024–25",
      label: "Building the Foundation",
      roles: [
        {
          role: "Subcommittee Member",
          org: "IETE SPIT",
          period: "Oct 2024 – May 2025",
          summary:
            "Ran outreach campaigns and promotional content to grow the chapter's visibility and participation.",
          focus: ["PR", "Outreach", "Public Relations"],
          lead: false,
        },
        {
          role: "Data Acquisition Team Member",
          org: "Alumni Relations Cell, SPIT",
          period: "Nov 2024 – May 2025",
          summary:
            "Led alumni outreach for speaker panels at the Alumni Meet, bringing prominent alumni to the event.",
          focus: ["Alumni Outreach", "Coordination", "Engagement"],
          lead: false,
        },
        {
          role: "Research Intern",
          org: "GoGreen Technologies Pvt. Ltd.",
          period: "Jul 2025 – Aug 2025",
          summary:
            "Researched Generative AI prompt engineering for IoT while supervising a team of diploma students.",
          focus: ["Generative AI", "IoT", "Team Leadership"],
          lead: false,
        },
      ],
    },
    {
      year: "2025–26",
      label: "Stepping Into Leadership",
      roles: [
        {
          role: "Events Head",
          org: "CSI SPIT",
          period: "Sep 2025 – Present",
          summary:
            "Own the chapter's technical event calendar end to end: timelines, teams, sponsors, and delivery on the day.",
          focus: ["Leadership", "Events", "Coordination", "Stakeholder Management"],
          lead: true,
        },
        {
          role: "Head of Subcommittee",
          org: "IEEE SPIT",
          period: "Sep 2025 – May 2026",
          summary:
            "Lead the subcommittee, handling task allocation, progress tracking, and execution of chapter initiatives.",
          focus: ["Leadership", "Team Management", "Delegation", "Execution"],
          lead: true,
        },
        {
          role: "Teaching Assistant",
          org: "Sardar Patel Institute of Technology",
          period: "Aug 2025 – May 2026",
          summary:
            "Support Prof. Kaisar Katchi with classroom operations, student coordination, and course materials.",
          focus: ["Communication", "Coordination", "Responsibility"],
          lead: false,
        },
        {
          role: "Researcher",
          org: "SSRN",
          period: "Jul 2025 – Aug 2025",
          summary:
            "Published original research combining data analysis, technical methodology, and market perspectives.",
          focus: ["Research", "Data Analysis", "Finance"],
          lead: false,
        },
        {
          role: "Research Intern",
          org: "SPJIMR, SP Jain Institute of Management & Research",
          period: "Jul 2026 – Present",
          summary:
            "Research ESG practices and sustainability in banking, analysing frameworks and industry datasets.",
          focus: ["Research", "ESG", "Banking"],
          lead: false,
        },
        {
          role: "Artificial Intelligence Intern",
          org: "Quantum Four Analytics",
          period: "Jun 2026 – Present",
          summary:
            "Built an Automated Number Plate Recognition system using YOLO, EasyOCR, and OpenCV.",
          focus: ["AI/ML", "Computer Vision", "OCR"],
          lead: false,
        },
      ],
    },
  ],
};

// DRAFT — these are proposed initiatives grounded in your real experience.
// Sharpen or replace any that don't reflect what you actually intend to do.
export const vision = {
  eyebrow: "03. Vision",
  title: "My Vision",
  subtitle: "What I want to fix, not just what I want to say.",
};

// Proposed committee structure — three tiers, rendered as an org chart on
// the vision page. Counts are shown consolidated (e.g. "×5") rather than
// as individual boxes per person.
export const orgChart = {
  eyebrow: "How I'll Structure It",
  title: "The Committee, End to End",
  subtitle:
    "Three tiers, one clear chain of accountability, from the Executive Core down to every Subcommittee member.",
  executiveCore: {
    label: "Executive Core",
    roles: [
      { title: "Chairperson" },
      { title: "Vice Chairpersons", count: 2 },
      { title: "Secretary" },
      { title: "Head of Finance" },
      { title: "Head of Events" },
      { title: "Tech Heads", count: 3 },
    ],
  },
  coreTeam: {
    label: "Core Team",
    departments: [
      { title: "Events", roleLabel: "Events Leads", count: 5 },
      { title: "Marketing", roleLabel: "Marketing Leads", count: 5 },
      { title: "Creative", roleLabel: "Creative Leads", count: 5 },
      { title: "Social Media", roleLabel: "Social Media Lead", count: 1 },
      { title: "Public Relations", roleLabel: "PR Leads", count: 4 },
    ],
  },
  subcommittee: {
    label: "Subcommittee",
    countLabel: "~35 Members",
  },
};

// Five concrete improvements for the tenure — framed as what I want to
// build, not as criticism of the outgoing team. Renders on the vision page.
export const improvements = {
  eyebrow: "Some Improvements",
  title: "Some Improvements",
  subtitle:
    "Five places I want to raise the bar for CSI, not because something was broken, but because it can be stronger.",
  items: [
    {
      number: "01",
      title: "Stronger Marketing & Sponsorship",
      body: "Marketing shouldn't sit with two or three people making calls when they get the time. I want more frequent marketing calls, more consistent reaching out to potential sponsors, and the subcommittee actively involved in bringing in leads and pushing them through to closure, not just the core team.",
      keyIdeas: [
        "More frequent marketing and sponsor calls",
        "Wider, more consistent sponsor reach-out",
        "Active subcommittee participation in bringing in leads",
        "Subcommittee follow-through on leads, not just handoff",
      ],
      coreMessage:
        "Stronger marketing means stronger visibility, stronger sponsorships, and better financial stability.",
    },
    {
      number: "02",
      title: "Stronger PR & Outreach",
      body: "PR needs to go beyond posting online. I want more offline PR, actually showing up at colleges and communities, and a PR subcommittee that's genuinely active, not passive. Same principle as marketing: it works when the subcommittee is out there reaching out, not just the core team.",
      keyIdeas: [
        "More offline PR, not just posts",
        "An active PR subcommittee, especially on the ground",
        "More active subcommittee participation in outreach",
        "Consistent communication through the entire event cycle",
      ],
      stat: { value: "4,000+", label: "Hackathon Registrations Target" },
      coreMessage: "Start earlier. Reach wider. Stay consistent.",
    },
    {
      number: "03",
      title: "Better Subcommittee Selection",
      body: "Group discussions are genuinely useful for evaluating communication and teamwork, but they don't always reveal whether someone can execute, take ownership, or deliver consistently. Good communication does not always translate into execution.",
      keyIdeas: [
        "Evaluate execution ability alongside communication",
        "Assess ownership, reliability, initiative, and commitment",
        "A selection process that looks at more than one conversation",
        "Select people who show they can contribute consistently",
      ],
      coreMessage: "Select people who deliver, not just people who speak well.",
    },
    {
      number: "04",
      title: "Stronger Subcommittee Coordination & Engagement",
      body: "Once the subcommittee is selected, coordination and accountability shouldn't fade. I want fixed deadlines, regular check-ins, and clear expectations, alongside informal meets and team-building that build real relationships.",
      keyIdeas: [
        "Fixed deadlines for tasks",
        "Regular progress check-ins and follow-ups",
        "Clear expectations and accountability",
        "Informal meets and chill/team-building sessions",
      ],
      philosophy: "I want accountability without creating a culture of fear.",
      triad: ["Mutual Respect", "Open Communication", "Shared Goals"],
      coreMessage:
        "People deliver because they feel responsible for the team, not because they're afraid of it.",
    },
    {
      number: "05",
      title: "Better Event Strategy & Audience Alignment",
      body: "We run some genuinely good events, and a few of them haven't got the turnout they deserved. That's usually a question of format and audience rather than effort, and it's very fixable. I want to look honestly at how each event performed and give the ones with potential a better shot.",
      swap: {
        from: "Blockchain Workshop",
        to: "Introduction to DSA & Competitive Programming",
        audience: "1st & 2nd Year Students",
        reason:
          "First and second years turn out in much larger numbers for foundational technical workshops, and DSA is something they're actively looking for help with. Same slot, same effort, far more people who benefit from it.",
      },
      rethink: {
        event: "Takedown",
        note: "Takedown is a strong idea that puts people on the spot, which can make it harder to enter. Softening the format a little would open it up to more participants, and if we keep it as it is, it deserves much better PR than it has had so far.",
      },
      keyIdeas: [
        "Audience-first event planning",
        "More inclusive, beginner-friendly formats",
        "Stronger PR for events that need higher participation",
        "A calendar shaped by real interest and participation data",
        "A balance between technical learning, competition, and social engagement",
      ],
      coreMessage: "Don't just conduct more events. Conduct the RIGHT events for the RIGHT audience.",
    },
  ],
  roadmap: [
    "Better Outreach",
    "Better People",
    "Better Execution",
    "Better Events",
    "Better Culture",
  ],
};

// The vision-page runner game. `tall` events are the flagship ones — they
// render as the taller obstacles, so they're the harder jumps.
export const visionRunner = {
  eyebrow: "Bonus Round",
  title: "Clear the Calendar",
  subtitle:
    "A full year of CSI events, one at a time, without tripping over any of them. Press space or tap to run.",
  events: [
    { name: "GitHub Workshop", tall: false, month: "Oct" },
    { name: "Source Start", tall: false, month: "Oct" },
    { name: "Codehousie", tall: false, month: "Oct" },
    { name: "Workshop (TBD)", tall: false, month: "Nov" },
    { name: "Tech Week", tall: true, month: "Feb" },
    { name: "SPIT Hackathon", tall: true, month: "Feb" },
    { name: "SE Hackathon", tall: true, month: "Mar" },
  ],
};

// REAL — finalized event budget. Do not alter categories, line items, or
// figures without a matching update from the treasurer/outgoing committee.
export const budget = {
  eyebrow: "04. Budget",
  title: "Budget",
  subtitle:
    "The 11th edition of the SPIT Hackathon, bigger than ever, and the budget behind it.",
  stats: [
    { label: "Total Prize Pool", value: "₹2,70,000", note: "₹2,25,000 Cash + ₹45,000 In-Kind" },
    { label: "Cash Prizes", value: "₹2,25,000" },
    { label: "In-Kind Value", value: "₹45,000" },
    { label: "Total Event Value", value: "₹4,40,000" },
  ],
  groups: [
    {
      category: "Prize Pool",
      value: 270000,
      color: "#3987e5",
      items: [
        { particular: "1st Prize", cash: "₹75,000", inKind: "₹15,000", total: "₹90,000" },
        { particular: "2nd Prize", cash: "₹50,000", inKind: "₹15,000", total: "₹65,000" },
        { particular: "3rd Prize", cash: "₹35,000", inKind: "₹15,000", total: "₹50,000" },
        { particular: "Domain Winner 1", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 2", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 3", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Domain Winner 4", cash: "₹15,000", inKind: "-", total: "₹15,000" },
        { particular: "Best UI/UX", cash: "₹5,000", inKind: "-", total: "₹5,000" },
      ],
      subtotal: { particular: "Prize Pool Subtotal", cash: "₹2,25,000", inKind: "₹45,000", total: "₹2,70,000" },
    },
    {
      category: "Food & Refreshments",
      value: 108000,
      color: "#d95926",
      items: [
        { particular: "Lunch (Day 1)", cash: "₹30,000", inKind: "-", total: "₹30,000" },
        { particular: "Dinner (Day 1)", cash: "₹30,000", inKind: "-", total: "₹30,000" },
        { particular: "Breakfast (Day 2)", cash: "₹12,000", inKind: "-", total: "₹12,000" },
        { particular: "Lunch (Day 2, Round 2 Finalists Only)", cash: "₹10,000", inKind: "-", total: "₹10,000" },
        { particular: "High Tea & Energy Drinks", cash: "₹22,000", inKind: "-", total: "₹22,000" },
        { particular: "Food for Judges", cash: "₹2,000", inKind: "-", total: "₹2,000" },
        { particular: "Food for Mentors", cash: "₹2,000", inKind: "-", total: "₹2,000" },
      ],
      subtotal: { particular: "Food Subtotal", cash: "₹1,08,000", inKind: "-", total: "₹1,08,000" },
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
      value: 7500,
      color: "#008300",
      items: [
        { particular: "Tokens of Appreciation for Judges", cash: "₹1,500", inKind: "-", total: "₹1,500" },
        { particular: "Other Hospitality Charges", cash: "₹6,000", inKind: "-", total: "₹6,000" },
      ],
      subtotal: { particular: "Hospitality Subtotal", cash: "₹7,500", inKind: "-", total: "₹7,500" },
    },
  ],
  grandTotal: { particular: "TOTAL", cash: "₹3,95,000", inKind: "₹45,000", total: "₹4,40,000" },
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

// PLACEHOLDER — page shell only. Real feedback and donation content and
// links go here before publishing.
export const support = {
  eyebrow: "06. Feedback & Donations",
  title: "Feedback & Donations",
  subtitle: "Tell me what you think, or chip in if you want to back the campaign.",
  feedback: {
    heading: "Feedback",
    qr: "/feedback-qr.png",
    qrAlt: "QR code linking to the feedback form",
    lines: [
      "Tell me what's working and what isn't, anonymously if you'd rather.",
      "Criticism is more useful to me right now than encouragement.",
    ],
  },
  donations: {
    heading: "Donations",
    qr: "/donate-upi-qr.png",
    qrAlt: "UPI QR code to pay Ojayit Telang",
    qrOnDark: true,
    upiId: "ojayittelang-1@okicici",
    lines: ["Donations to support my campaign."],
  },
};
