import { API } from "@/lib/constants/api.constant";

const BASE_URL = API + "/exams";
const limit = 1;
import { token } from "@/lib/constants/api.constant";

export const getInfiniteExams = async (PageNumberFromQuery: number) => {
  const response = await fetch(
    BASE_URL + `?limit=${limit}&page=${PageNumberFromQuery}`,
    {
      headers: {
        token: token,
      },
    }
  );
  const payload: SuccessfulResponse<PaginatedData<Exam[]>> =
    await response.json();
  if (payload.message !== "success") {
    throw new Error(payload.message);
  }
  return payload;
};
export const getExams = async () => {
  const response = await fetch(BASE_URL, {
    headers: {
      token: token,
    },
  });
  const payload: SuccessfulResponse<PaginatedData<Exam[]>> =
    await response.json();
  if ("code" in payload) {
    throw new Error(payload.message);
  }
  return payload;
};
export const getExam = async (id: string) => {
  const response = await fetch(BASE_URL + `/${id}`, {
    headers: {
      token: token,
    },
  });
  const payload: SuccessfulResponse<Exam> = await response.json();
  if (payload.message !== "success") {
    throw new Error(payload.message);
  }
  return payload;
};

export const getExamsForSpecificSubject = async (subjectId: string) => {
  const response = await fetch(BASE_URL + `?subject=${subjectId}`, {
    headers: {
      token: token,
    },
  });
  const payload: SuccessfulResponse<Exam[]> = await response.json();
  if (payload.message !== "success") {
    throw new Error(payload.message);
  }
  return payload;
};
