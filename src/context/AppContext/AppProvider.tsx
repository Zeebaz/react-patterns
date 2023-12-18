import { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "./AppContext";

import {
  SolarPowerOutlined,
  ExtensionOutlined,
  SettingsRemoteOutlined,
  TrackChangesOutlined,
  UnfoldMoreDoubleOutlined,
  IosShareOutlined,
} from "@mui/icons-material";

const patterns = [
  {
    name: "Control Props",
    path: "control-props",
    Icon: <SettingsRemoteOutlined />,
  },
  {
    name: "State Reducer",
    path: "state-reducer",
    Icon: <UnfoldMoreDoubleOutlined />,
  },
  {
    name: "Compound Component",
    path: "compound-component",
    Icon: <ExtensionOutlined />,
  },
  {
    name: "Props Getters",
    path: "props-getters",
    Icon: <TrackChangesOutlined />,
  },
  {
    name: "Hight Order Component - HOC",
    path: "hoc",
    Icon: <SolarPowerOutlined />,
  },
  {
    name: "Prop Render",
    path: "prop-render",
    Icon: <IosShareOutlined />,
  },
];

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        patterns,
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
