import api from '../../../services/api';
import { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, matchday } = req.query;

  (async () => {
    try {
      const { data }: StandingData = await api.get(
        `/v2/competitions/${id}/matches?matchday=${matchday}`
      );

      res.status(200).send(data);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  })();
}
