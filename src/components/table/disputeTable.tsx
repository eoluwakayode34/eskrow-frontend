"use client";

import { disputesListData } from "@/utils/data/disputeListData";
import Image from "next/image";
import React from "react";

import { twMerge } from "tailwind-merge";

type DisputeStatusProps = {
  type: "open" | "pending" | "closed";
};

export default function DisputeTable({ showImage }: { showImage?: boolean }) {
  return (
    <div className=" p-5 w-full container-border h-full overflow-auto">
      {disputesListData.map((item, index) => (
        <DisputesItem showImage={showImage} key={index} {...item} />
      ))}
    </div>
  );
}

export interface DisputeItemProps extends DisputeStatusProps {
  item: string;
  disputeId: string;
  price: string;
  date: string;
  showImage?: boolean;
}

const DisputesItem = ({
  type,
  item,
  disputeId,
  price,
  date,
  showImage,
}: DisputeItemProps) => {
  return (
    <div className="flex  justify-between items-baseline py-5 border-b">
      <div className="flex items-center gap-3">
        {showImage && (
          <Image
            src="/merchant/dispute-icon.png"
            width={37}
            height={37}
            alt="item image"
          />
        )}
        <div className="flex flex-col gap-1">
          <div className="text-primary">{item}</div>
          <div className="flex gap-2 items-center">
            <div className="text-[11px] text-primary-300">{disputeId}</div>
            <TransactionStatus type={type} />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="text-[15px] text-primary self-end">Olúrèmí Èkó</div>
        <Image
          src={"/merchant/dispute-interact-icon.svg"}
          width={26}
          height={24}
          alt="interact"
          className="py-2"
        />
        <div className="text-[15px] text-primary self-start">Malik Owolabi</div>
      </div>

      <div className="text-right">
        <div className="text-base text-primary font-semibold">{price}</div>
        <div className="text-[11px] text-primary">{date}</div>
      </div>
    </div>
  );
};

const TransactionStatus = ({ type }: DisputeStatusProps) => {
  return (
    <div
      className={twMerge(
        "text-[10px] rounded-xl flex items-center justify-center py-1 px-2  text-white",
        type === "open"
          ? "bg-green-600"
          : type === "closed"
          ? "bg-red-600"
          : "bg-yellow-400"
      )}
    >
      {type}
    </div>
  );
};
