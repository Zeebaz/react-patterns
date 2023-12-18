import { ButtonGroup, Button, LinearProgress, Box, useMediaQuery } from "@mui/material";

import { usePlayer } from "../../hooks";
import { PauseOutlined, PlayArrowOutlined } from "@mui/icons-material";

export const Player = () => {
  const isXSmall = useMediaQuery("(max-width: 500px)");
  const { isPlaying, play, pause } = usePlayer();

  return (
    <Box
      border={1}
      padding={2}
      display={"flex"}
      flexDirection={"column"}
      minWidth={isXSmall ? "none": "350px"}
      maxWidth={"400px"}
    >
      <Box sx={{ width: "100%" }} marginBottom={2}>
        <LinearProgress
          value={100}
          variant={isPlaying ? "indeterminate" : "determinate"}
        />
      </Box>
      <ButtonGroup
        sx={{ width: "100%", justifyContent: "center" }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button onClick={() => play()}>
          <PlayArrowOutlined />
        </Button>
        <Button onClick={() => pause()}>
          <PauseOutlined />
        </Button>
      </ButtonGroup>
    </Box>
  );
};
