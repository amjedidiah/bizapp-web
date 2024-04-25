"use client";

import useSaveSettings from "@/hooks/use-save-settings";
import { BAEyeClose } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";

function AccountPasswordForm() {
  const [currentIsHidden, setCurrentIsHidden] = useState(true);
  const [newIsHidden, setNewIsHidden] = useState(true);
  const [confirmIsHidden, setConfirmIsHidden] = useState(true);

  const toggleCurrentIsHidden = () => setCurrentIsHidden((prev) => !prev);
  const toggleNewIsHidden = () => setNewIsHidden((prev) => !prev);
  const toggleConfirmIsHidden = () => setConfirmIsHidden((prev) => !prev);

  const { submitText, loadStep, handleSubmit, isAnimating } = useSaveSettings();

  return (
    <form className="flex flex-col gap-[26px] w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="current" className="text-gray-800 text-sm font-bold">
          Current Password
        </label>
        <div className="w-full relative">
          <input
            type={currentIsHidden ? "password" : "text"}
            name="current"
            id="current"
            className="w-full border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
            value="**********"
            disabled
          />
          <span
            onClick={toggleCurrentIsHidden}
            className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl"
          >
            {currentIsHidden ? <HiOutlineEye /> : <BAEyeClose />}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="new" className="text-gray-800 text-sm font-bold">
          New Password
        </label>
        <div className="w-full relative">
          <input
            type={newIsHidden ? "password" : "text"}
            name="new"
            id="new"
            className="w-full border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
            placeholder="Enter New Password"
          />
          <span
            onClick={toggleNewIsHidden}
            className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl"
          >
            {newIsHidden ? <HiOutlineEye /> : <BAEyeClose />}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm" className="text-gray-800 text-sm font-bold">
          Confirm New Password
        </label>
        <div className="w-full relative">
          <input
            type={confirmIsHidden ? "password" : "text"}
            name="confirm"
            id="confirm"
            className="w-full border border-gray-400 outline-none shadow-none rounded-lg bg-white py-[10px] px-3 text-main-blue placeholder:opacity-50"
            placeholder="Confirm New Password"
          />
          <span
            onClick={toggleConfirmIsHidden}
            className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl"
          >
            {confirmIsHidden ? <HiOutlineEye /> : <BAEyeClose />}
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-[10px]">
        <button
          className={cn(
            "relative w-full max-w-[314px] rounded-lg p-2 lg:p-[10px] border border-black bg-yellow-200 bg-opacity-60 shadow-status text-main-blue font-medium after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-opacity-20",
            {
              "after:bg-black": isAnimating,
              "after:w-0": loadStep % 4 === 1,
              "after:w-1/6": loadStep % 4 === 2,
              "after:w-4/6": loadStep % 4 === 3,
              "after:w-full": loadStep % 4 === 0,
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

export default memo(AccountPasswordForm);
