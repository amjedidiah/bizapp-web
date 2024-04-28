import { Role } from "@/lib/constants";
import { BACases, BACustomerFill, BATendArrow, BATrend } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ShouldRender from "@/components/shared/should-render";

type Props =
  | {
      id: string;
      type: string;
      count: number;
      title: string;
      pathname: string;
      trend?: undefined;
      trendIsPositive?: undefined;
    }
  | {
      id: string;
      type: string;
      count: number;
      title: string;
      pathname: string;
      trend: string;
      trendIsPositive: boolean;
    };

export default function SupervisorStatsItem({
  id,
  type,
  trend,
  trendIsPositive,
  count,
  title,
  pathname,
}: Props) {
  const Icon = type === Role.Customer ? BACustomerFill : BACases;

  return (
    <div
      key={id}
      className={cn("border flex flex-col gap-3 p-2 rounded-lg", {
        "border-yellow-600": id === "1",
        "border-blue": id === "2",
        "border-red-100": id === "3",
        "border-purple": id === "4",
        "border-green-300": id === "5",
      })}
    >
      <p className="ml-auto">
        <span
          className={cn({
            "[&_path]:fill-yellow-600": id === "1",
            "[&_path]:fill-blue": id === "2",
            "[&_path]:fill-red-100": id === "3",
            "[&_path]:fill-purple": id === "4",
            "[&_path]:fill-green-300": id === "5",
          })}
        >
          <Icon />
        </span>
      </p>
      <div className="flex flex-col gap-2 relative flex-1 justify-between">
        <p
          className={cn(
            "flex items-center py-[2px] px-1 gap-[1px] rounded-[20px] text-white text-[8px] font-semibold absolute left-0 -top-6",
            {
              "bg-yellow-600": id === "1",
              "bg-blue": id === "2",
              "bg-red-100": id === "3",
              "bg-purple": id === "4",
              "bg-green-300": id === "5",
              hidden: !trend,
              "rotate-180": !trendIsPositive,
            }
          )}
        >
          <span>
            <BATrend />
          </span>
          {trend}
        </p>
        <div className="flex gap-1">
          <p className="text-main-blue text-3xl sm:text-4xl desktop:text-5xl font-semibold -tracking-[0.96px]">
            {count}
          </p>
          <p className="text-main-blue text-sm font-bold">{title}</p>
        </div>
        <Link
          href={pathname}
          className="mr-auto inline-flex pb-[3px] items-center justify-center gap-[5px] border-b border-black text-main-blue text-[10px] font-medium tracking-[0.1px] uppercase"
        >
          <ShouldRender condition={id === "5"}>generate list</ShouldRender>
          <ShouldRender condition={id !== "5"}>view all</ShouldRender>
          <span
            className={cn({
              "[&_path]:stroke-yellow-600": id === "1",
              "[&_path]:stroke-blue": id === "2",
              "[&_path]:stroke-red-100": id === "3",
              "[&_rect]:stroke-purple": id === "4",
              "[&_rect]:stroke-green-300": id === "5",
            })}
          >
            <BATendArrow />
          </span>
        </Link>
      </div>
    </div>
  );
}
