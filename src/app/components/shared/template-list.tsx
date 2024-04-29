"use client";
import { Role } from "@/lib/constants";
import { BACopy, BADoc, BATrash } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MouseEventHandler, memo, useEffect } from "react";
import ShouldRender from "@/components/shared/should-render";
import useModal from "@/hooks/use-modal";
import TemplateDeleteModal from "@/components/shared/template-delete-modal";
import useRootPath from "@/hooks/use-root-path";

const template = {
  question: "How to deposit in your wallet",
  answer:
    "Lorem ipsum dolor sit amet consectetur. Bibendum mattis interdum ipsum odio tristique. Orci facilisis lorem sed adipiscing ultricies sed amet sed. Euismod integer a at in pharetra nec. Sed viverra duis dolor elementum porta enim justo nisl sit...",
};

const templates = Array(8)
  .fill(template)
  .map((item, id) => ({ ...item, id: id + 1 }));

function TemplateList({ role = Role.Agent }) {
  const params = useParams();
  const { closeSelf, modalRef, openModal } = useModal();
  const rootPath = useRootPath();

  useEffect(() => {
    const modal = modalRef?.current;
    if (!modal) return;

    modal.addEventListener("close", () => {
      // const deleteTemplate = Boolean(modal.returnValue);
    });
  }, [modalRef]);

  const handleDeleteClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();

    openModal();
  };

  return templates.map(({ id, question, answer }) => (
    <>
      <Link
        className={cn("flex gap-[3px] border-b border-gray-400 p-1", {
          "bg-yellow-300 rounded": params.slug?.[0] == id,
        })}
        key={id}
        href={`${rootPath}/${id}`}
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
          <ShouldRender condition={role === Role.Agent}>
            <span className="flex-shrink-0 cursor-pointer p-2">
              <BACopy />
            </span>
          </ShouldRender>
          <ShouldRender condition={role === Role.Supervisor}>
            <span
              className="flex-shrink-0 cursor-pointer p-2"
              onClick={handleDeleteClick}
            >
              <BATrash />
            </span>
          </ShouldRender>
        </div>
      </Link>
      <TemplateDeleteModal ref={modalRef} onCloseSelf={closeSelf} />
    </>
  ));
}

export default memo(TemplateList);
