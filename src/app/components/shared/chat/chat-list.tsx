"use client";

import { getChats } from "@/lib/actions";
import { useParams } from "next/navigation";
import useSWR from "swr";
import ChatListItem from "@/components/shared/chat/chat-list-item";

export default function ChatList() {
  const params = useParams();
  const [chatType] = params.slug as string[];
  const { data } = useSWR(chatType.toLowerCase() || null, getChats);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-5 w-full flex-1 lg:overflow-y-auto lg:pr-7">
      {data.map((item, i) => (
        <ChatListItem key={`${item.id}-${chatType}-${i}`} {...item} />
      ))}
    </div>
  );
}
