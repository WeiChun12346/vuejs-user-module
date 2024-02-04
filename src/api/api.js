import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'service-key': 'TESTING_ABC',
  }
});

export default instance;
