"use client";

import {
  PropsWithChildren,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";
import { createContext } from "react";

type NavbarContextType = {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
};

const NavbarContext = createContext({} as NavbarContextType);

function NavbarProvider({ children }: PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleIsCollapsed = useCallback(
    () => setIsCollapsed((prev) => !prev),
    []
  );

  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleIsCollapsed }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext() {
  const contextValue = useContext(NavbarContext);

  return contextValue;
}

export default memo(NavbarProvider);
