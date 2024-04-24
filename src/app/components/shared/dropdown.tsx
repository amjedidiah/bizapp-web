"use client";

import { cn } from "@/lib/utils";
import {
  HTMLAttributes,
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";

type DropdownProps = {
  onToggleState: (newState: string) => void;
  isHidden: boolean;
  states: string[];
  showCircle?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Dropdown({
  onToggleState,
  isHidden,
  states,
  showCircle = false,
  className,
  ...rest
}: DropdownProps) {
  const [activeState, setActiveState] = useState(states[0]);

  const handleStateChange: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      const newState = e.currentTarget.dataset.state as string;
      setActiveState(newState);
    },
    []
  );

  useEffect(() => onToggleState(activeState), [activeState, onToggleState]);

  if (isHidden) return null;

  return (
    <div
      className={cn(
        "bg-white absolute -left-[1px] right-[1px] top-2 flex flex-col rounded-[5px] border border-gray-200 shadow-dropdown",
        {
          hidden: isHidden,
        },
        className
      )}
      {...rest}
    >
      {states.map((state, i) => (
        <Dropdown.Item
          key={`${state}-${i}`}
          state={state}
          onHandleStateChange={handleStateChange}
          activeState={activeState}
          showCircle={showCircle}
        />
      ))}
    </div>
  );
}

Dropdown.Item = memo(function DropdownItem({
  state,
  onHandleStateChange,
  showCircle,
  activeState,
}: Pick<DropdownProps, "showCircle"> & {
  onHandleStateChange: MouseEventHandler<HTMLButtonElement>;
  state: string;
  activeState: string;
}) {
  const isActive = activeState === state;

  return (
    <button
      className={cn(
        "w-full text-[10px] p-[6px] flex gap-2 items-center justify-center text-slate-500 [&:not(:last-child)]:border-slate-600 [&:not(:last-child)]:border-b",
        {
          "bg-slate-300 cursor-not-allowed": isActive,
        }
      )}
      onClick={onHandleStateChange}
      data-state={state.toLowerCase()}
      disabled={isActive}
    >
      {showCircle && (
        <span
          className={cn("bg-green rounded-full w-2 h-2", {
            "bg-red-200": state === "offline",
          })}
        />
      )}
      <span className={cn("capitalize")}>{state}</span>
    </button>
  );
});

export default memo(Dropdown);
