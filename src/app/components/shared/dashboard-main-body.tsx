import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function DashboardMainBody({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid gap-[31px] overflow-auto pt-[18px] pb-[30px] pl-[100px] pr-6 sm:pr-[30px] sm:max-desktop:pl-[134px] desktop:px-[30px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
