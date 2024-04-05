"use client";
import PaymentCard from "@/components/card/paymentCard";
import DisputeTable from "@/components/table/disputeTable";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import FormInput from "@/components/ui/input/textInput";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function Disputes() {
  return (
    <div className="w-full pb-20">
      <div className="gap-8 items-end">
        <div className="">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              disputes
            </div>

            <div className="text-sm flex w-[342px] items-center gap-1 text-brand">
              <FormInput placeholder="Search dispute ID or title" name="" />
            </div>
          </div>

          <div className="  h-[500px]">
            <DisputeTable showImage={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
