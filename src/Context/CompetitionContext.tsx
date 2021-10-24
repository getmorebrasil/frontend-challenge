import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';

interface CompetitionContextData {
  idCompetitionDefault: string;
  toggleIdCompetitionDefault: (id: string) => void;
}

const ThemeContext = createContext<CompetitionContextData>(
  {} as CompetitionContextData
);

export const useCompetitionContext = () => useContext(ThemeContext);

export const IdCompetitionProvider: React.FC = ({ children }) => {
  const [idCompetitionDefault, setIdCompetitionDefault] = useState('');

  useEffect(() => {
    setIdCompetitionDefault(String(Cookies.get('idCompetitionDefault-getmore')));
  });

  const toggleIdCompetitionDefault = useCallback(
    (id: string) => {
      setIdCompetitionDefault(id);
      Cookies.set('idCompetitionDefault-getmore', id);
    },
    [idCompetitionDefault]
  );

  return (
    <ThemeContext.Provider
      value={{ idCompetitionDefault, toggleIdCompetitionDefault }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default IdCompetitionProvider;
