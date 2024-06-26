import React from "react";
import AuthScreen from "@/components/screen/auth";
import WelcomeButton from "@/components/ui/button/welcomeButton";

export default function Login() {
  return (
    <AuthScreen>
      <div className="gap-3 flex-col flex">
        <h1>Make safer payments</h1>
        <p>Select your Eskrow account type and pay securely 👌</p>
      </div>

      <div className="flex flex-col gap-12 mt-10">
        <WelcomeButton>User login</WelcomeButton>
        <WelcomeButton>Merchant login</WelcomeButton>
      </div>
    </AuthScreen>
  );
}
