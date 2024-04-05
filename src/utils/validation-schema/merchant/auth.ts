import * as yup from "yup";
import yupPassword from "yup-password";
yupPassword(yup);

export const merchantUserLoginValidationSchema = yup.object({
    email: yup.string().email("Invalid email address").label("Email").required(),
    password: yup.string().label("Password").required().password(),
  });
export const merchantForgotPasswordnValidationSchema = yup.object({
    email: yup.string().email("Invalid email address").label("Email").required(),
  });

