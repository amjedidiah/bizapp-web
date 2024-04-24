import { BAClose, BASearch } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function SearchForm({
  placeholder = "Enter customer's Name or Email Address",
  className,
}: {
  placeholder?: string;
} & HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={cn(
        "flex items-center gap-[31px] w-full lg:max-w-[342px] py-3 px-2 rounded-lg border border-gray-400 border-opacity-20 bg-white",
        className
      )}
    >
      <div className="flex flex-1 items-center gap-[5px]">
        <span>
          <BASearch />
        </span>
        <input
          type="text"
          className="flex-1 outline-none border-none text-xs lg:leading-5 placeholder:text-gray-3"
          placeholder={placeholder}
        />
      </div>
      <span>
        <BAClose />
      </span>
    </form>
  );
}
