import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});


export const api = (url, options = {}) => {
  return instance({
    url,
    ...options
  });
};
