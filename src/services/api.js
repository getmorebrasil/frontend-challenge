import axios from 'axios';

const api = axios.create({
    baseURL: 'http://challenge.getmore.com.br/',
});

export default api;