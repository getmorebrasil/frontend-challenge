import { Box } from '@material-ui/core';

import { Container } from './style';

const Loader: React.FC = () => (
  <Container>
    <Box className="background">
      <img
        src="/assets/logos/getmoreOnlyLogo.svg"
        className="loader"
        alt="getmoreSports"
      />
    </Box>
  </Container>
);

export default Loader;
