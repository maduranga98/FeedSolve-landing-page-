import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FeedSolve Blog — Insights on feedback and operations",
  description:
    "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
  openGraph: {
    title: "FeedSolve Blog — Insights on feedback and operations",
    description:
      "Practical guides, case studies, and ideas for teams who take customer feedback seriously.",
  },
  alternates: {
    canonical: "https://feedsolve-e9483.web.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
