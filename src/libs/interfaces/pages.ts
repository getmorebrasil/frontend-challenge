import { IMovie, IShowCaseIMovie } from './contexts'

export interface IHomeProps {
  formattedShowCase: IShowCaseIMovie
  populars: IMovie[]
  movies: IMovie[]
}

export interface ISignIn {
  email: string
  password: string
}

export interface ISignUp {
  email: string
  password: string
  confirmPassword: string
}

export interface IMovieProps {
  movie: IMovie
  formattedMovie: IMovie
}
