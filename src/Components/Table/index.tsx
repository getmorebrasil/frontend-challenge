import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import CompetitionContext from '../../Context/CompetitionContext';

import {
  Grid,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

import NameTeamRegex from '../../utils/NameTeamRegex';
import TeamData from '../../utils/TeamDataInterface';
import getCompetitionName from '../../utils/getCompetitionName';
import isValidId from '../../utils/isValidId';

import { StyledTableContainer } from './style';
import { useRouter } from 'next/router';

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

const Table: React.FC = () => {
  // const {
  //   competitionId,
  //   setIsErrorRequest,
  //   setMatchday,
  //   standings,
  //   setStandings,
  // } = useContext(CompetitionContext);

  // const { query } = useRouter();

  // useEffect(() => {
  //   setIsErrorRequest(false);

  //   console.log('Chegou ao effect table');

  //   // if (!query.id) return;

  //   // if (!isValidId(competitionId)) {
  //   //   setIsErrorRequest(true);
  //   //   return;
  //   // }

  //   (async () => {
  //     try {
  //       const { data }: StandingData = await api.get(
  //         `/v2/competitions/${competitionId}/standings`
  //       );

  //       setMatchday(data.season.currentMatchday);
  //       setStandings(data.standings[0].table);
  //       console.log(data);
  //     } catch (error) {
  //       setIsErrorRequest(true);
  //     }
  //   })();
  // }, []);

  console.log('AA');

  return (
    <Grid item>
      {/* <Typography variant="h1">{getCompetitionName(competitionId)}</Typography> */}

      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>TIME</TableCell>
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
            <tr> add</tr>
            {/* {standings.map((team: TeamData) => (
              <TableRow key={team.team.id}>
                <TableCell>
                  <div className="positionContainer">{team.position}</div>
                </TableCell>
                <TableCell className="team-name-td">
                  {NameTeamRegex(team.team.name)}
                </TableCell>
                <TableCell>{team.points}</TableCell>
                <TableCell>{team.playedGames}</TableCell>
                <TableCell>{team.won}</TableCell>
                <TableCell>{team.draw}</TableCell>
                <TableCell>{team.lost}</TableCell>
                <TableCell>{team.goalDifference}</TableCell>
                <TableCell>{team.goalsFor}</TableCell>
                <TableCell>{team.goalsAgainst}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Grid>
  );
};

export default Table;
