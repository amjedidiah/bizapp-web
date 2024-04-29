import {
  FormEventHandler,
  HTMLAttributes,
  MouseEventHandler,
  forwardRef,
  useCallback,
} from "react";

type Props = {
  onCloseSelf: MouseEventHandler<HTMLDialogElement>;
} & HTMLAttributes<HTMLDialogElement>;

export default forwardRef<HTMLDialogElement, Props>(function TemplateModal(
  { onCloseSelf },
  ref
) {
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
        <div className="flex items-center justify-between gap-3">
          <p className="text-main-blue text-lg font-bold leading-5">Template</p>
        </div>
        <input
          type="text"
          name="question"
          placeholder="Question"
          id="question"
          className="rounded md:rounded-md lg:rounded-lg border border-gray-400 outline-none shadow-none py-[10px] px-[14px] text-black text-opacity-50 font-roboto placeholder:text-opacity-50"
        />
        <textarea
          name="answer"
          placeholder="Detailed answer"
          id="answer"
          rows={16}
          className="rounded md:rounded-md lg:rounded-lg border border-gray-400 outline-none shadow-none py-[10px] px-[14px] text-main-blue font-roboto text-sm placeholder:text-opacity-50"
        />
        <button className="rounded-[10px] border border-black bg-yellow-200 bg-opacity-60 p-2 lg:py-[15px] lg:px-5 text-main-blue lg:text-xl font-bold">
          Save
        </button>
      </form>
    </dialog>
  );
});
