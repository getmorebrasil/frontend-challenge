import {
  Container,
  MoviesList,
  MovieCard,
  Overlay,
  Classification,
} from "./styles";

import { Stars } from "../../molecules";

const PopularMovies: React.FC = () => {
  return (
    <Container>
      <h2>Populars</h2>
      <MoviesList>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <p>Ficção científica, Ação, Drama</p>
            <Classification>
              <p>Classification</p>
              <Stars size={1.2} classification={8} />
            </Classification>
          </Overlay>
        </MovieCard>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <p>Ficção científica, Ação, Drama</p>
            <Classification>
              <p>Classification</p>
              <Stars size={1.2} classification={10} />
            </Classification>
          </Overlay>
        </MovieCard>
        <MovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <p>Ficção científica, Ação, Drama</p>
            <Classification>
              <p>Classification</p>
              <Stars size={1.2} classification={5} />
            </Classification>
          </Overlay>
        </MovieCard>
        <div>offset to scale last</div>
      </MoviesList>
    </Container>
  );
};

export default PopularMovies;
