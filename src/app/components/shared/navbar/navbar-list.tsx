import NavbarListItem, {
  NavItem,
} from "@/components/shared/navbar/navbar-list-item";
import { findMostSimilarPathname } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { memo } from "react";

type Props = {
  list: NavItem[];
};

function NavbarList({ list }: Props) {
  const url = usePathname();
  const params = useParams();
  const activePath = findMostSimilarPathname(url, params);

  return (
    <ul className="flex flex-col gap-5">
      {list.map((item, i) => (
        <NavbarListItem
          key={item.name}
          isActive={item.pathname === activePath}
          {...item}
        />
      ))}
    </ul>
  );
}

export default memo(NavbarList);
