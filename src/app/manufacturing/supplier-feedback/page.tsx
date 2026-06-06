import type { Metadata } from "next";
import {
  Factory,
  QrCode,
  ShieldCheck,
  ClipboardList,
  Hash,
  Globe,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "Supplier Fault Tracking & Feedback Tool for Manufacturers",
  description:
    "Supplier fault tracking software for manufacturers. Replace WhatsApp supplier complaints and shop floor logs with a QR feedback board, tracking codes, and a documented audit trail.",
  keywords: [
    "supplier fault tracking",
    "supplier feedback tool",
    "supplier complaint management",
    "supplier quality tracking",
    "supplier defect tracking",
    "vendor feedback software",
    "manufacturing complaint management",
  ],
  openGraph: {
    title: "Supplier Feedback Tool for Manufacturers | FeedSolve",
    description:
      "QR-based supplier complaint tracking for manufacturing SMBs. Zero login, tracking codes, resolution rate dashboard.",
    url: "https://feedsolve.com/manufacturing/supplier-feedback/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/manufacturing/supplier-feedback/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Supplier Feedback Tool for Manufacturers",
  description:
    "FeedSolve supplier feedback and complaint tracking for manufacturing companies.",
  url: "https://feedsolve.com/manufacturing/supplier-feedback/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does supplier fault tracking work in FeedSolve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Suppliers or operators scan a QR code on a delivery note or at the goods-in bay and report a fault. Each fault gets a unique #FSV-XXXX tracking code and lands on your quality team's Kanban board to be assigned, prioritised, root-caused, and resolved - giving you a complete, exportable record of every supplier fault from report to resolution.",
        },
      },
      {
        "@type": "Question",
        name: "Do my suppliers need to create an account to submit feedback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Suppliers submit via a shared link or QR code on your delivery notes - no login, no account, no app. They receive a unique #FSV-XXXX tracking code and can check resolution progress at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep internal CAPA notes private from suppliers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Internal notes - root cause findings, CAPA actions, assignee comments - are visible only to your team. Suppliers see only the public reply you choose to send.",
        },
      },
    ],
  },
};

export default function ManufacturingSupplierFeedback() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Manufacturing · Supplier feedback"
        breadcrumbLabel="Supplier Feedback for Manufacturers"
        h1="Stop Managing Supplier Complaints Over WhatsApp"
        subheading="Give every supplier and shop floor team a QR code to report defects, delivery issues, quality concerns, and production line feedback - with a full resolution workflow and audit trail built in."
        quickAnswer="FeedSolve is a supplier feedback and complaint resolution platform built for manufacturing SMBs. Suppliers scan a QR code on a delivery note, while operators can submit a shop floor complaint or production line feedback from a shared QR code without logging in. Each submitter receives a tracking code. Your quality team manages every complaint through a Kanban dashboard - assign, resolve, document, and reply - with resolution rate visible at all times."
        stats={[
          { value: "2 min", label: "Setup time for your first supplier board" },
          {
            value: "Zero",
            label: "Friction - suppliers submit with no login or account",
          },
          { value: "100%", label: "Of complaints tracked with a unique code" },
          {
            value: "80%+",
            label: "Target resolution rate for healthy supplier ops",
          },
        ]}
        problemHeading="Why supplier complaints disappear in most manufacturing businesses"
        problemPoints={[
          "Suppliers report defects and operators raise shop floor complaint notes via WhatsApp - messages get buried and nobody owns the follow-up",
          "No audit trail means the same quality issue recurs because root causes are never documented",
          "Suppliers stop reporting after experiencing zero follow-up - you lose the early warning system",
          "When an audit asks for complaint records, you have nothing to show except a WhatsApp history",
          "Quality managers spend hours chasing threads instead of resolving the actual defect or recurring production line feedback",
        ]}
        collectLabel="Print the QR code on delivery notes, post it at the goods-receiving bay, or place it on the shop floor. Suppliers and operators scan and submit defects, delays, shop floor complaint reports, or production line feedback in under 60 seconds."
        trackLabel="Each supplier complaint gets a unique #FSV-XXXX tracking code. Suppliers check resolution status without calling anyone."
        assignLabel="Route to the quality officer, set priority (High / Medium / Low), and add internal CAPA notes. One owner. One deadline."
        resolveLabel="Log the root cause, send a public reply to the supplier, and mark resolved. Resolution rate updates automatically on your dashboard."
        featuresHeading="Built for manufacturing quality teams"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "QR Code on Delivery Notes",
            body: "Print a branded QR code on every delivery note or supplier briefing sheet. Suppliers scan at goods-in - no portal, no login, no email chain.",
          },
          {
            icon: <Factory size={24} />,
            title: "Manufacturing-Specific Categories",
            body: "Pre-set categories: Delivery Delay, Defective Material, Quantity Mismatch, Packaging Issue, Documentation Error, Safety Concern, Shop Floor Complaint, and Production Line Feedback. Fully customisable.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Audit Trail for ISO Compliance",
            body: "Every submission timestamped with full history - assignee, status changes, CAPA notes, resolution. Exportable for ISO 9001 and IATF 16949 audits.",
          },
          {
            icon: <ClipboardList size={24} />,
            title: "Internal CAPA Notes",
            body: "Add root cause analysis, corrective actions, and contractor notes that are only visible to your quality team - never exposed to the supplier.",
          },
          {
            icon: <Hash size={24} />,
            title: "Supplier Tracking Codes",
            body: "Suppliers receive a #FSV-XXXX code on submission. They check progress at any time without calling your quality hotline.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language Submission Forms",
            body: "Critical for manufacturers with international suppliers. Submission forms available in multiple languages - request yours and we'll add it.",
          },
        ]}
        exampleHeading="A supplier reports a batch defect - here's what happens"
        exampleScenario={[
          {
            step: "Supplier scans QR on delivery note",
            detail:
              "Reports: 'Batch B-221 - visible surface defects on 30% of units.' Submits in 45 seconds. No account needed.",
          },
          {
            step: "Tracking code #FSV-1089 generated",
            detail:
              "Supplier screenshots the code. Knows the complaint is logged and not lost in a WhatsApp thread.",
          },
          {
            step: "Quality manager notified instantly",
            detail:
              "Sees the submission in the Kanban dashboard. Assigns to Quality Officer Sarah K. Priority: High.",
          },
          {
            step: "Status changes to In Progress",
            detail:
              "Supplier checks their tracking code at end of day - sees 'In Progress - assigned to Quality Officer.' No follow-up call needed.",
          },
          {
            step: "Root cause documented internally",
            detail:
              "Sarah logs CAPA: 'Supplier switched adhesive batch. Requiring re-inspection of all B-series until resolved.' Internal only.",
          },
          {
            step: "Issue resolved - public reply sent",
            detail:
              "'Defective batch quarantined. Replacement dispatched. CAPA raised with your production team. Thank you for flagging this.'",
          },
          {
            step: "Supplier confirms via tracking page",
            detail:
              "Sees 'Resolved' with full timeline. Resolution rate dashboard updates automatically.",
          },
        ]}
        faqs={[
          {
            q: "How does supplier fault tracking work in FeedSolve?",
            a: "Supplier fault tracking in FeedSolve starts when a supplier or operator scans a QR code on a delivery note or at the goods-in bay and reports a fault - a defect, delay, or quantity mismatch. Each fault gets a unique #FSV-XXXX tracking code and lands on your quality team's Kanban board, where it is assigned an owner, a priority, and a deadline. You log the root cause and corrective action, send a public reply, and mark it resolved - giving you a complete, exportable record of every supplier fault from report to resolution.",
          },
          {
            q: "Do my suppliers need to create an account to submit feedback?",
            a: "No. Suppliers submit via a shared link or QR code on your delivery notes - no login, no account, no app installation required. They receive a unique #FSV-XXXX tracking code on submission and can check resolution progress at any time from any browser.",
          },
          {
            q: "Can I keep CAPA notes and internal actions private from suppliers?",
            a: "Yes. Internal notes - root cause findings, corrective actions, assignee comments, contractor details - are visible only to your team dashboard. Suppliers see only the public reply you deliberately send them.",
          },
          {
            q: "Is this different from a Quality Management System (QMS)?",
            a: "Yes. Enterprise QMS tools (AssurX, TrackWise) are built for regulated industries with complex compliance infrastructure. FeedSolve is built for manufacturing SMBs that need structured complaint intake, Kanban resolution, and a resolution rate metric - in under 2 minutes, without an implementation consultant.",
          },
          {
            q: "Can I run separate boards for different supplier types?",
            a: "Yes. Create one board for raw material suppliers, one for logistics partners, one for contract manufacturers. Each board has its own QR code, category set, and routing rules. All submissions appear in a single dashboard filtered by board.",
          },
          {
            q: "Does FeedSolve provide an audit trail for ISO certification purposes?",
            a: "Every submission is timestamped and stored with its complete history - status changes, internal notes, assignee, and public replies. This is exportable as a CSV for ISO 9001, IATF 16949, and customer audit requirements.",
          },
        ]}
        ctaHeading="Your first supplier board is 2 minutes away."
        ctaSub="Replace the WhatsApp thread with a structured quality workflow. Free to start."
        relatedLinks={[
          {
            href: "/restaurants/qr-feedback/",
            label: "Restaurants & F&B",
            sub: "Table-side QR feedback",
          },
          {
            href: "/logistics/delivery-feedback/",
            label: "Logistics",
            sub: "Delivery complaint tracking",
          },
          {
            href: "/real-estate/tenant-feedback/",
            label: "Real Estate",
            sub: "Tenant maintenance requests",
          },
          {
            href: "/blog/supplier-feedback-tool-manufacturers/",
            label: "Read the guide",
            sub: "Supplier feedback for manufacturers",
          },
        ]}
      />
    </>
  );
}
