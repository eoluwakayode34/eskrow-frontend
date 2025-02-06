"use client";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { formatDate } from "@/utils/dateFormat";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

type TransactionStatusProps = {
  status: "PENDING" | "SUCCESS" | "FAILED";
};

const useGetTransactionList = () => {
  const axiosPrivate = useAxiosPrivate("users");

  return useQuery({
    queryKey: ["GET_TRANSACTION_LIST"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/transactions");
      return response.data;
    },
  });
};

export default function TransactionTable() {
  const { data, isLoading, isError, error } = useGetTransactionList();

  return (
    <div className=" p-5 w-full container-border h-full overflow-auto">
      {data?.map((item: any, index: number) => (
        <TransactionItem key={index} {...item} />
      ))}
    </div>
  );
}

export interface TransactionItemProps extends TransactionStatusProps {
  item: string;
  amount: string;
  updated_at: string;
  type:
    | "WALLET_TOPUP"
    | "WALLET_WITHDRAWAL"
    | "ESKROW_DEPOSIT"
    | "ESKROW_WITHDRAWAL";
}

const TransactionItem = ({
  status,
  item,
  amount,
  updated_at,
  type,
}: TransactionItemProps) => {
  return (
    <div className="flex  justify-between items-baseline py-5 border-b-[1.5px]">
      <div className="flex items-center gap-3">
        <Image
          src={
            type === "WALLET_TOPUP" || type === "ESKROW_DEPOSIT"
              ? "/credit-icon.svg"
              : type === "WALLET_WITHDRAWAL" || type === "ESKROW_WITHDRAWAL"
              ? "/debit-icon.svg"
              : "/eskrow-avatar.png"
          }
          width={37}
          height={37}
          alt={`${type} icon`}
        />
        <div className="flex flex-col gap-1">
          <div className="text-primary">
            {type === "WALLET_TOPUP" ? "Wallet Top Up" : item}
          </div>
          <div className="flex gap-2 items-center">
            <TransactionStatus status={status} />
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-base text-primary font-semibold">₦{amount}</div>
        <div className="text-[11px] text-primary">{formatDate(updated_at)}</div>
      </div>
    </div>
  );
};

const TransactionStatus = ({ status }: TransactionStatusProps) => {
  return (
    <div className="text-[11px] text-primary-300">
      {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </div>
  );
};
