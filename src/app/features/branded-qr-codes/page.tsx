import { JsonLdScript as BreadcrumbScript } from "@/components/JsonLd";
import { breadcrumbJsonLd as breadcrumbLd } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import BrandedQRCodesClient from "./BrandedQRCodesClient";


export const metadata = generatePageMetadata({
  title: "Branded Feedback QR Codes With Your Logo",
  description:
    "Put your logo and brand colours on feedback QR codes customers actually trust and scan. Print-ready, works on every device, no app needed. Free 7-day trial.",
  path: "/features/branded-qr-codes/",
});

export default function BrandedQrCodesPage() {
  return (
    <>
      <BreadcrumbScript data={breadcrumbLd([{ name: "Home", url: "https://feedsolve.com/" }, { name: "Branded QR Codes", url: "https://feedsolve.com/features/branded-qr-codes/" }])} />
      <BrandedQRCodesClient />
    </>
  );
}
