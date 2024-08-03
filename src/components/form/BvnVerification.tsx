import { usePostApi } from "@/hooks/usePostApi";
import { SmallModal } from "../ui/modal/smallModal";
import { userMutations } from "@/apis/mutations/users/signup";
import {
  USER_BVN_VERIFY_MUTATION,
  USER_LOGIN_MUTATIION,
} from "@/constants/mutationKeys";
import { Form, Formik } from "formik";
import FormInput from "../ui/input/textInput";
import FormButton from "../ui/button/formButton";
import {
  bvnValidationSchema,
  userLoginValidationSchema,
} from "@/utils/validation-schema/user/auth";
import { BankIcon, CheckMarkRoundIcon, SuccessCheckMarkIcon } from "@/svgs";
import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const BvnVerificationForm = () => {
  const axiosPrivate = useAxiosPrivate("users");
  const auth = useUserStore((state) => state.auth);
  const setAuth = useUserStore((state) => state.setAuth);

  const userBvnVerify = async (formData: { bvn: string }) => {
    const response = await axiosPrivate.post("/verification/users", formData);
    return response.data;
  };
  const mutation = usePostApi({
    mutationFunction: userBvnVerify,
    mutationKey: [USER_BVN_VERIFY_MUTATION],
    // successMessage: "BVN Verifi successful",
    onSuccess(_data, variable) {
      setBvnVerfied(true);

      const user = { ...auth?.user, bvn_verified: true };
      const accessToken = auth?.accessToken;

      setAuth({ user, accessToken });

      // setAuth((prev) => {...prev})
    },
  });
  const onSumbitMerchantLogin = (values: { bvn: string }) => {
    mutation.mutate({
      bvn: values.bvn,
    });
  };

  const [bvnVerified, setBvnVerfied] = useState(false);

  const [openBvnModal, setOpenBvnModal] = useState(!auth?.user?.bvn_verified);
  return (
    <SmallModal
      showCloseIcon
      isOpen={openBvnModal}
      setIsOpen={() => setOpenBvnModal(false)}
    >
      <div className="w-10/12 mx-auto py-10">
        {bvnVerified ? (
          <div className="flex flex-col items-center gap-5">
            <SuccessCheckMarkIcon className="w-28 h-28" />

            <div className="flex flex-col items-center">
              <h2>You, Yes You, Rock!</h2>
              <p className="text-primary-300">Your BVN has been verified.</p>
            </div>
          </div>
        ) : (
          <Formik
            initialValues={{
              bvn: "",
            }}
            validationSchema={bvnValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="w-full ">
                  <div className="flex flex-col gap-4 items-center">
                    <BankIcon className="w-24 h-24" />

                    <div className="flex flex-col items-center">
                      <h2>Verify BVN</h2>
                      <p className=" text-primary-300">
                        You can transact after your BVN has been verified{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <FormInput
                      size="small"
                      name="bvn"
                      error={errors.bvn && touched.bvn ? errors.bvn : null}
                      placeholder="BVN"
                    />

                    {/* <div className="flex gap-2 items-center mt-2">
                      <CheckMarkRoundIcon className="w-5 h-5" />
                      <p className="text-medium text-secondary">
                        Malik Owolabi
                      </p>
                    </div> */}
                  </div>

                  <FormButton
                    isLoading={mutation.isPending}
                    arrow={false}
                    title="VERIFY"
                  />
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </SmallModal>
  );
};
