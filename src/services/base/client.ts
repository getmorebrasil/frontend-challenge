import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'pt-BR' },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzA4ZDQ0OWNkMTFjYzFjZTY1OThhYjI0NmNlMmUxZCIsInN1YiI6IjYwYTkwZDljZTgxMzFkMDAyYTY4MDQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O7BM5rXkrAiNiZEGnmkG1Vpj3uKTGSb84D3TFU_tud4',
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export default client
