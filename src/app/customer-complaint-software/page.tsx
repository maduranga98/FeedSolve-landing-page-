import { generatePageMetadata } from "@/lib/seo/metadata";
import {
  MessageSquareWarning,
  QrCode,
  Hash,
  UserCheck,
  BarChart3,
  Star,
} from "lucide-react";
import Link from "next/link";
import VerticalPage from "@/components/VerticalPage";
import VerticalProseSection from "@/components/VerticalProseSection";

const URL = "https://feedsolve.com/customer-complaint-software/";

export const metadata = generatePageMetadata({
  title: "Customer Complaint Software: Track & Resolve",
  description:
    "Customer complaint software that turns scattered complaints into resolved issues: no-login QR or link intake, tracking codes, assignment and a dashboard.",
  path: "/customer-complaint-software/",
});

const faqs = [
  {
    q: "What is customer complaint software?",
    a: "Customer complaint software is a tool for capturing, organising, and resolving complaints from customers in one place. Instead of complaints scattered across email, phone notes, and review sites, every complaint is logged, assigned to an owner, tracked to resolution, and measured - so customers feel heard and nothing gets lost.",
  },
  {
    q: "How does it help reduce negative reviews?",
    a: "Most negative reviews happen because a customer felt ignored. By giving customers a fast, no-login way to complain directly to you - via a QR code or link - you capture the issue before it reaches Google, then resolve it and reply. Catching and closing complaints privately is the most reliable way to protect your rating.",
  },
  {
    q: "What is complaint handling software?",
    a: "Complaint handling software supports the front-line work of dealing with a complaint: logging it, assigning someone to own it, replying to the customer and recording the outcome. It is the day-to-day part of complaint management. FeedSolve gives customer-facing teams a single board for that work, with a tracking code the customer can use to check progress.",
  },
  {
    q: "What is the difference between complaint software and complaint management software?",
    a: "Complaint software is the everyday term for a tool that captures and resolves complaints. Complaint management software usually means the wider system: intake, ownership, workflow, reporting and resolution rate across the whole business. This page focuses on the customer-facing side, such as reviews and response. For the full system view, see our complaint management software overview.",
  },
  {
    q: "Is there free customer complaint software?",
    a: "Yes. FeedSolve offers a free 7-day trial with full access. You can create a complaint board, generate a QR code or link, and begin collecting and resolving customer complaints in minutes.",
  },
  {
    q: "Do customers need an account to complain?",
    a: "No. Customers submit by scanning a QR code or opening a link - no login, no app. Each complaint gets a unique tracking code so the customer can follow progress while your team manages everything from one dashboard.",
  },
  {
    q: "Can I see how many complaints we actually resolve?",
    a: "Yes. Every complaint moves through a Kanban workflow from received to resolved, and your dashboard shows a live resolution rate - the percentage of customer complaints your team has closed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Customer Complaint Software",
  description:
    "FeedSolve is customer complaint software: QR or link intake, no-login submission, tracking codes, assignment, resolution workflow, and a resolution rate dashboard.",
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

export default function CustomerComplaintSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage
        badge="Customer Complaint Software"
        breadcrumbLabel="Customer Complaint Software"
        breadcrumbUrl={URL}
        h1="Customer Complaint Software That Protects Your Reputation"
        subheading="Capture customer complaints before they become public reviews - then assign, track, and resolve every one from a single dashboard."
        quickAnswer="FeedSolve is customer complaint software for small and mid-sized businesses. Customers submit a complaint by scanning a QR code or opening a link - no login, no app, in any language. Each complaint gets a unique tracking code, then your team assigns it, works it through a Kanban workflow, and resolves it with a public reply. A live resolution rate shows whether your process works. Catching complaints privately and closing the loop is the most reliable way to reduce negative reviews. Free 7-day trial."
        stats={[
          { value: "0", label: "Logins needed for a customer to complain" },
          { value: "100%", label: "Of complaints tracked to resolution" },
          { value: "2 min", label: "To set up your first complaint board" },
          { value: "Fewer", label: "1-star reviews when you resolve privately" },
        ]}
        problemHeading="Why customer complaints turn into bad reviews"
        problemPoints={[
          "Customers can't reach you easily, so they vent on Google, Yelp, or social media instead",
          "Complaints arrive across phone, email, and in person - with no single owner or record",
          "Without follow-up, the customer assumes you didn't care and never comes back",
          "Staff handle complaints inconsistently because there's no shared workflow",
          "Nobody can say how many complaints were actually resolved - it's never measured",
        ]}
        collectLabel="Put a branded QR code on receipts, tables, packaging, or your website. Customers report a complaint in under 60 seconds - no login, no account, in any language."
        trackLabel="Every complaint gets a unique #FSV-XXXX tracking code, so the customer can check progress without calling or emailing you."
        assignLabel="Route each complaint to the right owner with a priority and internal notes the customer never sees. One owner, one deadline."
        resolveLabel="Resolve the issue, send a public reply, and close the loop. Your resolution rate updates automatically on the dashboard."
        featuresHeading="Everything you need to handle customer complaints well"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "No-login QR & link intake",
            body: "Customers complain by scanning a branded QR code or opening a link - no account, no app, no friction. You capture issues you'd otherwise never hear.",
          },
          {
            icon: <Star size={24} />,
            title: "Catch reviews before they go public",
            body: "Give unhappy customers a direct channel to you. Resolve the issue privately and protect your Google and social ratings.",
          },
          {
            icon: <UserCheck size={24} />,
            title: "Assignment & workflow",
            body: "Assign each complaint to an owner, set a priority, and move it through clear stages so it's handled consistently every time.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code per complaint",
            body: "Each complaint gets a unique code so the customer can follow progress - building trust without creating an account.",
          },
          {
            icon: <BarChart3 size={24} />,
            title: "Resolution rate dashboard",
            body: "See how many complaints you receive and how many you close. Resolution rate is the real measure of customer-complaint handling.",
          },
          {
            icon: <MessageSquareWarning size={24} />,
            title: "One place for every complaint",
            body: "No more lost phone notes or buried emails. Every customer complaint lands on one Kanban board from received to resolved.",
          },
        ]}
        exampleHeading="An unhappy diner complains - here's what happens"
        exampleScenario={[
          {
            step: "Diner scans the QR code on the receipt",
            detail:
              "Submits: 'Waited 40 minutes and the order was cold.' Takes 30 seconds. No account needed.",
          },
          {
            step: "Tracking code #FSV-1271 generated",
            detail:
              "They know the complaint reached the manager directly - not the internet.",
          },
          {
            step: "Manager is notified instantly",
            detail:
              "Sees it on the dashboard, assigns it to the floor lead, sets priority High.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The diner checks their code and sees it's being handled - so they hold off on a public review.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'We've refunded your meal and retrained the team. Please come back - it's on us.' Resolution rate updates.",
          },
        ]}
        extraSections={
          <>
            <VerticalProseSection
              label="Complaint handling software"
              heading="Complaint software and complaint handling software for customer-facing teams"
              background="var(--bg)"
              paragraphs={[
                "Customer complaints are usually first heard by front-line staff: a server, a cashier, a driver or a support agent. What happens in the next few minutes decides whether the customer stays. Complaint handling software gives those staff a simple, shared way to log the problem, hand it to the right owner and tell the customer what is happening.",
                "Good complaint handling follows the same pattern every time: acknowledge the problem, record it, assign an owner, fix it, and reply. When that pattern lives in people's heads, it changes from shift to shift. When it lives in a complaint board, new staff can follow it from day one and managers can see which complaints are still open.",
                "It also matters for reviews. A customer with no way to reach you will often say it publicly instead. A QR code that goes straight to your complaint board gives them a private route, and a tracking code shows them it was received.",
              ]}
            />
            <VerticalProseSection
              label="Related guides"
              heading="Complaint tracking software, in context"
              paragraphs={[
                <>
                  This page covers the customer-facing side. For the full system, including intake, ownership, workflow and
                  reporting, read our <Link href="/complaint-management-software/">complaint management software overview</Link>.
                  See it applied for <Link href="/us/complaint-management-software/">US businesses</Link>,{" "}
                  <Link href="/uk/complaint-management-software/">UK teams</Link> and{" "}
                  <Link href="/au/complaint-management-software/">Australian teams</Link>.
                </>,
                <>
                  For practical advice, see{" "}
                  <Link href="/blog/how-to-respond-to-customer-complaints/">how to respond to customer complaints</Link>,{" "}
                  <Link href="/blog/how-to-handle-restaurant-complaints/">how to handle restaurant complaints</Link> and{" "}
                  <Link href="/blog/complaint-resolution-workflow-smb/">a complaint resolution workflow for small teams</Link>.
                </>,
              ]}
            />
          </>
        }
        faqs={faqs}
        ctaHeading="Turn customer complaints into loyal customers"
        ctaSub="Create a complaint board, generate a QR code, and start resolving in minutes. Free 7-day trial."
        relatedLinks={[
          {
            href: "/complaint-management-software/",
            label: "Complaint management software",
            sub: "The full platform overview",
          },
          {
            href: "/blog/stop-bad-restaurant-reviews-before-posted/",
            label: "Stop bad reviews before they post",
            sub: "Capture complaints first",
          },
          {
            href: "/blog/how-to-respond-to-customer-complaints/",
            label: "Respond to complaints",
            sub: "A practical playbook",
          },
          {
            href: "/restaurants/qr-feedback/",
            label: "Restaurants & F&B",
            sub: "Table-side QR feedback",
          },
          {
            href: "/us/complaint-management-software/",
            label: "US small businesses",
            sub: "Complaint tracking in USD",
          },
          {
            href: "/uk/complaint-management-software/",
            label: "UK businesses",
            sub: "Complaints management in the UK",
          },
          {
            href: "/au/complaint-management-software/",
            label: "Australian businesses",
            sub: "Complaint handling in Australia",
          },
        ]}
      />
    </>
  );
}
