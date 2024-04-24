import AgentSection from "@/components/agent/agent-section";
import ClosedCases from "@/components/agent/dashboard/closed-cases";
import InMailMessages from "@/components/agent/dashboard/in-mail/in-mail-messages";
import PendingCollaborations from "@/components/agent/dashboard/pending-collaborations";
import PendingCustomers from "@/components/agent/dashboard/pending-customers";
import DashboardMainBody from "@/components/shared/dashboard-main-body";

export default function Agent() {
  return (
    <DashboardMainBody className="laptop:grid-cols-[1fr,auto]">
      <AgentSection>
        <InMailMessages />
        <ClosedCases />
      </AgentSection>
      <AgentSection className="laptop:min-w-[377px] laptop:w-[25vw]">
        <PendingCustomers />
        <PendingCollaborations />
      </AgentSection>
    </DashboardMainBody>
  );
}
