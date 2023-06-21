import { TableRow, TableCell } from '@material-ui/core';

import NameTeamRegex from '../../../../../../../utils/NameTeamRegex';
import TeamData from '../../../../../../../utils/TeamDataInterface';

interface StatisticsProps {
  team: TeamData;
}

export const Statistics: React.FC<StatisticsProps> = ({ team }) => (
  <TableRow>
    <TableCell>{team.points}</TableCell>
    <TableCell>{team.playedGames}</TableCell>
    <TableCell>{team.won}</TableCell>
    <TableCell>{team.draw}</TableCell>
    <TableCell>{team.lost}</TableCell>
    <TableCell>{team.goalDifference}</TableCell>
    <TableCell>{team.goalsFor}</TableCell>
    <TableCell>{team.goalsAgainst}</TableCell>
  </TableRow>
);

export default Statistics;
