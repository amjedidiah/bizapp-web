import AgentSection from "@/components/agent/agent-section";
import ClosedCases from "@/components/agent/closed-cases";
import InMailMessages from "@/components/agent/in-mail-messages";
import PendingCollaborations from "@/components/agent/pending-collaborations";
import PendingCustomers from "@/components/agent/pending-customers";

export default function Agent() {
  return (
    <div className="grid lg:grid-cols-[1fr,auto] gap-[31px] overflow-auto">
      <AgentSection className="">
        <InMailMessages />
        <ClosedCases />
      </AgentSection>
      <AgentSection className="min-w-[377px] w-[25vw]">
        <PendingCustomers />
        <PendingCollaborations />
      </AgentSection>
    </div>
  );
}
