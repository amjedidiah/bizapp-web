import PreviousComplaints from "@/components/shared/previous-complaints";
import CustomerCard from "@/components/shared/customer-card";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import { Role } from "@/lib/constants";

export default function Customer() {
  return (
    <DashboardMainBody className="grid laptop:grid-cols-[340px,1fr] gap-6 flex-1 overflow-y-auto">
      <CustomerCard role={Role.Supervisor} />
      <PreviousComplaints />
    </DashboardMainBody>
  );
}
