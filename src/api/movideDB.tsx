import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1ad9a18633d96ff8b3d320e8f17e71cb',
    language: 'es-ES',
  }
});

export default movieDB;