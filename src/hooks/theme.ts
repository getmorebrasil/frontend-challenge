import { useContext } from 'react';

import { ThemeContext } from "../contexts/theme";
import { IThemeContextData } from "../libs/interfaces/contexts";

export default function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
}
