
import axios from 'axios'; 

const request = axios.create({
  timeout: 10000,
});

export default request;