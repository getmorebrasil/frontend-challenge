import AppProvider from "./contexts";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
