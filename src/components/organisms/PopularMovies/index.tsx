import { useCallback } from "react";
import { useHistory } from "react-router";
import { Classification } from "../../molecules";
import { truncateString } from "../../../helpers";
import { Categories, ContentOffset } from "../../atoms";
import { PopularMoviesProps } from "../../../libs/types/organisms";
import { Container, MoviesList, MovieCard, Overlay } from "./styles";

const PopularMovies: React.FC<PopularMoviesProps> = ({ data }) => {
  const history = useHistory();

  const handleGetDetail = useCallback(
    (movieId: number) => {
      history.push({
        pathname: "/detail",
        state: { movieId },
      });
    },
    [history]
  );

  return (
    <Container>
      <h2>Populars</h2>

      <MoviesList>
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            imagePath={movie.poster_path}
            onClick={() => handleGetDetail(movie.id)}
          >
            <Overlay>
              <Categories>
                {truncateString(movie.formattedGenres, 35)}
              </Categories>
              <Classification
                classification={movie.vote_average}
                starsSize={1.2}
              />
            </Overlay>
          </MovieCard>
        ))}
        <ContentOffset />
      </MoviesList>
    </Container>
  );
};

export default PopularMovies;
