import { Box, TextField, Typography } from "@mui/material";
import { Toggle } from "../components";
import { useState } from "react";
import { MainLayout } from "../layouts";

export const ControlProps = () => {
  const [isCheck, setIsCheck] = useState(false);
  const onToggle = () => {
    // setIsCheck(!isCheck);
  };

  const handleChangeImput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (event!.target.value === "true") {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  return (
    <MainLayout>
      <Typography variant="h1" component="h1">
        Control Props
      </Typography>
      <Typography component="p">Extension de controles de imputs</Typography>
      <Box mt={3} display={"flex"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        <Toggle value={isCheck} handleChange={onToggle} />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={handleChangeImput}
          helperText="Write true to change the toggle"
        />
      </Box>
    </MainLayout>
  );
};
