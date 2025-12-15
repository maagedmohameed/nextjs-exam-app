import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.625rem] whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-200  disabled:text-gray-400 [&_svg]:pointer-events-none  [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-600 hover:bg-red-700 text-white",
        outline:
          "border border-blue-600 bg-blue-50 hover:bg-blue-100 text-gray-800 disabled:border-none",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        icon: "bg-blue-700 text-white hover:bg-blue-800 gap-2",
        trigger:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-[3rem] w-[13.5rem]",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        trigger: "w-1/12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon: Icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
