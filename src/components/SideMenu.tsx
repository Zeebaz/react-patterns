import { Box, Grid, Typography, Stack, ListItemButton } from "@mui/material";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";

export const SideMenu = () => {
  return (
    <Box>
      <Box px={2}>
        <Grid
          container
          py={3}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography variant="h6" color={"#fff"}>
            React patterns
          </Typography>
          <ViewComfyOutlinedIcon sx={{ color: "#fff" }} />

        </Grid>
      </Box>
      <Stack>
        <Box sx={{ color: "#EAF2F8" }} borderRight={2}>
          <ListItemButton>Hola</ListItemButton>
        </Box>

        <Box sx={{ color: "#909090" }} py={1}>
          <ListItemButton>Hola</ListItemButton>
        </Box>
        <ListItemButton sx={{ color: "#909090" }}>
          <Box  py={1}>
            Introduction
          </Box>
        </ListItemButton>
      </Stack>
    </Box>
  );
};
