import { BAStatusCircle } from "@/lib/icons";
import Image from "next/image";
import truncate from "truncate-html";
import DashboardHeaderTitle from "@/components/shared/dashboard-header-title";
import OnlineStatusButton from "@/components/action-buttons/online-status-button";
import { Role } from "@/lib/constants";

export default function DashboardHeader({ role = Role.Agent }) {
  const details =
    role === Role.Agent
      ? {
          src: "/images/agent.png",
          name: "Ummi Moh&apos;d",
        }
      : {
          src: "/images/supervisor.png",
          name: "Aliyu Mustapha",
        };

  return (
    <header className="py-6 lg:pt-7 lg:pb-9 flex justify-between md:items-center border-b border-black max-md:flex-col max-md:gap-3 max-md:py-3 ml-[100px] mr-6 sm:mr-[30px] sm:max-desktop:ml-[134px] desktop:mx-[30px]">
      <DashboardHeaderTitle />
      <div className="flex items-center gap-3 max-mobile:gap-2 max-md:justify-between">
        <OnlineStatusButton />

        <div className="flex items-center gap-2 max-md:order-1 max-md:flex-1">
          <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
            <Image src={details.src} fill sizes="100%" alt="agent" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-black-100 font-semibold leading-4">
              <span className="max-mobile:hidden">{details.name}</span>
              <span className="mobile:hidden">
                {truncate(details.name, 10, { byWords: false })}
              </span>
            </p>

            <p className="text-gray-100 font-medium capitalize">{role}</p>
          </div>
        </div>

        <div className="p-2 relative rounded-full bg-slate-200 max-md:order-3">
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
