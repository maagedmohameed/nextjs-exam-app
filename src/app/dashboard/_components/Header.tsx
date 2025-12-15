"use client";

import {
  BookOpenCheck,
  CircleQuestionMark,
  GraduationCap,
  LucideProps,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";

const pathnames: {
  [key: string]: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
} = {
  "/diplomas": {
    title: "Diplomas",
    icon: GraduationCap,
  },
  "/account": {
    title: "Account Settings",
    icon: UserRound,
  },
  "/diplomas/exams": {
    title: "Exams",
    icon: BookOpenCheck,
  },
  "/": {
    title: "Account Settings",
    icon: CircleQuestionMark,
  },
};

export default function Header() {
  const pathname = usePathname();
  const Icon = pathnames[pathname].icon;

  return (
    <header className="flex items-center gap-4 bg-blue-600 p-4">
      {/* lucide/graduation-cap */}
      <Icon className="h-8 w-8" />
      {/* Text */}
      <p className="font-inter text-[2rem] font-semibold leading-none">
        {pathnames[pathname].title}
      </p>
    </header>
  );
}
