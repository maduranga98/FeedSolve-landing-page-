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
  default: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  template: "%s | FeedSolve",
 },
 description:
  "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free to start, no credit card.",
 openGraph: {
  title: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  description:
   "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free to start, no credit card.",
  url: SITE_URL,
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
  canonical: SITE_URL,
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
 applicationCategory: "BusinessApplication",
 operatingSystem: "Web",
 description:
  "FeedSolve is feedback management and complaint resolution software for SMBs. Collect feedback via branded QR codes or shareable links - no login needed for submitters. Assign issues to your team, resolve every submission, and let submitters track progress with a unique tracking code. Supports multi-language submission forms.",
 url: "https://feedsolve.com",
 offers: [
  { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
  { "@type": "Offer", name: "Starter", price: "19", priceCurrency: "USD", billingPeriod: "P1M" },
  { "@type": "Offer", name: "Growth", price: "49", priceCurrency: "USD", billingPeriod: "P1M" },
  { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "USD", billingPeriod: "P1M" },
 ],
};

const organizationJsonLd = {
 "@context": "https://schema.org",
 "@type": "Organization",
 name: "FeedSolve",
 url: "https://feedsolve.com",
 logo: "https://feedsolve.com/logo.webp",
 contactPoint: {
  "@type": "ContactPoint",
  email: "hello@feedsolve.com",
  contactType: "customer support",
 },
 sameAs: [],
};

const faqPageJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
  {
   "@type": "Question",
   name: "Do submitters need an account?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "No. Anyone can submit feedback without logging in. You share a link or QR code, they fill in the form. Zero friction for your customers, suppliers, or partners.",
   },
  },
  {
   "@type": "Question",
   name: "Can feedback be anonymous?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. You can enable anonymous submissions per board. Submitters still get a unique tracking code even when submitting anonymously.",
   },
  },
  {
   "@type": "Question",
   name: "How long does setup take?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Less than 2 minutes. Create an account, name your board, and share the link. No configuration required to get started collecting and tracking.",
   },
  },
  {
   "@type": "Question",
   name: "Do I need a demo or sales call?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "No. Just click Try Now and start immediately. No gatekeeping, no onboarding calls required.",
   },
  },
  {
   "@type": "Question",
   name: "Can I upgrade later?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. Start on the free plan and upgrade anytime as your usage grows. No data lost, no migrations, no downtime.",
   },
  },
  {
   "@type": "Question",
   name: "Can I add my company logo and brand colors to the QR code?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. FeedSolve lets you customize your QR codes with your company logo, brand colors, and style. Branded QR codes are available on Growth and Pro plans and help your feedback boards look like a natural part of your business.",
   },
  },
  {
   "@type": "Question",
   name: "Can submitters use the feedback form in their own language?",
   acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. FeedSolve supports multi-language submission forms so your customers, suppliers, and partners can submit feedback in their preferred language. This is especially useful for businesses operating across regions like South Asia, the Middle East, and East Africa.",
   },
  },
 ],
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
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
    />
    {children}
   </body>
  </html>
 );
}
