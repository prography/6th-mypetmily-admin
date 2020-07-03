import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://api.mypetmily.net`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
