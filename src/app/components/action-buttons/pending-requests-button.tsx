"use client";

import { AgentLinksChat, CustomerStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

function PendingRequestsButton({ id, status }: Record<string, string>) {
  const router = useRouter();
  const handleClick = useCallback(
    () => router.push(`${AgentLinksChat.Customers}/${id}`),
    [router, id]
  );
  const disabled = status.toLowerCase() === CustomerStatus.Attending;

  return (
    <button
      className={cn(
        "py-[10px] px-6 rounded-lg bg-green bg-opacity-30 text-primary text-opacity-80 font-inter text-sm font-black",
        {
          "bg-black-300": disabled,
        }
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      Accept
    </button>
  );
}

export default memo(PendingRequestsButton);
