export type AltFaq = { q: string; a: string };

export type OtherAlternative = {
  name: string;
  blurb: string;
  /** Internal link to another /alternatives/ page, if we have one */
  slug?: string;
};

export type PainPoint = { title: string; body: string };

export type Alternative = {
  /** URL segment: /alternatives/{slug}/ */
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  quickAnswer: {
    chooseCompetitor: string;
    chooseFeedsolve: string;
  };
  whySwitch: PainPoint[];
  competitorStrengths: string[];
  competitorGaps: string[];
  competitorPricing: string;
  whereCompetitorWins: string;
  otherAlternatives: OtherAlternative[];
  faqs: AltFaq[];
  /** Link to an existing /compare/ page when one exists */
  compareHref?: string;
};

export const FEEDSOLVE_HIGHLIGHTS = [
  "Zero-login QR + link submission",
  "Unique #FSV-XXXX tracking code per submission",
  "Public tracking page for submitters",
  "Kanban resolution workflow with assignment",
  "Boards per stakeholder type (customers, suppliers, staff)",
  "Resolution rate as the primary metric",
  "Flat pricing: free plan, then $19–79/month",
  "Self-serve setup in minutes, no sales call",
];

export const alternatives: Alternative[] = [
  // ── 1. Enterprise CX platforms ────────────────────────────────────────────
  {
    slug: "medallia",
    name: "Medallia",
    category: "enterprise-cx",
    categoryLabel: "Enterprise CX platform",
    metaTitle: "Best Medallia Alternative for Small Business (2026)",
    metaDescription:
      "Looking for a Medallia alternative without quote-only pricing and multi-month rollouts? FeedSolve gives SMBs a QR-first complaint resolution loop from $19/month, self-serve.",
    heroSubtitle:
      "Medallia is built for enterprises with dedicated CX teams and six-figure budgets. FeedSolve gives small and mid-size businesses the part that actually matters day to day - a working feedback resolution loop - for $19–79/month with no sales call.",
    quickAnswer: {
      chooseCompetitor:
        "if you are a large enterprise with dedicated CX analysts who need journey mapping, text analytics, and cross-source feedback unification at massive scale.",
      chooseFeedsolve:
        "if you are an SMB that needs complaints collected via QR code, assigned to a team member, and demonstrably resolved - live today, self-serve, from $19/month.",
    },
    whySwitch: [
      {
        title: "Quote-only pricing you cannot self-serve onto",
        body: "Medallia does not publish pricing. Every deal starts with a sales call, a scoping exercise, and typically a five- or six-figure annual contract. There is no plan a 15-person business can simply sign up for.",
      },
      {
        title: "Multi-month implementation",
        body: "Medallia deployments are projects: integrations, data pipelines, program design, often with implementation partners. If you need feedback collection working this week, that timeline alone rules it out.",
      },
      {
        title: "Analytics depth you may never use",
        body: "Journey orchestration, text analytics, and role-based dashboards are powerful - for organizations with analysts to run them. Most SMBs need something simpler: who complained, who owns it, and was it fixed.",
      },
    ],
    competitorStrengths: [
      "Enterprise-scale text and speech analytics",
      "Unifies feedback across dozens of sources",
      "Journey mapping and program governance",
      "Deep integrations for large org stacks",
    ],
    competitorGaps: [
      "No published pricing - quote and demo only",
      "Implementation measured in months",
      "No self-serve option for small teams",
      "No public tracking code for submitters",
    ],
    competitorPricing:
      "Quote-only. Typically annual enterprise contracts; no self-serve tier.",
    whereCompetitorWins:
      "Large enterprises with a dedicated CX function that need journey mapping, advanced analytics, and cross-source unification at scale. If you have CX analysts on staff and an enterprise budget, Medallia is a legitimate choice.",
    otherAlternatives: [
      {
        name: "Qualtrics",
        slug: "qualtrics",
        blurb: "The other enterprise CX heavyweight - similar scale, similar procurement process.",
      },
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "Mid-market omnichannel surveys with some case management, from $49/month.",
      },
      {
        name: "SurveySparrow",
        slug: "surveysparrow",
        blurb: "Conversational surveys with NPS/CSAT tooling at mid-market prices.",
      },
    ],
    faqs: [
      {
        q: "What is the best Medallia alternative for small businesses?",
        a: "FeedSolve is purpose-built for the SMB segment Medallia does not serve. It replaces the part of Medallia most small businesses actually need - collecting feedback and resolving it - with QR-based zero-login submission, a Kanban resolution workflow, and a public tracking code for every submitter, from $19/month with a free plan.",
      },
      {
        q: "How much does Medallia cost compared to FeedSolve?",
        a: "Medallia does not publish pricing; contracts are typically negotiated annually and commonly run into five or six figures for enterprise deployments. FeedSolve publishes flat pricing: a free plan, then $19 to $79 per month depending on tier, with no per-response scaling and no sales call required.",
      },
      {
        q: "Does FeedSolve have the same analytics as Medallia?",
        a: "No, and it does not try to. Medallia offers enterprise-grade text analytics and journey mapping for dedicated CX teams. FeedSolve focuses on the operational loop instead: submission, assignment, status, and resolution rate. For most SMBs that loop is the missing piece, not analytics depth.",
      },
      {
        q: "Can I switch from Medallia to FeedSolve?",
        a: "There is nothing to migrate in the traditional sense - FeedSolve is not a data-warehouse CX suite. You create boards for each stakeholder type, print the QR codes, and new feedback starts flowing into the resolution workflow the same day. Many teams run it alongside an enterprise tool during transition.",
      },
    ],
  },
  {
    slug: "qualtrics",
    name: "Qualtrics",
    category: "enterprise-cx",
    categoryLabel: "Enterprise CX platform",
    metaTitle: "Best Qualtrics Alternative for Small Business (2026)",
    metaDescription:
      "Qualtrics is demo-gated, quote-priced, and built for enterprise research teams. FeedSolve is the self-serve alternative for SMB complaint resolution - QR intake to resolved, from $19/month.",
    heroSubtitle:
      "Qualtrics XM is an enterprise experience-management suite: powerful, quote-priced, and demo-gated. FeedSolve is what an SMB actually needs from it - collect feedback without logins, assign it, resolve it, prove it - available self-serve today.",
    quickAnswer: {
      chooseCompetitor:
        "if you run enterprise research or CX programs and need advanced survey logic, statistical tooling, and experience management across a large organization.",
      chooseFeedsolve:
        "if you need customer, supplier, or staff complaints resolved with ownership and a submitter-facing tracking code - without procurement, implementation, or a five-figure contract.",
    },
    whySwitch: [
      {
        title: "Built for research teams, not resolution teams",
        body: "Qualtrics excels at asking sophisticated questions and analyzing answers at scale. But a complaint is not a research datapoint - it is a task that needs an owner, a status, and a close-out. That workflow is not what Qualtrics is organized around.",
      },
      {
        title: "Enterprise procurement for an SMB problem",
        body: "Quote-only pricing, sales-led onboarding, and contracts sized for enterprises. A small manufacturer or restaurant group cannot self-serve onto Qualtrics XM the way they can sign up for FeedSolve in an afternoon.",
      },
      {
        title: "The submitter is left in the dark",
        body: "A customer who fills in a Qualtrics survey gets a thank-you screen. A customer who submits through FeedSolve gets a tracking code and a public status page - they can check progress themselves, which cuts follow-up calls and builds trust.",
      },
    ],
    competitorStrengths: [
      "Advanced survey logic and statistical analysis",
      "Enterprise experience management across CX/EX",
      "Large ecosystem, certifications, and services",
      "Strong for academic and market research",
    ],
    competitorGaps: [
      "Quote-only, demo-gated purchasing",
      "No resolution-first workflow for complaints",
      "No submitter tracking codes or status page",
      "Heavy for teams without analysts",
    ],
    competitorPricing:
      "Quote-only. Enterprise annual contracts; entry costs typically far above SMB budgets.",
    whereCompetitorWins:
      "Enterprises and researchers who need sophisticated survey design, panel management, and statistical analysis. If your job is insight generation at scale, Qualtrics is the category leader.",
    otherAlternatives: [
      {
        name: "Medallia",
        slug: "medallia",
        blurb: "The other enterprise CX suite - equally powerful, equally out of SMB reach.",
      },
      {
        name: "SurveyMonkey",
        slug: "surveymonkey",
        blurb: "Simpler self-serve surveys if research - not resolution - is your goal.",
      },
      {
        name: "Alchemer",
        slug: "alchemer",
        blurb: "Flexible mid-market survey platform with workflow add-ons.",
      },
    ],
    faqs: [
      {
        q: "What is the best Qualtrics alternative for a small business?",
        a: "It depends on the job. For survey research, SurveyMonkey or Alchemer are simpler self-serve options. For complaint and feedback resolution - the operational loop of collecting, assigning, and fixing issues - FeedSolve is built specifically for SMBs, with QR-based zero-login intake and a Kanban resolution workflow from $19/month.",
      },
      {
        q: "Is FeedSolve cheaper than Qualtrics?",
        a: "Dramatically. Qualtrics is quote-priced with enterprise contracts. FeedSolve has a free plan and paid tiers between $19 and $79 per month, flat, regardless of how many people submit feedback.",
      },
      {
        q: "Does FeedSolve do NPS surveys like Qualtrics?",
        a: "FeedSolve is not a survey analytics platform - it does not focus on NPS, CSAT, or CES scoring. It is organized around who gives feedback (boards per stakeholder type) and what happens next (assignment, status, resolution, and a public tracking code). Teams that need periodic NPS measurement often run a lightweight survey tool alongside FeedSolve.",
      },
      {
        q: "How fast can I replace Qualtrics feedback collection with FeedSolve?",
        a: "The same day. Create a board, download the QR code, place it where feedback happens - on receipts, delivery notes, tables, or notice boards - and submissions flow into your resolution board immediately. There is no implementation project.",
      },
    ],
  },
  {
    slug: "inmoment",
    name: "InMoment",
    category: "enterprise-cx",
    categoryLabel: "Enterprise CX platform",
    metaTitle: "Best InMoment Alternative for Small Business (2026)",
    metaDescription:
      "InMoment targets enterprise CX programs with quote-only pricing. FeedSolve is the SMB alternative: QR-first feedback intake with a real resolution workflow, from $19/month self-serve.",
    heroSubtitle:
      "InMoment sells integrated CX intelligence to enterprises - unified signals, AI analytics, managed programs. FeedSolve skips the intelligence layer SMBs don't have staff for and delivers the resolution loop they actually need, self-serve, today.",
    quickAnswer: {
      chooseCompetitor:
        "if you are an enterprise consolidating feedback signals across many sources and want AI-driven analytics with managed program support.",
      chooseFeedsolve:
        "if you want feedback from customers, suppliers, and staff collected without logins and driven to documented resolution - at flat SMB pricing with no demo call.",
    },
    whySwitch: [
      {
        title: "You need a loop, not a lake",
        body: "InMoment's strength is unifying feedback data across sources for analysis. But unified data still needs someone to act on each item. FeedSolve is organized around action: every submission gets an owner, a status, and a tracking code the submitter can check.",
      },
      {
        title: "Sales-led everything",
        body: "Pricing on request, demo before details, implementation with program consultants. That model works for enterprise buyers; it structurally excludes the business that wants to start this week.",
      },
      {
        title: "Costs scale beyond SMB reality",
        body: "Enterprise CX contracts are sized against enterprise ROI. FeedSolve is priced against SMB reality: free to start, $19–79/month flat, regardless of submission volume.",
      },
    ],
    competitorStrengths: [
      "AI-driven text analytics on unified feedback",
      "Combines survey, review, and social signals",
      "Managed CX program support",
      "Enterprise governance and integrations",
    ],
    competitorGaps: [
      "Quote-only pricing, no self-serve tier",
      "Not built around per-item resolution ownership",
      "No public tracking codes for submitters",
      "Overkill without a dedicated CX team",
    ],
    competitorPricing:
      "Quote-only. Enterprise annual contracts sized to program scope.",
    whereCompetitorWins:
      "Enterprises that need to unify and analyze feedback signals across many channels with AI-supported analytics and program consulting. Genuine strengths - at enterprise scale and price.",
    otherAlternatives: [
      {
        name: "Medallia",
        slug: "medallia",
        blurb: "Enterprise CX suite with similar scope and procurement model.",
      },
      {
        name: "Qualtrics",
        slug: "qualtrics",
        blurb: "Enterprise XM platform, strongest on survey research and analytics.",
      },
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "Mid-market omnichannel feedback with published pricing from $49/month.",
      },
    ],
    faqs: [
      {
        q: "What is the best InMoment alternative for small businesses?",
        a: "FeedSolve, if your goal is operational: collect complaints and feedback via QR or link with no login, assign each item to a team member, and resolve it with a documented close-out the submitter can verify via their tracking code. It is self-serve from $19/month, versus InMoment's quote-only enterprise model.",
      },
      {
        q: "Does FeedSolve offer AI feedback analytics like InMoment?",
        a: "No. FeedSolve deliberately trades analytics depth for resolution clarity. Its primary metric is resolution rate - what percentage of feedback was actually fixed - rather than sentiment scores or theme clustering. For SMBs without analysts, that is usually the more actionable number.",
      },
      {
        q: "Can a small business even buy InMoment?",
        a: "In practice, rarely. InMoment's sales-led model, implementation scope, and contract sizes target enterprises. There is no published SMB tier. FeedSolve exists precisely for the segment that cannot - and should not need to - buy an enterprise CX suite.",
      },
      {
        q: "What does FeedSolve cost?",
        a: "There is a free plan to start, and paid tiers run from $19 to $79 per month, flat, based on features rather than response volume. No sales call, no annual lock-in required.",
      },
    ],
  },

  // ── 2. Omnichannel feedback / survey platforms ────────────────────────────
  {
    slug: "zonka-feedback",
    name: "Zonka Feedback",
    category: "omnichannel-survey",
    categoryLabel: "Omnichannel feedback platform",
    metaTitle: "Best Zonka Feedback Alternative for SMBs (2026)",
    metaDescription:
      "Zonka measures NPS and CSAT scores; its case IDs stay internal. FeedSolve gives every submitter a public tracking code and drives complaints to resolution - from $19/month vs Zonka's $49.",
    heroSubtitle:
      "Zonka Feedback is the closest omnichannel tool to FeedSolve - it even has case management. But Zonka's case IDs are internal-only. FeedSolve gives the submitter a public tracking code to check status themselves, and makes resolution rate the headline metric.",
    quickAnswer: {
      chooseCompetitor:
        "if you need multi-channel survey distribution (SMS, WhatsApp, kiosk) with NPS/CSAT/CES analytics and CRM integrations.",
      chooseFeedsolve:
        "if you need complaints resolved with ownership and a submitter-facing tracking code - organized by stakeholder boards, not survey channels - at less than half Zonka's entry price.",
    },
    whySwitch: [
      {
        title: "Case IDs the submitter never sees",
        body: "Zonka can create internal cases from responses, but the person who complained gets nothing to check. FeedSolve issues a public #FSV-XXXX tracking code with a status page - the single feature that turns feedback collection into visible accountability.",
      },
      {
        title: "Organized by channel, not by relationship",
        body: "Zonka structures everything around survey channels and metrics. FeedSolve structures around who is giving feedback - a customer board, a supplier board, a distributor board - and what happens to each item.",
      },
      {
        title: "$49/month entry with response-based scaling",
        body: "Zonka starts at $49/month and scales with response volume. FeedSolve has a free plan and starts at $19/month flat - more feedback does not mean a bigger bill.",
      },
    ],
    competitorStrengths: [
      "True multi-channel distribution (SMS, WhatsApp, kiosk)",
      "NPS / CSAT / CES templates and analytics",
      "CRM and helpdesk integrations",
      "Case management in higher tiers",
    ],
    competitorGaps: [
      "Case IDs are internal-only - no submitter tracking",
      "Survey-first, not resolution-first",
      "No free plan; from $49/month",
      "Response-based pricing scales against you",
    ],
    competitorPricing: "From ~$49/month, scaling with response volume. No free plan.",
    whereCompetitorWins:
      "Multi-channel survey programs at scale - SMS, WhatsApp, kiosk - and teams that genuinely need score-based analytics with CRM integration.",
    otherAlternatives: [
      {
        name: "SurveySparrow",
        slug: "surveysparrow",
        blurb: "Conversational surveys with similar score-centric analytics.",
      },
      {
        name: "SurveyMonkey",
        slug: "surveymonkey",
        blurb: "The best-known self-serve survey platform for research use cases.",
      },
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "Form builder with strong QR/link sharing but no resolution layer.",
      },
    ],
    faqs: [
      {
        q: "What is the best Zonka Feedback alternative?",
        a: "For SMB complaint resolution, FeedSolve. It matches Zonka's zero-login QR intake and adds what Zonka lacks: a public tracking code per submission, a Kanban resolution workflow as the core product rather than an enterprise add-on, and resolution rate as the primary dashboard metric - from $19/month with a free plan.",
      },
      {
        q: "Doesn't Zonka already have case management?",
        a: "It has ticket-like features in higher tiers, but the case ID stays internal - the submitter never gets a way to check status themselves. FeedSolve's public tracking page is the differentiator: submitters self-serve status checks instead of calling you.",
      },
      {
        q: "Is FeedSolve cheaper than Zonka Feedback?",
        a: "Yes. Zonka starts at $49/month with response-based scaling. FeedSolve has a free plan and flat tiers from $19 to $79 per month regardless of submission volume.",
      },
      {
        q: "When is Zonka the better choice?",
        a: "When you need multi-channel survey distribution - SMS, WhatsApp, kiosks - or NPS/CSAT/CES analytics with CRM integrations. If measurement across channels is the job, Zonka fits; if resolution is the job, FeedSolve fits.",
      },
    ],
    compareHref: "/compare/feedsolve-vs-zonka/",
  },
  {
    slug: "surveymonkey",
    name: "SurveyMonkey",
    category: "omnichannel-survey",
    categoryLabel: "Survey platform",
    metaTitle: "Best SurveyMonkey Alternative for Complaint Management (2026)",
    metaDescription:
      "SurveyMonkey collects responses; nobody owns what happens next. FeedSolve turns feedback into assigned, tracked, resolved work - QR-first, zero-login, from $19/month.",
    heroSubtitle:
      "SurveyMonkey is excellent at asking questions. But when the answer is a complaint, someone has to own it, fix it, and tell the customer. FeedSolve replaces the survey-plus-spreadsheet routine with a resolution workflow and a tracking code for every submitter.",
    quickAnswer: {
      chooseCompetitor:
        "if you run periodic research surveys - market research, employee engagement, event feedback - where responses are analyzed in aggregate.",
      chooseFeedsolve:
        "if individual responses need action: complaints from customers, suppliers, or staff that must be assigned, tracked, and demonstrably resolved.",
    },
    whySwitch: [
      {
        title: "Responses pile up, nothing gets resolved",
        body: "A SurveyMonkey response lands in a results dashboard. Turning it into action means exporting to a spreadsheet, assigning by email, and chasing follow-ups manually. FeedSolve gives each submission an owner, a status, and a documented close-out natively.",
      },
      {
        title: "The submitter gets a thank-you screen, then silence",
        body: "SurveyMonkey has no concept of telling the respondent what happened next. FeedSolve issues a tracking code and public status page, so the person who raised the issue can watch it move to resolved.",
      },
      {
        title: "Per-user pricing for a team-wide problem",
        body: "SurveyMonkey's team plans are priced per user with response limits on lower tiers. FeedSolve charges flat by plan - your whole team works the same boards without seat math.",
      },
    ],
    competitorStrengths: [
      "Best-known survey brand, easy to launch",
      "Large template library and question bank",
      "Solid aggregate analytics and exports",
      "Good for research and one-off polls",
    ],
    competitorGaps: [
      "No resolution workflow at all",
      "No assignment, status, or ownership",
      "No submitter tracking codes",
      "Per-user pricing with response limits",
    ],
    competitorPricing:
      "Individual plans from ~$39/month; team plans priced per user, billed annually.",
    whereCompetitorWins:
      "Aggregate research - market surveys, engagement studies, event feedback - where you analyze responses as a dataset rather than acting on each one individually.",
    otherAlternatives: [
      {
        name: "Typeform",
        slug: "typeform",
        blurb: "More polished survey UX, same missing resolution layer.",
      },
      {
        name: "Alchemer",
        slug: "alchemer",
        blurb: "More flexible survey logic for mid-market research teams.",
      },
      {
        name: "Google Forms",
        slug: "google-forms",
        blurb: "Free and fast - if a spreadsheet of responses is genuinely enough.",
      },
    ],
    faqs: [
      {
        q: "What is the best SurveyMonkey alternative for handling complaints?",
        a: "FeedSolve. SurveyMonkey is built to collect and analyze responses in aggregate; it has no concept of resolving an individual response. FeedSolve is built around exactly that: zero-login QR/link submission, assignment to a team member, Kanban status tracking, and a public tracking code so the submitter can check progress.",
      },
      {
        q: "Can SurveyMonkey track whether a complaint was resolved?",
        a: "Not natively. You would export responses and manage resolution in a spreadsheet or separate ticketing tool. FeedSolve tracks status, owner, and resolution rate on every submission out of the box.",
      },
      {
        q: "Is FeedSolve a survey tool?",
        a: "No - it is a feedback resolution platform. It collects open feedback and complaints through QR codes and links rather than running scored questionnaires. If you need NPS-style research, a survey tool complements FeedSolve; if you need issues fixed, FeedSolve replaces the survey-plus-spreadsheet stack.",
      },
      {
        q: "How does FeedSolve pricing compare to SurveyMonkey?",
        a: "FeedSolve has a free plan and flat tiers from $19 to $79 per month, with no per-user seats or response limits. SurveyMonkey's useful tiers start around $39/month per user with response caps on lower plans.",
      },
    ],
  },
  {
    slug: "surveysparrow",
    name: "SurveySparrow",
    category: "omnichannel-survey",
    categoryLabel: "Omnichannel survey platform",
    metaTitle: "Best SurveySparrow Alternative for SMBs (2026)",
    metaDescription:
      "SurveySparrow does conversational surveys and NPS scores. FeedSolve does resolution: QR intake, assignment, tracking codes, and a closed loop - flat pricing from $19/month.",
    heroSubtitle:
      "SurveySparrow makes surveys feel like conversations and measures how people feel. FeedSolve is built for what happens after someone tells you something is wrong: ownership, status, resolution, and a tracking code the submitter can check.",
    quickAnswer: {
      chooseCompetitor:
        "if you want conversational survey experiences with NPS tracking and multi-channel distribution for measurement programs.",
      chooseFeedsolve:
        "if feedback items are work to be done - complaints and issues that need an owner, a deadline, and a documented fix the submitter can see.",
    },
    whySwitch: [
      {
        title: "Scores don't fix anything",
        body: "SurveySparrow tells you your NPS moved. It does not tell you which supplier complaint has been open for nine days and who owns it. FeedSolve's dashboard leads with resolution rate and aging, because that is what an operator can act on.",
      },
      {
        title: "Channels instead of stakeholders",
        body: "Like most omnichannel tools, SurveySparrow organizes by distribution channel. FeedSolve organizes by relationship - separate boards for customers, suppliers, distributors, staff - each with its own QR code and workflow.",
      },
      {
        title: "Feature-gated tiers add up",
        body: "SurveySparrow's headline entry price looks low, but case-management-like features and higher response volumes push you up tiers quickly. FeedSolve's resolution workflow is the core product on every plan, including free.",
      },
    ],
    competitorStrengths: [
      "Conversational, chat-like survey UX",
      "NPS tracking and recurring surveys",
      "Multi-channel distribution",
      "Reputation management add-ons",
    ],
    competitorGaps: [
      "Survey-first; resolution features are peripheral",
      "No public tracking code for submitters",
      "Not organized around stakeholder relationships",
      "Key features gated to higher tiers",
    ],
    competitorPricing:
      "From ~$19/month for basic tiers; feedback/case features and volume push costs up quickly.",
    whereCompetitorWins:
      "Teams that want engaging, conversational survey experiences and recurring NPS measurement across channels - measurement, not resolution.",
    otherAlternatives: [
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "The omnichannel tool closest to case management - still internal-only IDs.",
      },
      {
        name: "Typeform",
        slug: "typeform",
        blurb: "The original conversational form builder.",
      },
      {
        name: "SurveyMonkey",
        slug: "surveymonkey",
        blurb: "The default choice for classic research surveys.",
      },
    ],
    faqs: [
      {
        q: "What is the best SurveySparrow alternative for complaint handling?",
        a: "FeedSolve, because complaint handling is its entire product rather than a feature. Zero-login QR and link intake, boards per stakeholder type, Kanban assignment and status, public tracking codes, and resolution rate as the headline metric - from $19/month with a free plan.",
      },
      {
        q: "Does SurveySparrow have case management?",
        a: "It has some ticketing-style capabilities in its CX product, but they are internal-facing and secondary to survey measurement. FeedSolve's resolution loop - including the submitter-facing tracking page - is the core of every plan.",
      },
      {
        q: "Can I use SurveySparrow and FeedSolve together?",
        a: "Yes, and some teams do: SurveySparrow (or a similar tool) for periodic NPS measurement, FeedSolve for the operational day-to-day of collecting and resolving individual complaints from customers, suppliers, and staff.",
      },
      {
        q: "How is FeedSolve priced?",
        a: "Free plan to start, then flat tiers from $19 to $79 per month based on features. Pricing does not scale with responses or seats, so heavy feedback months cost the same as quiet ones.",
      },
    ],
  },
  {
    slug: "alchemer",
    name: "Alchemer",
    category: "omnichannel-survey",
    categoryLabel: "Survey & feedback platform",
    metaTitle: "Best Alchemer Alternative for Small Business (2026)",
    metaDescription:
      "Alchemer is a powerful survey platform priced per user for research teams. FeedSolve is the SMB alternative for closing the loop on complaints - QR-first, flat-priced, self-serve.",
    heroSubtitle:
      "Alchemer (formerly SurveyGizmo) offers deep survey logic and workflow for research-heavy teams, priced per user. FeedSolve skips survey sophistication and delivers the thing SMBs are usually missing: a resolution loop with submitter-visible tracking.",
    quickAnswer: {
      chooseCompetitor:
        "if you need advanced survey logic, scripting, and research workflows and have users whose job is running surveys.",
      chooseFeedsolve:
        "if you need complaints and feedback from external stakeholders captured without logins and driven to documented resolution, at flat SMB pricing.",
    },
    whySwitch: [
      {
        title: "Research power you pay per seat for",
        body: "Alchemer is priced per user for teams that live in survey design. If your actual need is 'let anyone report an issue and make sure we fix it', you are paying for sophistication you will not use.",
      },
      {
        title: "Workflow bolted onto surveys",
        body: "Alchemer added workflow capabilities, but the product's center of gravity is survey collection and analysis. FeedSolve's center of gravity is the item lifecycle: submitted, assigned, in progress, resolved - visible to the submitter throughout.",
      },
      {
        title: "No front door for walk-up feedback",
        body: "FeedSolve is QR-first by design: a code on a table, delivery note, or notice board that anyone can scan and submit through with no login. That intake pattern, feeding straight into a resolution board, is not what Alchemer is built around.",
      },
    ],
    competitorStrengths: [
      "Deep survey logic, piping, and scripting",
      "Flexible research workflows",
      "Enterprise options and integrations",
      "Strong for professional researchers",
    ],
    competitorGaps: [
      "Per-user pricing aimed at research teams",
      "Not resolution-first",
      "No submitter tracking codes",
      "No QR-first walk-up intake pattern",
    ],
    competitorPricing:
      "From ~$55/user/month billed annually; higher tiers for workflow features.",
    whereCompetitorWins:
      "Professional research teams that need advanced survey logic, custom scripting, and complex questionnaire design.",
    otherAlternatives: [
      {
        name: "Qualtrics",
        slug: "qualtrics",
        blurb: "The enterprise ceiling for survey research.",
      },
      {
        name: "SurveyMonkey",
        slug: "surveymonkey",
        blurb: "Simpler, cheaper research surveys.",
      },
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "Fast form building with QR sharing, no resolution layer.",
      },
    ],
    faqs: [
      {
        q: "What is the best Alchemer alternative for complaint management?",
        a: "FeedSolve. Alchemer is a research-grade survey platform; complaint management needs a different shape of product - zero-login intake, per-item ownership, status the submitter can check, and resolution rate reporting. That is FeedSolve's entire design, from $19/month.",
      },
      {
        q: "Is FeedSolve cheaper than Alchemer?",
        a: "For teams, substantially. Alchemer runs roughly $55 per user per month billed annually. FeedSolve is flat per plan - free to start, $19 to $79 per month for the whole team - with no per-seat charges.",
      },
      {
        q: "Can FeedSolve replace Alchemer surveys?",
        a: "Only if your surveys were really complaint forms in disguise. FeedSolve collects open feedback and complaints; it does not do advanced questionnaire logic. Many SMBs discover the 'survey' they run is 90% issue intake - and that is exactly the case where FeedSolve is the better tool.",
      },
      {
        q: "How quickly can I get started with FeedSolve?",
        a: "Minutes. Sign up free, create a board for each stakeholder type, and share the link or print the QR code. Submissions arrive with tracking codes and flow into the Kanban workflow immediately.",
      },
    ],
  },

  // ── 3. Form / survey builders ─────────────────────────────────────────────
  {
    slug: "typeform",
    name: "Typeform",
    category: "form-builder",
    categoryLabel: "Form builder",
    metaTitle: "Best Typeform Alternative for Feedback Resolution (2026)",
    metaDescription:
      "Typeform stops where the real work starts: a response lands, then it's spreadsheets and manual follow-up. FeedSolve adds ownership, status, and submitter tracking - from $19/month.",
    heroSubtitle:
      "Typeform makes beautiful forms. But a beautiful complaint form still dumps responses into a list nobody owns. FeedSolve replaces the form-plus-spreadsheet-plus-follow-up stack with one system: intake, assignment, status, and a tracking code for the submitter.",
    quickAnswer: {
      chooseCompetitor:
        "if you need polished, conversational forms for lead generation, registrations, or one-off surveys where responses do not each require action.",
      chooseFeedsolve:
        "if every response is a task - a complaint or issue that needs an owner, a status, and a resolution the submitter can verify.",
    },
    whySwitch: [
      {
        title: "The form is 10% of the job",
        body: "Collecting the complaint is easy. Typeform ends there. The other 90% - who fixes it, by when, and how the customer finds out - happens in spreadsheets and email threads. FeedSolve makes that 90% the product.",
      },
      {
        title: "Response limits punish success",
        body: "Typeform's plans cap monthly responses; a busy month means upgrade prompts. FeedSolve's flat plans don't count responses - a feedback surge costs nothing extra.",
      },
      {
        title: "No closed loop with the submitter",
        body: "Typeform respondents get a thank-you screen. FeedSolve submitters get a #FSV-XXXX tracking code and a public status page - fewer 'any update?' calls, more visible accountability.",
      },
    ],
    competitorStrengths: [
      "Polished, conversational form UX",
      "Strong branding and design options",
      "Good for lead-gen and registrations",
      "Wide template gallery and integrations",
    ],
    competitorGaps: [
      "Zero resolution features - no status, no owner",
      "Monthly response limits on all plans",
      "No submitter tracking codes",
      "Gets expensive as volume grows",
    ],
    competitorPricing:
      "From ~$25/month with tight monthly response limits; costs climb with volume.",
    whereCompetitorWins:
      "Lead-gen forms, event registrations, quizzes, and one-off surveys - anywhere design polish matters and individual responses don't require follow-through.",
    otherAlternatives: [
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "More form features and better QR mechanics, same missing resolution layer.",
      },
      {
        name: "Google Forms",
        slug: "google-forms",
        blurb: "Free and instant - if a response spreadsheet is genuinely enough.",
      },
      {
        name: "SurveySparrow",
        slug: "surveysparrow",
        blurb: "Conversational surveys with NPS measurement built in.",
      },
    ],
    faqs: [
      {
        q: "What is the best Typeform alternative for complaint management?",
        a: "FeedSolve. Typeform is a form builder with no resolution layer; FeedSolve is a resolution platform with intake built in. Every submission gets a tracking code, an owner, and a Kanban status - and the submitter can check progress on a public tracking page.",
      },
      {
        q: "Is FeedSolve cheaper than Typeform?",
        a: "Usually. Typeform starts around $25/month with tight response caps that force upgrades as volume grows. FeedSolve has a free plan and flat tiers from $19 to $79 per month with no response counting.",
      },
      {
        q: "Can I keep Typeform for lead-gen and use FeedSolve for feedback?",
        a: "That is a sensible split. Typeform excels at marketing forms where aesthetics drive conversion. FeedSolve handles operational feedback - complaints, issues, suggestions - where what matters is that each item gets resolved and the submitter knows it.",
      },
      {
        q: "Do submitters need an account to use FeedSolve?",
        a: "No. Submission is zero-login via QR code or link, and status checking uses the tracking code - no account, no app install, no password. This matters especially for external stakeholders like suppliers and distributors.",
      },
    ],
    compareHref: "/compare/feedsolve-vs-typeform/",
  },
  {
    slug: "google-forms",
    name: "Google Forms",
    category: "form-builder",
    categoryLabel: "Form builder",
    metaTitle: "Best Google Forms Alternative for Complaints & Feedback (2026)",
    metaDescription:
      "Google Forms plus a spreadsheet is where complaints go to be forgotten. FeedSolve adds assignment, status, tracking codes, and resolution rate - free to start.",
    heroSubtitle:
      "Google Forms is free and instant - and it ends in a spreadsheet. Rows don't have owners, statuses, or a way to tell the customer what happened. FeedSolve keeps the zero-cost, zero-friction start and adds the entire resolution loop.",
    quickAnswer: {
      chooseCompetitor:
        "if you need a quick internal survey or signup sheet where responses are just data to skim.",
      chooseFeedsolve:
        "if responses are complaints or issues that someone must own, fix, and close out - with the submitter able to check status themselves.",
    },
    whySwitch: [
      {
        title: "The spreadsheet black hole",
        body: "Every Google Forms response becomes a spreadsheet row. Who is handling row 47? Was it resolved? Did anyone reply? Nobody knows. FeedSolve gives every submission an owner, a status column on a Kanban board, and a documented close-out.",
      },
      {
        title: "No way to close the loop",
        body: "The customer who filled in your form hears nothing unless someone remembers to email them. FeedSolve issues a tracking code automatically - submitters check progress themselves on a public status page.",
      },
      {
        title: "It looks like you don't take feedback seriously",
        body: "A bare Google Form signals 'this goes into a void'. A branded QR code that returns a tracking code signals 'we will fix this and you can watch'. Same effort to deploy; very different customer perception.",
      },
    ],
    competitorStrengths: [
      "Completely free",
      "Instant setup inside Google Workspace",
      "Familiar to everyone",
      "Fine for simple internal data collection",
    ],
    competitorGaps: [
      "Responses land in a spreadsheet, unowned",
      "No status, assignment, or workflow",
      "No submitter tracking or reply mechanism",
      "No resolution metrics of any kind",
    ],
    competitorPricing: "Free (included with Google accounts).",
    whereCompetitorWins:
      "Quick internal surveys, signup sheets, and one-off data collection where nobody needs to act on individual responses. Free is unbeatable when a spreadsheet truly is enough.",
    otherAlternatives: [
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "More powerful forms with QR sharing - still no resolution workflow.",
      },
      {
        name: "Typeform",
        slug: "typeform",
        blurb: "Prettier forms for marketing use cases.",
      },
      {
        name: "Freshdesk",
        slug: "freshdesk",
        blurb: "Helpdesk ticketing if your feedback arrives via support email.",
      },
    ],
    faqs: [
      {
        q: "What is the best Google Forms alternative for complaint management?",
        a: "FeedSolve - and it is free to start, so the usual reason for choosing Google Forms doesn't apply. You get zero-login QR/link intake like a form, plus what Forms can never do: assignment, Kanban status, public tracking codes, and a resolution rate metric.",
      },
      {
        q: "Can Google Forms track complaint status?",
        a: "Not really. You can add a status column in the linked spreadsheet and update it by hand, but there is no assignment, no notifications, no submitter visibility, and it decays the moment the team gets busy. FeedSolve automates that entire layer.",
      },
      {
        q: "Is FeedSolve free like Google Forms?",
        a: "FeedSolve has a genuinely usable free plan for getting started. Paid tiers ($19–79/month flat) add capacity and features like branded QR codes and public replies. For a working resolution loop, the free plan already beats a form-plus-spreadsheet setup.",
      },
      {
        q: "How hard is it to switch from Google Forms to FeedSolve?",
        a: "Replace the form link or QR code with your FeedSolve board's link or QR - that is the whole migration. New submissions immediately arrive with tracking codes and enter the resolution workflow.",
      },
    ],
    compareHref: "/compare/feedsolve-vs-google-forms/",
  },
  {
    slug: "jotform",
    name: "Jotform",
    category: "form-builder",
    categoryLabel: "Form builder",
    metaTitle: "Best Jotform Alternative for Feedback & Complaints (2026)",
    metaDescription:
      "Jotform nails QR and link sharing but has zero resolution concept. FeedSolve pairs QR-first intake with assignment, status, and submitter tracking codes - from $19/month.",
    heroSubtitle:
      "Jotform is the closest form builder to FeedSolve on intake mechanics - QR codes, link sharing, no respondent login. But after submission, Jotform is done and your spreadsheet-and-email routine begins. FeedSolve is built for everything after submission.",
    quickAnswer: {
      chooseCompetitor:
        "if you need versatile forms - payments, uploads, approvals, HIPAA options - where responses are records, not tasks.",
      chooseFeedsolve:
        "if responses are complaints and issues that need ownership, status tracking, and a resolution the submitter can verify with a tracking code.",
    },
    whySwitch: [
      {
        title: "Great intake, no aftermath",
        body: "Jotform matches FeedSolve on QR/link submission mechanics. But a submission's lifecycle in Jotform ends at the inbox. FeedSolve's lifecycle starts there: assigned, in progress, resolved - visible to submitter and team throughout.",
      },
      {
        title: "Approvals are not resolution",
        body: "Jotform's workflow features route records for approval. Complaint resolution is different work: triage, ownership, fixing, and closing the loop with the person who complained. FeedSolve models that loop natively, including the public tracking page.",
      },
      {
        title: "Submission limits and form counts",
        body: "Jotform's tiers cap forms and monthly submissions. FeedSolve prices flat by plan - boards, not counters, and a busy month never triggers an upgrade prompt.",
      },
    ],
    competitorStrengths: [
      "Excellent QR and link sharing mechanics",
      "Payments, uploads, and e-sign in forms",
      "Approval workflow features",
      "Large template library, HIPAA options",
    ],
    competitorGaps: [
      "Zero resolution concept post-submission",
      "No tracking codes or submitter status page",
      "No stakeholder boards or Kanban workflow",
      "Form and submission limits per tier",
    ],
    competitorPricing:
      "Free tier with tight limits; paid from ~$34–39/month with form/submission caps.",
    whereCompetitorWins:
      "Complex forms as records: payment collection, file uploads, registrations with e-signatures, regulated intake. When the form itself is the product, Jotform is excellent.",
    otherAlternatives: [
      {
        name: "Typeform",
        slug: "typeform",
        blurb: "More polished conversational forms for marketing.",
      },
      {
        name: "Google Forms",
        slug: "google-forms",
        blurb: "Free basics if a spreadsheet is enough.",
      },
      {
        name: "Uniqode",
        slug: "uniqode",
        blurb: "QR-specialist feedback forms with per-location personalization.",
      },
    ],
    faqs: [
      {
        q: "What is the best Jotform alternative for complaint handling?",
        a: "FeedSolve. It matches Jotform's QR-first, zero-login intake and adds the resolution layer Jotform lacks entirely: per-item assignment, Kanban status, public tracking codes, and resolution rate reporting - from $19/month with a free plan.",
      },
      {
        q: "Doesn't Jotform have workflows?",
        a: "It has approval flows - routing a submitted record to someone who approves or rejects it. That is not complaint resolution, which needs triage, ownership over time, submitter-visible status, and a documented fix. FeedSolve models the complaint lifecycle specifically.",
      },
      {
        q: "Can FeedSolve do payments or file uploads like Jotform?",
        a: "No - FeedSolve is not a general form builder. It is purpose-built for feedback and complaints. If you need payment forms or e-signatures, keep Jotform for those and use FeedSolve where responses need resolving.",
      },
      {
        q: "How does FeedSolve pricing compare to Jotform?",
        a: "Jotform's free tier is limited and paid plans (~$34+/month) cap forms and submissions. FeedSolve is flat: free plan, then $19 to $79 per month with no submission counting.",
      },
    ],
    compareHref: "/compare/feedsolve-vs-jotform/",
  },

  // ── 4. Product feedback / feature request boards ──────────────────────────
  {
    slug: "canny",
    name: "Canny",
    category: "feature-boards",
    categoryLabel: "Feature request board",
    metaTitle: "Best Canny Alternative Without Per-User Pricing (2026)",
    metaDescription:
      "Canny requires user accounts and charges per tracked user. FeedSolve is zero-login, flat-priced, and built for all external stakeholders - not just logged-in product users.",
    heroSubtitle:
      "Canny is a voting board for your product's logged-in users, priced per tracked user - so cost scales against engagement. FeedSolve is the opposite design: zero-login submission from any stakeholder, flat pricing regardless of how many people submit.",
    quickAnswer: {
      chooseCompetitor:
        "if you are a SaaS company that needs a public roadmap with feature voting for logged-in users.",
      chooseFeedsolve:
        "if feedback comes from people who will never create an account - customers, suppliers, distributors, staff - and each item needs resolution, not votes.",
    },
    whySwitch: [
      {
        title: "Accounts are a wall",
        body: "Canny's model assumes the submitter logs in - reasonable for SaaS users, fatal for everyone else. A supplier flagging a delivery problem or a diner reporting a cold meal will not create an account. FeedSolve is zero-login by design: scan, type, submit, get a tracking code.",
      },
      {
        title: "Per-tracked-user pricing punishes growth",
        body: "Canny charges by tracked users, so the more feedback you gather, the more you pay. FeedSolve charges flat by tier - 50 submissions or 5,000, same bill.",
      },
      {
        title: "One audience vs many",
        body: "Canny serves one audience: your product's users. FeedSolve gives each stakeholder type its own board - customer complaints, supplier issues, staff suggestions - each with its own QR code and resolution workflow.",
      },
    ],
    competitorStrengths: [
      "Public roadmap and changelog for SaaS",
      "Feature voting and user deduplication",
      "Product-team integrations (Jira, Linear)",
      "Good for prioritization by demand",
    ],
    competitorGaps: [
      "Requires submitter accounts",
      "Per-tracked-user pricing scales against you",
      "Single-audience: product users only",
      "Voting model, not resolution model",
    ],
    competitorPricing:
      "Limited free tier; paid plans from ~$79/month, scaling with tracked users.",
    whereCompetitorWins:
      "SaaS companies that specifically want public roadmap + feature voting from logged-in users. Prioritizing a product backlog by user demand is a genuinely different job, and Canny does it well.",
    otherAlternatives: [
      {
        name: "Upvoty",
        slug: "upvoty",
        blurb: "Cheaper feature-voting board with similar account-based model.",
      },
      {
        name: "Nolt",
        blurb: "Simple, affordable feedback boards for product teams.",
      },
      {
        name: "Frill",
        blurb: "Feature requests, roadmap, and announcements in one widget.",
      },
    ],
    faqs: [
      {
        q: "What is the best Canny alternative for non-SaaS businesses?",
        a: "FeedSolve. Canny's account-based voting model fits SaaS products; it does not fit restaurants, manufacturers, logistics firms, or anyone whose feedback comes from people who will never log in. FeedSolve's zero-login QR/link intake and per-item resolution workflow are built for exactly those businesses.",
      },
      {
        q: "Why does Canny get expensive?",
        a: "Canny prices by tracked users, so successful feedback programs cost more every month. FeedSolve's plans are flat ($19–79/month) regardless of how many people submit - engagement is free.",
      },
      {
        q: "Does FeedSolve have feature voting?",
        a: "No. FeedSolve is a resolution platform, not a prioritization board - each submission is an item to be assigned, worked, and closed with the submitter notified. If you need public voting on a SaaS roadmap, Canny or Upvoty fit that job better.",
      },
      {
        q: "Do FeedSolve submitters need accounts?",
        a: "Never. Submission is via QR code or link with no login, and submitters track status with their #FSV-XXXX code on a public tracking page. That single design choice removes the biggest source of feedback drop-off.",
      },
    ],
  },
  {
    slug: "upvoty",
    name: "Upvoty",
    category: "feature-boards",
    categoryLabel: "Feature request board",
    metaTitle: "Best Upvoty Alternative for External Feedback (2026)",
    metaDescription:
      "Upvoty is a voting board for logged-in product users. FeedSolve handles feedback from everyone else - zero-login QR intake with a real resolution workflow, flat pricing.",
    heroSubtitle:
      "Upvoty is an affordable feature-voting board for SaaS user bases. But if your feedback comes from customers at tables, suppliers at loading docks, or staff on the floor, voting boards are the wrong shape. FeedSolve is built for those relationships.",
    quickAnswer: {
      chooseCompetitor:
        "if you run a SaaS product and want a low-cost roadmap voting board for your logged-in users.",
      chooseFeedsolve:
        "if feedback comes from external stakeholders without accounts and each item needs an owner and a resolution, not upvotes.",
    },
    whySwitch: [
      {
        title: "Votes rank wishes; they don't fix problems",
        body: "A voting board answers 'what do users want most?' A complaint needs a different question answered: 'who is fixing this and when?' FeedSolve's Kanban workflow, assignment, and tracking codes answer that question for every submission.",
      },
      {
        title: "Login-gated feedback excludes most stakeholders",
        body: "Upvoty submitters authenticate. Your suppliers, distributors, and walk-in customers will not. FeedSolve's zero-login QR intake meets people where they are - no account, no app, no friction.",
      },
      {
        title: "One board type for one audience",
        body: "Upvoty is built around product feedback from users. FeedSolve gives you separate boards per stakeholder type, each with its own QR code, so supplier issues never mix with customer complaints.",
      },
    ],
    competitorStrengths: [
      "Affordable entry pricing",
      "Simple feature voting and roadmap",
      "Changelog and status updates for users",
      "Easy embed into SaaS products",
    ],
    competitorGaps: [
      "Submitters need accounts",
      "Voting model, not resolution model",
      "Single product-user audience",
      "No QR-first walk-up intake",
    ],
    competitorPricing: "From ~$15/month for basic boards; scales with tracked users.",
    whereCompetitorWins:
      "Budget-conscious SaaS teams that want simple roadmap voting from logged-in users without Canny's price tag.",
    otherAlternatives: [
      {
        name: "Canny",
        slug: "canny",
        blurb: "The category leader for SaaS roadmap voting.",
      },
      {
        name: "Nolt",
        blurb: "Another simple, low-cost voting board.",
      },
      {
        name: "Rapidr",
        blurb: "Feature request management with roadmap and changelog.",
      },
    ],
    faqs: [
      {
        q: "What is the best Upvoty alternative for complaint management?",
        a: "FeedSolve - because complaints are not feature requests. FeedSolve gives every submission zero-login intake, a tracking code, an owner, and a Kanban status, with resolution rate as the metric that matters. From $19/month flat, with a free plan.",
      },
      {
        q: "Can Upvoty collect feedback from people without accounts?",
        a: "Upvoty is designed around authenticated users voting on posts; anonymous walk-up submission via QR code is not its model. FeedSolve is zero-login by design and QR-first, which is what external stakeholder feedback requires.",
      },
      {
        q: "Is FeedSolve a roadmap tool?",
        a: "No. FeedSolve resolves individual feedback items; it does not run public voting or roadmaps. SaaS teams sometimes use both: a voting board for feature demand, FeedSolve for operational complaints from customers and partners.",
      },
      {
        q: "What does FeedSolve cost compared to Upvoty?",
        a: "Both start affordable, but the models differ: Upvoty scales with tracked users, while FeedSolve's tiers ($19–79/month, free plan available) are flat regardless of submitter volume.",
      },
    ],
  },

  // ── 5. Complaint / ticketing & case management ────────────────────────────
  {
    slug: "zendesk",
    name: "Zendesk",
    category: "ticketing",
    categoryLabel: "Helpdesk / ticketing",
    metaTitle: "Best Zendesk Alternative for Complaint Management (2026)",
    metaDescription:
      "Zendesk is a helpdesk stretched to fit feedback: portal-gated intake, per-agent pricing. FeedSolve is QR-first and zero-login, purpose-built for external stakeholder complaints.",
    heroSubtitle:
      "Zendesk is strong at resolution - for tickets that arrive through support channels, worked by agents in seats you pay for. FeedSolve is purpose-built to be the front door: QR and link intake with no login, feeding a resolution board without per-agent pricing.",
    quickAnswer: {
      chooseCompetitor:
        "if you run a support operation with email/chat queues, SLAs, and agents - the classic helpdesk job.",
      chooseFeedsolve:
        "if feedback comes from the physical world and external relationships - QR codes on tables, delivery notes, notice boards - and you want flat pricing instead of per-agent seats.",
    },
    whySwitch: [
      {
        title: "Intake assumes a support channel",
        body: "Zendesk expects the complaint to arrive as an email, chat, or portal ticket. A supplier at a loading dock or a guest at a table has none of those. FeedSolve's QR-first, zero-login intake is designed for exactly those moments.",
      },
      {
        title: "Per-agent pricing taxes your whole team",
        body: "Zendesk Suite runs per agent per month - involving your ops, kitchen, or warehouse leads in resolution means buying seats for each. FeedSolve is flat per plan; the whole team works the boards.",
      },
      {
        title: "A helpdesk stretched is still a helpdesk",
        body: "Repurposing Zendesk for supplier or staff feedback means fighting its support-desk assumptions: requesters, agents, SLAs, macros. FeedSolve models stakeholder boards and resolution loops natively - no configuration gymnastics.",
      },
    ],
    competitorStrengths: [
      "Mature ticketing with SLAs and automation",
      "Omnichannel support inbox (email, chat, voice)",
      "Large app marketplace and integrations",
      "Proven at support-team scale",
    ],
    competitorGaps: [
      "Intake gated behind support channels/portals",
      "Per-agent pricing scales with team size",
      "Not QR-first or zero-login by design",
      "Heavy configuration for non-support use",
    ],
    competitorPricing:
      "Suite plans from ~$55–115 per agent per month; costs scale with every seat.",
    whereCompetitorWins:
      "Real support operations: high-volume email/chat queues, SLA management, and agent workflows. If you run a support desk, Zendesk is built for you.",
    otherAlternatives: [
      {
        name: "Freshdesk",
        slug: "freshdesk",
        blurb: "Similar helpdesk model with a friendlier entry price.",
      },
      {
        name: "HappyFox",
        slug: "happyfox",
        blurb: "Ticketing with agent minimums, aimed at support teams.",
      },
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "Survey-first feedback platform with internal case features.",
      },
    ],
    faqs: [
      {
        q: "What is the best Zendesk alternative for complaint management?",
        a: "For external stakeholder complaints - customers on site, suppliers, distributors, staff - FeedSolve. It is QR-first and zero-login where Zendesk is channel- and portal-gated, and flat-priced ($19–79/month) where Zendesk charges per agent. Every submission gets a public tracking code, which Zendesk's requester model does not offer to anonymous walk-ups.",
      },
      {
        q: "Can Zendesk collect feedback via QR codes?",
        a: "You can link a QR code to a Zendesk form, but the experience remains a support-portal one, and anonymous submitters do not get a self-service way to track status without accounts and email threads. FeedSolve issues a tracking code and public status page natively.",
      },
      {
        q: "Is FeedSolve cheaper than Zendesk?",
        a: "For teams, yes. Zendesk Suite runs roughly $55–115 per agent per month, so five people involved in resolution can cost more per month than FeedSolve's top tier ($79/month flat for the whole team).",
      },
      {
        q: "Can FeedSolve replace our support desk?",
        a: "If your 'support desk' is really complaint and feedback management, yes. If you run high-volume email/chat support with SLAs and macros, keep a helpdesk for that and use FeedSolve as the front door for physical-world and external stakeholder feedback.",
      },
    ],
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    category: "ticketing",
    categoryLabel: "Helpdesk / ticketing",
    metaTitle: "Best Freshdesk Alternative for Feedback Management (2026)",
    metaDescription:
      "Freshdesk is a helpdesk for support queues, priced per agent. FeedSolve is a QR-first, zero-login feedback resolution platform with flat pricing - built for external stakeholders.",
    heroSubtitle:
      "Freshdesk handles support tickets well and starts cheap. But it still assumes complaints arrive through support channels and agents work them in paid seats. FeedSolve is the front door for feedback that starts in the physical world - QR, zero-login, flat-priced.",
    quickAnswer: {
      chooseCompetitor:
        "if you need an affordable helpdesk for email and chat support queues with agent workflows.",
      chooseFeedsolve:
        "if feedback comes from customers, suppliers, and staff who will never email support - and you want every submission tracked to resolution with a public code.",
    },
    whySwitch: [
      {
        title: "Support-channel intake misses most feedback",
        body: "The customer who had a bad experience usually does not email support - they say nothing and don't come back. A QR code at the point of experience captures what a helpdesk never sees. FeedSolve is built around that intake moment.",
      },
      {
        title: "Per-agent pricing creeps",
        body: "Freshdesk's free tier is limited and useful plans are per agent per month. Involving operations staff in resolution means more seats. FeedSolve's flat plans let everyone work the boards.",
      },
      {
        title: "Requesters vs stakeholders",
        body: "Freshdesk models a requester emailing a ticket. FeedSolve models relationships: boards per stakeholder type, anonymous mode where needed, and a tracking code so even anonymous submitters can check status.",
      },
    ],
    competitorStrengths: [
      "Affordable helpdesk entry point",
      "Email/chat ticketing with automations",
      "Knowledge base and portal features",
      "Part of the broader Freshworks suite",
    ],
    competitorGaps: [
      "Assumes support-channel intake",
      "Per-agent pricing",
      "No QR-first zero-login front door",
      "No public tracking for anonymous submitters",
    ],
    competitorPricing:
      "Limited free tier; paid from ~$15–79 per agent per month.",
    whereCompetitorWins:
      "Small support teams that need classic email/chat ticketing with automation at a reasonable per-agent price.",
    otherAlternatives: [
      {
        name: "Zendesk",
        slug: "zendesk",
        blurb: "The enterprise-grade helpdesk standard.",
      },
      {
        name: "HappyFox",
        slug: "happyfox",
        blurb: "Ticketing focused on process, with agent minimums.",
      },
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "Form-based intake if you just need submissions collected.",
      },
    ],
    faqs: [
      {
        q: "What is the best Freshdesk alternative for complaint management?",
        a: "FeedSolve, when complaints originate outside support channels. It captures feedback at the point of experience via QR or link with no login, assigns each item on a Kanban board, and gives submitters a public tracking code - flat-priced from $19/month instead of per agent.",
      },
      {
        q: "Freshdesk has a free plan - why pay for FeedSolve?",
        a: "FeedSolve also has a free plan. The difference is fit: Freshdesk free gives you an email ticket queue; FeedSolve free gives you QR-first zero-login intake with tracking codes and a resolution board. Choose by where your feedback actually comes from.",
      },
      {
        q: "Can I use Freshdesk and FeedSolve together?",
        a: "Yes. Keep Freshdesk for inbound support email/chat, and put FeedSolve QR codes where experiences happen - tables, delivery notes, sites, break rooms - so feedback that would never become a support ticket still gets captured and resolved.",
      },
      {
        q: "Does FeedSolve charge per agent like Freshdesk?",
        a: "No. FeedSolve plans are flat ($19–79/month, free plan available) - your whole team can triage, own, and resolve submissions without per-seat charges.",
      },
    ],
  },
  {
    slug: "happyfox",
    name: "HappyFox",
    category: "ticketing",
    categoryLabel: "Helpdesk / ticketing",
    metaTitle: "Best HappyFox Alternative for SMB Complaints (2026)",
    metaDescription:
      "HappyFox is agent-based ticketing with seat minimums. FeedSolve is zero-login, QR-first complaint resolution with flat pricing from $19/month - no agent seats, no portal gate.",
    heroSubtitle:
      "HappyFox brings solid ticketing process - at per-agent prices with minimum seat counts. FeedSolve delivers the resolution loop without the helpdesk baggage: QR and link intake anyone can use, boards per stakeholder type, and flat pricing.",
    quickAnswer: {
      chooseCompetitor:
        "if you want structured internal ticketing with SLAs and your complaints already arrive through support channels.",
      chooseFeedsolve:
        "if you need to capture feedback at the point of experience - no login, no portal - and drive it to documented resolution at flat SMB pricing.",
    },
    whySwitch: [
      {
        title: "Seat minimums before you start",
        body: "HappyFox pricing is per agent with minimum agent counts, which front-loads cost for a small team. FeedSolve starts free and its paid tiers are flat - no seat math at all.",
      },
      {
        title: "Portal-gated submission",
        body: "HappyFox intake typically flows through support portals, email, or embedded forms in a support context. FeedSolve's QR-first design puts the entry point in the physical world where the experience happens.",
      },
      {
        title: "Internal tickets vs submitter-visible progress",
        body: "HappyFox ticket IDs live in the agent system; the submitter interacts through email threads. FeedSolve gives every submitter a public tracking page - status checks without contacting you at all.",
      },
    ],
    competitorStrengths: [
      "Structured ticketing with SLAs",
      "Automation and canned actions",
      "Asset and task management add-ons",
      "Multi-channel support inbox",
    ],
    competitorGaps: [
      "Per-agent pricing with seat minimums",
      "Support-portal intake assumptions",
      "No QR-first anonymous submission",
      "No public tracking page for submitters",
    ],
    competitorPricing:
      "From ~$29+ per agent per month, often with multi-agent minimums.",
    whereCompetitorWins:
      "Teams that want disciplined internal ticket process - SLAs, categories, automations - for support requests arriving through conventional channels.",
    otherAlternatives: [
      {
        name: "Freshdesk",
        slug: "freshdesk",
        blurb: "Cheaper entry into classic helpdesk ticketing.",
      },
      {
        name: "Zendesk",
        slug: "zendesk",
        blurb: "The full-scale support suite.",
      },
      {
        name: "monday.com",
        blurb: "Flexible work management if routing across departments matters most.",
      },
    ],
    faqs: [
      {
        q: "What is the best HappyFox alternative for small businesses?",
        a: "FeedSolve, if the job is external feedback and complaints rather than internal support tickets. It removes both HappyFox frictions at once: intake is zero-login via QR or link, and pricing is flat ($19–79/month with a free plan) instead of per-agent with minimums.",
      },
      {
        q: "How is FeedSolve different from a helpdesk like HappyFox?",
        a: "A helpdesk assumes the complaint arrives as a ticket through a support channel and is worked by paid agent seats. FeedSolve assumes the complaint starts in the real world - a table, a delivery, a shift - and provides the QR front door, stakeholder boards, and a submitter-facing tracking code that helpdesks don't.",
      },
      {
        q: "Does FeedSolve support SLAs and automation like HappyFox?",
        a: "FeedSolve keeps workflow deliberately simple: Kanban statuses, assignment, internal notes, and public replies. If you need deep SLA machinery and automation rules, a helpdesk fits; most SMB complaint handling doesn't.",
      },
      {
        q: "What does FeedSolve cost?",
        a: "Free plan to start; paid tiers from $19 to $79 per month, flat for the whole team. No agent seats, no minimums.",
      },
    ],
  },

  // ── 6. QR-specific feedback tools ─────────────────────────────────────────
  {
    slug: "uniqode",
    name: "Uniqode",
    category: "qr-feedback",
    categoryLabel: "QR feedback tool",
    metaTitle: "Best Uniqode Alternative for QR Feedback (2026)",
    metaDescription:
      "Uniqode nails QR intake but stops at submission - no resolution loop. FeedSolve matches QR-first collection and adds assignment, status, and submitter tracking codes.",
    heroSubtitle:
      "Uniqode (formerly Beaconstac) is the QR specialist: personalized codes, per-location analytics, multi-language forms. But it is still a survey tool - feedback goes in, nothing comes out. FeedSolve matches the QR-first intake and adds the entire resolution layer.",
    quickAnswer: {
      chooseCompetitor:
        "if you need granular QR personalization - per-location, per-device, per-scan analytics - as a standalone capability.",
      chooseFeedsolve:
        "if the QR code is the front door to a resolution loop: assignment, Kanban status, public tracking codes, and resolution rate reporting.",
    },
    whySwitch: [
      {
        title: "Intake without aftermath",
        body: "Uniqode gets feedback in beautifully - and then it sits in a response list. FeedSolve treats submission as the start: every item gets an owner, a status, and a tracking code the submitter can check on a public page.",
      },
      {
        title: "QR analytics vs resolution metrics",
        body: "Uniqode tells you scan counts and locations. FeedSolve tells you resolution rate - how much of what people reported actually got fixed - which is the number that changes customer behavior.",
      },
      {
        title: "Feedback is a feature there, the product here",
        body: "Uniqode is a QR platform where feedback forms are one use case among many. FeedSolve is a feedback resolution platform where QR is the intake method - the depth is on the side you actually need.",
      },
    ],
    competitorStrengths: [
      "Granular QR personalization by location/device",
      "Scan-level analytics",
      "Multi-language form support",
      "Broad QR use cases beyond feedback",
    ],
    competitorGaps: [
      "No resolution workflow after submission",
      "No tracking codes or submitter status page",
      "No stakeholder boards or assignment",
      "Feedback is a side feature, not the product",
    ],
    competitorPricing:
      "QR platform plans from a few dollars/month; feedback features on higher tiers.",
    whereCompetitorWins:
      "Organizations that need QR infrastructure at scale - hundreds of personalized codes with per-location, per-device analytics - where feedback collection is just one of many QR use cases.",
    otherAlternatives: [
      {
        name: "Jotform",
        slug: "jotform",
        blurb: "General form builder with solid QR sharing.",
      },
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "Omnichannel surveys including kiosk and QR distribution.",
      },
      {
        name: "Google Forms",
        slug: "google-forms",
        blurb: "Free QR-linkable forms, spreadsheet endpoint.",
      },
    ],
    faqs: [
      {
        q: "What is the best Uniqode alternative for QR feedback collection?",
        a: "FeedSolve, if you want the QR code to lead somewhere. It matches the zero-login QR intake (including branded QR codes with your logo on Growth and Pro plans) and adds what Uniqode lacks entirely: assignment, Kanban resolution workflow, public tracking codes, and resolution rate reporting.",
      },
      {
        q: "Does FeedSolve support branded QR codes like Uniqode?",
        a: "Yes - FeedSolve generates QR codes per board, with logo-branded QR codes available on Growth and Pro plans. Each stakeholder board gets its own code, so supplier feedback and customer feedback stay separated at intake.",
      },
      {
        q: "When is Uniqode the better choice?",
        a: "When you need QR infrastructure itself - per-location personalization, device-aware routing, scan analytics across hundreds of codes - and feedback is only one of many QR use cases. If feedback resolution is the goal, FeedSolve is the purpose-built option.",
      },
      {
        q: "What happens after someone scans a FeedSolve QR code?",
        a: "They submit with no login and instantly receive a #FSV-XXXX tracking code. The item lands on your Kanban board, gets assigned, and moves through statuses the submitter can watch on a public tracking page until it is resolved.",
      },
    ],
  },

  // ── 7. Review / reputation management ─────────────────────────────────────
  {
    slug: "trustpilot",
    name: "Trustpilot",
    category: "reviews",
    categoryLabel: "Review platform",
    metaTitle: "Best Trustpilot Alternative for Private Feedback (2026)",
    metaDescription:
      "Trustpilot broadcasts reviews publicly; complaints become marketing damage. FeedSolve resolves issues privately with tracking codes - fix problems before they become 1-star reviews.",
    heroSubtitle:
      "Trustpilot is outward-facing: collect and display public reviews for social proof. FeedSolve is inward-facing: resolve a specific person's complaint, privately, with visible progress. Different jobs - and confusing them means complaints become public 1-star marketing.",
    quickAnswer: {
      chooseCompetitor:
        "if your goal is public reputation - displaying verified reviews to convert new prospects.",
      chooseFeedsolve:
        "if your goal is resolving individual complaints privately, with ownership and tracking - often before they ever become a public review.",
    },
    whySwitch: [
      {
        title: "Public reviews are the wrong channel for complaints",
        body: "When your only feedback channel is a public review site, every complaint is published to the world before you can act. FeedSolve gives unhappy customers a private, immediate channel with a tracking code - a genuine alternative to venting publicly.",
      },
      {
        title: "Display is not resolution",
        body: "Trustpilot lets you reply to reviews publicly, but there is no workflow behind it - no assignment, no status, no resolution tracking. FeedSolve is the operational system that actually gets issues fixed.",
      },
      {
        title: "Reputation follows resolution",
        body: "The most reliable way to better public reviews is fixing problems fast and visibly. Teams use FeedSolve to intercept and resolve issues at the point of experience - and let the satisfied outcomes flow to review sites.",
      },
    ],
    competitorStrengths: [
      "Recognized public trust signal",
      "Review collection and display widgets",
      "SEO presence for brand searches",
      "Verified review mechanics",
    ],
    competitorGaps: [
      "Outward-facing only - no resolution workflow",
      "Complaints are public by default",
      "No assignment, status, or tracking codes",
      "Paid plans get expensive quickly",
    ],
    competitorPricing:
      "Free basic profile; paid plans typically from ~$250/month.",
    whereCompetitorWins:
      "Public reputation and social proof: displaying verified reviews to convert prospects. If the goal is marketing trust, a review platform is the right tool.",
    otherAlternatives: [
      {
        name: "Yotpo",
        blurb: "Reviews plus e-commerce marketing (loyalty, SMS).",
      },
      {
        name: "Famewall",
        blurb: "Lightweight testimonial collection and display walls.",
      },
      {
        name: "Zonka Feedback",
        slug: "zonka-feedback",
        blurb: "Private survey collection if measurement is the goal.",
      },
    ],
    faqs: [
      {
        q: "Is FeedSolve a Trustpilot alternative?",
        a: "For complaint handling, yes; for public review display, no - they do different jobs. Trustpilot showcases public reviews for social proof. FeedSolve resolves individual complaints privately with assignment, status, and a tracking code. Many businesses need both, but confusing them is costly: complaints belong in a resolution system, not on a public wall.",
      },
      {
        q: "Can FeedSolve help improve our Trustpilot rating?",
        a: "Indirectly and powerfully. A QR code at the point of experience gives unhappy customers a private channel that actually responds - with a tracking code and visible progress - which intercepts many would-be 1-star reviews. Resolved customers leave better public reviews.",
      },
      {
        q: "Does FeedSolve display feedback publicly like Trustpilot?",
        a: "No. Feedback boards are managed by your team, and each submitter sees their own item's status via their tracking code. There is no public review wall - by design, since complaint resolution is a private workflow.",
      },
      {
        q: "What does FeedSolve cost compared to Trustpilot?",
        a: "Trustpilot's paid tiers typically start around $250/month. FeedSolve runs $19–79/month flat with a free plan - a fraction of the cost, for a different and complementary job.",
      },
    ],
  },
];

export const categoryLabels: Record<string, string> = {
  "enterprise-cx": "Enterprise CX platforms",
  "omnichannel-survey": "Omnichannel survey platforms",
  "form-builder": "Form & survey builders",
  "feature-boards": "Feature request boards",
  ticketing: "Helpdesk & ticketing",
  "qr-feedback": "QR feedback tools",
  reviews: "Review & reputation platforms",
};

export function getAlternative(slug: string): Alternative | undefined {
  return alternatives.find((a) => a.slug === slug);
}
