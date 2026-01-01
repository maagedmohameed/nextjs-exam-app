"use client";

import Link from "next/link";
import Image from "next/image";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { getInfiniteSubjects } from "@/lib/apis/subject.api";
import { ChevronDown } from "lucide-react";

export default function Diplomas() {
  // Query
  const {
    data: payload,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["subjects"],
    queryFn: ({ pageParam }) => getInfiniteSubjects(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.metadata?.currentPage === lastPage.metadata?.numberOfPages) {
        return undefined;
      }
      return lastPage.metadata?.currentPage + 1;
    },
  });
  // Vars
  const subjects = payload?.pages.flatMap((page) => page.subjects) ?? [];
  return (
    <InfiniteScroll
      dataLength={subjects.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      <ul className="flex flex-wrap items-center gap-[0.625rem]">
        {subjects.map(({ _id, icon, name }, idx) => (
          <Link href={`diplomas/${_id}`} key={idx}>
            <li className="padding-[0.625rem] relative flex h-[28rem] w-[21rem] flex-col justify-center gap-[0.625rem] rounded-none">
              <Image
                src={icon}
                quality={100}
                sizes="100vw, 100vh"
                style={{
                  objectFit: "fill",
                }}
                fill
                alt={name + "Image"}
              />
              <p>{name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </InfiniteScroll>
  );
}
