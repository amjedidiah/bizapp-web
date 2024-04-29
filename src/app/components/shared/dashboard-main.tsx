import { PropsWithChildren } from "react";

export default function DashboardMain({ children }: PropsWithChildren) {
  return (
    <main className="flex-1 flex flex-col desktop:pt-[30px] md:max-desktop:pt-3 pt-6">
      {children}
    </main>
  );
}
