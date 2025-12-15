import {
  // isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import * as z from "zod";

export const loginSchema = z.object({
  //    Email Rules
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .trim()
    .toLowerCase()
    // .min(1, { message: "Your email is required" })
    // .refine((val) => val !== "", {
    //   error: "Your email is required",
    //   path: ["required"],
    // })
    .and(
      z
        .email({
          message: "Please enter a valid email",
        })
        .min(5, "Email is too short !")
        .max(128, "Email is too long !"),
    ),
  // Password Rules
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.?]/, {
      message: "Password must contain at least one special character",
    }),
});

export const registerSchema = z
  .object({
    ...loginSchema.shape,
    username: z
      .string()
      .nonempty({ message: "Username is required" })
      .trim()
      .min(2, { message: "Username must be at least 2 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" }),
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .trim()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(20, { message: "First name must be at most 20 characters long" }),
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .trim()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(20, { message: "Last name must be at most 20 characters long" }),
    phone: z
      .string()
      .nonempty({ message: "Phone number is required" })
      .refine(isValidPhoneNumber, {
        message: "Please enter a valid phone number",
      }),
    // .transform((val) => val.replace(/\D+/g, ""))
    // .pipe(z.coerce.number())
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

    // run if password & confirmPassword are valid
    when(payload) {
      return registerSchema
        .pick({ password: true, rePassword: true })
        .safeParse(payload.value).success;
    },
  });

export const forgotPasswordSchema = loginSchema.pick({ email: true });
