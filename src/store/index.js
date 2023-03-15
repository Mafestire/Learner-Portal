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
    async registerUser(context, data) {
      const res = await axios.post(`${LearnerPortal}register`, data)
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
    async loginUser(context, logger) {
      const res = await axios.post(`${LearnerPortal}login`, logger)
      const {result, msg, err } = await res.data;
      if (result) {
        context.commit('cUser', result)
        console.log(result);
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
  },
  modules: {
  }
})
