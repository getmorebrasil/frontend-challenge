import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { Container } from './style';

const Saudation: React.FC = () => (
  <Container container justifyContent="center" alignItems="center">
    <Grid item md={12} lg={6} id="saudation-container">
      <Typography variant="h2">
        Seja bem-vindo(a) à <span>getmoreSports!</span>
      </Typography>

      <Typography variant="h4">
        Aqui você terá acesso a classificação e jogos atualizados dos principais
        campeonatos de futebol do mundo.
      </Typography>
    </Grid>

    <Grid
      className="grid-item-image"
      item
      md={12}
      lg={4}
      justifyContent="center"
      alignItems="center"
    >
      <img src="/assets/playerIllustration.svg" />
    </Grid>
  </Container>
);

export default Saudation;
