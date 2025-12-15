import { API } from "@/lib/constants/api.constant";

const BASE_URL = API + "/subjects";
// const limit = 1;
import { token } from "@/lib/constants/api.constant";

export const getInfiniteSubjects = async (PageNumberFromQuery: number) => {
  try {
    const response = await fetch(BASE_URL + `?page=${PageNumberFromQuery}`, {
      headers: {
        token: token,
      },
    });
    const payload: SuccessfulResponse<PaginatedData<Subject[]>> =
      await response.json();
    if (payload.message !== "success") {
      throw new Error(payload.message);
    }
    return payload;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to login, please try again.");
  }
};
export const getSubjects = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        token: token,
      },
    });
    const payload: SuccessfulResponse<PaginatedData<Subject[]>> =
      await response.json();

    return payload;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to login, please try again.");
  }
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
