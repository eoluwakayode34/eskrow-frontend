import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import AppQueryProvider from "@/utils/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eskrow",
  description: "eskrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster
          containerStyle={{
            zIndex: 99999,
          }}
          toastOptions={{
            style: {
              zIndex: 99999,
            },
          }}
        />
        <AppQueryProvider>{children}</AppQueryProvider>
      </body>
    </html>
  );
}
