"use client";

import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function UserInfo() {
  return (
    <section className="flex items-center justify-between">
      {/* User info  */}
      <div className="flex gap-[0.625rem]">
        {/* Avatar  */}
        <Image
          src="/assets/images/avatar.png"
          alt="avatar"
          width={54}
          height={54}
          className="border border-blue-600"
        />
        {/* info  */}
        <div className="flex flex-col justify-center">
          {/* Name  */}
          <p className="text-base font-medium text-blue-600">FirstName</p>
          {/* Email  */}
          <p className="text-sm font-normal text-gray-500">
            user-email@example.com
          </p>
        </div>
      </div>
      {/* Menu  */}
      <div className="flex size-7 items-center justify-center gap-[0.625rem]">
        {/* lucide/ellipsis-vertical icon  */}
        <EllipsisVertical
          className="size-[1.125rem] text-gray-500"
          strokeWidth={0.94}
        />
      </div>
    </section>
  );
}
