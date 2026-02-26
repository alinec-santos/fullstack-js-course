//url da api : https://api.themoviedb.org/3/movie/550?api_key=9b349d64ebdf9301c2b9eb5fe7c72e7f
//Base da url: https://api.themoviedb.org/3/


import axios from 'axios';
const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;