// frontend/src/store/index.js

import { createStore } from 'vuex'
import { colors } from '../design.json'
import { api } from '../api.json'

const store = createStore({
  state: {
    colors,
    api,
    user: null,
    token: localStorage.getItem('token'),
    products: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    REMOVE_TOKEN(state) {
      state.token = null
      localStorage.removeItem('token')
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await fetch(`${api.servers[0].url}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })
        const data = await response.json()
        commit('SET_TOKEN', data.token)
        commit('SET_USER', data.user)
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    },
    async logout({ commit }) {
      commit('REMOVE_TOKEN')
      commit('SET_USER', null)
    },
    async getProducts({ commit }) {
      try {
        const response = await fetch(`${api.servers[0].url}/products`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${this.state.token}` }
        })
        const data = await response.json()
        commit('SET_PRODUCTS', data)
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null
    },
    user(state) {
      return state.user
    },
    products(state) {
      return state.products
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
})

export default store