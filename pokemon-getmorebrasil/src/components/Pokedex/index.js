import React, { useState, useEffect } from "react";
import { NavBar, useStyles, CardMediaUI, PokedexDiv } from "./styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import MenuLogo from "../MenuLogo";
import { PokemonSelector } from "@charkour/react-reactions";
import LinearProgressBar from "../ProgressBar";
import { fetchApi } from "../api";

const PokeDex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchApi.then((response) => {
      const { data } = response;
      const { results } = data;
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        };
      });
      setPokemonData(newPokemonData);
    });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    const clicked = () => {
      history.push(`/${id}`);
    };

    return (
      <Grid item xs={4} key={pokemonId}>
        <Card onClick={clicked}>
          <CardMediaUI className={classes.cardMedia} image={sprite} />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const pokemonMap = Object.keys(pokemonData).map(
    (pokemonId) =>
      pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId)
  );

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const pokemonCard = pokemonData ? (
    <Grid container spacing={2} className={classes.cardContainer}>
      {pokemonMap}
    </Grid>
  ) : (
    <LinearProgressBar />
  );

  return (
    <>
      <NavBar id="calculator">
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography 
              className={classes.title} 
              variant="h6" noWrap>
              <MenuLogo />
            </Typography>
            <div className={classes.searchContainer}>
              <TextField
                className={classes.searchInput}
                onChange={handleSearchChange}
                label="Search"
                variant="standard"
              />
            </div>
            <PokemonSelector reactions={["love"]} />
          </Toolbar>
        </AppBar>
      </NavBar>
      <PokedexDiv>{pokemonCard}</PokedexDiv>
    </>
  );
};

export default PokeDex;
