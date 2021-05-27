export interface IResponse<Data> {
  success: boolean;
  status: number;
  errors?: any;
  data?: Data;
}

export interface ITheMovieDBListResponse<Data> {
  page: number;
  results: Data[]
  status: number;
  total_pages: number;
  total_results: number;
}
