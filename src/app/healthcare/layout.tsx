import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | FeedSolve",
    default: "Healthcare Solutions | FeedSolve",
  },
  robots: { index: true, follow: true },
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
