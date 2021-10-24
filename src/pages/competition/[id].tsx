import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import api from '../../services/api';
import { useCompetitionContext } from '../../Context/CompetitionContext';

import { IoIosArrowBack } from 'react-icons/io';

import { Box } from '@material-ui/core';

import TeamData from '../../utils/TeamDataInterface';
import NameTeamRegex from '../../utils/NameTeamRegex';
import MatchData from '../../utils/MatchData';

import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import Header from '../../Components/Header';
import HomeButton from '../../Components/HomeButton';
import MatchesContainer from '../../Components/MatchesContainer';

import {
  Container,
  SubHeader,
  Content,
  StyledTableContainer,
  MatchesTable,
} from '../../styles/pages/CompetitionPage';

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

interface MatchesData {
  data: {
    matches: [];
  };
}

const CompetitionPage: React.FC = () => {
  const { query } = useRouter();
  const { idCompetitionDefault } = useCompetitionContext();

  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(0);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const idCompetition = query.id || idCompetitionDefault;

  const urlCompetitions = `/v2/competitions/${idCompetition}/standings`;
  const isValidId =
    idCompetition === '2013' ||
    idCompetition === '2014' ||
    idCompetition === '2019' ||
    idCompetition === '2021';

  useEffect(() => {
    if (!isValidId) {
      setIsErrorRequest(true);
      return;
    }

    (async () => {
      try {
        const { data }: StandingData = await api.get(urlCompetitions);
        setCurrentMatchday(data.season.currentMatchday);
        setStandings(data.standings[0].table);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [idCompetition]);

  useEffect(() => {
    if (!currentMatchday) return;

    (async () => {
      try {
        const { data }: MatchesData = await api.get(
          `v2/competitions/${idCompetition}/matches?matchday=${currentMatchday}`
        );
        setMatches(data.matches);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [currentMatchday]);

  const handlePreviousMatchday = useCallback(() => {
    if (currentMatchday === 1) return;
    setCurrentMatchday((prevState) => prevState! - 1);
  }, []);

  const handleNextMatchday = useCallback(() => {
    if (currentMatchday === 38) return;
    setCurrentMatchday((prevState) => prevState! + 1);
  }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />

        <SubHeader>
          <Typography variant="h4">
            {
              {
                '2013': 'Brasileirão',
                '2014': 'La Liga',
                '2019': 'Série A TIM',
                '2021': 'Premier League',
              }[idCompetitionDefault]
            }
          </Typography>
        </SubHeader>

        <Content container justifyContent="space-around">
          <Grid item>
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
                  {standings.map((team: TeamData) => (
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
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </Grid>

          <Grid item>
            <MatchesTable>
              <Box className="header-matches-table">
                <IconButton onClick={() => handlePreviousMatchday()}>
                  <IoIosArrowBack />
                </IconButton>

                <Typography variant="h5">RODADA {currentMatchday}</Typography>

                <IconButton onClick={() => handleNextMatchday()}>
                  <IoIosArrowBack />
                </IconButton>
              </Box>
              <Box className="matches-container">
                {matches.map((match: MatchData) => {
                  const homeTeamLogo: TeamData[] = standings.filter(
                    (team: TeamData) => team.team?.id === match.homeTeam.id
                  );

                  const awayTeamLogo: TeamData[] = standings.filter(
                    (team: TeamData) => team.team?.id === match.awayTeam.id
                  );

                  return (
                    <MatchesContainer
                      key={match.id}
                      matchesData={match}
                      homeTeamLogo={homeTeamLogo}
                      awayTeamLogo={awayTeamLogo}
                    />
                  );
                })}
              </Box>
            </MatchesTable>
          </Grid>
        </Content>

        <HomeButton />
      </Container>
    </div>
  );
};

export default CompetitionPage;
