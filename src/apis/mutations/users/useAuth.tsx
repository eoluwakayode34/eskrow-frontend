import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const useUserBvnVerify = async (formData: { bvn: string }) => {
  const axiosPrivate = useAxiosPrivate("users");

  const response = await axiosPrivate.post("/users/verify-bvn", formData);
  return response.data;
};

export const useFundAccount = async (formData: { amount: string }) => {
  const axiosPrivate = useAxiosPrivate("users");

  const response = await axiosPrivate.post("/transactions/topup", formData);
  return response.data;
};

export const useGetWallet = async () => {
  const axiosPrivate = useAxiosPrivate("users");
  const response = await axiosPrivate.get("/users/wallet");
  return response.data;
};
export const useGetTransactionList = async () => {
  const axiosPrivate = useAxiosPrivate("users");
  const response = await axiosPrivate.get("/transactions");
  return response.data;
};
