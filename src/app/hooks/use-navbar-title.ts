import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useHeaderTitle() {
  const pathname = usePathname();

  const title = useMemo(
    () =>
      ({
        "/agent/pending": "Pending Requests",
      }[pathname] || "Dashboard"),
    [pathname]
  );

  return title;
}
