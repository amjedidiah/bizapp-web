import { SupervisorLinksChat } from "@/lib/constants";
import Link from "next/link";

export default function CasesButton({ id }: Record<string, string>) {
  return (
    <Link
      href={`/supervisor/messages${SupervisorLinksChat.Customers}/${id}`}
      className="text-center py-[10px] px-6 rounded-lg bg-yellow-200 bg-opacity-60 border border-black text-primary font-inter text-sm font-black"
    >
      <span>View</span>
    </Link>
  );
}
