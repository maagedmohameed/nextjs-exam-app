"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { forgotPasswordSchema } from "@/lib/schemas/auth.schema";
import { ForgotPasswordFormFields } from "@/lib/types/auth";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import useForgotPassword from "../_hooks/use-forgot-password";
// import useVerifyResetCode from "../_hooks/use-verify-reset-code";
// import useResetPassword from "@/hooks/auth/forgot-password/use-reset-password";

export const MultiStepForm = () => {
  // Mutation
  // const {
  //   isPending: isForgotPending,
  //   error: forgotPasswordError,
  //   forgotPassword,
  // } = useForgotPassword();
  // const {
  //   isPending: isVerifyPending,
  //   error: verifyResetCodeError,
  //   verifyResetCode,
  // } = useVerifyResetCode();
  // const {
  //   isPending: isResetPending,
  //   error: resetPasswordError,
  //   resetPassword,
  // } = useResetPassword();

  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<ForgotPasswordFormFields>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      resetCode: "",
      password: "",
      newPassword: "",
    },
    mode: "onChange",
  });
  const email = form.getValues("email");

  // Variables
  const steps = [
    {
      title: "Forgot Password",
      description: "Don’t worry, we will help you recover your account.",
      fields: ["email"],
    },
    {
      title: "Verify OTP",
      description: (
        <div className="flex flex-col">
          <p className="text-base font-normal text-gray-500">
            Please enter the 6-digits code we have sent to:
          </p>
          <div className="flex">
            {email}
            <span
              className="ml-2 cursor-pointer align-middle text-sm font-medium text-blue-600 underline"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              Edit
            </span>
          </div>
        </div>
      ),
      fields: ["resetCode"],
    },
    {
      title: "Create a New Password",
      description: "Create a new strong password for your account.",

      fields: ["password", "newPassword"],
    },
  ];
  const currentForm = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  //  Handlers
  const handleNextButton = async () => {
    const currentFields = steps[currentStep].fields;

    const isValid = await form.trigger(currentFields);

    if (isValid && !isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBackButton = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  //  Functions

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = async (values) => {
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    // toast.success("Form successfully submitted");

    console.log(values);
  };

  const renderCurrentStepContent = () => {
    switch (currentStep) {
      case 0: {
        return (
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                {/* Label */}
                <FormLabel>Email</FormLabel>

                {/* Input Field */}
                <FormControl>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="email"
                    {...field}
                  />
                </FormControl>

                {/* Feedback Message  */}
                <FormMessage />
              </FormItem>
            )}
          />
        );
      }

      case 1: {
        return (
          <div className="flex flex-col items-center gap-6">
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field, fieldState }) => (
                <FormItem data-invalid={fieldState.invalid}>
                  {/* Input Field */}
                  <FormControl>
                    <InputOTP
                      aria-invalid={fieldState.invalid}
                      {...field}
                      maxLength={6}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>

                  {/* Feedback Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm font-medium text-gray-500">
              You can request another code in: 60s
            </p>
          </div>
        );
      }

      case 2: {
        return (
          <>
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem data-invalid={fieldState.invalid}>
                  {/* Label */}
                  <FormLabel>New Password</FormLabel>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      aria-invalid={fieldState.invalid}
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  {/* Feedback Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field, fieldState }) => (
                <FormItem data-invalid={fieldState.invalid}>
                  {/* Label */}
                  <FormLabel>Confirm New Password</FormLabel>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      aria-invalid={fieldState.invalid}
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  {/* Feedback Message  */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      }

      default: {
        return null;
      }
    }
  };

  return (
    <section className="flex w-[28.25rem] flex-col gap-10">
      {/* Back Container */}
      {currentStep > 0 && !isLastStep && (
        <div className="flex flex-col gap-[0.625rem]">
          {/* Back button */}
          <button
            className="flex size-10 items-center justify-center gap-[0.625rem] border-[0.09375rem] border-gray-200"
            onClick={handleBackButton}
          >
            {/* lucide/move-left */}
            <MoveLeft strokeWidth={1.5} className="text-gray-800" size={24} />
          </button>
        </div>
      )}

      {/* Form  */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          id="multi-step-form"
          className="flex flex-col gap-4"
        >
          {/* Header */}
          <header className="flex flex-col justify-center gap-[0.625rem] pb-6">
            {/* Title text  */}
            <p className="font-inter text-[1.875rem] font-bold leading-none text-gray-800">
              {currentForm.title}
            </p>
            {/* Description Text  */}
            <div className="text-base font-normal text-gray-500">
              {currentForm.description}
            </div>
          </header>
          {/* Field */}
          <div className="flex flex-col gap-10">
            {/* OTP  */}
            {renderCurrentStepContent()}
          </div>
          {/* Footer  */}
          <footer className="flex flex-col justify-center gap-9 pt-6">
            {/* Forgot password button */}
            <Button
              form="multi-step-form"
              className="w-full gap-[0.625rem]"
              type={isLastStep ? "submit" : "button"}
              onClick={!isLastStep ? handleNextButton : undefined}
            >
              {!currentStep
                ? "Continue"
                : isLastStep
                  ? "Reset Password"
                  : "Verify Code"}
              {!currentStep && (
                <MoveRight className="size-4" strokeWidth={1.5} />
              )}
            </Button>
            {/* Text */}
            <p className="text-center text-sm font-medium text-gray-500">
              Don&apos;t have an account?
              <Link
                href={"/register"}
                className="align-middle text-sm font-medium text-blue-600"
              >
                Create yours
              </Link>
            </p>
          </footer>
        </form>
      </Form>
    </section>
  );
};
