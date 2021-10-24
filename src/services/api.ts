import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://api.football-data.org/',
  headers: { 'X-Auth-Token': 'a1071d19f7654c26880cf129ec49b524' },
});

export default api;
