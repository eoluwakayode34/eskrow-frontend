import * as yup from "yup";
import yupPassword from "yup-password";
yupPassword(yup);

export const userSignupValidationSchema = yup.object({
  firstName: yup.string().label("First name").required("Enter first name"),
  lastName: yup.string().label("First name").required("Enter last name"),
  email: yup
    .string()
    .email("Invalid email address")
    .label("Email")
    .required("Enter a valid email address"),
  phoneNumber: yup
    .number()
    .label("Phone number")
    .required("Enter your phone number"),
  password: yup.string().label("Password").required().password(),
});
export const userSignupOtpValidationSchema = yup.object({
  otp: yup.string().label("OTP").min(5).max(5).required("Enter 6 digits OTP"),
});
export const userLoginValidationSchema = yup.object({
  phoneNumber: yup
    .number()
    .label("Phone number")
    .required("Enter your phone number"),
  password: yup.string().label("Password").required().password(),
});
export const userForgotPasswordValidationSchema = yup.object({
  phoneNumber: yup
    .number()
    .label("Phone number")
    .required("Enter your phone number"),
});

export const bvnValidationSchema = yup.object({
  bvn: yup
    .string()
    .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
    .required("BVN is required"),
});

export const fundWalletValidationSchema = yup.object({
  amount: yup
    .number()
    .min(200, "N200 is the minimum money you can send")
    .required("Amount is required"),
});

export const userNewPasswordSchema = yup.object({
  otp: yup.string().label("OTP").min(5).max(5).required("Enter 6 digits OTP"),
  password: yup.string().label("Password").required().password(),
});
export const merchantSearchSchema = yup.object({
  searchText: yup.string().label("Merchant name / ID").required()
});
