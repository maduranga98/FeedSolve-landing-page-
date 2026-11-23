import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("za");

export default function ZAComplaintManagementPage() {
  return <CountryComplaintPage code="za" />;
}
