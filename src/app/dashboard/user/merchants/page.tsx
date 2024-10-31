"use client";
import PaymentCard from "@/components/card/paymentCard";
import TransactionTable from "@/components/table/transactionTable";
import { Button } from "@/components/ui/button/button";
import CategoryButton from "@/components/ui/button/categoryButton";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { PiCopySimpleDuotone } from "react-icons/pi";

export default function UserMerchants() {
  return (
    <div className="w-full pb-20">
      <div className="flex flex-1 gap-8 mt-12 items-end">
        <div className="w-full">
          <div className="flex justify-between items-baseline pb-4">
            <div className="text-sm text-primary uppercase font-semibold">
              Merchant Categories
            </div>
          </div>

          {/* <div className="w-full h-full px-6 py-7 container-border ">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
