import { useContext } from 'react';
import { MovieContext } from "../contexts/movie";
import { IMovieContextData } from "../libs/interfaces/contexts";

export default function useMovie(): IMovieContextData {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovie must be used within an MovieProvider");
  }

  return context;
}
