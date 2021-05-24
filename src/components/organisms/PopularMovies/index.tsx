import { Container, MoviesList, MovieCard, Overlay } from "./styles";

import { Categories } from "../../atoms";
import { Classification } from "../../molecules";

const PopularMovies: React.FC = () => {
  return (
    <Container>
      <h2>Populars</h2>
      <MoviesList>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <Categories>Ficção científica, Ação, Drama</Categories>
            <Classification classification={8} starsSize={1.2} />
          </Overlay>
        </MovieCard>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <Categories>Ficção científica, Ação, Drama</Categories>
            <Classification classification={8} starsSize={1.2} />
          </Overlay>
        </MovieCard>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <Categories>Ficção científica, Ação, Drama</Categories>
            <Classification classification={8} starsSize={1.2} />
          </Overlay>
        </MovieCard>
        <div>&copy;</div>
      </MoviesList>
    </Container>
  );
};

export default PopularMovies;
