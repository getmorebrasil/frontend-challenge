import { Box } from '@material-ui/core';

import NameTeamRegex from '../../utils/NameTeamRegex';
import DataMatchRegex from '../../utils/DataMatchRegex';
import MatchData from '../../utils/MatchData';

import { Container } from './style';

interface MatchContainerProps {
  matchesData: MatchData;
  homeTeamLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
  awayTeamLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
}

export const MatchContainer: React.FC<MatchContainerProps> = ({
  matchesData,
  homeTeamLogo,
  awayTeamLogo,
}) => {
  return (
    <Container>
      <Box className="match-header">
        <span>{DataMatchRegex(matchesData.utcDate)}</span>
      </Box>
      <Box className="match-content">
        <Box className="emblem-container">
          <img
            src={
              homeTeamLogo[0]?.team?.crestUrl ||
              'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png'
            }
            alt={NameTeamRegex(matchesData.homeTeam.name)}
          />
        </Box>

        <Box className="score">
          <span>{NameTeamRegex(matchesData.homeTeam.name).slice(0, 3)}</span>
          <span className="score-number">
            {matchesData.score.fullTime.homeTeam}
          </span>
          <span>X</span>
          <span className="score-number">
            {matchesData.score.fullTime.awayTeam}
          </span>
          <span>{NameTeamRegex(matchesData.awayTeam.name).slice(0, 3)}</span>
        </Box>

        <Box className="emblem-container">
          <img
            src={
              awayTeamLogo[0]?.team.crestUrl ||
              'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png'
            }
            alt={NameTeamRegex(matchesData.awayTeam.name)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MatchContainer;
