

export interface IResponse <T> {
    success: boolean,
    data: T,
    message: string
    status: number
    accessToken?: string
    metadata?: IPaginationMetadata
}

export interface IPaginationMetadata {
    hasNextPage: boolean;
    toalRecords: number;
    totalPages: number;
    page: number;
    prevPage: number | null;
    nextPage: number | null;
  }
  