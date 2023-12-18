import { Typography } from "@mui/material";
import { MainLayout } from "../layouts";
import BasicTable from "../components/PropsGetters/UserTable";
import CustomTable from "../components/PropsGetters/UserTableCustom";

export const PropsGetters = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Props Getters
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Funciona para ampliar o agregar logica extra a un componente.
        Sin necesidad de alterar la logica existente.
      </Typography>

      
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Tabla basica
      </Typography>
      
      <BasicTable />
      
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Con Props Getters
      </Typography>
      
      <CustomTable />
    </MainLayout>
  );
};
