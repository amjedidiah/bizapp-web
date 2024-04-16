import NavbarListItem, {
  NavItem,
} from "@/components/shared/navbar/navbar-list-item";

type Props = {
  list: NavItem[];
};

export default function NavbarList({ list }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      {list.map((item) => (
        <NavbarListItem key={item.name} {...item} />
      ))}
    </ul>
  );
}
