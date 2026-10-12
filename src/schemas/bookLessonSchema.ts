import * as yup from "yup";

export const bookLessonSchema = yup.object({
  reason: yup
    .string()
    .required("Please select a reason"),
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\+?[0-9]{10,15}$/,
      "Phone number must contain only digits and be between 10-15 characters"
    ),
}).required();

export type BookLessonFormData = yup.InferType<typeof bookLessonSchema>;