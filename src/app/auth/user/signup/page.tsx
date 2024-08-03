"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";
import FormButton from "@/components/ui/button/formButton";
import TextLink from "@/components/ui/typography/textLink";
import { cn } from "@/utils/cn";
import { userSignupValidationSchema } from "@/utils/validation-schema/user/auth";
import { usePostApi } from "@/hooks/usePostApi";
import { userMutations } from "@/apis/mutations/users/signup";
import { USER_SIGNUP_MUTATIION } from "@/constants/mutationKeys";
import { useRouter } from "next/navigation";
import { pages } from "@/utils/pages";

export default function UserSignup() {
  const router = useRouter();
  const mutation = usePostApi({
    mutationFunction: userMutations.signup,
    mutationKey: [USER_SIGNUP_MUTATIION],
    successMessage: "Signup successful",
    onSuccess(_data, variable) {
      router.push(pages.userSignupOtpVerify(variable?.phone_number));
    },
  });

  const onSumbitMerchantLogin = (values: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) => {
    mutation.mutate({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
      phone_number: "+" + values.phoneNumber,
    });
  };

  return (
    <AuthScreen bg="/user-signup.png">
      <div className="gap-3 flex-col flex">
        <h1>Pay with Eskrow</h1>
        <p>Start making payment securely using Eskrow</p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={userSignupValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched, handleBlur, handleChange }) => (
              <Form>
                <div className="w-full">
                  <FormInput
                    size="small"
                    name="firstName"
                    error={
                      touched.firstName && errors.firstName
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
                    name="phoneNumber"
                    type="phoneNumber"
                    onChange={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    error={
                      errors.phoneNumber && touched.phoneNumber
                        ? errors.phoneNumber
                        : null
                    }
                    placeholder="Phone number"
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
                    title="Create Account"
                    isLoading={mutation.isPending}
                  />

                  <div className="flex justify-center mt-3 flex-1 gap-2 ">
                    <p className={cn("text-base text-primary")}>
                      Already have an Account?
                    </p>
                    <TextLink href="/password" size={"base"}>
                      Sign In
                    </TextLink>
                  </div>
                  <div className="inline-flex justify-center mt-5 flex-1 gap-2 flex-wrap text-center">
                    <p className={cn("text-small text-primary text-center")}>
                      By clicking the “Create account” button, you agree to
                      Eskrow&apos;s
                    </p>{" "}
                    <TextLink
                      href="/password"
                      className="text-small"
                      size={"small"}
                    >
                      Terms of Use
                    </TextLink>
                    <p className={cn("text-sm text-primary")}>and</p>
                    <TextLink href="/password" size={"small"}>
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
