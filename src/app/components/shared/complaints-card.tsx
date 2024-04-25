"use client";

import { BACaretDown } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, memo, useCallback } from "react";
import Status from "@/components/shared/status";
import { CustomerStatus } from "@/lib/constants";

type Props = {
  date: string;
  time: string;
  agent: string;
  department: string;
  status: CustomerStatus;
  details: string;
  index: number;
  isActive: boolean;
  onSetActive: Dispatch<SetStateAction<number | undefined>>;
};

function ComplaintsCard({
  date,
  time,
  agent,
  department,
  status,
  details,
  index,
  isActive,
  onSetActive,
}: Props) {
  const toggleInfoShown = useCallback(
    () =>
      onSetActive((prev?: number) => {
        if (prev === index) return undefined;
        return index;
      }),
    [index, onSetActive]
  );

  return (
    <div className="grid gap-3 lg:gap-[26px]">
      <div className="grid md:grid-cols-[repeat(4,1fr),36px] max-md:text-start px-4 mb-[6px] bg-white py-4 rounded">
        <p>{date}</p>
        <p>{time}</p>
        <p>{agent}</p>
        <p>{department}</p>
        <p
          className={cn("w-fit", {
            "rotate-180": isActive,
          })}
        >
          <span className={cn("cursor-pointer")} onClick={toggleInfoShown}>
            <BACaretDown />
          </span>
        </p>
      </div>
      <div
        className={cn("col-span-full rounded bg-white p-4 lg:px-5", {
          hidden: !isActive,
        })}
      >
        <div className="rounded-[10px] border border-gray-400 p-4 lg:px-5 text-main-blue flex flex-col gap-[5px] text-start">
          <p className="text-black text-lg lg:text-2xl font-medium tracking-[0.24px]">
            Wallet funding
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-5 flex-wrap text-xs font-semibold">
              <p className="lg:leading-6">{agent}</p>
              <p className="lg:leading-6">{date}</p>
              <p className="lg:leading-6">{time}</p>
              <p className="lg:leading-6">{department}</p>
              <Status className="font-normal p-1 h-fit" state={status} isSame />
            </div>
            <p className="text-base font-light lg:leading-7 tracking-[0.16px]">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ComplaintsCard);
