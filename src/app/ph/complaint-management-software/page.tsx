import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("ph");

export default function PHComplaintManagementPage() {
  return <CountryComplaintPage code="ph" />;
}
