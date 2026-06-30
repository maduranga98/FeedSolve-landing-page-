import type { Metadata } from "next";
import {
  Building2,
  Hash,
  Wrench,
  ClipboardList,
  ShieldCheck,
  Globe,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title: "Tenant Feedback Portal & HOA Complaint Form - Track Every Request",
  description:
    "Give tenants and HOA residents a QR code to submit maintenance requests, community complaints, and shared-area issues without calling or emailing.",
  openGraph: {
    title: "Tenant Feedback Portal & HOA Complaint Form | FeedSolve",
    description:
      "QR-based tenant feedback portal and HOA complaint form for property managers. Zero login, tracking codes, audit trail.",
    url: "https://feedsolve.com/real-estate/tenant-feedback/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/real-estate/tenant-feedback/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tenant Feedback Portal and HOA Complaint Form",
  description:
    "FeedSolve tenant feedback portal, maintenance request, and HOA complaint form tracking for property managers and real estate landlords.",
  url: "https://feedsolve.com/real-estate/tenant-feedback/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do tenants need to download an app or create an account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Tenants submit via a QR code in the lobby or a link in their welcome pack - no app, no account, no password. They receive a tracking code and can check resolution status on any browser.",
        },
      },
      {
        "@type": "Question",
        name: "Does FeedSolve provide an audit trail for maintenance disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every submission is timestamped with its full resolution history - status changes, internal notes, assignee, and public replies. This provides a verifiable record for tenant disputes and property inspections.",
        },
      },
    ],
  },
};

export default function RealEstateTenantFeedback() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Real Estate & Property · Tenant feedback"
        breadcrumbLabel="Tenant Feedback Portal"
        breadcrumbUrl="https://feedsolve.com/real-estate/tenant-feedback/"
        h1="Tenant Feedback Portal and HOA Complaint Form"
        subheading="Give tenants a QR code in the lobby or welcome pack to submit requests without calling. HOAs can share the same flow as an HOA complaint form for community issues. Track every issue to resolution with a documented audit trail."
        quickAnswer="FeedSolve is a tenant feedback portal and maintenance request tracking system for property managers, landlords, and HOA boards. Tenants scan a QR code in the lobby or click a link in their welcome letter - no login required. Residents can also use an HOA complaint form for noise, parking, landscaping, or shared-area concerns. Requests route to the property manager, who assigns to the right contractor, tracks resolution, and sends a confirmation reply. Tenants see their issue resolved via their tracking code. No phone tag. No lost work orders. Full audit trail."
        stats={[
          {
            value: "2 min",
            label: "Setup time for your first tenant feedback portal",
          },
          {
            value: "Zero",
            label: "Phone calls needed - tenants track status via code",
          },
          {
            value: "100%",
            label: "Of requests logged with timestamp and audit trail",
          },
          {
            value: "80%+",
            label:
              "Target resolution rate for professional property management",
          },
        ]}
        problemHeading="Why maintenance requests disappear in property management"
        problemPoints={[
          "Tenants submit requests by calling or WhatsApp messaging instead of a tenant feedback portal - no record, no assignment, no resolution tracking",
          "When tenants call twice about the same issue, it's because they saw no evidence the first request was received",
          "High-value tenants leave not because of the maintenance issue but because of the non-response",
          "No audit trail means maintenance disputes become 'he said, she said' with no documentation",
          "Property managers and HOA boards spend hours chasing contractors rather than tracking whether issues are resolved",
        ]}
        collectLabel="QR code in the lobby, on the welcome letter, in an HOA newsletter, or as a link in the tenancy agreement. Tenants and residents submit through a tenant feedback portal or HOA complaint form from any phone - no app, no account, no password."
        trackLabel="Each request gets a #FSV-XXXX tracking code. Tenants check progress without calling - knowing their request is in the system builds trust and reduces inbound calls."
        assignLabel="Route to the maintenance coordinator or contractor with a target resolution timeframe. Priority flagging for urgent requests - water leaks, electrical faults, security issues."
        resolveLabel="Log contractor actions, send tenant confirmation, and close the issue. Resolution rate by property gives you a weekly view of maintenance performance."
        featuresHeading="Built for tenant feedback portals and HOA complaint forms"
        features={[
          {
            icon: <Building2 size={24} />,
            title: "Lobby and Welcome Pack QR Codes",
            body: "Place QR codes in lobby notice boards, welcome letters, tenancy agreements, and HOA noticeboards. Tenants and residents submit from day one without needing a separate portal login.",
          },
          {
            icon: <Wrench size={24} />,
            title: "Property-Specific Categories",
            body: "Plumbing, Electrical, Pest Control, Noise Complaint, Security, Parking, Cleaning, HOA Complaint Form, Lift / Common Areas. Customisable per building or property type.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tenant Tracking Codes",
            body: "Tenants receive a #FSV-XXXX code on submission. They check progress at any time without calling reception - dramatically reducing inbound enquiry volume.",
          },
          {
            icon: <ClipboardList size={24} />,
            title: "Contractor Assignment",
            body: "Assign requests to maintenance contractors or internal staff with a deadline. Track whether the contractor has confirmed receipt and completed the job.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Audit Trail for Disputes",
            body: "Every request is timestamped with full history - assignee, status changes, contractor notes, and tenant reply. Exportable for tenant disputes and property inspections.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language for Diverse Tenants",
            body: "Submission forms available in multiple languages - critical for properties in multilingual communities across South Asia, the Middle East, and East Africa.",
          },
        ]}
        exampleHeading="A tenant reports a water leak - here's what happens"
        exampleScenario={[
          {
            step: "Tenant in Unit 14B scans lobby QR code",
            detail:
              "Submits: 'Water leak under kitchen sink - dripping since yesterday morning.' Category: Plumbing. Submits in 45 seconds.",
          },
          {
            step: "Tracking code #FSV-7734 generated",
            detail:
              "Tenant has proof their request was logged. Screenshots the code. No need to call reception to chase.",
          },
          {
            step: "Property manager notified instantly",
            detail:
              "Sees request in dashboard. Assigns to plumber contractor. Priority: High. Target: 24 hours.",
          },
          {
            step: "Status visible to tenant",
            detail:
              "Tenant checks tracking code next morning - sees 'In Progress - assigned to maintenance team.' Knows it hasn't been forgotten.",
          },
          {
            step: "Contractor attends and fixes the issue",
            detail:
              "Property manager logs contractor visit internally: 'Pipe connection tightened. No structural damage. Photo attached.'",
          },
          {
            step: "Public reply sent to tenant",
            detail:
              "'The pipe connection under your kitchen sink has been repaired by our maintenance team. Please check and let us know if the issue recurs.'",
          },
          {
            step: "Tenant confirms via tracking page",
            detail:
              "Sees 'Resolved' with full timeline and the contractor's reply. No phone call. No dispute. Full documented record.",
          },
        ]}
        faqs={[
          {
            q: "Do tenants need to download an app or create an account to submit a request?",
            a: "No. Tenants access the feedback form by scanning a QR code in the lobby or clicking a link in their welcome pack. No app download, no login, no password required. After submitting, they receive a unique tracking code to check the status of their request from any browser at any time.",
          },
          {
            q: "Can I run separate boards for different buildings, properties, or HOA communities?",
            a: "Yes. Each building, property, or HOA community can have its own tenant feedback portal or HOA complaint form with a unique QR code and category set. All submissions from all boards appear in a single dashboard, filterable by board, status, priority, or date.",
          },
          {
            q: "Does FeedSolve provide an audit trail for maintenance disputes or legal purposes?",
            a: "Yes. Every submission is timestamped and stored with its full resolution history - status changes, internal notes, assignee, contractor updates, and public replies. This provides a verifiable, exportable record for tenant disputes, deposit deductions, and property inspection records.",
          },
          {
            q: "Can tenants submit maintenance requests anonymously?",
            a: "Yes if you enable anonymous mode on the board. Tenants who prefer privacy can submit without providing contact information. They still receive a tracking code to check resolution progress. This is useful for noise complaints or concerns about shared facilities where tenants may not want to be identified.",
          },
          {
            q: "How does this compare to a property management platform like AppFolio or Buildium?",
            a: "AppFolio and Buildium are full property management suites covering lease management, rent collection, and accounting. Maintenance request handling is a sub-feature. FeedSolve is purpose-built for complaint resolution - zero-friction submission for tenants, Kanban workflow for property managers, full audit trail. It sets up in under 2 minutes versus days of onboarding for a full PMS.",
          },
        ]}
        ctaHeading="Every maintenance request tracked. Every tenant and HOA resident heard."
        ctaSub="Set up your first tenant feedback portal or HOA complaint form in 2 minutes. Free to start."
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
            href: "/logistics/delivery-feedback/",
            label: "Logistics",
            sub: "Delivery complaint tracking",
          },
          {
            href: "/blog/tenant-complaint-portal-property-managers/",
            label: "Read the guide",
            sub: "Tenant complaint portal guide",
          },
        ]}
      />
    </>
  );
}
