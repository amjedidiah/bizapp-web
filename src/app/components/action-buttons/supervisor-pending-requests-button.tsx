"use client";

import { CustomerStatus, SupervisorLinksChat } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";
import ShouldRender from "@/components/shared/should-render";

function SupervisorPendingRequestsButton({
  id,
  status,
}: Record<string, string>) {
  const router = useRouter();
  const handleClick = useCallback(
    () =>
      router.push(`/supervisor/messages${SupervisorLinksChat.Customers}/${id}`),
    [router, id]
  );
  const canView = status.toLowerCase() !== CustomerStatus.Pending;

  return (
    <button
      className={cn(
        "py-[10px] px-6 rounded-lg bg-green bg-opacity-30 text-primary text-opacity-80 font-inter text-sm font-black",
        {
          "bg-yellow-200 text-black underline": canView,
        }
      )}
      onClick={handleClick}
    >
      <ShouldRender condition={!canView}>
        <span>Accept</span>
      </ShouldRender>
      <ShouldRender condition={canView}>
        <span>View</span>
      </ShouldRender>
    </button>
  );
}

export default memo(SupervisorPendingRequestsButton);
