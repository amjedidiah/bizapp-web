"use client";
import { useParams } from "next/navigation";
import Empty from "@/components/shared/empty";
import Avatar from "@/components/shared/avatar";
import ChatBodyMessages from "@/components/shared/chat/chat-body-messages";
import ChatBodyActions from "@/components/shared/chat/chat-body-actions";
import { BAEmptyChat } from "@/lib/icons";

export default function ChatBody() {
  const params = useParams();
  if (typeof params.slug !== "string" && params.slug.length < 2)
    return <Empty Icon={BAEmptyChat} text="Open a chat or start a new Chat" />;

  return (
    <div className="lg:pt-[52px] flex-1 flex flex-col lg:overflow-hidden relative">
      <div className="px-5 lg:px-10 flex flex-col gap-2 items-center shadow-chat-open">
        <div className="flex gap-3 items-center w-full">
          <div className="relative">
            <Avatar />
            <span className="w-3 h-3 rounded-full bg-green-200 absolute bottom-0 right-1" />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-1 text-lg font-medium">Abdullahi Yusuf</p>
            <p className="text-slate-50 text-sm lg:leading-[18px]">Online</p>
          </div>
        </div>

        <div className="bg-yellow-500 inline-flex rounded-[41px] py-[5px] px-[10px] relative -bottom-3 z-[1]">
          <span className="text-main-blue font-semibold text-[10px]">
            2 unread messages
          </span>
        </div>
      </div>
      <ChatBodyMessages />
      <ChatBodyActions />
    </div>
  );
}
