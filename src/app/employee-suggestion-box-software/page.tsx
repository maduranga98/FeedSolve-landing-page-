import Link from "next/link";
import { EyeOff, QrCode, UserCheck, BellRing, MapPin, BarChart3 } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import VerticalPage from "@/components/VerticalPage";
import VerticalProseSection from "@/components/VerticalProseSection";
import ComparisonTable from "@/components/ComparisonTable";
import { JsonLdScript } from "@/components/JsonLd";
import { type FAQItem, generateFAQSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

const PATH = "/employee-suggestion-box-software/";
const URL = `${SITE_URL}${PATH}`;

export const metadata = generatePageMetadata({
  title: "Employee Suggestion Box Software",
  description:
    "An employee suggestion box that routes every idea to an owner. Staff submit anonymously by QR code or link, with no login or company email. 7-day free trial.",
  path: PATH,
});

const faqs: FAQItem[] = [
  {
    question: "What is employee suggestion box software?",
    answer:
      "Employee suggestion box software replaces the box on the wall with an online form that staff open by QR code or link. Each idea or concern lands in one dashboard, where a manager assigns it to an owner, tracks its status and replies, so the employee sees what happened to their suggestion.",
  },
  {
    question: "Can employees submit suggestions anonymously?",
    answer:
      "Yes. Employees submit with no login and contact details are optional. Each anonymous submission still gets a tracking code, so the employee can check the status and read your reply without giving their name.",
  },
  {
    question: "Do employees need a company email address or an app?",
    answer:
      "No. Staff scan a QR code or open a link in any phone browser. That makes it work for frontline, shift and warehouse staff who do not have a company email account or a desk, as well as for office and remote teams.",
  },
  {
    question: "How are employee ideas routed to the right owner?",
    answer:
      "Create a board per department, site or topic, so suggestions arrive already sorted. A manager assigns each one to an owner with a priority and internal notes the employee never sees. On the Growth plan, escalation rules flag suggestions that sit too long without action.",
  },
  {
    question: "How do employees hear back about their suggestion?",
    answer:
      "Every submission gets a tracking code. When the owner moves the suggestion to In Progress or Resolved, or posts a public reply, the employee sees it on the tracking page. Hearing back is what keeps people using a suggestion box.",
  },
  {
    question: "Can we run an employee suggestion box and a customer one together?",
    answer:
      "Yes. They are separate boards, each with its own QR code or link, and both appear in the same dashboard. Many teams run one board for staff ideas and another for customer feedback.",
  },
  {
    question: "Is this a whistleblowing or misconduct reporting channel?",
    answer:
      "No. FeedSolve is built for ideas, improvement suggestions and everyday workplace issues such as broken equipment, process friction or scheduling problems. Reports of harassment, fraud or other misconduct need a dedicated reporting channel with case management and investigation controls.",
  },
  {
    question: "How much does an employee suggestion box cost?",
    answer:
      "FeedSolve has a free 7-day trial with full access, then plans at $19, $49 or $79 per month. There is no charge per employee: plans limit boards, monthly submissions and the team members who manage suggestions. See the pricing page for the limits on each plan.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Employee Suggestion Box Software",
  description:
    "FeedSolve employee suggestion box software: anonymous, no-login idea submission by QR code or link, routed to an owner and tracked to a reply.",
  url: URL,
};

export default function EmployeeSuggestionBoxSoftware() {
  return (
    <>
      <JsonLdScript data={[webPageJsonLd, generateFAQSchema(faqs)]} />
      <VerticalPage
        badge="Employee Suggestion Box"
        breadcrumbLabel="Employee Suggestion Box Software"
        breadcrumbUrl={URL}
        h1="Employee Suggestion Box Software That Gets Ideas Acted On"
        quickSummary="FeedSolve is an employee suggestion box where staff submit ideas anonymously by QR code or link, and every suggestion is routed to an owner and answered."
        subheading="Give every employee, including frontline and shift staff without a company email, a two-minute way to suggest an improvement, then show them what happened to it."
        quickAnswer="FeedSolve is employee suggestion box software. Staff scan a QR code in the break room or open a link and submit an idea or concern in under a minute, anonymously if they want, with no login, app or company email. Each suggestion gets a tracking code. A manager assigns it to an owner, moves it through a Kanban workflow and posts a reply the employee can see. Your resolution rate shows how many ideas were actually acted on. Free 7-day trial, then from $19 per month with no per-employee charge."
        stats={[
          { value: "0", label: "Logins or company emails needed to submit" },
          { value: "1", label: "Owner assigned to every suggestion" },
          { value: "5 min", label: "To set up your first staff board" },
        ]}
        problemHeading="Why employee suggestion programmes go quiet"
        problemPoints={[
          "Suggestions go to a box, an inbox or an HR form, and nobody owns the next step",
          "Employees never hear what happened, so they assume nothing did and stop suggesting",
          "Frontline and shift staff without a desk or company email are left out entirely",
          "Ideas that need another department stall because there is no routing",
          "Without anonymity, people keep quiet about the problems managers most need to hear",
        ]}
        collectLabel="Put a QR code in the break room, on the shop floor or in the staff app, or share a link in team chat. Staff submit in under a minute, anonymously if they choose."
        trackLabel="Every suggestion gets a unique #FSV-XXXX tracking code, so an employee can follow progress without revealing who they are."
        assignLabel="Route each idea to the right department lead with a priority and internal notes. One owner, one next step."
        resolveLabel="Mark it Resolved with a public reply such as 'We trialled it and it is now standard'. The employee sees it, and your resolution rate updates."
        featuresHeading="Built for a suggestion programme people keep using"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "QR code or link, no login",
            body: "Works on any phone browser, so warehouse, retail and shift staff can take part without an account, an app or a company email.",
          },
          {
            icon: <EyeOff size={24} />,
            title: "Anonymous when it matters",
            body: "Contact details are optional. Anonymous submitters still get a tracking code, so you can reply without knowing who they are.",
          },
          {
            icon: <UserCheck size={24} />,
            title: "Every idea gets an owner",
            body: "Assign each suggestion to a department lead with a priority. Nothing sits in a box waiting for someone to empty it.",
          },
          {
            icon: <MapPin size={24} />,
            title: "A board per site or team",
            body: "Separate boards and QR codes for each site, department or shift, all managed from one dashboard. Location-based QR codes on Growth.",
          },
          {
            icon: <BellRing size={24} />,
            title: "Replies employees can see",
            body: "Status changes and public replies show on the tracking page, which is what tells staff their idea was taken seriously.",
          },
          {
            icon: <BarChart3 size={24} />,
            title: "Resolution rate, not just volume",
            body: "See how many suggestions were acted on and where they stall, so the programme is measured on outcomes rather than submissions.",
          },
        ]}
        exampleHeading="A warehouse picker suggests a layout change - here's what happens"
        exampleScenario={[
          {
            step: "Picker scans the QR code on the break-room wall",
            detail:
              "Submits anonymously: 'Move the fast-moving SKUs to aisle 1 - we walk the length of the warehouse for them every order.' No login, no company email.",
          },
          {
            step: "Tracking code #FSV-3301 generated",
            detail: "They save the code and can check progress from their own phone.",
          },
          {
            step: "Operations manager assigns it",
            detail: "Routes it to the warehouse lead, sets priority Medium and adds an internal note to trial it on one shift.",
          },
          {
            step: "Status moves to In Progress",
            detail: "The picker checks the code and sees the idea is being trialled, so they keep suggesting.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'Trialled for two weeks, now standard on all shifts. Thank you.' The resolution rate updates automatically.",
          },
        ]}
        extraSections={
          <>
            <section className="mkt-section">
              <div className="container mkt-narrow">
                <h2>Employee suggestion box software vs an HR form or a box on the wall</h2>
                <p className="mkt-lead">
                  The usual options all collect ideas. The difference is whether anyone owns them and whether the
                  employee ever hears back.
                </p>
              </div>
              <ComparisonTable
                caption="Employee suggestion box software compared with a paper box and an HR form"
                leftHeader="Paper box or HR form"
                rightHeader="FeedSolve"
                rows={[
                  { label: "Who can submit", left: "Staff with a desk, a login or a company email", right: "Anyone with a phone, by QR code or link" },
                  { label: "Anonymity", left: "Paper is anonymous; a form tied to a work account often is not", right: "Optional contact details, no login" },
                  { label: "Ownership", left: "Whoever empties the box or reads the inbox", right: "Each suggestion assigned to an owner" },
                  { label: "Follow-up", left: "Rarely, and never to anonymous submitters", right: "Tracking code and public reply, even when anonymous" },
                  { label: "Routing", left: "Manual forwarding between departments", right: "Boards per site or department, escalation rules on Growth" },
                  { label: "Measuring", left: "A count of entries, if anyone counts", right: "Resolution rate and time to resolve" },
                ]}
              />
            </section>
            <VerticalProseSection
              label="Running the programme"
              heading="How to run an employee suggestion box that stays active"
              background="var(--bg)"
              paragraphs={[
                "A suggestion box lives or dies on the first few weeks. Reply to every suggestion, even when the answer is no, and say why. Act visibly on one early idea and tell the whole team it came from the box. Review the board on a fixed day each week so nothing waits longer than a week for an owner.",
                <>
                  Anonymity is usually the deciding factor for staff. Our guide to an{" "}
                  <Link href="/blog/anonymous-employee-feedback-tool/">anonymous employee feedback tool</Link> covers
                  what makes a channel feel safe, and{" "}
                  <Link href="/blog/suggestion-box-ideas/">suggestion box ideas by workplace</Link> has prompts that
                  get the first submissions in. For a box that also takes customer ideas, see{" "}
                  <Link href="/digital-suggestion-box-software/">online suggestion box software</Link>.
                </>,
                <>
                  FeedSolve is for ideas and everyday workplace issues. Reports of harassment, fraud or other misconduct
                  belong in a dedicated reporting channel with case management. Plan limits and prices are on the{" "}
                  <Link href="/pricing/">pricing page</Link>.
                </>,
              ]}
            />
          </>
        }
        faqs={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        ctaHeading="Launch your employee suggestion box today"
        ctaSub="Create a staff board, print the QR code and collect your first ideas this week. Free 7-day trial."
        relatedLinks={[
          {
            href: "/digital-suggestion-box-software/",
            label: "Online suggestion box",
            sub: "Staff and customer boards",
          },
          {
            href: "/blog/anonymous-employee-feedback-tool/",
            label: "Anonymous employee feedback",
            sub: "What makes staff trust it",
          },
          {
            href: "/blog/suggestion-box-ideas/",
            label: "Suggestion box ideas",
            sub: "Prompts by workplace",
          },
          {
            href: "/blog/employee-problem-reporting-tool/",
            label: "Employee problem reporting",
            sub: "Everyday issues, tracked",
          },
          {
            href: "/pricing/",
            label: "Pricing",
            sub: "From $19/month, no per-employee fee",
          },
        ]}
      />
    </>
  );
}
