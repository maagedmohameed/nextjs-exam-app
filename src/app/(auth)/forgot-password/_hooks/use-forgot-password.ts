import { resetPasswordService } from "@/lib/services/auth.service";
import { resetPasswordFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export default function useForgotPassword() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: resetPasswordFields) => {
      const response = await resetPasswordService(fields);

      if ("code" in response) {
        throw new Error(response.message);
      }

      return response;
    },
    onSuccess: () => {
      const callbackUrl =
        new URLSearchParams(location.search).get("callbackUrl") || "/dashboard";

      window.location.href = callbackUrl;
    },
  });

  return { isPending, error, forgotPassword: mutate };
}
