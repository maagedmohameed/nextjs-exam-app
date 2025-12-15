"use client";

import Link from "next/link";

import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import React from "react";

export function Breadcrumbs() {
  return (
    <Breadcrumb className="gap-[0.625rem] p-4">
      <BreadcrumbList>
        {/* {pathArray.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={"/" + pathArray.slice(0, index + 1).join("/")}
                  className="align-middle text-base font-normal text-gray-400"
                >
                  {item === "" ? "Home" : item}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathArray.length - 1 && (
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))} */}
        {/* {pathArray.length > 1 && (
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        )} */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
