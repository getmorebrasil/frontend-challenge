import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import League from './League';

import LeagueData from '../../utils/LeagueData';
import listLeagues from './mock';

import { Container } from './style';

export const Leagues: React.FC = () => {
  useEffect(() => {
    const listleague: LeagueData[] = listLeagues();

    setLeagues(listleague);
  }, []);

  const [leagues, setLeagues] = useState<LeagueData[]>();

  return (
    <Container
      container
      spacing={10}
      justifyContent="center"
      alignItems="center"
    >
      {leagues?.map((league) => (
        <League key={league.id} league={league} />
      ))}
    </Container>
  );
};

export default Leagues;
