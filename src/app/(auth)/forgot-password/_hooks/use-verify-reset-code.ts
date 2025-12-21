import { useMutation } from "@tanstack/react-query";
import { verifyResetCodeService } from "../services/forgot-password.services";
import { verifyResetCodeField } from "@/lib/types/auth";

export default function useVerifyResetCode() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (field: verifyResetCodeField) => {
      const response = await verifyResetCodeService(field);

      if ("code" in response) {
        throw new Error(response.message);
      }

      return response;
    },
  });

  return { isPending, error, verifyResetCode: mutate };
}
