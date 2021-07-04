import React, { FC, memo } from "react";
import { Checkbox, Grid } from "@material-ui/core";

import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";

interface FormRegistrationPropsInterface {}

const FormRegistration: FC<FormRegistrationPropsInterface> = (props) => {
  return (
    <div>
      <Grid>
        <Grid>
          <Input label="Имя" />
        </Grid>

        <Grid>
          <Input label="Фамилия" />
        </Grid>

        <Grid>
          <Input label="Логин" />
        </Grid>

        <Grid>
          <Input label="E-mail" />
        </Grid>

        <Grid>
          <Grid>
            <Checkbox />
          </Grid>

          <Grid>
            <DatePicker value="" onChange={() => undefined} />
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <Input label="Пароль" />
          </Grid>

          <Grid>
            <Input label="Повторите пароль" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(FormRegistration);
