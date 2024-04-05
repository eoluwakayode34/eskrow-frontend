"use client";
import DashboardHeader from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/sidebar/sidebar";
import React from "react";

export default function MerchantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#F4F7FA] h-screen overflow-clip">
      <DashboardSidebar
        type="user"
        showSidebar={false}
        setShowSidebar={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
        loading={false}
      />
      <div className="w-full  h-full">
        <DashboardHeader type="user" />
        <div className="bg-white p-5 min-h-full rounded-tl-[50px] shadow-xl ">
          {children}
        </div>
      </div>
    </div>
  );
}
