"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";

function PendingRequestsButton(props: Record<string, string>) {
  const handleClick = () => console.info(props);
  const disabled = props?.status.toLowerCase() === "attending";

  return (
    <button
      className={cn(
        "py-[10px] px-6 rounded-lg bg-green bg-opacity-30 text-primary text-opacity-80 font-inter text-sm font-black",
        {
          "bg-black-300": disabled,
        }
      )}
      onClick={handleClick}
    >
      Accept
    </button>
  );
}

export default memo(PendingRequestsButton);
