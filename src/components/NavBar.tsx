import { AppBar, Typography, IconButton, Toolbar, Box } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppContext } from "../context";
import { useContext } from "react";

export const NavBar = () => {
  const { setIsOpenMenu, isOpenMenu } = useContext(AppContext);

  return (
    <Box bgcolor={"primary.main"} color={"white"}>
      <Box maxWidth={"1440px"} mx={"auto"} width={"85%"}>
        <AppBar
          position="static"
          sx={{ bgcolor: "primary.main", color: "white" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              React patterns
            </Typography>
            <Box flex={1} />
            <IconButton
              aria-expanded={isOpenMenu ? "true" : "false"}   
              data-testid="menu-button"


              size="large"
              edge="start"
              color="inherit"                            
              onClick={() => {
                setIsOpenMenu(true);
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
