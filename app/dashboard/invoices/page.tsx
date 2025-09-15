import { fetchRevenue } from "@/app/lib/data";
export default async function Page() {
  const revenueData = await fetchRevenue();
  return <p>Invoices Page</p>;
}
