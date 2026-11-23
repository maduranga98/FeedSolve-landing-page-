import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("ke");

export default function KEComplaintManagementPage() {
  return <CountryComplaintPage code="ke" />;
}
