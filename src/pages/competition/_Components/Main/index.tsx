import Matches from './Components/Matches';
import Standings from './Components/Standings';

import { Container } from './style';

const Main: React.FC = () => {
  return (
    <Container container justifyContent="space-around">
      <Standings />

      <Matches />
    </Container>
  );
};

export default Main;
