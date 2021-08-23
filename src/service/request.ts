
import axios from 'axios';

const request = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:3000',
});

export default request;
