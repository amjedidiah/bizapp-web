"use client";

import useModal from "@/hooks/use-modal";
import TemplateModal from "@//components/shared/template-modal";
import { memo } from "react";

function NewTemplateButton() {
  const { closeSelf, modalRef, openModal } = useModal();

  return (
    <div className="col-span-full">
      <button
        onClick={openModal}
        className="flex items-center justify-center py-[10px] px-[18px] rounded-lg border border-yellow-400 bg-yellow shadow-template-copy text-main-blue font-medium"
      >
        Add new Template
      </button>
      <TemplateModal onCloseSelf={closeSelf} ref={modalRef} />
    </div>
  );
}

export default memo(NewTemplateButton);
