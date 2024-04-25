"use client";
import { SettingsLinks } from "@/lib/constants";
import { BAAccount, BALock } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, memo, useMemo } from "react";

export type SettingsNavigationItemProps = {
  name: SettingsLinks;
  href: string;
};

function SettingsNavigationItem({ name, href }: SettingsNavigationItemProps) {
  const url = usePathname();

  const Icon: FC = useMemo(
    () =>
      ({
        [SettingsLinks.Account]: BAAccount,
        [SettingsLinks.Security]: BALock,
      }[name] || null),
    [name]
  );

  return (
    <Link
      key={name}
      href={href}
      className={cn(
        "flex items-center gap-[10px] py-2 lg:py-[15px] px-[10px] rounded-[5px] border border-gray-400",
        {
          "bg-yellow": url.includes(href),
        }
      )}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      <span className="text-main-blue font-medium leading-[18px] -tracking-[0.165px]">
        {name}
      </span>
    </Link>
  );
}

export default memo(SettingsNavigationItem);
