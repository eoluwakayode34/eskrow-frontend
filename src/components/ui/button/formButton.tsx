"use client";
import React from "react";
import { Button } from "@/components/ui/button/button";
import { RxArrowRight } from "react-icons/rx";

export default function FormButton({ title }: { title: string }) {
  return (
    <Button
      type="submit"
      fullWidth
      intent="primary"
      size="big"
      className="mt-6"
    >
      {title}
      <RxArrowRight className="w-5" />
    </Button>
  );
}
