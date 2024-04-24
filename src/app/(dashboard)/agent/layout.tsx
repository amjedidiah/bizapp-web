import { PropsWithChildren } from "react";
import NavbarProvider from "@/context/navbar.context";
import DashboardMain from "@/components/shared/dashboard-main";
import Navbar from "@/components/shared/navbar/navbar";
import { AgentLinks } from "@/lib/constants";

const navList = Object.values(AgentLinks);

export default function AgentLayout({ children }: PropsWithChildren) {
  return (
    <NavbarProvider>
      <Navbar navList={navList} />
      <DashboardMain>{children}</DashboardMain>
    </NavbarProvider>
  );
}
