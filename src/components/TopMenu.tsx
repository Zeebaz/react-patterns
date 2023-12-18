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
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

export const TopMenu: React.FC = () => {
  const { isOpenMenu, setIsOpenMenu, patterns, setindexPattern } =
    useContext(AppContext);
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
    >
      <List>
        {patterns.map((pattern, index) => (
          <ListItem
            key={pattern.name}
            disablePadding
            // onClick={() => setindexPattern(index)}
            onClick={() => navigate("/compound-component")}
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