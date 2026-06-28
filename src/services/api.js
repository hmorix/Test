import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'https://api.fitnesspro.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = store.getters.getToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const response = await api.post('/token/refresh/', {
      refresh: store.getters.getRefreshToken,
    });
    store.dispatch('updateToken', response.data.access);
    return response.data.access;
  } catch (error) {
    store.dispatch('logout');
    return Promise.reject(error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await api.post('/users/', data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get('/users/');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}/`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await api.put(`/users/${id}/`, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}/`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createProduct = async (data) => {
  try {
    const response = await api.post('/products/', data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/products/');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProduct = async (id, data) => {
  try {
    const response = await api.put(`/products/${id}/`, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}/`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};