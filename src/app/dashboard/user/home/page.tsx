"use client";
import PaymentCard from "@/components/card/paymentCard";
import { FundWalletForm } from "@/components/form/FundAccountWallet";
import { MerchantSearchListModal } from "@/components/modals/merchantSearchListModal";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import CategoryButton from "@/components/ui/button/categoryButton";

import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
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
const useCategoriesData = () => {
  const axiosPrivate = useAxiosPrivate("users");

  return useQuery({
    queryKey: ["GET_CATEGORIES_QUERY"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/merchants/categories");
      return response.data;
    },
  });
};

export default function UserDashboardOverview() {
  const { data, isLoading, isError, error } = useWalletData();
  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesData();
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
          value={`₦${
            data?.data?.balance
              ? Number(data?.data?.balance).toLocaleString()
              : "..."
          }`}
        />
        <PaymentCard
          intent={"secondary"}
          name="Eskrow Balance"
          value={`₦${
            data?.data?.balance
              ? Number(data?.data?.balance).toLocaleString()
              : "..."
          }`}
          bg="/eskrow-card.png"
        />
        <PaymentCard
          bg="/balance-payment-card.png"
          intent={"secondary"}
          name="Wallet Balance"
          value={`₦${
            data?.data?.balance
              ? Number(data?.data?.balance).toLocaleString()
              : "..."
          }`}
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
                {categoriesData?.data?.map(
                  (item: { slug: string; name: string }, key: any) => (
                    <div className="col-span-1" key={key}>
                      <CategoryButton
                        onClick={() => {
                          setIsOpenMerchantList(true);
                          setSelectedMerchant(
                            `${item?.name?.toUpperCase()} MERCHANTS`
                          );
                        }}
                        imageAlt={`${item.slug}`}
                        imageSrc={item.slug}
                        text={item.name}
                      />
                    </div>
                  )
                )}

                {/* <div className="col-span-1">
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
                </div> */}
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
