import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Blog — Insights on Feedback & Operations",
 description:
  "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
 openGraph: {
  title: "Blog — Insights on Feedback & Operations",
  description:
   "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
 },
 robots: {
  index: true,
  follow: true,
 },
 alternates: {
  canonical: "https://feedsolve.com/blog/",
  languages: {
   "en-GB": "https://feedsolve.com/blog/",
   "en-AU": "https://feedsolve.com/blog/",
   "en-US": "https://feedsolve.com/blog/",
   "en": "https://feedsolve.com/blog/",
   "x-default": "https://feedsolve.com/blog/",
  },
 },
};

const breadcrumbJsonLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://feedsolve.com/" },
  { "@type": "ListItem", position: 2, name: "Blog", item: "https://feedsolve.com/blog/" },
 ],
};

export default function BlogLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <>
   {children}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
   />
  </>
 );
}
