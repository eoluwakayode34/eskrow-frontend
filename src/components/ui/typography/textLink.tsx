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
  href: string;
  className?: string;
}

export default function TextLink({ size, href, children, className }: Props) {
  return (
    <Link href={href}>
      <p className={cn(textLinkStyles({ size }))}>{children}</p>
    </Link>
  );
}
