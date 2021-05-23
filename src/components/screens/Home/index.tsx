import { Button } from "../../atoms";
import { Header, Footer } from "../../molecules";
import { PopularMovies, MoreMovies } from "../../organisms";

import { Container, ShowCase, Title, LeftSide } from "./styles";

const Home: React.FC = () => {
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
            isLoading={false}
            handleAction={() => console.log("Watching...")}
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
