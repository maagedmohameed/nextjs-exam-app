declare type SuccessfulResponse<T> = {
  message: string;
} & T;
declare type ErrorResponse = {
  message: string;
  code: number;
};
declare type PaginatedData<T> = {
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  [key: string]: T;
};
declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse;
