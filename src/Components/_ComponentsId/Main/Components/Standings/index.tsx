import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import CompetitionContext from '../../../../../Context/CompetitionContext';
import api from '../../../../../services/api';

import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core';

import Team from './Components/Team';
import Statistics from './Components/Statistics';

import getCompetitionName from '../../../../../utils/getCompetitionName';
import isValidId from '../../../../../utils/isValidId';
import TeamData from '../../../../../utils/TeamDataInterface';

import { Container, Standing } from './style';

interface StandingData {
  data: {
    season: {
      currentMatchday: number;
    };

    standings: {
      [x: number]: {
        table: [];
      };
    };
  };
}

const Standings: React.FC = () => {
  const { query, isReady } = useRouter();

  const {
    setIsErrorRequest,
    setMatchday,
    setIsTableReady,
    standings,
    setStandings,
  } = useContext(CompetitionContext);

  useEffect(() => {
    if (!isReady) return;

    setIsErrorRequest(false);

    if (!isValidId(String(query.id))) {
      setIsErrorRequest(true);
      return;
    }

    (async () => {
      try {
        const { data }: StandingData = await api.get(
          `/v2/competitions/${query.id}/standings`
        );

        setMatchday(data.season.currentMatchday);
        setStandings(data.standings[0].table);
        setIsTableReady(true);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [isReady]);

  return (
    <Container item>
      <Typography variant="h4">
        {getCompetitionName(String(query.id))}
      </Typography>

      <Standing>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>TIME</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {standings.map((team: TeamData) => (
              <Team key={team.team.id} team={team} />
            ))}
          </TableBody>
        </Table>

        <Box style={{ overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>PG</TableCell>
                <TableCell>P</TableCell>
                <TableCell>V</TableCell>
                <TableCell>E</TableCell>
                <TableCell>D</TableCell>
                <TableCell>GP</TableCell>
                <TableCell>GC</TableCell>
                <TableCell>SG</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {standings.map((team: TeamData) => (
                <Statistics key={team.team.id} team={team} />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Standing>
    </Container>
  );
};

export default Standings;
