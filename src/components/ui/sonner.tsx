"use client";

import {
  Check,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group flex items-center"
      icons={{
        success: (
          <Check
            className="size-[1.125rem] text-emerald-500"
            strokeWidth={1.25}
          />
        ),
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group gap-[0.625rem] w-[25rem] h-[2.9375rem] toast group-[.toaster]:bg-gray-800 group-[.toaster]:text-white group-[.toaster]:text-sm group-[.toaster]:font-medium group-[.toaster]:rounded-none group-[.toaster]:align-middle drop-shadow-[0_6px_13.1px_rgba(0,0,0,0.10)]",
          // description: "group-[.toast]:text-muted-foreground",
          // actionButton:
          //   "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          // cancelButton:
          //   "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
