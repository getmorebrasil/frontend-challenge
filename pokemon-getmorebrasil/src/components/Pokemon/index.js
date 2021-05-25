import React, { useState, useEffect } from "react";
import LinearProgressBar from "../ProgressBar";
import { PokemonProfile, Section, Container, Label, ButtonUI } from "./styles";
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Typography } from "@material-ui/core";
import axios from "axios";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState();


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        const { data } = response;
        console.log(response.data, "DataID");
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);


  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, types, abilities, stats } = pokemon;
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <>
        <Section id="pokedex">
          <Container>
            <Typography variant="h1">{`${name}`}</Typography>
            <PokemonProfile src={imageUrl} alt="Image" />
            <Typography variant="h3">Information</Typography>
            <Typography>Species: {species.name}</Typography>
            <Typography variant="h6"> Type:</Typography>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              return <Typography key={name}> {`${name}`}</Typography>;
            })}
            <Typography variant="h6"> Powers:</Typography>
            {abilities.map((abilityInfo) => {
              const { ability } = abilityInfo;
              const { name } = ability;
              return <Typography key={name}> {`${name}`}</Typography>;
            })}
            <Typography variant="h6"> Status:</Typography>
            {stats.map((statInfo) => {
              const { stat } = statInfo;
              const { name } = stat;
              const { base_stat } = statInfo;
              return (
                <Typography key={name}>
                  {" "}
                  {`${name}`}: {`${base_stat}`}
                </Typography>
              );
            })}
          </Container>
        </Section>
      </>
    );
  };
  return (
    <>
      {pokemon  === undefined && (
        <LinearProgressBar />
      )}
      {pokemon !== undefined &&
        pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && (
        <Typography> Pokemon not found!</Typography>
      )}
      {pokemon !== undefined && (
        <Label>
          <ButtonUI onClick={() => history.push("/")}>
            <BackspaceIcon />
          </ButtonUI>
        </Label>
      )}
    </>
  );
};

export default Pokemon;
