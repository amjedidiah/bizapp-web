import {
  Role,
  SupervisorLinks,
  SupervisorLinksCases,
  SupervisorLinksChat,
} from "@/lib/constants";
import SupervisorStatsItem from "@/components/supervisor/supervisor-stats-item";

const stats = [
  {
    id: "1",
    type: Role.Customer,
    count: 235,
    title: "Active Agents",
    pathname: SupervisorLinks.Agents.pathname,
  },
  {
    id: "2",
    type: Role.Customer,
    count: 235,
    title: "Total Customers Today",
    pathname: SupervisorLinks.Customers.pathname,
  },
  {
    id: "3",
    type: Role.Customer,
    count: 235,
    title: "Pending / Attending Customers",
    pathname: `/supervisor/messages${SupervisorLinksChat.Customers}`,
  },
  {
    id: "4",
    type: "Case",
    count: 235,
    title: "Escalated / Collaborated Cases",
    pathname: SupervisorLinksCases.Pending,
  },
  {
    id: "5",
    type: "case",
    count: 235,
    title: "Today's Closed Cases",
    pathname: SupervisorLinksCases.Closed,
    trend: "40% from yesterday",
    trendIsPositive: true,
  },
];

export function SupervisorStats() {
  return (
    <div className="pt-4 md:pt-6 lg:pt-10 grid mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 desktop:grid-cols-5 gap-[10px] items-stretch">
      {stats.map((item) => (
        <SupervisorStatsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
