import PreviousComplaints from "@/components/agent/previous-complaints";
import CustomerCard from "@/components/shared/customer-card";
import DashboardMainBody from "@/components/shared/dashboard-main-body";

export default function Customer() {
  return (
    <DashboardMainBody className="grid laptop:grid-cols-[340px,1fr] gap-6">
      <CustomerCard />
      <PreviousComplaints />
    </DashboardMainBody>
  );
}
