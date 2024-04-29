import Table from "@/components/shared/table";
import AgentPendingRequestsButton from "@/components/action-buttons/agent-pending-requests-button";
import Filter from "@/components/shared/filter";
import { CustomerStatus, Role, SupervisorLinksCases } from "@/lib/constants";
import supervisorPendingRequestsButton from "@/components/action-buttons/supervisor-pending-requests-button";
import ShouldRender from "@/components/shared/should-render";
import SearchForm from "@/components/shared/search-form";
import Link from "next/link";

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

export default function PendingRequests({
  role = Role.Agent,
}: {
  role?: Role;
}) {
  const isCustomer = role === Role.Customer;

  return (
    <>
      <ShouldRender condition={isCustomer}>
        <div className="flex flex-col gap-4 items-end">
          <Filter states={["department", "state"]} />
        </div>
      </ShouldRender>

      <ShouldRender condition={!isCustomer}>
        <div className="flex flex-col gap-5">
          <p className="text-main-blue-100 text-lg font-semibold">
            Pending / Attending Cases
          </p>
          <div className="flex max-sm:flex-col gap-4 sm:justify-between sm:items-center">
            <Link
              className="h-fit w-fit py-[10px] px-[18px] rounded-lg shadow-template-company border border-black bg-yellow-200 bg-opacity-60 text-main-blue font-semibold"
              href={SupervisorLinksCases.Pending}
            >
              View all
            </Link>
            <div className="flex items-center gap-[7px]">
              <SearchForm
                placeholder="Enter case ID..."
                className="py-3 px-2 flex-1"
              />
              <Filter states={["department", "state"]} />
            </div>
          </div>
        </div>
      </ShouldRender>

      <Table
        columnNames={columnNames}
        data={pendingRequests}
        ActionComponent={
          isCustomer
            ? AgentPendingRequestsButton
            : supervisorPendingRequestsButton
        }
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
