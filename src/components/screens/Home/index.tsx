import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { truncateString } from "../../../helpers";
import { useMovie, useTheme } from "../../../hooks";
import { Button } from "../../atoms";
import { Header, Footer } from "../../molecules";
import { PopularMovies, MoreMovies } from "../../organisms";
import { Container, ShowCase, Title, LeftSide } from "./styles";

const Home: React.FC = () => {
  const history = useHistory();
  const { theme } = useTheme();
  const {
    movies,
    loading,
    populars,
    getMovies,
    setLoading,
    getPopulars,
    showCaseMovie,
    getShowCaseMovie,
  } = useMovie();

  const loadShowCaseMovie = useCallback(async () => {
    await getShowCaseMovie();
  }, [getShowCaseMovie]);

  const loadPopulars = useCallback(async () => {
    await getPopulars();
  }, [getPopulars]);

  const loadMovies = useCallback(async () => {
    await getMovies();
  }, [getMovies]);

  useEffect(() => {
    loadMovies();
    loadPopulars();
    loadShowCaseMovie();
    setLoading(false);
  }, [loadPopulars, loadShowCaseMovie, loadMovies, setLoading]);

  return (
    <Container>
      <Header />
      {loading ? (
        <ClipLoader size={80} color={theme.colors.neutralColor} />
      ) : (
        <>
          <ShowCase imagePath={showCaseMovie.backdrop_path}>
            <LeftSide>
              <Title>{truncateString(showCaseMovie.title, 30)}</Title>
              <h3>Sinopse</h3>
              <h4>{truncateString(showCaseMovie.overview, 204)}</h4>
            </LeftSide>

            <Button
              text="Watch Now"
              handleAction={() => history.push("/watching")}
            />
          </ShowCase>

          <PopularMovies data={populars} />

          <MoreMovies data={movies} />
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Home;
