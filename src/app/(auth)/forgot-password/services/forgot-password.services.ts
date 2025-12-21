import {
  forgotPasswordField,
  verifyResetCodeField,
  forgotPasswordResponse,
  verifyResetCodeResponse,
} from "@/lib/types/auth";

export async function forgotPasswordService(field: forgotPasswordField) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(field),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<forgotPasswordResponse> = await response.json();

  return payload;
}
export async function verifyResetCodeService(field: verifyResetCodeField) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(field),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<verifyResetCodeResponse> = await response.json();

  return payload;
}
