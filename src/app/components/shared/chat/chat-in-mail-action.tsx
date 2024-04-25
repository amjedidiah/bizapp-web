"use client";
import useModal from "@/hooks/use-modal";
import { BAMessage } from "@/lib/icons";
import InMailMessageModal from "@/components/shared/in-mail-modal/in-mail-message-modal";

export default function ChatInMailAction() {
  const { modalRef, openModal, closeSelf } = useModal();

  return (
    <>
      <button
        className="flex items-center py-[5px] px-5 gap-2 laptop:gap-[10px] rounded-[100px] border border-black bg-yellow-200 bg-opacity-60"
        onClick={openModal}
      >
        <span className="max-laptop:scale-75">
          <BAMessage />
        </span>
        <span className="text-main-blue max-laptop:text-sm font-montserrat font-semibold leading-[18px] -tracking-[0.165px]">
          in-Mail Messages
        </span>
      </button>
      <InMailMessageModal ref={modalRef} onCloseSelf={closeSelf} />
    </>
  );
}
