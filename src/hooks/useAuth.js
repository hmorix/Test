// frontend/src/hooks/useAuth.js

import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'https://api.fitnesspro.com';

const useAuth = () => {
  const token = ref(localStorage.getItem('token'));
  const user = ref(null);
  const isLoggedIn = computed(() => token.value !== null);
  const router = useRouter();

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      token.value = response.data.token;
      localStorage.setItem('token', token.value);
      user.value = jwtDecode(token.value);
      router.push({ name: 'home' });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    token.value = null;
    localStorage.removeItem('token');
    user.value = null;
    router.push({ name: 'login' });
  };

  const register = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, credentials);
      token.value = response.data.token;
      localStorage.setItem('token', token.value);
      user.value = jwtDecode(token.value);
      router.push({ name: 'home' });
    } catch (error) {
      console.error(error);
    }
  };

  watch(token, (newToken) => {
    if (newToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  });

  return {
    token,
    user,
    isLoggedIn,
    login,
    logout,
    register,
  };
};

export default useAuth;