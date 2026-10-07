import { generatePageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { Stethoscope, QrCode, EyeOff, Hash, ListChecks, Globe } from "lucide-react";
import VerticalPage from "@/components/VerticalPage";
import VerticalProseSection from "@/components/VerticalProseSection";
import { JsonLdScript } from "@/components/JsonLd";
import { type FAQItem, generateFAQSchema, generateSoftwareAppSchema } from "@/lib/seo/schema";

const URL = "https://feedsolve.com/healthcare/patient-complaint-software/";

export const metadata = generatePageMetadata({
  title: "Hospital Complaint Management Software",
  description:
    "Hospital and clinic complaints in one place: patients submit by QR code or link with no login, and your team tracks each one to resolution. Free 7-day trial.",
  path: "/healthcare/patient-complaint-software/",
});

const faqs: FAQItem[] = [
  {
    question: "What is hospital complaint management software?",
    answer:
      "Hospital complaint management software gives a hospital or clinic one place to receive complaints, assign each one to an owner, track its status and reply to the patient. It replaces complaints scattered across reception notes, emails and paper forms, so you can see which hospital complaints are still open.",
  },
  {
    question: "Do patients need an account to submit a complaint?",
    answer:
      "No. Patients scan a QR code or open a link and submit from any phone browser, with no login and no app. Each submission gets a tracking code, so the patient can check progress later without creating an account.",
  },
  {
    question: "Can patients complain anonymously?",
    answer:
      "Yes. Anonymous, no-login submission is supported, and contact details are optional. An anonymous submission still gets a tracking code, so the clinic can reply publicly and the patient can see what happened without giving a name.",
  },
  {
    question: "Is this patient complaint software a clinical or medical records system?",
    answer:
      "No. FeedSolve is an operational complaint and feedback tool. It records what the person chooses to submit, such as a category, a description and optional contact details. It is not an electronic health record, and it does not replace the incident reporting your organisation already uses for serious clinical events.",
  },
  {
    question: "Can I run separate boards for different departments or clinics?",
    answer:
      "Yes. Each board has its own QR code and link, so a hospital can keep one board per ward, department or site, and a group of clinics can keep one per location. Submissions from every board appear in one dashboard.",
  },
  {
    question: "Does it work for patient feedback as well as complaints?",
    answer:
      "Yes. The same QR code or link collects complaints, suggestions and general patient feedback. Your team assigns each item to an owner, replies, and marks it resolved, so patient feedback leads to action instead of sitting in a comment box.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hospital and Clinic Complaint Management Software",
  description:
    "FeedSolve hospital and clinic complaint management: QR or link intake with no login, tracking codes, assignment and resolution workflow.",
  url: URL,
};

export default function HealthcarePatientComplaintSoftware() {
  return (
    <>
      <JsonLdScript
        data={[
          webPageJsonLd,
          generateFAQSchema(faqs),
          generateSoftwareAppSchema({
            description:
              "FeedSolve is hospital and clinic complaint management software. Patients submit complaints and feedback by QR code or link with no login, and your team assigns each one to an owner and tracks it to resolution. 7-day free trial.",
            featureList: [
              "No-login patient complaint submission by QR code or link",
              "Anonymous submission with optional contact details",
              "Tracking code for every submission",
              "Assignment, internal notes and Kanban resolution workflow",
              "Public replies to patients",
              "Separate boards per department or clinic",
              "Multi-language submission forms",
            ],
          }),
        ]}
      />
      <VerticalPage
        badge="Healthcare · Patient complaints"
        breadcrumbLabel="Hospital Complaint Management Software"
        breadcrumbUrl={URL}
        h1="Hospital and Clinic Complaint Management Software"
        quickSummary="FeedSolve is hospital and clinic complaint management software. Patients submit complaints by QR code or link with no login, and your team tracks every one to resolution."
        subheading="Give patients a simple way to raise hospital complaints and clinic complaints - then assign, reply to and resolve each one from a single dashboard."
        quickAnswer="FeedSolve is complaint management software for hospitals and clinics. Patients and visitors scan a QR code in reception, a ward or a waiting room, or open a link, and submit a complaint or patient feedback with no login and no app. Each submission gets a tracking code, then your team assigns it, moves it through a Kanban workflow and replies publicly. Submissions can be anonymous, and contact details are optional. Free 7-day trial."
        stats={[
          { value: "0", label: "Logins needed to submit a complaint" },
          { value: "100%", label: "Of complaints tracked with a unique code" },
          { value: "2 min", label: "To set up your first complaint board" },
        ]}
        problemHeading="Why hospital complaints get lost"
        problemPoints={[
          "Complaints reach reception, the ward, email and paper forms, with no single owner",
          "Patients who had a bad experience rarely raise it face to face, so it surfaces later as a public review",
          "Without a tracking code, patients cannot tell whether anyone read their complaint",
          "Nobody can say how many clinic complaints were actually resolved, or where they stall",
          "A comment box on the wall is never emptied on a schedule and never answered",
        ]}
        collectLabel="Place a QR code in reception, a waiting room or a ward, or share a link in appointment messages. Patients submit a complaint or feedback in under a minute, with no account and no app."
        trackLabel="Every submission gets a unique #FSV-XXXX tracking code, so a patient can check progress without calling the front desk."
        assignLabel="Route each complaint to a department lead or practice manager, set a priority and add internal notes the patient never sees."
        resolveLabel="Move it to Resolved and send a public reply. Your resolution rate updates automatically on the dashboard."
        featuresHeading="Built for hospital and clinic complaint handling"
        features={[
          {
            icon: <QrCode size={24} />,
            title: "QR code in reception or on the ward",
            body: "A branded QR code and shareable link put the complaint form where patients are, with nothing to download.",
          },
          {
            icon: <EyeOff size={24} />,
            title: "Anonymous, no-login submission",
            body: "Patients can raise a sensitive concern without giving a name. Contact details are optional, and anonymous submissions still get a tracking code.",
          },
          {
            icon: <Hash size={24} />,
            title: "Tracking code for every complaint",
            body: "Patients follow progress with their code instead of phoning reception to ask what happened.",
          },
          {
            icon: <ListChecks size={24} />,
            title: "Assignment and resolution workflow",
            body: "Every complaint has an owner, a priority and a status on a Kanban board, with a timestamped history of each change.",
          },
          {
            icon: <Stethoscope size={24} />,
            title: "A board per department or clinic",
            body: "Keep separate boards for a ward, a department or each clinic location, each with its own QR code, and manage them from one dashboard.",
          },
          {
            icon: <Globe size={24} />,
            title: "Multi-language submission forms",
            body: "Let patients submit in their own language while your team manages everything in yours.",
          },
        ]}
        exampleHeading="A patient raises a waiting-time complaint - here's what happens"
        exampleScenario={[
          {
            step: "Patient scans the QR code in the waiting room",
            detail:
              "Submits: 'Waited well past my appointment time and nobody updated us.' Takes under a minute, no account needed.",
          },
          {
            step: "Tracking code #FSV-2210 generated",
            detail:
              "They note the code and know the complaint is logged, whether or not they gave a name.",
          },
          {
            step: "Practice manager is notified",
            detail:
              "Sees it on the dashboard, assigns it to the front-desk lead and sets the priority.",
          },
          {
            step: "Status moves to In Progress",
            detail:
              "The patient checks the code and sees it is being handled, so there is no need to call.",
          },
          {
            step: "Resolved with a public reply",
            detail:
              "'We have changed how delays are communicated at reception. Thank you for telling us.' The resolution rate updates.",
          },
        ]}
        extraSections={
          <VerticalProseSection
            label="Patient feedback and complaints"
            heading="Patient complaint software and patient feedback, in context"
            background="var(--bg)"
            paragraphs={[
              "Most hospitals and clinics already receive complaints. The gap is what happens next: who owns each one, whether the patient hears back, and whether anyone can see how many were resolved. Patient complaint software closes that gap by giving every complaint an owner, a status and a reply.",
              <>
                For a practical walkthrough of setting this up in a clinic, read our guide to a{" "}
                <Link href="/blog/healthcare-patient-feedback-system/">patient feedback system for clinics</Link>.
                Running a pharmacy or diagnostic centre? See{" "}
                <Link href="/blog/pharmacy-patient-feedback/">patient feedback for pharmacies</Link>. For the wider
                system, see{" "}
                <Link href="/complaint-management-software/">complaint management software</Link>.
              </>,
              "FeedSolve is an operational complaint and feedback tool. It is not a clinical records system, and it does not replace the incident reporting your organisation already uses for serious clinical events.",
            ]}
          />
        }
        faqs={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        ctaHeading="Every patient complaint tracked and answered."
        ctaSub="Create a complaint board, generate a QR code and start resolving in minutes. Free 7-day trial."
        relatedLinks={[
          {
            href: "/blog/healthcare-patient-feedback-system/",
            label: "Patient feedback system for clinics",
            sub: "Collect and resolve without the complexity",
          },
          {
            href: "/blog/pharmacy-patient-feedback/",
            label: "Pharmacy patient feedback",
            sub: "Feedback from the counter",
          },
          {
            href: "/complaint-management-software/",
            label: "Complaint management software",
            sub: "The full system overview",
          },
          {
            href: "/qr-code-feedback/",
            label: "QR code feedback",
            sub: "Scan, submit, resolve",
          },
          {
            href: "/real-estate/tenant-feedback/",
            label: "Real Estate",
            sub: "Tenant complaint management",
          },
        ]}
      />
    </>
  );
}
