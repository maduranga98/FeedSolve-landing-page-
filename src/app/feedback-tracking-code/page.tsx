import type { Metadata } from "next";
import { Hash, Search, BellRing, EyeOff, ShieldCheck, ListChecks } from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/feedback-tracking-code/";

export const metadata: Metadata = {
  title: "Feedback Tracking Code | Complaint Tracking Number for Customers",
  description:
    "Give every submitter a unique complaint tracking number. They follow progress with no login; you assign, track, and resolve on a Kanban board. Free to start, no credit card.",
  keywords: [
    "feedback tracking code",
    "complaint tracking number",
    "complaint tracking number for customers",
    "track feedback status",
    "complaint reference number",
    "feedback reference number",
    "issue tracking code",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Feedback Tracking Code | Complaint Tracking Number | FeedSolve",
    description:
      "Give every submitter a unique tracking code so they can follow a complaint to resolution - no login required. Free to start.",
    url: URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is a feedback tracking code?",
    a: "A feedback tracking code is a unique reference - in FeedSolve it looks like #FSV-XXXX - issued automatically the moment someone submits feedback or a complaint. It works like a parcel tracking number: the submitter keeps the code and uses it to check the status of their issue at any time, without creating an account or logging in.",
  },
  {
    q: "Can customers track a complaint without an account?",
    a: "Yes. That is the core idea. The submitter never signs up or logs in - they just keep their tracking code and open your status page to see whether their complaint is Received, In Progress, or Resolved, along with any public reply your team posts. Zero friction means more people actually follow up instead of assuming they were ignored.",
  },
  {
    q: "Does a tracking code work for anonymous submissions?",
    a: "Yes. Even when someone submits anonymously, FeedSolve still issues a unique tracking code. The submitter can follow progress privately using the code, so you get the honesty of anonymous feedback without losing the ability to close the loop.",
  },
  {
    q: "How is this different from a helpdesk ticket number?",
    a: "Most helpdesk tools expose only an internal ticket ID that lives behind your team's login - the customer usually can't see it. FeedSolve's tracking code is submitter-facing by design: it is built for external customers, suppliers, and the public to self-serve a status check, not for your agents. No login, no portal account, no email thread required.",
  },
  {
    q: "Do submitters get notified when their issue is resolved?",
    a: "Yes. When you update the status or post a public reply, the submitter can see it on their tracking page, and notifications keep them informed as the issue moves to resolution. Closing the loop is what turns a complaint into restored trust.",
  },
  {
    q: "Can I use tracking codes for suppliers and partners too?",
    a: "Yes. Tracking codes work for any external stakeholder - customers, suppliers, distributors, tenants, or patients. Each party gets a code for their submission and can follow it to resolution, giving you one accountable system across every relationship.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Feedback Tracking Code",
  description:
    "FeedSolve issues a unique feedback tracking code (complaint tracking number) for every submission so submitters can follow progress to resolution with no login.",
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

export default function FeedbackTrackingCode() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Feedback Tracking Codes"
        breadcrumbLabel="Feedback Tracking Code"
        breadcrumbUrl={URL}
        h1="A Tracking Code for Every Complaint - No Login Needed"
        subheading="Give customers a complaint tracking number the moment they submit. They follow it to resolution like a parcel; you keep every issue accountable on one board."
        quickAnswer="FeedSolve issues a unique feedback tracking code - #FSV-XXXX - for every submission, automatically. The submitter keeps the code and checks status anytime with no account and no login, just like tracking a parcel. Behind the scenes your team assigns, tracks, and resolves each issue on a Kanban board, then posts a public reply the submitter sees on their tracking page. It works for customers, suppliers, tenants, and anonymous submitters alike. Free to start, no credit card."
        stats={[
          { value: "#FSV", label: "Unique tracking code on every submission" },
          { value: "0", label: "Logins needed for a submitter to check status" },
          { value: "100%", label: "Of issues followable from intake to resolution" },
        ]}
        problemHeading="Why feedback dies without a tracking code"
        problemPoints={[
          "Customers submit a complaint and hear nothing - so they assume you ignored them",
          "Helpdesk ticket numbers live behind your team's login, invisible to the customer",
          "Anonymous feedback has no way to follow up, so the loop never closes",
          "People chase updates by phone and email because there's no self-serve status page",
          "Without a reference number, the same complaint gets re-submitted again and again",
        ]}
        collectLabel="Someone submits feedback via a QR code or link - no login. The moment they hit send, a unique tracking code is generated and shown on screen for them to keep."
        trackLabel="The submitter uses their #FSV-XXXX code to check status - Received, In Progress, or Resolved - anytime, from any device, without an account."
        assignLabel="Your team sees the same submission on a Kanban board, assigns an owner, sets a priority, and adds internal notes the submitter never sees."
        resolveLabel="Post a public reply against the code and mark it Resolved. The submitter sees the outcome on their tracking page - the loop is closed."
        featuresHeading="Everything behind the tracking code"
        features={[
          {
            icon: <Hash size={24} />,
            title: "Auto-generated codes",
            body: "Every submission gets a unique #FSV-XXXX reference instantly - no manual numbering, no duplicates.",
          },
          {
            icon: <Search size={24} />,
            title: "Self-serve status page",
            body: "Submitters enter their code to see live status and your latest public reply - no login, no portal account.",
          },
          {
            icon: <EyeOff size={24} />,
            title: "Works for anonymous",
            body: "Anonymous submitters still get a code, so you keep honesty and still close the loop.",
          },
          {
            icon: <BellRing size={24} />,
            title: "Status updates",
            body: "As you move an issue through the workflow, the submitter sees progress instead of silence.",
          },
          {
            icon: <ListChecks size={24} />,
            title: "Kanban resolution",
            body: "Each code maps to a card on your board - assign, prioritise, and resolve with a full audit trail.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Resolution analytics",
            body: "Because every code is tracked to a status, your resolution rate is measured automatically.",
          },
        ]}
        exampleHeading="A customer files a complaint - here's the tracking code journey"
        exampleScenario={[
          {
            step: "Customer submits via QR code",
            detail:
              "'My order arrived damaged.' No login - they just type and send.",
          },
          {
            step: "Tracking code #FSV-1024 shown instantly",
            detail:
              "They screenshot the code. No account, no email thread needed to follow up.",
          },
          {
            step: "Customer checks status from their phone",
            detail:
              "Enters #FSV-1024 on your status page and sees 'In Progress - replacement dispatched'.",
          },
          {
            step: "Team resolves on the board",
            detail:
              "Owner posts a public reply against the code and moves the card to Resolved.",
          },
          {
            step: "Loop closed - trust restored",
            detail:
              "The customer sees 'Resolved: replacement delivered, refund applied.' Resolution rate updates automatically.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Give every complaint a tracking code today"
        ctaSub="Start collecting feedback with unique, submitter-facing tracking codes in minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/qr-code-feedback/",
            label: "QR code feedback",
            sub: "Scan, submit, resolve",
          },
          {
            href: "/complaint-management-software/",
            label: "Complaint management",
            sub: "Resolve every complaint",
          },
          {
            href: "/digital-suggestion-box-software/",
            label: "Digital suggestion box",
            sub: "Online suggestion box software",
          },
          {
            href: "/blog/no-login-feedback-form/",
            label: "No-login feedback",
            sub: "Why zero friction wins",
          },
        ]}
      />
    </>
  );
}
