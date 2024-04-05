"use client";
import PaymentCard from "@/components/card/paymentCard";
import { Button } from "@/components/ui/button/button";
import { paymentLinkListData } from "@/utils/data/paymentListData";
import { purchaseListData } from "@/utils/data/purchaseListData";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

type PaymentLinkStatusProps = {
  type: "paid" | "pending" | "canceled";
};

export default function PaymentLinkTable({
  showImage,
}: {
  showImage?: boolean;
}) {
  return (
    <div className=" p-5 w-full container-border h-full overflow-auto">
      {paymentLinkListData.map((item, index) => (
        <PaymentLinkItem showImage={showImage} key={index} {...item} />
      ))}
    </div>
  );
}

export interface PaymentLinkItemProps extends PaymentLinkStatusProps {
  item: string;
  paymentId: string;
  price: string;
  date: string;
  showImage?: boolean;
}

const PaymentLinkItem = ({
  type,
  item,
  paymentId,
  price,
  date,
  showImage,
}: PaymentLinkItemProps) => {
  return (
    <div className="flex  justify-between items-baseline py-5 border-b">
      <div className="flex items-center gap-3">
        {showImage && (
          <Image
            src="/merchant/payment-link-icon.svg"
            width={37}
            height={37}
            alt="item image"
          />
        )}
        <div className="flex flex-col gap-1">
          <div className="text-primary">{item}</div>
          <div className="flex gap-2 items-center">
            <div className="text-[11px] text-primary-300">{paymentId}</div>
            <PaymentLinkStatus type={type} />
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

const PaymentLinkStatus = ({ type }: PaymentLinkStatusProps) => {
  return (
    <div
      className={twMerge(
        "text-[10px] rounded-xl flex items-center justify-center py-1 px-2  text-white",
        type === "paid"
          ? "bg-green-600"
          : type === "canceled"
          ? "bg-red-600"
          : "bg-yellow-400"
      )}
    >
      {type}
    </div>
  );
};
