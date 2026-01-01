"use client";

import {
  BookOpenCheck,
  ChevronLeft,
  CircleQuestionMark,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const router = useRouter();
  let title = "Home";
  let Icon = CircleQuestionMark;

  if (segments.length === 1) {
    if (segments[0] === "diplomas") {
      title = "diplomas";
      Icon = GraduationCap;
    }
    if (segments[0] === "account") {
      title = "account Settings";
      Icon = UserRound;
    }
  } else if (segments.length === 2) {
    title = "exams";
    Icon = BookOpenCheck;
  } else if (segments.length === 3) {
    title = "questions";
    Icon = CircleQuestionMark;
  }
  // functions
  const backHandler = () => router.back();
  return (
    <header className="flex items-center gap-4 bg-blue-600 p-4">
      {segments[0] !== "diplomas" && (
        <button
          className="flex h-full w-[2.375rem] items-center justify-center gap-[0.625rem] border border-blue-600 bg-white"
          onClick={backHandler}
        >
          <ChevronLeft size={24} strokeWidth={1.25} className="text-blue-600" />
        </button>
      )}
      {/* Lucide/icon */}
      <Icon size={45} strokeWidth={2.5} className="text-white" />
      {/* Text */}
      <p className="font-inter text-[2rem] font-semibold capitalize leading-none text-white">
        {title}
      </p>
    </header>
  );
}
