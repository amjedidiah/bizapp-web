"use client";
import { CustomerStatus } from "@/lib/constants";
import Table from "@/components/shared/table";
import CasesButton from "@/components/action-buttons/cases-button";
import AgentDataNav from "./agent-data-nav";
import { useMemo, useState } from "react";

const columnNames = [
  "customer name",
  "issue",
  "department",
  "status",
  "location",
  "",
];

const cases = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
  },
];

export default function AgentData() {
  const [sliceCount, setSliceCount] = useState(0);
  const renderedCases = useMemo(() => cases.slice(sliceCount), [sliceCount]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:gap-12">
        <p className="min-w-fit text-primary text-opacity-80 font-inter text-sm font-medium leading-6 tracking-[0.4px] capitalize relative after:absolute after:h-[2px] after:-bottom-3 after:left-0 after:w-[133px] after:bg-yellow-100">
          Agent Data
        </p>
        <AgentDataNav onSetSliceCount={setSliceCount} />
      </div>

      <Table
        columnNames={columnNames}
        data={renderedCases}
        ActionComponent={CasesButton}
        containerClassName="font-inter text-base lg:grid-cols-6 laptop:grid-cols-[auto,repeat(5,1fr)] max-lg:[&_p:not(:nth-child(6n))]:border-b-0 max-lg:[&_p:nth-child(6n)]:text-right max-lg:[&_p:nth-child(6n)]:mb-3 laptop:px-4"
        headerClassName="p-[14px] laptop:pb-5 text-primary text-opacity-80 tracking-[0.15px] bg-transparent max-lg:hidden"
        cellClassName="p-[14px] laptop:pt-6 lg:mb-4 bg-white lg:border-t text-black max-lg:shadow-md"
        cellLabelClassName="max-lg:block"
        noBoldCell
        pagination
        paginationClassName="lg:mt-4"
        paginationActiveClassName="bg-black text-yellow-100"
      />
    </div>
  );
}
