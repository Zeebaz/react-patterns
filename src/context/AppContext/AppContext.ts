import { createContext } from "react";

interface contextProps {
  setindexPattern: (index: number) => void;
  indexPattern: number;
  patterns: {
    name: string;
    Component: JSX.Element;
    Icon: JSX.Element;
  }[];
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}

export const AppContext = createContext({} as contextProps);
