import SearchForm from "@/components/shared/search-form";
import ChatBody from "@/components/shared/chat/chat-body";
import ChatInMailAction from "@/components/shared/chat/chat-in-mail-action";
import ChatWrapper from "@/components/shared/chat/chat-wrapper";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import Filter from "@/components/shared/filter";

export default function AgentChat() {
  return (
    <DashboardMainBody className="lg:grid-cols-2 flex-1 lg:overflow-hidden lg:gap-0 lg:pb-0">
      <div className="flex flex-col flex-1 gap-[10px] lg:overflow-hidden">
        <div className="flex max-mobile:flex-col gap-[10px] sm:items-center justify-between lg:pr-[10px]">
          <p className="text-gray-1 text-lg lg:text-2xl font-semibold lg:leading-[30px]">
            All Chats
          </p>

          <ChatInMailAction />
        </div>
        <div className="flex flex-col flex-1 lg:overflow-hidden gap-[26px] py-5 lg:border-r border-gray-9">
          <div className="flex max-mobile:flex-col sm:items-center gap-[10px] justify-between lg:mr-7">
            <SearchForm placeholder="Search" className="p-[14px] flex-1" />
            <Filter states={["date", "ascending", "descending"]} />
          </div>
          <ChatWrapper />
        </div>
      </div>
      <ChatBody />
    </DashboardMainBody>
  );
}
