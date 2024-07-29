import * as yup from "yup";
import yupPassword from "yup-password";
yupPassword(yup);

export const merchantLoginValidationSchema = yup.object({
    email: yup.string().email("Invalid email address").label("Email").required(),
    password: yup.string().label("Password").required().password(),
  });
export const merchantForgotPasswordnValidationSchema = yup.object({
    email: yup.string().email("Invalid email address").label("Email").required(),
  });

  export const merchantSignupValidationSchema = yup.object({
    firstName: yup.string().label("First name").required("Enter first name"),
    lastName: yup.string().label("First name").required("Enter last name"),
    businessName: yup.string().label("First name").required("Enter last name"),
    email: yup.string().email("Invalid email address").label("Email").required("Enter a valid email address"),
    phoneNumber: yup.number().label("Phone number").required("Enter your phone number"),
      password: yup.string().label("Password").required().password(),
    });

  export const merchantSignupOtpValidationSchema = yup.object({
    otp: yup.string().label("OTP").min(5).max(5).required("Enter 6 digits OTP"),
    });

