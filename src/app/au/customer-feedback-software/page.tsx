// src/app/au/customer-feedback-software/page.tsx
// Target keywords: "customer feedback platform australia",
// "feedback software australia", "customer feedback software australia"
// Market: Australia

import type { Metadata } from "next";
import {
  MessageSquare,
  QrCode,
  Hash,
  Star,
  Globe,
  BarChart3,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/au/customer-feedback-software/";

export const metadata: Metadata = {
  title: "Customer Feedback Software Australia",
  description:
    "Customer feedback software for Australian businesses. Collect feedback via QR code or link - no login, any language - then assign, track, and resolve every submission. Free to start, priced in AUD.",
  keywords: [
    "customer feedback software australia",
    "customer feedback platform australia",
    "feedback software australia",
    "customer feedback tool australia",
    "feedback management software australia",
    "customer feedback app australia",
  ],
  alternates: {
    canonical: URL,
    languages: {
      "en-AU": URL,
      "x-default": "https://feedsolve.com/",
    },
  },
  openGraph: {
    title: "Customer Feedback Software Australia | FeedSolve",
    description:
      "A customer feedback platform built for Australian SMBs. No-login QR submission, tracking codes, and a resolution rate dashboard. Free to start.",
    url: URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is there customer feedback software made for Australian businesses?",
    a: "Yes. FeedSolve is a customer feedback platform that works for Australian SMBs across hospitality, retail, trades, allied health, and tourism. Customers scan a branded QR code or open a link to give feedback in seconds - no login, no app, and in any language, which matters for Australia's multicultural customer base. Your team then assigns, tracks, and resolves every submission from one dashboard, with prices shown in AUD.",
  },
  {
    q: "How much does customer feedback software cost in Australia?",
    a: "FeedSolve is free to start with no credit card required. Paid plans begin at roughly A$29/month (billed in USD at approximately $19) for the Starter plan, and pricing is based on feedback boards rather than per-agent seats - so you can invite your whole team without a per-user penalty. Most Australian small businesses run comfortably on the Free or Starter plan.",
  },
  {
    q: "How is this different from a survey tool like Typeform or SurveyMonkey?",
    a: "Survey tools collect responses into a spreadsheet and stop there. FeedSolve adds the resolution layer: every submission gets a unique tracking code, is routed to an owner, moves through a Kanban workflow, and is closed with a public reply. A live resolution rate shows how much feedback you actually act on. It's a feedback management system, not just a form builder.",
  },
  {
    q: "Can it help reduce negative Google reviews?",
    a: "Yes. A QR code at the counter, on the table, or on a receipt gives Australian customers a private channel to raise an issue before they post it publicly. Your team is notified instantly and can resolve it - so a one-star Google review becomes a quietly fixed problem and a returning customer.",
  },
  {
    q: "Do customers need an account or an app to leave feedback?",
    a: "No. Customers submit by scanning a QR code or opening a link in any phone browser - no account, no download. Each submission issues a unique #FSV-XXXX tracking code so they can follow what you do with their feedback, even anonymously.",
  },
  {
    q: "Does FeedSolve support Australian Consumer Law complaint handling?",
    a: "FeedSolve gives you a documented, timestamped record of every customer complaint and its resolution, which supports the good-practice complaint handling expected under the Australian Consumer Law (ACL). It is general-purpose feedback and complaint software, not legal advice - but the audit trail makes it far easier to show you responded to consumer guarantee issues consistently.",
  },
  {
    q: "Can customers give feedback in languages other than English?",
    a: "Yes. Multi-language submission forms let customers give feedback in their own language while your team manages everything in English - useful across Australia's diverse and multilingual customer base.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Customer Feedback Software Australia",
  description:
    "FeedSolve is customer feedback software for Australian businesses: no-login QR or link intake, tracking codes, assignment, and a resolution rate dashboard.",
  url: URL,
  inLanguage: "en-AU",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function CustomerFeedbackSoftwareAustralia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="🇦🇺 Customer Feedback Software · Australia"
        breadcrumbLabel="Customer Feedback Software Australia"
        breadcrumbUrl={URL}
        h1="Customer Feedback Software for Australian Business"
        subheading="Collect customer feedback with a QR code or link - no login, any language - then assign, track, and resolve every piece from one dashboard. Built for Australian SMBs, priced in AUD."
        quickAnswer="FeedSolve is a customer feedback platform for Australian businesses. Customers in your café, store, clinic, or service van scan a branded QR code or open a link and give feedback in seconds - no account, no app, in any language. Each submission gets a unique tracking code, then your team assigns it, moves it through a Kanban workflow, and resolves it with a public reply. A live resolution rate shows how much feedback you actually act on - and catching issues privately keeps one-star Google reviews from being written. Free to start, with paid plans from about A$29/month and no per-agent fees."
        stats={[
          { value: "0", label: "Logins needed for customers to give feedback" },
          { value: "A$0", label: "To start - free plan, no credit card" },
          { value: "100%", label: "Of feedback tracked to resolution" },
          { value: "Any", label: "Language your customers prefer" },
        ]}
        problemHeading="Why customer feedback slips through the cracks in Australian SMBs"
        problemPoints={[
          "Unhappy customers skip the conversation and go straight to a one-star Google review",
          "Feedback arrives across email, social, and verbal comments with no single owner",
          "Long surveys and sign-up walls mean most Australian customers never respond",
          "There's no follow-up, so customers never see their feedback lead to change",
          "Nobody measures how many issues actually get resolved - so the same problems repeat",
        ]}
        collectLabel="Print a branded QR code for the counter, table, receipt, or service van, or share a link by SMS and email. Australian customers scan, type, and submit in seconds - no account, no app, in any language."
        trackLabel="Every submission gets a unique #FSV-XXXX tracking code, so customers can see what you did with their feedback without logging in."
        assignLabel="Route each piece of feedback to an owner with a priority and internal notes the customer never sees. One owner, one next step."
        resolveLabel="Act on it, send a public reply, and close the loop. Your resolution rate updates automatically - documented for Australian Consumer Law complaint handling."
        featuresHeading="A customer feedback platform built for Australian operations"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "No-login QR & link intake",
            body: "Customers give feedback by scanning a branded QR code or opening a link - no account, no app. You hear from people who'd never fill out a survey.",
          },
          {
            icon: <Star size={24} />,
            title: "Catch issues before Google reviews",
            body: "Give customers a private channel at the point of service. Resolve the problem before it becomes a public one-star review.",
          },
          {
            icon: <MessageSquare size={24} />,
            title: "Beyond surveys",
            body: "Collecting responses is step one. FeedSolve assigns, tracks, and resolves each submission so feedback becomes action, not a dead spreadsheet.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code per submission",
            body: "Each piece of feedback gets a unique code so customers can follow progress - building trust without an account.",
          },
          {
            icon: <BarChart3 size={24} />,
            title: "Resolution rate dashboard",
            body: "See how much feedback you receive and how much you act on. A documented, timestamped trail supports ACL complaint handling.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-language forms",
            body: "Let customers give feedback in their own language while you manage everything in English - ideal for Australia's diverse customer base.",
          },
        ]}
        exampleHeading="A café guest flags a problem - here's what happens"
        exampleScenario={[
          {
            step: "Guest scans the QR code on the table",
            detail:
              "Submits: 'Great coffee, but we waited 20 minutes and almost left.' Takes 30 seconds. No account, no app.",
          },
          {
            step: "Tracking code #FSV-1320 generated",
            detail:
              "They can check later to see whether anything came of it - instead of venting on Google.",
          },
          {
            step: "Manager is notified and assigns it",
            detail:
              "Routes it to the floor supervisor to trial a second barista at the lunch peak. Priority Medium.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The guest sees their feedback is being acted on - not ignored.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Thanks - we've added a second barista at lunch. Coffee's on us next visit.' Resolution rate updates automatically.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Start collecting customer feedback across Australia"
        ctaSub="Create a feedback board, generate a QR code, and start resolving in minutes. Free to start, no credit card - priced in AUD as you grow."
        relatedLinks={[
          {
            href: "/au/complaint-management-software/",
            label: "AU complaint software",
            sub: "For complaints specifically",
          },
          {
            href: "/customer-feedback-software/",
            label: "Customer feedback software",
            sub: "The global overview",
          },
          {
            href: "/restaurants/qr-feedback/",
            label: "Restaurants & cafés",
            sub: "Table-side QR feedback",
          },
          {
            href: "/blog/feedback-resolution-rate/",
            label: "Resolution rate",
            sub: "The metric most miss",
          },
        ]}
      />
    </>
  );
}
