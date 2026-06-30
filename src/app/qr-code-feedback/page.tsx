import type { Metadata } from "next";
import { QrCode, ScanLine, EyeOff, Hash, Languages, Palette } from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/qr-code-feedback/";

export const metadata: Metadata = {
  title: "QR Code Feedback System | No-Login QR Feedback",
  description:
    "Collect feedback with a QR code - no app, no login. Customers scan, submit in any language, and get a tracking code, while you assign, track, and resolve every issue. Free to start.",
  keywords: [
    "qr code feedback",
    "qr code feedback system",
    "qr feedback",
    "no login feedback qr",
    "feedback qr code",
    "scan to give feedback",
    "qr code complaint form",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "QR Code Feedback System | No-Login QR Feedback | FeedSolve",
    description:
      "Collect feedback with a QR code - no app, no login. Scan, submit, get a tracking code, then assign, track, and resolve every issue. Free to start.",
    url: URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "How does a QR code feedback system work?",
    a: "You generate a QR code for a feedback board in FeedSolve and print or display it anywhere - a table tent, receipt, delivery note, wall, or kiosk. Anyone scans it with their phone camera, lands on your form, and submits feedback or a complaint in seconds. No app and no login are required on the submitter's side. Every submission lands on your dashboard with a unique tracking code so nothing gets lost.",
  },
  {
    q: "Do customers need to download an app or log in to scan?",
    a: "No. That is the whole point of QR code feedback - the submitter just opens their phone camera, taps the link, and types. There is no account, no app download, and no sign-up wall, which is the single biggest reason QR feedback gets far more responses than email surveys or login-gated forms.",
  },
  {
    q: "Can I put my logo and brand colours on the QR code?",
    a: "Yes. FeedSolve supports branded QR codes so the code carries your logo and brand colours. A branded QR code on a receipt or table tent looks like part of your business, not a generic black-and-white square, which increases trust and scan rates.",
  },
  {
    q: "Is the QR code feedback form available in other languages?",
    a: "Yes. FeedSolve supports multi-language submission forms, so customers, suppliers, and staff can scan one QR code and submit in their own language while you manage everything in yours - useful for businesses operating across multiple regions.",
  },
  {
    q: "What happens after someone scans the QR code and submits?",
    a: "The submission appears on your Kanban board with a unique #FSV-XXXX tracking code. You assign it to a team member, set a priority, move it through your workflow, and close the loop with a public reply. The submitter can check progress anytime using their code - no login needed - so you actually resolve feedback instead of just collecting it.",
  },
  {
    q: "Where do businesses usually place feedback QR codes?",
    a: "Common spots are restaurant table tents and receipts, hotel rooms and reception, delivery notes and packaging, warehouse and shop-floor walls, clinic waiting rooms, and event signage. Anywhere a customer or stakeholder has an opinion in the moment is a good place for a scan-to-give-feedback QR code.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "QR Code Feedback System",
  description:
    "FeedSolve is a QR code feedback system for collecting and resolving feedback and complaints with no login required for submitters.",
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

export default function QrCodeFeedback() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="QR Code Feedback"
        breadcrumbLabel="QR Code Feedback System"
        breadcrumbUrl={URL}
        h1="QR Code Feedback - Scan, Submit, Resolve"
        subheading="Turn any surface into a feedback channel. Customers scan a QR code, submit in seconds with no app or login, and you resolve every issue from one dashboard."
        quickAnswer="FeedSolve is a QR code feedback system that collects and resolves feedback in one place. Print a branded QR code on a receipt, table tent, delivery note, or wall - anyone scans it with their phone camera and submits a comment or complaint in any language, with no app and no login. Every submission gets a unique tracking code, then your team assigns, tracks, and resolves it on a Kanban board. Free to start, no credit card."
        stats={[
          { value: "0", label: "Apps or logins needed to scan and submit" },
          { value: "100%", label: "Of scanned submissions tracked to resolution" },
          { value: "2 min", label: "To generate a branded feedback QR code" },
        ]}
        problemHeading="Why most feedback QR codes go nowhere"
        problemPoints={[
          "A QR code that opens a Google Form just dumps responses into a spreadsheet - nobody acts on them",
          "Login walls and app downloads kill scans - people give up before they submit",
          "Generic black-and-white codes look untrustworthy on a receipt or table tent",
          "There is no tracking code, so the customer never hears back and assumes they were ignored",
          "Feedback is scattered across forms, email, and paper with no single place to resolve it",
        ]}
        collectLabel="Generate a branded QR code in FeedSolve and print it anywhere - receipts, table tents, delivery notes, walls, or kiosks. People scan with their phone camera and submit in seconds, in their own language, with no app and no login."
        trackLabel="Every scanned submission gets a unique #FSV-XXXX tracking code, so customers can follow progress from their phone without ever creating an account."
        assignLabel="Each submission lands on your Kanban board. Assign an owner, set a priority, and add internal notes the customer never sees."
        resolveLabel="Move it to Resolved, post a public reply the submitter sees on their tracking page, and watch your resolution rate update automatically."
        featuresHeading="A QR feedback system built to resolve, not just collect"
        features={[
          {
            icon: <ScanLine size={24} />,
            title: "Scan-to-submit, no app",
            body: "Submitters use their phone camera - no app download and no login. The lower the friction, the more feedback you collect.",
          },
          {
            icon: <Palette size={24} />,
            title: "Branded QR codes",
            body: "Add your logo and brand colours so the code looks like part of your business on receipts, table tents, and packaging.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code per scan",
            body: "Every submission gets a unique #FSV-XXXX code, so even anonymous submitters can follow progress to resolution.",
          },
          {
            icon: <EyeOff size={24} />,
            title: "Anonymous submissions",
            body: "Let people submit honestly without signing in. Anonymity raises response rates on the issues that matter most.",
          },
          {
            icon: <Languages size={24} />,
            title: "Multi-language forms",
            body: "One QR code, many languages. Customers and staff submit in their own language while you manage in yours.",
          },
          {
            icon: <QrCode size={24} />,
            title: "Unlimited boards & codes",
            body: "Create a separate board and QR code per location, product, or team, then resolve everything from one dashboard.",
          },
        ]}
        exampleHeading="A diner scans a table QR code - here's what happens"
        exampleScenario={[
          {
            step: "Customer scans the table-tent QR code",
            detail:
              "Submits in 30 seconds: 'Soup arrived cold and the table was sticky.' No app, no login - just their phone camera.",
          },
          {
            step: "Tracking code #FSV-3127 generated",
            detail:
              "They keep the code on their phone and can check what you did about it later.",
          },
          {
            step: "Floor manager is notified",
            detail:
              "Sees it on the dashboard, assigns it to the shift lead, sets priority High.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "Kitchen and cleaning are flagged; an internal note records the table number.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Apologies - we have re-briefed the team and your next dessert is on us.' Resolution rate updates automatically.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Launch your QR code feedback system today"
        ctaSub="Generate a branded QR code, print it anywhere, and start collecting and resolving feedback in minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/digital-suggestion-box-software/",
            label: "Digital suggestion box",
            sub: "Online suggestion box software",
          },
          {
            href: "/feedback-tracking-code/",
            label: "Feedback tracking codes",
            sub: "Let submitters follow progress",
          },
          {
            href: "/features/branded-qr-codes/",
            label: "Branded QR codes",
            sub: "Add your logo and colours",
          },
          {
            href: "/restaurants/qr-feedback/",
            label: "Restaurant QR feedback",
            sub: "Table feedback that resolves",
          },
        ]}
      />
    </>
  );
}
