"use client";
import { getExams } from "@/lib/apis/exam.api";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

export default function Exams() {
  // const queryClient = useQueryClient();
  const {
    data: payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["exams"],
    queryFn: ({ pageParam }) => getExams(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.metadata.currentPage === lastPage.metadata.numberOfPages) {
        return undefined;
      }
      return lastPage.metadata.currentPage + 1;
    },
  });
  // queryClient.cancelQueries({
  //   queryKey: ["exams"],
  // })
  return (
    <div>
      Exams
      {isLoading && <div>Loading...</div>}
      {payload?.pages.flatMap(page =>
        page.exams.map(exam => <div key={exam._id}>{exam.title}</div>)
      )}
      {isFetchingNextPage && <div>Fetching next page...</div>}
      {hasNextPage && (
        <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading more ..." : "Load More"}
        </button>
      )}
      {!hasNextPage && <div>No more exams</div>}
    </div>
  );
}
