import ChatNavigationItem from "@/components/shared/chat/chat-navigation-item";
import { AgentLinksChat, ChatLinks } from "@/lib/constants";

const routes = [
  {
    name: ChatLinks.Customers,
    href: AgentLinksChat.Customers,
  },
  {
    name: ChatLinks.Collaborations,
    href: AgentLinksChat.Collaborations,
  },
  {
    name: ChatLinks.Escalations,
    href: AgentLinksChat.Escalations,
  },
];

export default function ChatNavigation() {
  return (
    <div className="flex max-sm:flex-col max-sm:w-full items-center mb-3 w-fit px-3 lg:mr-7 py-1 rounded-[30px] border border-gray-10 sm:[&>*:nth-child(n+2)]:after:absolute [&>*:nth-child(n+2)]:after:-left-[5px] [&>*:nth-child(n+2)]:after:-top-[2px] laptop:[&>*:nth-child(n+2)]:after:top-1 [&>*:nth-child(n+2)]:after:w-[1px] [&>*:nth-child(n+2)]:after:h-10 [&>*:nth-child(n+2)]:after:bg-gray-400">
      {routes.map((item) => (
        <ChatNavigationItem key={item.name} {...item} />
      ))}
    </div>
  );
}
