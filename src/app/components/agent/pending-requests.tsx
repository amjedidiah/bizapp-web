import Table from "@/components/shared/table";
import PendingRequestsButton from "@/components/action-buttons/pending-requests-button";
import Filter from "@/components/shared/filter";
import { CustomerStatus } from "@/lib/constants";

const pendingRequests = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "5",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Christy",
  },
  {
    id: "6",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Christy",
  },
];

const columnNames = [
  "customer name",
  "issue",
  "department",
  "status",
  "location",
  "agent",
  "",
];

export default function PendingRequests() {
  return (
    <>
      <div className="flex flex-col gap-4 items-end">
        <Filter states={["department", "state"]} />
      </div>

      <Table
        columnNames={columnNames}
        data={pendingRequests}
        ActionComponent={PendingRequestsButton}
        containerClassName="font-inter text-base lg:grid-cols-7 laptop:grid-cols-[auto,repeat(6,1fr)] max-lg:[&_p:not(:nth-child(7n))]:border-b-0 max-lg:[&_p:nth-child(7n)]:text-right max-lg:[&_p:nth-child(7n)]:mb-3 laptop:px-4"
        headerClassName="p-[14px] laptop:pb-5 text-primary text-opacity-80 tracking-[0.15px] bg-transparent max-lg:hidden"
        cellClassName="p-[14px] laptop:pt-6 lg:mb-4 bg-white lg:border-t text-black max-lg:shadow-md"
        cellLabelClassName="max-lg:block"
        noBoldCell
        pagination
        paginationClassName="lg:mt-[60px]"
        paginationActiveClassName="bg-black text-yellow-100"
      />
    </>
  );
}
