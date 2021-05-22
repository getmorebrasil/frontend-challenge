const POPULARS = "movie/popular";
const TOP_RATED = "movie/top_rated";

function IMAGE(path: string) {
  return `https://image.tmdb.org/t/p/w500/${path}`;
}

function CREDITS(id: string) {
  return `movie/${id}/credits`;
}

function DETAIL(id: string) {
  return `movie/${id}`;
}

const URLS = {
  IMAGE,
  CREDITS,
  POPULARS,
  TOP_RATED,
  DETAIL
};

export default URLS;
