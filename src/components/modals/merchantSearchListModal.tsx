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
  merchantSearchSchema,
  userLoginValidationSchema,
} from "@/utils/validation-schema/user/auth";
import { BankIcon, SuccessCheckMarkIcon } from "@/svgs";
import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { cn } from "@/utils/cn";
import TextLink from "../ui/typography/textLink";
import Image from "next/image";
import { MerchantDetailsModal } from "./merchantDetailsModal";

export const MerchantSearchListModal = ({
  isOpen,
  setIsOpen,
  title,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
  title: string;
}) => {
  const axiosPrivate = useAxiosPrivate("users");
  const auth = useUserStore((state) => state.auth);
  const setAuth = useUserStore((state) => state.setAuth);
  const [bvnVerified, setBvnVerfied] = useState(auth?.user?.bvn_verified);

  const [merchantDetailsModalOpen, setMerchantDetailsModalOpen] =
    useState(false);

  const userBvnVerify = async (formData: { bvn: string }) => {
    const response = await axiosPrivate.post("/users/verify-bvn", formData);
    return response.data;
  };
  const mutation = usePostApi({
    mutationFunction: userBvnVerify,
    mutationKey: [USER_BVN_VERIFY_MUTATION],
    // successMessage: "BVN Verifi successful",
    onSuccess(_data, _variable) {
      setBvnVerfied(true);

      const user = { ...auth?.user, bvn_verified: true };
      const accessToken = auth?.accessToken;

      setAuth({ user, accessToken });
    },
  });

  const onSumbitMerchantLogin = (values: { searchText: string }) => {
    // mutation.mutate({
    //   bvn: values.bvn,
    // });
  };

  return (
    <>
      <SmallModal
        showCloseIcon
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
      >
        <div className=" mx-auto py-2">
          <Formik
            initialValues={{
              searchText: "",
            }}
            validationSchema={merchantSearchSchema}
            onSubmit={onSumbitMerchantLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full ">
                  <div className="w-full relative">
                    <FormInput
                      size="small"
                      name="searchText"
                      error={
                        errors.searchText && touched.searchText
                          ? errors.searchText
                          : null
                      }
                      placeholder="Search for merchants by name or ID"
                    />

                    <div className="absolute right-0 -top-6">
                      <FormButton
                        isLoading={mutation.isPending}
                        arrow={false}
                        title="Search"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="grid grid-cols-2 gap-10 h-80 overflow-y-auto my-10">
          {Array.from({ length: 20 }).map((item, key) => (
            <button
              className="col-span-1 flex items-center gap-2"
              onClick={() => setMerchantDetailsModalOpen(true)}
              key={key}
            >
              <Image
                src="/merchant1.png"
                alt="merchant"
                width={41}
                height={41}
                className="rounded-full"
              />
              <div className="text-18">Olúrèmí Èkó</div>
            </button>
          ))}
        </div>

        <div className="flex pt-2 border-t border-[#E2E8F0] justify-center">
          <p className={cn("text-base text-primary")}>
            Can&apos;t find merchant? 
          </p>
          <TextLink href={""} size={"base"}>
            Contact support
          </TextLink>
        </div>
      </SmallModal>

      <MerchantDetailsModal
        id="234"
        isOpen={merchantDetailsModalOpen}
        setIsOpen={() => setMerchantDetailsModalOpen(false)}
      />
    </>
  );
};
