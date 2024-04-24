import NavbarListItem, {
  NavItem,
} from "@/components/shared/navbar/navbar-list-item";
import { findMostSimilarPathname } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { memo } from "react";

type Props = {
  list: NavItem[];
};

function NavbarList({ list }: Props) {
  const url = usePathname();
  const pathnames = list.map((item) => item.pathname);
  const activeIndex = findMostSimilarPathname(url, pathnames);

  return (
    <ul className="flex flex-col gap-5">
      {list.map((item, i) => (
        <NavbarListItem
          key={item.name}
          isActive={i === activeIndex}
          {...item}
        />
      ))}
    </ul>
  );
}

export default memo(NavbarList);
