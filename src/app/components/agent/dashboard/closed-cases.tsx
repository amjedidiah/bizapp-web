import DashboardTitle from "@/components/shared/dashboard-title";
import Button from "@/components/shared/button";
import Filter from "@/components/shared/filter";
import Link from "next/link";
import { AgentLinks } from "@/lib/constants";
import SearchForm from "@/components/agent/search-form";
import ClosedCasesTable from "@/components/agent/closed-cases-table";

export default function ClosedCases() {
  return (
    <div className="flex flex-col gap-4 lg:gap-[25px]">
      <div className="flex max-sm:flex-col max-sm:gap-1 justify-between sm:items-end">
        <DashboardTitle>Closed Cases</DashboardTitle>
        <div className="flex items-center gap-4 max-sm:justify-between">
          <Link href={AgentLinks.Resolved.pathname}>
            <Button variant="yellow">View All</Button>
          </Link>
          <Filter states={["date", "ascending", "descending"]} />
        </div>
      </div>
      <SearchForm />
      <ClosedCasesTable />
    </div>
  );
}
