import * as yup from "yup";
import yupPassword from "yup-password";
yupPassword(yup);

export const userLoginValidationSchema = yup.object({
    phoneNumber: yup.number().label("Phone number").required("Enter your phone number"),
    passwo: yup.string().label("Password").required().password(),
  });
export const userForgotPasswordValidationSchema = yup.object({
    phoneNumber: yup.number().label("Phone number").required("Enter your phone number"),
  });
