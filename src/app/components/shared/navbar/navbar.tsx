"use client";

import Link from "next/link";
import NavbarList from "@/components/shared/navbar/navbar-list";
import { NavItem } from "@/components/shared/navbar/navbar-list-item";
import { BABackArrow } from "@/lib/icons";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { useNavbarContext } from "@/context/navbar.context";

type Props = {
  navList: NavItem[];
};

function Navbar({ navList }: Props) {
  const { isCollapsed, toggleIsCollapsed } = useNavbarContext();

  return (
    <nav
      className={cn(
        "max-lg:fixed max-lg:shadow-xl left-0 top-0 flex flex-col py-8 px-[23px] max-[576px]:px-4 gap-20 lg:gap-[57px] bg-main-blue-100 lg:w-[292px] h-fit z-[1]",
        {
          "max-lg:w-[292px]": !isCollapsed,
        }
      )}
    >
      <div
        className={cn(
          "lg:hidden bg-main-blue-100 rounded-full absolute -right-4 top-24 max-[576px]:top-[88px] p-1 max-[576px]:scale-90",
          {
            "rotate-180": isCollapsed,
          }
        )}
        onClick={toggleIsCollapsed}
      >
        <span className="[&_path]:fill-white">
          <BABackArrow />
        </span>
      </div>
      <Link
        href={navList[0].pathname}
        className={cn("flex items-center gap-[10px]", {
          "max-lg:text-center": isCollapsed,
        })}
      >
        <span className="font-mansalva flex-1 text-white text-5xl max-[576px]:text-4xl lg:text-[64px]">
          CS
        </span>
        <span
          className={cn(
            "text-2xl lg:text-[32px] font-semibold lg:leading-[35px] text-logo-gradient",
            {
              "max-lg:hidden": isCollapsed,
            }
          )}
        >
          Customer Support
        </span>
      </Link>
      <NavbarList list={navList} />
    </nav>
  );
}

export default memo(Navbar);
