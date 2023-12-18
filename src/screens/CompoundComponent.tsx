import { Typography, Box } from "@mui/material";
import { ProductCard } from "../components/ComponentCompound/ProductCard";
import { ProductImage } from "../components/ComponentCompound/ProductImage";
import { ProductTitle } from "../components/ComponentCompound/ProductTitle";
import { blueGrey } from "@mui/material/colors";
import { ProductButtons } from "../components/ComponentCompound/ProductButtons";
import ProductCardCompound from "../components/ComponentCompound";
import { MainLayout } from "../layouts";

const product = {
  id: "1",
  title: "Coffe Mug - Card1",
  img: "https://source.unsplash.com/300x300",
};

export const CompoundComponent = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Compound Component
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Permite evitar el prop drilling effect en nuestros componentes, ya que
        no pasaremos las props en muchas capas de componentes, e incluso en
        algunos que no necesitan los datos para funcionar, estos siendo
        utilizados solo como pasarela de informacion hasta el nodo interno que
        necesite los datos.
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Gracias a la API Context, que permite la transmision de un estado a
        travez de multiples componentes, estos solo siendo envueltos en un
        Provider. Permitiendo que los componentes hijos puedan consumir el
        estado usando un consumer o el hook useContext, ademas de poder cambiar
        el estado.
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Este patros de diseño solo deber ser usado cuando varios componentes
        trabajan en conjunto, con un estado y logica en comun
      </Typography>
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Desventajas
      </Typography>
      <ul>
        <li>
          <Typography component="p">
            Re-renderizados innecesarios y costosos. Ya que al actualizar un
            componente raiz este re-renderizara todo el arbol que compone ese
            componente, generando altos costo, especialmente si su arbol de
            compnentes es grande.
          </Typography>
        </li>
        <li>
          <Typography component="p">Aumento de la complejidad.</Typography>
        </li>
        <li>
          <Typography component="p">
            Acoplamiento fuerte. Por lo que solo debe ser considerado para casos
            que amerite su uso.
          </Typography>
        </li>
        <li>
          <Typography component="p">Dificulta de escalado.</Typography>
        </li>
      </ul>
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Ventajas
      </Typography>
      <ul>
        <li>
          <Typography component="p">
            Reusabilidad sin necesidad de duplicar la funcionalidad de nuestros
            componentes
          </Typography>
        </li>
        <li>
          <Typography component="p">
            Disminución de Prop drilling. 
          </Typography>
        </li>
        <li>
          <Typography component="p">
            Flexibilidad de manejo del estado.
          </Typography>
        </li>
      </ul>
      <Box
        bgcolor={blueGrey[800]}
        color={"white"}
        // height={"100vh"}
        padding={3}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"space-around"}
        gap={3}
        borderRadius={8}
        flexWrap={"wrap"}

      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCardCompound product={product}>
          <ProductCardCompound.Buttons />
          <ProductCardCompound.Image />
          <ProductCardCompound.Title />
        </ProductCardCompound>
        <ProductCardCompound product={product}>
          <ProductCardCompound.Buttons />
          <ProductCardCompound.Image />
          <ProductCardCompound.Title />
        </ProductCardCompound>
        <ProductCardCompound product={product}>
          <ProductCardCompound.Buttons />
          <ProductCardCompound.Image />
          <ProductCardCompound.Title />
        </ProductCardCompound>
      </Box>
    </MainLayout>
  );
};
