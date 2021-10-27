import { useContext, useEffect } from 'react';
import api from '../../../../services/api';
import { useRouter } from 'next/router';
import CompetitionContext from '../../../../Context/CompetitionContext';

import getCompetitionName from '../../../../utils/getCompetitionName';
import NameTeamRegex from '../../../../utils/NameTeamRegex';
import TeamData from '../../../../utils/TeamDataInterface';
import isValidId from '../../../../utils/isValidId';

import Matches from '../Matches';

import {
  Grid,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';

import { Container, StyledTableContainer } from './style';

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

const Main: React.FC = () => {
  const {
    setIsErrorRequest,
    setMatchday,
    setIsTableReady,
    standings,
    setStandings,
  } = useContext(CompetitionContext);

  const { query, isReady } = useRouter();

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
  }, [query.id, isReady]);

  return (
    <Container container justifyContent="space-around">
      <Grid item>
        <Typography variant="h4">
          {getCompetitionName(String(query.id))}
        </Typography>

        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>TIME</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {standings.map((team: TeamData) => (
                <TableRow key={team.team.id}>
                  <TableCell>
                    <div className="positionContainer">{team.position}</div>
                  </TableCell>
                  <TableCell className="team-name-td">
                    {NameTeamRegex(team.team.name)}
                  </TableCell>
                </TableRow>
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
                  <TableRow key={team.team.id}>
                    <TableCell>{team.points}</TableCell>
                    <TableCell>{team.playedGames}</TableCell>
                    <TableCell>{team.won}</TableCell>
                    <TableCell>{team.draw}</TableCell>
                    <TableCell>{team.lost}</TableCell>
                    <TableCell>{team.goalDifference}</TableCell>
                    <TableCell>{team.goalsFor}</TableCell>
                    <TableCell>{team.goalsAgainst}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </StyledTableContainer>
      </Grid>

      <Matches />
    </Container>
  );
};

export default Main;
