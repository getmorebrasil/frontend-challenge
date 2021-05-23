import { Button } from "../../atoms";
import { Stars } from "../../molecules";

import {
  Container,
  Movie,
  MoviePoster,
  CenterContent,
  Classification,
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
          <p>Ficção científica, Ação, Drama</p>

          <Classification>
            <p>Classification</p>
            <Stars classification={8.7} />
          </Classification>

          <Button
            text="Get Details"
            isLoading={false}
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

          <Classification>
            <p>Classification</p>
            <Stars classification={6.7} />
          </Classification>

          <Button
            text="Get Details"
            isLoading={false}
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
