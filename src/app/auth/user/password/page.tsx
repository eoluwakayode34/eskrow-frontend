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
import {
  userForgotPasswordValidationSchema,
  userLoginValidationSchema,
} from "@/utils/validation-schema/user/auth";

export default function ForgotPassword() {
  const onSumbitMerchantLogin = (values: { phoneNumber: string }) => {
    console.log(values);
  };

  return (
    <AuthScreen bg="/bg-password.png">
      <div className="gap-3 flex-col flex">
        <h1>Forgot Password?</h1>
        <p>
          The phone number registered with your Eskrow account to continue 👌
        </p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              phoneNumber: "",
            }}
            validationSchema={userForgotPasswordValidationSchema}
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

                  <FormButton title="Continue" />

                  <div className="flex justify-center mt-3 flex-1 gap-2">
                    <p className={cn("text-base text-primary")}>
                      Did not forget your password?
                    </p>
                    <TextLink href="/password" size={"base"}>
                      Login
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
