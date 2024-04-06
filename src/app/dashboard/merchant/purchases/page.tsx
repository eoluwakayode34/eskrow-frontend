"use client";
import PurchaseTable from "@/components/table/purchasesTable";

import React from "react";
import { GoArrowRight } from "react-icons/go";

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
            <PurchaseTable showImage={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
