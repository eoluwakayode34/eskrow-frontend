"use client";
import { useGetWallet } from "@/apis/mutations/users/useAuth";
import PaymentCard from "@/components/card/paymentCard";
import { BvnVerificationForm } from "@/components/form/BvnVerification";
import { FundWalletForm } from "@/components/form/FundAccountWallet";
import { MerchantSearchListModal } from "@/components/modals/merchantSearchListModal";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import CategoryButton from "@/components/ui/button/categoryButton";
import { SmallModal } from "@/components/ui/modal/smallModal";
import { GET_WALLET_QUERY } from "@/constants/queryKeys";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

const useWalletData = () => {
  const axiosPrivate = useAxiosPrivate("users");

  return useQuery({
    queryKey: ["GET_WALLET_QUERY"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/users/wallet");
      return response.data;
    },
  });
};

export default function UserDashboardOverview() {
  const { data, isLoading, isError, error } = useWalletData();
  const [isFundWallet, setIsFundWallet] = useState(false);
  const [isOpenMerchantList, setIsOpenMerchantList] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState<string>("");

  return (
    <div className="w-full pb-20">
      <div className="flex flex-1 justify-end py-5">
        <Button size={"medium"} onClick={() => setIsFundWallet(true)}>
          <div className="flex gap-1 items-center">
            <BiPlusCircle />
            <span>MAKE PAYMENT</span>
          </div>
        </Button>
      </div>
      <div className="flex gap-[18px]">
        <PaymentCard
          name="Total Balance"
          value={`₦${data?.data?.balance ?? "..."}`}
        />
        <PaymentCard
          intent={"secondary"}
          name="Eskrow Balance"
          value={`₦${data?.data?.balance ?? "..."}`}
          bg="/eskrow-card.png"
        />
        <PaymentCard
          bg="/balance-payment-card.png"
          intent={"secondary"}
          name="Wallet Balance"
          value={`₦${data?.data?.balance ?? "..."}`}
        />
      </div>

      <div className="flex flex-1 gap-8 mt-12 items-end">
        <div className="w-full">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Merchant Categories
            </div>

            <div className="text-sm flex items-center gap-1 text-brand uppercase">
              <div>View All</div>
              <GoArrowRight size={16} />
            </div>
          </div>

          <div className="">
            <div className="w-full h-full p-6 container-border ">
              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                  <CategoryButton
                    onClick={() => {
                      setIsOpenMerchantList(true);
                      setSelectedMerchant("FASHION MERCHANTS");
                    }}
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
                    onClick={() => {
                      setIsOpenMerchantList(true);
                      setSelectedMerchant("FASHION MERCHANTS");
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
                    onClick={() => {
                      setIsOpenMerchantList(true);
                      setSelectedMerchant("FASHION MERCHANTS");
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
                    onClick={() => {
                      setIsOpenMerchantList(true);
                      setSelectedMerchant("FASHION MERCHANTS");
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
                    onClick={() => {
                      setIsOpenMerchantList(true);
                      setSelectedMerchant("FASHION MERCHANTS");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 gap-8 mt-12 items-end">
        <div className="w-full">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Transactions
            </div>

            <div className="text-sm flex items-center gap-1 text-brand uppercase">
              <div>View All</div>
              <GoArrowRight size={16} />
            </div>
          </div>

          <div className="  h-[398px]">
            <TransactionTable />
          </div>
        </div>
      </div>

      <FundWalletForm
        isOpen={isFundWallet}
        setIsOpen={() => setIsFundWallet(false)}
      />

      <MerchantSearchListModal
        isOpen={isOpenMerchantList}
        setIsOpen={() => setIsOpenMerchantList(false)}
        title={selectedMerchant}
      />
    </div>
  );
}
