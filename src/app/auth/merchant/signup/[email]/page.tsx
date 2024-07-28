"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";
import FormButton from "@/components/ui/button/formButton";
import TextLinkButton from "@/components/ui/typography/textLinkButton";
import {
  USER_SIGNUP_PHONE_RESEND_MUTATIION,
  USER_SIGNUP_PHONE_VERIFY_MUTATIION,
} from "@/constants/mutationKeys";
import { usePostApi } from "@/hooks/usePostApi";
import { useParams } from "next/navigation";
import { merchantMutations } from "@/apis/mutations/merchant/signup";
import { merchantSignupOtpValidationSchema } from "@/utils/validation-schema/merchant/auth";
import { useRouter } from "next/navigation";
import { pages } from "@/utils/pages";

export default function MerchantSignup() {
  const { email } = useParams();
  const router = useRouter();

  const decodedEmail = decodeURIComponent(email as string);

  const resendMutation = usePostApi({
    mutationFunction: merchantMutations.emailResend,
    mutationKey: [USER_SIGNUP_PHONE_RESEND_MUTATIION],
    successMessage: "Code resent successfully",
    onSuccess(_data, variable) {
      // router.push(pages.userSignupOtpVerify(variable?.phone_number));
    },
  });
  const mutation = usePostApi({
    mutationFunction: merchantMutations.emailVerify,
    mutationKey: [USER_SIGNUP_PHONE_VERIFY_MUTATIION],
    successMessage: "Email verify successfully",
    onSuccess(_data, variable) {
      router.push(pages.merchantLogin);
    },
  });

  const onSumbitMerchantLogin = (values: { otp: string }) => {
    mutation.mutate({
      email: decodedEmail,
      code: values.otp,
    });
  };
  return (
    <AuthScreen bg="/bg-otp.png">
      <div className="gap-3 flex-col flex">
        <h1>Enter OTP</h1>
        <p className="font-light inline-flex gap-1">
          We sent an OTP to <p className="font-bold">{decodedEmail}</p>
        </p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              otp: "",
            }}
            validationSchema={merchantSignupOtpValidationSchema}
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
                    <TextLinkButton
                      onClick={() =>
                        resendMutation.mutate({
                          email: decodedEmail,
                        })
                      }
                      size={"small"}
                      type="button"
                    >
                      Resend OTP
                    </TextLinkButton>
                  </div>
                  <FormButton
                    isLoading={resendMutation.isPending || mutation.isPending}
                    title="Verify OTP"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthScreen>
  );
}
