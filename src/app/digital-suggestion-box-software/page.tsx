import type { Metadata } from "next";
import { Lightbulb, EyeOff, QrCode, ListChecks, Languages, ShieldCheck } from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/digital-suggestion-box-software/";

export const metadata: Metadata = {
  title: "Digital Suggestion Box Software | Online Suggestion Box",
  description:
    "A digital suggestion box that closes the loop. Collect anonymous suggestions via a QR code or link - no login, any language - then assign, track, and resolve every one. Free to start.",
  keywords: [
    "digital suggestion box",
    "suggestion box software",
    "online suggestion box",
    "virtual suggestion box",
    "electronic suggestion box",
    "website suggestion box",
    "anonymous suggestion box",
    "employee suggestion box",
    "suggestion box app",
    "free suggestion box online",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Digital Suggestion Box Software | Online Suggestion Box | FeedSolve",
    description:
      "Collect anonymous suggestions via a QR code or link - no login, any language - then assign, track, and resolve every one. Free to start.",
    url: URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is a digital suggestion box?",
    a: "A digital suggestion box is an online replacement for the physical box on the wall. People scan a QR code or open a link, submit a suggestion or complaint in seconds - no login or app - and you collect, assign, and resolve every submission from one dashboard with a full audit trail.",
  },
  {
    q: "Can suggestions be submitted anonymously?",
    a: "Yes. FeedSolve forms work without sign-up, so employees and customers can submit anonymously. Each submission still gets a unique tracking code, so the submitter can follow progress and you never lose the suggestion.",
  },
  {
    q: "Is there a free suggestion box software option?",
    a: "Yes. FeedSolve is free to start with no credit card required. You can create your first suggestion board, generate a QR code, and start collecting in minutes.",
  },
  {
    q: "How is this different from a Google Form suggestion box?",
    a: "A Google Form only collects responses into a spreadsheet - nothing happens next. FeedSolve adds the resolution layer: you assign each suggestion to an owner, move it through a workflow, and close the loop so submitters see action, not silence.",
  },
  {
    q: "Can I use it as an employee suggestion box and a customer suggestion box?",
    a: "Yes. Create separate boards for staff and customers, each with its own branded QR code or link. Multi-language forms mean everyone can submit in their own language while you manage in yours.",
  },
  {
    q: "Can I add a suggestion box to my website?",
    a: "Yes. Every board comes with a shareable link, so you can add a website suggestion box by linking a button or menu item straight to your FeedSolve form. Visitors submit without leaving to a third-party login, and you collect and resolve everything from one dashboard.",
  },
  {
    q: "Is there a suggestion box app for phones?",
    a: "Submitters never need an app - they scan a QR code or open a link in any phone browser. On your side, FeedSolve works as a web-based suggestion box app you can manage from desktop or mobile, so you can triage and resolve suggestions wherever you are.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Digital Suggestion Box Software",
  description:
    "FeedSolve is digital suggestion box software for collecting and resolving anonymous suggestions via QR code or link.",
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

export default function DigitalSuggestionBoxSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Digital Suggestion Box"
        breadcrumbLabel="Digital Suggestion Box Software"
        h1="Digital Suggestion Box Software That Closes the Loop"
        subheading="Replace the dusty box on the wall - and the Google Form that goes nowhere - with an online suggestion box that turns ideas and complaints into resolved actions."
        quickAnswer="FeedSolve is a digital suggestion box for teams and customers. People submit anonymously via a QR code or link - no login, no app, in any language. Each submission gets a unique tracking code, then your team assigns, tracks, and resolves it on a Kanban board with a full audit trail. From an anonymous employee suggestion box on the shop floor to a virtual suggestion box for remote teams, one tool covers it - free to start."
        stats={[
          { value: "0", label: "Logins needed to submit a suggestion" },
          { value: "100%", label: "Of suggestions tracked to resolution" },
          { value: "5 min", label: "To set up your first suggestion board" },
        ]}
        problemHeading="Why most suggestion boxes collect dust, not ideas"
        problemPoints={[
          "The physical box on the wall is never emptied and nobody hears back - so people stop using it",
          "A Google Form dumps responses into a spreadsheet where nothing happens next",
          "Sign-up walls kill submissions - most people won't create an account to leave an idea",
          "Without anonymity, staff stay silent on the issues that matter most",
          "There is no way to follow up, so submitters assume they were ignored and stop contributing",
        ]}
        collectLabel="Print a branded QR code for the break room, counter, or notice board, or share a link by email and chat. People scan, type, and submit in seconds - no account, no app, no friction."
        trackLabel="Every suggestion gets a unique #FSV-XXXX tracking code, so even anonymous submitters can follow progress without logging in."
        assignLabel="Route each suggestion to an owner, set a priority, and add internal notes the submitter never sees. One owner, one next step."
        resolveLabel="Move it to Resolved, post a public reply, and watch your resolution rate update automatically. People see action - so they keep contributing."
        featuresHeading="Everything a real suggestion box needs"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "Collect with a QR code or link",
            body: "Branded QR codes for physical spaces and shareable links for email and chat. Meet people at the exact moment they have an idea.",
          },
          {
            icon: <EyeOff size={24} />,
            title: "Anonymous submissions",
            body: "No-login, anonymous submission gives staff and customers the psychological safety to be honest - while still issuing a tracking code.",
          },
          {
            icon: <ListChecks size={24} />,
            title: "Assign, track & resolve",
            body: "Every suggestion lands on a Kanban board. Assign an owner, move it through your workflow, and close the loop with a full audit trail.",
          },
          {
            icon: <Languages size={24} />,
            title: "Multi-language forms",
            body: "Let everyone submit in their own language while you manage everything in yours - ideal for diverse teams and customers.",
          },
          {
            icon: <Lightbulb size={24} />,
            title: "Employee & customer boards",
            body: "Run an anonymous employee suggestion box and a customer-facing one side by side, each with its own board and QR code.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Resolution analytics",
            body: "See how many suggestions you receive and how many get resolved. Your resolution rate is the real health metric of the programme.",
          },
        ]}
        exampleHeading="An employee flags a safety idea - here's what happens"
        exampleScenario={[
          {
            step: "Employee scans the break-room QR code",
            detail:
              "Submits anonymously: 'The loading bay light has been out for two weeks - it's a trip hazard at night.' Takes 30 seconds.",
          },
          {
            step: "Tracking code #FSV-2043 generated",
            detail:
              "They screenshot the code. They can check progress later without revealing who they are.",
          },
          {
            step: "Operations manager is notified",
            detail:
              "Sees it on the dashboard, assigns it to Facilities, sets priority High.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The employee checks their code and sees the issue is being handled - so they keep flagging things.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Light replaced and a monthly check added. Thanks for flagging this.' Resolution rate updates automatically.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Launch your digital suggestion box today"
        ctaSub="Create a board, generate a QR code, and start collecting suggestions in minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/blog/digital-suggestion-box-small-business/",
            label: "Small business guide",
            sub: "Digital suggestion box explained",
          },
          {
            href: "/blog/anonymous-employee-feedback-tool/",
            label: "Anonymous feedback",
            sub: "Employee suggestion box tips",
          },
          {
            href: "/qr-code-feedback/",
            label: "QR code feedback",
            sub: "Scan, submit, resolve",
          },
          {
            href: "/compare/feedsolve-vs-google-forms/",
            label: "vs Google Forms",
            sub: "Why a form isn't enough",
          },
        ]}
      />
    </>
  );
}
