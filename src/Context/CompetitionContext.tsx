import React, { createContext, useContext, useEffect, useState } from 'react';
import TeamData from '../utils/TeamDataInterface';

interface CompetitionContextData {
  matchday: number;
  setMatchday: React.Dispatch<React.SetStateAction<number>>;
  isLoadingEnd: boolean;
  setIsTableReady: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMatchesReady: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorRequest: boolean;
  setIsErrorRequest: React.Dispatch<React.SetStateAction<boolean>>;
  standings: Array<TeamData>;
  setStandings: React.Dispatch<React.SetStateAction<Array<TeamData>>>;
}

const CompetitionContext = createContext<CompetitionContextData>(
  {} as CompetitionContextData
);

export const useTheme = () => useContext(CompetitionContext);

export const CompetitionProvider: React.FC = ({ children }) => {
  const [matchday, setMatchday] = useState(0);
  const [isLoadingEnd, setIsLoadingEnd] = useState(false);
  const [isTableReady, setIsTableReady] = useState(false);
  const [isMatchesReady, setIsMatchesReady] = useState(false);
  const [isErrorRequest, setIsErrorRequest] = useState(false);
  const [standings, setStandings] = useState<Array<TeamData>>([]);

  useEffect(() => {
    if (isTableReady && isMatchesReady) setIsLoadingEnd(true);
  }, [isTableReady, isMatchesReady]);

  return (
    <CompetitionContext.Provider
      value={{
        matchday,
        setMatchday,
        isLoadingEnd,
        setIsTableReady,
        setIsMatchesReady,
        isErrorRequest,
        setIsErrorRequest,
        standings,
        setStandings,
      }}
    >
      {children}
    </CompetitionContext.Provider>
  );
};

export default CompetitionContext;
