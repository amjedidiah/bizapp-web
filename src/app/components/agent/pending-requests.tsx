import Table from "@/components/shared/table";
import PendingRequestsButton from "@/components/action-buttons/pending-requests-button";
import Filter from "@/components/shared/filter";

const pendingRequests = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "pending",
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "pending",
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "pending",
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "attending",
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "5",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "attending",
    location: "Wudil, Kano",
    agent: "Christy",
  },
  {
    id: "6",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: "attending",
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
    <div className="flex flex-col gap-4">
      <Filter />
      <Table
        columnNames={columnNames}
        data={pendingRequests}
        containerClassName="grid-cols-7 laptop:grid-cols-[auto,repeat(6,1fr)] max-md:[&_p:not(:nth-child(7n))]:border-b-0 max-md:[&_p:nth-child(7n)]:text-right max-md:[&_p:nth-child(7n)]:mb-3 px-4"
        headerClassName="py-5 px-[14px] bg-transparent"
        cellClassName="p-[14px] lg:pt-6 mb-4 bg-white border-t text-black font-inter text-base"
        noBoldCell
        colCount={7}
        ActionComponent={PendingRequestsButton}
        pagination
        paginationClassName="lg:mt-[60px]"
        paginationActiveClassName="bg-black text-yellow-100"
      />
    </div>
  );
}
