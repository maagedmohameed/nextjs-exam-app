import { API } from "@/lib/constants/api.constant";

const BASE_URL = API + "/diplomas";
const limit = 1;
import { token } from "@/lib/constants/api.constant";

export const getExams = async (dynamicPageNumber: number) => {
  const response = await fetch(
    BASE_URL + `?limit=${limit}&page=${dynamicPageNumber}`,
    {
      headers: {
        token: token,
      },
    }
  );
  const payload: SuccessfulPaginatedResponse<Exam[]> = await response.json();
  if (payload.message !== "success") {
    throw new Error(payload.message);
  }
  return payload;
};
