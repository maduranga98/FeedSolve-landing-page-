import CountryComplaintPage, { countryMetadata } from "@/components/CountryComplaintPage";

export const metadata = countryMetadata("ng");

export default function NGComplaintManagementPage() {
  return <CountryComplaintPage code="ng" />;
}
