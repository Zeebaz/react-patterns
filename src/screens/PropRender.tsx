import { Box, Typography } from "@mui/material";

import { MainLayout } from "../layouts";
import { Flag, RenderFlag } from "../components";

export const PropRender = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Prop render
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Funcion que recibe un componente y retorna un nuevo componente
        enriquesido con nueva logica
      </Typography>
      <Box
        mt={3}
        display={"flex"}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <Flag />
        <RenderFlag
          render={({ features }) => (
            <>
              <Typography
                component={"h3"}
                marginTop={2}
                fontWeight={"bold"}
                fontSize={20}
              >
                Flag A and B
              </Typography>
              <Typography component="p">
                Flag {features.infoA && features.infoB ? "Both" : "false"}
              </Typography>              
            </>
          )}
        />
      </Box>
    </MainLayout>
  );
};
