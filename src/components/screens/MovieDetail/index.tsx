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

const MovieDetail: React.FC = () => {
  return (
    <Container>
      <Header withBackAction />

      <ShowCase imagePath="/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg">
        <section>
          <MoviePoster
            src="https://image.tmdb.org/t/p/w500/4BSuFpQ2gd2WtO5ZK1fMjaMPMRc.jpg"
            alt="Poster do Filme: Nome do filme"
          />
        </section>

        <RightSide>
          <Title>Mulher-Maravilha 1984 (2020)</Title>
          <MainInfo>
            <div>
              <Categories fontSize={1.6}>
                Ficção científica, Ação, Drama
              </Categories>

              <Classification classification={8.7} />
            </div>

            <h5>
              Released at <span>15/04/2021 (BR)</span> - Movie time{" "}
              <span>1h 50m</span>
            </h5>

            <h6>
              Director <span>Simon McQuoid</span>
            </h6>
          </MainInfo>

          <h3>
            Situação <span>Lançado</span> | Idioma original <span>Inglês</span>{" "}
            | Orçamento <span>$20,000,000.00</span> | Receita{" "}
            <span>$76,706,000.00</span>
          </h3>
          <h4>
            Em 1984, Diana Prince entra em conflito com dois inimigos
            formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto r eencontra
            misteriosamente com seu antigo interesse amoroso Steve Trevor.
          </h4>

          <Button
            text="Watch Now"
            handleAction={() => console.log("Watching...")}
          />
        </RightSide>
      </ShowCase>

      <StarringRoles />

      <Footer />
    </Container>
  );
};

export default MovieDetail;
