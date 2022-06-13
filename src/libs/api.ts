import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.28.204.63:3333'
});
