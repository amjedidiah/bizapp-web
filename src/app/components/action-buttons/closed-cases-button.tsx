"use client";

import { AgentLinks } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { memo } from "react";

function ClosedCasesButton({ id }: Record<string, string>) {
  const router = useRouter();
  const handleClick = () =>
    router.push(`${AgentLinks.Customers.pathname}/${id}`);

  return (
    <button className="text-black text-sm underline" onClick={handleClick}>
      View
    </button>
  );
}


export default memo(ClosedCasesButton);
