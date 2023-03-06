import axios from 'axios';

const instance = axios.create({
   //baseURL: 'http://localhost:3002/api',
   baseURL: 'https://rental-property-api.vercel.app/api',
});

instance.interceptors.request.use((config) => {
   config.headers.Authorization = window.localStorage.getItem('token');

   return config;
})

export default instance;