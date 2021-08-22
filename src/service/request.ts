
import axios from 'axios'; 

const request = axios.create({
  timeout: 10000,
  baseURL: 'localhost:3000',
});

export default request;
