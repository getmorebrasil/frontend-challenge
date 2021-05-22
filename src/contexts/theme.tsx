import React, { useCallback, useState } from "react";
import { IThemeContextData, Theme } from "../libs/interfaces/contexts";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";

export const ThemeContext = React.createContext<IThemeContextData>(
  {} as IThemeContextData
);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === "dark") {
      setTheme(lightTheme);
    } else if (theme.name === "light") {
      setTheme(darkTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
