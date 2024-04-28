import PendingRequests from "@/components/shared/pending-requests";
import DashboardMainBody from "@/components/shared/dashboard-main-body";

export default function AgentPending() {
  return (
    <DashboardMainBody>
      <PendingRequests />
    </DashboardMainBody>
  );
}
