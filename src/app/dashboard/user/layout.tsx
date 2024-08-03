"use client";
import { BvnVerificationForm } from "@/components/form/BvnVerification";
import DashboardHeader from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/sidebar/sidebar";
import React from "react";

export default function UsersLayout({
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
        <div className="bg-white p-10 h-full rounded-tl-[50px] shadow-xl overflow-auto ">
          {children}
        </div>
      </div>

      <BvnVerificationForm />

    </div>
  );
}
