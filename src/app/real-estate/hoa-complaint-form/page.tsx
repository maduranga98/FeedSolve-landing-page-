import {
  FileText,
  Hash,
  Users,
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

const PAGE_PATH = "/real-estate/hoa-complaint-form/";
const PAGE_URL = `https://feedsolve.com${PAGE_PATH}`;

export const metadata = generatePageMetadata({
  title: "HOA Complaint Form — Collect, Route & Resolve Resident Complaints",
  description:
    "An HOA complaint form that routes each submission to the board member on duty, tracks it to resolution, and gives residents a code to check status without calling.",
  path: PAGE_PATH,
});

const faqs: FAQItem[] = [
  {
    question: "How do I file an HOA complaint?",
    answer:
      "With FeedSolve, a resident scans the QR code on the community noticeboard, in the lobby, or in the monthly HOA newsletter - or opens the submission link emailed by the board. They choose a category such as Noise, Parking, Landscaping, Pets, or Architectural Violation, describe what happened, optionally attach a photo, and submit. There is no account to create and no app to install. The form returns a #FSV tracking code the resident keeps, and the complaint appears immediately on the board's dashboard with a category, a priority, and an owner.",
  },
  {
    question: "What should an HOA complaint form include?",
    answer:
      "At minimum: the category of violation or concern, the date and time it occurred, the location within the community, a free-text description, and an optional photo. Beyond the fields, a workable HOA complaint form needs three things most templates leave out - a routing rule that sends the submission to the board member or property manager responsible for that category, a status the resident can see without contacting the office, and a written record of what was done. Those three turn a filed complaint into a resolved one, which is what the resident actually wanted.",
  },
  {
    question: "Can residents submit anonymously?",
    answer:
      "Yes, if the board enables anonymous mode on the form. Anonymity matters more in an HOA than in most settings: the person a resident is complaining about is usually their neighbour, and the fear of being identified is the single biggest reason community issues go unreported until they escalate. Anonymous submitters still receive a #FSV tracking code, so they can follow the outcome without ever giving their name. Boards that need identifiable submissions for enforcement can leave the mode off, or run one identified board for violations and one anonymous board for general concerns.",
  },
  {
    question: "How is this different from a paper or PDF form?",
    answer:
      "A paper or PDF form is a collection step with nothing behind it. It gets dropped in the office, scanned, emailed, and read whenever someone opens the mailbox - and once it is filed, the resident has no way of knowing whether anyone acted on it. FeedSolve replaces the whole chain: the submission is timestamped on arrival, routed to the board member on duty, tracked through Received, In Progress, and Resolved, and closed with a written reply the resident can read on their tracking page. The board also gets something a filing cabinet cannot give it - a resolution rate and an average time-to-resolve to report at the annual meeting.",
  },
];

export default function RealEstateHoaComplaintForm() {
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
              name: "Real Estate",
              url: "https://feedsolve.com/real-estate/tenant-feedback/",
            },
            { name: "HOA Complaint Form", url: PAGE_URL },
          ]),
        ]}
      />
      <VerticalPage
        badge="Real Estate · HOA complaint form"
        breadcrumbLabel="HOA Complaint Form"
        breadcrumbUrl={PAGE_URL}
        breadcrumbTrail={[
          { name: "Home", url: "https://feedsolve.com/" },
          {
            name: "Real Estate",
            url: "https://feedsolve.com/real-estate/tenant-feedback/",
          },
          { name: "HOA Complaint Form", url: PAGE_URL },
        ]}
        h1="HOA Complaint Form That Actually Gets Resolved"
        subheading="Residents submit noise, parking, landscaping, and violation complaints from a QR code with no account. Each one routes to the board member on duty and carries a #FSV code the resident can check without calling the office."
        quickSummary="A form collects complaints. FeedSolve routes, assigns, and resolves them - and gives residents a tracking code to check status without calling the office."
        quickAnswer="FeedSolve gives an HOA board or community manager a complaint form that does not stop at collection. A resident scans a QR code on the noticeboard or opens the link from the monthly newsletter, picks a category such as Noise, Parking, Pets, or Architectural Violation, and submits in under a minute - anonymously if the board allows it. The complaint routes to the board member on duty or the managing agent, moves across a Kanban board from Received to Resolved, and keeps internal discussion separate from the reply the resident sees. The resident checks progress with a #FSV tracking code instead of calling the office, and the board ends the year with a documented record of every complaint and how long it took to close."
        stats={[
          {
            value: "< 60 sec",
            label: "For a resident to file a complaint from the noticeboard QR",
          },
          {
            value: "Anonymous",
            label: "Mode available - residents complain about neighbours safely",
          },
          {
            value: "1 code",
            label: "#FSV tracking code per complaint, no account needed",
          },
          {
            value: "100%",
            label: "Of complaints timestamped with a full resolution history",
          },
        ]}
        problemHeading="Why HOA complaints stall between the resident and the board"
        problemPoints={[
          "Complaints arrive by email, text, hallway conversation, and Facebook group - so no one can say how many are open or who owns them",
          "Residents fear being identified to the neighbour they are complaining about, so issues go unreported until they escalate",
          "A volunteer board rotates duties, and complaints handed over verbally between board members are lost at handover",
          "Nothing tells the resident their complaint was received, so they file again, email a board member directly, or raise it at the annual meeting",
          "When enforcement is challenged, the board has recollection instead of a timestamped record of what was reported and what was done",
        ]}
        collectLabel="QR codes on the community noticeboard, in the lobby, in the monthly newsletter, and in the welcome pack. Residents file a complaint from any phone in under a minute - no app, no account, anonymously if the board allows it."
        trackLabel="Each complaint gets a #FSV-XXXX tracking code. Residents check the status themselves instead of calling the office or emailing three board members in parallel."
        assignLabel="Routes to the board member on duty or the managing agent by category, with a priority and a target date. Rotating board duties no longer lose complaints at handover."
        resolveLabel="Record the action taken internally, send the resident a written reply, and close the complaint. Resolution rate and time-to-resolve are ready for the annual meeting."
        featuresHeading="Built for HOA boards and community managers"
        features={[
          {
            icon: <FileText size={24} />,
            title: "Noticeboard and Newsletter QR Codes",
            body: "Put the complaint form where residents already look - lobby noticeboards, the monthly newsletter, the welcome pack, and the community website. One scan, no portal login to remember.",
          },
          {
            icon: <Users size={24} />,
            title: "Anonymous Submission Mode",
            body: "Let residents report a neighbour's noise, pet, or parking violation without giving their name. They still receive a tracking code and still see the outcome.",
          },
          {
            icon: <ClipboardList size={24} />,
            title: "HOA-Specific Categories",
            body: "Noise, Parking, Pets, Landscaping, Architectural Violation, Common Areas, Pool / Amenities, Trash & Recycling, Security. Customisable per community.",
          },
          {
            icon: <Hash size={24} />,
            title: "Resident Tracking Codes",
            body: "Every complaint carries a #FSV-XXXX code. Residents check progress on the public tracking page - which is what stops the repeat calls and the duplicate filings.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Record for Enforcement and Disputes",
            body: "Timestamped history of every status change, board assignee, internal note, and public reply. Exportable when a violation notice or a fine is challenged.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-Language Forms",
            body: "Submission forms in multiple languages so every household in a mixed community can file a complaint in the language they are comfortable writing in.",
          },
        ]}
        exampleHeading="A resident reports a noise and parking violation - here's what happens"
        exampleScenario={[
          {
            step: "Resident scans the noticeboard QR code",
            detail:
              "Category: Noise / Parking. Writes: 'Vehicle idling with music after 11pm in visitor bay 4, third night this week.' Submits anonymously in 55 seconds. No account, no app.",
          },
          {
            step: "Tracking code #FSV-3417 generated",
            detail:
              "The resident keeps the code. They have proof the complaint was filed without having to identify themselves to a neighbour two doors down.",
          },
          {
            step: "Routed to the board member on duty",
            detail:
              "The community board assigns Noise and Parking to this month's duty board member automatically. Priority: Medium. Target: 5 days. The managing agent is copied.",
          },
          {
            step: "Status update posted: In Progress",
            detail:
              "The duty board member checks the visitor-bay register, identifies the unit, and moves the complaint to In Progress. The resident sees the change on their tracking page.",
          },
          {
            step: "Internal note added",
            detail:
              "'Unit 22 guest vehicle. Courtesy notice issued under quiet-hours rule 4.2. Second occurrence escalates to a fine.' Internal only - never shown to the submitter.",
          },
          {
            step: "Public reply sent",
            detail:
              "'Thank you for reporting this. The vehicle has been identified and a courtesy notice has been issued under the community quiet-hours rule. Please file again if it recurs.'",
          },
          {
            step: "Resident checks #FSV-3417 and sees Resolved",
            detail:
              "Full timeline and reply on one page - no call to the office, no email chain, no raising it at the annual meeting. The complaint is in the board's record either way.",
          },
        ]}
        extraSections={
          <>
            <VerticalProseSection
              label="Positioning"
              heading="A form collects complaints. FeedSolve resolves them."
              paragraphs={[
                "Most HOA boards start with a static form builder - a Jotform or Google Forms page linked from the community website. It is a reasonable first step, and it solves exactly one problem: getting the complaint out of a resident's head and into writing. Everything after that is still manual. The submission lands in a shared inbox or a spreadsheet row, someone has to notice it, someone has to decide who owns it, and the resident who filed it has no way to find out whether any of that happened.",
                "That gap is where HOA complaints go wrong. Boards rotate duties, volunteers change each year, and a complaint handed over verbally at a monthly meeting is a complaint that quietly disappears. Residents respond to the silence the only way they can - they file again, email three board members separately, corner someone in the parking lot, or raise it at the annual meeting where it becomes a governance problem instead of a maintenance one.",
                "FeedSolve keeps the low-friction submission and adds the part a form cannot do. Each complaint has an owner, a priority, and a visible status. Internal board discussion stays separate from the reply the resident reads. The resident checks a #FSV tracking code instead of calling the office. And because every complaint is categorised and timestamped, the board can show at the annual meeting how many complaints were filed, how many were resolved, and how long resolution took - with an exportable record behind each one if a violation notice is ever challenged.",
              ]}
              contrast={[
                {
                  title: "A static complaint form",
                  tone: "plain",
                  points: [
                    "Submissions land in a shared inbox or spreadsheet with no owner",
                    "No status - the resident calls the office to find out anything",
                    "Complaints are lost when board duties rotate between volunteers",
                    "Board discussion and the resident-facing answer live in the same thread",
                    "No resolution rate or time-to-resolve to report at the annual meeting",
                  ],
                },
                {
                  title: "FeedSolve as your HOA complaint form",
                  tone: "feedsolve",
                  points: [
                    "Routes to the board member on duty by category, with a target date",
                    "Public #FSV tracking code - residents check status without calling",
                    "Handover-proof: every open complaint is visible on one board",
                    "Internal notes stay private; the public reply is written separately",
                    "Timestamped record, resolution rate, and exportable enforcement history",
                  ],
                },
              ]}
            />
          </>
        }
        faqs={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        ctaHeading="Give residents a complaint form that closes the loop."
        ctaSub="Set up your community's complaint board in 2 minutes. Free to start."
        relatedLinks={[
          {
            href: "/real-estate/tenant-feedback/",
            label: "Tenant Feedback Portal",
            sub: "Maintenance requests for landlords",
          },
          {
            href: "/blog/hoa-maintenance-request-tracking/",
            label: "Read the guide",
            sub: "HOA maintenance request tracking",
          },
          {
            href: "/compare/feedsolve-vs-jotform/",
            label: "FeedSolve vs. Jotform",
            sub: "Form builder vs. resolution workflow",
          },
          {
            href: "/logistics/delivery-feedback/",
            label: "Logistics",
            sub: "Delivery complaint tracking",
          },
        ]}
      />
    </>
  );
}
