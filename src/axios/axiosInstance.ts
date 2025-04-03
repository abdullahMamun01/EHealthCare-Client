import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://ehealth-care-delta.vercel.app/api/v1`,
  timeout: 10000, // Optional: Timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Add Auth Token from Redux Store
// axiosInstance.interceptors.request.use((config) => {
//     const state = store.getState(); // Get Redux state
//     const token = state.auth.token; // Get token from auth slice
  
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
  
//     return config;
//   }, (error) => Promise.reject(error));

export default axiosInstance;
