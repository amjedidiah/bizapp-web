import { AgentLinks, Role, SupervisorLinks } from "@/lib/constants";
import { findMostSimilarPathname } from "@/lib/utils";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

const getLinks = (role: string) =>
  ({
    [Role.Supervisor]: SupervisorLinks,
  }[role] || AgentLinks);

const getTitle = (pathname: string, params: Params) => {
  const arr = pathname.split("/");
  const role = arr[1];
  const links = getLinks(role);
  const pathnameInView = findMostSimilarPathname(pathname, params);

  if (params?.id) {
    if (pathnameInView == links.Customers.pathname)
      return `Customer${!params?.id ? "s" : ""}`;
    else if (pathnameInView == (links as any).Cases?.pathname)
      return `${params?.id} Cases`;
    else if (pathnameInView == (links as any).Agents?.pathname)
      return "Agent profile";
  }

  return Object.values(links).find(
    ({ pathname }) => pathname === pathnameInView
  )?.title;
};

const getHasBackArrow = (params: Params, pathname: string) => {
  const validPaths = [
    AgentLinks.Customers.pathname,
    SupervisorLinks.Agents.pathname,
    SupervisorLinks.Customers.pathname,
  ];

  return params?.id && validPaths.some((item) => pathname.includes(item));
};

export default function useHeaderTitle() {
  const pathname = usePathname();
  const params = useParams();

  const title = useMemo(() => getTitle(pathname, params), [params, pathname]);

  const hasBackArrow = useMemo(
    () => getHasBackArrow(params, pathname),
    [params, pathname]
  );

  return { title, hasBackArrow };
}
