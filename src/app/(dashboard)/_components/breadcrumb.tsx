"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function Breadcrumbs() {
  const pathUrl = usePathname();
  const segments = pathUrl
    .split("/")
    .filter((segment) => Boolean(segment))
    .filter((segment) => segment !== "diplomas");
  console.log(segments);
  return (
    <Breadcrumb className="bg-white">
      <BreadcrumbList className="gap-[0.625rem] p-4">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/diplomas"
              className="text-sm font-normal capitalize text-gray-400 hover:text-gray-400"
            >
              home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator>
                <SlashIcon className="text-gray-400" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize text-blue-600">
                    {segment.replace(/-/g, " ")}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="text-sm font-normal capitalize text-gray-400"
                    >
                      {segment.replace(/-/g, " ")}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
