import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("ca");

export default function CAComplaintManagementPage() {
  return <CountryComplaintPage code="ca" />;
}
