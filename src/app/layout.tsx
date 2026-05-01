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
  title: "FeedSolve — Stop losing complaints. Start closing them.",
  description:
    "Collect feedback from customers, suppliers, and partners. Track every issue to resolution with a simple link and QR code.",
  openGraph: {
    title: "FeedSolve — Stop losing complaints. Start closing them.",
    description:
      "Collect feedback from customers, suppliers, and partners. Track every issue to resolution with a simple link and QR code.",
    url: SITE_URL,
    siteName: "FeedSolve",
    locale: "en_US",
    type: "website",
    images: [`${SITE_URL}/feedsolve.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedSolve — Stop losing complaints. Start closing them.",
    description:
      "Collect feedback from customers, suppliers, and partners. Track every issue to resolution with a simple link and QR code.",
    images: [`${SITE_URL}/feedsolve.webp`],
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FeedSolve",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  description:
    "Collect feedback from customers, suppliers, and partners. Track every issue to resolution with a simple link and QR code.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
