"use client";
import BodyNavigationItem, {
  BodyNavigationItemProps,
} from "@/components/shared/body-navigation-item";
import { useParams } from "next/navigation";
import { memo } from "react";

type Props = {
  routes: Array<Omit<BodyNavigationItemProps, "isActive">>;
  level?: number;
  pathTypeLevel?: number;
};

function BodyNavigation({ routes, level = 3, pathTypeLevel = 0 }: Props) {
  const params = useParams();
  const pathType = params.slug?.[pathTypeLevel];

  return (
    <div className="flex max-sm:flex-col max-sm:w-full items-center mb-3 w-fit px-3 lg:mr-7 py-1 rounded-[30px] border border-gray-10 sm:[&>*:nth-child(n+2)]:after:absolute [&>*:nth-child(n+2)]:after:-left-[5px] [&>*:nth-child(n+2)]:after:-top-[2px] laptop:[&>*:nth-child(n+2)]:after:top-1 [&>*:nth-child(n+2)]:after:w-[1px] [&>*:nth-child(n+2)]:after:h-10 [&>*:nth-child(n+2)]:after:bg-gray-400">
      {routes.map((item) => (
        <BodyNavigationItem
          isActive={
            pathType?.replaceAll("-", " ").trim().toLowerCase() ===
            item.name.trim().toLowerCase()
          }
          level={level}
          key={item.name}
          {...item}
        />
      ))}
    </div>
  );
}

export default memo(BodyNavigation);