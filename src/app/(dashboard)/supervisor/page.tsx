import PendingRequests from "@/components/shared/pending-requests";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import { Role } from "@/lib/constants";
import { SupervisorStats } from "@/components/supervisor/supervisor-stats";

export default function Supervisor() {
  return (
    <DashboardMainBody>
      <SupervisorStats />

      <PendingRequests role={Role.Supervisor} />
    </DashboardMainBody>
  );
}
