import React, { FC, memo } from "react";
import DateFnsUtils from "@date-io/date-fns";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { KeyboardDatePickerProps } from "@material-ui/pickers/DatePicker/DatePicker";

const DatePicker: FC<KeyboardDatePickerProps> = ({ ...otherProps }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        format="dd.MM.yyyy"
        disableFuture
        {...otherProps}
      />
    </MuiPickersUtilsProvider>
  );
};

export default memo(DatePicker);
