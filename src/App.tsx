import { BrowserRouter } from "react-router-dom";
import AppProvider from "./contexts";
import GlobalStyle from "./styles/global";
import Routes from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
