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
import { RegisterFormFields } from "@/lib/types/auth";
import { registerSchema } from "@/lib/schemas/auth.schema";
import useRegister from "../_hooks/use-register";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import FeedbackForm from "../../_components/feedback-form";
import { PhoneInput } from "@/components/ui/phone-input";

export default function RegisterForm() {
  // Mutation
  const { isPending, error, register } = useRegister();

  // Form
  const form = useForm<RegisterFormFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<RegisterFormFields> = async (values) => {
    register(values);
    console.log(values);
  };

  return (
    <section className="flex w-[28.25rem] flex-col gap-4">
      {/* Header  */}
      <header className="flex flex-col justify-center gap-[0.625rem] pb-6 font-inter text-[1.875rem] font-bold text-gray-800">
        Create Account
      </header>
      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="register-form">
          {/*  Name  */}
          <div className="flex h-[5.9375rem] items-center gap-[0.625rem]">
            {/* First name  */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>
                    <Label>First name</Label>
                  </FormLabel>
                  {/* Input Field */}
                  <FormControl>
                    <Input
                      aria-invalid={!!form.formState.errors.firstName}
                      {...field}
                    />
                  </FormControl>
                  {/* Feedback Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Last name  */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>
                    <Label>Last name</Label>
                  </FormLabel>
                  {/* Input Field */}
                  <FormControl>
                    <Input
                      aria-invalid={!!form.formState.errors.lastName}
                      {...field}
                    />
                  </FormControl>
                  {/* Feedback Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* User name  */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>
                  <Label>Username</Label>
                </FormLabel>
                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.username}
                    {...field}
                  />
                </FormControl>
                {/* Feedback Message  */}
                <FormMessage />
              </FormItem>
            )}
          />
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
          {/* Phone  */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>
                  <Label>Phone</Label>
                </FormLabel>
                {/* Input Field */}
                <FormControl>
                  <div className="relative">
                    <PhoneInput
                      //   type="number"
                      {...field}
                      aria-invalid={!!form.formState.errors.phone}
                      value={field.value}
                      onChange={field.onChange}
                      className="peer"
                      defaultCountry="EG"
                      initialValueFormat="national"
                      international
                    />

                    <span
                      className={`absolute left-1/3 top-4 text-sm font-normal text-gray-400 ${field.value ? "hidden" : "block"}`}
                    >
                      1012345678
                    </span>
                  </div>
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
          {/* Confirm Password  */}
          <FormField
            aria-invalid={!!form.formState.errors.password}
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>
                  <Label>Confirm Password</Label>
                </FormLabel>
                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={!!form.formState.errors.rePassword}
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
        {error && <FeedbackForm errorMsg={error.message} />}
        <Button
          type="submit"
          form="register-form"
          className="w-full"
          disabled={
            isPending || (!form.formState.isValid && form.formState.isSubmitted)
          }
        >
          {isPending ? "Register..." : "Register"}
        </Button>
        {/* Text */}
        <p className="text-center align-middle text-sm font-medium text-gray-500">
          Already have an account?
          <Link
            href={"/login"}
            className="align-middle text-sm font-medium text-blue-600"
          >
            Login
          </Link>
        </p>
      </footer>
    </section>
  );
}
