import React from "react";
import GlobalStyle from './styles';
import HeroSection from './components/HeroSection';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import FooterBar from './components/FooterBar';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyle />
    <HeroSection />
    <Switch>
        <Route path="/" exact render={(props) => <Pokedex {...props} />} />
        <Route
          path="/:pokemonId"
          exact
          render={(props) => <Pokemon {...props} />}
        />
    </Switch>
    <FooterBar />    
    </>
  );
}

export default App;
