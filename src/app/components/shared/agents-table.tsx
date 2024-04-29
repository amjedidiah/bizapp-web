import Table from "@/components/shared/table";
import AgentsTableButton from "@/components/action-buttons/agents-table-button";
import SearchForm from "@/components/agent/search-form";
import Filter from "@/components/shared/filter";
import { Fragment } from "react";
import { AgentStatus } from "@/lib/constants";

const customers = [
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "General Services",
    status: AgentStatus.Active,
  },
  {
    id: "2",
    fullName: "Micheal Adeyemi",
    location: "Fraud Cases",
    status: AgentStatus.Away,
  },
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "Finance",
    status: AgentStatus.Offline,
  },
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "IT",
    status: AgentStatus.Active,
  },
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "General Services",
    status: AgentStatus.Offline,
  },
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "General Services",
    status: AgentStatus.Offline,
  },
  {
    id: "1",
    fullName: "Micheal Adeyemi",
    location: "General Services",
    status: AgentStatus.Active,
  },
];

const columnNames = ["Agent's Full name", "Department", "StaTus", ""];

export default function AgentsTable() {
  return (
    <Fragment>
      <div className="flex max-mobile:flex-col mobile:items-center justify-end gap-2">
        <SearchForm />
        <Filter
          className="min-w-fit"
          states={["date", "ascending", "descending", "location"]}
        />
      </div>
      <Table
        columnNames={columnNames}
        data={customers}
        ActionComponent={AgentsTableButton}
        containerClassName="laptop:bg-gray-20 rounded-[10px] laptop:grid-cols-[1fr,1fr,225px,125px] [&_p]:border-gray-5 max-laptop:[&_p:not(:nth-child(4n))]:border-b-0 max-laptop:[&_p:nth-child(4n)]:text-right max-laptop:[&_p:nth-child(4n)]:mb-3"
        headerClassName="rounded-t-[10px] h-16 px-5 max-laptop:hidden max border-b border-gray-5 bg-gray-20 text-base leading-4"
        cellClassName="bg-slate-100 text-black-200 text-sm leading-5 tracking-[0.28px] p-4 laptop:py-8 laptop:px-5 max-laptop:shadow-md"
        cellLabelClassName="max-laptop:block"
        firstCellClassName="leading-4"
        pagination
        paginationClassName="rounded-b-[10px] leading-4"
        paginationPrevNextClassName="mobile:text-base"
        paginationActiveClassName="bg-black text-yellow-100"
        noBoldCell
      />
    </Fragment>
  );
}
