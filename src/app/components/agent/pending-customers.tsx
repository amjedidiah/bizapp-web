import { cn } from "@/lib/utils";
import Button from "../shared/button";
import DashboardTitle from "../shared/dashboard-title";

const pendingCustomers = [
  {
    id: "1",
    name: "Tanimu Ali",
    issue: "Wallet",
    status: "pending",
  },
  {
    id: "2",
    name: "Maryam Asiya",
    issue: "Data",
    status: "pending",
  },
  {
    id: "3",
    name: "Charles Ojie",
    issue: "Airtime",
    status: "pending",
  },
  {
    id: "4",
    name: "Emmanuel Alex",
    issue: "E-commerce",
    status: "attending",
    agent: "Christy",
  },
  {
    id: "5",
    name: "Salisu Aliyu",
    issue: "Airtime",
    status: "attending",
    agent: "Zarah",
  },
];

export default function PendingCustomers() {
  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex items-center justify-between">
        <DashboardTitle>Pending Customers</DashboardTitle>
        <Button variant="yellow-outline">View all</Button>
      </div>
      <div className="flex flex-col -mt-[10px]">
        <table className="w-full max-w-full bg-slate-100 border-separate border-spacing-y-[10px]">
          <thead>
            <tr className="text-xs bg-slate-200 [&_th]:max-w-[57px] [&_th]:text-left [&_th]:text-black-100 [&_th]:py-2 [&_th]:px-2 lg:[&_th]:px-4 [&_th]:font-semibold">
              <th>Customer Name</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            {pendingCustomers.map(({ id, name, issue, status, agent }) => (
              <tr
                key={id}
                className="text-xs [&_td]:border-b [&_td]:border-slate-300 [&_td]:align-middle align-middle"
              >
                <td className="pt-1 pb-1 pl-2 text-black font-semibold">
                  {name}
                </td>
                <td className="pt-1 pb-1 text-black-200">{issue}</td>
                <td className="pb-2">
                  <span
                    className={cn(
                      "p-1 text-sm leading-4 rounded capitalize mx-auto block w-fit",
                      {
                        "bg-red-100 bg-opacity-30 text-red-100":
                          status === "pending",
                        "text-black bg-yellow-200 bg-opacity-60":
                          status === "attending",
                      }
                    )}
                  >
                    {status}
                  </span>
                </td>
                <td className="pt-1 pb-1 pr-2 text-main-blue text-center">
                  {agent || "----"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center bg-slate-100">
          <Button variant="yellow-2" underline>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
