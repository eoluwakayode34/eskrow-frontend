import { requestInstance } from "@/config/requestInstance";

export const userMutations = {
  async signup(formData: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
  }) {
    const response = await requestInstance.post(
      "/auth/users/sign-up",
      formData
    );
    return response.data;
  },
  async phoneNumberVerify(formData: { phone_number: string; code: string }) {
    const response = await requestInstance.post(
      "/auth/users/phone-verification/verify",
      formData
    );
    return response.data;
  },
  async login(formData: { phone_number: string; password: string }) {
    const response = await requestInstance.post("/auth/users/login", formData);
    return response.data;
  },
  async phoneNumberResend(formData: { phone_number: string }) {
    const response = await requestInstance.post(
      "/auth/users/phone-verification/resend",
      formData
    );
    return response.data;
  },
  async forgotPassword(formData: { phone_number: string }) {
    const response = await requestInstance.post(
      "/auth/users/password-reset/req",
      formData
    );
    return response.data;
  },
  async forgotPasswordResend(formData: { phone_number: string }) {
    const response = await requestInstance.post(
      "/auth/users/password-reset/req/resend",
      formData
    );
    return response.data;
  },
  async newPassword(formData: {
    phone_number: string;
    code: string;
    password: string;
  }) {
    const response = await requestInstance.post(
      "/auth/users/password-reset",
      formData
    );
    return response.data;
  },
};
