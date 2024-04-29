import AgentCard from "@/components/shared/agent-card";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import AgentData from "@/components/supervisor/agent-data";

export default function SupervisorAgent() {
  return (
    <DashboardMainBody className="grid laptop:grid-cols-[340px,1fr] gap-6 flex-1 overflow-y-auto">
      <AgentCard />
      <AgentData />
    </DashboardMainBody>
  );
}
