import { BAStatusCaret, BAStatusCircle } from "@/lib/icons";
import Image from "next/image";
import truncate from "truncate-html";

export default function DashboardHeader() {
  return (
    <header className="py-6 lg:pt-7 lg:pb-9 flex justify-between md:items-center border-b border-black max-md:flex-col max-md:gap-3 max-md:py-3">
      <h1 className="text-gray-900 text-3xl max-[576px]:text-2xl lg:text-4xl lg:leading-[44px] -tracking-[0.72px] max-md:order-2">
        Dashboard
      </h1>
      <div className="flex items-center gap-3 max-[576px]:gap-2 max-md:justify-between">
        <div className="py-[10px] px-[18px] max-[576px]:p-2 flex gap-2 items-center md:mr-3 rounded-lg border border-black bg-yellow shadow-status max-md:order-2">
          <span>
            <BAStatusCircle />
          </span>
          <span className="text-sm text-green font-semibold lg:leading-6 max-[576px]:hidden">
            Online
          </span>
          <span>
            <BAStatusCaret />
          </span>
        </div>

        <div className="flex items-center gap-2 max-md:order-1 max-md:flex-1">
          <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
            <Image src="/images/agent.png" fill sizes="100%" alt="agent" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-black-100 font-semibold leading-4">
              <span className="max-[576px]:hidden">Ummi Moh&apos;d</span>
              <span className="hidden max-[576px]:block">
                {truncate("Ummi Moh&apos;d", 10, { byWords: false })}
              </span>
            </p>

            <p className="text-gray-100 font-medium">Agent</p>
          </div>
        </div>

        <div className="p-2 relative rounded-full bg-gray-200 max-md:order-3">
          <Image
            src="/images/notification-bell.png"
            width={24}
            height={24}
            alt="notification-bell"
          />

          <span className="absolute [&_circle]:fill-yellow-100 -right-[2px] -top-[2px]">
            <BAStatusCircle />
          </span>
        </div>
      </div>
    </header>
  );
}
