import AuthProvider from './auth'
import UserProvider from './user'
import ThemeProvider from './theme'
import MovieProvider from './movie'
import GenreProvider from './genre'

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <UserProvider>
        <GenreProvider>
          <MovieProvider>{children}</MovieProvider>
        </GenreProvider>
      </UserProvider>
    </AuthProvider>
  </ThemeProvider>
)
export default AppProvider
