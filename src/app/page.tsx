"use client";
import React, { useEffect } from "react";
import AuthScreen from "@/components/screen/auth";
import WelcomeButton from "@/components/ui/button/welcomeButton";
import { useRouter } from "next/navigation";
import { pages } from "@/utils/pages";
import axios from "axios";

export default function Login() {
  const router = useRouter();

  return (
    <AuthScreen>
      <div className="gap-3 flex-col flex">
        <h1>Make safer payments</h1>
        <p>Select your Eskrow account type and pay securely 👌</p>
      </div>

      <div className="flex flex-col gap-12 mt-10">
        <WelcomeButton onClick={() => router.push(pages.userLogin)}>
          User login
        </WelcomeButton>
        <WelcomeButton onClick={() => router.push(pages.merchantLogin)}>
          Merchant login
        </WelcomeButton>
      </div>
    </AuthScreen>
  );
}
