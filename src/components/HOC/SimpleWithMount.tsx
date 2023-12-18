import { Box, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useEffect } from "react";

export const SimpleWithMount = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  useEffect(() => {
    console.log(`Tu estas ${isLoggedIn ? "logueado" : "no logueado"}`);
  }, [isLoggedIn]);

  return (
    <Box
      color="#EAF2F8"
      bgcolor={isLoggedIn ? green[500] : red[500]}
      padding={2}
      maxWidth={"300px"}
      borderRadius={2}
      border={1}
      marginTop={3}
      textAlign={"center"}
    >
      <Typography component="p" marginBlock={3}>I'm a simple component - With Mount func</Typography>
    </Box> 
  );
};
