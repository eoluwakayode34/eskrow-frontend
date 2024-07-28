"use client";
import PaymentCard from "@/components/card/paymentCard";
import DisputeTable from "@/components/table/disputeTable";
import PaymentLinkTable from "@/components/table/paymentLinkTable";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import FormInput from "@/components/ui/input/textInput";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function PaymentLinks() {
  return (
    <div className="w-full pb-20">
      <div className="gap-8 items-end">
        <div className="">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              payment links
            </div>

            <div className="text-sm flex justify-end items-baseline w-6/12 gap-2 text-brand">
              <div className="flex flex-1">
                {/* <FormInput placeholder="Search link ID or title" name="" /> */}
              </div>

              <Button className="py-[12px] uppercase" size={"medium"}>
                create payment link
              </Button>
            </div>
          </div>

          <div className="  h-[500px]">
            <PaymentLinkTable showImage={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
