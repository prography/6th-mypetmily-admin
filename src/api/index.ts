import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://mypetmily-release.ap-northeast-2.elasticbeanstalk.com/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
