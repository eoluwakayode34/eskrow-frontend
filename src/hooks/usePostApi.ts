import showToast from "@/components/ui/toast";
import { useMutation } from "@tanstack/react-query";

interface Data {
  data: any;
}

interface Error {
  response: {
    data: string;
  };
}

export function usePostApi({
  mutationFunction,
  successMessage,
  errorMessage,
  invalidateQueries,
  onSuccess,
  onError,
}: {
  mutationFunction: (data: any) => Promise<any>;
  mutationKey: string[];
  successMessage?: string;
  errorMessage?: string;
  invalidateQueries?: string[];
  onSuccess?: (data: any, variable?: any) => void;
  onError?: () => void;
}) {
  return useMutation<Data, Error, any>({
    mutationFn: async (data) => {
      const response = await mutationFunction(data);
      return response;
    },

    onSuccess(data, _variables, _context) {
      if (successMessage) {
        showToast({ message: successMessage, type: "success" });
      }
      if (onSuccess) {
        onSuccess(data, _variables);
      }
    },
    onError(error, _variables, _context) {
      console.log(error)
      showToast({
        message: (error.response.data as unknown as { message: string })?.message || "Something went wrong",
        type: "error",
      });
    },
    onSettled: () => {},
  });
}
