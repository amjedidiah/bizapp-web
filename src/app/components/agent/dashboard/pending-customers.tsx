import Button from "@/components/shared/button";
import DashboardTitle from "@/components/shared/dashboard-title";
import Table from "@/components/shared/table";
import { AgentLinks, CustomerStatus } from "@/lib/constants";
import Link from "next/link";

const pendingCustomers = [
  {
    id: "1",
    name: "Tanimu Ali",
    issue: "Wallet",
    status: CustomerStatus.Pending,
    agent: "----",
  },
  {
    id: "2",
    name: "Maryam Asiya",
    issue: "Data",
    status: CustomerStatus.Pending,
    agent: "----",
  },
  {
    id: "3",
    name: "Charles Ojie",
    issue: "Airtime",
    status: CustomerStatus.Pending,
    agent: "----",
  },
  {
    id: "4",
    name: "Emmanuel Alex",
    issue: "E-commerce",
    status: CustomerStatus.Attending,
    agent: "Christy",
  },
  {
    id: "5",
    name: "Salisu Aliyu",
    issue: "Airtime",
    status: CustomerStatus.Attending,
    agent: "Zarah",
  },
];

const columnNames = ["customer name", "issue", "status", "agent"];

export default function PendingCustomers() {
  return (
    <div className="flex flex-col gap-4 lg:gap-[26px]">
      <div className="flex max-sm:flex-col gap-1 sm:items-center justify-between">
        <DashboardTitle>Pending Customers</DashboardTitle>
        <Link href={AgentLinks.Pending.pathname} className="w-fit">
          <Button variant="yellow-outline">View all</Button>
        </Link>
      </div>
      <Table
        columnNames={columnNames}
        data={pendingCustomers}
        containerClassName="md:bg-slate-100 grid-cols-4 laptop:grid-cols-[1fr,auto,1fr,auto] max-md:[&_p:not(:nth-child(4n))]:border-b-0 max-md:[&_p:nth-child(4n)]:text-right max-md:[&_p:nth-child(4n)]:mb-3"
        headerClassName="p-[10px] lg:px-3"
        cellClassName="p-[10px] lg:px-3 max-md:shadow-md"
        moreLink={AgentLinks.Pending.pathname}
      />
    </div>
  );
}
