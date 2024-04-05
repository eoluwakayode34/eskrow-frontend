"use client";

import { cva, VariantProps } from "class-variance-authority";
import { CgSpinner } from "react-icons/cg";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./buttonOrLink";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";

const buttonStyles = cva(
  " flex justify-center items-center  px-6 py-4 font-medium text-sm sm:text-base text-center transition ease-in-out rounded-[5px] bg-brand  ",
  {
    variants: {
      intent: {
        primary: "text-white hover:opacity-[50%] border-secondary-400 ",
        outline: "  bg-white text-dark border border-dark  ",
        outlinePrimary: "  bg-white text-dark border border-brand-400  ",
        outlinePrimary2:
          "  bg-white text-dark text-brand-400 border border-brand-400  ",
        dark: "  text-white bg-dark border border-dark  ",
        danger: "  bg-red-500 text-white  border-red-500 ",
        outlineDanger: "  text-red-500  bg-white border border-red-500 ",
        none: "  text-dark bg-white border border-0  ",
        nonePrimary: "  text-brand bg-white border border-0  ",
        noneDark: "  text-dark bg-white border border-0  ",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: "opacity-[50%] cursor-not-allowed",
      },
      loading: {
        true: "opacity-[60%] cursor-not-allowed",
      },
      size: {
        big: "px-4 py-3 ",
        medium: "text-sm py-2 px-4 font-normal",
        small: "py-2 px-4",
      },
      radius: {
        big: "rounded-[200px]",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  intent,
  fullWidth,
  loading,
  children,
  radius,
  size,
  disabled,
  className,

  ...props
}: Props) {
  return (
    <ButtonOrLink
      className={cn(
        buttonStyles({ intent, fullWidth, size, radius, disabled, loading }),
        className
      )}
      {...props}
      disabled={disabled}
    >
      {loading ? <CgSpinner className="w-6 h-6 animate-spin" /> : children}
    </ButtonOrLink>
  );
}
