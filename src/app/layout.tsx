import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
 variable: "--font-display",
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800"],
 display: "swap",
});

const dmSans = DM_Sans({
 variable: "--font-body",
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
 style: ["normal", "italic"],
 display: "swap",
});

const lora = Lora({
 variable: "--font-prose",
 subsets: ["latin"],
 weight: ["400", "600"],
 style: ["normal", "italic"],
 display: "swap",
});

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {
  default: "Complaint Tracking & Feedback Software for SMBs | FeedSolve",
  template: "%s | FeedSolve",
 },
 description:
  "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free to start, no credit card.",
 openGraph: {
  title: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  description:
   "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free to start, no credit card.",
  url: `${SITE_URL}/`,
  siteName: "FeedSolve",
  locale: "en_US",
  type: "website",
  images: [
   {
    url: `${SITE_URL}/feedsolve.webp`,
    width: 1200,
    height: 630,
    alt: "FeedSolve dashboard - branded QR code feedback management and complaint tracking software for SMBs",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  description:
   "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free to start, no credit card.",
  images: [`${SITE_URL}/feedsolve.webp`],
 },
 manifest: "/manifest.json",
 robots: {
  index: true,
  follow: true,
 },
 alternates: {
  canonical: `${SITE_URL}/`,
  languages: {
   "en-GB": `${SITE_URL}/`,
   "en-AU": `${SITE_URL}/`,
   "en-US": `${SITE_URL}/`,
   "en": `${SITE_URL}/`,
   "x-default": `${SITE_URL}/`,
  },
 },
 icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
 },
};

export const viewport: Viewport = {
 width: "device-width",
 initialScale: 1,
 themeColor: "#1E3557",
};

const softwareApplicationJsonLd = {
 "@context": "https://schema.org",
 "@type": "SoftwareApplication",
 name: "FeedSolve",
 alternateName: "FeedSolve Feedback & Complaint Management",
 applicationCategory: "BusinessApplication",
 applicationSubCategory: "CustomerFeedbackSoftware",
 operatingSystem: "Web",
 description:
  "FeedSolve is feedback management and complaint resolution software for SMBs. Collect feedback via branded QR codes or shareable links - no login needed for submitters. Assign issues to your team, resolve every submission, and let submitters track progress with a unique tracking code. Supports multi-language submission forms.",
 url: "https://feedsolve.com/",
 image: "https://feedsolve.com/feedsolve.webp",
 screenshot: "https://feedsolve.com/feedsolve.webp",
 inLanguage: ["en", "en-GB", "en-AU", "en-US"],
 keywords:
  "feedback management software, complaint management software, QR code feedback, supplier feedback, tenant feedback, GDPR feedback management, customer complaint tracking, SMB feedback platform",
 featureList: [
  "Branded QR code feedback collection",
  "No-login submission for customers and suppliers",
  "Unique tracking code for every submission",
  "Kanban-style complaint resolution workflow",
  "Multi-language submission forms",
  "Team assignment and resolution audit trail",
  "GDPR-aware data handling for EU teams",
 ],
 audience: {
  "@type": "BusinessAudience",
  audienceType:
   "Small and mid-sized businesses in restaurants, manufacturing, logistics, real estate, and retail",
 },
 provider: {
  "@type": "Organization",
  name: "FeedSolve",
  url: "https://feedsolve.com/",
 },
 offers: [
  { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://feedsolve.com/" },
  { "@type": "Offer", name: "Starter", price: "19", priceCurrency: "USD", billingPeriod: "P1M", availability: "https://schema.org/InStock", url: "https://feedsolve.com/" },
  { "@type": "Offer", name: "Growth", price: "49", priceCurrency: "USD", billingPeriod: "P1M", availability: "https://schema.org/InStock", url: "https://feedsolve.com/" },
  { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "USD", billingPeriod: "P1M", availability: "https://schema.org/InStock", url: "https://feedsolve.com/" },
 ],
};

const organizationJsonLd = {
 "@context": "https://schema.org",
 "@type": "Organization",
 name: "FeedSolve",
 url: "https://feedsolve.com/",
 logo: "https://feedsolve.com/logo.webp",
 contactPoint: {
  "@type": "ContactPoint",
  email: "hello@feedsolve.com",
  contactType: "customer support",
 },
 sameAs: [],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" data-scroll-behavior="smooth" className={`${bricolage.variable} ${dmSans.variable} ${lora.variable}`}>
   <body suppressHydrationWarning>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
    />
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
    {children}
   </body>
  </html>
 );
}
