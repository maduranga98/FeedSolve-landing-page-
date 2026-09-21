import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FeedSolve vs Other Tools - Feature Comparison",
  description:
    "Compare FeedSolve with Google Forms, Typeform, Zonka Feedback, and other tools. See why FeedSolve is built for complaint resolution.",
  openGraph: {
    title: "FeedSolve vs Other Tools",
    description:
      "Compare FeedSolve with other feedback collection and complaint management tools.",
  },
  alternates: {
    canonical: "https://feedsolve.com/compare/",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
