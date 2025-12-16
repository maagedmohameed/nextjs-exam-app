"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormFields } from "@/lib/types/auth";
import { loginSchema } from "@/lib/schemas/auth.schema";
import useLogin from "../_hooks/use-login";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  // Mutation
  const { isPending, error, login } = useLogin();

  // Form
  const form = useForm<LoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFormFields> = async (values) => {
    login(values);
  };

  return (
    <section className="flex w-[28.25rem] flex-col gap-4">
      {/* Header  */}
      <header className="flex flex-col justify-center gap-[0.625rem] pb-6 font-inter text-[1.875rem] font-bold text-gray-800">
        Login
      </header>
      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="login-form">
          {/* Email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>
                  <Label>Email</Label>
                </FormLabel>
                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.email}
                    type="email"
                    {...field}
                  />
                </FormControl>
                {/* Feedback Message  */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password  */}
          <FormField
            aria-invalid={!!form.formState.errors.password}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>
                  <Label>Password</Label>
                </FormLabel>
                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.password}
                    type="password"
                    {...field}
                  />
                </FormControl>
                {/* Feedback Message  */}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {/* Footer  */}
      <footer className="flex flex-col gap-[2.25rem] pt-6">
        <Button
          type="submit"
          form="login-form"
          className="w-full"
          disabled={
            isPending || (!form.formState.isValid && form.formState.isSubmitted)
          }
        >
          {isPending ? "Login..." : "Login"}
        </Button>
        {/* Text */}
        <p className="text-center align-middle text-sm font-medium text-gray-500">
          Don&apos;t have an account?
          <Link
            href={"/register"}
            className="align-middle text-sm font-medium text-blue-600"
          >
            Create yours
          </Link>
        </p>
      </footer>
    </section>
  );
}
