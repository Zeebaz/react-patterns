import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { useContext } from "react";
import { AppContext, contextProps } from "../context";
import { useNavigate } from "react-router-dom";

import {
  SolarPowerOutlined,
  ExtensionOutlined,
  SettingsRemoteOutlined,
  TrackChangesOutlined,
  UnfoldMoreDoubleOutlined,
  IosShareOutlined,
} from "@mui/icons-material";

interface IPatterns {
  name: string;
  path: string;
  Icon: JSX.Element;
}

const patterns: IPatterns[] = [
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

export const TopMenu: React.FC = () => {
  const { isOpenMenu, setIsOpenMenu }: contextProps = useContext(AppContext);
  const navigate = useNavigate();

  const list = () => (
    <Box
      role="presentation"
      onClick={() => {
        setIsOpenMenu(false);
      }}
      onKeyDown={() => {
        setIsOpenMenu(false);
      }}

      display={ isOpenMenu ? "block" : "none"}      
    >
      <List>
        {patterns.map((pattern) => (
          <ListItem
            key={pattern.name}
            disablePadding
            onClick={() => navigate(`/${pattern.path}`)}
          >
            <ListItemButton>
              <ListItemIcon>{pattern.Icon}</ListItemIcon>
              <ListItemText primary={pattern.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"top"}
      open={isOpenMenu}
      onClose={function (): void {
        setIsOpenMenu(false);
      }}
      onOpen={function (): void {
        setIsOpenMenu(true);
      }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        {list()}
      </Box>
    </SwipeableDrawer>
  );
};
