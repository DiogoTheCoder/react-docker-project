import axios from 'axios/index';

export const appConfig = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://0.0.0.0:5000',
  timeout: 30000,
});
