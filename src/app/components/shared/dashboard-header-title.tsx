"use client";
import useHeaderTitle from "@/hooks/use-navbar-title";
import { memo } from "react";

function DashboardHeaderTitle() {
  const title = useHeaderTitle();

  return (
    <h1 className="text-main-blue text-3xl max-mobile:text-2xl lg:text-4xl lg:leading-[44px] -tracking-[0.72px] max-md:order-2">
      {title}
    </h1>
  );
}

export default memo(DashboardHeaderTitle);
