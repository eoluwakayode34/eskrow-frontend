import { requestInstance } from "@/config/requestInstance";

export const merchantMutations = {
  async signup(formData: {
    first_name: string,
    last_name: string,
    business_name: string,
    email: string,
    password: string,
    phone_number: string
  }
  ) {
    const response = await requestInstance.post("/auth/merchants/sign-up", formData);
    return response.data;
  },
  async emailVerify(formData: {
    email: string,
    code: string
  
  }
  ) {
    const response = await requestInstance.post("/auth/merchants/email-verification/verify", formData);
    return response.data;
  },
  async login(formData: {
    email: string,
    password: string
  }
  ) {
    const response = await requestInstance.post("/auth/merchants/login", formData);
    return response.data;
  },
  async emailResend(formData: {
    email: string,  
  }
  ) {
    const response = await requestInstance.post("/auth/merchants/email-verification/resend", formData);
    return response.data;
  },

}