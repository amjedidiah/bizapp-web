"use client";

import {
  BAChat,
  BACustomers,
  BADashboard,
  BALogout,
  BAPending,
  BAResolved,
  BASettings,
  BATemplates,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

export type NavItem = {
  name: string;
  pathname: string;
};

function NavbarListItem({ name, pathname }: NavItem) {
  const urlPath = usePathname();
  const isActive = urlPath === pathname;
  const isLogout = name === "logout";
  const Icon = useMemo(
    () =>
      ({
        dashboard: BADashboard,
        pending: BAPending,
        customers: BACustomers,
        chat: BAChat,
        resolved: BAResolved,
        templates: BATemplates,
        settings: BASettings,
      }[name] || BALogout),
    [name]
  );
  const isOutlier =
    Icon === BADashboard || Icon === BASettings || Icon === BALogout;

  return (
    <li
      className={cn({
        "bg-slate-100 rounded-[4px]": isActive,
        "[&_path]:stroke-main-blue [&_path]:fill-transparent":
          isActive && isOutlier,
        "[&_path]:fill-main-blue [&_path]:stroke-transparent":
          isActive && !isOutlier,
        "[&_path]:stroke-gray [&_path]:fill-transparent":
          !isActive && isOutlier,
        "[&_path]:fill-gray [&_path]:stroke-transparent":
          !isActive && !isOutlier,
        "[&_path]:stroke-red": isLogout,
      })}
    >
      <Link href={pathname} className="py-2 pl-4 pr-6 flex gap-3 items-center">
        <span>
          <Icon />
        </span>
        <span
          className={cn("text-sm lg:leading-6 capitalize", {
            "text-white": !isActive,
            "text-main-blue font-medium": isActive,
            "text-red": isLogout,
          })}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}

export default memo(NavbarListItem);
