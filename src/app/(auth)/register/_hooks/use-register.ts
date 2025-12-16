import { useMutation } from "@tanstack/react-query";
import { registerService } from "../_services/register.service";
import { RegisterFormFields } from "@/lib/types/auth";
import { useRouter } from "next/navigation";

export default function useRegister() {
  // Navigation
  const router = useRouter();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: RegisterFormFields) => {
      const payload = await registerService(fields);

      if ("code" in payload) {
        throw new Error(payload.message);
      }

      return payload;
    },
    onSuccess: () => {
      // Show toast

      router.push("/login");
    },
  });

  return { isPending, error, register: mutate };
}
