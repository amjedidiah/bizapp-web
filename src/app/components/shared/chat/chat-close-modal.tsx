import { BAQuestionMark } from "@/lib/icons";
import { HTMLAttributes, MouseEventHandler, forwardRef } from "react";

type Props = {
  onCloseSelf: MouseEventHandler<HTMLDialogElement>;
} & HTMLAttributes<HTMLDialogElement>;

export default forwardRef<HTMLDialogElement, Props>(function ChatCloseModal(
  { onCloseSelf },
  ref
) {
  return (
    <dialog
      ref={ref}
      onClick={onCloseSelf}
      className="max-mobile:px-2 bg-transparent backdrop:bg-black backdrop:bg-opacity-30"
    >
      <form
        method="dialog"
        className="flex flex-col gap-6 p-4 pt-6 bg-white rounded-lg items-center text-[#25282B] max-w-[280px]"
      >
        <span>
          <BAQuestionMark />
        </span>
        <p className=" text-center font-inter text-lg font-semibold leading-6 tracking-[0.2px]">
          Are you sure you want to close this issue?
        </p>
        <div className="flex items-center gap-6">
          <button
            value="true"
            className="py-3 px-6 rounded-md border border-black bg-white text-black font-inter font-semibold tracking-[0.1px]"
          >
            Yes
          </button>
          <button className="py-3 px-6 rounded-md bg-yellow-200 bg-opacity-60 font-inter font-semibold tracking-[0.1px]">
            No
          </button>
        </div>
      </form>
    </dialog>
  );
});
