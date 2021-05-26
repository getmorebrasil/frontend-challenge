import axios from 'axios';

const api = 'https://pokeapi.co/api/v2/'
const pokemonLimit = 'pokemon?limit=897';

export const fetchApi = axios.get(`${api}${pokemonLimit}`);
