"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";
import { merchantSignupValidationSchema } from "@/utils/validation-schema/merchant/auth";
import { Button } from "@/components/ui/button/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxArrowRight } from "react-icons/rx";
import FormButton from "@/components/ui/button/formButton";
import Link from "next/link";
import TextLink from "@/components/ui/typography/textLink";
import { cn } from "@/utils/cn";
import { userLoginValidationSchema } from "@/utils/validation-schema/user/auth";
import { useRouter } from "next/navigation";
import { usePostApi } from "@/hooks/usePostApi";
import { merchantMutations } from "@/apis/mutations/merchant/signup";
import { MERCHANT_SIGNUP_MUTATIION } from "@/constants/mutationKeys";
import { pages } from "@/utils/pages";

export default function MerchantSignup() {
  const router = useRouter();
  const mutation = usePostApi({
    mutationFunction: merchantMutations.signup,
    mutationKey: [MERCHANT_SIGNUP_MUTATIION],
    successMessage: "Signup successful",
    onSuccess(_data, variable) {
      router.push(pages.merchantSignupOtpVerify(variable?.email));
    },
  });

  const onSumbitMerchantLogin = (values: {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) => {
    mutation.mutate({
      first_name: values.firstName,
      last_name: values.lastName,
      business_name: values.businessName,
      email: values.email,
      password: values.password,
      phone_number: "+" + values.phoneNumber,
    });
  };

  return (
    <AuthScreen bg="/merchant-signup.png">
      <div className="gap-3 flex-col flex">
        <h1>Get paid with Eskrow</h1>
        <p>Start receiving payment securely using Eskrow</p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              businessName: "",
              email: "",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={merchantSignupValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="w-full">
                  <FormInput
                    size="small"
                    name="firstName"
                    error={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                    placeholder="First name"
                  />
                  <FormInput
                    size="small"
                    name="lastName"
                    error={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                    placeholder="Last name"
                  />
                  <FormInput
                    size="small"
                    name="businessName"
                    error={
                      errors.businessName && touched.businessName
                        ? errors.businessName
                        : null
                    }
                    placeholder="Business name"
                  />

                  <FormInput
                    size="small"
                    name="phoneNumber"
                    type="phoneNumber"
                    onChange={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    error={
                      errors.phoneNumber && touched.phoneNumber
                        ? errors.phoneNumber
                        : null
                    }
                    placeholder="Phone nu ber"
                  />
                  <FormInput
                    size="small"
                    name="email"
                    error={errors.email && touched.email ? errors.email : null}
                    placeholder="Email"
                  />

                  <FormInput
                    size="small"
                    name="password"
                    type="password"
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    placeholder="Password"
                  />

                  <FormButton
                    isLoading={mutation.isPending}
                    title="Create Account"
                  />

                  <div className="flex justify-center mt-3 flex-1 gap-2 ">
                    <p className={cn("text-base text-primary")}>
                      Already have an Account?
                    </p>
                    <TextLink href={pages.merchantLogin} size={"base"}>
                      Sign In
                    </TextLink>
                  </div>
                  <div className="inline-flex justify-center mt-5 flex-1 gap-2 flex-wrap text-center">
                    <p className={cn("text-small text-primary text-center")}>
                      By clicking the “Create account” button, you agree to
                      Eskrow&apos;s
                    </p>{" "}
                    <TextLink href="/" className="text-small" size={"small"}>
                      Terms of Use
                    </TextLink>
                    <p className={cn("text-sm text-primary")}>and</p>
                    <TextLink href="/" size={"small"}>
                      Privacy Policy.
                    </TextLink>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthScreen>
  );
}
