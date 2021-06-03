import AuthProvider from './auth'
import UserProvider from './user'
import ThemeProvider from './theme'

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  </ThemeProvider>
)
export default AppProvider
