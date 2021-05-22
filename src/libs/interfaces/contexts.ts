
export interface IThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

export interface Theme {
  name: string;
  colors: {
    primary: string,
    secondary: string,
    neutralColor: string,
    contrastColor: string,
    background: string,
    border: string,
  }
}