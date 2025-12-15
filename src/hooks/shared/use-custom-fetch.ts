import { authOptions } from "@/auth";
import { API } from "@/lib/constants/api.constant";
import { getServerSession } from "next-auth";

export async function useCustomFetch(url: string, options?: RequestInit) {
  const session = await getServerSession(authOptions);
  return fetch(API + url, {
    headers: {
      token: token || "",
    },
    ...options,
  });
}
