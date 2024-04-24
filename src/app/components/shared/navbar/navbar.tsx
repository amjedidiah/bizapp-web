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
        "max-desktop:fixed max-desktop:shadow-xl left-0 top-0 flex flex-col py-8 px-4 sm:px-[23px] gap-20 desktop:gap-[57px] bg-main-blue-100 h-fit z-[1] max-w-[292px]",
        {
          "": !isCollapsed,
        }
      )}
    >
      <div
        className={cn(
          "desktop:hidden bg-main-blue-100 rounded-full absolute -right-4 top-24 max-sm:top-[88px] p-1 max-sm:scale-90 cursor-pointer",
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
          "max-desktop:text-center": isCollapsed,
        })}
      >
        <span className="font-mansalva flex-1 text-white text-5xl max-sm:text-4xl desktop:text-[64px]">
          CS
        </span>
        <span
          className={cn(
            "text-2xl desktop:text-[32px] font-semibold desktop:leading-[35px] text-logo-gradient",
            {
              "max-desktop:hidden": isCollapsed,
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
