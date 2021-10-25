import { useCallback, useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import api from '../../services/api';

import { IoIosArrowBack } from 'react-icons/io';

import { Box } from '@material-ui/core';

import TeamData from '../../utils/TeamDataInterface';
import NameTeamRegex from '../../utils/NameTeamRegex';
import MatchData from '../../utils/MatchData';

import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import Header from '../../Components/Header';
import MatchesContainer from '../../Components/MatchesContainer';
import HomeButton from '../../Components/HomeButton';
import ModalWarnings from '../../Components/ModalWarnings';
import ModalErrorRequisition from '../../Components/ModalErrorRequisition';

import {
  Container,
  SubHeader,
  Content,
  StyledTableContainer,
  MatchesTable,
  LoadingContainer,
  LoadingMatchesContainer,
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

  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(0);
  const [isErrorRequest, setIsErrorRequest] = useState(false);
  const [isCompleteMatchesTableContent, setisCompleteMatchesTableContent] =
    useState<Boolean>();

  const currentMatchdayRef = useRef<number>(0);

  const idCompetition = query.id;

  const competitionName = {
    '2013': 'Brasileirão',
    '2014': 'La Liga',
    '2019': 'Série A TIM',
    '2021': 'Premier League',
  }[String(idCompetition)];

  const urlCompetitions = `/v2/competitions/${idCompetition}/standings`;
  const isValidId =
    idCompetition === '2013' ||
    idCompetition === '2014' ||
    idCompetition === '2019' ||
    idCompetition === '2021';

  useEffect(() => {
    setIsErrorRequest(false);

    if (!idCompetition) return;

    if (!isValidId) {
      setIsErrorRequest(true);
      return;
    }

    (async () => {
      try {
        const { data }: StandingData = await api.get(urlCompetitions);
        setCurrentMatchday(data.season.currentMatchday);
        currentMatchdayRef.current = data.season.currentMatchday;
        setStandings(data.standings[0].table);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [idCompetition]);

  useEffect(() => {
    if (!idCompetition) return;

    if (!isValidId) {
      setIsErrorRequest(true);
      return;
    }

    if (!currentMatchday) return;

    setisCompleteMatchesTableContent(false);

    (async () => {
      try {
        const { data }: MatchesData = await api.get(
          `v2/competitions/${idCompetition}/matches?matchday=${currentMatchday}`
        );
        setMatches(data.matches);
        setisCompleteMatchesTableContent(true);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [currentMatchday]);

  const handlePreviousMatchday = useCallback(() => {
    if (currentMatchdayRef.current === 1) return;
    setCurrentMatchday((prevState) => prevState! - 1);
    currentMatchdayRef.current = currentMatchdayRef.current - 1;
  }, []);

  const handleNextMatchday = useCallback(() => {
    if (currentMatchdayRef.current === 38) return;
    setCurrentMatchday((prevState) => prevState! + 1);
    currentMatchdayRef.current = currentMatchdayRef.current + 1;
  }, []);

  return (
    <>
      {standings.length > 0 && matches.length > 0 ? (
        <div>
          <Head>
            <title>getmoreSports - {competitionName}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Container>
            <Header />

            <SubHeader>
              <Typography variant="h4">{competitionName}</Typography>
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
                            <div className="positionContainer">
                              {team.position}
                            </div>
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

                    <Typography variant="h5">
                      RODADA {currentMatchday}
                    </Typography>

                    <IconButton onClick={() => handleNextMatchday()}>
                      <IoIosArrowBack />
                    </IconButton>
                  </Box>

                  {isCompleteMatchesTableContent ? (
                    <Box className="matches-container">
                      {matches.map((match: MatchData) => {
                        const homeTeamLogo: TeamData[] = standings.filter(
                          (team: TeamData) =>
                            team.team?.id === match.homeTeam.id
                        );

                        const awayTeamLogo: TeamData[] = standings.filter(
                          (team: TeamData) =>
                            team.team?.id === match.awayTeam.id
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
                  ) : (
                    <LoadingMatchesContainer>
                      <Box className="background">
                        <img
                          src="/assets/logos/getmoreOnlyLogo.svg"
                          className="loader"
                          alt="getmoreSports"
                        />
                      </Box>
                    </LoadingMatchesContainer>
                  )}
                </MatchesTable>
              </Grid>
            </Content>

            {isErrorRequest && <ModalErrorRequisition isValidId={isValidId} />}

            <HomeButton />

            <ModalWarnings />
          </Container>
        </div>
      ) : (
        <LoadingContainer>
          {!isErrorRequest ? (
            <Box>
              <Header />

              <Box className="background">
                <img
                  src="/assets/logos/getmoreOnlyLogo.svg"
                  className="loader"
                  alt="getmoreSports"
                />
              </Box>
            </Box>
          ) : (
            <>
              <Header />

              <ModalErrorRequisition isValidId={isValidId} />
            </>
          )}
        </LoadingContainer>
      )}
    </>
  );
};

export default CompetitionPage;
