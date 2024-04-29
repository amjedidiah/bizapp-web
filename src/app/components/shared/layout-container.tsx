"use client";

import { AgentLinks, SupervisorLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { PropsWithChildren, memo } from "react";

function LayoutContainer({ children }: PropsWithChildren) {
  const params = useParams();
  const pathname = usePathname();

  return (
    <div
      className={cn("w-full h-full overflow-hidden flex bg-white", {
        "bg-slate-300":
          params?.id &&
          (pathname.includes(AgentLinks.Customers.pathname) ||
            pathname.includes(SupervisorLinks.Agents.pathname) ||
            pathname.includes(SupervisorLinks.Customers.pathname)),
      })}
    >
      {children}
    </div>
  );
}

export default memo(LayoutContainer);
