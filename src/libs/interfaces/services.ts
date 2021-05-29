export interface IResponse<Data> {
  success: boolean
  status: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any
  data?: Data
}

export interface ITheMovieDBListResponse<Data> {
  page: number
  results: Data[]
  status: number
  total_pages: number
  total_results: number
}
