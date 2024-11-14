/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
