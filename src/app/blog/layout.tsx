import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "FeedSolve Blog - Insights on feedback and operations",
 description:
  "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
 openGraph: {
  title: "FeedSolve Blog - Insights on feedback and operations",
  description:
   "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
 },
 alternates: {
  canonical: "https://feedsolve.com/blog",
 },
};

const breadcrumbJsonLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://feedsolve.com" },
  { "@type": "ListItem", position: 2, name: "Blog", item: "https://feedsolve.com/blog" },
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
