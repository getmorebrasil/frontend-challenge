import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import Cookies from 'js-cookie';

import { dark, light } from '../styles/themes';
interface Theme {
  name: string;

  header: string;

  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;

  mainSectionBackground: string;

  primaryText: string;
  secondaryText: string;

  colors: {
    primary: string;
    secondary: string;
  };

  matchDate: string;
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light);

  useEffect(() => {
    setTheme(Cookies.get('theme-getmore') === 'dark' ? dark : light);
  });

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(dark);
      Cookies.set('theme-getmore', 'dark');
    } else if (theme.name === 'dark') {
      setTheme(light);
      Cookies.set('theme-getmore', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
