import React from "react";
import AuthScreen from "@/components/screen/auth";
import WelcomeButton from "@/components/ui/button/welcomeButton";

export default function Login() {
  return (
    <AuthScreen bg="/signup.png">
      <div className="gap-3 flex-col flex">
        <h1>Welcome account</h1>
        <p>Sign into your Eskrow account to continue 👌</p>
      </div>

      <div className="flex flex-col gap-12 mt-10">
        <WelcomeButton>User sign up</WelcomeButton>
        <WelcomeButton>Merchant sign up</WelcomeButton>
      </div>
    </AuthScreen>
  );
}
