const API_URL = "https://api.themoviedb.org/3/";

const API_KEY = "2c2fd8081560b42cbc58912cedecee23";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const NOW_PLAYING_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;


const TOP_RATED_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

const UPCOMMING_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;






const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=5`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w1280";

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  NOW_PLAYING_URL,
  FILTER_BASE_URL,
  TOP_RATED_URL,
  UPCOMMING_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,

};