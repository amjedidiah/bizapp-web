import DashboardHeader from "@/components/shared/dashboard-header";
import { PropsWithChildren } from "react";

export default function DashboardMain({ children }: PropsWithChildren) {
  return (
    <main className="flex-1 p-[30px] flex flex-col gap-[18px] max-[576px]:pl-[104px] max-[576px]:pr-[14px] min-[577px]:max-lg:pl-44 md:max-lg:pt-3 max-md:pt-6">
      <DashboardHeader />
      {children}
    </main>
  );
}
