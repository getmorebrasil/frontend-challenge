import ClipLoader from "react-spinners/ClipLoader";
import { Header, Footer } from "../../molecules";
import { StarringRoles } from "../../organisms";
import { Classification } from "../../molecules";
import { Categories } from "../../atoms";

import {
  Container,
  ShowCase,
  Title,
  MainInfo,
  MoviePoster,
  RightSide,
} from "./styles";
import { Button } from "../../atoms";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useMovie, useTheme } from "../../../hooks";
import { IMovie } from "../../../libs/interfaces/contexts";
import { truncateString } from "../../../helpers";

const MovieDetail: React.FC = () => {
  const { theme } = useTheme();
  const { getMovie } = useMovie();
  const history = useHistory<{ movieId: number }>();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    setMovie(getMovie(history.location.state.movieId));

    setLoading(false);
  }, [getMovie, history.location, history.location.state.movieId]);

  return (
    <Container>
      <Header withBackAction />

      {loading ? (
        <ClipLoader size={20} color={theme.colors.neutralColor} />
      ) : (
        <>
          <ShowCase>
            <section>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Poster do Filme: ${movie.title}`}
              />
            </section>

            <RightSide>
              <Title>{truncateString(movie.title, 28)}</Title>
              <MainInfo>
                <div>
                  <Categories fontSize={1.6}>
                    {truncateString(movie.formattedGenres, 32)}
                  </Categories>

                  <Classification classification={8.7} />
                </div>
              </MainInfo>

              <h3>
                Director{" "}
                <span>
                  {movie.directorName ? movie.directorName : "Não encontrado"}
                </span>{" "}
                | Idioma original{" "}
                <span>
                  {movie.original_language
                    ? movie.original_language
                    : "Não encontrado"}
                </span>{" "}
                | Released at <span>{movie.release_date}</span>
              </h3>

              <h4>{truncateString(movie.overview, 340)}</h4>

              <Button
                text="Watch Now"
                handleAction={() => history.push("/watching")}
              />
            </RightSide>
          </ShowCase>

          {movie.credits && <StarringRoles data={movie.credits.cast} />}
        </>
      )}

      <Footer />
    </Container>
  );
};

export default MovieDetail;
