
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export default instance;
