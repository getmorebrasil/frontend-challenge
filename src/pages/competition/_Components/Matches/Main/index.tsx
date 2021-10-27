import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../../../../services/api';
import CompetitionContext from '../../../../../Context/CompetitionContext';

import { Box } from '@material-ui/core';
import Match from './Match';

import MatchData from '../../../../../utils/MatchData';
import isValidId from '../../../../../utils/isValidId';

interface MatchesData {
  data: {
    matches: [];
  };
}

const Main: React.FC = () => {
  const { setIsErrorRequest, matchday, setIsMatchesReady, standings } =
    useContext(CompetitionContext);

  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady || !matchday) return;

    if (!isValidId(String(query.id))) {
      setIsErrorRequest(true);
      return;
    }

    (async () => {
      try {
        const { data }: MatchesData = await api.get(
          `/v2/competitions/${query.id}/matches?matchday=${matchday}`
        );
        setIsMatchesReady(true);
        setMatches(data.matches);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, [matchday, query.id]);

  const [matches, setMatches] = useState([]);

  return (
    <Box>
      {matches.map((match: MatchData) => {
        return <Match key={match.id} match={match} />;
      })}
    </Box>
  );
};

export default Main;
