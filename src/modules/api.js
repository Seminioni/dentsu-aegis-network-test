import axios from 'redaxios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});


export const api = (url, options = {}) => {
  return instance({
    url,
    ...options
  });
};
