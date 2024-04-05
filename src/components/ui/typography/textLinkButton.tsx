"use client";
import React, { ReactNode } from "react";

import Link from "next/link";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const textLinkStyles = cva("  text-brand hover:opacity-80 ", {
  variants: {
    size: {
      base: "text-base ",
      small: "text-sm",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export interface Props extends VariantProps<typeof textLinkStyles> {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export default function TextLinkButton({
  size,
  children,
  className,
  onClick,
}: Props) {
  return (
    <button onClick={onClick}>
      <p className={cn(textLinkStyles({ size }), className)}>{children}</p>
    </button>
  );
}
