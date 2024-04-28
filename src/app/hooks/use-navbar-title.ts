import { AgentLinks, Role, SupervisorLinks } from "@/lib/constants";
import { findMostSimilarPathname } from "@/lib/utils";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

const getLinks = (rootPath: string) =>
  ({
    [Role.Supervisor]: SupervisorLinks,
  }[rootPath.slice(1)] || AgentLinks);

const getTitle = (pathname: string, params: Params, rootPath: string) => {
  const links = getLinks(rootPath);
  if (pathname.includes(Role.Customer))
    return `Customer${!params?.id ? "s" : ""}`;
  if (pathname.includes(SupervisorLinks.Cases.pathname))
    return `${params?.id} Cases`;
  if (pathname.includes(SupervisorLinks.Agents.pathname) && params?.id)
    return "Agent profile";

  return Object.values(links).find((item) => item.pathname === rootPath)?.title;
};

export default function useHeaderTitle() {
  const pathname = usePathname();
  const params = useParams();
  const rootPath = findMostSimilarPathname(pathname, params);

  const title = useMemo(
    () => getTitle(pathname, params, rootPath),
    [params, pathname, rootPath]
  );

  const hasBackArrow = useMemo(
    () =>
      Boolean(pathname.includes(AgentLinks.Customers.pathname) && params?.id),
    [params?.id, pathname]
  );

  return { title, hasBackArrow };
}
