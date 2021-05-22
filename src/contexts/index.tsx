import ThemeProvider from "./theme";

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
export default AppProvider;
