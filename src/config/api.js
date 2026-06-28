// frontend/src/config/api.js

import axios from 'axios';

const apiConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL || 'https://api.fitnesspro.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiClient = axios.create(apiConfig);

apiClient.interceptors.push({
  request: (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error: (error) => {
    if (error.response.status === 401) {
      // Handle token expiration or invalid token
      localStorage.removeItem('token');
      // Redirect to login page or handle accordingly
    }
    return Promise.reject(error);
  },
});

export default apiClient;