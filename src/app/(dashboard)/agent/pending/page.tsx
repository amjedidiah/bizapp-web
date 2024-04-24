import PendingRequests from "@/components/agent/pending-requests";

export default function AgentPending() {
  return (
    <div className="grid gap-[33px] overflow-auto pt-[18px] pb-[30px] pl-[100px] pr-6 sm:pr-[30px] sm:max-desktop:pl-[134px] desktop:px-[30px]">
      <PendingRequests />
    </div>
  );
}
