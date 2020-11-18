export interface Pagination {
  currentPage: number;
  itemsPerPages: number;
  totalItems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
