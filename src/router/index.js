import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactsView"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/SingleProductView")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView")
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../components/UpdateProduct")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/UserProfileView")
  },
  {
    path: "/register-admin",
    name: "register-admin",
    component: () => import("../views/RegisterAdmin")
  },
  {
    path: "/login-admin",
    name: "login-admin",
    component: () => import("../views/LoginAdminView")
  },
  {
    path: "/lcontacts",
    name: "lcontacts",
    component: () => import("../views/loggedContView")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;