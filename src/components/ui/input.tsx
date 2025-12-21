"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, name, ...props }, ref) => {
    const [inputType, setInputType] = React.useState<
      React.HTMLInputTypeAttribute | undefined
    >(type);
    // const [phoneNumber, setPhoneNumber] = React.useState("");

    /*  Phone Type */
    // if (type === "phone") {
    //   return (
    //     <div className="relative">
    //       <PhoneInput
    //         className="peer"
    //         defaultCountry="EG"
    //         initialValueFormat="national"
    //         international
    //       />

    //       <span
    //         className={`absolute left-1/3 top-4 text-sm font-normal text-gray-400 ${phoneNumber ? "hidden" : "block"}`}
    //       >
    //         1012345678
    //       </span>
    //     </div>
    //   );
    // }
    /*  OTP Type */
    // if (type === "otp") {
    //   return (
    //     <InputOTP maxLength={6}>
    //       <InputOTPGroup>
    //         <InputOTPSlot index={0} />
    //         <InputOTPSlot index={1} />
    //         <InputOTPSlot index={2} />
    //         <InputOTPSlot index={3} />
    //         <InputOTPSlot index={4} />
    //         <InputOTPSlot index={5} />
    //       </InputOTPGroup>
    //     </InputOTP>
    //   );
    // }

    return (
      <span className="relative">
        <input
          required={props.required}
          type={inputType}
          placeholder={
            type === "password"
              ? "********"
              : type === "email"
                ? "user@example.com"
                : name === "username"
                  ? "user123"
                  : name === "firstName"
                    ? "Ahmed"
                    : name === "lastName"
                      ? "Abdullah"
                      : "1012345678"
          }
          className={cn(
            "h-[2.875rem] w-full gap-[0.625rem] border border-gray-200 p-[0.625rem] align-middle text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:align-middle placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 placeholder:text-muted-foreground focus-visible:border-blue-600 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus-visible:border-red-600",
            className,
          )}
          ref={ref}
          {...props}
        />
        {inputType === "password" ? (
          <EyeOff
            className="absolute right-[0.625rem] top-0 text-gray-400"
            strokeWidth="0.94px"
            size={18}
            onClick={() => setInputType("text")}
          />
        ) : inputType === "text" ? (
          <Eye
            className="absolute right-[0.625rem] top-0 text-gray-400"
            strokeWidth="0.94px"
            size={18}
            onClick={() => setInputType("password")}
          />
        ) : null}
      </span>
    );
  },
);
Input.displayName = "Input";

export { Input };
{
  /* <Eye
              className="absolute top-1/4 right-3"
              onClick={() =>
                setInputType(inputType === "password" ? "text" : "password")
              }
            /> */
}

// <EyeOff
//   className="absolute top-1/4 right-3"
//   onClick={() =>
//     setInputType(inputType === "password" ? "text" : "password")
//   }
// />
