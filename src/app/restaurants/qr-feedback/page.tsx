import type { Metadata } from "next";
import {
  QrCode,
  Smile,
  MessageSquare,
  Hash,
  Globe,
  Palette,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

export const metadata: Metadata = {
  title:
    "QR Code Feedback for Restaurants - Catch Complaints Before Google Reviews",
  description:
    "Place a branded QR code on every table. Guests report issues in 30 seconds, your team resolves them instantly, and the loop closes before anyone posts a review.",
  openGraph: {
    title: "QR Code Feedback for Restaurants | FeedSolve",
    description:
      "Table-side QR feedback for restaurants and hotels. Zero login, tracking codes, resolution before the review.",
    url: "https://feedsolve.com/restaurants/qr-feedback/",
    type: "website",
  },
  alternates: { canonical: "https://feedsolve.com/restaurants/qr-feedback/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "QR Code Feedback for Restaurants",
  description:
    "FeedSolve table-side QR feedback for restaurants, hotels, and F&B businesses.",
  url: "https://feedsolve.com/restaurants/qr-feedback/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I put the QR code on every table?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - table placement drives the highest scan rate because it's proximate to the experience. You can also place codes at the counter, on receipts, or at the entrance for takeaway feedback.",
        },
      },
      {
        "@type": "Question",
        name: "Can a guest track whether their complaint was resolved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every guest receives a unique tracking code on submission. They visit the public tracking page at any time to see the current status and any reply from your team - no account needed.",
        },
      },
    ],
  },
};

export default function RestaurantsQrFeedback() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Restaurants & Hotels · QR feedback"
        breadcrumbLabel="QR Feedback for Restaurants"
        breadcrumbUrl="https://feedsolve.com/restaurants/qr-feedback/"
        h1="Catch Guest Complaints Before They Hit Google"
        subheading="A branded QR code on every table gives guests a private outlet to report issues in 30 seconds. Your team resolves them before anyone writes a review."
        quickAnswer="FeedSolve places a QR code on your tables, counters, or receipts. Guests scan, describe their issue, and receive a tracking code - no login, no app, no friction. Your floor manager sees it instantly in a Kanban dashboard, assigns it to the right person, and sends a reply. The guest sees 'Resolved' on their tracking page. The review never gets written."
        stats={[
          {
            value: "30 sec",
            label: "Average time for a guest to submit feedback via QR",
          },
          {
            value: "Zero",
            label: "Friction - no app, no login, no account required",
          },
          {
            value: "3×",
            label: "More loyalty from a resolved complaint vs. no complaint",
          },
          {
            value: "80%+",
            label: "Target resolution rate for professional F&B operations",
          },
        ]}
        problemHeading="Why guest complaints keep becoming public reviews"
        problemPoints={[
          "Guests who experience a problem rarely raise it with a server - the social barrier is too high",
          "Verbal complaints to staff get forgotten by shift end with no record or follow-up",
          "A dissatisfied guest who leaves silently writes the Google review at home that evening",
          "No structured feedback channel means managers never know about recurring kitchen or service issues",
          "Paper comment cards end up unread in a drawer - no tracking, no assignment, no resolution",
        ]}
        collectLabel="Laminated QR cards on every table, at the counter, or on receipts. Guests scan and describe their issue in under 30 seconds - no login, no app, no social awkwardness of flagging a server."
        trackLabel="Each submission gets a unique #FSV-XXXX tracking code. Guests check whether their complaint was acted on without calling the restaurant."
        assignLabel="Routes to the floor manager or kitchen supervisor based on category. Manager sees it during service and acts immediately - before the guest leaves."
        resolveLabel="Reply to the guest, update status to Resolved. Guest sees it on their tracking page. Resolution rate feeds your weekly ops report."
        featuresHeading="Built for restaurants, hotels, and F&B chains"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "Table-Side QR Codes",
            body: "Branded QR cards for tables, counters, and receipts. Scan-to-submit in 30 seconds. Place them anywhere a guest experience happens.",
          },
          {
            icon: <Smile size={24} />,
            title: "F&B-Specific Categories",
            body: "Food Quality, Service, Wait Time, Cleanliness, Noise, Billing, Suggestion. Fully customisable per location or dining area.",
          },
          {
            icon: <MessageSquare size={24} />,
            title: "Instant Manager Notification",
            body: "New submissions trigger an email to the manager on duty. Issues are visible in the Kanban dashboard during service - not at the end-of-week review.",
          },
          {
            icon: <Hash size={24} />,
            title: "Guest Tracking Codes",
            body: "Guests receive a tracking code at submission. If they follow up, they use the code - not a phone call. Builds trust without adding staff workload.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language for International Guests",
            body: "Submission forms available in multiple languages. Critical for tourist-heavy locations or multinational hotel brands across South Asia and the Middle East.",
          },
          {
            icon: <Palette size={24} />,
            title: "Branded QR Codes",
            body: "Add your restaurant or hotel logo and brand colours to the QR code. Looks professional on table cards and fits your existing collateral. Available on Growth and Pro plans.",
          },
        ]}
        exampleHeading="A diner reports a cold dish - here's what happens"
        exampleScenario={[
          {
            step: "Guest scans the QR card on Table 12",
            detail:
              "Selects category: Food Quality. Writes: 'Fish was cold and undercooked.' Submits in 35 seconds. No app, no login.",
          },
          {
            step: "Tracking code #FSV-2204 generated",
            detail:
              "Guest has proof their complaint was logged. No need to flag a server or leave a review to feel heard.",
          },
          {
            step: "Floor manager notified during service",
            detail:
              "Sees submission in dashboard. Assigns to Head Chef. Category: Food Quality. Priority: High.",
          },
          {
            step: "Kitchen addresses the issue",
            detail:
              "Head Chef identifies the issue with dish temperature during a busy service. Service recovery initiated for table.",
          },
          {
            step: "Internal note added",
            detail:
              "Manager logs: 'Fish holding temperature issue on Friday peak - retrained team on 75°C serving check.' Internal only.",
          },
          {
            step: "Public reply sent to guest",
            detail:
              "'We're sorry about your experience. We've addressed this with our kitchen team and would love to have you back. Complimentary dessert on your next visit.'",
          },
          {
            step: "Guest checks their tracking code",
            detail:
              "Sees 'Resolved' with the reply. The Google review never gets written. Guest returns the following weekend.",
          },
        ]}
        faqs={[
          {
            q: "Should I put the QR code on every table?",
            a: "Yes - table placement during the dining experience drives the highest scan rates because the feedback impulse is strongest at the point of the experience. You can also place codes at the counter or on receipts for takeaway feedback. Multi-location chains can run separate boards per location with unique QR codes.",
          },
          {
            q: "Can a guest track whether their complaint was resolved?",
            a: "Yes. Every guest receives a unique tracking code (e.g., #FSV-2204) on submission. They visit the public tracking page at any time to see the current status and any reply from your team - no account or login required.",
          },
          {
            q: "What if a guest submits abusive or irrelevant content?",
            a: "Your team can close a submission without issuing a public reply. Internal notes allow you to flag and categorise the submission appropriately. The submission is logged but does not require escalation or response.",
          },
          {
            q: "Can I run different feedback boards for dine-in, takeaway, and events?",
            a: "Yes. Create a separate board for each channel - each with its own QR code, category options, and team routing. All submissions appear in a single dashboard filtered by board, status, or date.",
          },
          {
            q: "How does this help prevent negative Google reviews?",
            a: "When a guest has a private, structured channel to submit a complaint and receives a documented response, they feel heard without going public. Research consistently shows that customers whose complaints are resolved stay more loyal than those who never complained. The QR feedback board is the first step in that recovery process.",
          },
        ]}
        ctaHeading="Turn table complaints into returning customers."
        ctaSub="Your first feedback board takes 2 minutes to set up. Free to start."
        relatedLinks={[
          {
            href: "/manufacturing/supplier-feedback/",
            label: "Manufacturing",
            sub: "Supplier quality complaints",
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
            href: "/blog/restaurant-feedback-qr-code/",
            label: "Read the guide",
            sub: "QR feedback for restaurants",
          },
        ]}
      />
    </>
  );
}
