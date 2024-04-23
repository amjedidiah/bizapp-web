import { cn } from "@/lib/utils";

type Props = {
  state: string;
};

export default function Status({ state }: Props) {
  const status = state.toLowerCase();
  return (
    <span
      className={cn("p-1 text-sm leading-4 rounded capitalize", {
        "bg-red-100 bg-opacity-30 text-red-100": status === "pending",
        "text-black bg-yellow-200 bg-opacity-60": status === "attending",
        "bg-green bg-opacity-30 text-black": status === "closed",
      })}
    >
      {state}
    </span>
  );
}
