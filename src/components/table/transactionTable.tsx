"use client";
import PaymentCard from "@/components/card/paymentCard";
import { Button } from "@/components/ui/button/button";
import { purchaseListData } from "@/utils/data/purchaseListData";
import { transactionListData } from "@/utils/data/transactionListdata";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

type TransactionStatusProps = {
  type: "processed" | "success" | "failed";
};

export default function TransactionTable() {
  return (
    <div className=" p-5 w-full container-border h-full overflow-auto">
      {transactionListData.map((item, index) => (
        <TransactionItem key={index} {...item} />
      ))}
    </div>
  );
}

export interface TransactionItemProps extends TransactionStatusProps {
  item: string;
  price: string;
  date: string;
  transactionType: "debit" | "credit" | "eskrow";
}

const TransactionItem = ({
  type,
  item,
  price,
  date,
  transactionType,
}: TransactionItemProps) => {
  return (
    <div className="flex  justify-between items-baseline py-5 border-b-[1.5px]">
      <div className="flex items-center gap-3">
        <Image
          src={
            transactionType === "credit"
              ? "/credit-icon.svg"
              : transactionType === "debit"
              ? "/debit-icon.svg"
              : "/eskrow-avatar.png"
          }
          width={37}
          height={37}
          alt={`${transactionType} icon`}
        />
        <div className="flex flex-col gap-1">
          <div className="text-primary">{item}</div>
          <div className="flex gap-2 items-center">
            <TransactionStatus type={type} />
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-base text-primary font-semibold">{price}</div>
        <div className="text-[11px] text-primary">{date}</div>
      </div>
    </div>
  );
};

const TransactionStatus = ({ type }: TransactionStatusProps) => {
  return <div className="text-[11px] text-primary-300">{type}</div>;
};
