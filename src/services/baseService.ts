import Axios from "axios";

export const client = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { language: 'pt-BR' },
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  },
});

export const mergeSuccess = (data: any, status: number) => {
  return {
    data,
    status,
    success: status === 200 ? true : false,
  };
}

export const mergeError = (error: any) => {
  return {
    success: false,
    status: error.response.status,
    errors: error.response.data.errors,
  };
}
