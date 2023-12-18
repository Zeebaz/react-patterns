import { Box } from "@mui/material";
import { type PropsWithChildren } from "react";
import { NavBar, TopMenu } from "../components";



export const MainLayout: React.FC<PropsWithChildren> = ({ children}) => {
  return (
    <Box>
      <NavBar />
      <TopMenu  />
      <Box width={"85%"} maxWidth={"1440px"} mx={"auto"} my={5}>
        {children}
      </Box>
    </Box>
  );
};
