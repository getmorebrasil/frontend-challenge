import { useContext } from 'react';
import { GenreContext } from "../contexts/genre";
import { IGenreContextData } from "../libs/interfaces/contexts";

export default function useGenre(): IGenreContextData {
  const context = useContext(GenreContext);

  if (!context) {
    throw new Error("useGenre must be used within an GenreProvider");
  }

  return context;
}
