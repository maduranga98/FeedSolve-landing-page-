// Per-country content for the English-language complaint management pages
// (/ph/, /my/, /sg/, /ca/, /za/, /ke/, /ng/). Rendered by
// src/components/CountryComplaintPage.tsx.
//
// Rules for this file:
// - Every country must differ in substance (law, channels, industries, FAQs),
//   not just the country name - near-identical country pages read as doorway pages.
// - Laws are named only to explain how FeedSolve handles submitter data. Never
//   claim FeedSolve makes a business compliant with any law.
// - No customer names, numbers or quotes that are not real. Industry examples
//   are labelled illustrative on the page.
// - Prices stay in USD; do not quote exchange rates (they drift).

import type { FAQItem } from "@/lib/seo";
import type { MarketIndustry, MarketProse } from "@/components/MarketLandingPage";

export type CountryCode = "ph" | "my" | "sg" | "ca" | "za" | "ke" | "ng";

export type CountryMarket = {
  /** Used in sentences ("in the Philippines"). */
  name: string;
  /** Used in labels ("Philippines complaint management software"); defaults to `name`. */
  shortName?: string;
  region: "sea" | "africa" | "americas";
  hreflang: string;
  ogLocale: string;
  /** Without " | FeedSolve"; at most 48 characters. */
  seoTitle: string;
  /** 140-160 characters. */
  seoDescription: string;
  h1: string;
  intro: string;
  regulationTitle: string;
  regulationBody: string;
  channelTitle: string;
  channelBody: string;
  stepsIntro: string;
  stepShare: string;
  industriesHeading: string;
  industries: MarketIndustry[];
  pricingIntro: string;
  prose: MarketProse[];
  faqs: FAQItem[];
};

const NO_LOGIN_FAQ: FAQItem = {
  question: "Do customers need an account to submit a complaint?",
  answer:
    "No. Customers, suppliers and staff submit through a QR code or a link without logging in or installing an app, and can choose to submit anonymously. Each submission gets a tracking code so the person can check progress later.",
};

export const COUNTRY_MARKETS: Record<CountryCode, CountryMarket> = {
  ph: {
    name: "the Philippines",
    shortName: "Philippines",
    region: "sea",
    hreflang: "en-PH",
    ogLocale: "en_PH",
    seoTitle: "Complaint Management Software Philippines",
    seoDescription:
      "Complaint management software for Philippine SMBs: replace Messenger and Viber complaint threads with QR intake, tracking codes and owners. From $19/month.",
    h1: "Complaint Management Software for Businesses in the Philippines",
    intro:
      "Philippine customers already complain where they chat: Messenger, Viber and comment sections. FeedSolve gives those complaints one front door, a tracking code and an owner, so your team can resolve them before they turn into a public post.",
    regulationTitle: "Collect only what you need",
    regulationBody:
      "Under the Data Privacy Act of 2012, it helps to collect as little personal data as you can. FeedSolve forms make contact details optional and support anonymous submission, and every complaint keeps an audit trail. Your obligations remain your own to confirm.",
    channelTitle: "Out of the chat threads",
    channelBody:
      "Complaints sent to a page inbox or a group chat get buried under new messages and nobody owns them. FeedSolve turns each one into a tracked item with a status the customer can check, so the same issue is never answered twice or not at all.",
    stepsIntro:
      "Most Philippine SMBs already receive complaints through chat, calls and walk-ins. The gap is what happens next. FeedSolve gives every complaint the same four steps, whoever receives it.",
    stepShare:
      "Print a QR code for the counter, table, condo lobby or delivery receipt, or paste the link into a Messenger auto-reply. Customers submit from any phone browser with no app and no login.",
    industriesHeading: "Complaint tracking for Philippine restaurants, retailers, property managers and couriers",
    industries: [
      {
        name: "Restaurants and cafés",
        useCase: "A QR code on each table lets diners report a wrong order or slow service while they are still there, instead of in a public comment later.",
        scenario: "Example: a diner scans the code about a missing side dish, the shift supervisor sees it, fixes it at the table and closes it on the board.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Retail and franchise stores",
        useCase: "Give each branch its own board and QR code so pricing, returns and service complaints reach that branch manager, with head office seeing all of them.",
        scenario: "Example: a shopper reports a pricing mismatch at one mall branch, the branch manager resolves it and head office sees the resolution rate by branch.",
        href: "/blog/retail-customer-feedback-system/",
        linkLabel: "Retail feedback system guide",
      },
      {
        name: "Condominium and property management",
        useCase: "Residents report leaks, lift problems and noise from a QR code in the lobby and follow the repair with a tracking code instead of calling the admin office.",
        scenario: "Example: a unit owner reports a water leak, the building admin assigns maintenance, and the owner checks the status from the tracking page.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
      {
        name: "Couriers and delivery",
        useCase: "A link on the waybill or delivery SMS lets recipients report damaged or late parcels, routed straight to dispatch.",
        scenario: "Example: a recipient reports a crushed box from the waybill link, dispatch is assigned, and the sender sees the same tracking code.",
        href: "/logistics/delivery-feedback/",
        linkLabel: "Delivery feedback for logistics",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat, so a growing team does not pay more per person.",
    prose: [
      {
        heading: "Why complaints in chat apps go unresolved",
        paragraphs: [
          "Chat is a good way for customers to reach you and a poor way to manage what they send. A complaint in a page inbox has no owner, no status and no deadline. When the person who read it is off shift, it waits. When it is answered, nobody records how it ended.",
          "FeedSolve keeps chat as the way customers find you and moves the complaint itself into a tracked workflow. Put the FeedSolve link in your auto-reply or pinned message, and every complaint arrives with a tracking code, lands on one board and gets an owner.",
        ],
      },
      {
        heading: "Running complaints across branches and islands",
        paragraphs: [
          "Many Philippine SMBs run branches in different cities or provinces. Create a board per branch, each with its own QR code, and review them from one dashboard. Growth adds location-based QR codes and escalation rules, so an issue that sits too long at one branch reaches a senior owner.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved. It replaces complaints scattered across chat threads, email and paper logbooks.",
      },
      {
        question: "How much does FeedSolve cost in the Philippines?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can customers still message us on Messenger or Viber?",
        answer:
          "Yes. Keep your chat channels for conversation and add the FeedSolve link to your auto-reply or pinned message. When a customer has a complaint, they submit it through the link, get a tracking code and you manage it on one board.",
      },
      {
        question: "Does FeedSolve make my business compliant with the Data Privacy Act?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation: contact details are optional, anonymous submission is available, and each complaint has an audit trail. How you collect, use and keep personal data is still your responsibility, so confirm your obligations with your own adviser.",
      },
      {
        question: "Can I run one board per branch?",
        answer:
          "Yes. Each board has its own QR code and link. Starter includes 3 boards, Growth includes 10 boards plus location-based QR codes, and Business includes 20 boards.",
      },
    ],
  },

  my: {
    name: "Malaysia",
    region: "sea",
    hreflang: "en-MY",
    ogLocale: "en_MY",
    seoTitle: "Complaint Management Software Malaysia",
    seoDescription:
      "Complaint management software for Malaysian SMEs: QR intake with no login, tracking codes and a resolution workflow for customers, suppliers and residents.",
    h1: "Complaint Management Software for Malaysian SMEs",
    intro:
      "Malaysian SMEs hear complaints on WhatsApp, at the counter, from suppliers and from residents. FeedSolve puts them all on one board, gives each one an owner and a tracking code, and shows how many were actually resolved.",
    regulationTitle: "Data kept to a minimum",
    regulationBody:
      "The Personal Data Protection Act 2010 sets rules on how businesses handle personal data. FeedSolve lets people submit with optional contact details or anonymously, and keeps an audit trail per complaint. Confirm your own obligations with your adviser.",
    channelTitle: "Beyond WhatsApp groups",
    channelBody:
      "A complaint in a WhatsApp group scrolls away within the hour. FeedSolve gives it an owner, a status and a reply, while the customer or supplier follows progress with a tracking code instead of chasing you on chat.",
    stepsIntro:
      "Whether the complaint comes from a diner, a supplier in your supply chain or a strata resident, FeedSolve gives it the same four steps.",
    stepShare:
      "Print a QR code for a table, a receiving bay, a lift lobby or a delivery order, or share the link on WhatsApp. People submit from any phone browser with no app and no login.",
    industriesHeading: "Complaint tracking for Malaysian manufacturers, F&B, retail and strata management",
    industries: [
      {
        name: "Manufacturing",
        useCase: "Replace WhatsApp threads with suppliers with one record of defects, late deliveries and rejected batches, each with an owner and a status.",
        scenario: "Example: QC flags a batch out of spec, purchasing is assigned, and the supplier checks the tracking code instead of calling.",
        href: "/manufacturing/supplier-feedback/",
        linkLabel: "Supplier fault tracking",
      },
      {
        name: "F&B and cafés",
        useCase: "A QR code on each table catches complaints while the guest is still there, before they become a public review.",
        scenario: "Example: a guest reports a long wait, the outlet manager sees it on the board and follows up before the guest leaves.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Strata and property management",
        useCase: "Residents report defects and common-area problems from a QR code in the lobby and follow the repair, instead of filling the management office's inbox.",
        scenario: "Example: a resident reports a broken lift, the property manager assigns the contractor and residents see the status update.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
      {
        name: "Retail chains",
        useCase: "One board per outlet routes complaints to the right manager while head office tracks resolution across every outlet.",
        scenario: "Example: a customer reports a faulty item at one outlet, the outlet manager arranges an exchange and closes it with a reply.",
        href: "/blog/retail-customer-feedback-system/",
        linkLabel: "Retail feedback system guide",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars and start with a 7-day free trial. They are priced by boards, monthly submissions and team size rather than per agent seat.",
    prose: [
      {
        heading: "One workflow for customers, suppliers and residents",
        paragraphs: [
          "Most complaint tools assume the complainant is a customer with an email address. Malaysian SMEs also hear from suppliers, distributors, contractors and residents. FeedSolve treats each group as its own board with its own QR code, so a supplier defect and a diner's complaint never end up in the same queue.",
          "Every board feeds the same dashboard, so the owner or operations manager sees one resolution rate across the business and can tell which board is falling behind.",
        ],
      },
      {
        heading: "Reaching people who will not install an app",
        paragraphs: [
          "Asking a customer, a supplier's driver or a resident to download an app or create an account loses most complaints before they start. FeedSolve forms open in any phone browser from a QR code or a WhatsApp link, take under a minute and issue a tracking code at the end.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved. It replaces complaints scattered across WhatsApp, email and paper forms.",
      },
      {
        question: "How much does FeedSolve cost in Malaysia?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can suppliers submit complaints or quality issues too?",
        answer:
          "Yes. Create a separate supplier board with its own QR code or link. Suppliers submit without an account, get a tracking code, and your purchasing or QC team works each issue to a close.",
      },
      {
        question: "Does FeedSolve make us compliant with the PDPA?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation with optional contact details and anonymous submission, and keeps an audit trail. How you handle personal data under the Personal Data Protection Act 2010 is still your responsibility to confirm.",
      },
      {
        question: "Can submission forms be in more than one language?",
        answer:
          "Yes. FeedSolve supports multi-language submission forms, so people can submit in their own language while your team works in theirs. Check the languages you need during the free trial.",
      },
    ],
  },

  sg: {
    name: "Singapore",
    region: "sea",
    hreflang: "en-SG",
    ogLocale: "en_SG",
    seoTitle: "Complaint Management Software Singapore",
    seoDescription:
      "Complaint management software for Singapore SMEs: no-login QR intake, tracking codes, owners and resolution rate, without per-agent pricing. 7-day free trial.",
    h1: "Complaint Management Software for Singapore SMEs",
    intro:
      "Singapore SMEs run lean teams, so a complaint that sits unowned costs more than it should. FeedSolve gives every complaint one front door, an owner and a tracking code, and lets a small team see what is still open at a glance.",
    regulationTitle: "Personal data kept optional",
    regulationBody:
      "The Personal Data Protection Act 2012 governs how organisations collect and use personal data. FeedSolve makes contact details optional, supports anonymous submission and keeps an audit trail per complaint. Your own obligations are yours to confirm.",
    channelTitle: "No per-agent seats",
    channelBody:
      "Help desks charge per agent, which punishes a small team for adding a part-time manager or a second outlet. FeedSolve is priced by plan, with 3, 10 or unlimited team members, so everyone who should see a complaint can.",
    stepsIntro:
      "For a lean team, the point is not more tooling. It is making sure every complaint has an owner and an end. FeedSolve gives each one the same four steps.",
    stepShare:
      "Place a QR code on a table, counter, receipt or facility notice board, or share the link by WhatsApp or email. People submit from any phone browser with no app and no login.",
    industriesHeading: "Complaint tracking for Singapore F&B, retail, facilities and logistics",
    industries: [
      {
        name: "F&B outlets",
        useCase: "A table QR code catches complaints during the meal, so the outlet can fix them before the guest leaves a public review.",
        scenario: "Example: a diner reports a wrong order, the outlet manager is notified, replaces it and closes the complaint on the board.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Retail",
        useCase: "Each store gets its own board, so returns and service complaints reach the right manager and head office can compare stores.",
        scenario: "Example: a shopper reports an item missing from an online-order pickup, the store lead resolves it the same day.",
        href: "/blog/retail-customer-feedback-system/",
        linkLabel: "Retail feedback system guide",
      },
      {
        name: "Facilities and property management",
        useCase: "Tenants and occupants report building issues from a QR code, and the facilities team works each one with a visible status.",
        scenario: "Example: an office tenant reports an aircon fault, the facilities manager assigns a technician, and the tenant checks progress by code.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
      {
        name: "Logistics and 3PL",
        useCase: "Consignees and clients report damaged, short or late deliveries from a link on the delivery note, routed to the account owner.",
        scenario: "Example: a client reports a short shipment, the account manager is assigned and the client sees the resolution reply.",
        href: "/logistics/3pl-feedback-platform/",
        linkLabel: "3PL feedback platform",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat.",
    prose: [
      {
        heading: "Built for small teams, not contact centres",
        paragraphs: [
          "Enterprise customer-experience platforms and help desks are built for teams with dedicated agents. A Singapore SME more often has an owner, an operations lead and a few outlet managers who handle complaints alongside everything else.",
          "FeedSolve fits that shape: one board per outlet or team, a Kanban view of what is open, a named owner for each complaint and a resolution rate on the dashboard. There is no sales call or implementation project; most teams set it up the same day.",
        ],
      },
      {
        heading: "Showing customers their complaint was handled",
        paragraphs: [
          "Customers rarely mind that something went wrong as much as they mind not hearing back. Every FeedSolve submission gets a tracking code and a public status, and your team can post a reply the customer sees without an account. That visible follow-up is what keeps a complaint private instead of public.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved, instead of relying on inboxes, chats and spreadsheets.",
      },
      {
        question: "How much does FeedSolve cost in Singapore?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Is FeedSolve a help desk?",
        answer:
          "No. Help desks manage support tickets for agents, usually priced per seat. FeedSolve manages complaints and feedback that start in the physical world, at a table, counter, delivery or building, with no-login QR intake and a resolution workflow.",
      },
      {
        question: "Does FeedSolve make us compliant with the PDPA?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation with optional contact details and anonymous submission, and keeps an audit trail. Your obligations under the Personal Data Protection Act 2012 remain yours to confirm.",
      },
      {
        question: "How quickly can we start?",
        answer:
          "Setup is self-serve. Start the free trial, create a board, add your categories and print the QR code. Most teams collect their first complaint the same day.",
      },
    ],
  },

  ca: {
    name: "Canada",
    region: "americas",
    hreflang: "en-CA",
    ogLocale: "en_CA",
    seoTitle: "Complaint Management Software for Canada",
    seoDescription:
      "Complaint management software for Canadian small businesses: no-login QR intake, tracking codes and a resolution workflow, priced by plan, not per agent.",
    h1: "Complaint Management Software for Canadian Small Businesses",
    intro:
      "FeedSolve helps Canadian small businesses replace scattered emails, spreadsheets and form responses with one workflow for collecting, assigning, tracking and resolving complaints, across every location.",
    regulationTitle: "Privacy by design",
    regulationBody:
      "PIPEDA, and in Quebec Law 25, set rules on how businesses handle personal information. FeedSolve keeps contact details optional, supports anonymous submission and records an audit trail per complaint. Confirm your own obligations with your adviser.",
    channelTitle: "Beyond forms and spreadsheets",
    channelBody:
      "Forms collect submissions; nothing happens next unless someone remembers. FeedSolve adds the workflow after submit: an owner, internal notes, a status the customer can see and a resolution rate you can review.",
    stepsIntro:
      "Most Canadian small businesses already hear complaints. The gap is what happens next. FeedSolve gives each complaint the same four steps, whoever receives it.",
    stepShare:
      "Print a branded QR code for a table, counter, delivery slip or condo lobby, or send the link by email or text. No app and no login.",
    industriesHeading: "Complaint tracking for Canadian restaurants, property managers, manufacturers and retailers",
    industries: [
      {
        name: "Restaurants",
        useCase: "A QR code on every table or receipt lets guests report a problem before they leave, so you can respond before a public review.",
        scenario: "Example: a guest reports a cold dish, the shift manager sees it on the board and follows up before the end of service.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Property and condo management",
        useCase: "Tenants and owners report maintenance issues from a lobby QR code and follow the repair by tracking code instead of emailing the office.",
        scenario: "Example: a tenant reports no hot water, the property manager assigns the plumber, and the tenant sees each status change.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
      {
        name: "Manufacturing",
        useCase: "Keep one record of supplier defects, late deliveries and non-conforming parts, each with an owner and a status.",
        scenario: "Example: receiving flags damaged packaging, purchasing is assigned, and the supplier follows the tracking code without a login.",
        href: "/manufacturing/supplier-feedback/",
        linkLabel: "Supplier fault tracking",
      },
      {
        name: "Retail",
        useCase: "One board per store routes complaints to the right manager while the owner sees resolution across all stores.",
        scenario: "Example: a shopper reports a pricing error, the store manager corrects it and replies the same week.",
        href: "/blog/retail-customer-feedback-system/",
        linkLabel: "Retail feedback system guide",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars (not Canadian dollars) and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat.",
    prose: [
      {
        heading: "Serving English- and French-speaking customers",
        paragraphs: [
          "Many Canadian businesses serve customers in both official languages. FeedSolve supports multi-language submission forms so people can submit in their own language while your team works in its own. Check the languages you need during the free trial before you roll out.",
        ],
      },
      {
        heading: "When inboxes and spreadsheets stop working",
        paragraphs: [
          "Small teams usually start with a shared inbox or a spreadsheet. It works until the volume grows or a second location opens. Then complaints sit without an owner, two people answer the same customer, and nobody can say how many issues were fixed last month.",
          "A dedicated complaint tracking system fixes those gaps: one intake point, a named owner for every item, a visible status and a resolution rate you can review, with the history kept in the system rather than in someone's inbox.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved, replacing scattered emails, spreadsheets and form responses.",
      },
      {
        question: "How much does FeedSolve cost in Canada?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can customers submit in French?",
        answer:
          "FeedSolve supports multi-language submission forms. If you serve French-speaking customers, confirm the language options you need during the free trial.",
      },
      {
        question: "Does FeedSolve make us compliant with PIPEDA or Law 25?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation with optional contact details and anonymous submission, and keeps an audit trail. Your privacy obligations remain yours to confirm with your own adviser.",
      },
      {
        question: "Can I run separate boards for different locations?",
        answer:
          "Yes. Each board has its own QR code and link. Starter includes 3 boards, Growth includes 10 boards plus location-based QR codes, and Business includes 20 boards.",
      },
    ],
  },

  za: {
    name: "South Africa",
    region: "africa",
    hreflang: "en-ZA",
    ogLocale: "en_ZA",
    seoTitle: "Complaint Management Software South Africa",
    seoDescription:
      "Complaint management software for South African SMEs: resolve complaints privately with QR intake and tracking codes before they reach public review sites.",
    h1: "Complaint Management Software for South African Businesses",
    intro:
      "When South African customers feel ignored, the complaint often moves to a public review site such as Hellopeter. FeedSolve gives them a faster private route: scan a QR code, get a tracking code, and see your team resolve it.",
    regulationTitle: "POPIA-aware data handling",
    regulationBody:
      "POPIA sets conditions for processing personal information, including collecting only what you need. FeedSolve makes contact details optional, supports anonymous submission and keeps an audit trail per complaint. Your obligations are yours to confirm.",
    channelTitle: "Private before public",
    channelBody:
      "Most customers go public when there is no visible private channel or nobody replies. A QR code at the point of service and a tracking code with a visible status give them a reason to stay private while your team fixes the problem.",
    stepsIntro:
      "South African consumers have strong rights to complain and plenty of places to do it publicly. FeedSolve gives each complaint four private steps first.",
    stepShare:
      "Print a QR code for a table, till point, delivery note or the notice board of a sectional-title complex, or share the link on WhatsApp. No app, no login.",
    industriesHeading: "Complaint tracking for South African hospitality, retail, body corporates and logistics",
    industries: [
      {
        name: "Restaurants and hospitality",
        useCase: "A table or room QR code lets guests raise an issue during their visit, so it can be fixed before it is posted on a public review site.",
        scenario: "Example: a guest reports a long wait for the bill, the floor manager is notified and resolves it before the guest leaves.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Retail",
        useCase: "Each branch gets a board and QR code for returns, refunds and service complaints, with head office tracking resolution across branches.",
        scenario: "Example: a customer reports a refund not processed, the branch manager is assigned and the customer follows the tracking code.",
        href: "/blog/retail-customer-feedback-system/",
        linkLabel: "Retail feedback system guide",
      },
      {
        name: "Body corporates and property management",
        useCase: "Owners and tenants in sectional-title schemes report maintenance and common-property issues from a QR code, with a visible record of each one.",
        scenario: "Example: a resident reports a broken gate motor, the managing agent assigns a contractor and residents see the status update.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
      {
        name: "Logistics and courier",
        useCase: "Recipients report damaged, late or missing deliveries from the delivery note link, routed to the right depot.",
        scenario: "Example: a consignee reports a missed delivery window, the depot is assigned and the sender sees the same tracking code.",
        href: "/logistics/delivery-feedback/",
        linkLabel: "Delivery feedback for logistics",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat.",
    prose: [
      {
        heading: "Why a private complaint channel protects your reputation",
        paragraphs: [
          "A public review is usually the second complaint, not the first. The first was a comment to a waiter, an email or a call that went nowhere. FeedSolve catches that first complaint, gives the customer a tracking code and shows them it is being handled, which removes the main reason to go public.",
          "When a complaint does reach a public site, the FeedSolve record shows exactly what happened, who owned it and how it was resolved, so your public reply can be specific.",
        ],
      },
      {
        heading: "Documented resolution, not a legal guarantee",
        paragraphs: [
          "The Consumer Protection Act gives South African consumers clear rights, and some sectors have ombud schemes. FeedSolve is general-purpose complaint management software, not a compliance product: it gives you a consistent, documented process. Confirm any sector-specific requirements with your own adviser.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved, replacing scattered emails, WhatsApp messages and paper registers.",
      },
      {
        question: "How much does FeedSolve cost in South Africa?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars, not rand: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can FeedSolve stop complaints appearing on Hellopeter?",
        answer:
          "Nothing can stop a customer posting publicly, and you should not try. What FeedSolve does is give customers a fast private route with a visible status, so most problems are fixed before they feel the need to go public.",
      },
      {
        question: "Does FeedSolve make us POPIA compliant?",
        answer:
          "No software can do that on its own. FeedSolve supports minimal data collection with optional contact details and anonymous submission, and keeps an audit trail. Your POPIA obligations remain yours to confirm.",
      },
      {
        question: "Does it work on low-end phones and mobile data?",
        answer:
          "Submitters use a simple web form in their phone browser, with no app to download. It loads from a QR code or a WhatsApp link and takes under a minute to complete.",
      },
    ],
  },

  ke: {
    name: "Kenya",
    region: "africa",
    hreflang: "en-KE",
    ogLocale: "en_KE",
    seoTitle: "Complaint Management Software Kenya",
    seoDescription:
      "Complaint management software for Kenyan SMEs: move complaints out of WhatsApp into one board with QR intake, tracking codes and owners. 7-day free trial.",
    h1: "Complaint Management Software for Kenyan Businesses",
    intro:
      "In Kenya, complaints arrive on WhatsApp, by phone and in person, from customers, suppliers and tenants. FeedSolve gives them one front door: a QR code or link, a tracking code for the person who complained, and a named owner on your team.",
    regulationTitle: "Minimal data by default",
    regulationBody:
      "Kenya's Data Protection Act, 2019 sets principles such as collecting only the data you need. FeedSolve makes contact details optional, supports anonymous submission and keeps an audit trail per complaint. Confirm your own obligations with your adviser.",
    channelTitle: "Out of WhatsApp threads",
    channelBody:
      "WhatsApp is how customers reach you, but a complaint in a chat has no owner and no end. FeedSolve keeps WhatsApp as the way in, via a link, and turns each complaint into a tracked item your team can close.",
    stepsIntro:
      "Mobile-first customers expect a mobile-first answer. FeedSolve gives each complaint the same four steps from a phone browser, with nothing to install.",
    stepShare:
      "Print a QR code for a table, reception, a delivery note or an apartment notice board, or share the link on WhatsApp. People submit from any phone browser with no app and no login.",
    industriesHeading: "Complaint tracking for Kenyan hospitality, manufacturing, logistics and property",
    industries: [
      {
        name: "Hotels and restaurants",
        useCase: "Guests report issues from a QR code in the room or on the table, so the team can fix them during the stay rather than read about them in a review.",
        scenario: "Example: a guest reports no hot water, front office assigns maintenance and the guest sees the status on their phone.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Manufacturing and agro-processing",
        useCase: "Record supplier quality issues and distributor complaints in one place instead of a WhatsApp group, each with an owner and a status.",
        scenario: "Example: a distributor reports a short delivery, the sales lead is assigned and the distributor follows the tracking code.",
        href: "/manufacturing/supplier-feedback/",
        linkLabel: "Supplier fault tracking",
      },
      {
        name: "Logistics and transport",
        useCase: "Customers and consignees report late, damaged or missing goods from the delivery note link, routed to the right branch or route manager.",
        scenario: "Example: a consignee reports damaged cartons, the branch manager is assigned and the shipper sees the resolution.",
        href: "/logistics/delivery-feedback/",
        linkLabel: "Delivery feedback for logistics",
      },
      {
        name: "Apartments and property management",
        useCase: "Tenants report maintenance problems from a QR code in the building and follow the repair instead of calling the caretaker repeatedly.",
        scenario: "Example: a tenant reports a water shortage, the property manager assigns it and tenants see the update.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars by card and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat.",
    prose: [
      {
        heading: "One board for customers, suppliers and distributors",
        paragraphs: [
          "Many Kenyan SMEs sell through distributors and depend on suppliers as much as on end customers. FeedSolve gives each group its own board and QR code, so a distributor's short delivery and a customer's service complaint never compete in the same chat.",
          "Every board feeds one dashboard, so the owner sees a single resolution rate and which board is falling behind.",
        ],
      },
      {
        heading: "Built for phones, not desktops",
        paragraphs: [
          "The submission form is a light web page that opens from a QR code or a WhatsApp link, with nothing to install and no account to create. Your team can triage and update complaints from a phone too, so a branch manager on the move can still close the loop.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved, instead of losing them in WhatsApp chats and phone calls.",
      },
      {
        question: "How much does FeedSolve cost in Kenya?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars, not shillings: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can we keep using WhatsApp?",
        answer:
          "Yes. Keep WhatsApp for conversation and share the FeedSolve link there. When someone has a complaint, they submit it through the link, get a tracking code, and your team manages it on one board.",
      },
      {
        question: "Does FeedSolve make us compliant with the Data Protection Act?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation with optional contact details and anonymous submission, and keeps an audit trail. Your obligations under Kenya's Data Protection Act, 2019 remain yours to confirm.",
      },
      {
        question: "Can suppliers and distributors submit too?",
        answer:
          "Yes. Create separate boards for suppliers and distributors, each with its own QR code or link. They submit without an account and follow progress with a tracking code.",
      },
    ],
  },

  ng: {
    name: "Nigeria",
    region: "africa",
    hreflang: "en-NG",
    ogLocale: "en_NG",
    seoTitle: "Complaint Management Software Nigeria",
    seoDescription:
      "Complaint management software for Nigerian SMEs and distributors: QR intake with no login, tracking codes and owners for every customer and trade complaint.",
    h1: "Complaint Management Software for Nigerian Businesses",
    intro:
      "Nigerian SMEs, from FMCG distributors to restaurants and estates, handle complaints across WhatsApp, calls and branch visits. FeedSolve puts each one on a board with an owner and gives the person who complained a tracking code to follow it.",
    regulationTitle: "Collect less personal data",
    regulationBody:
      "The Nigeria Data Protection Act 2023 sets principles for processing personal data, including data minimisation. FeedSolve makes contact details optional, supports anonymous submission and keeps an audit trail. Confirm your own obligations with your adviser.",
    channelTitle: "A record, not a chat",
    channelBody:
      "When a retailer or customer complains on WhatsApp, there is no owner, no status and no proof it was handled. FeedSolve gives every complaint a tracked record, so you can show what was done and when.",
    stepsIntro:
      "Whether the complaint comes from a retailer in your trade channel, a diner or an estate resident, FeedSolve gives it the same four steps.",
    stepShare:
      "Print a QR code for a shop counter, a delivery invoice, a restaurant table or an estate gate, or share the link on WhatsApp. People submit from any phone browser with no app and no login.",
    industriesHeading: "Complaint tracking for Nigerian distributors, restaurants, logistics and estates",
    industries: [
      {
        name: "FMCG distribution",
        useCase: "Retailers and sub-distributors report short supply, damaged stock and pricing issues from a QR code on the invoice, routed to the right sales rep.",
        scenario: "Example: a retailer reports damaged cartons, the territory rep is assigned and the retailer follows the tracking code.",
        href: "/blog/distributor-feedback-tool-fmcg-logistics/",
        linkLabel: "Distributor feedback for FMCG",
      },
      {
        name: "Restaurants and QSR",
        useCase: "A QR code on the table or packaging lets customers report a wrong or late order while the branch can still fix it.",
        scenario: "Example: a customer reports a missing item on a takeaway order, the branch manager resolves it and replies.",
        href: "/restaurants/qr-feedback/",
        linkLabel: "QR feedback for restaurants",
      },
      {
        name: "Logistics and dispatch",
        useCase: "Recipients report late, damaged or failed deliveries from the waybill link, routed to the hub or rider supervisor.",
        scenario: "Example: a recipient reports a failed delivery, the hub supervisor reschedules and the sender sees the status.",
        href: "/logistics/delivery-feedback/",
        linkLabel: "Delivery feedback for logistics",
      },
      {
        name: "Estates and facility management",
        useCase: "Residents report security, power and maintenance issues from a QR code at the estate office and follow each one to resolution.",
        scenario: "Example: a resident reports a faulty street light, the facility manager assigns it and residents see the update.",
        href: "/real-estate/tenant-feedback/",
        linkLabel: "Tenant feedback for property managers",
      },
    ],
    pricingIntro:
      "Plans are billed in US dollars by card and start with a 7-day free trial. They are priced by boards, monthly submissions and team size, not per agent seat.",
    prose: [
      {
        heading: "Trade complaints are complaints too",
        paragraphs: [
          "For a distributor, the most expensive complaints often come from retailers, not end consumers: short supply, damaged stock, wrong prices. FeedSolve gives the trade channel its own board and QR code, so those complaints are tracked with the same discipline as customer ones.",
          "Each board feeds one dashboard, so management can see resolution rate by territory or branch and spot where issues stall.",
        ],
      },
      {
        heading: "A documented process, not a compliance promise",
        paragraphs: [
          "Nigerian consumers have rights under the Federal Competition and Consumer Protection Act, and data is covered by the Nigeria Data Protection Act. FeedSolve is general-purpose complaint management software: it gives you a consistent, documented process, and any sector-specific requirements are yours to confirm.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is complaint management software?",
        answer:
          "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status and record how it was resolved, instead of relying on WhatsApp chats and phone calls.",
      },
      {
        question: "How much does FeedSolve cost in Nigeria?",
        answer:
          "FeedSolve starts with a free 7-day trial. Paid plans are billed in US dollars, not naira: Starter at $19 per month, Growth at $49 per month and Business at $79 per month, with about 20% off on annual billing.",
      },
      NO_LOGIN_FAQ,
      {
        question: "Can retailers and distributors in our trade channel use it?",
        answer:
          "Yes. Create a trade board with its own QR code, for example on invoices or delivery notes. Retailers submit without an account, get a tracking code, and your sales team works each issue to a close.",
      },
      {
        question: "Does FeedSolve make us compliant with the NDPA?",
        answer:
          "No software can do that on its own. FeedSolve supports data minimisation with optional contact details and anonymous submission, and keeps an audit trail. Your obligations under the Nigeria Data Protection Act 2023 remain yours to confirm.",
      },
      {
        question: "Can I run one board per branch or territory?",
        answer:
          "Yes. Starter includes 3 boards, Growth includes 10 boards plus location-based QR codes and escalation rules, and Business includes 20 boards.",
      },
    ],
  },
};
