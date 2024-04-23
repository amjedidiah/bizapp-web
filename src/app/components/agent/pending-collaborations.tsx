import Button from "@/components/shared/button";
import DashboardTitle from "@/components/shared/dashboard-title";

const pendingCollaborations = [
  {
    id: "1",
    agent: "Godwin",
    issue: "Wallet",
  },
  {
    id: "2",
    agent: "Zarah",
    issue: "Airtime",
  },
  {
    id: "3",
    agent: "Christy",
    issue: "Data",
  },
  {
    id: "4",
    agent: "Abdul",
    issue: "Fraud related",
  },
  {
    id: "5",
    agent: "Sample",
    issue: "E-Commerce",
  },
];

export default function PendingCollaborations() {
  return (
    <div className="flex flex-col gap-4 lg:gap-[26px]">
      <div className="flex max-sm:flex-col sm:items-center justify-between gap-1">
        <DashboardTitle>Pending Collaborations</DashboardTitle>
        <div className="w-fit">
          <Button variant="yellow-outline">View all</Button>
        </div>
      </div>
      <div className="flex flex-col px-3 gap-[5px] rounded bg-slate-200">
        {pendingCollaborations.map(({ id, agent, issue }) => (
          <div
            className="flex items-center justify-between p-[10px] border-b border-agent-collaboration"
            key={id}
          >
            <div className="flex flex-col text-black">
              <p className="bg-opacity-50 text-sm capitalize">agent {agent}</p>
              <p className="leading-5">{issue} issues</p>
            </div>
            <Button variant="yellow" underline>
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
