"use client";
import { AgentLinks } from "@/lib/constants";
import { BACopy, BADoc } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { memo } from "react";

const template = {
  question: "How to deposit in your wallet",
  answer:
    "Lorem ipsum dolor sit amet consectetur. Bibendum mattis interdum ipsum odio tristique. Orci facilisis lorem sed adipiscing ultricies sed amet sed. Euismod integer a at in pharetra nec. Sed viverra duis dolor elementum porta enim justo nisl sit...",
};

const templates = Array(8)
  .fill(template)
  .map((item, id) => ({ ...item, id: id + 1 }));

function AgentTemplateList() {
  const params = useParams();

  return templates.map(({ id, question, answer }) => (
    <Link
      className={cn("flex gap-[3px] border-b border-gray-400 p-1", {
        "bg-yellow-300 rounded": params.slug?.[0] == id,
      })}
      key={id}
      href={`${AgentLinks.Templates.pathname}/${id}`}
    >
      <div className="flex gap-[10px]">
        <span className="w-[38px] flex-shrink-0 h-[38px] flex items-center justify-center rounded-full bg-[#CFE1F9]">
          <BADoc />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-gray-800 leading-[14px]">
            <span className="text-xs font-medium -tracking-[0.24px] text-opacity-70">
              Question:
            </span>
            <span className="text-sm font-semibold -tracking-[0.28px]">
              {question}
            </span>
          </p>
          <p className="text-gray-700 text-[10px] leading-4">{answer}</p>
        </div>
        <span className="flex-shrink-0 cursor-pointer">
          <BACopy />
        </span>
      </div>
    </Link>
  ));
}

export default memo(AgentTemplateList);
