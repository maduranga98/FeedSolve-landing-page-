import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Blog — Insights on Feedback & Operations",
 description:
  "Practical guides on complaint management, customer feedback, QR code surveys and suggestion boxes for small businesses, restaurants and operations teams.",
 openGraph: {
  title: "Blog — Insights on Feedback & Operations",
  description:
   "Practical guides on complaint management, customer feedback, QR code surveys and suggestion boxes for small businesses, restaurants and operations teams.",
 },
 robots: {
  index: true,
  follow: true,
 },
 alternates: {
  canonical: "https://feedsolve.com/blog/",
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
