import React, { FC, memo } from "react";

import { TextField, TextFieldProps } from "@material-ui/core";

type InputPropsInterface = TextFieldProps;

const Input: FC<InputPropsInterface> = (props) => {
  return <TextField variant="outlined" fullWidth {...props} />;
};

export default memo(Input);
