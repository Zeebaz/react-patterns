import { ButtonGroup, Button, LinearProgress, Box, useMediaQuery } from "@mui/material";

import { usePlayer } from "../../hooks";
import { PauseOutlined, PlayArrowOutlined } from "@mui/icons-material";
import { Action, StateReducer } from "../../context";

export const AdminPlayer = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  const isXSmall = useMediaQuery("(max-width: 500px)");
  const { isPlaying, play, pause } = usePlayer({
    reducer: (state, action: Action) => {
      const stateUpdated = StateReducer(state, action);

      if (!isAdmin && action.type === "[Player] - Play") {
        return { ...stateUpdated, isPlaying: false };
      }

      return stateUpdated;
    },
  });

  if (!isAdmin && isPlaying) {    
    pause();
  }

  return (
    <Box
      border={1}
      padding={2}
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"500px"}
      minWidth={isXSmall ? "none": "350px"}
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
