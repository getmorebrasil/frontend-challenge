import MatchData from './MatchDataInterface';

export default interface ContentMatchProps {
  matchesData: MatchData;
  teamHomeLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
  teamAwayLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
}
