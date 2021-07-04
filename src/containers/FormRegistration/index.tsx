import React, { FC, memo, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import Button, { ButtonSize, ButtonType } from "@/components/Button";

import { RegistrationSchema } from "@/validations/registration";
import Checkbox from "@/components/Checkbox";

interface FormRegistrationFieldsInterface {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  hasPhone: boolean;
  birthdate: Date;
  phone: string;
  password: string;
  confirmPassword: string;
}

const FormRegistration: FC = () => {
  const {
    register,
    getValues,
    control,
    reset,
    handleSubmit,
    formState,
    watch,
    unregister
  } = useForm<FormRegistrationFieldsInterface>({
    resolver: yupResolver(RegistrationSchema)
  });

  const onSubmit = (data: FormRegistrationFieldsInterface) => {
    console.log("success -> ", data);
  };

  const onReset = () => {
    reset();
  };

  const hasPhone = watch("hasPhone");

  useEffect(() => {
    if (hasPhone) {
      return undefined;
    }
    unregister("phone");
  }, [hasPhone]);

  return (
    <form onReset={onReset} onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item sm>
            <Input
              {...register("firstName")}
              label="Имя"
              error={!!formState.errors.firstName?.message}
              helperText={formState.errors.firstName?.message}
            />
          </Grid>

          <Grid item sm>
            <Input
              {...register("lastName")}
              label="Фамилия"
              error={!!formState.errors.lastName?.message}
              helperText={formState.errors.lastName?.message}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Input
            {...register("login")}
            label="Логин"
            error={!!formState.errors.login?.message}
            helperText={formState.errors.login?.message}
          />
        </Grid>

        <Grid item>
          <Input
            {...register("email")}
            label="E-mail"
            error={!!formState.errors.email?.message}
            helperText={formState.errors.email?.message}
          />
        </Grid>

        <Grid container item spacing={2} alignItems="center">
          <Grid item sm>
            <Controller
              name="hasPhone"
              control={control}
              render={({ field }) => (
                <Checkbox
                  label="Есть телефон?"
                  checked={!!field.value}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item sm>
            <Controller
              name="birthdate"
              control={control}
              render={({ field }) => {
                return (
                  <DatePicker
                    value={getValues("birthdate") ?? null}
                    onChange={field.onChange}
                    label="Дата рождения"
                    error={!!formState.errors.birthdate?.message}
                    helperText={formState.errors.birthdate?.message}
                  />
                );
              }}
            />
          </Grid>
        </Grid>

        {hasPhone && (
          <Grid item>
            <Input
              {...register("phone")}
              label="Номер телефона"
              type="tel"
              error={!!formState.errors.phone?.message}
              helperText={formState.errors.phone?.message}
            />
          </Grid>
        )}

        <Grid container item spacing={2}>
          <Grid item sm>
            <Input
              {...register("password")}
              label="Пароль"
              type="password"
              error={!!formState.errors.password?.message}
              helperText={formState.errors.password?.message}
            />
          </Grid>

          <Grid item sm>
            <Input
              {...register("confirmPassword")}
              label="Повторите пароль"
              type="password"
              error={!!formState.errors.confirmPassword?.message}
              helperText={formState.errors.confirmPassword?.message}
            />
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
