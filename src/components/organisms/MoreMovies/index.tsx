import { Button, Categories } from "../../atoms";
import { Classification } from "../../molecules";

import {
  Container,
  Movie,
  MoviePoster,
  CenterContent,
  RightSide,
} from "./styles";

const PopularMovies: React.FC = () => {
  return (
    <Container>
      <h2>More Movies</h2>
      <Movie>
        <MoviePoster
          src={
            "https://image.tmdb.org/t/p/w342/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg"
          }
        />
        <CenterContent>
          <h2>Godzilla vs. Kong</h2>
          <h3>Sinopse</h3>
          <p>
            Em uma época em que os monstros andam na Terra, a luta da humanidade
            por seu futuro coloca Godzilla e Kong em rota de colisão que verá as
            duas forças mais poderosas da natureza no planeta se confrontarem em
            uma batalha espetacular para as idades. Enquanto Monarch embarca em
            uma missão perigosa...
          </p>
        </CenterContent>
        <RightSide>
          <Categories fontSize={1.6}>Ficção científica, Ação, Drama</Categories>
          <Classification classification={6.7} />

          <Button
            text="Get Details"
            handleAction={() => console.log("Getting details...")}
          />

          <h5>
            Director <span>Simon McQuoid</span>
          </h5>
        </RightSide>
      </Movie>

      <Movie>
        <MoviePoster
          src={
            "https://image.tmdb.org/t/p/w342/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg"
          }
        />
        <CenterContent>
          <h2>Godzilla vs. Kong</h2>
          <h3>Sinopse</h3>
          <p>
            Em uma época em que os monstros andam na Terra, a luta da humanidade
            por seu futuro coloca Godzilla e Kong em rota de colisão que verá as
            duas forças mais poderosas da natureza no planeta se confrontarem em
            uma batalha espetacular para as idades. Enquanto Monarch embarca em
            uma missão perigosa...
          </p>
        </CenterContent>
        <RightSide>
          <p>Ficção científica, Ação, Drama</p>

          <Classification classification={6.7} />

          <Button
            text="Get Details"
            handleAction={() => console.log("Getting details...")}
          />

          <h5>
            Director <span>Simon McQuoid</span>
          </h5>
        </RightSide>
      </Movie>
    </Container>
  );
};

export default PopularMovies;
