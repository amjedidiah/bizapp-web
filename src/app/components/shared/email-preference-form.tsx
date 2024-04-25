"use client";
import useSaveSettings from "@/hooks/use-save-settings";
import { cn } from "@/lib/utils";

export default function EmailPreferenceForm() {
  const { submitText, loadStep, handleSubmit, isAnimating } = useSaveSettings();

  return (
    <form className="flex flex-col gap-[26px] w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="current" className="text-gray-800 text-sm font-bold">
          Current Email
        </label>
        <input
          type="email"
          name="current"
          id="current"
          className="border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
          value="agentummi@bizapp.ng"
          disabled
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="new" className="text-gray-800 text-sm font-bold">
          New Email
        </label>
        <input
          type="text"
          name="new"
          id="new"
          className="border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
          placeholder="Enter new email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm" className="text-gray-800 text-sm font-bold">
          Confirm New Email
        </label>
        <input
          type="text"
          name="confirm"
          id="confirm"
          className="border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
          placeholder="Confirm new email"
        />
      </div>
      <div className="mt-6 flex flex-col items-center gap-[10px]">
        <button
          className={cn(
            "relative w-full max-w-[314px] rounded-lg p-2 lg:p-[10px] border border-black bg-yellow-200 bg-opacity-60 shadow-status text-main-blue font-medium after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-black after:bg-opacity-20",
            {
              "after:w-0": isAnimating && loadStep % 4 === 1,
              "after:w-1/6": isAnimating && loadStep % 4 === 2,
              "after:w-4/6": isAnimating && loadStep % 4 === 3,
              "after:w-full": isAnimating && loadStep % 4 === 0,
              "bg-white border-0": submitText === "Saved!",
            }
          )}
        >
          {submitText}
        </button>
        <p className="text-black text-xs font-medium">
          Your supervisor will be alerted of your change
        </p>
      </div>
    </form>
  );
}
