import { createContext } from "react";

export interface contextProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
  // setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext({} as contextProps);
