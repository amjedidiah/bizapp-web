import { AgentLinks } from "@/lib/constants";
import { findMostSimilarPathname } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useHeaderTitle() {
  const pathname = usePathname();
  const params = useParams();
  const rootPath = findMostSimilarPathname(pathname, params);

  const title = useMemo(() => {
    if (pathname.includes(AgentLinks.Customers.pathname))
      return `Customer${!params?.id ? "s" : ""}`;

    return Object.values(AgentLinks).find((item) => item.pathname === rootPath)
      ?.title;
  }, [params?.id, pathname, rootPath]);

  const hasBackArrow = useMemo(
    () =>
      Boolean(pathname.includes(AgentLinks.Customers.pathname) && params?.id),
    [params?.id, pathname]
  );

  return { title, hasBackArrow };
}
