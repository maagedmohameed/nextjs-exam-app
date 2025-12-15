"use client";

import * as React from "react";
import { cn } from "@/lib/tailwind-merge";

const FeedbackMessage = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={cn("align-middle text-sm font-normal text-red-600", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
FeedbackMessage.displayName = "FeedbackMessage";

export { FeedbackMessage };
