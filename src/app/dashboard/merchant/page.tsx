"use client";
import PaymentCard from "@/components/card/paymentCard";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function Merchant() {
  return (
    <div className="w-full pb-20">
      <div className="flex flex-1 justify-end py-5">
        <Button size={"medium"}>MAKE PAYMENT</Button>
      </div>
      <div className="flex gap-[18px]">
        <PaymentCard name="Monthly Purchase" value="250" />
        <PaymentCard
          intent={"secondary"}
          name="Eskrow Balance"
          value="₦150,000.00"
          bg="/eskrow-card.png"
        />
        <PaymentCard
          bg="/balance-payment-card.png"
          intent={"secondary"}
          name="Available Balance"
          value="₦350,000.00"
        />
      </div>

      <div className="grid grid-cols-3 gap-8 mt-12 items-end">
        <div className="col-span-2">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Purchases
            </div>

            <div className="text-sm flex items-center gap-1 text-brand">
              <div>View</div>
              <GoArrowRight size={16} />
            </div>
          </div>

          <div className="  h-[398px]">
            <TransactionTable />
          </div>
        </div>

        <div className="col-span-1 container-border flex items-center justify-center py-20 ">
          <div className="flex flex-col items-center  gap-5 justify-center">
            <Image
              src={"/merchant/barcode.svg"}
              width={116}
              height={116}
              alt="qr code"
            />

            <div className="flex flex-col items-center  justify-center">
              <p className="text-sm font-semibold text-primary-500">
                Payment link for your store
              </p>
              <p className="text-xs">
                Send link to customers them to generate and create their own
                order.
              </p>
            </div>

            <div className="flex border border-primary-400 overflow-hidden rounded-[5px]">
              <p className="text-base py-2 pl-2">
                https://eskrow.co/create-orde...
              </p>
              <div className="bg-brand-50 border-l border-l-primary-400 p-2 flex items-center justify-center">
                <PiCopySimpleDuotone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
