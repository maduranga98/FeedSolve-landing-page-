import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | FeedSolve",
    default: "Industry Solutions | FeedSolve",
  },
  robots: { index: true, follow: true },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
