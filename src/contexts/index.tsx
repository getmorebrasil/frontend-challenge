import { QueryClient, QueryClientProvider } from 'react-query'
import ThemeProvider from './theme'
import MovieProvider from './movie'
import GenreProvider from './genre'

const queryClient = new QueryClient()

const AppProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GenreProvider>
        <MovieProvider>{children}</MovieProvider>
      </GenreProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
export default AppProvider
