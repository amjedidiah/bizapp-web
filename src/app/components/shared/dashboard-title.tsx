import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export default function DashboardTitle({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2
      className={cn(
        "text-black-100 text-lg font-semibold lg:leading-8",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
