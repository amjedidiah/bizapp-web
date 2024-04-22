import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export default function Button({
  children,
  variant = "white",
  underline,
  ...rest
}: PropsWithChildren<
  {
    variant?: "white" | "yellow" | "yellow-outline" | "yellow-2";
    underline?: boolean;
  } & HTMLAttributes<HTMLButtonElement>
>) {
  const isYellow = variant === "yellow";
  const isYellowOutline = variant === "yellow-outline";
  const isYellow2 = variant === "yellow-2";

  return (
    <button
      className={cn("py-[6px] px-3 rounded-[5px]", {
        "bg-yellow-200 bg-opacity-60": isYellow || isYellowOutline,
        "border border-black": isYellowOutline,
        "bg-yellow": isYellow2,
      })}
      {...rest}
    >
      <span
        className={cn(
          "text-gray-800 font-inter text-xs lg:leading-[18px] font-medium",
          {
            "text-black": isYellow || isYellowOutline,
            underline,
          }
        )}
      >
        {children}
      </span>
    </button>
  );
}
