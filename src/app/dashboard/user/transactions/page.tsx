"use client";
import PaymentCard from "@/components/card/paymentCard";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import CategoryButton from "@/components/ui/button/categoryButton";
import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function UserMerchants() {
  return (
    <div className="w-full pb-20">
      <div className="flex flex-1 gap-8  items-end">
        <div className="w-full">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Transactions
            </div>

            <div className="text-sm bg-brand-50 rounded-full py-2 px-3 flex items-center gap-1 text-primary uppercase">
              <div>All</div>
              <IoIosArrowDown size={16} />
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
