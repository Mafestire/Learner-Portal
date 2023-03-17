import { createStore } from "vuex";
import axios from "axios";
const LearnerPortal = "https://learner-portal-8hg3.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    admins: null,
    admin: null,
    products: null,
    product: null,
    token: null,
    showSpinner: true,
    showLoading: true,
    asc: true,
    message: null,
  },
  getters: {
    fetchUsers: (state) => state.users,
    fetchUser: (state) => state.user,
    fetchProducts: (state) => state.products,
    fetchProduct: (state) => state.product,
    fetchAdmin: (state) => state.admin,
    fetchAdmins: (state) => state.admins
  },
  mutations: {
    setAdmins(state, admins){
      state.admins = admins;
    },
    setAdmin(state, admin){
      state.admin = admin;
    },
    setUsers(state, users) {
      state.users = users;
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
    sortProductsPrice: (state) => {
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
    async loginUser(context, logger) {
      const res = await axios.post(`${LearnerPortal}login`, logger);
      const { result, msg, err } = await res.data;
      console.log("Store: ", result);
      if (result) {
        context.commit("setUser", result);
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
    async updateUser(context){
      const res = await axios.put(`${LearnerPortal}user/:id`);
      const { msg, err} = await res.data;
      if(msg){
        context.commit("setMessage", msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async deleteUser(context){
      const res = await axios.delete(`${LearnerPortal}user/:id`);
      const {msg, err} = await res.data;
      if(msg){
        context.commit("setMessage", msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async registerAdmin(context, data){
      const res = await axios.post(`$[LearnerPortal]register-admin`, data);
      console.log("Register a new Admin: ", res);
      const {msg, err} = await res.data;
      if(msg){
        context.commit("setMessage", msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async loginAdmin(context, logger){
      const res = await axios.post(`${LearnerPortal}login-admin`, logger);
      const {result, msg, err} = await res.data;
      if(result){
        context.commit("setAsmin", result);
        context.commit("setMessage", msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async fetchAdmins(context){
      const res = await axios.get(`${LearnerPortal}admins`);
      const {results, err} = await res.data;
      if(results){
        context.commit("setAdmins", results);
      }else{
        context.commit("setMessage", err);
      }
    },
    async updateAdmin(context){
      const res = await axios.put(`${LearnerPortal}admin/:id`);
      const {msg, err} = await res.data;
      if(msg){
        context.commit("setMessage", msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async deleteAdmin(context){
      const res = await axios.delete(`${LearnerPortal}admin/:id`);
      const {msg, err} = await res.data;
      if(msg){
        context.commit("setMessage", msg);
      }else{
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
    async addProduct(context) {
      const res = await axios.post(`${LearnerPortal}product`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateProduct(context) {
      const res = await axios.put(`${LearnerPortal}product/:id`);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteProduct(context) {
      const res = await axios.delete(`${LearnerPortal}product/:id`);
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
