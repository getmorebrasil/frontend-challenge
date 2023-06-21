const getCompetitionName = (id: string) => {
  switch (id) {
    case '2013':
      return 'Brasileirão';
      break;
    case '2014':
      return 'La Liga';
      break;
    case '2019':
      return 'Série A TIM';
      break;
    case '2021':
      return 'Premier League';
      break;
  }
};

export default getCompetitionName;
