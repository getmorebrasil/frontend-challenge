import { IResponse } from './services'

export interface IThemeContextData {
  toggleTheme(): void
  theme: ITheme
}

export interface ITheme {
  name: string
  colors: {
    primary: string
    secondary: string
    neutralColor: string
    darkNeutralColor: string
    contrastColor: string
    background: string
    border: string
    error: string
  }
}

export interface IUser {
  id: string | number
  email: string
}

export interface IAuth {
  user: IUser
  token: string
}

export interface ICredentials {
  email: string
  password: string
}

export interface IUserContextData {
  user: IUser
  loading: boolean
  setLoading(state: boolean): void
  createUser(userData: ICredentials): Promise<IResponse<IAuth>>
}

export interface IAuthContextData {
  loading: boolean
  isAuthenticated: boolean
  setLoading(state: boolean): void
  setIsAuthenticated(state: boolean): void
  createAuth(credentials: ICredentials): Promise<IResponse<IAuth>>
  logout(): void
}

export interface IMovie {
  id: number
  title: string
  status: string
  budget: number
  revenue: number
  genres: IGenre[]
  overview: string
  credits?: ICredits
  vote_count: number
  poster_path: string
  genre_ids: number[]
  release_date: string
  vote_average: number
  directorName?: string
  backdrop_path: string
  original_title: string
  formattedGenres: string
  original_language: string
}

export interface IGenre {
  id: number
  name: string
}

export interface ICredits {
  cast: ICast[]
  crew: ICrew[]
}

export interface ICast {
  id: number
  name: string
  character: string
  profile_path: string
  original_name: string
}

export interface ICrew {
  id: number
  job: string
  name: string
  credit_id: string
  profile_path: string
  original_name: string
}

export interface IShowCaseIMovie {
  id: number
  title: string
  overview: string
  genre_ids: number[]
  backdrop_path: string
}

export interface IMovieContextData {
  movies: IMovie[]
  loading: boolean
  populars: IMovie[]
  showCaseMovie: IShowCaseIMovie
  setLoading(state: boolean): void
  getMovies(): Promise<IResponse<IMovie[]>>
  getPopulars(): Promise<IResponse<IMovie[]>>
  getMovie(id: number): Promise<IResponse<IMovie>>
  getShowCaseMovie(): Promise<IResponse<IShowCaseIMovie>>
}

export interface IGenreContextData {
  genres: IGenre[]
  loading: boolean
  setLoading(state: boolean): void
  getGenres(): Promise<IResponse<IGenre[]>>
  formatGenres(genreIds: number[]): string
}
