import { createStore } from "vuex";
import axios from "axios";
import { useCookies } from "vue3-cookies";
// const LearnerPortal = "http://localhost:7020/";
const LearnerPortal = "https://learner-portal-8hg3.onrender.com/";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    userLogged: null,
    adminLogged: null,
    admins: null,
    admin: null,
    products: null,
    product: null,
    cart: null,
    cartItem: null,
    token: null,
    showSpinner: true,
    showLoading: true,
    asc: true,
    message: null,
    page: null,
  },
  getters: {
    fetchUsers: (state) => state.users,
    fetchUser: (state) => state.user,
    fetchProducts: (state) => state.products,
    fetchProduct: (state) => state.product,
    fetchAdmin: (state) => state.admin,
    fetchAdmins: (state) => state.admins,
  },
  mutations: {
    setAdmins(state, admins) {
      state.admins = admins;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },
    logAdmin(state, adminLogged) {
      state.adminLogged = adminLogged;
    },
    setUsers(state, users) {
      state.users = users;
    },

    logUser(state, userLogged) {
      state.userLogged = userLogged;
    },

    setMessage(state, value) {
      state.message = value;
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

    setCart(state, cart) {
      state.cart = cart;
    },

    setCartItem(state, cartItem) {
      state.cartItem = cartItem;
    },

    sortProducts: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    async registerUser(context, data) {
      const res = await axios.post(`${LearnerPortal}register`, data);
      console.log("Register a new user: ", res);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async login(context, logger) {
      const res = await axios.post(`${LearnerPortal}login`, logger);
      const { result, jwToken, msg, err } = await res.data;
      if (result) {
        context.commit("logUser", result);
        console.log("Store: ", result);
        cookies.set("green_light", jwToken);
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchUsers(context) {
      const res = await axios.get(`${LearnerPortal}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${LearnerPortal}user/${id}`);
      console.log(id);
      const { result, err } = await res.data;
      console.log(result);
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateUser(context, id) {
      const res = await axios.put(`${LearnerPortal}user/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${LearnerPortal}user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setUsers", err);
      }
    },
    async registerAdmin(context, data) {
      const res = await axios.post(`$[LearnerPortal]register/admin`, data);
      console.log("Register a new Admin: ", res);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async logAdmin(context, logger) {
      const res = await axios.post(`${LearnerPortal}login/admin`, logger);
      const { result, msg, err } = await res.data;
      if (result) {
        context.commit("logAdmin", result);
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchAdmins(context) {
      const res = await axios.get(`${LearnerPortal}admins`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setAdmins", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateAdmin(context, id) {
      const res = await axios.put(`${LearnerPortal}admin/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteAdmin(context, id) {
      const res = await axios.delete(`${LearnerPortal}admin/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${LearnerPortal}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${LearnerPortal}product/${id}`);
      console.log(id);
      const { result, err } = await res.data;
      console.log(result);
      if (result) {
        context.commit("setSingleProduct", result[0]);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addProduct(context) {
      const res = await axios.post(`${LearnerPortal}product`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateProduct(context, id) {
      const res = await axios.put(`${LearnerPortal}product/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${LearnerPortal}product/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchCart(context, id) {
      const res = await axios.get(`${LearnerPortal}/user/${id}/carts`);
      const { results, err } = await res.data;
      console.log(results);
      if (results) {
        context.commit("setCart", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    // async fetchCartItem(context){
    //   const res = await axios.get(`${LearnerPortal}/user/:id/cart`);
    //   const {result, err} = await res.data;
    //   console.log(result);
    //   if(result){
    //     context.commit("setCartItem", result[0]);
    //   }else{
    //     context.commit("setMessage", err);
    //   }
    // },
    async addCart(context, payload) {
      const res = await axios.post(`${LearnerPortal}/user/${payload.id}/cart`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateCart(context, id) {
      const res = await axios.put(`${LearnerPortal}/user/${id}/cart/${id}`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteCart(context, id) {
      const res = await axios.delete(`${LearnerPortal}/user/${id}/carts`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
  },
  modules: {},
});
