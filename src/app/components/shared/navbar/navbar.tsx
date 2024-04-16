import Link from "next/link";
import NavbarList from "@/components/shared/navbar/navbar-list";
import { NavItem } from "@/components/shared/navbar/navbar-list-item";

type Props = {
  navList: NavItem[];
};

export default function Navbar({ navList }: Props) {
  return (
    <nav className="flex flex-col py-8 px-[23px] gap-[57px] bg-main-blue w-[292px] h-fit">
      <Link href="" className="flex items-center gap-[10px]">
        <span className="font-mansalva flex-1 text-white text-4xl lg:text-[64px]">
          CS
        </span>
        <span className="text-2xl lg:text-[32px] font-semibold lg:leading-[35px] text-logo-gradient">
          Customer Support
        </span>
      </Link>
      <NavbarList list={navList} />
    </nav>
  );
}
