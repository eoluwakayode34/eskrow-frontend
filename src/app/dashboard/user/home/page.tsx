"use client";
import PaymentCard from "@/components/card/paymentCard";
import { BvnVerificationForm } from "@/components/form/BvnVerification";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import CategoryButton from "@/components/ui/button/categoryButton";
import { SmallModal } from "@/components/ui/modal/smallModal";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function UserDashboardOverview() {
  return (
    <div className="w-full pb-20">
      <div className="flex flex-1 justify-end py-5">
        <Button size={"medium"}>MAKE PAYMENT</Button>
      </div>
      <div className="flex gap-[18px]">
        <PaymentCard name="Total Balance" value="₦500,000.00" />
        <PaymentCard
          intent={"secondary"}
          name="Eskrow Balance"
          value="₦150,000.00"
          bg="/eskrow-card.png"
        />
        <PaymentCard
          bg="/balance-payment-card.png"
          intent={"secondary"}
          name="Wallet Balance"
          value="₦350,000.00"
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
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
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
                  />
                </div>
                <div className="col-span-1">
                  <CategoryButton
                    imageAlt={`/merchant/categories/fashion.png`}
                    imageSrc="/merchant/categories/fashion.png"
                    text="Fashion"
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

    </div>
  );
}
