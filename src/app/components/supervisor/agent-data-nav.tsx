"use client";

import { cn } from "@/lib/utils";
import {
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const Nav = {
  Closed: "Closed cases",
  Active: "Active cases",
  Collaborations: "Collaborations",
  Escalations: "Escalations",
};

type AgentDataNavProps = {
  onSetSliceCount: (count: number) => void;
};

function AgentDataNav({ onSetSliceCount }: AgentDataNavProps) {
  const [activeNav, setActiveNav] = useState(Nav.Closed);
  const navItems = useMemo(() => Object.values(Nav), []);

  const handleSetActiveNav: MouseEventHandler<HTMLParagraphElement> =
    useCallback(
      (e) => {
        e.preventDefault();
        const newActive = e.currentTarget.dataset.label as string;

        if (activeNav === newActive) return;
        setActiveNav(newActive);
      },
      [activeNav]
    );

  useEffect(() => {
    onSetSliceCount(activeNav === "Active cases" ? 2 : 0);
  }, [activeNav, onSetSliceCount]);

  return (
    <div className="flex max-sm:flex-col sm:items-center sm:border-b sm:border-primary sm:border-opacity-10 py-[10px] gap-6">
      {navItems.map((label) => (
        <AgentDataNavItem
          key={label}
          label={label}
          onSetActive={handleSetActiveNav}
          isActive={label === activeNav}
        />
      ))}
    </div>
  );
}

type Props = {
  label: string;
  onSetActive: MouseEventHandler<HTMLParagraphElement>;
  isActive: boolean;
};

function AgentDataNavItem({ label, onSetActive, isActive }: Props) {
  return (
    <p
      onClick={onSetActive}
      data-label={label}
      className={cn(
        "cursor-pointer min-w-fit text-primary text-opacity-50 font-inter font-semibold leading-6 tracking-[0.15px] capitalize relative  after:h-[1px] after:-bottom-3 after:left-0 after:w-full after:bg-yellow-100",
        {
          "text-opacity-80 after:absolute": isActive,
        }
      )}
    >
      {label}
    </p>
  );
}

export default memo(AgentDataNav);