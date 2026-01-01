import { getExams } from "@/lib/apis/exam.api";
import { useQuery } from "@tanstack/react-query";

export default function ExamsList() {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: getExams,
  });
  return <div>ExamsList</div>;
}
