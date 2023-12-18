import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useState } from "react";

interface Props {
  value?: boolean;
  handleChange?: () => void;
}

export const Toggle: React.FC<Props> = ({ value, handleChange }) => {
  const [isCheck, setIsCheck] = useState(true);

  const isController = value !== undefined && handleChange !== undefined;

  const handleChangeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isController) {
      handleChange();
    }
    setIsCheck(event.target.checked);
  };
  const finalValue = isController ? value : isCheck;

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={finalValue}
            onChange={handleChangeToggle}
            color="success"
          />
        }
        label="Field"
      />
    </FormGroup>
  );
};
