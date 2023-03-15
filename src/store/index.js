import { createStore } from 'vuex';
import axios from "axios";
const LearnerPortal = "https://learner-portal-8hg3.onrender.com"


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    showSpinner:true,
    showLoading: true,
    asc: true,
    cUser: null
  },
  getters: {
    fetchUsers: (state) => state.users,
    fetchUser: (state) => state.user,
    fetchProducts: (state) => state.products,
    fetchProduct: (state) => state.product
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      state.user = user;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setSingleProduct(state, product) {
      state.product = product;
    },
    sortProductsPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse()
      }
      state.asc = !state.asc
    },
  },
  actions: {
    async registerUser(context, payload) {
      const res = await axios.post(`${LearnerPortal}register`, payload)
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
    async loginUser(context, payload) {
      const res = await axios.post(`${LearnerPortal}login`, payload)
      const {result, msg, err } = await res.data;
      if (result) {
        context.commit('cUser', result)
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
  },
  modules: {
  }
})
