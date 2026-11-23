import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import PricingSection from "@/components/home/PricingSection";
import { pricingPlans } from "@/data/pricingPlans";
import { JsonLdScript } from "@/components/JsonLd";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { type FAQItem, generateFAQSchema, landingBreadcrumb } from "@/lib/seo";
import { TRIAL_DAYS } from "@/lib/seo/pricing";
import { SITE_URL } from "@/lib/seo/site";

const PATH = "/pricing/";
const URL = `${SITE_URL}${PATH}`;

export const metadata = generatePageMetadata({
  title: "Pricing: Complaint Management From $19/Month",
  description:
    "FeedSolve pricing: Starter $19, Growth $49 and Business $79 per month, with 20% off annual billing. No per-agent seats. Free 7-day trial with full access.",
  path: PATH,
});

// Plan limits come straight from the live pricing cards so this table can
// never disagree with them. The first feature line of each paid plan is
// "N boards · N submissions/month · N team members".
const paidPlans = pricingPlans
  .filter((plan) => plan.monthlyPrice !== null)
  .map((plan) => {
    const [boards = "", submissions = "", team = ""] = (plan.features[0] ?? "").split(" · ");
    return {
      tier: plan.tier,
      monthly: plan.monthlyPrice as number,
      annualMonthly: plan.annualMonthlyPrice as number,
      annualTotal: plan.annualTotal as number,
      boards,
      submissions,
      team,
      adds: plan.features.slice(1).filter((f) => !f.startsWith("Everything in")),
    };
  });

const faqs: FAQItem[] = [
  {
    question: "How much does FeedSolve cost?",
    answer:
      "FeedSolve has three paid plans: Starter at $19 per month, Growth at $49 per month and Business at $79 per month. Annual billing saves about 20% (Starter $182, Growth $470 and Business $758 per year). Every plan starts with a free 7-day trial with full access.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "No. There is no permanent free plan. There is a free 7-day trial with full access, so you can set up a board, print a QR code and collect real submissions before you pay.",
  },
  {
    question: "Do you charge per agent or per user?",
    answer:
      "No. FeedSolve is priced by plan, not per agent seat. Each plan includes a number of team members: 3 on Starter, 10 on Growth and unlimited on Business. The people who submit feedback or complaints never need an account and are never counted.",
  },
  {
    question: "Do customers or suppliers who submit feedback count towards my plan?",
    answer:
      "Submitters are not users and are not charged. Plans limit the number of boards, monthly submissions and team members who manage them: 1,500 submissions per month on Starter, 5,000 on Growth and 15,000 on Business.",
  },
  {
    question: "Which plan should a small business choose?",
    answer:
      "Starter fits a single location or one team that needs status tracking, assignment and replies to submitters. Growth fits multiple locations or teams that want custom branding, location-based QR codes, escalation rules and advanced analytics. Business fits organisations that need custom roles and permissions, audit logs and unlimited team members.",
  },
  {
    question: "What does complaint management software usually cost for a mid-size business?",
    answer:
      "It depends on the pricing model. Help desks usually charge per agent seat, survey tools often cap responses per plan, and enterprise customer-experience platforms are usually quote-only. A mid-size team should total the cost for its real number of staff, locations and monthly submissions, then add any onboarding fees. FeedSolve publishes flat plan prices from $19 to $79 per month with no setup fee.",
  },
  {
    question: "Can I switch plans or cancel?",
    answer:
      "Yes. Monthly plans have no annual lock-in, and you can upgrade as you add boards, submissions or team members.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLdScript
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FeedSolve Pricing",
            description:
              "FeedSolve pricing for complaint management and feedback resolution software: Starter $19, Growth $49 and Business $79 per month, with a free 7-day trial.",
            url: URL,
            isPartOf: { "@type": "WebSite", name: "FeedSolve", url: `${SITE_URL}/` },
          },
          landingBreadcrumb("Pricing", URL),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar variant="blog" />
      <main id="main-content">
        <section style={{ background: "var(--navy)", padding: "92px 32px 68px" }}>
          <div className="container">
            <div className="section-label" style={{ color: "var(--teal-text)", borderColor: "rgba(255,255,255,0.14)" }}>
              <Tag size={13} /> Pricing
            </div>
            <h1 style={{ color: "white", marginTop: 16, maxWidth: 820 }}>FeedSolve pricing</h1>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 18, lineHeight: 1.65, maxWidth: 760, marginTop: 16 }}>
              FeedSolve costs $19, $49 or $79 per month depending on how many boards, submissions and team members you
              need, with about 20% off on annual billing. There are no per-agent seats, no setup fees and no charge for
              the customers, suppliers or staff who submit. Every plan starts with a free {TRIAL_DAYS}-day trial with full
              access.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
              <a href="https://app.feedsolve.com/signup" className="btn-primary teal" target="_blank" rel="noopener noreferrer">
                Start the free trial <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="mkt-section" style={{ background: "var(--bg)" }}>
          <div className="container mkt-narrow">
            <h2>Plan limits at a glance</h2>
            <p className="mkt-lead">
              Plans differ by how much you run through FeedSolve and how much control you need. Submitters are never
              counted as users.
            </p>
          </div>
          <div className="container">
            <div className="cmp-table-wrap mkt-table">
              <table className="cmp-table">
                <caption className="sr-only">FeedSolve plan limits and prices</caption>
                <thead>
                  <tr>
                    <th scope="col">Plan</th>
                    <th scope="col">Monthly</th>
                    <th scope="col">Annual</th>
                    <th scope="col">Boards</th>
                    <th scope="col">Submissions</th>
                    <th scope="col">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {paidPlans.map((plan) => (
                    <tr key={plan.tier}>
                      <th scope="row">{plan.tier}</th>
                      <td>${plan.monthly}/month</td>
                      <td>
                        ${plan.annualMonthly}/month (${plan.annualTotal}/year)
                      </td>
                      <td>{plan.boards}</td>
                      <td>{plan.submissions}</td>
                      <td>{plan.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mkt-section">
          <div className="container">
            <h2>Which plan fits your team</h2>
            <div className="mkt-industries">
              {paidPlans.map((plan) => (
                <article key={plan.tier} className="mkt-card">
                  <h3>
                    {plan.tier} - ${plan.monthly}/month
                  </h3>
                  <p>
                    {plan.tier === "Starter" &&
                      "For one location or one team that wants every complaint and suggestion owned, tracked and answered."}
                    {plan.tier === "Growth" &&
                      "For several locations or teams that want their own branding, a QR code per location and escalation when issues stall."}
                    {plan.tier === "Business" &&
                      "For organisations that need roles, permissions and audit logs, with no cap on the team members who manage issues."}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-mid)", lineHeight: 1.7 }}>
                    {plan.adds.slice(0, 5).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-section" style={{ background: "var(--bg)" }}>
          <div className="container mkt-narrow">
            <h2>How complaint management software is usually priced</h2>
            <p className="mkt-body">
              Most tools in this space use one of four pricing models, and the model matters more than the headline
              price. <strong>Per-agent seats</strong> are common in help desks: the bill grows with every staff member who
              touches a ticket. <strong>Response caps</strong> are common in survey tools: the plan limits how many
              responses you can collect. <strong>Quote-only contracts</strong> are common in enterprise
              customer-experience platforms, usually with onboarding fees and annual terms. <strong>Flat plans</strong>{" "}
              charge one published price for a set number of boards, submissions and team members.
            </p>
            <p className="mkt-body">
              FeedSolve uses flat plans. To compare it fairly with a seat-based or quote-only tool, work out the yearly
              cost for your real number of staff, locations and monthly submissions on each, then add any setup fee. For a
              wider look at the options, read our guide to{" "}
              <Link href="/blog/complaint-management-solutions/">complaint management solutions, types and costs</Link>, or
              see how FeedSolve compares as a{" "}
              <Link href="/alternatives/freshdesk/">Freshdesk alternative with no per-agent fees</Link> and a{" "}
              <Link href="/alternatives/medallia/">Medallia alternative without quote-only pricing</Link>.
            </p>
          </div>
        </section>

        <section className="mkt-section">
          <div className="container mkt-narrow">
            <h2>Pricing questions</h2>
            <FaqList faqs={faqs} />
          </div>
        </section>

        <section className="mkt-section" style={{ background: "var(--bg)" }}>
          <div className="container mkt-narrow">
            <h2>What every plan is built around</h2>
            <p className="mkt-body">
              Every plan includes no-login submission by QR code or link, a tracking code for each submitter and the
              resolution workflow. See how it works for{" "}
              <Link href="/complaint-management-software/">complaint management</Link>, an{" "}
              <Link href="/employee-suggestion-box-software/">employee suggestion box</Link>,{" "}
              <Link href="/restaurants/qr-feedback/">restaurant QR feedback</Link> or{" "}
              <Link href="/healthcare/patient-complaint-software/">patient complaints in clinics</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
