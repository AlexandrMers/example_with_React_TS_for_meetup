import React, { FC, memo } from "react";
import {
  FormControlLabel,
  Checkbox as CheckboxMaterial
} from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox/Checkbox";

interface CheckboxPropsInterface extends CheckboxProps {
  label: string;
}

const Checkbox: FC<CheckboxPropsInterface> = (props) => {
  return (
    <FormControlLabel
      control={<CheckboxMaterial color="primary" {...props} />}
      label={props.label}
    />
  );
};

export default memo(Checkbox);
