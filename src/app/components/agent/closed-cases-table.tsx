import { CustomerStatus } from "@/lib/constants";
import Table from "@/components/shared/table";
import ClosedCasesButton from "@/components/action-buttons/closed-cases-button";

const closedCases = [
  {
    id: "1",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "2",
    customer: "Abdul Ibrahim",
    complain: "Airtime",
    agent: "Zarah",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "3",
    customer: "Abdul Ibrahim",
    complain: "Data",
    agent: "Christy",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "4",
    customer: "Abdul Ibrahim",
    complain: "Fraud",
    agent: "Abdul",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "5",
    customer: "Abdul Ibrahim",
    complain: "E-Commerce",
    agent: "Godwin",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "6",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Godwin",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "7",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "8",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "9",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "10",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
  {
    id: "11",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: CustomerStatus.Closed,
  },
];

const columnNames = [
  "Customer Name",
  "Complain",
  "Agent",
  "date",
  "status",
  "",
];

export default function ClosedCasesTable() {
  return (
    <Table
      columnNames={columnNames}
      data={closedCases}
      ActionComponent={ClosedCasesButton}
      containerClassName="md:bg-slate-100 grid-cols-[auto,auto,repeat(4,1fr)] max-md:[&_p:not(:nth-child(6n))]:border-b-0 max-md:[&_p:nth-child(6n)]:text-right max-md:[&_p:nth-child(6n)]:mb-3"
      headerClassName="p-3 lg:px-6"
      cellClassName="text-xs p-3 lg:py-5 lg:px-6 text-black-200 max-md:shadow-md"
      firstCellClassName="text-blue"
      pagination
    />
  );
}
