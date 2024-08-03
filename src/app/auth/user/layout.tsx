"use client";
import DashboardHeader from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/sidebar/sidebar";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { pages } from "@/utils/pages";

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const auth = useUserStore((state) => state.auth);
  useEffect(() => {
    if (auth?.accessToken) {
      router.push(pages.userDasboard);
    }
  }, [auth, router]);

  return <>{children}</>;
}
