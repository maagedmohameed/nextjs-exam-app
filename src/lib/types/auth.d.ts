import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
} from "@/lib/schemas/auth.schema";
import { User } from "next-auth";

export type LoginFormFields = z.infer<typeof loginSchema>;
export type RegisterFormFields = z.infer<typeof registerSchema>;
export type ForgotPasswordFormField = z.infer<typeof forgotPasswordSchema>;

export type LoginResponse = {
  token: string;
  user: User["user"];
};

export type RegisterResponse = {
  token: string;
  user: User["user"];
};
export type ForgotPasswordResponse = {
  message: string;
  info: string;
};
