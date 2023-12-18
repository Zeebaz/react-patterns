import { Box, Typography } from "@mui/material";

export const Simple = () => {
  return (
    <Box
      color="#EAF2F8"
      bgcolor={"#00A6E3"}
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
