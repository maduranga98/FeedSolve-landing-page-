import type { Metadata } from "next";
import {
  Truck,
  Hash,
  MapPin,
  ClipboardList,
  Globe,
  ShieldCheck,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "Delivery Complaint Tracking for Logistics - Manage Every Route Issue",
  description:
    "Warehouse feedback, driver feedback app workflows, and 3PL feedback platform intake via QR code with no login. Track every complaint to resolution across routes.",
  openGraph: {
    title: "Delivery Complaint Tracking for Logistics | FeedSolve",
    description:
      "QR-based warehouse feedback, driver feedback app workflows, and 3PL feedback platform intake with tracking codes and route-level resolution visibility.",
    url: "https://feedsolve.com/logistics/delivery-feedback/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/logistics/delivery-feedback/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Delivery Complaint Tracking for Logistics",
  description:
    "FeedSolve delivery complaint and feedback management for logistics and distribution companies.",
  url: "https://feedsolve.com/logistics/delivery-feedback/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can drivers submit delivery complaints from their phone without logging in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Drivers scan a QR code in their vehicle cab or on the delivery manifest and submit the complaint directly from their phone. No app download, no login, no account. They receive a tracking code confirming the issue was logged.",
        },
      },
    ],
  },
};

export default function LogisticsDeliveryFeedback() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Logistics & Distribution · Delivery feedback"
        breadcrumbLabel="Delivery Complaint Tracking"
        h1="Track Every Delivery Complaint Across Every Route"
        subheading="Drivers, warehouse teams, 3PL partners, distributors, and recipients report issues via QR code - no login required. Your ops team sees every complaint in a Kanban dashboard and resolves it with a documented trail."
        quickAnswer="FeedSolve gives logistics and distribution companies a structured channel for warehouse feedback, delivery complaints, route issues, and driver reports. Use it as a lightweight driver feedback app or 3PL feedback platform: drivers scan a QR code in the cab, warehouse teams scan at loading bays, and recipients scan a code on the delivery slip to report damage or delays. Your operations team manages everything from a single dashboard - assigning, tracking, and resolving every complaint with full visibility and a resolution rate metric."
        stats={[
          {
            value: "2 min",
            label: "Setup time for your first delivery feedback board",
          },
          {
            value: "Zero",
            label:
              "Friction - no app, no login required for drivers or recipients",
          },
          {
            value: "100%",
            label: "Of complaints tracked with a unique code per submission",
          },
          {
            value: "80%+",
            label: "Target resolution rate for high-performing logistics ops",
          },
        ]}
        problemHeading="Why delivery complaints get lost in logistics operations"
        problemPoints={[
          "Drivers report issues by calling dispatch instead of a driver feedback app - no record, no assignment, no resolution tracking",
          "Recipients email or WhatsApp complaints that disappear into unmonitored inboxes",
          "Recurring route issues are invisible because complaints aren't categorised or tracked over time",
          "3PL partners and distributors absorb retailer complaints before escalating - headquarters finds out months too late",
          "No audit trail means disputed deliveries become 'he said, she said' without documentation",
        ]}
        collectLabel="QR codes in vehicle cabs, on delivery manifests, or in distributor welcome packs. Drivers and recipients scan and submit issues without leaving the cab or calling dispatch."
        trackLabel="Each complaint gets a #FSV-XXXX tracking code. Drivers and recipients can verify their issue is logged - no follow-up call to dispatch required."
        assignLabel="Routes to the route manager, account manager, or operations supervisor based on issue category and route. Priority flagging for time-sensitive delivery failures."
        resolveLabel="Log root cause, send resolution reply, mark closed. Resolution rate by route and board identifies which channels generate the most friction."
        featuresHeading="Built for warehouse feedback, 3PL, and distribution operations"
        features={[
          {
            icon: <Truck size={24} />,
            title: "Driver & Recipient Submissions",
            body: "Separate boards for driver-reported issues (cab QR codes) and recipient complaints (delivery slip QR codes). Each with its own categories and routing rules.",
          },
          {
            icon: <MapPin size={24} />,
            title: "Route-Level Visibility",
            body: "Filter your dashboard by route, region, or driver to see which areas generate the most complaints. Resolution rate by board reveals systematic problems.",
          },
          {
            icon: <ClipboardList size={24} />,
            title: "Logistics-Specific Categories",
            body: "Delivery Delay, Damaged Goods, Wrong Item, Quantity Short, Documentation Error, Driver Behaviour, Vehicle Issue. Fully customisable per board.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking Codes for Recipients",
            body: "Recipients receive a #FSV-XXXX code at submission. They check resolution status without calling your customer service line - reducing inbound call volume.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language for International Routes",
            body: "Submission forms available in multiple languages - critical for logistics operators across South Asia, the Middle East, and East Africa with multilingual drivers and recipients.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Audit Trail for Disputed Deliveries",
            body: "Every submission timestamped with full resolution history. Exportable documentation for disputed deliveries, insurance claims, and SLA performance reviews.",
          },
        ]}
        exampleHeading="A distributor reports a damaged delivery - here's what happens"
        exampleScenario={[
          {
            step: "Distributor scans QR on delivery manifest",
            detail:
              "Reports: '12 of 48 units damaged - packaging failure on pallet 3.' Submits from their phone in under a minute.",
          },
          {
            step: "Tracking code #FSV-3301 generated",
            detail:
              "Distributor knows the complaint is logged. No need to call the account manager or send a WhatsApp that may be ignored.",
          },
          {
            step: "Account manager notified instantly",
            detail:
              "Sees submission in dashboard. Assigns to logistics supervisor. Category: Damaged Goods. Priority: High.",
          },
          {
            step: "Supervisor investigates route and packing",
            detail:
              "Checks pallet records, identifies packaging failure at loading bay. Internal note: 'Pallet 3 QC failure - loading team retraining required.'",
          },
          {
            step: "Status visible to distributor",
            detail:
              "Distributor checks their tracking code - sees 'In Progress - assigned to logistics supervisor.' No phone call needed.",
          },
          {
            step: "Resolution confirmed and documented",
            detail:
              "'Replacement for 12 damaged units dispatched today. Root cause identified - packaging process updated. Claim reference: REF-4421.'",
          },
          {
            step: "Resolution rate dashboard updated",
            detail:
              "Account manager sees route-level resolution rate. Identifies that 3 complaints this month are from the same loading bay - systemic fix triggered.",
          },
        ]}
        faqs={[
          {
            q: "Can drivers submit delivery complaints from their phone without logging in?",
            a: "Yes. Drivers scan a QR code in their vehicle cab or on the delivery manifest and submit the complaint directly from their phone. No app download, no login, no account required. They receive a unique tracking code confirming the issue was logged.",
          },
          {
            q: "Can I run separate boards for different routes or stakeholder types?",
            a: "Yes. Create one board for driver-reported issues, one for recipient complaints, and one for distributor feedback. Each board has its own QR code, category set, and routing rules. All submissions appear in a single dashboard filterable by board, status, or date.",
          },
          {
            q: "Does FeedSolve provide documentation for disputed delivery claims?",
            a: "Every submission is timestamped and stored with its full resolution history - status changes, internal notes, assignee, and public replies. This is exportable as a CSV for disputed delivery claims, insurance documentation, and SLA performance reviews.",
          },
          {
            q: "How is this different from just asking recipients to email complaints?",
            a: "Email complaints arrive in an unstructured inbox with no assignment, no tracking code, no status updates, and no resolution rate metric. FeedSolve structures every complaint from the moment of submission and provides both parties - the recipient and your operations team - with a formal, auditable record of resolution.",
          },
          {
            q: "Can distributors submit feedback anonymously?",
            a: "Yes. Anonymous mode can be enabled per board. Distributors who want to flag concerns without affecting the business relationship can submit without providing contact information. They still receive a tracking code to check whether their concern was addressed.",
          },
        ]}
        ctaHeading="Full visibility across every route and every complaint."
        ctaSub="Set up your first warehouse feedback, driver feedback app, or 3PL feedback platform board in under 2 minutes. Free to start."
        relatedLinks={[
          {
            href: "/manufacturing/supplier-feedback/",
            label: "Manufacturing",
            sub: "Supplier quality complaints",
          },
          {
            href: "/restaurants/qr-feedback/",
            label: "Restaurants & F&B",
            sub: "Table-side QR feedback",
          },
          {
            href: "/real-estate/tenant-feedback/",
            label: "Real Estate",
            sub: "Tenant maintenance requests",
          },
          {
            href: "/blog/distributor-feedback-tool-fmcg-logistics/",
            label: "Read the guide",
            sub: "Distributor feedback for logistics",
          },
        ]}
      />
    </>
  );
}
