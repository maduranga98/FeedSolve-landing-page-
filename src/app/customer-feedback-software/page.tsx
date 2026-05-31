import type { Metadata } from "next";
import {
  MessageSquare,
  QrCode,
  Hash,
  UserCheck,
  BarChart3,
  Globe,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";

const URL = "https://feedsolve.com/customer-feedback-software/";

export const metadata: Metadata = {
  title: "Customer Feedback Software That Resolves, Not Just Collects",
  description:
    "Customer feedback software that goes beyond surveys: collect feedback via QR or link with no login, then assign, track, and resolve every submission. Free to start.",
  keywords: [
    "customer feedback software",
    "feedback management system",
    "customer feedback platform",
    "feedback management software",
    "customer feedback system",
    "feedback solutions",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Customer Feedback Software | FeedSolve",
    description:
      "Collect feedback via QR or link with no login, then assign, track, and resolve every submission from one dashboard. Free to start.",
    url: URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is customer feedback software?",
    a: "Customer feedback software is a platform for collecting feedback from customers and acting on it. The best tools go beyond surveys: they capture feedback with no login, route each submission to an owner, track it to resolution, and measure how much actually gets closed - so feedback turns into change, not a pile of unread responses.",
  },
  {
    q: "How is this different from a survey tool like Typeform or SurveyMonkey?",
    a: "Survey tools are built to collect responses into a spreadsheet - nothing happens after submit. FeedSolve adds the resolution layer: assignment, workflow, a tracking code per submission, and a resolution rate. It's a feedback management system, not just a form builder.",
  },
  {
    q: "Is there free customer feedback software?",
    a: "Yes. FeedSolve is free to start with no credit card required. Create a feedback board, generate a QR code or link, and start collecting and resolving feedback in minutes.",
  },
  {
    q: "Do customers need an account to leave feedback?",
    a: "No. Customers submit by scanning a QR code or opening a link - no login, no app. Each submission gets a unique tracking code so they can follow what you do with it.",
  },
  {
    q: "Can the feedback forms work in multiple languages?",
    a: "Yes. Multi-language submission forms let customers give feedback in their own language while your team manages everything in yours - useful for diverse and international markets.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Customer Feedback Software",
  description:
    "FeedSolve is customer feedback software and a feedback management system: QR or link intake, no-login submission, tracking codes, assignment, and a resolution dashboard.",
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

export default function CustomerFeedbackSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Customer Feedback Software"
        breadcrumbLabel="Customer Feedback Software"
        h1="Customer Feedback Software That Resolves, Not Just Collects"
        subheading="Most feedback tools stop at collecting responses. FeedSolve helps you assign, track, and resolve every piece of feedback - so it turns into action."
        quickAnswer="FeedSolve is a customer feedback platform built around what happens after submit. Customers give feedback by scanning a QR code or opening a link - no login, no app, in any language. Each submission gets a unique tracking code, then your team assigns it, moves it through a Kanban workflow, and resolves it. A live resolution rate shows how much feedback you actually act on. It's a feedback management system, not just a survey tool. Free to start, no credit card."
        stats={[
          { value: "0", label: "Logins needed to give feedback" },
          { value: "100%", label: "Of feedback tracked to resolution" },
          { value: "2 min", label: "To set up your first feedback board" },
          { value: "Any", label: "Language your customers prefer" },
        ]}
        problemHeading="Why most customer feedback goes nowhere"
        problemPoints={[
          "Survey tools collect responses into a spreadsheet that nobody acts on",
          "Feedback arrives across email, forms, and reviews with no single owner",
          "Sign-up walls and long surveys mean most customers never respond",
          "There's no follow-up, so customers never see their feedback lead to change",
          "Nobody measures how much feedback actually gets resolved",
        ]}
        collectLabel="Share a branded QR code or link on receipts, tables, packaging, or your site. Customers give feedback in seconds - no login, no account, in any language."
        trackLabel="Every submission gets a unique #FSV-XXXX tracking code, so customers can see what you did with their feedback without logging in."
        assignLabel="Route each piece of feedback to an owner with a priority and internal notes the customer never sees. One owner, one next step."
        resolveLabel="Act on it, send a public reply, and close the loop. Your resolution rate updates automatically on the dashboard."
        featuresHeading="A feedback management system, not just a form builder"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "No-login QR & link intake",
            body: "Customers give feedback by scanning a branded QR code or opening a link - no account, no app. You hear from people who'd never fill out a survey.",
          },
          {
            icon: <MessageSquare size={24} />,
            title: "Beyond surveys",
            body: "Collecting responses is step one. FeedSolve assigns, tracks, and resolves each submission so feedback becomes action, not a dead spreadsheet.",
          },
          {
            icon: <UserCheck size={24} />,
            title: "Assignment & workflow",
            body: "Route each submission to an owner, set a priority, and move it through clear stages so feedback is handled consistently.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code per submission",
            body: "Each piece of feedback gets a unique code so customers can follow progress - building trust without an account.",
          },
          {
            icon: <BarChart3 size={24} />,
            title: "Resolution rate dashboard",
            body: "See how much feedback you receive and how much you act on. Resolution rate is the real measure of a feedback programme.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-language forms",
            body: "Let customers give feedback in their own language while you manage everything in yours - ideal for diverse and international markets.",
          },
        ]}
        exampleHeading="A customer shares an idea - here's what happens"
        exampleScenario={[
          {
            step: "Customer scans the QR code in-store",
            detail:
              "Submits: 'Love the new layout, but checkout queues are slow at lunch.' Takes 30 seconds. No account.",
          },
          {
            step: "Tracking code #FSV-1320 generated",
            detail:
              "They can check later to see whether anything came of their feedback.",
          },
          {
            step: "Manager reviews and assigns",
            detail:
              "Routes it to operations to trial a second lunchtime till. Priority Medium.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The customer sees their feedback is being acted on - not ignored.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Thanks - we've added a lunchtime till. Hope your next visit is faster.' Resolution rate updates.",
          },
        ]}
        faqs={faqs}
        ctaHeading="Make customer feedback actually count"
        ctaSub="Create a feedback board, generate a QR code, and start resolving in minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/complaint-management-software/",
            label: "Complaint management software",
            sub: "For complaints specifically",
          },
          {
            href: "/blog/customer-feedback-management-small-business/",
            label: "SMB feedback guide",
            sub: "The complete overview",
          },
          {
            href: "/blog/feedback-resolution-rate/",
            label: "Resolution rate",
            sub: "The metric most miss",
          },
          {
            href: "/compare/feedsolve-vs-typeform/",
            label: "vs Typeform",
            sub: "Survey tool vs resolution",
          },
        ]}
      />
    </>
  );
}
