import { AgentStatus, CustomerStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = {
  state: string;
  isSame?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export default function Status({
  state,
  isSame = false,
  className,
  ...rest
}: Props) {
  const status = state.toLowerCase();

  return (
    <span
      className={cn(
        "p-1 text-sm leading-4 rounded capitalize",
        {
          "bg-red-100 bg-opacity-30 text-red-100":
            status === CustomerStatus.Pending,
          "text-black bg-yellow-200 bg-opacity-60":
            status === CustomerStatus.Attending,
          "bg-green bg-opacity-30 text-black":
            status === CustomerStatus.Closed || status === AgentStatus.Active,
          "text-green bg-green-100": status === CustomerStatus.Closed && isSame,
          "bg-yellow-200 bg-opacity-60 text-black": status === AgentStatus.Away,
          "text-black bg-red-100 bg-opacity-30": status === AgentStatus.Offline,
        },
        className
      )}
      {...rest}
    >
      {state}
    </span>
  );
}
