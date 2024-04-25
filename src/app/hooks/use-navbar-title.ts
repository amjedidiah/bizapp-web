import { AgentLinks } from "@/lib/constants";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useHeaderTitle() {
  const pathname = usePathname();
  const params = useParams();

  const title = useMemo(() => {
    if (pathname.includes(AgentLinks.Pending.pathname))
      return "Pending Requests";
    if (pathname.includes(AgentLinks.Customers.pathname))
      return `Customer${!params?.id ? "s" : ""}`;
    if (pathname.includes(AgentLinks.Chat.pathname)) return "Chat";

    return "Dashboard";
  }, [params?.id, pathname]);

  const hasBackArrow = useMemo(
    () =>
      Boolean(pathname.includes(AgentLinks.Customers.pathname) && params?.id),
    [params?.id, pathname]
  );

  return { title, hasBackArrow };
}
