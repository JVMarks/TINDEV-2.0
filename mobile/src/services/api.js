import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3388'
});

export default api;