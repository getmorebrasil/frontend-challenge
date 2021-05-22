import { Container, TimesIcon, Block } from "./styles";

const Splash: React.FC = () => {
  return (
    <Container>
      <Block>
        <TimesIcon size={140} />
        <h1>No Route Match!</h1>
        <p>You are trying to access a route that does not exists...</p>
      </Block>
    </Container>
  );
};

export default Splash;
