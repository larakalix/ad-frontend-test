export type ApiResponse<T> = {
    data: T;
    message: string;
    status: number;
    totalPages?: number;
    currentPage?: number;
};
