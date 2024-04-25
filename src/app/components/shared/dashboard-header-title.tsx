"use client";
import useHeaderTitle from "@/hooks/use-navbar-title";
import { memo, useCallback } from "react";
import ShouldRender from "@/components/shared/should-render";
import { BABackArrow } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { AgentLinks } from "@/lib/constants";

function DashboardHeaderTitle() {
  const { title, hasBackArrow } = useHeaderTitle();
  const router = useRouter();

  const goToCustomers = useCallback(
    () => router.push(AgentLinks.Customers.pathname),
    [router]
  );

  return (
    <h1 className="text-main-blue text-3xl max-mobile:text-2xl lg:text-4xl lg:leading-[44px] -tracking-[0.72px] max-md:order-2 flex items-center gap-[2px]">
      <ShouldRender condition={hasBackArrow}>
        <span onClick={goToCustomers} className="cursor-pointer">
          <BABackArrow />
        </span>
      </ShouldRender>
      {title}
    </h1>
  );
}

export default memo(DashboardHeaderTitle);
