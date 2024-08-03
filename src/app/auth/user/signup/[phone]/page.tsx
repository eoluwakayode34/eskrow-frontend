"use client";
import React from "react";
import AuthScreen from "@/components/screen/auth";
import { Formik, Form } from "formik";
import FormInput from "@/components/ui/input/textInput";

import FormButton from "@/components/ui/button/formButton";
import { useRouter } from "next/navigation";
import { userSignupOtpValidationSchema } from "@/utils/validation-schema/user/auth";
import TextLinkButton from "@/components/ui/typography/textLinkButton";
import { useParams } from "next/navigation";
import { usePostApi } from "@/hooks/usePostApi";
import { userMutations } from "@/apis/mutations/users/signup";
import {
  USER_SIGNUP_PHONE_RESEND_MUTATIION,
  USER_SIGNUP_PHONE_VERIFY_MUTATIION,
} from "@/constants/mutationKeys";
import { pages } from "@/utils/pages";

export default function Page() {
  const { phone } = useParams();
  const router = useRouter();

  let decodedPhonenumber = String(phone).replace("%2B", "");
  decodedPhonenumber = decodedPhonenumber.replace("%20", "");
  decodedPhonenumber = decodeURIComponent(decodedPhonenumber);

  const resendMutation = usePostApi({
    mutationFunction: userMutations.phoneNumberResend,
    mutationKey: [USER_SIGNUP_PHONE_RESEND_MUTATIION],
    successMessage: "Code resent successfully",
    onSuccess(_data, variable) {
      // router.push(pages.userSignupOtpVerify(variable?.phone_number));
    },
  });
  const mutation = usePostApi({
    mutationFunction: userMutations.phoneNumberVerify,
    mutationKey: [USER_SIGNUP_PHONE_VERIFY_MUTATIION],
    successMessage: "Phone number verify successfully",
    onSuccess(_data, variable) {
      router.push(pages.userLogin);
    },
  });

  const onSumbitMerchantLogin = (values: { otp: string }) => {
    mutation.mutate({
      phone_number: "+" + decodedPhonenumber,
      code: values.otp,
    });
  };

  return (
    <AuthScreen bg="/bg-otp.png">
      <div className="gap-3 flex-col flex">
        <h1>Enter OTP</h1>
        <p className="font-light inline-flex gap-1">
          We sent an OTP to <p className="font-bold">+{decodedPhonenumber}</p>
        </p>
      </div>

      <div className="flex flex-col gap-12 mt-5">
        <div className="w-full">
          <Formik
            initialValues={{
              otp: "",
            }}
            validationSchema={userSignupOtpValidationSchema}
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
                          phone_number: decodedPhonenumber,
                        })
                      }
                      size={"small"}
                    >
                      Resend OTP
                    </TextLinkButton>
                  </div>
                  <FormButton
                    isLoading={mutation.isPending || resendMutation.isPending}
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
