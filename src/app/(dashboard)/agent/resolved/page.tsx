import ClosedCasesTable from "@/components/agent/closed-cases-table";
import SearchForm from "@/components/agent/search-form";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import Filter from "@/components/shared/filter";

export default function AgentResolved() {
  return (
    <DashboardMainBody className="lg:py-10 gap-7">
      <div className="flex mobile:items-center justify-between gap-10 max-mobile:flex-col max-mobile:gap-4">
        <SearchForm className="max-w-[400px]" />
        <Filter
          states={["date", "ascending", "descending"]}
          className="mobile:flex-shrink-0"
        />
      </div>
      <ClosedCasesTable />
    </DashboardMainBody>
  );
}
