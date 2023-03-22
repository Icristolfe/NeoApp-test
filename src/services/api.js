import axios from 'axios';
import CryptoJS from 'crypto-js';


const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

const publicKey = '02059c8fd2064890e537f41a8d302fbb';
const privateKey = 'b7a0a8ca8f214d7e4356a271855a52e2469de5e8';

api.interceptors.request.use(config => {
  const ts = new Date().getTime();
  config.params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash: CryptoJS.MD5(ts + privateKey + publicKey).toString(),
  };
  return config;
});

export default api;
