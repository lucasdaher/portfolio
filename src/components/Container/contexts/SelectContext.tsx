import { createContext, useState, ReactNode } from "react";

type SelectContextType = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

const defaultContextValue: SelectContextType = {
  selectedId: "experiencias",
  setSelectedId: () => {},
};

export const SelectContext =
  createContext<SelectContextType>(defaultContextValue);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [selectedId, setSelectedId] = useState<string>("experiencias");

  return (
    <SelectContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectContext.Provider>
  );
};
