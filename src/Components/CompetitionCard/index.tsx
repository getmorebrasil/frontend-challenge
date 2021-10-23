import { Button } from '@material-ui/core';

import { Container } from './style';

const CompetitionCard: React.FC = () => {
  return (
    <Container>
      <img src="/assets/logos/laLigaLogo.svg" alt="La Liga" />
      <Button>La Liga - ESP</Button>
    </Container>
  );
};

export default CompetitionCard;
