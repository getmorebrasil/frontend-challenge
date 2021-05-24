import { Container, RolesList, Artist, Overlay } from "./styles";

const PopularMovies: React.FC = () => {
  return (
    <Container>
      <h2>Starring Roles</h2>
      <RolesList>
        <Artist imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <p>Lewis Tan</p>
            <p>Cole Young</p>
          </Overlay>
        </Artist>
        <Artist imagePath="/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg">
          <Overlay>
            <p>Lewis Tan</p>
            <p>Cole Young</p>
          </Overlay>
        </Artist>
      </RolesList>
    </Container>
  );
};

export default PopularMovies;
