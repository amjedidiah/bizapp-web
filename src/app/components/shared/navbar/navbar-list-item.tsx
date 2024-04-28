import { useNavbarContext } from "@/context/navbar.context";
import { Links } from "@/lib/constants";
import {
  BAAgents,
  BACases,
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
import { memo, useMemo } from "react";

export type NavItem = {
  name: string;
  pathname: string;
};

type Props = {
  isActive: boolean;
} & NavItem;

function NavbarListItem({ name, pathname, isActive = false }: Props) {
  const isLogout = name === Links.Logout;
  const Icon = useMemo(
    () =>
      ({
        [Links.Dashboard]: BADashboard,
        [Links.Pending]: BAPending,
        [Links.Customers]: BACustomers,
        [Links.Logout]: BALogout,
        [Links.Resolved]: BAResolved,
        [Links.Templates]: BATemplates,
        [Links.Settings]: BASettings,
        [Links.Agents]: BAAgents,
        [Links.Cases]: BACases,
      }[name] || BAChat),
    [name]
  );
  const isOutlier =
    Icon === BADashboard || Icon === BASettings || Icon === BALogout;
  const { isCollapsed } = useNavbarContext();

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
      <Link
        href={pathname}
        className={cn("py-2 pl-4 pr-6 flex gap-3 items-center", {
          "max-desktop:justify-center max-desktop:px-0": isCollapsed,
        })}
      >
        <span>
          <Icon />
        </span>
        <span
          className={cn("text-sm sm:leading-6 capitalize", {
            "text-white": !isActive,
            "text-main-blue font-medium": isActive,
            "text-red": isLogout,
            "max-desktop:hidden": isCollapsed,
          })}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}

export default memo(NavbarListItem);
