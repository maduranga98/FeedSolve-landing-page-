import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Lora } from "next/font/google";
import Script from "next/script";
import { OG_IMAGE_HEIGHT, OG_IMAGE_URL, OG_IMAGE_WIDTH } from "@/lib/seo/site";
import "./globals.css";

// Bricolage Grotesque and DM Sans are variable fonts: omitting `weight` loads a
// single variable file per style instead of one file per weight. The CSS only
// uses weights 400-800, inside both fonts' ranges.
const bricolage = Bricolage_Grotesque({
 variable: "--font-display",
 subsets: ["latin"],
 display: "swap",
});

const dmSans = DM_Sans({
 variable: "--font-body",
 subsets: ["latin"],
 display: "swap",
});

// The only italic DM Sans on the site is `.punch p` (homepage). Loading it as
// its own, non-preloaded family keeps it out of the critical path while the
// real italic still renders.
const dmSansItalic = DM_Sans({
 variable: "--font-body-italic",
 subsets: ["latin"],
 style: ["italic"],
 display: "swap",
 preload: false,
});

// Lora is only used for long-form blog prose, and its italic is never rendered,
// so: normal style only, and not preloaded on every page.
const lora = Lora({
 variable: "--font-prose",
 subsets: ["latin"],
 weight: ["400", "600"],
 display: "swap",
 preload: false,
});

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {
  default: "FeedSolve: Feedback & Complaint Resolution Software",
  template: "%s | FeedSolve",
 },
 description:
  "FeedSolve helps SMBs collect customer feedback via QR code, then assign, track, and resolve every complaint from one dashboard. Free 7-day trial.",
 applicationName: "FeedSolve",
 openGraph: {
  title: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  description:
   "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free 7-day trial.",
  url: `${SITE_URL}/`,
  siteName: "FeedSolve",
  locale: "en_US",
  type: "website",
  images: [
   {
    url: OG_IMAGE_URL,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: "FeedSolve - feedback management and complaint tracking software for SMBs",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "FeedSolve - Feedback Management & Complaint Tracking Software for SMBs",
  description:
   "Collect feedback from customers and suppliers via branded QR codes. Assign, track, and resolve complaints - in any language. Free 7-day trial.",
  images: [OG_IMAGE_URL],
 },
 manifest: "/manifest.json",
 robots: {
  index: true,
  follow: true,
 },
 alternates: {
  canonical: `${SITE_URL}/`,
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

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  // lang is rewritten to pt-BR for /br/ by scripts/set-html-lang.mjs after export.
  <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${bricolage.variable} ${dmSans.variable} ${lora.variable} ${dmSansItalic.variable}`}>
   <head />
   <body suppressHydrationWarning>
    {/* Google Tag Manager */}
    <Script
     id="gtm-script"
     strategy="lazyOnload"
     dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJH3HHWZ');`,
     }}
    />
    {/* End Google Tag Manager */}
    {/* Google Tag Manager (noscript) */}
    <noscript>
     <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MJH3HHWZ"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
     />
    </noscript>
    {/* End Google Tag Manager (noscript) */}
    {children}
   </body>
  </html>
 );
}
