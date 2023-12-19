import { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
