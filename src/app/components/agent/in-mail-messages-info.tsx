"use client";
import { BAInfo } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { memo, useCallback, useState } from "react";
import ShouldRender from "@/components/shared/should-render";

function InMailMessagesInfo() {
  const [infoIsVisible, setInfoIsVisible] = useState(false);

  const handleShowInfo = useCallback(() => setInfoIsVisible(true), []);
  const handleHideInfo = useCallback(() => setInfoIsVisible(false), []);
  const handleToggleInfo = useCallback(
    () => setInfoIsVisible((prev) => !prev),
    []
  );

  return (
    <p className="relative">
      <span
        onMouseEnter={handleShowInfo}
        onMouseLeave={handleHideInfo}
        onClick={handleToggleInfo}
        className="cursor-pointer"
      >
        <BAInfo />
      </span>
      <ShouldRender condition={infoIsVisible}>
        <span
          className={cn(
            "absolute p-[19px] pb-[18px] max-w-[187px] bg-slate-700 text-white text-xs text-center right-[10px] top-[18px] lg:left-[10px] lg:top-[10px] w-[225px] rounded-[10px]",
            {
              hidden: !infoIsVisible,
            }
          )}
        >
          Monitor all messages and conversations as they may be messages from
          the supervisor or collaboration from colleagues or escalated issues.
        </span>
      </ShouldRender>
    </p>
  );
}

export default memo(InMailMessagesInfo);
