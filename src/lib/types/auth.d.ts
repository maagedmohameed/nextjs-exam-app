import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
} from "@/lib/schemas/auth.schema";
import { User } from "next-auth";

export type LoginFormFields = z.infer<typeof loginSchema>;
export type RegisterFormFields = z.infer<typeof registerSchema>;
export type ForgotPasswordFormFields = z.infer<typeof forgotPasswordSchema>;

export type forgotPasswordField = {
  email: string;
};
export type verifyResetCodeField = {
  resetCode: number;
};
export interface resetPasswordFields extends forgotPasswordField {
  newPassword: number;
}

export type LoginResponse = {
  token: string;
  user: User["user"];
};

export type RegisterResponse = {
  token: string;
  user: User["user"];
};
export type forgotPasswordResponse = {
  message: string;
  info: string;
};
export type verifyResetCodeResponse = {
  status: string;
};
export type resetPasswordResponse = {
  message: string;
  token: string;
};
