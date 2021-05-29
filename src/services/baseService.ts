/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios'

export const client = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'pt-BR' },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzA4ZDQ0OWNkMTFjYzFjZTY1OThhYjI0NmNlMmUxZCIsInN1YiI6IjYwYTkwZDljZTgxMzFkMDAyYTY4MDQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O7BM5rXkrAiNiZEGnmkG1Vpj3uKTGSb84D3TFU_tud4',
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const mergeSuccess = (data: any, status: number) => ({
  data,
  status,
  success: status === 200,
})

export const mergeError = (error: any) => ({
  success: false,
  status: error.response.status,
  errors: error.response.data.errors,
})
