export default interface MatchData {
  id: string;
  homeTeam: {
    id: number;
    name: string;
  };
  awayTeam: {
    id: number;
    name: string;
  };
  score: {
    fullTime: {
      awayTeam: 1;
      homeTeam: 1;
    };
  };
  matchday: number;
  utcDate: string;
}
