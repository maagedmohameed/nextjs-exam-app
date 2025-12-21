import {
  LoginFormFields,
  LoginResponse,
  resetPasswordFields,
  resetPasswordResponse,
} from "../types/auth";

export async function loginService(fields: LoginFormFields) {
  const response = await fetch(`${process.env.API}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<LoginResponse> = await response.json();

  return payload;
}
export async function resetPasswordService(fields: resetPasswordFields) {
  const response = await fetch(`${process.env.API}/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<resetPasswordResponse> = await response.json();

  return payload;
}
