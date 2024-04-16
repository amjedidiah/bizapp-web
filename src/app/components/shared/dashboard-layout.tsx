import Navbar from "@/components/shared/navbar/navbar";
import { Fragment, PropsWithChildren } from "react";
import { NavItem } from "@/components/shared/navbar/navbar-list-item";

export default function DashboardLayout({
  children,
  navList,
}: PropsWithChildren<{ navList: NavItem[] }>) {
  return (
    <Fragment>
      <Navbar navList={navList} />
      <main className="flex-1">{children}</main>
    </Fragment>
  );
}
