"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";
import { merchantUserLoginValidationSchema } from "@/utils/validation-schema/merchant/auth";
import { Button } from "@/components/ui/button/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxArrowRight } from "react-icons/rx";
import FormButton from "@/components/ui/button/formButton";
import Link from "next/link";
import TextLink from "@/components/ui/typography/textLink";
import { cn } from "@/utils/cn";
import { userLoginValidationSchema } from "@/utils/validation-schema/user/auth";

export default function Login() {
  const onSumbitMerchantLogin = (values: {
    phoneNumber: string;
    password: string;
  }) => {
    console.log(values);
  };

  return (
    <AuthScreen bg="/user-login.png">
      <div className="gap-3 flex-col flex">
        <h1>Welcome back</h1>
        <p>Sign into your Eskrow account to continue 👌</p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              phoneNumber: "",
              password: "",
            }}
            validationSchema={userLoginValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full">
                  <FormInput
                    size="small"
                    name="phoneNumber"
                    type="phoneNumber"
                    error={
                      errors.phoneNumber && touched.phoneNumber
                        ? errors.phoneNumber
                        : null
                    }
                    placeholder="Phone"
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
                  <div className="flex justify-end mt-3 flex-1">
                    <TextLink href="/password" size={"small"}>
                      Forgot password?
                    </TextLink>
                  </div>
                  <FormButton title="Log in" />

                  <div className="flex justify-center mt-3 flex-1 gap-2">
                    <p className={cn("text-base text-primary")}>
                      Don&apos;t have an account?
                    </p>
                    <TextLink href="/password" size={"base"}>
                      Sign up
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
