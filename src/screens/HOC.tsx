import { Box, Typography } from "@mui/material";
import { Simple, SimpleWithMount, Toggle, WithMount } from "../components";
import { MainLayout } from "../layouts";
import { useState } from "react";

export const HOC = () => {
  const [isCheck, setIsCheck] = useState(false);
  const EnhancedSimpleWithMount = WithMount(SimpleWithMount);

  const onToggle = () => {
    setIsCheck(!isCheck);
  };

  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Hight Order Component Pattern
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Funcion que recibe un componente y retorna un nuevo componente
        enriquesido con nueva logica
      </Typography>

      <Box
        alignItems={"center"}
        display={"flex"}
        gap={2}
        flexDirection={"column"}
        textAlign={"center"}
      >
        <Box
          display={"flex"} justifyContent={"center"} alignItems={"baseline"}>
          <Typography component="p" marginTop={2} lineHeight={1.7}>
            Controles
          </Typography>
          <Toggle value={isCheck} handleChange={onToggle} />
        </Box>

        <Box display={'grid'} sx={{placeItems: 'center'}}> 
          <Typography
            variant="h2"
            component="h2"
            marginTop={3}
            fontWeight={"bold"}
          >
            Componente simple
          </Typography>
          <Typography component="p" marginTop={2} lineHeight={1.7}>
            Sin funcionalidad adicional
          </Typography>

          <Simple />
        </Box>

        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <Typography
            variant="h2"
            component="h2"
            marginTop={3}
            fontWeight={"bold"}
          >
            Componente con funcionalidad nativa
          </Typography>
          <Typography component="p" marginTop={2} lineHeight={1.7}>
            Componente con la funcionalidad de forma nativa.
          </Typography>
          <SimpleWithMount isLoggedIn={isCheck} />
        </Box>

        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <Typography
            variant="h2"
            component="h2"
            marginTop={3}
            fontWeight={"bold"}
          >
            Componente simple
          </Typography>
          <Typography component="p" marginTop={2} lineHeight={1.7}>
            Componente con la funcionalidad agregada por el HOC
          </Typography>
          <EnhancedSimpleWithMount isLoggedIn={isCheck} />
        </Box>
      </Box>
    </MainLayout>
  );
};
