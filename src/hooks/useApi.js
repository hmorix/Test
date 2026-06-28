// frontend/src/hooks/useApi.js

import { ref, watch } from 'vue';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.fitnesspro.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const useApi = (endpoint, options = {}) => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchApi = async () => {
    isLoading.value = true;
    try {
      const response = await apiClient.get(endpoint, options);
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  watch(options, () => {
    fetchApi();
  });

  return { data, error, isLoading, fetchApi };
};

export default useApi;