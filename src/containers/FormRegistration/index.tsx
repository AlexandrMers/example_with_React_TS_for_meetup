import React, { FC, memo } from "react";
import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import Button, { ButtonSize, ButtonType } from "@/components/Button";

interface FormRegistrationPropsInterface {}

const FormRegistration: FC<FormRegistrationPropsInterface> = (props) => {
  return (
    <form>
      <Grid container direction="column" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item sm>
            <Input label="Имя" />
          </Grid>

          <Grid item sm>
            <Input label="Фамилия" />
          </Grid>
        </Grid>

        <Grid item>
          <Input label="Логин" />
        </Grid>

        <Grid item>
          <Input label="E-mail" />
        </Grid>

        <Grid container item spacing={2} alignItems="center">
          <Grid item sm>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Есть телефон?"
            />
          </Grid>

          <Grid item sm>
            <DatePicker
              value=""
              onChange={() => undefined}
              label="Дата рождения"
            />
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item sm>
            <Input label="Пароль" />
          </Grid>

          <Grid item sm>
            <Input label="Повторите пароль" />
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item sm>
            <Button
              typeButton={ButtonType.PRIMARY}
              sizeButton={ButtonSize.LARGE}
            >
              Регистрация
            </Button>
          </Grid>
          <Grid container item sm justify="flex-end">
            <Grid item>
              <Button
                typeButton={ButtonType.SECONDARY}
                sizeButton={ButtonSize.LARGE}
                type="reset"
              >
                Сбросить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default memo(FormRegistration);
