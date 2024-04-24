"use client";

import { AgentLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function LayoutContainer({ children }: PropsWithChildren) {
  const params = useParams();
  const pathname = usePathname();

  return (
    <div
      className={cn("w-full h-full overflow-hidden flex bg-white", {
        "bg-slate-300":
          params?.id && pathname.includes(AgentLinks.Customers.pathname),
      })}
    >
      {children}
    </div>
  );
}
