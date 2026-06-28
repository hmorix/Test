// frontend/src/config/constants.js

export const APP_CONSTANTS = {
  COLORS: {
    PRIMARY: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
    },
    SECONDARY: {
      50: '#F7F7F7',
      100: '#E5E5E5',
      200: '#D3D3D3',
      300: '#C2C2C2',
      400: '#B1B1B1',
      500: '#A0A0A0',
      600: '#8F8F8F',
    },
    SUCCESS: {
      50: '#C6F6D5',
      100: '#B2FFC9',
      200: '#8BC34A',
      300: '#66BB6A',
      400: '#4CAF50',
      500: '#3E8E41',
      600: '#2E7D32',
    },
    ERROR: {
      50: '#FFC5C5',
      100: '#FFA07A',
      200: '#FF8C69',
      300: '#FF69B4',
      400: '#FF3737',
      500: '#E91E63',
      600: '#C62828',
    },
  },
  API: {
    OPENAPI: '3.0.0',
    INFO: {
      TITLE: 'Fitness Pro API',
      DESCRIPTION: 'API for managing users and products',
      VERSION: '1.0.0',
    },
    SERVERS: [
      {
        URL: 'https://api.fitnesspro.com/v1',
      },
    ],
  },
  ROUTES: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    PRODUCTS: '/products',
    PRODUCT_DETAILS: '/products/:id',
    CART: '/cart',
    CHECKOUT: '/checkout',
  },
  STORAGE: {
    TOKEN: 'fitness_pro_token',
    CART: 'fitness_pro_cart',
  },
};