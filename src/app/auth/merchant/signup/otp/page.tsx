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
import TextLinkButton from "@/components/ui/typography/textLinkButton";

export default function MerchantSignup() {
  const onSumbitMerchantLogin = (values: { otp: string }) => {
    console.log(values);
  };

  return (
    <AuthScreen bg="/bg-otp.png">
      <div className="gap-3 flex-col flex">
        <h1>Enter OTP</h1>
        <p className="font-light inline-flex gap-1">
          We sent an OTP to <p className="font-bold">johndoe@gmail.com</p>
        </p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              otp: "",
            }}
            validationSchema={userLoginValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full">
                  <FormInput
                    size="small"
                    name="otp"
                    error={errors.otp && touched.otp ? errors.otp : null}
                    placeholder="OTP"
                  />
                  <div className="flex justify-end mt-3 flex-1">
                    <TextLinkButton onClick={() => {}} size={"small"}>
                      Resend OTP
                    </TextLinkButton>
                  </div>
                  <FormButton title="Verify OTP" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthScreen>
  );
}
