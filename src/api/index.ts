import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://api.mypetmily.net/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
