import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("my");

export default function MYComplaintManagementPage() {
  return <CountryComplaintPage code="my" />;
}
