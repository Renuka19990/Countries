import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://countries-6pto.onrender.com/',  // Base URL of your backend
});

export default instance;
