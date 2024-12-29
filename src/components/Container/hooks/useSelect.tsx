import { useContext } from "react";
import { SelectContext } from "../contexts/SelectContext";

export const useSelect = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelect precisa ser utilizado em conjunto do SelectContext."
    );
  }

  const { selectedId, setSelectedId } = useContext(SelectContext);

  const handleSelect = (name: string) => {
    setSelectedId(name);
  };

  return { selectedId, handleSelect };
};
