import { TableRow, TableCell } from '@material-ui/core';

import NameTeamRegex from '../../../../../../../utils/NameTeamRegex';
import TeamData from '../../../../../../../utils/TeamDataInterface';

interface TeamProps {
  team: TeamData;
}

const Team: React.FC<TeamProps> = ({ team }) => (
  <TableRow key={team.team.id}>
    <TableCell>
      <div className="positionContainer">{team.position}</div>
    </TableCell>
    <TableCell className="team-name-td">
      {NameTeamRegex(team.team.name)}
    </TableCell>
  </TableRow>
);

export default Team;
