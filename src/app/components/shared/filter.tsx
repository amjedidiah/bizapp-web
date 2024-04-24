"use client";

import { BAFilter } from "@/lib/icons";
import { HTMLAttributes, memo, useCallback, useState } from "react";
import Dropdown from "@/components/shared/dropdown";
import { cn } from "@/lib/utils";

function Filter({
  states,
  className,
  ...rest
}: { states: string[] } & HTMLAttributes<HTMLDivElement>) {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);

  const toggleDropdown = useCallback(
    () => setIsDropdownHidden((prev) => !prev),
    []
  );

  const handleFilter = useCallback((newState: string) => {}, []);

  return (
    <div
      className={cn(
        "flex p-[10px] gap-4 items-center cursor-pointer relative w-fit",
        className
      )}
      onClick={toggleDropdown}
      {...rest}
    >
      <span className="text-black-200 font-inter text-xs">Filter by</span>
      <span>
        <BAFilter />
      </span>
      <Dropdown
        onToggleState={handleFilter}
        isHidden={isDropdownHidden}
        states={states}
        className="top-10"
      />
    </div>
  );
}

export default memo(Filter);
