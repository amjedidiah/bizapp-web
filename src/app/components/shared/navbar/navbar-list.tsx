import NavbarListItem, {
  NavItem,
} from "@/components/shared/navbar/navbar-list-item";
import { memo } from "react";

type Props = {
  list: NavItem[];
};

function NavbarList({ list }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      {list.map((item) => (
        <NavbarListItem key={item.name} {...item} />
      ))}
    </ul>
  );
}

export default memo(NavbarList);
