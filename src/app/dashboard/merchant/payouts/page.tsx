"use client";
import PaymentCard from "@/components/card/paymentCard";
import DisputeTable from "@/components/table/disputeTable";
import PaymentLinkTable from "@/components/table/paymentLinkTable";
import PayoutLinkTable from "@/components/table/payoutTable";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import FormInput from "@/components/ui/input/textInput";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function Payouts() {
  return (
    <div className="w-full pb-20">
      <div className="gap-8 items-end">
        <div className="">
          <div className="flex justify-between items-end pb-4">
            <div className="flex flex-col">
              <p className="text-base">Available Balance</p>
              <h1>₦ 350,000.00</h1>
            </div>

            <div className="text-sm flex justify-end items-baseline w-6/12 gap-2 text-brand">
              <div className="flex flex-1">
                <FormInput placeholder="Search payout date" name="" />
              </div>

              <Button className="py-[12px] uppercase" size={"medium"}>
                Make withdrawal
              </Button>
            </div>
          </div>

          <div className="  h-[500px]">
            <PayoutLinkTable showImage={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
