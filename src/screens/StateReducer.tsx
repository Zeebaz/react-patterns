import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AdminPlayer, Player } from "../components";
// import { CheckBox } from "@mui/icons-material";
import { useState } from "react";

export const StateReducer = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const isSmall = useMediaQuery("(max-width: 900px)");
  const isXSmall = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <Typography variant="h1" component="h1">
        Props Getters
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Consiste en la extension de las acciones de acciones de un Reducer,
        permitiendo agregar nueva logica del manejo del componente.
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={isXSmall ? 'stretch' : 'center'}        
        marginTop={3}
        flexDirection={isSmall ? "column" : "row"}
      >
        <Box>
          <Typography
            variant="h2"
            component="h2"
            marginY={3}
            fontWeight={"bold"}
          >
            "Normal"
          </Typography>

          <Player />
        </Box>
        <Box>
          <Typography
            variant="h2"
            component="h2"
            marginTop={3}
            fontWeight={"bold"}
          >
            Controles especiales
          </Typography>
          <FormControlLabel
            control={<Checkbox />}
            label="Es administrador?"
            value={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          <AdminPlayer isAdmin={isAdmin} />
        </Box>
      </Box>
    </>
  );
};
