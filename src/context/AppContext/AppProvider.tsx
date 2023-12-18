import { FC, PropsWithChildren, useState } from "react";
import { AppContext } from "./AppContext";

import {
  CompoundComponent,
  ControlProps,
  ExtensibleStyles,
  HOC,
  StateReducer,
} from "../../screens";
import {
  SolarPowerOutlined,
  BorderStyleOutlined,
  ExtensionOutlined,
  SettingsRemoteOutlined,
  TrackChangesOutlined,
  UnfoldMoreDoubleOutlined,
} from "@mui/icons-material";

const patterns = [
  {
    name: "Control Props",
    Component: <ControlProps />,
    Icon: <SettingsRemoteOutlined />,
  },
  {
    name: "State Reducer",
    Component: <StateReducer />,
    Icon: <UnfoldMoreDoubleOutlined />,
  },
  {
    name: "Compound Component",
    Component: <CompoundComponent />,
    Icon: <ExtensionOutlined />,
  },
  {
    name: "Props Getters",
    Component: <StateReducer />,
    Icon: <TrackChangesOutlined />,
  },
  {
    name: "Hight Order Component - HOC",
    Component: <HOC />,
    Icon: <SolarPowerOutlined />,
  },
  {
    name: "Extensible Styles",
    Component: <ExtensibleStyles />,
    Icon: <BorderStyleOutlined />,
  },
];

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [indexPattern, setindexPattern] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        indexPattern,
        setindexPattern,
        patterns,
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
