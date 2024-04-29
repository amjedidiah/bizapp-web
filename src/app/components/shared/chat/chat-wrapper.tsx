import BodyNavigation from "@/components/shared/body-navigation";
import ChatList from "@/components/shared/chat/chat-list";
import {
  AgentLinksChat,
  ChatLinks,
  Role,
  SupervisorLinksChat,
} from "@/lib/constants";

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const getRoutesByRole = (role: Role) => {
  if (role === Role.Agent)
    return [
      {
        name: ChatLinks.Customers,
        href: AgentLinksChat.Customers,
        count: 3,
      },
      {
        name: ChatLinks.Collaborations,
        href: AgentLinksChat.Collaborations,
        count: 5,
      },
      {
        name: ChatLinks.Escalations,
        href: AgentLinksChat.Escalations,
        count: 2,
      },
    ];

  return [
    {
      name: ChatLinks.Customers,
      href: SupervisorLinksChat.Customers,
      count: 3,
    },
    {
      name: ChatLinks.InMail,
      href: SupervisorLinksChat["in Mail"],
      count: 5,
    },
    {
      name: ChatLinks.EscalatedCases,
      href: SupervisorLinksChat["Escalated cases"],
      count: 2,
    },
  ];
};

export default function ChatWrapper({ role = Role.Agent }) {
  const routes = getRoutesByRole(role);

  return (
    <div className="-mt-1 flex flex-col gap-6 items-center flex-1 lg:overflow-hidden">
      <BodyNavigation routes={routes} />
      <p className="text-xs text-main-blue font-semibold lg:mr-7">
        {formattedDate}
      </p>
      <ChatList />
    </div>
  );
}
