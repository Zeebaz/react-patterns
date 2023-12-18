import { Typography } from "@mui/material";
import { MainLayout } from "../layouts";

export const ExtensibleStyles = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Extensible Styles Pattern
      </Typography>
      <Typography component="p" marginTop={2} lineHeight={1.7}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid
        rerum at voluptatum voluptas atque aperiam, dolores ab voluptates,
        laudantium ut ad! Hic quisquam illo perspiciatis quae exercitationem,
        fuga optio accusantium odit eius doloribus, quibusdam non? Quasi ea odit
        excepturi vero ipsam inventore voluptas ex quia tenetur iure. Deleniti
      </Typography>
    </MainLayout>
  );
};
