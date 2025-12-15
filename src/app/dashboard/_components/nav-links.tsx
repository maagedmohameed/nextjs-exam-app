"use client";

import { GraduationCap, UserRound } from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/tailwind-merge";

const navLinks = [
  {
    name: "Diplomas",
    href: "/diplomas",
    icon: GraduationCap,
  },
  {
    name: "Account Settings",
    href: "/account",
    icon: UserRound,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex h-auto flex-col gap-[0.625rem]">
      {/* Items  */}
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={cn(
            "flex gap-[0.625rem] p-4 text-blue-100",
            pathname === link.href && "border border-blue-500 bg-blue-100",
          )}
        >
          {/* Icon */}
          <link.icon
            className={cn(
              "h-6 w-6 text-gray-500",
              pathname === link.href && "text-blue-600",
            )}
            strokeWidth={"1.25px"}
          />
          {/* Text */}
          <Link
            href={link.href}
            className={cn(
              "content-center text-base font-normal text-gray-500",
              pathname === link.href && "text-blue-600",
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
