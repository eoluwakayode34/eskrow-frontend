import { axiosPrivate } from "@/config/requestInstance";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const userBvnVerify = async (formData: { bvn: string }) => {
  const response = await axiosPrivate.post("/users/verify-bvn", formData);
  return response.data;
};
export const useGetWallet = async () => {
  const response = await axiosPrivate.get("/users/wallet");
  return response.data;
};
