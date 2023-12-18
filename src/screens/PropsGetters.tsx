import { Typography } from "@mui/material";
import { AdminPlayer } from "../components";
import { MainLayout } from "../layouts";

export const PropsGetters = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Props Getters
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        xxxxx
      </Typography>

      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Desventajas
      </Typography>
      <ul>
        <li>
          <Typography component="p">Re-renderizados</Typography>
        </li>
      </ul>
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Ventajas
      </Typography>
      <ul>
        <li>
          <Typography component="p">Reusabilidad</Typography>
        </li>
      </ul>
      <AdminPlayer />
    </MainLayout>
  );
};
