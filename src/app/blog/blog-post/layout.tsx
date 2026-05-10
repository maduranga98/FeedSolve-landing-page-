import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Why WhatsApp is killing your customer feedback loop - FeedSolve Blog",
 description:
  "Most businesses run their entire complaints process through a WhatsApp group. Here is why that breaks down at scale and what to do instead.",
 openGraph: {
  title: "Why WhatsApp is killing your customer feedback loop - FeedSolve Blog",
  description:
   "Most businesses run their entire complaints process through a WhatsApp group. Here is why that breaks down at scale and what to do instead.",
 },
 robots: {
  index: false,
  follow: true,
 },
};

export default function BlogPostLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return children;
}
