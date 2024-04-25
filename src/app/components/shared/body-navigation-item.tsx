"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import ShouldRender from "@/components/shared/should-render";
import { memo } from "react";

export type BodyNavigationItemProps = {
  href: string;
  name: string;
  count?: number;
  isActive: boolean;
};

function BodyNavigationItem({
  href,
  name,
  count,
  isActive,
}: BodyNavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative mx-1 py-2 laptop:py-[14px] px-[22px] laptop:px-[26px] capitalize text-black font-semibold max-laptop:text-sm leading-[18px]",
        {
          "rounded-[30px] border border-black bg-yellow-200 bg-opacity-60":
            isActive,
        }
      )}
    >
      {name.toLowerCase()}
      <ShouldRender condition={Boolean(count)}>
        <span className="flex items-center justify-center absolute top-[7px] right-[2px] laptop:right-[7px] w-[18px] height-[18px] rounded-full bg-main-blue text-yellow-100 font-inter text-xs font-semibold">
          {count}
        </span>
      </ShouldRender>
    </Link>
  );
}

export default memo(BodyNavigationItem);
