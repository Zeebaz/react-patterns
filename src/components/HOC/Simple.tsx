import { Box, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const Simple = ({ isLoggedIn = false }: { isLoggedIn?: boolean }) => {
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
      <Typography component="p" marginBlock={3}>I'm a simple component - Without Mount func</Typography>
    </Box>
  );
};
