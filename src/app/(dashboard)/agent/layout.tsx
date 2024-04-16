import DashboardLayout from "@/components/shared/dashboard-layout";
import { PropsWithChildren } from "react";

export default function AgentLayout({ children }: PropsWithChildren) {
  const navList = [
    { name: "dashboard", pathname: "/agent" },
    { name: "pending", pathname: "/agent/pending" },
    { name: "customers", pathname: "/agent/customers" },
    { name: "chat", pathname: "/agent/chat" },
    { name: "resolved", pathname: "/agent/resolved" },
    { name: "templates", pathname: "/agent/templates" },
    { name: "settings", pathname: "/agent/settings" },
    { name: "logout", pathname: "/agent/logout" },
  ];

  return <DashboardLayout navList={navList}>{children}</DashboardLayout>;
}
