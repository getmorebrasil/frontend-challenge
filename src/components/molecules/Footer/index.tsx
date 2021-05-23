import { Container } from "./styles";
import { FlexOffset } from "../../atoms";

const Header: React.FC = () => {
  return (
    <Container>
      <FlexOffset />
      <p>Todos os direitos reservados. getmovies</p>
    </Container>
  );
};

export default Header;
