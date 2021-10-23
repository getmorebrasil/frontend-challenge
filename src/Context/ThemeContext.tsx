import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

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
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light);

  const toggleTheme = useCallback(() => {
    console.log(theme.name);

    if (theme.name === 'light') {
      setTheme(dark);
    } else if (theme.name === 'dark') {
      setTheme(light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
