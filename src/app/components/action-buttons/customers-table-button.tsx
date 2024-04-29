"use client";

import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";

function CustomersTableButton({ id }: Record<string, string>) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => router.push(`${pathname}/${id}`);

  return (
    <button
      className="p-1 max-laptop:px-4 rounded bg-yellow-200 bg-opacity-60 text-black leading-4 laptop:w-full"
      onClick={handleClick}
    >
      View
    </button>
  );
}

export default memo(CustomersTableButton);
