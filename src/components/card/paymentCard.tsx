"use client";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Image from "next/image";

const paymentStyles = cva(
  "relative p-12 rounded-[10px] overflow-hidden flex-1  flex flex-col gap-5 items-center  justify-center text-center ",
  {
    variants: {
      intent: {
        primary: " bg-gradient-to-tr from-brand-400 to-brand-200 text-white ",
        secondary: "bg-primary-100 text-primary-500",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type PaymentCardProps = {
  name: string;
  value: string;
};

export interface Props
  extends PaymentCardProps,
    VariantProps<typeof paymentStyles> {
  bg?: string;
}

export default function PaymentCard({ name, value, intent, bg }: Props) {
  return (
    <div className={cn(paymentStyles({ intent }))}>
      <CardImage bg={bg} />
      <p className="payment-card-heading text-inherit">{name}</p>
      <h1 className="text-inherit">{value}</h1>
    </div>
  );
}

const CardImage = ({ bg }: { bg?: string }) => {
  if (bg) {
    return (
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full">
        <Image
          src={bg}
          className=" w-full h-full object-cover"
          width={328}
          height={185}
          objectFit="cover"
          alt={bg}
        />
        ;
      </div>
    );
  }
  return null;
};
