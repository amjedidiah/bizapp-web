"use client";

import { BAStatusCaret, BAStatusCircle } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { memo, useCallback, useState } from "react";
import Dropdown from "@/components/shared/dropdown";

const states = ["online", "offline"];

function OnlineStatusButton() {
  const [isOnline, setIsOnline] = useState(true);
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);

  const toggleDropdown = useCallback(
    () => setIsDropdownHidden((prev) => !prev),
    []
  );
  const handleToggleState = useCallback(
    (newState: string) => setIsOnline(newState === "online"),
    []
  );

  return (
    <div
      className="cursor-pointer py-[10px] px-[18px] max-mobile:p-2 flex gap-2 items-center md:mr-3 rounded-lg border border-black bg-yellow shadow-template-copy max-md:order-2 relative"
      onClick={toggleDropdown}
    >
      <span className={cn({ "[&_circle]:fill-red-200": !isOnline })}>
        <BAStatusCircle />
      </span>
      <span
        className={cn(
          "text-sm text-green font-semibold lg:leading-6 max-mobile:hidden",
          {
            "text-red-200": !isOnline,
          }
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
      <span className={cn({ "[&_rect]:stroke-red-200": !isOnline })}>
        <BAStatusCaret />
      </span>
      <Dropdown
        onToggleState={handleToggleState}
        isHidden={isDropdownHidden}
        states={states}
        showCircle
      />
    </div>
  );
}

export default memo(OnlineStatusButton);
