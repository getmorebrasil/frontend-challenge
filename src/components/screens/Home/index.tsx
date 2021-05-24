import { useHistory } from "react-router";
import { Button } from "../../atoms";
import { Header, Footer } from "../../molecules";
import { PopularMovies, MoreMovies } from "../../organisms";

import { Container, ShowCase, Title, LeftSide } from "./styles";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Header />

      <Container>
        <ShowCase imagePath="/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg">
          <LeftSide>
            <Title>Mulher-Maravilha 1984 (2020)</Title>
            <h3>Sinopse</h3>
            <h4>
              Em 1984, Diana Prince entra em conflito com dois inimigos
              formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto r
              eencontra misteriosamente com seu antigo interesse amoroso Steve
              Trevor.
            </h4>
          </LeftSide>

          <Button
            text="Watch Now"
            handleAction={() => history.push("/detail")}
          />
        </ShowCase>

        <PopularMovies />
        <MoreMovies />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
