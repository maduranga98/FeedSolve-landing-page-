import type { Metadata } from "next";
import VerticalPage from "@/components/VerticalPage";
import { Lightbulb, EyeOff, QrCode, ListChecks } from "lucide-react";

const URL = "https://feedsolve.com/digital-suggestion-box-software/";

export const metadata: Metadata = {
 title: "Digital Suggestion Box Software | Online Suggestion Box | FeedSolve",
 description:
  "A digital suggestion box that actually closes the loop. Collect anonymous suggestions and complaints via a QR code or link - no login, any language - then assign, track, and resolve every one. Free to start.",
 keywords: [
  "digital suggestion box",
  "suggestion box software",
  "online suggestion box",
  "virtual suggestion box",
  "electronic suggestion box",
  "anonymous suggestion box",
  "employee suggestion box",
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
];

const data = {
 badge: "Digital Suggestion Box",
 h1: "Digital Suggestion Box Software That Closes the Loop",
 intro:
  "Replace the dusty box on the wall - and the Google Form that goes nowhere - with an online suggestion box that turns ideas and complaints into resolved actions. People submit anonymously via a QR code or link with no login, in any language. You assign, track, and resolve every one.",
 heroPoints: ["No login to submit", "Anonymous & multi-language", "Track every suggestion to resolution"],
 metrics: [
  { value: "0", label: "logins to submit" },
  { value: "100%", label: "suggestions tracked" },
  { value: "5 min", label: "to set up" },
 ],
 sections: [
  {
   icon: QrCode,
   title: "Collect suggestions with a QR code or link",
   body: "Print a branded QR code for the break room, counter, or notice board, or share a link by email and chat. People scan, type, and submit in seconds - no account, no app, no friction. That is how you actually get suggestions instead of an empty box.",
  },
  {
   icon: EyeOff,
   title: "Anonymous submissions, in any language",
   body: "Honest feedback needs psychological safety. FeedSolve forms require no sign-up, so staff and customers can submit anonymously. Multi-language submission forms let everyone write in their own language while you read in yours.",
  },
  {
   icon: ListChecks,
   title: "Assign, track, and resolve - not just collect",
   body: "Every suggestion lands on a Kanban board with a unique tracking code. Assign an owner, move it through your workflow, and resolve it with a full audit trail. Submitters can follow progress with their code - so people see action and keep contributing.",
  },
  {
   icon: Lightbulb,
   title: "Built for employee and customer suggestion boxes",
   body: "Run an anonymous employee suggestion box and a customer-facing one side by side, each with its own branded board and QR code. From electronic suggestion boxes for the shop floor to virtual suggestion boxes for remote teams, one tool covers it.",
  },
 ],
 faqs,
 cta: {
  title: "Launch your digital suggestion box today",
  body: "Create your first board, generate a QR code, and start collecting suggestions in minutes. Free to start, no credit card required.",
 },
 relatedLinks: [
  { label: "Digital suggestion box for small business (guide)", href: "/blog/digital-suggestion-box-small-business" },
  { label: "Anonymous employee feedback tool", href: "/blog/anonymous-employee-feedback-tool" },
  { label: "QR code feedback system setup guide", href: "/blog/qr-code-feedback-system" },
  { label: "Compare FeedSolve vs Google Forms", href: "/compare/feedsolve-vs-google-forms" },
 ],
 jsonLd: {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
   "@type": "Question",
   name: f.q,
   acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
 },
};

export default function Page() {
 return <VerticalPage data={data} />;
}
