import { generatePageMetadata } from "@/lib/seo/metadata";
import { clusterAlternates } from "@/lib/seo/hreflang";
import MarketLandingPage from "@/components/MarketLandingPage";
import { PRICING_TIERS } from "@/lib/seo/pricing";
import type { FAQItem } from "@/lib/seo";

const url = "https://feedsolve.com/us/complaint-management-software/";
const title = "Complaint Management System for US SMBs";
const description =
  "Complaint management software for US small businesses: QR intake, tracking codes, assignment and resolution workflows. From $19/month, 7-day free trial.";

export const metadata = generatePageMetadata({
  title,
  description,
  path: "/us/complaint-management-software/",
  alternates: clusterAlternates("complaintManagement", "/us/complaint-management-software/"),
});

const price = (name: (typeof PRICING_TIERS)[number]["name"]) =>
  `$${PRICING_TIERS.find((tier) => tier.name === name)?.price} / month`;

const faqs: FAQItem[] = [
  {
    question: "What is complaint management software?",
    answer:
      "Complaint management software gives a business one place to receive complaints, assign each one to an owner, track its status, and record how it was resolved. It replaces scattered emails, spreadsheets, form responses and chat threads, so nothing is lost and you can see which issues are still open.",
  },
  {
    question: "How much does complaint management software cost for a US small business?",
    answer:
      "FeedSolve starts with a 7-day free trial, then paid plans are billed in US dollars: Starter at $19 per month, Growth at $49 per month and Business at $79 per month. Plans are priced by boards, monthly submissions and team size rather than per-agent seats, so you can see the limit that matters before you choose.",
  },
  {
    question: "Do customers need an account to submit a complaint?",
    answer:
      "No. Customers, suppliers and staff submit through a QR code or a link without logging in, and can choose to submit anonymously. Each submission gets a tracking code so the person can check progress later without creating an account.",
  },
  {
    question: "Does FeedSolve make my business compliant with US complaint-handling rules?",
    answer:
      "No software can promise that. FeedSolve is general-purpose complaint management software, not a compliance tool for any one regulated industry. It gives you a consistent, documented process: every complaint has an owner, a status, a tracking code and a resolution trail. If your industry has specific complaint-handling requirements, confirm them with your own adviser. Audit logs are available on the Business plan.",
  },
  {
    question: "Can I run separate boards for different locations?",
    answer:
      "Yes. Each board has its own QR code and link, so a restaurant group, retailer or distributor can keep one board per location, team or stakeholder type. Starter includes 3 boards, Growth includes 10 boards plus location-based QR codes, and Business includes 20 boards.",
  },
  {
    question: "How is FeedSolve different from Freshdesk or Google Forms?",
    answer:
      "Google Forms collects responses but has no assignment, status or follow-up. Freshdesk is a helpdesk priced per agent and built around support tickets. FeedSolve is built for complaints that start in the physical world, such as a table, a delivery note or a receiving dock, with zero-login QR intake and a resolution workflow your team can run without per-agent seats.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Setup is self-serve. Start the free trial, create a board, add the categories you need, and share the QR code or link. There is no sales call or implementation project, so most teams can begin collecting complaints the same day.",
  },
];

export default function USComplaintManagementPage() {
  return (
    <MarketLandingPage
      eyebrow="US complaint management software"
      h1="Complaint Management Software for US Small Businesses"
      intro="FeedSolve helps US small businesses replace scattered emails, spreadsheets, and form responses with one workflow for collecting, assigning, tracking, and resolving complaints."
      regulationTitle="Documented resolution workflow"
      regulationBody="US SMBs may not share one federal complaint-management mandate, but documented intake and resolution helps teams respond consistently. FeedSolve keeps every complaint tied to an owner, status, tracking code, and resolution trail."
      competitorTitle="Beyond forms and spreadsheets"
      competitorBody="Google Forms and Typeform collect submissions; FeedSolve adds the workflow after submit. Teams can assign issues, add internal notes, update statuses, and let submitters follow progress without creating an account."
      price="$19/month on the Starter plan"
      industries={["Restaurants", "Manufacturing", "Retail", "Logistics"]}
      breadcrumbLabel="US Complaint Management Software"
      breadcrumbUrl={url}
      schema={{ name: title, description, inLanguage: "en-US" }}
      steps={{
        heading: "How complaint management works in FeedSolve",
        intro:
          "Most small businesses already hear complaints. The gap is what happens next. FeedSolve gives each complaint the same four steps, whoever receives it.",
        items: [
          {
            title: "Share a QR code or link",
            body: "Print a branded QR code for a table, counter, delivery note or notice board, or send the link by email or text. No app and no login, and forms work in multiple languages.",
          },
          {
            title: "Every submission gets a tracking code",
            body: "The person who reports an issue receives a unique code and can check progress on a public tracking page. They can submit anonymously if they prefer.",
          },
          {
            title: "Assign an owner and move it through a board",
            body: "Your team assigns each complaint, adds internal notes, attaches photos or files, and moves it from submitted to in progress to resolved on a Kanban board.",
          },
          {
            title: "Close the loop and watch resolution rate",
            body: "Reply to the submitter, mark the issue resolved, and track resolution rate, the share of complaints that were actually fixed, instead of only counting how many came in.",
          },
        ],
      }}
      industryDetails={{
        heading: "Complaint tracking for US restaurants, manufacturers, retailers and distributors",
        intro:
          "The same workflow fits very different businesses. These are illustrative examples of how teams in the most common US small-business settings use it.",
        items: [
          {
            name: "Restaurants",
            useCase:
              "Put a QR code on every table or receipt so guests can report a slow order, a wrong dish or a cleanliness problem before they leave a public review.",
            scenario:
              "Example: a guest scans the table code, reports a cold entree, and the shift manager sees it on the board and follows up before the next shift.",
            href: "/restaurants/qr-feedback/",
            linkLabel: "QR feedback for restaurants",
          },
          {
            name: "Manufacturing",
            useCase:
              "Replace WhatsApp threads and shop-floor notes with one record of supplier defects, late deliveries and sample reviews.",
            scenario:
              "Example: receiving flags a damaged batch, the purchasing lead is assigned, and the supplier can check the tracking code without a login.",
            href: "/manufacturing/supplier-feedback/",
            linkLabel: "Supplier fault tracking",
          },
          {
            name: "Retail",
            useCase:
              "Give each store its own board and QR code so returns, pricing errors and service problems reach the right manager.",
            scenario:
              "Example: a shopper scans the code at the register about a pricing mismatch, and the store manager resolves it and replies the same week.",
            href: "/blog/retail-customer-feedback-system/",
            linkLabel: "Retail feedback system guide",
          },
          {
            name: "Logistics",
            useCase:
              "Capture damaged-goods, missed-window and driver complaints from customers and consignees, and route each one to dispatch or the account owner.",
            scenario:
              "Example: a consignee reports a late delivery from the link on the delivery note, and dispatch updates the status until it is closed.",
            href: "/logistics/delivery-feedback/",
            linkLabel: "Delivery feedback for logistics",
          },
        ],
      }}
      pricing={{
        heading: "US pricing in USD: from $19 a month",
        intro:
          "Every plan is billed in US dollars and starts with a 7-day free trial. Plans are priced by boards, monthly submissions and team size, not per agent seat, so you can see the limits that matter before you choose.",
        rows: [
          { plan: "Starter", price: price("Starter"), boards: "3", submissions: "1,500 / month", team: "3 members", adds: "Status tracking, assignment, public replies, internal notes, email notifications, file attachments" },
          { plan: "Growth", price: price("Growth"), boards: "10", submissions: "5,000 / month", team: "10 members", adds: "Custom branding, location-based QR codes, escalation rules, advanced analytics and CSV export" },
          { plan: "Business", price: price("Business"), boards: "20", submissions: "15,000 / month", team: "Unlimited", adds: "Custom roles and permissions, audit logs, priority support" },
        ],
        note: "Growth includes everything in Starter, and Business includes everything in Growth. The 7-day trial gives full access to 2 boards for 1 team member. See the full pricing section on the homepage for annual billing.",
      }}
      prose={[
        {
          heading: "What documented resolution means, and what it does not",
          paragraphs: [
            "Documented resolution means each complaint leaves a record: who reported it, when, who owned it, what changed and how it ended. That record helps a team respond consistently, answer a customer who asks what happened, and spot the same problem coming back.",
            "It is not a legal guarantee. FeedSolve is general-purpose complaint management software, and requirements differ by industry and state. Use it to build a consistent process, and check any specific obligations that apply to your business with your own adviser.",
          ],
        },
        {
          heading: "When forms, spreadsheets and shared inboxes stop working",
          paragraphs: [
            "Small teams usually start with a form, a spreadsheet or a shared inbox. It works until the volume grows or a second location opens. Then complaints sit without an owner, two people answer the same customer, and nobody can say how many issues were actually fixed last month.",
            "A dedicated complaint tracking system fixes those specific gaps: one intake point, a named owner for every item, a visible status, and a resolution rate you can review. It is also easier to hand over when a manager leaves, because the history lives in the system rather than in someone's inbox.",
          ],
        },
        {
          heading: "Running complaints across several locations or states",
          paragraphs: [
            "Many US small businesses operate more than one site. Create a board per location, team or stakeholder type, each with its own QR code, and review them from one dashboard. Growth adds location-based QR codes and escalation rules, so an unresolved issue reaches a senior owner instead of aging quietly.",
          ],
        },
      ]}
      faqs={{ heading: "Complaint management software in the US: common questions", items: faqs }}
      related={{
        heading: "Related guides and comparisons",
        intro: "Compare the options, see how the process works in your industry, or read how other markets use the same workflow.",
        links: [
          { href: "/complaint-management-software/", label: "Complaint management software overview" },
          { href: "/customer-complaint-software/", label: "Customer complaint software" },
          { href: "/blog/complaint-management-software-smb/", label: "Complaint management software for small business" },
          { href: "/blog/complaint-resolution-workflow-smb/", label: "A complaint resolution workflow for SMBs" },
          { href: "/alternatives/freshdesk/", label: "Freshdesk alternative for small business" },
          { href: "/compare/feedsolve-vs-google-forms/", label: "FeedSolve vs Google Forms for complaints" },
          { href: "/uk/complaint-management-software/", label: "Complaint management software in the UK" },
          { href: "/au/complaint-management-software/", label: "Complaint management software in Australia" },
        ],
      }}
    />
  );
}
