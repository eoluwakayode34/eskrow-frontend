"use client";
import PaymentCard from "@/components/card/paymentCard";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function Purchases() {
  return (
    <div className="w-full pb-20">
      <div className="gap-8  items-end">
        <div className="">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Purchases
            </div>

            <div className="text-sm flex items-center gap-1 text-brand">
              <div>View</div>
              <GoArrowRight size={16} />
            </div>
          </div>

          <div className="  h-[500px]">
            <TransactionTable showImage={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
