import AgentSection from "@/components/agent/agent-section";
import ClosedCases from "@/components/agent/closed-cases";
import InMailMessages from "@/components/agent/in-mail-messages";
import PendingCollaborations from "@/components/agent/pending-collaborations";
import PendingCustomers from "@/components/agent/pending-customers";

export default function Agent() {
  return (
    <div className="grid laptop:grid-cols-[1fr,auto] gap-[31px] overflow-auto pt-[18px] pb-[30px] pl-[100px] pr-6 sm:pr-[30px] sm:max-desktop:pl-[134px] desktop:px-[30px]">
      <AgentSection className="">
        <InMailMessages />
        <ClosedCases />
      </AgentSection>
      <AgentSection className="laptop:min-w-[377px] laptop:w-[25vw]">
        <PendingCustomers />
        <PendingCollaborations />
      </AgentSection>
    </div>
  );
}
