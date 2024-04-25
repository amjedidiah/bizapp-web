import { cn } from "@/lib/utils";
import Avatar from "@/components/shared/avatar";
import { BAChatCaret } from "@/lib/icons";

const messages = [
  {
    id: "1",
    user: "agent",
    content:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.",
    time: "9:00 am",
    image: "/images/not-customer-chat.png",
  },
  {
    id: "2",
    user: "customer",
    content:
      "An example with less text Aenean lacinia bibendum nulla sed consectetur.consectetur.Morbi leo risus, porta ac ",
    time: "9:05 am",
  },
  {
    id: "3",
    user: "agent",
    content:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.",
    time: "9:00 am",
    image: "/images/not-customer-chat.png",
  },
];

export default function ChatBodyMessages() {
  return (
    <div className="flex flex-col items-center py-6 lg:py-[38px] gap-[22px] lg:pl-10 lg:pr-5 flex-1 lg:overflow-scroll">
      <p className="text-xs text-black-400">Wednesday 13th March,2024</p>
      <div className="flex flex-col gap-6 lg:gap-9">
        {messages.map(({ user, content, time, id, image }) => (
          <div
            className={cn("flex gap-2 lg:gap-4", {
              "flex-row-reverse": user !== "customer",
            })}
            key={id}
          >
            <Avatar
              src={image}
              className={cn("w-10 h-10 mobile:w-[49px] mobile:h-[49px]", {
                "w-10 h-10": user !== "customer",
              })}
            />
            <div
              className={cn("flex flex-col", {
                "items-end": user === "customer",
              })}
            >
              <div
                className={cn(
                  "p-2 lg:p-4 rounded-[10px] bg-yellow-300 w-full relative",
                  {
                    "bg-slate-200 border border-slate-700": user !== "customer",
                  }
                )}
              >
                <p className="text-black text-[13px] mobile:text-sm font-light lg:leading-6 tracking-[0.42px]">
                  {content}
                </p>
                <span
                  className={cn("top-6 absolute", {
                    "-left-3": user == "customer",
                    "-right-3 rotate-180 top-[14px] [&_path]:fill-slate-200 [&_path]:stroke-slate-700":
                      user !== "customer",
                  })}
                >
                  <BAChatCaret />
                </span>
              </div>
              <p className="text-black font-inter text-xs mobile:text-[13px] font-light lg:leading-6">
                {time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
