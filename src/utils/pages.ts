export const pages = {
  home: "/",
  signup: "/signup",
  userPassword: "/auth/user/password",
  merchantPassword: "/auth/merchant/password",
  bookAService: (type: "user" | "non-user") => `/book-a-service/${type}`,
  userDasboard: "/dashboard/user/home",
  merchantDasboard: "/dashboard/merchant/home",
  userLogin: "/auth/user/login",
  merchantLogin: "/auth/merchant/login",
  userSignup: "/auth/user/signup",
  proSignup: "/auth/pro/signup",
  proSignupSuccessful: "/auth/pro/signup/successful",
  userSignupOtpVerify: (phoneNumber: string) => `/auth/user/signup/${phoneNumber}`,
  userSignupDetails: (sessionId: string) => `/auth/user/signup/${sessionId}/user-details`,
  userSignupLocation: (sessionId: string) => `/auth/user/signup/${sessionId}/user-details/location`,
  userSignupVerifyPhone: (sessionId: string) => `/auth/user/signup/${sessionId}/user-details/verify-phone`,
  userSignupConnection: (sessionId: string) => `/auth/user/signup/${sessionId}/user-details/connections`,
  userSignupMoreDetails: (sessionId: string, isConnect: boolean) =>
    `/auth/user/signup/${sessionId}/user-details/more-details/${isConnect}`,
  userSignupBookAservice: (sessionId: string) => `/auth/user/signup/${sessionId}/user-details/book-a-service`,

  // MERCHANT USER
  merchantSignupOtpVerify: (email: string) => `/auth/merchant/signup/${email}`,

  proSignupProfile: (sessionId: string) => `/auth/pro/signup/${sessionId}/pro-details`,
  proSignupServiceDetails: (sessionId: string) => `/auth/pro/signup/${sessionId}/pro-details/service-details`,
  proSignupConnection: (sessionId: string) => `/auth/pro/signup/${sessionId}/pro-details/connections`,
  proSignupMoreDetails: (sessionId: string, isConnect: boolean) =>
    `/auth/pro/signup/${sessionId}/pro-details/more-details/${isConnect}`,
  proSignupHireApprentice: (sessionId: string) => `/auth/pro/signup/${sessionId}/pro-details/hire-apprentice`,
  proSignupAdditionalInfo: (sessionId: string) => `/auth/pro/signup/${sessionId}/pro-details/additional-info`,
};
