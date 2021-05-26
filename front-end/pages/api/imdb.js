const API_KEY = "4ec327e462149c3710d63be84b81cf4f";
const API_URL = "https://api.themoviedb.org/3";

const BASIC_FETCH = async (endpoint) => {
  const REQ = await fetch(`${API_URL}${endpoint}`);
  const JSON = await REQ.json();
  return JSON;
};
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await BASIC_FETCH(
          `/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await BASIC_FETCH(
          `/trending/all/week?&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await BASIC_FETCH(
          `/movie/top_rated?&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await BASIC_FETCH(
          `/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await BASIC_FETCH(
          `/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await BASIC_FETCH(
          `/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await BASIC_FETCH(
          `/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await BASIC_FETCH(
          `/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movei":
          info = await BASIC_FETCH(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await BASIC_FETCH(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
