import type { Metadata } from "next";
import {
  Inbox,
  QrCode,
  Hash,
  UserCheck,
  BarChart3,
  Globe,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/complaint-management-software/";

export const metadata: Metadata = {
  title: "Complaint Management Software for Small Business",
  description:
    "Complaint management software that collects, assigns, tracks, and resolves every complaint. QR or link intake, no login to submit, tracking codes, and a resolution dashboard. Free to start.",
  keywords: [
    "complaint management software",
    "complaint management system",
    "customer complaint software",
    "complaint tracking software",
    "complaint handling software",
    "online complaint management system",
    "complaints management software",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Complaint Management Software for Small Business | FeedSolve",
    description:
      "Collect, assign, track, and resolve every complaint from one dashboard. QR or link intake, no login to submit, tracking codes. Free to start.",
    url: URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is complaint management software?",
    a: "Complaint management software is a tool for collecting, organising, assigning, and resolving customer or staff complaints in one place. Instead of complaints scattered across email, WhatsApp, and spreadsheets, every submission gets logged, owned, tracked to resolution, and measured - so nothing falls through the cracks.",
  },
  {
    q: "What is the best complaint management software for a small business?",
    a: "The best complaint management software for an SMB is one you can set up in minutes without a consultant - with no-login intake, assignment and workflow, a tracking code per complaint, and a visible resolution rate. FeedSolve is free to start and built specifically for small and mid-sized teams rather than enterprises.",
  },
  {
    q: "Is there free complaint management software?",
    a: "Yes. FeedSolve is free to start with no credit card required. You can create a complaint board, generate a QR code or link, and begin collecting and resolving complaints in minutes, then upgrade only when you need more.",
  },
  {
    q: "How is complaint management software different from a help desk like Zendesk?",
    a: "Enterprise help desks are built around email ticketing and require setup, seats, and training. FeedSolve focuses on the SMB complaint loop: frictionless QR or link intake with no login for the submitter, a simple Kanban workflow, and a resolution rate metric - without the cost or complexity.",
  },
  {
    q: "Do customers need an account to submit a complaint?",
    a: "No. Customers, suppliers, and staff submit by scanning a QR code or opening a link - no login, no app. Each submission produces a unique tracking code so the submitter can follow progress while your team manages everything from one dashboard.",
  },
  {
    q: "Can I track whether complaints actually get resolved?",
    a: "Yes. Every complaint moves through a Kanban workflow from received to resolved, and your dashboard shows a live resolution rate - the percentage of complaints your team has closed. It is the clearest measure of whether your complaint process is actually working.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complaint Management Software for Small Business",
  description:
    "FeedSolve is complaint management software for SMBs: QR or link intake, no-login submission, tracking codes, assignment, resolution workflow, and a resolution rate dashboard.",
  url: URL,
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function ComplaintManagementSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Complaint Management Software"
        breadcrumbLabel="Complaint Management Software"
        h1="Complaint Management Software That Actually Closes the Loop"
        subheading="Collect, assign, track, and resolve every complaint from one dashboard - without the cost or complexity of enterprise help desks."
        quickAnswer="FeedSolve is complaint management software for small and mid-sized businesses. Customers, suppliers, and staff submit complaints by scanning a QR code or opening a link - no login, no app, in any language. Each complaint gets a unique tracking code, then your team assigns it, moves it through a Kanban workflow, and resolves it with a full audit trail. A live resolution rate shows whether your process is actually working. Free to start, no credit card."
        stats={[
          { value: "0", label: "Logins needed to submit a complaint" },
          { value: "100%", label: "Of complaints tracked to resolution" },
          { value: "2 min", label: "To set up your first complaint board" },
          { value: "80%+", label: "Target resolution rate for healthy teams" },
        ]}
        problemHeading="Why complaints slip through the cracks in most SMBs"
        problemPoints={[
          "Complaints arrive across WhatsApp, email, paper forms, and verbal reports - with no single owner",
          "Without assignment, complaints fall between team members and quietly go unresolved",
          "Submitters have no way to check progress, so they assume nothing happened and churn or leave a bad review",
          "Nobody can answer 'how many complaints did we actually resolve?' because it's never measured",
          "Enterprise complaint systems are too expensive and complex for a team that just needs the basics done well",
        ]}
        collectLabel="Share a branded QR code or link on receipts, tables, delivery notes, or your website. Anyone submits a complaint in under 60 seconds - no login, no account, in any language."
        trackLabel="Every complaint gets a unique #FSV-XXXX tracking code, so submitters can check progress anytime without calling or emailing your team."
        assignLabel="Route each complaint to the right owner with a priority level and internal notes the customer never sees. One owner, one deadline."
        resolveLabel="Move it to Resolved, send a public reply, and close the loop. Your resolution rate updates automatically on the dashboard."
        featuresHeading="Everything you need to manage complaints - nothing you don't"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "No-login QR & link intake",
            body: "Collect complaints via a branded QR code or shareable link. Customers, suppliers, and staff submit in seconds with no account or app.",
          },
          {
            icon: <Inbox size={24} />,
            title: "One dashboard for every complaint",
            body: "Stop chasing WhatsApp threads and shared inboxes. Every complaint lands in one place, organised on a Kanban board from received to resolved.",
          },
          {
            icon: <UserCheck size={24} />,
            title: "Assignment & workflow",
            body: "Assign each complaint to an owner, set a priority, add internal notes, and move it through clear stages so nothing stalls.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code per complaint",
            body: "Each submission gets a unique tracking code so submitters can follow progress - without logging in or contacting your team.",
          },
          {
            icon: <BarChart3 size={24} />,
            title: "Resolution rate dashboard",
            body: "See how many complaints you receive and how many get closed. Your resolution rate is the real health metric of the whole process.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-language forms",
            body: "Let customers and suppliers submit in their own language while your team manages everything in yours - ideal for diverse markets.",
          },
        ]}
        exampleHeading="A customer reports a problem - here's what happens"
        exampleScenario={[
          {
            step: "Customer scans the QR code on their receipt",
            detail:
              "Submits: 'My order was missing two items.' Takes 40 seconds. No account needed.",
          },
          {
            step: "Tracking code #FSV-1184 generated",
            detail:
              "They screenshot the code and know the complaint is logged - not lost in an inbox.",
          },
          {
            step: "Manager is notified instantly",
            detail:
              "Sees it on the dashboard, assigns it to the store lead, sets priority High.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The customer checks their code and sees it's being handled - no follow-up call needed.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Missing items refunded and dispatched. Sorry for the mix-up.' Resolution rate updates automatically.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Start managing complaints the right way today"
        ctaSub="Create a complaint board, generate a QR code, and start resolving in minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/blog/complaint-management-software-smb/",
            label: "Buyer's guide",
            sub: "What to look for before you buy",
          },
          {
            href: "/blog/complaint-resolution-workflow-smb/",
            label: "Resolution workflow",
            sub: "The 5-stage Kanban model",
          },
          {
            href: "/blog/feedback-resolution-rate/",
            label: "Resolution rate",
            sub: "The metric most SMBs miss",
          },
          {
            href: "/uk/complaint-management-software/",
            label: "UK & regulated teams",
            sub: "Complaint handling in the UK",
          },
        ]}
      />
    </>
  );
}
