import * as yup from "yup";

// Схема для Реєстрації
export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Ім'я є обов'язковим")
    .min(2, "Ім'я має бути не коротше 2 символів"),
  email: yup
    .string()
    .required("Email є обов'язковим")
    .email("Введіть коректну email-адресу"),
  password: yup
    .string()
    .required("Пароль є обов'язковим")
    .min(6, "Пароль має містити щонайменше 6 символів"),
});

// Схема для LogIn
export const logInSchema = yup.object({
  email: yup
    .string()
    .required("Email є обов'язковим")
    .email("Введіть коректну email-адресу"),
  password: yup
    .string()
    .required("Пароль є обов'язковим"),
});

// Типи TypeScript на основі схем
export type RegisterFormData = yup.InferType<typeof registerSchema>;
export type LogInFormData = yup.InferType<typeof logInSchema>;