import * as yup from "yup";

export const RegistrationSchema = yup.object({
  firstName: yup.string().required("Обязательное поле"),
  lastName: yup.string().required("Обязательное поле"),
  login: yup.string().required("Обязательное поле"),
  email: yup.string().email("Неверный формат").required("Обязательное поле"),
  birthdate: yup
    .date()
    .typeError("Неверный формат даты")
    .required("Обязательное поле"),
  phone: yup.string().when("hasPhone", {
    is: (value: boolean | undefined) => !Boolean(value),
    otherwise: yup.string().required("Введите номер телефона")
  }),
  password: yup.string().required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают!")
});
