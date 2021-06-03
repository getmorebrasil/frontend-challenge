import { useCallback, useState, createContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { IThemeContextData, ITheme } from '../libs/interfaces/contexts'
import { darkTheme, lightTheme } from '../styles/themes'

export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(darkTheme)

  const toggleTheme = useCallback(() => {
    if (theme.name === 'dark') {
      setTheme(lightTheme)
    } else if (theme.name === 'light') {
      setTheme(darkTheme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
