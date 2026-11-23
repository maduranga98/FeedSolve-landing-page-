import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("sg");

export default function SGComplaintManagementPage() {
  return <CountryComplaintPage code="sg" />;
}
