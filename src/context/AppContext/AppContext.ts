import { createContext } from "react";

interface contextProps {  
  patterns: {
    name: string;
    path: string;
    Icon: JSX.Element;
  }[];
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}

export const AppContext = createContext({} as contextProps);
