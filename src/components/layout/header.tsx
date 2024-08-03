"use client";
import Image from "next/image";
import React, { useState } from "react";

import { PiBellFill } from "react-icons/pi";
import RadioInput from "../ui/switch/switchInput";
import { useUserStore } from "@/store/userStore";

type DashboardHeaderProps = {
  type: "user" | "merchant";
};

export default function DashboardHeader({ type }: DashboardHeaderProps) {
  const [openRadio, setOpenRadio] = useState("test");
  const auth = useUserStore((state) => state.auth);

  return (
    <div className="sticky top-0 right-0 w-full p-5">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <h3 className="text-primary-300">Howdy</h3>
          <h3>
            {auth?.user?.first_name} {auth?.user?.last_name}
          </h3>
        </div>

        <div className="flex items-center gap-[27px]">
          {type === "merchant" && (
            <RadioInput
              openRadio={openRadio}
              setOpenRadio={setOpenRadio}
              label="Test"
            />
          )}
          <div className="relative">
            <PiBellFill size={20} />
            <div className="w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 border-2 border-white" />
          </div>
          <Image src="/avatar.png" width={43} height={32} alt="user avatar" />
        </div>
      </div>
    </div>
  );
}
