import ThemeProvider from "./theme";
import MovieProvider from "./movie";
import GenreProvider from "./genre";

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <GenreProvider>
      <MovieProvider>{children}</MovieProvider>
    </GenreProvider>
  </ThemeProvider>
);
export default AppProvider;
