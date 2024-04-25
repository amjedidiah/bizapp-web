import { BAChevronDown } from "@/lib/icons";
import {
  FormEventHandler,
  HTMLAttributes,
  MouseEventHandler,
  forwardRef,
  useCallback,
} from "react";
import CollaborateAgentModal from "@/components/shared/collaborate-agent-modal";
import useModal from "@/hooks/use-modal";

type Props = {
  onCloseSelf: MouseEventHandler<HTMLDialogElement>;
} & HTMLAttributes<HTMLDialogElement>;

export default forwardRef<HTMLDialogElement, Props>(function InMailMessageModal(
  { onCloseSelf },
  ref
) {
  const { modalRef, openModal, closeSelf, closeModal } = useModal();
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
    },
    []
  );

  return (
    <dialog
      ref={ref}
      onClick={onCloseSelf}
      className="max-mobile:px-2 bg-transparent backdrop:bg-black backdrop:bg-opacity-30"
    >
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4 bg-white p-6 lg:py-10 lg:px-8 rounded-2xl w-[604px] max-w-full"
      >
        <p className="text-main-blue text-lg font-bold leading-5">
          in-Mail Message
        </p>
        <div
          className="flex items-center justify-between rounded md:rounded-md lg:rounded-lg border border-gray-400 py-[6px] px-[14px] lg:px-7 cursor-pointer"
          onClick={openModal}
        >
          <div className="text-black lg:p-[10px]">Supervisor</div>
          <button
            type="button"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center"
          >
            <span>
              <BAChevronDown />
            </span>
          </button>
        </div>
        <textarea
          name="message"
          placeholder="type here!"
          id="message"
          rows={16}
          className="rounded md:rounded-md lg:rounded-lg border border-gray-400 outline-none shadow-none py-[10px] px-[14px] text-main-blue font-roboto text-sm placeholder:text-opacity-50"
        />
        <button className="rounded-[10px] border border-black bg-yellow-200 bg-opacity-60 p-2 lg:py-[15px] lg:px-5 text-main-blue lg:text-xl font-bold">
          Send
        </button>
      </form>

      <CollaborateAgentModal
        ref={modalRef}
        onClose={closeModal}
        onCloseSelf={closeSelf}
      />
    </dialog>
  );
});
