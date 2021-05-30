import AuthProvider from './auth'
import ThemeProvider from './theme'
import MovieProvider from './movie'
import GenreProvider from './genre'

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <GenreProvider>
        <MovieProvider>{children}</MovieProvider>
      </GenreProvider>
    </AuthProvider>
  </ThemeProvider>
)
export default AppProvider
