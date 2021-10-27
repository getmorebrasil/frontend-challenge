import { useContext } from 'react';
import { Box } from '@material-ui/core';
import CompetitionContext from '../../../../../../Context/CompetitionContext';

import NameTeamRegex from '../../../../../../utils/NameTeamRegex';
import DataMatchRegex from '../../../../../../utils/DataMatchRegex';
import MatchData from '../../../../../../utils/MatchData';
import TeamData from '../../../../../../utils/TeamDataInterface';

import { Container } from './style';

interface MatchProps {
  match: MatchData;
}

export const Match: React.FC<MatchProps> = ({ match }) => {
  const { standings } = useContext(CompetitionContext);

  const homeTeamLogo: TeamData[] = standings.filter(
    (team: TeamData) => team.team?.id === match.homeTeam.id
  );

  const awayTeamLogo: TeamData[] = standings.filter(
    (team: TeamData) => team.team?.id === match.awayTeam.id
  );

  const genericLogo =
    'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png';

  return (
    <Container>
      <Box className="match-header">
        <span>{DataMatchRegex(match.utcDate)}</span>
      </Box>
      <Box className="match-content">
        <Box className="emblem-container">
          <img
            src={homeTeamLogo[0]?.team?.crestUrl || genericLogo}
            alt={NameTeamRegex(match.homeTeam.name)}
          />
        </Box>

        <Box className="score">
          <span>{NameTeamRegex(match.homeTeam.name).slice(0, 3)}</span>
          <span className="score-number">{match.score.fullTime.homeTeam}</span>
          <span>X</span>
          <span className="score-number">{match.score.fullTime.awayTeam}</span>
          <span>{NameTeamRegex(match.awayTeam.name).slice(0, 3)}</span>
        </Box>

        <Box className="emblem-container">
          <img
            src={awayTeamLogo[0]?.team.crestUrl || genericLogo}
            alt={NameTeamRegex(match.awayTeam.name)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Match;
