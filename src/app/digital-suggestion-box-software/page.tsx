import { generatePageMetadata } from "@/lib/seo/metadata";
import { clusterAlternates } from "@/lib/seo/hreflang";
import Link from "next/link";
import { Lightbulb, EyeOff, QrCode, ListChecks, Languages, ShieldCheck } from "lucide-react";
import VerticalPage from "@/components/VerticalPage";
import VerticalProseSection from "@/components/VerticalProseSection";
import ComparisonTable from "@/components/ComparisonTable";
import JsonLdScript from "@/components/JsonLd";
import { generateSoftwareAppSchema } from "@/lib/seo";

const URL = "https://feedsolve.com/digital-suggestion-box-software/";

export const metadata = generatePageMetadata({
  title: "Suggestion Box Software: Digital & Anonymous",
  description:
    "Suggestion box software that closes the loop: a digital suggestions box with anonymous QR code or link submission, no login, tracking codes. Free 7-day trial.",
  path: "/digital-suggestion-box-software/",
  alternates: clusterAlternates("suggestionBox", "/digital-suggestion-box-software/"),
});

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
    q: "What is an online suggestion box?",
    a: "An online suggestion box is a web-based version of the box on the wall. People submit ideas or concerns through a form, QR code or link instead of paper, and the owner reviews them in one place. Good online suggestion box software also assigns each suggestion to someone, tracks its status, and lets the submitter see what happened.",
  },
  {
    q: "How do I set up an anonymous suggestion box online?",
    a: "Create a board, switch on anonymous no-login submission, generate a QR code and link, and share them where people will see them, such as the break room, reception or your team chat. Each submission gets a tracking code so the person can follow progress without giving their name. Our step-by-step guide to setting up an online suggestion box covers it in about ten minutes.",
  },
  {
    q: "Is there a free online suggestion box?",
    a: "Free options exist: a paper box, or a free form such as Google Forms. They collect ideas, but they do not assign owners, track status or reply to the submitter. FeedSolve is a paid product with a free 7-day trial that includes full access, then plans from $19 per month. If you only collect occasional ideas, a free form may be enough. If you want every suggestion acted on and answered, you need a workflow.",
  },
  {
    q: "Is there a free suggestion box software option?",
    a: "Yes. FeedSolve offers a free 7-day trial with full access. You can create your first suggestion board, generate a QR code, and start collecting in minutes.",
  },
  {
    q: "How is this different from a Google Form suggestion box?",
    a: "A Google Form only collects responses into a spreadsheet - nothing happens next. FeedSolve adds the resolution layer: you assign each suggestion to an owner, move it through a workflow, and close the loop so submitters see action, not silence.",
  },
  {
    q: "Can I use it as an employee suggestion box and a customer suggestion box?",
    a: "Yes. An employee suggestion box and a customer one are just two boards. Create separate boards for staff and customers, each with its own branded QR code or link. Multi-language forms mean everyone can submit in their own language while you manage in yours.",
  },
  {
    q: "What is a virtual suggestion box?",
    a: "A virtual suggestion box is a suggestion box that lives online instead of on a wall, which makes it a fit for remote and hybrid teams. People open a link or scan a QR code from wherever they work and submit a suggestion with no login. Your team assigns each one to an owner and tracks it to resolution from one dashboard.",
  },
  {
    q: "How do suggestion boxes work when the suggestions go to one digital box?",
    a: "A suggestions box in digital form gives every board its own QR code and link. Employees, customers or visitors submit to that board, and each submission gets a tracking code. Your team sees every suggestion in one place, assigns an owner, replies publicly and marks it resolved, so the person who made the suggestion can see what happened.",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DigitalSuggestionBoxSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <JsonLdScript
        data={generateSoftwareAppSchema({
          description:
            "FeedSolve is digital suggestion box software. Collect anonymous suggestions by QR code or link with no login, assign each one to an owner, and track it to resolution. 7-day free trial.",
          featureList: [
            "Anonymous, no-login suggestion submission",
            "Branded QR code and shareable link",
            "Tracking code for every submission",
            "Assignment, internal notes and Kanban resolution workflow",
            "Public replies to submitters",
            "Resolution rate dashboard",
            "Multi-language submission forms",
          ],
        })}
      />
      <VerticalPage
        badge="Digital Suggestion Box"
        breadcrumbLabel="Digital Suggestion Box Software"
        breadcrumbUrl={URL}
        h1="Suggestion Box Software That Closes the Loop"
        quickSummary="FeedSolve is a digital suggestion box that lets employees and customers submit suggestions anonymously via QR code or link with no login, then tracks every one to resolution."
        subheading="Replace the dusty box on the wall - and the Google Form that goes nowhere - with an online suggestion box that turns ideas and complaints into resolved actions."
        quickAnswer="FeedSolve is a digital suggestion box for teams and customers. People submit anonymously via a QR code or link - no login, no app, in any language. Each submission gets a unique tracking code, then your team assigns, tracks, and resolves it on a Kanban board with a full audit trail. From an anonymous employee suggestion box on the shop floor to a virtual suggestion box for remote teams, one tool covers it - start with a free 7-day trial."
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
        extraSections={
          <>
          <section className="mkt-section">
            <div className="container mkt-narrow">
              <h2>FeedSolve vs free suggestion box tools</h2>
              <p className="mkt-lead">
                The usual free options are a paper box and a free form such as Google Forms. Both collect ideas. The
                difference is what happens after someone submits.
              </p>
            </div>
            <ComparisonTable
              caption="FeedSolve compared with free suggestion box tools"
              leftHeader="Free tools (paper box, form)"
              rightHeader="FeedSolve"
              rows={[
                { label: "Collecting ideas", left: "A box on the wall, or a form that writes to a spreadsheet", right: "QR code or link, no login, in any language" },
                { label: "Anonymity", left: "Often anonymous, though staff may doubt a form tied to a company account", right: "Anonymous mode: no login or contact details required" },
                { label: "Ownership", left: "Entries sit in a stack or a sheet until someone reads them", right: "Assign each suggestion to an owner with a priority" },
                { label: "Follow-up", left: "Submitters rarely hear what happened", right: "Tracking code and public replies show status without an account" },
                { label: "Workflow", left: "Manual: spreadsheet filters or sticky notes", right: "Kanban board from submitted to resolved" },
                { label: "Measuring", left: "A count of entries, if anyone counts", right: "Resolution rate on the dashboard" },
                { label: "Cost", left: "Free", right: "Free 7-day trial, then from $19 per month" },
              ]}
            />
            <div className="container mkt-narrow">
              <p className="mkt-body">
                A free tool is enough when a small team collects the occasional idea and one person reliably reads and
                answers each one. It starts to fail when volume grows, when several people need to act on suggestions, or
                when you want people to trust that the box leads to change. At that point the missing pieces are ownership,
                status and a reply, which is what suggestion box software adds.
              </p>
            </div>
          </section>
          <VerticalProseSection
            label="Choosing a tool"
            heading="How to choose suggestion box software (and what to read next)"
            background="var(--bg)"
            paragraphs={[
              <>
                Almost every tool in this category solves intake. The question
                worth asking is what happens after someone hits submit, and the
                answer separates a form from a system. Our guide to{" "}
                <Link href="/blog/suggestion-box-software-features/">
                  suggestion box software
                </Link>{" "}
                walks through the seven features that decide which one you
                bought, and there is a ten-minute test in it you can run on any
                shortlist before you commit.
              </>,
              <>
                If anonymity is the sticking point - and for an employee
                programme it usually is - start with the practical guide to
                running an{" "}
                <Link href="/blog/anonymous-suggestion-box/">
                  anonymous suggestion box
                </Link>
                , which covers what actually makes a channel feel safe to a
                sceptical employee. When you are ready to launch, the{" "}
                <Link href="/blog/online-suggestion-box-setup/">
                  online suggestion box
                </Link>{" "}
                setup guide gets you from nothing to a live QR code in about ten
                minutes, and the{" "}
                <Link href="/blog/digital-suggestion-box-small-business/">
                  small business walkthrough
                </Link>{" "}
                covers where to put the code once you have one.
              </>,
              <>
                Comparing FeedSolve against a single-purpose anonymous
                suggestion box? The{" "}
                <Link href="/alternatives/suggestion-ox/">
                  Suggestion Ox alternative
                </Link>{" "}
                guide is an honest side-by-side: where a focused suggestion tool
                is the simpler choice, and where collecting without resolving
                stops being enough.
              </>,
            ]}
          />
          </>
        }
        faqs={faqs}
        ctaHeading="Launch your digital suggestion box today"
        ctaSub="Create a board, generate a QR code, and start collecting suggestions in minutes. Free 7-day trial."
        relatedLinks={[
          {
            href: "/blog/anonymous-suggestion-box/",
            label: "Anonymous suggestion box",
            sub: "Set one up free in 10 minutes",
          },
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
