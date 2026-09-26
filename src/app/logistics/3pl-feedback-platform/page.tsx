import {
  Boxes,
  Hash,
  Warehouse,
  ClipboardList,
  ShieldCheck,
  Globe,
} from "lucide-react";
import VerticalPage from "@/components/VerticalPage";
import VerticalProseSection from "@/components/VerticalProseSection";
import { JsonLdScript } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo/metadata";
import {
  type FAQItem,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo/schema";

const PAGE_PATH = "/logistics/3pl-feedback-platform/";
const PAGE_URL = `https://feedsolve.com${PAGE_PATH}`;

export const metadata = generatePageMetadata({
  title: "3PL Feedback Platform for Shipper Complaints",
  description:
    "A 3PL feedback platform for shipper and consignee complaints: QR intake with no login, routing to the right site lead, and a public tracking code on every issue.",
  path: PAGE_PATH,
});

const faqs: FAQItem[] = [
  {
    question: "What is a 3PL feedback platform?",
    answer:
      "A 3PL feedback platform is a shared intake and resolution system for every complaint a third-party logistics provider receives - from shippers, consignees, carriers, and warehouse staff. Instead of scattered emails, WhatsApp photos, and calls to a branch manager, each complaint becomes a tracked issue with a category, an owner, a priority, and a status. FeedSolve handles intake through a QR code or link that needs no login, routes each submission to the site or function responsible, and gives the reporter a tracking code to check progress. The result is one record of what went wrong, who fixed it, and how long it took - per site, per lane, and per customer.",
  },
  {
    question: "How do 3PLs collect consignee feedback?",
    answer:
      "Consignees are the hardest group to reach: they are not your contracting customer, just the receiving party at the end of a lane, and they have no account with you. FeedSolve is built for that gap. Put a QR code on the delivery note, the pallet label, the cross-dock receiving desk, or the POD handed over at the door. The consignee scans, picks a category such as Damaged Goods, Short Delivery, or Late Arrival, adds a photo, and submits in under a minute - no app, no password, no portal invitation. Because intake is that cheap, consignees report the damaged pallet themselves instead of telling the shipper, who tells you three days later.",
  },
  {
    question: "Can shippers submit feedback without an account?",
    answer:
      "Yes. Every board has a public submission link and QR code, and neither requires an account, an email verification step, or an app download. Shippers can be given a dedicated link per account or per lane so their submissions arrive pre-tagged. They receive a #FSV tracking code on submission and use that code on the public tracking page to see the current status and any reply from your team. Accounts are only needed on your side, for the people who assign, comment on, and resolve issues.",
  },
  {
    question: "How is this different from a generic complaint form?",
    answer:
      "A generic form collects a complaint and emails it somewhere. It has no owner, no status, and no way for the submitter to check what happened - so the follow-up chase happens by phone anyway. A 3PL feedback platform carries the issue through its whole life: it routes to the warehouse ops lead or transport supervisor for that site, moves through Received, In Progress, and Resolved on a Kanban board, keeps internal investigation notes separate from the public reply, and exposes a status the consignee or shipper can check with a tracking code. You end the month with a resolution rate and an average time-to-resolve per site, not a mailbox of forwarded submissions.",
  },
];

export default function LogisticsThreePlFeedbackPlatform() {
  return (
    <>
      {/*
        SoftwareApplication + Offer schema is already emitted site-wide from
        src/app/layout.tsx (see generateSoftwareAppSchema in @/lib/seo/schema
        for the standalone version) - repeating it here would ship two
        competing entities for the same product on one page.
      */}
      <JsonLdScript
        data={[
          generateFAQSchema(faqs),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://feedsolve.com/" },
            {
              name: "Logistics",
              url: "https://feedsolve.com/logistics/delivery-feedback/",
            },
            { name: "3PL Feedback Platform", url: PAGE_URL },
          ]),
        ]}
      />
      <VerticalPage
        badge="Logistics · 3PL feedback platform"
        breadcrumbLabel="3PL Feedback Platform"
        breadcrumbUrl={PAGE_URL}
        breadcrumbTrail={[
          { name: "Home", url: "https://feedsolve.com/" },
          {
            name: "Logistics",
            url: "https://feedsolve.com/logistics/delivery-feedback/",
          },
          { name: "3PL Feedback Platform", url: PAGE_URL },
        ]}
        h1="3PL Feedback Platform for Third-Party Logistics Providers"
        subheading="Collect shipper and consignee complaints through a QR code or link with no login, route each one to the site lead who owns it, and let the person who reported it track the fix with a #FSV code."
        quickSummary="A 3PL feedback platform turns scattered complaints - damaged pallets, short deliveries, missed windows - into tracked issues with an owner, a status, and a resolution rate you can show a client."
        quickAnswer="FeedSolve gives a third-party logistics provider one intake point for every complaint across its network. A shipper, consignee, carrier, or warehouse operative scans a QR code on a delivery note, a pallet label, or a receiving-desk card and describes the issue in under a minute - no account, no app. The submission routes to the warehouse ops lead, transport supervisor, or account manager responsible for that site, moves through a Kanban board from Received to Resolved, and carries a #FSV tracking code the submitter can check at any time without calling your branch. At the end of the month you have a resolution rate and time-to-resolve per site, per lane, and per client account."
        stats={[
          {
            value: "< 60 sec",
            label: "To report a damaged pallet from the receiving dock",
          },
          {
            value: "Zero",
            label: "Logins - consignees never had an account with you anyway",
          },
          {
            value: "1 code",
            label: "#FSV tracking code per issue, checkable by anyone",
          },
          {
            value: "80%+",
            label: "Resolution rate we recommend for contracted 3PL operations",
          },
        ]}
        problemHeading="Why 3PL complaints never reach the person who can fix them"
        problemPoints={[
          "Consignees have no relationship with you - they report the damaged pallet to the shipper, who forwards it days later with half the detail missing",
          "Complaints land in three places at once: a branch manager's inbox, a WhatsApp group, and a phone call to the account manager - with no single record",
          "A cross-dock issue gets verbally passed to the warehouse team and closed with nothing written down, so the same handling fault repeats next quarter",
          "Shippers ask for a service review and you have anecdotes instead of a resolution rate, an average time-to-resolve, and a site-by-site breakdown",
          "Nobody can tell a consignee what happened to their claim, so they chase - adding inbound call volume on top of the original failure",
        ]}
        collectLabel="QR codes on delivery notes, pallet labels, POD slips, and receiving-desk cards. Shippers get a dedicated link per account or lane. Consignees and warehouse staff submit from any phone in under a minute - no app, no login, no portal invitation."
        trackLabel="Every submission gets a #FSV-XXXX tracking code. The consignee or shipper checks status on the public tracking page without an account and without calling your branch office."
        assignLabel="Routes to the warehouse ops lead, transport supervisor, or account manager by category and site. Priority flags for damaged goods, cold-chain breaks, and missed delivery windows."
        resolveLabel="Log the investigation internally, send the public reply, and close the issue. Resolution rate and time-to-resolve break down by site, lane, and client account for your next service review."
        featuresHeading="Built for third-party logistics networks"
        features={[
          {
            icon: <Boxes size={24} />,
            title: "Shipper and Consignee Intake",
            body: "One board handles both sides of the lane. Shippers submit through an account-specific link; consignees scan a QR code on the delivery note or pallet label. Neither needs an account with you.",
          },
          {
            icon: <Warehouse size={24} />,
            title: "Per-Site and Per-Lane Boards",
            body: "Run a separate board for each distribution centre, cross-dock, or transport region, each with its own QR code and routing - then compare resolution performance across sites in one dashboard.",
          },
          {
            icon: <ClipboardList size={24} />,
            title: "3PL-Specific Categories",
            body: "Damaged Goods, Short Delivery, Late Arrival, Cold-Chain Break, Paperwork / POD, Cross-Dock Handling, Driver Conduct, Stock Discrepancy. Customisable per site and per contract.",
          },
          {
            icon: <Hash size={24} />,
            title: "Public Tracking Codes",
            body: "Each issue carries a #FSV-XXXX code. The consignee who reported the damaged pallet checks progress themselves, which removes the follow-up call your branch team would otherwise absorb.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Audit Trail for Claims and SLAs",
            body: "Timestamped history of every status change, assignee, internal note, and public reply. Exportable evidence for damage claims, insurer queries, and contracted SLA reviews.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language Submission",
            body: "Forms in multiple languages for cross-border lanes and multilingual warehouse teams across South Asia, the Middle East, and East Africa.",
          },
        ]}
        exampleHeading="A consignee reports a damaged pallet at a cross-dock - here's what happens"
        exampleScenario={[
          {
            step: "Consignee scans the QR code on the delivery note",
            detail:
              "At the cross-dock receiving bay. Category: Damaged Goods. Writes: 'Pallet 3 of 4 crushed on the lower tier - 12 cases unsellable.' Attaches two photos. Submitted in 50 seconds, no account.",
          },
          {
            step: "Tracking code #FSV-5182 generated",
            detail:
              "The consignee has written proof the claim was logged, with photos attached and a timestamp - before the truck leaves the yard.",
          },
          {
            step: "Routed to the warehouse ops lead",
            detail:
              "The cross-dock board assigns Damaged Goods to the site ops lead automatically. Priority: High. Target resolution: 48 hours. The account manager for the shipper is copied.",
          },
          {
            step: "Status update posted: In Progress",
            detail:
              "Ops lead pulls the inbound handling record for that pallet and moves the issue to In Progress. The consignee sees the change on their tracking page that afternoon.",
          },
          {
            step: "Internal investigation note added",
            detail:
              "'Double-stack loaded above rated weight on the inbound leg. Retrained the night shift on tier limits and flagged the loading site.' Internal only - never shown publicly.",
          },
          {
            step: "Public reply sent",
            detail:
              "'12 cases confirmed damaged in transit on the inbound leg. A claim has been raised with your shipper's account manager and replacement stock is scheduled on tomorrow's run.'",
          },
          {
            step: "Consignee checks #FSV-5182 and sees Resolved",
            detail:
              "Full timeline, photos, and reply on one page - with no account, no app, and no call to the branch. The issue also lands in the site's monthly resolution-rate report.",
          },
        ]}
        extraSections={
          <>
            <VerticalProseSection
              label="Positioning"
              heading="A complaint form collects. A 3PL feedback platform resolves."
              paragraphs={[
                "Most third-party logistics providers already have a way for customers to complain - a web form on the contact page, a shared claims mailbox, or a phone number for the branch. What none of those have is ownership. A form submission has no assignee, no service clock, and no visible status, so the moment it is sent it becomes invisible to the person who sent it. That invisibility is what generates the follow-up call, the escalation to the account manager, and eventually the line item in a quarterly review about responsiveness.",
                "The difference in a 3PL context is structural. Your complaints do not come from one audience: shippers raise contractual service issues, consignees raise goods issues at the point of receipt, carriers raise handling and paperwork issues, and your own warehouse teams raise operational issues that never reach a customer. Each needs different categories, routing, and replies - but all of them belong in one resolution record, so you can see that three separate complaints last month trace back to a single cross-dock's loading practice.",
                "FeedSolve is built around that record. Intake stays as cheap as a QR scan so issues get reported at all; routing puts each issue in front of the site lead who can act; internal notes keep the investigation separate from what the customer sees; and the public tracking code closes the loop without adding inbound calls. The measurable output is a resolution rate and an average time-to-resolve per site, per lane, and per client account - the numbers a shipper actually asks for when a contract comes up for renewal.",
              ]}
              contrast={[
                {
                  title: "A generic complaint form",
                  tone: "plain",
                  points: [
                    "Lands in a shared mailbox with no owner and no due date",
                    "No status the shipper or consignee can check themselves",
                    "Investigation notes and customer replies live in the same email thread",
                    "No resolution rate, no time-to-resolve, nothing to show in a service review",
                    "Repeat failures at one site stay invisible because nothing is categorised",
                  ],
                },
                {
                  title: "FeedSolve as your 3PL feedback platform",
                  tone: "feedsolve",
                  points: [
                    "Routes to the warehouse ops lead or transport supervisor by category and site",
                    "Public #FSV tracking code - status visible without an account",
                    "Internal investigation notes stay separate from the public reply",
                    "Resolution rate and time-to-resolve per site, lane, and client account",
                    "Categorised history exposes the repeat cause behind separate complaints",
                  ],
                },
              ]}
            />
          </>
        }
        faqs={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        ctaHeading="Every shipper and consignee complaint tracked to resolution."
        ctaSub="Set up your first site board in 2 minutes. Free to start, no credit card."
        relatedLinks={[
          {
            href: "/logistics/delivery-feedback/",
            label: "Delivery Feedback",
            sub: "Route-level complaint tracking",
          },
          {
            href: "/manufacturing/supplier-feedback/",
            label: "Manufacturing",
            sub: "Supplier quality complaints",
          },
          {
            href: "/real-estate/tenant-feedback/",
            label: "Real Estate",
            sub: "Tenant maintenance requests",
          },
          {
            href: "/blog/feedback-resolution-rate/",
            label: "Read the guide",
            sub: "How to measure resolution rate",
          },
        ]}
      />
    </>
  );
}
