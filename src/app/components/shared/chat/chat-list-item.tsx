"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import Avatar from "@/components/shared/avatar";
import { memo, useEffect, useRef } from "react";
import useRootPath from "@/hooks/use-root-path";

type Props = {
  id: string;
  name: string;
  excerpt: string;
  time: string;
  count: number;
};

function ChatListItem({ id, name, excerpt, time, count }: Props) {
  const params = useParams();
  const [_, chatId] = params.slug as string[];
  const ref = useRef<HTMLAnchorElement>(null);
  const isActive = chatId === id;
  const rootPath = useRootPath(-4);

  useEffect(() => {
    const link = ref?.current;
    const list = link?.parentElement as HTMLDivElement;

    if (!link) return;

    if (isActive) {
      list.scrollTo({
        top: link.offsetTop - list.offsetTop,
        behavior: "smooth",
      });
    }
  }, [isActive]);

  return (
    <Link href={`${rootPath}/${id}`} ref={ref} id={chatId}>
      <div
        className={cn(
          "grid grid-cols-[1fr,auto] mobile:grid-cols-[55px,1fr,auto] justify-between py-1 px-[6px] rounded-[5px] gap-[10px]",
          {
            "bg-yellow-300": isActive,
          }
        )}
      >
        <Avatar />
        <div className="flex flex-col max-w-[364px] max-sm:row-start-2 max-sm:col-span-2">
          <p className="text-gray-1 font-semibold">{name}</p>
          <p className="text-gray-2 text-xs lg:leading-6">{excerpt}</p>
        </div>
        <div className="flex flex-col items-end text-main-blue text-xs min-w-fit max-sm:row-start-1 max-sm:col-start-2">
          <p className="font-medium lg:leading-6">{time}</p>
          <span className="rounded-full w-[22px] h-[22px] flex items-center justify-center font-inter font-medium lg:leading-6 bg-yellow-600">
            {count}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default memo(ChatListItem);
