import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthScreen({
  children,
  bg = "/login.png",
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <main className="flex h-screen justify-end relative  bg-black">
      <Image
        src="/escrowLogoWhite.svg"
        className="absolute  left-10 top-10 z-10"
        alt="home icon"
        width={228}
        height={29.1}
      />

      <Image
        src={bg}
        className="absolute bg-cover object-cover left-0 top-0 bottom-0  h-full w-[52%]"
        alt="home icon"
        width={1209}
        height={907}
      />

      <div className="bg-white flex relative h-full p-10 w-1/2 rounded-tl-3xl justify-center items-center  rounded-bl-3xl ">
        <Link href="/">
          <div className="w-10 h-10 rounded-full bg-black items-center justify-center absolute flex top-8 right-8">
            <Image
              src="/icons/home.svg"
              alt="home icon"
              width={19}
              height={19}
            />
          </div>
        </Link>
        <div className="flex flex-col  w-7/12 overflow-auto">
          <>{children}</>
        </div>
      </div>
    </main>
  );
}
