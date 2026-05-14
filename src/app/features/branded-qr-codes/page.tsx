import type { Metadata } from "next";
import BrandedQRCodesClient from "./BrandedQRCodesClient";

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
  title: "Branded QR Codes — Custom Logo & Colour QR Feedback Codes",
  description:
    "Add your logo and brand colours to your FeedSolve feedback QR codes. Available on Growth and Pro plans. Print-ready, scannable on all devices, no app needed.",
  openGraph: {
    title: "Branded QR Codes | FeedSolve",
    description:
      "Custom-branded QR feedback codes with your logo and colours. Scan to submit complaints or feedback — no login required.",
    url: `${SITE_URL}/features/branded-qr-codes/`,
    siteName: "FeedSolve",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded QR Codes | FeedSolve",
    description:
      "Add your logo and brand colours to feedback QR codes. Print-ready, works on all devices.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/features/branded-qr-codes/`,
    languages: {
      "en-GB": `${SITE_URL}/features/branded-qr-codes/`,
      "en-AU": `${SITE_URL}/features/branded-qr-codes/`,
      "en-US": `${SITE_URL}/features/branded-qr-codes/`,
      en: `${SITE_URL}/features/branded-qr-codes/`,
      "x-default": `${SITE_URL}/features/branded-qr-codes/`,
    },
  },
};

export default function BrandedQrCodesPage() {
  return <BrandedQRCodesClient />;
}
