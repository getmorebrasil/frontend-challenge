import { IMAGES } from "../../../constants";
import { Button } from "../../atoms";
import { Header, Footer } from "../../molecules";
import {
  Container,
  ShowCase,
  Title,
  LeftSide,
  PopularMovies,
  PopularMovieList,
  PopularMovieCard,
  Classification,
  Stars,
  Overlay,
  MoreMovies,
  Movie,
  MoviePoster,
  CenterContent,
  RightSide,
} from "./styles";

const Home: React.FC = () => {
  const starsCount = [1, 2, 3, 4, 5];

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

        <PopularMovies>
          <h2>Populars</h2>
          <PopularMovieList>
            <PopularMovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
              <Overlay>
                <p>Ficção científica, Ação, Drama</p>
                <Classification>
                  <p>Classification</p>
                  <Stars>
                    {starsCount.map(() => (
                      <img src={IMAGES.star} alt="Estrela de classificação" />
                    ))}
                  </Stars>
                </Classification>
              </Overlay>
            </PopularMovieCard>

            <PopularMovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
              <Overlay>
                <p>Ficção científica, Ação, Drama</p>
                <Classification>
                  <p>Classification</p>
                  <Stars>
                    {starsCount.map(() => (
                      <img src={IMAGES.star} alt="Estrela de classificação" />
                    ))}
                  </Stars>
                </Classification>
              </Overlay>
            </PopularMovieCard>

            <PopularMovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
              <Overlay>
                <p>Ficção científica, Ação, Drama</p>
                <Classification>
                  <p>Classification</p>
                  <Stars>
                    {starsCount.map(() => (
                      <img src={IMAGES.star} alt="Estrela de classificação" />
                    ))}
                  </Stars>
                </Classification>
              </Overlay>
            </PopularMovieCard>

            <PopularMovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
              <Overlay>
                <p>Ficção científica, Ação, Drama</p>
                <Classification>
                  <p>Classification</p>
                  <Stars>
                    {starsCount.map(() => (
                      <img src={IMAGES.star} alt="Estrela de classificação" />
                    ))}
                  </Stars>
                </Classification>
              </Overlay>
            </PopularMovieCard>

            <PopularMovieCard imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
              <Overlay>
                <p>Ficção científica, Ação, Drama</p>
                <Classification>
                  <p>Classification</p>
                  <Stars>
                    {starsCount.map(() => (
                      <img src={IMAGES.star} alt="Estrela de classificação" />
                    ))}
                  </Stars>
                </Classification>
              </Overlay>
            </PopularMovieCard>

            <div>offset to scale last</div>
          </PopularMovieList>
        </PopularMovies>

        <MoreMovies>
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
                Em uma época em que os monstros andam na Terra, a luta da
                humanidade por seu futuro coloca Godzilla e Kong em rota de
                colisão que verá as duas forças mais poderosas da natureza no
                planeta se confrontarem em uma batalha espetacular para as
                idades. Enquanto Monarch embarca em uma missão perigosa...
              </p>
            </CenterContent>
            <RightSide>
              <p>Ficção científica, Ação, Drama</p>

              <Classification>
                <p>Classification</p>
                <Stars>
                  {starsCount.map(() => (
                    <img src={IMAGES.star} alt="Estrela de classificação" />
                  ))}
                </Stars>
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
                Em uma época em que os monstros andam na Terra, a luta da
                humanidade por seu futuro coloca Godzilla e Kong em rota de
                colisão que verá as duas forças mais poderosas da natureza no
                planeta se confrontarem em uma batalha espetacular para as
                idades. Enquanto Monarch embarca em uma missão perigosa...
              </p>
            </CenterContent>
            <RightSide>
              <p>Ficção científica, Ação, Drama</p>

              <Classification>
                <p>Classification</p>
                <Stars>
                  {starsCount.map(() => (
                    <img src={IMAGES.star} alt="Estrela de classificação" />
                  ))}
                </Stars>
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
                Em uma época em que os monstros andam na Terra, a luta da
                humanidade por seu futuro coloca Godzilla e Kong em rota de
                colisão que verá as duas forças mais poderosas da natureza no
                planeta se confrontarem em uma batalha espetacular para as
                idades. Enquanto Monarch embarca em uma missão perigosa...
              </p>
            </CenterContent>
            <RightSide>
              <p>Ficção científica, Ação, Drama</p>

              <Classification>
                <p>Classification</p>
                <Stars>
                  {starsCount.map(() => (
                    <img src={IMAGES.star} alt="Estrela de classificação" />
                  ))}
                </Stars>
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
        </MoreMovies>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
