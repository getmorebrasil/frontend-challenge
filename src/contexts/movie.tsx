import React, { useCallback, useEffect, useState } from "react";
import { useGenre } from "../hooks";
import {
  IMovie,
  IShowCaseIMovie,
  IMovieContextData,
} from "../libs/interfaces/contexts";
import { IResponse } from "../libs/interfaces/services";
import { movieService } from "../services";

export const MovieContext = React.createContext<IMovieContextData>(
  {} as IMovieContextData
);

const MovieProvider: React.FC = ({ children }) => {
  const { getGenres, formatGenres } = useGenre();

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [populars, setPopulars] = useState<IMovie[]>([]);
  const [showCaseMovie, setShowCaseMovie] = useState<IShowCaseIMovie>(
    {} as IShowCaseIMovie
  );

  const getShowCaseMovie = useCallback(async (): Promise<
    IResponse<IShowCaseIMovie>
  > => {
    const response = await movieService.getShowCaseMovie();

    if (response.data) setShowCaseMovie(response.data);

    return response;
  }, []);

  const getMovie = useCallback((id): IMovie => {
    setLoading(true);

    let storagedMovies = localStorage.getItem("@getmovies:movies");
    let storagedPopulars = localStorage.getItem("@getmovies:populars");

    let result = {} as IMovie;

    if (storagedMovies) {
      result = JSON.parse(storagedMovies).find(
        (movie: IMovie) => movie.id === id
      );

      if (result) return result;
    }

    if (storagedPopulars) {
      result = JSON.parse(storagedPopulars).find(
        (movie: IMovie) => movie.id === id
      );
    }

    return result;
  }, []);

  const extractDirectorName = useCallback((movie: IMovie) => {
    const director = movie.credits?.crew.find(
      (item) => item.job === "Director"
    );

    if (director) return { ...movie, directorName: director.name };

    return movie;
  }, []);

  const getMovieCredits = useCallback(
    async (movies: IMovie[]): Promise<IMovie[]> => {
      const moviesWithCredits = await Promise.all(
        movies.map(async (movie) => {
          const { data } = await movieService.getMovieCredits(movie.id);

          const updatedMovie = extractDirectorName({ ...movie, credits: data });

          return updatedMovie;
        })
      );

      return moviesWithCredits;
    },
    [extractDirectorName]
  );

  const prepareMovies = useCallback(
    async (movies?: IMovie[]) => {
      if (movies) {
        const responseData = await getMovieCredits(
          movies.map((movie) => {
            const formattedGenres = formatGenres(movie.genre_ids);

            return { ...movie, formattedGenres };
          })
        );

        return responseData;
      }
    },
    [formatGenres, getMovieCredits]
  );

  const getPopulars = useCallback(async (): Promise<IResponse<IMovie[]>> => {
    const response = await movieService.getPopulars();

    const preparedMovies = await prepareMovies(response.data);

    if (preparedMovies) setPopulars(preparedMovies);
    localStorage.setItem("@getmovies:populars", JSON.stringify(preparedMovies));

    return response;
  }, [prepareMovies]);

  const getMovies = useCallback(async (): Promise<IResponse<IMovie[]>> => {
    const response = await movieService.getMovies();

    const preparedMovies = await prepareMovies(response.data);

    if (preparedMovies) setMovies(preparedMovies);
    localStorage.setItem("@getmovies:movies", JSON.stringify(preparedMovies));

    return response;
  }, [prepareMovies]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        getMovie,
        populars,
        getMovies,
        setLoading,
        getPopulars,
        showCaseMovie,
        getShowCaseMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
