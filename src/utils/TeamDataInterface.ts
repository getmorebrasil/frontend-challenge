export default interface TeamData {
  position: number;
  team: {
    id: number;
    name: string;
    crestUrl: string;
  };
  points: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
