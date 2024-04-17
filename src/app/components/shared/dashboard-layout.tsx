import Navbar from "@/components/shared/navbar/navbar";
import { Fragment, PropsWithChildren } from "react";
import { NavItem } from "@/components/shared/navbar/navbar-list-item";
import NavbarProvider from "@/context/navbar.context";
import DashboardMain from "@/components/shared/dashboard-main";

export default function DashboardLayout({
  navList,
}: PropsWithChildren<{ navList: NavItem[] }>) {
  return (
    <Fragment>
      <NavbarProvider>
        <Navbar navList={navList} />
        <DashboardMain />
      </NavbarProvider>
    </Fragment>
  );
}
