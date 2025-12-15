import { cn } from "@/lib/tailwind-merge";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder="enter phone number"
        className={cn(
          "h-[2.875rem] border border-gray-200 align-middle text-sm  gap-[0.625rem]  p-[0.625rem] file:border-0   file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm placeholder:align-middle focus-visible:outline-none focus-visible:border-blue-600 disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-600",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
