import React, { useCallback, useState } from "react";
import { IGenreContextData, IGenre } from "../libs/interfaces/contexts";
import { IResponse } from "../libs/interfaces/services";
import { genreService } from "../services";

export const GenreContext = React.createContext<IGenreContextData>(
  {} as IGenreContextData
);

const GenreProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<IGenre[]>([]);

  const getGenres = useCallback(async (): Promise<IResponse<IGenre[]>> => {
    const response = await genreService.getGenres();

    if (response.data) setGenres(response.data);

    return response;
  }, []);

  const formatGenres = useCallback(
    (genreIds: number[]) => {
      let result = "";

      if (genres.length > 0) {
        result = genres
          ?.map((genre) => {
            return genreIds.includes(genre.id) && genre.name;
          })
          .filter((genre) => Boolean(genre) === true)
          .join(", ");
      }

      return result;
    },
    [genres]
  );

  return (
    <GenreContext.Provider
      value={{
        genres,
        loading,
        getGenres,
        setLoading,
        formatGenres,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
