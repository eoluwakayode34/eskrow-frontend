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
import {
  ArrowTopRightIcon,
  BankIcon,
  FacebookIcon,
  InstagramIcon,
  SuccessCheckMarkIcon,
  WhatsappIcon,
} from "@/svgs";
import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import Image from "next/image";
import { Button } from "../ui/button/button";

export const MerchantDetailsModal = ({
  isOpen,
  setIsOpen,
  id,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
  id: string;
}) => {
  return (
    <SmallModal showCloseIcon isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-10/12 mx-auto py-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/merchant1.png"
                alt="merchant"
                width={158}
                height={158}
                className="rounded-full"
              />

              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center ">
                  <h3>Olúrèmí Èkó</h3>
                  <p className="text-primary">
                    MERCHANT ID: <span className="text-medium">#111472</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FacebookIcon />
                  <InstagramIcon />
                  <WhatsappIcon />
                </div>
              </div>
            </div>
            <p className="text-primary text-center">
              Lorem ipsum dolor sit amet consectetur. Diam lobortis blandit
              ullamcorper leo nunc. Risus pharetra quis arcu vulputate lorem
              massa non eu mauris. Tellus senectus vitae adipiscing enim
              ultricies. Gravida dui ac scelerisque velit elit hendrerit
              ultrices quis elit.
            </p>

            <Button size={"medium"}>
              <div className="flex gap-1 items-center">
                <span className="font-normal">VISIT STORE</span>
                <ArrowTopRightIcon className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </SmallModal>
  );
};
