import React from 'react';
import Link from 'next/link';
import { Box, Button, CardActions, Grid } from '@material-ui/core';

import LeagueData from '../../../utils/LeagueData';

import { Container } from './style';

interface LeagueProps {
  league: LeagueData;
}

const League = ({ league }: LeagueProps) => (
  <Grid item>
    <Link href={league.apiUrl}>
      <Container>
        <Button id="external-button">
          <img src={league.logoUrl} alt={league.name} />

          <CardActions>
            <Box id="internal-button">{league.name}</Box>
          </CardActions>
        </Button>
      </Container>
    </Link>
  </Grid>
);

export default League;
