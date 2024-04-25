import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
};

export default function Avatar({
  className,
  src = "/images/user-chat.png",
  alt = "user",
}: Props) {
  return (
    <div
      className={cn(
        "h-[55px] w-[55px] flex-shrink-0 rounded-full overflow-hidden relative",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
