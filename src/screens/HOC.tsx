import { Typography } from "@mui/material";
import { Simple, SimpleWithMount, WithMount } from "../components";

export const HOC = () => {
  const EnhancedSimpleWithMount = WithMount(SimpleWithMount);

  return (
    <>
      <Typography variant="h1" component="h1">
        Hight Order Component Pattern
      </Typography>
      <Typography component="p">
        Funcion que recibe un componente y retorna un nuevo componente
        enriquesido con nueva logica
      </Typography>
      <SimpleWithMount />
      <EnhancedSimpleWithMount />
      <Simple />
    </>
  );
};
