import { PropsWithChildren } from "react";
import NavbarProvider from "@/context/navbar.context";
import DashboardMain from "@/components/shared/dashboard-main";
import Navbar from "@/components/shared/navbar/navbar";

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

  return (
    <NavbarProvider>
      <Navbar navList={navList} />
      <DashboardMain>{children}</DashboardMain>
    </NavbarProvider>
  );
}
