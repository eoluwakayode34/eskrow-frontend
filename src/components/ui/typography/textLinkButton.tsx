"use client";
import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const textLinkStyles = cva("text-brand hover:opacity-80", {
  variants: {
    size: {
      base: "text-base",
      small: "text-sm",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textLinkStyles> {
  children: ReactNode;
  className?: string;
}

export default function TextLinkButton({
  size,
  children,
  className,
  onClick,
  ...otherProps
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(textLinkStyles({ size }), className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}
