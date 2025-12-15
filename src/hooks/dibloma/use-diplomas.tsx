import { useQuery } from "@tanstack/react-query";

export const useDiplomas = () => {
  const {
    data: payload,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["diplomas"],
    queryFn: getDiplomas,
  });
  return {
    payload: isLoading,
    isError,
  };
};
