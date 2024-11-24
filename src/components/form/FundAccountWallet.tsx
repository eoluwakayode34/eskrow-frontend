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
  fundWalletValidationSchema,
  userLoginValidationSchema,
} from "@/utils/validation-schema/user/auth";
import { BankIcon, SuccessCheckMarkIcon } from "@/svgs";
import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const FundWalletForm = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  const axiosPrivate = useAxiosPrivate("users");
  const auth = useUserStore((state) => state.auth);
  const setAuth = useUserStore((state) => state.setAuth);
  const [bvnVerified, setBvnVerfied] = useState(false);

  const userBvnVerify = async (formData: { bvn: string }) => {
    const response = await axiosPrivate.post("/users/verify-bvn", formData);
    return response.data;
  };
  const mutation = usePostApi({
    mutationFunction: userBvnVerify,
    mutationKey: [USER_BVN_VERIFY_MUTATION],
    // successMessage: "BVN Verifi successful",
    onSuccess(_data, _variable) {
 
    },
  });

  const onSumbitMerchantLogin = (values: { amount: number | null }) => {
    // mutation.mutate({
    //   bvn: values.bvn,
    // });
  };

  return (
    <SmallModal showCloseIcon isOpen={isOpen} setIsOpen={setIsOpen}>
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
              amount: null,
            }}
            validationSchema={fundWalletValidationSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full ">
                  <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <h2>Wallet Top Up</h2>
                      <p className=" text-primary-300">
                        How much do you want to topup?
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <FormInput
                      size="small"
                      name="amount"
                      error={
                        errors.amount && touched.amount ? errors.amount : null
                      }
                      placeholder="Amount"
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
                    title="Continue"
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
