import { Typography } from '@material-ui/core';

import Leagues from '../Leagues';

import { Container } from './style';

const Main: React.FC = () => (
  <Container>
    <Typography variant="h4">Escolha aqui o campeonato desejado:</Typography>

    <Leagues />
  </Container>
);

export default Main;
