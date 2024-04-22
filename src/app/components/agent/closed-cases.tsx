import { BAClose, BAFilter, BASearch } from "@/lib/icons";
import DashboardTitle from "@/components/shared/dashboard-title";
import Button from "@/components/shared/button";
import { cn } from "@/lib/utils";

const closedCases = [
  {
    id: "1",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "2",
    customer: "Abdul Ibrahim",
    complain: "Airtime",
    agent: "Zarah",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "3",
    customer: "Abdul Ibrahim",
    complain: "Data",
    agent: "Christy",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "4",
    customer: "Abdul Ibrahim",
    complain: "Fraud",
    agent: "Abdul",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "5",
    customer: "Abdul Ibrahim",
    complain: "E-Commerce",
    agent: "Godwin",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "6",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Godwin",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "7",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "8",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "9",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "10",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
  },
  {
    id: "11",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    dateString: "Today",
    status: "Closed",
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

export default function ClosedCases() {
  return (
    <div className="flex flex-col gap-6 lg:gap-[25px]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <DashboardTitle>Closed Cases</DashboardTitle>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="yellow">View All</Button>
          <div className="flex p-[10px] gap-4 items-center">
            <span className="text-black-200 font-inter text-xs">Filter by</span>
            <span>
              <BAFilter />
            </span>
          </div>
        </div>
      </div>
      <form className="flex items-center gap-[31px] w-full lg:max-w-[342px] py-3 px-2 rounded-lg border border-gray-900 border-opacity-20">
        <div className="flex flex-1 items-center gap-[5px]">
          <span>
            <BASearch />
          </span>
          <input
            type="text"
            className="flex-1 outline-none border-none text-xs lg:leading-5 placeholder:text-gray-3"
            placeholder="Enter customer's Name or Email Address"
          />
        </div>
        <span>
          <BAClose />
        </span>
      </form>
      <div>
        <div className="grid grid-cols-[auto,auto,repeat(4,1fr)] bg-slate-100 capitalize text-start">
          {columnNames.map((item) => (
            <p
              className="text-black-100 text-xs font-semibold p-3 lg:px-6 bg-slate-200"
              key={item}
            >
              {item}
            </p>
          ))}
          {closedCases.map((item) => {
            const { id, ...rest } = item;
            const updatedRest = { ...rest, button: "View" };

            return Object.values(updatedRest).map((item, i) => (
              <p
                className={cn("text-xs p-3 lg:py-5 lg:px-6 text-black-200", {
                  "font-semibold text-blue": i === 0,
                  "text-red-100": i === 3,
                })}
                key={id}
              >
                <span
                  className={cn({
                    "bg-green bg-opacity-30 rounded p-1": i === 4,
                    "text-black text-sm": i >= 4,
                    underline: i > 4,
                  })}
                >
                  {item}
                </span>
              </p>
            ));
          })}
        </div>
        <div className="flex justify-center items-center gap-6 bg-slate-200 text-xs text-black-100 font-semibold py-[22px]">
          <p>Previous page</p>
          <div className="flex item-center gap-2">
            {Array(7)
              .fill(0)
              .map((item, i) => (
                <span
                  key={i}
                  className="w-5 h-5 bg-slate-400 flex items-center justify-center rounded-full"
                >
                  {i}
                </span>
              ))}
          </div>
          <p className="text-xs text-black-100 font-semibold">Next page</p>
        </div>
      </div>
    </div>
  );
}
