"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";

import FormButton from "@/components/ui/button/formButton";
import TextLink from "@/components/ui/typography/textLink";
import { cn } from "@/utils/cn";
import { userForgotPasswordValidationSchema } from "@/utils/validation-schema/user/auth";
import { useRouter } from "next/navigation";
import { usePostApi } from "@/hooks/usePostApi";
import { userMutations } from "@/apis/mutations/users/signup";
import { PASSWORD_RESET_MUTATION } from "@/constants/mutationKeys";
import { pages } from "@/utils/pages";

export default function ForgotPassword() {
  const router = useRouter();

  const mutation = usePostApi({
    mutationFunction: userMutations.forgotPassword,
    mutationKey: [PASSWORD_RESET_MUTATION],
    onSuccess(_data, variable) {
      router.push(pages.userForgotpassword(variable?.phone_number));
    },
  });
  const onSumbitMerchantLogin = (values: { phoneNumber: string }) => {
    mutation.mutate({
      phone_number: "+" + values.phoneNumber,
    });
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
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="w-full">
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

                  <FormButton isLoading={mutation.isPending} title="Continue" />

                  <div className="flex justify-center mt-3 flex-1 gap-2">
                    <p className={cn("text-base text-primary")}>
                      Did not forget your password?
                    </p>
                    <TextLink href={pages.userLogin} size={"base"}>
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
