import { LoginFormFields, LoginResponse } from "../types/auth";

export async function loginService(fields: LoginFormFields) {
  try {
    const response = await fetch(`${process.env.API}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const payload: ApiResponse<LoginResponse> = await response.json();

    return payload;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to login, please try again.");
  }
}
